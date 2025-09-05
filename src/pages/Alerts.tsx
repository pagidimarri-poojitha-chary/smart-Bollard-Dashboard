import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Bell,
  AlertTriangle,
  AlertCircle,
  Info,
  CheckCircle,
  Search,
  Filter,
  X,
} from 'lucide-react';

const alerts = [
  {
    id: 'alert-1',
    title: 'Device BL-045 Offline',
    description: 'Harbor View Bollard has lost network connection',
    severity: 'critical',
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    status: 'unread',
    zone: 'Waterfront',
  },
  {
    id: 'alert-2',
    title: 'High Energy Consumption',
    description: 'Zone A-12 consuming 25% above normal threshold',
    severity: 'warning',
    timestamp: new Date(Date.now() - 45 * 60 * 1000),
    status: 'read',
    zone: 'Downtown Core',
  },
  {
    id: 'alert-3',
    title: 'Firmware Update Available',
    description: 'Version 2.1.5 available for 12 devices',
    severity: 'info',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    status: 'unread',
    zone: 'All Zones',
  },
  {
    id: 'alert-4',
    title: 'Maintenance Completed',
    description: 'Scheduled maintenance for Park District completed successfully',
    severity: 'success',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    status: 'read',
    zone: 'Park District',
  },
  {
    id: 'alert-5',
    title: 'Battery Low Warning',
    description: 'Device BL-023 battery level at 15%',
    severity: 'warning',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    status: 'unread',
    zone: 'Residential East',
  },
];

const getAlertIcon = (severity: string) => {
  switch (severity) {
    case 'critical':
      return AlertCircle;
    case 'warning':
      return AlertTriangle;
    case 'info':
      return Info;
    case 'success':
      return CheckCircle;
    default:
      return Bell;
  }
};

const getAlertColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return {
        bg: 'from-red-500/20 to-red-600/20',
        border: 'border-red-500/50',
        text: 'text-red-400',
        glow: 'shadow-red-500/25',
      };
    case 'warning':
      return {
        bg: 'from-amber-500/20 to-amber-600/20',
        border: 'border-amber-500/50',
        text: 'text-amber-400',
        glow: 'shadow-amber-500/25',
      };
    case 'info':
      return {
        bg: 'from-blue-500/20 to-blue-600/20',
        border: 'border-blue-500/50',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/25',
      };
    case 'success':
      return {
        bg: 'from-green-500/20 to-green-600/20',
        border: 'border-green-500/50',
        text: 'text-green-400',
        glow: 'shadow-green-500/25',
      };
    default:
      return {
        bg: 'from-gray-500/20 to-gray-600/20',
        border: 'border-gray-500/50',
        text: 'text-gray-400',
        glow: 'shadow-gray-500/25',
      };
  }
};

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  
  if (diffMins < 60) {
    return `${diffMins}m ago`;
  } else {
    return `${diffHours}h ago`;
  }
};

const Alerts: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity] = useState('all');

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const unreadCount = alerts.filter(alert => alert.status === 'unread').length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent flex items-center gap-3">
            Alerts & Notifications
            {unreadCount > 0 && (
              <Badge variant="destructive" className="bg-red-500 text-white">
                {unreadCount}
              </Badge>
            )}
          </h1>
          <p className="text-gray-400 mt-1">Monitor system alerts and notifications</p>
        </div>
        <Button variant="outline" className="border-white/10 text-gray-300">
          Mark All Read
        </Button>
      </div>

      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Alert Center</CardTitle>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search alerts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white w-64"
                />
              </div>
              <Button variant="outline" size="sm" className="border-white/10 text-gray-300">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-3">
              {filteredAlerts.map((alert, index) => {
                const AlertIcon = getAlertIcon(alert.severity);
                const colors = getAlertColor(alert.severity);
                
                return (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className={`bg-gradient-to-r ${colors.bg} border ${colors.border} hover:${colors.glow} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                      {alert.status === 'unread' && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                      )}
                      
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-2 rounded-lg bg-slate-800/50 ${colors.text}`}>
                            <AlertIcon className="w-5 h-5" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-white font-semibold">{alert.title}</h3>
                                <p className="text-gray-300 text-sm mt-1">{alert.description}</p>
                                <div className="flex items-center gap-4 mt-2">
                                  <Badge variant="outline" className={`${colors.border} ${colors.text} bg-transparent`}>
                                    {alert.severity}
                                  </Badge>
                                  <span className="text-xs text-gray-500">{alert.zone}</span>
                                  <span className="text-xs text-gray-500">{formatTimeAgo(alert.timestamp)}</span>
                                </div>
                              </div>
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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

export default Alerts;