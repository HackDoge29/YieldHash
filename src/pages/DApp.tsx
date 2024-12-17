import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WalletStatus from '../components/dashboard/WalletStatus';
import TVLDisplay from '../components/dashboard/TVLDisplay';
import FarmingPairCard from '../components/dashboard/FarmingPairCard';
import StakingPool from '../components/dashboard/StakingPool';
import APYChart from '../components/dashboard/APYChart';
import TransactionList from '../components/dashboard/TransactionList';
import { useFarmingPairs } from '../hooks/useFarmingPairs';
import { useStakingPools } from '../hooks/useStakingPools';
import { useTransactionHistory } from '../hooks/useTransactionHistory';

const DApp: React.FC = () => {
  const { pairs, loading: pairsLoading } = useFarmingPairs();
  const { pools, loading: poolsLoading } = useStakingPools();
  const { transactions, loading: txLoading } = useTransactionHistory();

  const handleClaim = (pairId: string) => {
    console.log('Claiming rewards for pair:', pairId);
  };

  const handleStake = (poolId: string, amount: number) => {
    console.log('Staking in pool:', poolId, 'amount:', amount);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <TVLDisplay />
          </div>
          <div>
            <WalletStatus />
          </div>
        </div>

        {/* APY Chart */}
        <div className="mb-12">
          <APYChart />
        </div>

        {/* Farming Pools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Yield Farming Pools</h2>
          {pairsLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
              <p className="mt-4 text-gray-400">Loading farming pairs...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pairs.map((pair) => (
                <FarmingPairCard
                  key={pair.id}
                  pair={pair}
                  onClaim={handleClaim}
                />
              ))}
            </div>
          )}
        </div>

        {/* Staking Pools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Staking Pools</h2>
          {poolsLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto"></div>
              <p className="mt-4 text-gray-400">Loading staking pools...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pools.map((pool) => (
                <StakingPool
                  key={pool.id}
                  pool={pool}
                  onStake={handleStake}
                />
              ))}
            </div>
          )}
        </div>

        {/* Transaction History */}
        <div className="mb-12">
          <TransactionList
            transactions={transactions}
            loading={txLoading}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DApp;