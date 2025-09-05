import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Lightbulb, MapPin, Plus, Play, Pause } from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';

const schedules = [
  {
    id: 'schedule-1',
    name: 'Evening Brightness Reduction',
    description: 'Reduce brightness to 60% after 10 PM',
    zones: ['Downtown Core', 'Park District'],
    startTime: '22:00',
    endTime: '06:00',
    action: 'dim',
    value: 60,
    status: 'active',
    nextRun: new Date(2024, 0, 15, 22, 0),
  },
  {
    id: 'schedule-2',
    name: 'Weekend Color Temperature',
    description: 'Warmer lighting for weekend evenings',
    zones: ['Waterfront', 'Park District'],
    startTime: '18:00',
    endTime: '23:00',
    action: 'colorTemp',
    value: 3000,
    status: 'active',
    nextRun: new Date(2024, 0, 20, 18, 0),
  },
  {
    id: 'schedule-3',
    name: 'Maintenance Mode',
    description: 'Weekly maintenance window',
    zones: ['Residential East'],
    startTime: '02:00',
    endTime: '04:00',
    action: 'maintenance',
    value: null,
    status: 'paused',
    nextRun: new Date(2024, 0, 22, 2, 0),
  },
];

const Schedules: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'dim':
        return Lightbulb;
      case 'colorTemp':
        return Clock;
      default:
        return Clock;
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case 'dim':
        return 'from-violet-500 to-purple-600';
      case 'colorTemp':
        return 'from-amber-500 to-orange-600';
      case 'maintenance':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-blue-500 to-blue-600';
    }
  };

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
            Schedule Management
          </h1>
          <p className="text-gray-400 mt-1">Automate your bollard operations</p>
        </div>
        <Button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="xl:col-span-1">
          <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-violet-400" />
                Schedule Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">
                    {format(selectedDate, 'MMMM yyyy')}
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-xs text-gray-400 p-2 font-medium">
                      {day}
                    </div>
                  ))}
                  
                  {Array.from({ length: 35 }, (_, i) => {
                    const date = addDays(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1), i - 7);
                    const isCurrentMonth = date.getMonth() === selectedDate.getMonth();
                    const isToday = isSameDay(date, new Date());
                    const hasSchedule = schedules.some(s => isSameDay(s.nextRun, date));
                    
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(date)}
                        className={`p-2 text-sm rounded-lg transition-all ${
                          isCurrentMonth
                            ? isToday
                              ? 'bg-violet-500 text-white'
                              : isSameDay(date, selectedDate)
                              ? 'bg-violet-500/20 text-violet-400 border border-violet-500/50'
                              : 'text-gray-300 hover:bg-white/5'
                            : 'text-gray-600'
                        } ${hasSchedule ? 'ring-2 ring-teal-500/50' : ''}`}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule List */}
        <div className="xl:col-span-2">
          <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Active Schedules</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {schedules.map((schedule, index) => {
                const ActionIcon = getActionIcon(schedule.action);
                
                return (
                  <motion.div
                    key={schedule.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-slate-700/30 border-white/10 hover:border-white/20 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${getActionColor(schedule.action)} rounded-xl flex items-center justify-center shadow-lg`}>
                              <ActionIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{schedule.name}</h3>
                              <p className="text-gray-400 text-sm">{schedule.description}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm">
                                <div className="flex items-center gap-1 text-gray-400">
                                  <Clock className="w-3 h-3" />
                                  <span>{schedule.startTime} - {schedule.endTime}</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-400">
                                  <MapPin className="w-3 h-3" />
                                  <span>{schedule.zones.length} zones</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <Badge 
                              variant="outline" 
                              className={schedule.status === 'active' 
                                ? 'border-green-500/50 text-green-400 bg-green-500/10' 
                                : 'border-amber-500/50 text-amber-400 bg-amber-500/10'}
                            >
                              {schedule.status}
                            </Badge>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-gray-400 hover:text-white"
                            >
                              {schedule.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="flex flex-wrap gap-2">
                            {schedule.zones.map((zone) => (
                              <Badge key={zone} variant="outline" className="border-white/20 text-gray-300">
                                {zone}
                              </Badge>
                            ))}
                          </div>
                          <div className="mt-2 text-xs text-gray-500">
                            Next run: {format(schedule.nextRun, 'MMM dd, yyyy HH:mm')}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Schedules;