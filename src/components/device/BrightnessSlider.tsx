import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Lightbulb } from 'lucide-react';

interface BrightnessSliderProps {
  value: number;
}

const BrightnessSlider: React.FC<BrightnessSliderProps> = ({ value: initialValue }) => {
  const [brightness, setBrightness] = useState(initialValue);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
    >
      <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />
        <CardHeader className="pb-3">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-white" />
            </div>
            Brightness Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">{brightness}%</div>
            <div className="text-sm text-gray-400">Current brightness level</div>
          </div>
          
          <div className="px-2">
            <Slider
              value={[brightness]}
              onValueChange={(value) => setBrightness(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BrightnessSlider;