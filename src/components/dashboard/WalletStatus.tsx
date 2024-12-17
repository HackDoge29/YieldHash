import React from 'react';
import { useWallet } from '../../hooks/useWallet';
import { Wallet } from 'lucide-react';

const WalletStatus: React.FC = () => {
  const { walletInfo, connectWallet, disconnectWallet } = useWallet();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      {!walletInfo.isConnected ? (
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
              {formatAddress(walletInfo.address)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-400 text-sm">Balance</span>
            <span className="text-white font-mono">{walletInfo.balance} HBAR</span>
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