export interface Stats {
  totalLiquidity: string;
  farmersCount: string;
  assetsTokenized: string;
}

export interface YieldPool {
  id: string;
  name: string;
  apy: number;
  totalLocked: string;
  asset: string;
}

export interface WalletState {
  connected: boolean;
  address: string;
  balance: string;
}