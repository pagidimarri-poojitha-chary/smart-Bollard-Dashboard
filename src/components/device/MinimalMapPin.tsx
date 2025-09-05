import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface MinimalMapPinProps {
  coordinates: {
    lat: number;
    lng: number;
  };
}

const MinimalMapPin: React.FC<MinimalMapPinProps> = ({ coordinates }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5 text-teal-400" />
            Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative h-32 bg-slate-700/30 rounded-lg overflow-hidden">
            {/* Simple map representation with glowing pin */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/50 to-slate-800/50" />
            
            {/* Glowing pin effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-8 h-8 bg-teal-400/30 rounded-full -top-4 -left-4"
              />
              <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            
            {/* Grid lines for map effect */}
            <div className="absolute inset-0">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>
          </div>
          
          <div className="mt-3 text-sm text-gray-400 space-y-1">
            <div>Lat: {coordinates.lat}</div>
            <div>Lng: {coordinates.lng}</div>
            <div className="text-xs text-gray-500 mt-2">
              Real-time location tracking
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MinimalMapPin;