import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { time: '00:00', uptime: 98.2, devices: 245 },
  { time: '04:00', uptime: 99.1, devices: 246 },
  { time: '08:00', uptime: 97.8, devices: 244 },
  { time: '12:00', uptime: 99.5, devices: 247 },
  { time: '16:00', uptime: 98.9, devices: 247 },
  { time: '20:00', uptime: 99.2, devices: 247 },
];

const DeviceUptime: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10 h-80">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            Device Uptime Trends
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                <span className="text-gray-400">Uptime %</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="uptimeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 12 }}
                domain={[95, 100]}
              />
              <Area
                type="monotone"
                dataKey="uptime"
                stroke="#8B5CF6"
                fillOpacity={1}
                fill="url(#uptimeGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DeviceUptime;