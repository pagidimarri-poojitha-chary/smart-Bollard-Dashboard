import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Power, 
  Lightbulb, 
  Thermometer,
  Battery,
  Wifi,
  MapPin
} from 'lucide-react';

// Mock device data
const devices = [
  {
    id: 'BL-001',
    name: 'Main Street Bollard 1',
    location: 'Main St & 1st Ave',
    status: 'online',
    brightness: 85,
    colorTemp: 4000,
    battery: 94,
    uptime: '99.2%',
    lastSeen: '2 mins ago',
    zone: 'Downtown Core',
  },
  {
    id: 'BL-002',
    name: 'Park Avenue Bollard 3',
    location: 'Park Ave & Central',
    status: 'maintenance',
    brightness: 0,
    colorTemp: 3000,
    battery: 78,
    uptime: '98.1%',
    lastSeen: '1 hour ago',
    zone: 'Park District',
  },
  {
    id: 'BL-003',
    name: 'Harbor View Bollard 12',
    location: 'Harbor Dr & Ocean Blvd',
    status: 'online',
    brightness: 92,
    colorTemp: 5000,
    battery: 89,
    uptime: '99.8%',
    lastSeen: 'Just now',
    zone: 'Waterfront',
  },
];

const Devices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus] = useState('all');

  const filteredDevices = devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || device.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

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
            Device Management
          </h1>
          <p className="text-gray-400 mt-1">Monitor and control your smart bollards</p>
        </div>
        <Button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
          Add Device
        </Button>
      </div>

      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Active Devices</CardTitle>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search devices..."
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
        <CardContent className="p-6 pt-0">
          <div className="grid gap-4">
            {filteredDevices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-700/30 border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-white/10">
                          <Lightbulb className="w-6 h-6 text-violet-400" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Link
                              to={`/devices/${device.id}`}
                              className="text-lg font-semibold text-white hover:text-violet-400 transition-colors"
                            >
                              {device.name}
                            </Link>
                            <Badge 
                              variant="outline" 
                              className={`${
                                device.status === 'online' 
                                  ? 'border-green-500/50 text-green-400 bg-green-500/10' 
                                  : device.status === 'maintenance'
                                  ? 'border-amber-500/50 text-amber-400 bg-amber-500/10'
                                  : 'border-red-500/50 text-red-400 bg-red-500/10'
                              }`}
                            >
                              {device.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{device.location}</span>
                            <span className="text-gray-600">•</span>
                            <span>{device.zone}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
                              <Lightbulb className="w-3 h-3" />
                              <span>Brightness</span>
                            </div>
                            <span className="text-white font-semibold">{device.brightness}%</span>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
                              <Thermometer className="w-3 h-3" />
                              <span>Color Temp</span>
                            </div>
                            <span className="text-white font-semibold">{device.colorTemp}K</span>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
                              <Battery className="w-3 h-3" />
                              <span>Battery</span>
                            </div>
                            <span className="text-white font-semibold">{device.battery}%</span>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center gap-1 text-sm text-gray-400 mb-1">
                              <Wifi className="w-3 h-3" />
                              <span>Uptime</span>
                            </div>
                            <span className="text-white font-semibold">{device.uptime}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/10 text-gray-300 hover:text-white"
                          >
                            <Power className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/10 text-gray-300 hover:text-white"
                          >
                            <Lightbulb className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Devices;