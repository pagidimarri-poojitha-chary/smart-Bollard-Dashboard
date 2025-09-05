import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { TrendingUp, Zap, Activity, Download } from 'lucide-react';

const energyData = [
  { month: 'Jan', consumption: 2400, cost: 340, devices: 245 },
  { month: 'Feb', consumption: 2100, cost: 300, devices: 246 },
  { month: 'Mar', consumption: 2800, cost: 380, devices: 247 },
  { month: 'Apr', consumption: 2200, cost: 320, devices: 247 },
  { month: 'May', consumption: 2600, cost: 360, devices: 248 },
  { month: 'Jun', consumption: 3200, cost: 450, devices: 248 },
];

const usageData = [
  { hour: '00', brightness: 45, motion: 12, charging: 8 },
  { hour: '04', brightness: 40, motion: 8, charging: 5 },
  { hour: '08', brightness: 70, motion: 35, charging: 15 },
  { hour: '12', brightness: 85, motion: 42, charging: 22 },
  { hour: '16', brightness: 90, motion: 48, charging: 28 },
  { hour: '20', brightness: 75, motion: 38, charging: 18 },
];

const zoneData = [
  { name: 'Downtown Core', value: 35, color: '#8B5CF6' },
  { name: 'Park District', value: 25, color: '#10B981' },
  { name: 'Waterfront', value: 20, color: '#14B8A6' },
  { name: 'Residential East', value: 20, color: '#F59E0B' },
];

const Analytics: React.FC = () => {
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
            Analytics Dashboard
          </h1>
          <p className="text-gray-400 mt-1">Comprehensive insights and reporting</p>
        </div>
        <Button variant="outline" className="border-white/10 text-gray-300">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      <Tabs defaultValue="energy" className="space-y-6">
        <TabsList className="bg-slate-800/50 border border-white/10">
          <TabsTrigger value="energy" className="data-[state=active]:bg-violet-500/20">
            Energy Analytics
          </TabsTrigger>
          <TabsTrigger value="usage" className="data-[state=active]:bg-violet-500/20">
            Usage Patterns
          </TabsTrigger>
          <TabsTrigger value="performance" className="data-[state=active]:bg-violet-500/20">
            Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="energy" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Energy Consumption
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">2.8kW</div>
                  <div className="text-sm text-gray-400">Current consumption</div>
                  <div className="flex items-center justify-center gap-1 mt-2 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">8% reduction</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  Efficiency Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">94%</div>
                  <div className="text-sm text-gray-400">System efficiency</div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '94%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Zone Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={150}>
                  <PieChart>
                    <Pie
                      data={zoneData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {zoneData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Energy Consumption Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={energyData}>
                  <defs>
                    <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" tick={{ fill: '#9CA3AF' }} />
                  <YAxis tick={{ fill: '#9CA3AF' }} />
                  <Area
                    type="monotone"
                    dataKey="consumption"
                    stroke="#8B5CF6"
                    fillOpacity={1}
                    fill="url(#energyGradient)"
                    strokeWidth={2}
                  />
                  <Area
                    type="monotone"
                    dataKey="cost"
                    stroke="#10B981"
                    fillOpacity={1}
                    fill="url(#costGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Daily Usage Patterns</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="hour" tick={{ fill: '#9CA3AF' }} />
                  <YAxis tick={{ fill: '#9CA3AF' }} />
                  <Line
                    type="monotone"
                    dataKey="brightness"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6', r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="motion"
                    stroke="#14B8A6"
                    strokeWidth={3}
                    dot={{ fill: '#14B8A6', r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="charging"
                    stroke="#F59E0B"
                    strokeWidth={3}
                    dot={{ fill: '#F59E0B', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Device Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" tick={{ fill: '#9CA3AF' }} />
                    <YAxis tick={{ fill: '#9CA3AF' }} />
                    <Bar dataKey="devices" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-xl border-white/10">
              <CardHeader>
                <CardTitle className="text-white">System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Uptime</span>
                      <span className="text-white">99.8%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '99.8%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Response Time</span>
                      <span className="text-white">1.2ms</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Error Rate</span>
                      <span className="text-white">0.02%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full" style={{ width: '2%' }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default Analytics;