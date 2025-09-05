import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Battery, Smartphone, Zap } from 'lucide-react';

const ChargingPadStatus: React.FC = () => {
  const isCharging = true;
  const connectedDevices = 2;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent" />
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Battery className="w-4 h-4 text-white" />
            </div>
            Wireless Charging
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-3">
              {isCharging && (
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full"
                />
              )}
              <div className="relative w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center border-2 border-green-500/50">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div className="text-sm text-gray-400">
              {isCharging ? 'Active Charging' : 'Ready to Charge'}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Connected Devices</span>
              <span className="text-white font-medium">{connectedDevices}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Power Output</span>
              <span className="text-white font-medium">15W</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Efficiency</span>
              <span className="text-white font-medium">92%</span>
            </div>
          </div>

          {connectedDevices > 0 && (
            <div className="bg-slate-700/30 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Smartphone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Connected Devices</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">iPhone 14 Pro</span>
                  <span className="text-green-400">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Samsung Galaxy S23</span>
                  <span className="text-green-400">76%</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ChargingPadStatus;