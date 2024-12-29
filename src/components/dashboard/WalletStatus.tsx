import React, { useState, useEffect } from 'react';
import { Wallet } from 'lucide-react';
import { DAppConnector, HederaSessionEvent, HederaJsonRpcMethod, HederaChainId } from '@hashgraph/hedera-wallet-connect';
import { LedgerId, Hbar, AccountId } from '@hashgraph/sdk';
import { Core } from '@walletconnect/core';
import { Web3Wallet } from '@walletconnect/web3wallet';

const WalletStatus: React.FC = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [connector, setConnector] = useState<DAppConnector | null>(null);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const projectId = '0a4f8da85fc03a4b02efcbf34fb6b818';
        if (!projectId) {
          throw new Error('WalletConnect project ID not found');
        }

        const core = new Core({
          projectId,
          relayUrl: 'wss://relay.walletconnect.org',
        });

        await Web3Wallet.init({
          core,
          metadata: {
            name: "YieldHash",
            description: "Sustainable yields through real-world asset integration on Hedera",
            url: window.location.origin,
            icons: ["https://your-icon-url.com/icon.png"]
          }
        });

        const dAppConnector = new DAppConnector(
          {
            name: "YieldHash",
            description: "Sustainable yields through real-world asset integration on Hedera",
            url: window.location.origin,
            icons: ["https://your-icon-url.com/icon.png"]
          },
          LedgerId.TESTNET,
          projectId, 
          Object.values(HederaJsonRpcMethod),
          [HederaSessionEvent.ChainChanged, HederaSessionEvent.AccountsChanged],
          [HederaChainId.Testnet],
          { relayUrl: 'wss://relay.walletconnect.org'}
        );

        await dAppConnector.init();
        setConnector(dAppConnector);
        setConnectionError(null);

        // Check for existing sessions
        const existingSessions = dAppConnector.walletConnectClient?.session.getAll() || [];
        if (existingSessions.length > 0) {
          const lastSession = existingSessions[existingSessions.length - 1];
          const accountId = lastSession.namespaces.hedera?.accounts[0].split(':')[2];
          if (accountId) {
            setWalletAddress(accountId);
            setIsWalletConnected(true);
          }
        }

      } catch (error) {
        console.error('Error initializing DAppConnector:', error);
        setConnectionError(error instanceof Error ? error.message : 'Failed to initialize wallet connection');
      }
    };

    init();

    return () => {
      if (connector) {
        connector.disconnectAll();
      }
    };
  }, []);


  const connectWallet = async () => {
    if (!connector) {
      setConnectionError('Wallet connector not initialized');
      return;
    }

    try {
      const session = await connector.openModal();
      if (!session.namespaces.hedera?.accounts?.[0]) {
        throw new Error('No Hedera account found in session');
      }
      const accountId = session.namespaces.hedera.accounts[0].split(':')[2];
      setWalletAddress(accountId);
      setIsWalletConnected(true);
      setConnectionError(null);
    } catch (error) {
      console.error('Wallet connection failed:', error);
      setConnectionError(error instanceof Error ? error.message : 'Failed to connect wallet');
    }
  };


  const checkBalance = async (accountId: string, currentConnector: DAppConnector) => {
    try {
      setIsLoading(true);
      const signer = currentConnector.signers[0];
      if (!signer) {
        throw new Error('No signer available');
      }

      const balance = await signer.getAccountBalance();
      const hbarBalance = Hbar.fromTinybars(balance.hbars.toTinybars());
      setWalletBalance(hbarBalance.toString());
    } catch (error) {
      console.error('Error checking balance:', error);
      setConnectionError('Failed to fetch wallet balance');
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = async () => {
    if (!connector) return;

    try {
      setIsLoading(true);
      await connector.disconnectAll();
      setIsWalletConnected(false);
      setWalletAddress('');
      setWalletBalance('0');
      setConnectionError(null);
    } catch (error) {
      console.error('Disconnect failed:', error);
      setConnectionError(error instanceof Error ? error.message : 'Failed to disconnect wallet');
    } finally {
      setIsLoading(false);
    }
  };


  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      {!isWalletConnected ? (
        <button
          onClick={connectWallet}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
        >
          <Wallet className="w-5 h-5" />
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm">Connected Wallet</span>
            <span className="text-white font-mono">
              {formatAddress(walletAddress)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-400 text-sm">Balance</span>
            <span className="text-white font-mono">{walletBalance} HBAR</span>
          </div>
          <button
            onClick={disconnectWallet}
            className="ml-4 text-gray-400 hover:text-white transition-colors"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletStatus;