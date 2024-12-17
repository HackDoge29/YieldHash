import React from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

interface WalletConnectProps {
  onConnect: () => void;
  isConnected: boolean;
  address: string;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onConnect, isConnected, address }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 p-4 rounded-xl border border-purple-500/20"
    >
      {!isConnected ? (
        <button
          onClick={onConnect}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <Wallet className="w-5 h-5" />
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Connected:</span>
          <span className="text-purple-400 font-mono">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default WalletConnect;