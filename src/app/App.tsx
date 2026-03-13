import { useState } from 'react';
import { SideNav } from './components/SideNav';
import { ContentPanel } from './components/ContentPanel';

export type TabId = 'about' | 'departments' | 'lectures' | 'statute';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  return (
    <div className="min-h-screen w-full flex bg-[#0a0a0a]">
      <SideNav activeTab={activeTab} onTabChange={setActiveTab} />
      <ContentPanel activeTab={activeTab} />
    </div>
  );
}