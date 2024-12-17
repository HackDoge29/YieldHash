import { useState, useEffect } from 'react';
import type { TransactionHistory } from '../types/defi';

const MOCK_TRANSACTIONS: TransactionHistory[] = [
  {
    id: '1',
    type: 'stake',
    amount: '100 HBAR',
    token: 'HBAR',
    timestamp: Date.now() - 3600000,
    status: 'completed',
    hash: '0x439...ced'
  },
  {
    id: '2',
    type: 'claim',
    amount: '25 HBAR',
    token: 'HBAR',
    timestamp: Date.now() - 7200000,
    status: 'completed',
    hash: '0x486...dcf'
  }
];

export const useTransactionHistory = () => {
  const [transactions, setTransactions] = useState<TransactionHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTransactions(MOCK_TRANSACTIONS);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return { transactions, loading };
};