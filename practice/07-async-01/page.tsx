'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Generation {
  name: string;
  period: string;
  role: string;
  sacrifice: string;
  dream: string;
  legacy: string;
  color: string;
}

export default function GenerationLegacyPage() {
  const [currentGeneration, setCurrentGeneration] = useState<Generation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [storyStage, setStoryStage] = useState<string>('');

  const generations: Generation[] = [
    {
      name: '海女奶奶',
      period: '1920-1950年代',
      role: '传统海女',
      sacrifice: '每日冒险潜水，为家人提供生活来源',
      dream: '希望女儿能有更好的生活',
      legacy: '勇敢面对生活的勇气和坚韧',
      color: 'bg-gradient-to-br from-blue-100 to-cyan-100'
    },
    {
      name: '爱纯',
      period: '1950-1980年代',
      role: '叛逆文学少女',
      sacrifice: '放弃个人梦想，为家庭和孩子奋斗',
      dream: '成为诗人，让女儿接受更好的教育',
      legacy: '文学的热爱和对知识的渴望',
      color: 'bg-gradient-to-br from-amber-100 to-yellow-100'
    },
    {
      name: '金明',
      period: '1980-2000年代',
      role: '现代职场女性',
      sacrifice: '为了理想工作，承受分离和挑战',
      dream: '在城市中实现自我价值',
      legacy: '独立自主的现代女性精神',
      color: 'bg-gradient-to-br from-orange-100 to-amber-100'
    }
  ];

  // 模拟异步加载三代女性的故事
  const loadGenerationStory = async (generation: Generation): Promise<string> => {
    setIsLoading(true);
    setStoryStage(`正在讲述${generation.name}的故事...`);
    
    // 模拟网络请求延迟
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStoryStage(`${generation.name}的传承故事已加载完成`);
    setIsLoading(false);
    
    return `${generation.name}的故事：在${generation.period}，她作为${generation.role}，${generation.sacrifice}。她的梦想是${generation.dream}，为后代留下了${generation.legacy}。`;
  };

  // 模拟Promise链式调用，展现三代传承
  const loadLegacyStory = async () => {
    try {
      setStoryStage('开始讲述三代女性的传承故事...');
      
      for (const generation of generations) {
        await loadGenerationStory(generation);
        setCurrentGeneration(generation);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      setStoryStage('三代女性的传承故事已全部加载完成');
    } catch (error) {
      setStoryStage('故事加载失败，请重试');
      console.error('加载故事时出错:', error);
    }
  };

  useEffect(() => {
    loadLegacyStory();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回济州岛编程之旅</span>
          </Link>
        </div>

        <section className="max-w-4xl mx-auto mb-10 bg-white/80 rounded-xl border border-amber-200 shadow-xl p-8">
          <h1 className="text-3xl font-bold text-amber-800 mb-6 text-center">三代女性的传承</h1>
          <p className="text-amber-700 text-center mb-8 text-lg leading-relaxed">
            从海女奶奶到爱纯再到女儿金明，每一代女性都在为下一代铺路。
            用Promise展现三代女性的传承故事，让女儿走出济州岛成为职场女性。
          </p>
          
          <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-3">传承的力量</h3>
            <blockquote className="text-amber-700 italic text-center text-lg">
              &ldquo;外婆在海里游，妈妈在地上跑，我才能在天上飞&rdquo;
            </blockquote>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-10 bg-white/60 rounded-xl border border-amber-100 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">故事加载状态</h2>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
            <div className="flex items-center justify-center gap-4">
              {isLoading && (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
              )}
              <p className="text-amber-700 text-lg font-medium">{storyStage}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generations.map((generation, index) => (
              <div
                key={generation.name}
                className={`${generation.color} p-6 rounded-lg border border-amber-200 shadow-lg transform transition-all duration-500 ${
                  currentGeneration?.name === generation.name ? 'scale-105 ring-2 ring-amber-400' : ''
                }`}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-amber-200 mx-auto mb-2 flex items-center justify-center text-amber-800 font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-800">{generation.name}</h3>
                  <p className="text-amber-600 text-sm">{generation.period}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-amber-800 text-sm">身份角色</h4>
                    <p className="text-amber-700 text-sm">{generation.role}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 text-sm">为家付出</h4>
                    <p className="text-amber-700 text-sm">{generation.sacrifice}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 text-sm">心中梦想</h4>
                    <p className="text-amber-700 text-sm">{generation.dream}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 text-sm">传承给后代</h4>
                    <p className="text-amber-700 text-sm">{generation.legacy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto bg-white/60 rounded-xl border border-amber-100 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">技术实现 - Promise 与异步编程</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Promise 特性</h3>
              <ul className="text-amber-700 space-y-2 text-sm">
                <li>• 异步加载每一代女性的故事</li>
                <li>• Promise.resolve() 模拟异步操作</li>
                <li>• async/await 语法简化异步代码</li>
                <li>• 错误处理 try-catch 机制</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">状态管理</h3>
              <ul className="text-amber-700 space-y-2 text-sm">
                <li>• useState 管理加载状态</li>
                <li>• useEffect 页面加载时触发</li>
                <li>• 动态更新UI展示进度</li>
                <li>• 响应式设计适配不同设备</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4 text-center">传承的意义</h3>
            <div className="text-center">
              <p className="text-amber-700 mb-4">
                每一代女性都在为下一代创造更好的条件。海女奶奶的勇敢、爱纯的坚韧、金明的独立，
                构成了一个完整的传承链条。
              </p>
              <blockquote className="text-amber-600 italic text-lg">
                &ldquo;只要写下你最想说的话，就是你人生中最好的一首诗&rdquo;
              </blockquote>
              <p className="text-amber-600 text-sm mt-2">—— 每一代女性都在用自己的方式书写人生的诗篇</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={loadLegacyStory}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              重新加载传承故事
            </button>
          </div>
        </section>
      </main>
    </div>
  );
} 