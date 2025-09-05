import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Wifi, Battery } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const kpis = [
  {
    title: 'Active Devices',
    value: '247',
    change: '+12',
    trend: 'up',
    icon: Activity,
    gradient: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/25',
  },
  {
    title: 'Energy Consumption',
    value: '1.2kW',
    change: '-8%',
    trend: 'down',
    icon: Zap,
    gradient: 'from-amber-500 to-orange-600',
    glow: 'shadow-amber-500/25',
  },
  {
    title: 'Network Status',
    value: '99.8%',
    change: '+0.2%',
    trend: 'up',
    icon: Wifi,
    gradient: 'from-teal-500 to-cyan-600',
    glow: 'shadow-teal-500/25',
  },
  {
    title: 'Battery Health',
    value: '94%',
    change: 'Stable',
    trend: 'stable',
    icon: Battery,
    gradient: 'from-green-500 to-emerald-600',
    glow: 'shadow-green-500/25',
  },
];

const KPICards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group"
        >
          <Card className={`bg-slate-800/50 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 hover:${kpi.glow} hover:shadow-2xl relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 transition-all duration-500" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${kpi.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <kpi.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  kpi.trend === 'up' 
                    ? 'bg-green-500/20 text-green-400' 
                    : kpi.trend === 'down' 
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {kpi.change}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">{kpi.value}</p>
                <p className="text-sm text-gray-400">{kpi.title}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default KPICards;