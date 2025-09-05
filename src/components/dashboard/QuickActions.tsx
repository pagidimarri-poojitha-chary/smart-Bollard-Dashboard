import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus, Power, Settings, Download } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { icon: Plus, label: 'Add Device', color: 'from-violet-500 to-purple-600' },
    { icon: Power, label: 'System Control', color: 'from-teal-500 to-cyan-600' },
    { icon: Settings, label: 'Settings', color: 'from-amber-500 to-orange-600' },
    { icon: Download, label: 'Export', color: 'from-green-500 to-emerald-600' },
  ];

  return (
    <div className="flex gap-3">
      {actions.map((action, index) => (
        <motion.div
          key={action.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="sm"
            className={`bg-gradient-to-r ${action.color} border-0 text-white hover:shadow-lg transition-all duration-300`}
          >
            <action.icon className="w-4 h-4 mr-2" />
            {action.label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickActions;