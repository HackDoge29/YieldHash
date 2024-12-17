import { useState, useEffect } from 'react';
import type { StakingPool } from '../types/defi';

const MOCK_POOLS: StakingPool[] = [
  {
    id: '1',
    token: 'HBAR',
    minStake: 100,
    lockPeriod: 30,
    apy: 8,
    totalStaked: '500,000 HBAR',
    userStaked: '150 HBAR',
    rewards: '12 HBAR'
  },
  {
    id: '2',
    token: 'HBAR',
    minStake: 100,
    lockPeriod: 60,
    apy: 12,
    totalStaked: '750,000 HBAR',
    userStaked: '0 HBAR',
    rewards: '0 HBAR'
  },
  {
    id: '3',
    token: 'HBAR',
    minStake: 100,
    lockPeriod: 90,
    apy: 15,
    totalStaked: '1,200,000 HBAR',
    userStaked: '200 HBAR',
    rewards: '30 HBAR'
  }
];

export const useStakingPools = () => {
  const [pools, setPools] = useState<StakingPool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPools = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPools(MOCK_POOLS);
      } finally {
        setLoading(false);
      }
    };

    fetchPools();
  }, []);

  return { pools, loading };
};