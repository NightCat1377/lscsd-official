import type { TabId } from '../App';

interface ContentPanelProps {
  activeTab: TabId;
}

const content: Record<TabId, { title: string; description: string }> = {
  about: {
    title: 'Про Департамент Шерифів',
    description: 'Тут буде інформація про Департамент Шерифів Округу Лос Сантос...',
  },
  departments: {
    title: 'Відділи',
    description: 'Тут буде інформація про відділи департаменту...',
  },
  lectures: {
    title: 'База даних лекцій',
    description: 'Тут будуть розміщені навчальні матеріали та лекції...',
  },
  statute: {
    title: 'Внутрішній статут',
    description: 'Тут буде розміщено внутрішній статут департаменту...',
  },
};

export function ContentPanel({ activeTab }: ContentPanelProps) {
  const currentContent = content[activeTab];

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        {/* Header with accent line */}
        <div className="mb-8">
          <div className="h-1 w-16 bg-[#d4af37] mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-2">{currentContent.title}</h2>
        </div>

        {/* Content Area - Empty for user to fill */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-[#121212] border border-[#2a2a2a] rounded-lg p-6 min-h-[400px]">
            <p className="text-[#888] italic">{currentContent.description}</p>
            
            {/* Placeholder for user content */}
            <div className="mt-6 space-y-4">
              <div className="h-4 bg-[#1a1a1a] rounded w-3/4"></div>
              <div className="h-4 bg-[#1a1a1a] rounded w-full"></div>
              <div className="h-4 bg-[#1a1a1a] rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
