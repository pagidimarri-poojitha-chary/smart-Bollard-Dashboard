import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Terminal, Info, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

const logs = [
  {
    id: 1,
    timestamp: '2024-01-15 14:32:15',
    level: 'info',
    message: 'Device brightness adjusted to 85%',
    source: 'Control System',
  },
  {
    id: 2,
    timestamp: '2024-01-15 14:28:42',
    level: 'success',
    message: 'Wireless charging pad activated',
    source: 'Charging Module',
  },
  {
    id: 3,
    timestamp: '2024-01-15 14:25:18',
    level: 'warning',
    message: 'High ambient temperature detected (29°C)',
    source: 'Environmental Sensor',
  },
  {
    id: 4,
    timestamp: '2024-01-15 14:20:03',
    level: 'info',
    message: 'Motion sensor calibration completed',
    source: 'Sensor Array',
  },
  {
    id: 5,
    timestamp: '2024-01-15 14:15:44',
    level: 'error',
    message: 'Network connectivity timeout (resolved)',
    source: 'Network Module',
  },
  {
    id: 6,
    timestamp: '2024-01-15 14:12:21',
    level: 'success',
    message: 'Firmware update completed successfully',
    source: 'System Core',
  },
];

const getLogIcon = (level: string) => {
  switch (level) {
    case 'info':
      return Info;
    case 'warning':
      return AlertTriangle;
    case 'error':
      return AlertCircle;
    case 'success':
      return CheckCircle;
    default:
      return Info;
  }
};

const getLogColor = (level: string) => {
  switch (level) {
    case 'info':
      return 'border-blue-500/50 text-blue-400 bg-blue-500/10';
    case 'warning':
      return 'border-amber-500/50 text-amber-400 bg-amber-500/10';
    case 'error':
      return 'border-red-500/50 text-red-400 bg-red-500/10';
    case 'success':
      return 'border-green-500/50 text-green-400 bg-green-500/10';
    default:
      return 'border-gray-500/50 text-gray-400 bg-gray-500/10';
  }
};

const DeviceLogs: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Terminal className="w-5 h-5 text-violet-400" />
            System Logs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-64">
            <div className="space-y-3">
              {logs.map((log, index) => {
                const IconComponent = getLogIcon(log.level);
                return (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                  >
                    <div className="mt-0.5">
                      <IconComponent className={`w-4 h-4 ${log.level === 'info' ? 'text-blue-400' : log.level === 'warning' ? 'text-amber-400' : log.level === 'error' ? 'text-red-400' : 'text-green-400'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getLogColor(log.level)}`}
                        >
                          {log.level.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-gray-500">{log.source}</span>
                      </div>
                      <p className="text-sm text-white">{log.message}</p>
                      <span className="text-xs text-gray-500 mt-1 block">{log.timestamp}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DeviceLogs;