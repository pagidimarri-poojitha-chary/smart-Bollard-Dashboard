import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Thermometer } from 'lucide-react';

interface ColorTempSliderProps {
  value: number;
}

const ColorTempSlider: React.FC<ColorTempSliderProps> = ({ value: initialValue }) => {
  const [colorTemp, setColorTemp] = useState(initialValue);

  const getTempColor = (temp: number) => {
    if (temp < 3000) return 'from-orange-400 to-red-400';
    if (temp < 4000) return 'from-yellow-400 to-orange-400';
    if (temp < 5000) return 'from-white to-yellow-200';
    return 'from-blue-200 to-blue-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent" />
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Thermometer className="w-4 h-4 text-white" />
            </div>
            Color Temperature
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{colorTemp}K</div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTempColor(colorTemp)} text-black`}>
              {colorTemp < 3000 ? 'Warm' : colorTemp < 5000 ? 'Neutral' : 'Cool'}
            </div>
          </div>
          
          <div className="px-2">
            <Slider
              value={[colorTemp]}
              onValueChange={(value) => setColorTemp(value[0])}
              min={2000}
              max={6500}
              step={100}
              className="w-full"
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>2000K</span>
            <span>4000K</span>
            <span>6500K</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ColorTempSlider;