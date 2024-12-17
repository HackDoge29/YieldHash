import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import type { TransactionHistory } from '../../types/defi';

interface TransactionListProps {
  transactions: TransactionHistory[];
  loading: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, loading }) => {
  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const getTransactionIcon = (type: TransactionHistory['type']) => {
    switch (type) {
      case 'stake':
        return <ArrowUpRight className="w-4 h-4 text-green-400" />;
      case 'unstake':
        return <ArrowDownRight className="w-4 h-4 text-red-400" />;
      default:
        return <Clock className="w-4 h-4 text-blue-400" />;
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-purple-500/20">
      <h3 className="text-xl font-semibold text-white mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              {getTransactionIcon(tx.type)}
              <div>
                <p className="text-white capitalize">{tx.type}</p>
                <p className="text-sm text-gray-400">{formatTimestamp(tx.timestamp)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white">{tx.amount}</p>
              <p className="text-sm text-gray-400">{tx.hash}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;