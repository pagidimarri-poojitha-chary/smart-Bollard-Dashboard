// Mock API for development
export interface Device {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'maintenance';
  brightness: number;
  colorTemp: number;
  battery: number;
  uptime: string;
  lastSeen: string;
  zone: string;
  coordinates: { lat: number; lng: number };
}

export interface Zone {
  id: string;
  name: string;
  description: string;
  deviceCount: number;
  activeDevices: number;
  averageBrightness: number;
  energyConsumption: string;
  status: 'active' | 'maintenance';
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'info' | 'warning' | 'critical' | 'success';
  timestamp: Date;
  status: 'read' | 'unread';
  zone: string;
}

export interface Schedule {
  id: string;
  name: string;
  description: string;
  zones: string[];
  startTime: string;
  endTime: string;
  action: string;
  value: number | null;
  status: 'active' | 'paused';
  nextRun: Date;
}

// Mock data
const mockDevices: Device[] = [
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
    coordinates: { lat: 40.7128, lng: -74.0060 },
  },
  // Add more mock devices as needed
];

export const mockApi = {
  devices: {
    getAll: (): Promise<Device[]> => Promise.resolve(mockDevices),
    getById: (id: string): Promise<Device | null> => {
      const device = mockDevices.find(d => d.id === id);
      return Promise.resolve(device || null);
    },
    update: (id: string, data: Partial<Device>): Promise<Device> => {
      const deviceIndex = mockDevices.findIndex(d => d.id === id);
      if (deviceIndex !== -1) {
        mockDevices[deviceIndex] = { ...mockDevices[deviceIndex], ...data };
        return Promise.resolve(mockDevices[deviceIndex]);
      }
      throw new Error('Device not found');
    },
  },
  
  analytics: {
    getEnergyData: () => Promise.resolve([
      { month: 'Jan', consumption: 2400, cost: 340 },
      { month: 'Feb', consumption: 2100, cost: 300 },
      // Add more data points
    ]),
  },
  
  // Add more API endpoints as needed
};