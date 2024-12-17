import { useState, useEffect } from 'react';
import type { FarmingPair } from '../types/defi';

const MOCK_PAIRS: FarmingPair[] = [
  {
    id: '1',
    name: 'HBAR-USDC',
    token1: 'HBAR',
    token2: 'USDC',
    apy: 25,
    liquidityProvided: '$50,000',
    rewardsEarned: '1,250 HBAR',
    timeStaked: '45 days',
    tvl: '$2,500,000',
  },
  {
    id: '2',
    name: 'HBAR-DAI',
    token1: 'HBAR',
    token2: 'DAI',
    apy: 20,
    liquidityProvided: '$30,000',
    rewardsEarned: '750 HBAR',
    timeStaked: '30 days',
    tvl: '$1,800,000',
  },
  {
    id: '3',
    name: 'HBAR-USDT',
    token1: 'HBAR',
    token2: 'USDT',
    apy: 30,
    liquidityProvided: '$75,000',
    rewardsEarned: '2,000 HBAR',
    timeStaked: '60 days',
    tvl: '$3,200,000',
  },
];

export const useFarmingPairs = () => {
  const [pairs, setPairs] = useState<FarmingPair[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPairs = async () => {
      try {
        // Mock API call - replace with actual Hedera API integration
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPairs(MOCK_PAIRS);
      } catch (error) {
        console.error('Failed to fetch farming pairs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPairs();
  }, []);

  return { pairs, loading };
};