import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Activity, Thermometer, Eye, Volume2 } from 'lucide-react';

const motionData = [
  { time: '00:00', motion: 12, ambient: 45, sound: 32, temperature: 22 },
  { time: '04:00', motion: 8, ambient: 42, sound: 28, temperature: 21 },
  { time: '08:00', motion: 35, ambient: 65, sound: 55, temperature: 24 },
  { time: '12:00', motion: 42, ambient: 78, sound: 62, temperature: 26 },
  { time: '16:00', motion: 48, ambient: 82, sound: 68, temperature: 28 },
  { time: '20:00', motion: 38, ambient: 68, sound: 45, temperature: 25 },
];

const SensorTimeline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-violet-400" />
            Sensor Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Sensor Readings */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <Activity className="w-6 h-6 text-violet-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">42</div>
              <div className="text-xs text-gray-400">Motion Events</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <Eye className="w-6 h-6 text-teal-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">82%</div>
              <div className="text-xs text-gray-400">Ambient Light</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <Volume2 className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">68dB</div>
              <div className="text-xs text-gray-400">Sound Level</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <Thermometer className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">28°C</div>
              <div className="text-xs text-gray-400">Temperature</div>
            </div>
          </div>

          {/* Motion Detection Chart */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Motion Detection (24h)</h4>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={motionData}>
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
                  />
                  <Line
                    type="monotone"
                    dataKey="motion"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{ fill: '#8B5CF6', r: 3 }}
                    activeDot={{ r: 5, fill: '#8B5CF6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SensorTimeline;