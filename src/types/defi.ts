// Wallet Types
export interface WalletInfo {
  address: string;
  balance: string;
  isConnected: boolean;
}

// Farming Types
export interface FarmingPair {
  id: string;
  name: string;
  token1: string;
  token2: string;
  apy: number;
  liquidityProvided: string;
  rewardsEarned: string;
  timeStaked: string;
  tvl: string;
}

// Staking Types
export interface StakingPool {
  id: string;
  token: string;
  minStake: number;
  lockPeriod: number;
  apy: number;
  totalStaked: string;
  userStaked: string;
  rewards: string;
}

// Transaction Types
export interface TransactionHistory {
  id: string;
  type: 'stake' | 'unstake' | 'claim' | 'provide' | 'withdraw';
  amount: string;
  token: string;
  timestamp: number;
  status: 'pending' | 'completed' | 'failed';
  hash: string;
}