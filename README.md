# Smart Bollard Dashboard

A professional, luxury enterprise-ready dashboard for managing smart bollards with immersive 3D design and glassmorphism effects.

## Features

### 🚀 Core Functionality
- **Real-time Device Management** - Monitor and control smart bollards across multiple zones
- **Interactive 3D Controls** - Brightness, color temperature, and audio controls with smooth animations
- **Zone Management** - Organize devices by geographical zones with drag-drop capabilities
- **Schedule Automation** - Create and manage automated lighting schedules
- **Analytics Dashboard** - Comprehensive insights with gradient-filled charts
- **Alert System** - Real-time notifications with priority indicators

### 🎨 Design Features
- **Glassmorphism UI** - Translucent cards with blur effects and subtle shadows
- **3D Depth Effects** - Layered interface with hover animations and micro-interactions
- **Luxury Theme** - Dark background with blue-violet, teal, and gold gradient accents
- **Responsive Layout** - Edge-to-edge design optimized for widescreen displays
- **Smooth Animations** - Framer Motion powered transitions and loading states

### 📱 Pages & Components

#### Dashboard (`/dashboard`)
- KPI cards with live metrics (active devices, energy consumption, network status)
- Device uptime sparkline charts
- Energy distribution pie chart
- Recent activity feed with glassmorphism cards

#### Device Management (`/devices`)
- Full-screen device table with search and filters
- Quick actions on hover (toggle, brightness, color temperature)
- Real-time status indicators with glowing effects

#### Device Detail (`/devices/[id]`)
- Immersive device control interface
- 3D brightness and color temperature sliders
- Audio controls with modern music player styling
- Wireless charging status with animated charging ring
- Motion/ambient sensor timeline with scrollable 3D depth
- Power and battery monitoring cards
- System logs with depth effects
- Minimal map pin with glowing pulse animation

#### Zone Management (`/zones`)
- Zone cards with drag-drop styling
- Device count and energy consumption per zone
- Quick configuration access

#### Schedule Management (`/schedules`)
- Luxury calendar with 3D event cards
- Timeline view with drag-drop event editing
- Automated brightness and color temperature scheduling

#### Alerts (`/alerts`)
- Notification feed with glowing priority indicators
- Real-time alert badges
- Filterable alert categories

#### Analytics (`/analytics`)
- Full-width charts with gradient fills
- Energy consumption trends
- Usage pattern analysis
- Performance metrics dashboard

## Technology Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS** - Utility-first CSS with custom gradients and animations
- **Framer Motion** - Smooth animations and 3D transitions
- **shadcn/ui** - High-quality components for forms, modals, and layouts
- **Recharts** - Beautiful charts with gradient fills and animations
- **React Router** - Client-side routing with smooth page transitions
- **Lucide React** - Consistent icon library

## Installation & Setup

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/            # Layout components (Sidebar, Header)
│   ├── dashboard/         # Dashboard-specific components
│   └── device/            # Device control components
├── pages/                 # Route components
├── lib/                   # Utilities and helpers
├── hooks/                 # Custom React hooks
└── App.tsx               # Main application component
```

## Key Components

### 3D Control Components
- **BrightnessSlider** - Glowing draggable brightness control
- **ColorTempSlider** - Temperature control with color-coded feedback
- **AudioControls** - Modern music player interface
- **ChargingPadStatus** - Animated charging ring with device status

### Visualization Components  
- **KPICards** - 3D glass cards with hover effects and gradients
- **DeviceUptime** - Sparkline charts with gradient fills
- **SensorTimeline** - Scrollable timeline with motion/ambient data
- **MinimalMapPin** - Location display with glowing pulse animation

### Data Management
- **Mock API** - Simulated backend for development and demos
- **TypeScript Interfaces** - Strongly typed data models
- **Real-time Updates** - Simulated live data with smooth transitions

## Responsive Design

The dashboard is fully responsive with breakpoints optimized for:
- **Mobile** (< 768px) - Stacked layout with touch-friendly controls
- **Tablet** (768px - 1024px) - Adaptive grid with consolidated information
- **Desktop** (> 1024px) - Full immersive experience with edge-to-edge layout
- **Widescreen** (> 1400px) - Enhanced spacing and larger data visualizations

## Performance Features

- **Lazy Loading** - Components load on demand for faster initial renders
- **Optimized Animations** - Hardware-accelerated transitions using GPU
- **Efficient Re-renders** - Memoized components and optimized state updates
- **Bundle Optimization** - Tree-shaking and code splitting for minimal bundle size

## Customization

The dashboard supports extensive customization:

### Theme Colors
Modify the gradient system in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* violet-500 to purple-600 */ },
  secondary: { /* teal-500 to cyan-600 */ },
  accent: { /* amber-500 to orange-600 */ }
}
```

### Animation Settings
Adjust motion settings in component files or globally via Framer Motion configuration.

### Layout Adaptation
The modular component structure allows easy rearrangement of dashboard sections.

## Browser Compatibility

- **Chrome/Edge** - Full feature support including backdrop-filter
- **Firefox** - Complete compatibility with graceful fallbacks
- **Safari** - Optimized for both desktop and mobile Safari
- **Mobile** - Touch-optimized interactions and responsive layouts

## Development Notes

This dashboard prioritizes:
1. **Enterprise UX** - Professional feel suitable for client demonstrations
2. **Visual Impact** - Immediate "wow factor" through sophisticated design
3. **Performance** - Smooth 60fps animations and responsive interactions
4. **Maintainability** - Clean, modular code structure for easy extension
5. **Accessibility** - Proper contrast ratios and keyboard navigation support

## Future Enhancements

- Real-time data integration via WebSocket connections
- Advanced scheduling with timezone support
- Mobile app companion with push notifications
- Multi-tenant support for different organizations
- Advanced analytics with machine learning insights

## License

This project is designed for enterprise deployment and client demonstrations. Please ensure proper licensing for production use.