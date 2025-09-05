import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'success',
    icon: CheckCircle,
    title: 'Device BL-247 came online',
    description: 'Main Street bollard resumed normal operation',
    time: '2 minutes ago',
    color: 'text-green-400',
  },
  {
    id: 2,
    type: 'warning',
    icon: AlertTriangle,
    title: 'High energy consumption detected',
    description: 'Zone A-12 consuming 15% above normal',
    time: '5 minutes ago',
    color: 'text-amber-400',
  },
  {
    id: 3,
    type: 'info',
    icon: Info,
    title: 'Scheduled maintenance completed',
    description: 'Software update deployed to 12 devices',
    time: '1 hour ago',
    color: 'text-blue-400',
  },
  {
    id: 4,
    type: 'activity',
    icon: Activity,
    title: 'New device registered',
    description: 'BL-248 added to Park Avenue zone',
    time: '2 hours ago',
    color: 'text-purple-400',
  },
];

const RecentActivity: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`p-2 rounded-lg bg-slate-700/50 ${activity.color}`}>
                  <activity.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-medium">{activity.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{activity.description}</p>
                  <span className="text-xs text-gray-500 mt-2 block">{activity.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RecentActivity;