import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Smartphone,
  MapPin,
  Calendar,
  Bell,
  BarChart3,
  Zap,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Devices', href: '/devices', icon: Smartphone },
  { name: 'Zones', href: '/zones', icon: MapPin },
  { name: 'Schedules', href: '/schedules', icon: Calendar },
  { name: 'Alerts', href: '/alerts', icon: Bell },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
];

const Sidebar: React.FC = () => {
  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-64 bg-slate-900/80 backdrop-blur-xl border-r border-white/10 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-teal-500/5 pointer-events-none" />
      
      <div className="flex items-center gap-3 px-6 py-8 border-b border-white/10">
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-teal-500 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Smart Bollards
          </h1>
          <p className="text-sm text-gray-400">Control Center</p>
        </div>
      </div>

      <nav className="px-4 py-6">
        <ul className="space-y-2">
          {navigation.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-500/20 to-teal-500/20 text-white border border-white/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-teal-500/10 rounded-xl"
                        initial={false}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <item.icon className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 font-medium">{item.name}</span>
                    {isActive && (
                      <div className="absolute right-3 w-2 h-2 bg-gradient-to-r from-violet-400 to-teal-400 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;