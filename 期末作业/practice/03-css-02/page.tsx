'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LifePhilosophyPage() {
  const [selectedSeason, setSelectedSeason] = useState('春天的希望');

  const lifeStages = [
    {
      name: '春天的希望',
      description: '爱纯和宽植初遇的青春时光',
      color: 'bg-gradient-to-br from-yellow-100 to-amber-100',
      quote: '如春日暖阳，青春的爱情总是充满希望与憧憬。'
    },
    {
      name: '夏日的考验',
      description: '面对世俗偏见和家庭阻挠',
      color: 'bg-gradient-to-br from-orange-200 to-amber-200',
      quote: '夏日炎炎如生活的考验，但相爱的心不会因困难而退缩。'
    },
    {
      name: '秋天的收获',
      description: '私奔后相互扶持的艰难岁月',
      color: 'bg-gradient-to-br from-amber-200 to-yellow-200',
      quote: '秋收时节，苦涩的日子里也能品尝到甘甜的果实。'
    },
    {
      name: '冬日的温暖',
      description: '三代女性的传承与成长',
      color: 'bg-gradient-to-br from-yellow-200 to-orange-100',
      quote: '冬日虽寒，但家人的爱如炉火般温暖人心。'
    }
  ];

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
          <h1 className="text-3xl font-bold text-amber-800 mb-6 text-center">济州岛的苦甜人生</h1>
          <p className="text-amber-700 text-center mb-8 text-lg leading-relaxed">
            如同柑橘从苦涩到甘甜的转变，爱纯和宽植的爱情也在艰难中绽放出最美的光芒。
            人生就像济州岛的四季，每一个阶段都有它独特的意义。
          </p>
          
          <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-3">剧中哲理</h3>
            <blockquote className="text-amber-700 italic text-center text-lg">
              &ldquo;不管生活多么苦涩的橘子，我们都能把它酿成甜美的橘子糖浆，泡上一杯温暖的橘子茶。&rdquo;
            </blockquote>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {lifeStages.map((stage) => (
              <div 
                key={stage.name}
                className={`${stage.color} p-6 rounded-lg border border-amber-200 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedSeason === stage.name ? 'ring-2 ring-amber-400' : ''
                }`}
                onClick={() => setSelectedSeason(stage.name)}
              >
                <h3 className="text-lg font-semibold text-amber-800 mb-2">{stage.name}</h3>
                <p className="text-amber-700 text-sm mb-3">{stage.description}</p>
                <div className="text-xs text-amber-600 font-mono">
                  点击查看详情
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto bg-white/60 rounded-xl border border-amber-100 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
            {selectedSeason} - 人生感悟
          </h2>
          
          <div className="space-y-6">
            {lifeStages.filter(stage => stage.name === selectedSeason).map(stage => (
              <div key={stage.name} className={`${stage.color} p-6 rounded-lg border border-amber-200`}>
                <blockquote className="text-amber-700 italic text-lg text-center mb-4">
                  {stage.quote}
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">生活感悟</h4>
                    <ul className="text-amber-700 space-y-1 text-sm">
                      <li>• 苦难是成长的养分</li>
                      <li>• 相爱的力量超越一切困难</li>
                      <li>• 每一代女性都在为后代铺路</li>
                      <li>• 家庭的温暖是最大的财富</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">技术实现</h4>
                    <ul className="text-amber-700 space-y-1 text-sm">
                      <li>• CSS Grid 四季布局</li>
                      <li>• Flexbox 内容对齐</li>
                      <li>• 渐变背景营造氛围</li>
                      <li>• 交互式季节切换</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">三代女性的传承</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-amber-200 w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-amber-800 font-bold">海女</div>
                <p className="text-amber-700 text-sm">奶奶在海里游</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-200 w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-amber-800 font-bold">爱纯</div>
                <p className="text-amber-700 text-sm">妈妈在地上跑</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-200 w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-amber-800 font-bold">金明</div>
                <p className="text-amber-700 text-sm">我才能在天上飞</p>
              </div>
            </div>
            <p className="text-amber-600 text-center mt-4 italic">
              &ldquo;外婆在海里游，妈妈在地上跑，我才能在天上飞&rdquo;
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 