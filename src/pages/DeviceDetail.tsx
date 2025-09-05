import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BrightnessSlider from '@/components/device/BrightnessSlider';
import ColorTempSlider from '@/components/device/ColorTempSlider';
import AudioControls from '@/components/device/AudioControls';
import ChargingPadStatus from '@/components/device/ChargingPadStatus';
import SensorTimeline from '@/components/device/SensorTimeline';
import MinimalMapPin from '@/components/device/MinimalMapPin';
import DeviceLogs from '@/components/device/DeviceLogs';
import {
  ArrowLeft,
  Settings,
  Power,
  Wifi,
  Battery,
  Thermometer,
  Activity,
} from 'lucide-react';

const DeviceDetail: React.FC = () => {
  const { id } = useParams();

  // Mock device data
  const device = {
    id: id || 'BL-001',
    name: 'Main Street Bollard 1',
    location: 'Main St & 1st Ave',
    status: 'online',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    brightness: 85,
    colorTemp: 4000,
    battery: 94,
    uptime: '99.2%',
    lastSeen: '2 mins ago',
    zone: 'Downtown Core',
    firmware: '2.1.4',
    model: 'SmartBollard Pro X1',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 space-y-6"
    >
      <div className="flex items-center gap-4">
        <Link to="/devices">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Devices
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-white/10">
            <Activity className="w-8 h-8 text-violet-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{device.name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-gray-400">{device.location}</span>
              <Badge 
                variant="outline" 
                className="border-green-500/50 text-green-400 bg-green-500/10"
              >
                {device.status}
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 text-gray-300">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button 
            variant="outline" 
            className="border-red-500/50 text-red-400 hover:bg-red-500/10"
          >
            <Power className="w-4 h-4 mr-2" />
            Power Off
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Left Column - Controls */}
        <div className="xl:col-span-1 space-y-6">
          <BrightnessSlider value={device.brightness} />
          <ColorTempSlider value={device.colorTemp} />
          <AudioControls />
          <ChargingPadStatus />
        </div>

        {/* Middle Column - Main Content */}
        <div className="xl:col-span-2 space-y-6">
          <SensorTimeline />
          <DeviceLogs />
        </div>

        {/* Right Column - Stats & Map */}
        <div className="xl:col-span-1 space-y-6">
          {/* Device Stats */}
          <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-lg">Device Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Battery className="w-4 h-4" />
                  <span>Battery</span>
                </div>
                <span className="text-white font-semibold">{device.battery}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Wifi className="w-4 h-4" />
                  <span>Uptime</span>
                </div>
                <span className="text-white font-semibold">{device.uptime}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-400">
                  <Thermometer className="w-4 h-4" />
                  <span>Temperature</span>
                </div>
                <span className="text-white font-semibold">23°C</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="text-sm text-gray-400 space-y-1">
                  <div>Model: {device.model}</div>
                  <div>Firmware: {device.firmware}</div>
                  <div>Zone: {device.zone}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Map */}
          <MinimalMapPin coordinates={device.coordinates} />
        </div>
      </div>
    </motion.div>
  );
};

export default DeviceDetail;