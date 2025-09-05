import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Lightbulb, Settings, Plus } from 'lucide-react';

const zones = [
  {
    id: 'zone-1',
    name: 'Downtown Core',
    description: 'Central business district with high foot traffic',
    deviceCount: 24,
    activeDevices: 22,
    averageBrightness: 85,
    energyConsumption: '2.4kW',
    status: 'active',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'zone-2',
    name: 'Park District',
    description: 'Recreational areas and green spaces',
    deviceCount: 18,
    activeDevices: 17,
    averageBrightness: 65,
    energyConsumption: '1.8kW',
    status: 'active',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'zone-3',
    name: 'Waterfront',
    description: 'Marina and harbor area lighting',
    deviceCount: 15,
    activeDevices: 15,
    averageBrightness: 90,
    energyConsumption: '1.9kW',
    status: 'active',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'zone-4',
    name: 'Residential East',
    description: 'Eastern residential neighborhood',
    deviceCount: 32,
    activeDevices: 30,
    averageBrightness: 70,
    energyConsumption: '2.1kW',
    status: 'maintenance',
    color: 'from-amber-500 to-orange-600',
  },
];

const Zones: React.FC = () => {
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
            Zone Management
          </h1>
          <p className="text-gray-400 mt-1">Organize and control device zones</p>
        </div>
        <Button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create Zone
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {zones.map((zone, index) => (
          <motion.div
            key={zone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:from-white/10 transition-all duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${zone.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{zone.name}</CardTitle>
                      <p className="text-gray-400 text-sm">{zone.description}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={zone.status === 'active' 
                      ? 'border-green-500/50 text-green-400 bg-green-500/10' 
                      : 'border-amber-500/50 text-amber-400 bg-amber-500/10'}
                  >
                    {zone.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Devices</span>
                    </div>
                    <div className="text-xl font-bold text-white">
                      {zone.activeDevices}/{zone.deviceCount}
                    </div>
                    <div className="text-xs text-gray-500">Active/Total</div>
                  </div>

                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Avg. Brightness</span>
                    </div>
                    <div className="text-xl font-bold text-white">{zone.averageBrightness}%</div>
                    <div className="text-xs text-gray-500">Current level</div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Energy Consumption</span>
                    <span className="text-lg font-bold text-white">{zone.energyConsumption}</span>
                  </div>
                  <div className="w-full bg-slate-600/50 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${zone.color} rounded-full transition-all duration-300`}
                      style={{ width: `${(parseFloat(zone.energyConsumption) / 3) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/10 text-gray-300 hover:text-white"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Configure
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/10 text-gray-300 hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Zones;