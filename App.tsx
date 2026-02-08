
import React from 'react';
import { COLORS } from './constants';
import StatusBar from './components/StatusBar';
import AppGrid from './components/AppGrid';
import Dock from './components/Dock';
import { WeatherWidget, ClockWidget } from './components/IOSWidget';
import NotificationStack from './components/NotificationBanner';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black overflow-hidden select-none">
      {/* 19:9 Aspect Ratio Container (iPhone 16 Pro Frame) */}
      <div 
        className={`relative ${COLORS.background} h-full max-h-[926px] aspect-[9/19.5] rounded-[55px] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden ring-[14px] ring-[#1a1a1a] ring-inset border-[6px] border-black`}
      >
        {/* Launcher UI Layer */}
        <div className="relative z-10 flex flex-col h-full">
          <StatusBar />
          
          <div className="flex-1 overflow-y-auto no-scrollbar pt-2">
            {/* Widget Area */}
            <div className="grid grid-cols-2 gap-4 px-6 mt-6 h-40">
                <ClockWidget />
                <WeatherWidget />
            </div>
            
            {/* Main App Grid */}
            <AppGrid />

            {/* Notification Stack */}
            <NotificationStack />
          </div>

          {/* iOS Search Pill */}
          <div className="flex justify-center mb-4">
            <div className="ios-glass px-4 py-1.5 rounded-full flex items-center space-x-2 active:bg-white/20 transition-all cursor-pointer group">
              <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5 opacity-40 group-active:opacity-100">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <span className="text-white/40 text-[12px] font-bold tracking-tight group-active:text-white">Search</span>
            </div>
          </div>

          <Dock />

          {/* iOS Gesture Indicator */}
          <div className="flex justify-center pb-2.5 w-full mt-auto">
            <div className="w-32 h-1.5 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Dynamic iOS Wallpaper */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1c1e] via-[#000000] to-[#000000]"></div>
          {/* Aesthetic wallpaper glows */}
          <div className="absolute top-[-10%] right-[-10%] w-[100%] h-[60%] bg-[#0A84FF]/15 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-5%] left-[-15%] w-[90%] h-[50%] bg-[#FF2D55]/10 blur-[100px] rounded-full"></div>
          <div className="absolute top-[40%] left-[10%] w-[40%] h-[30%] bg-[#AF52DE]/10 blur-[140px] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
