import React from 'react';
import { motion } from 'framer-motion';
import KPICards from '@/components/dashboard/KPICards';
import DeviceUptime from '@/components/dashboard/DeviceUptime';
import EnergyStats from '@/components/dashboard/EnergyStats';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';

const Dashboard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-gray-400 mt-1">Monitor your smart bollard network</p>
        </div>
        <QuickActions />
      </div>

      <KPICards />
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <DeviceUptime />
        </div>
        <div>
          <EnergyStats />
        </div>
      </div>

      <RecentActivity />
    </motion.div>
  );
};

export default Dashboard;