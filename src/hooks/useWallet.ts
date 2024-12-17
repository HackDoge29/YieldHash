import { useState, useCallback } from 'react';
import type { WalletInfo } from '../types/defi';

export const useWallet = () => {
  const [walletInfo, setWalletInfo] = useState<WalletInfo>({
    address: '',
    balance: '0',
    isConnected: false,
  });

  const connectWallet = useCallback(async () => {
    try {
      // Mock wallet connection - replace with actual Hedera wallet integration
      setWalletInfo({
        address: '0x1935527890ycedcf',
        balance: '1000',
        isConnected: true,
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWalletInfo({
      address: '',
      balance: '0',
      isConnected: false,
    });
  }, []);

  return { walletInfo, connectWallet, disconnectWallet };
};