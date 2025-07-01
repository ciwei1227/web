'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoveLetterDemo() {
  const [currentLetter, setCurrentLetter] = useState(0);
  
  const letters = [
    {
      title: "第一封信 - 初识",
      date: "1952年春",
      content: "爱纯，今天在柑橘园里遇见你，你专注读书的样子如春日暖阳。虽然话不多，但我想告诉你，你的存在让这个世界都变得明亮了。—— 宽植"
    },
    {
      title: "第二封信 - 约定",  
      date: "1952年夏",
      content: "宽植，谢谢你总是在我需要的时候出现。你说要为我做一个书架，我很期待。妈妈说海女要坚强，但和你在一起时，我想做个温柔的普通女孩。—— 爱纯"
    },
    {
      title: "第三封信 - 誓言",
      date: "1953年秋", 
      content: "爱纯，不管叔叔家如何对待你，我都会保护你。等柑橘收获的时候，我们就结婚吧。我会用我的双手为我们创造美好的未来。—— 宽植"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08]"></div>
      
      <nav className="relative z-10 p-6">
        <Link 
          href="/"
          className="inline-flex items-center text-amber-600 hover:text-amber-500 transition-colors"
        >
          ← 返回济州岛编程之旅
        </Link>
      </nav>

      <main className="relative z-10 container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-800 via-orange-600 to-yellow-600 mb-4">
            爱纯与宽植的情书
          </h1>
          <p className="text-lg text-amber-700 mb-8">
            JavaScript 互动练习 - 用代码重现那些美好的书信往来
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* 信件展示区 */}
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-8 shadow-xl border border-amber-200">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100 text-amber-900 p-6 rounded-lg shadow-inner border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  {letters[currentLetter].title}
                </h3>
                <p className="text-sm text-amber-600 mb-4">
                  {letters[currentLetter].date}
                </p>
                <p className="text-amber-700 leading-relaxed font-serif">
                  {letters[currentLetter].content}
                </p>
              </div>
            </div>

            {/* 控制面板 */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-6 border border-amber-200 shadow-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-4">信件导航</h3>
                <div className="space-y-3">
                  {letters.map((letter, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentLetter(index)}
                      className={`w-full p-3 rounded-lg text-left transition-all duration-300 ${
                        currentLetter === index
                          ? 'bg-amber-500 text-white shadow-lg'
                          : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      }`}
                    >
                      <div className="font-medium">{letter.title}</div>
                      <div className="text-sm opacity-75">{letter.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 技术说明 */}
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-6 border border-amber-200 shadow-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-4">技术实现</h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li>• useState 管理当前信件状态</li>
                  <li>• 条件渲染显示不同内容</li>
                  <li>• 事件处理实现交互</li>
                  <li>• CSS transition 添加动画效果</li>
                  <li>• 响应式设计适配不同屏幕</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 代码展示 */}
          <div className="mt-12 bg-white/60 rounded-lg p-6 border border-amber-200 overflow-x-auto">
            <h3 className="text-lg font-bold text-amber-800 mb-4">核心代码片段</h3>
            <pre className="text-amber-700 text-sm bg-amber-50 p-4 rounded border border-amber-200">
{`const [currentLetter, setCurrentLetter] = useState(0);

// 信件数据数组
const letters = [
  {
    title: "第一封信 - 初识",
    date: "1952年春",
    content: "爱纯，今天在柑橘园里遇见你..."
  },
  // ...更多信件
];

// 切换信件的处理函数
const handleLetterChange = (index) => {
  setCurrentLetter(index);
};`}
            </pre>
            
            <div className="mt-6 bg-gradient-to-r from-yellow-100 to-amber-100 p-4 rounded-lg border border-amber-200">
              <h4 className="text-amber-800 font-semibold mb-2">剧中金句</h4>
              <blockquote className="text-amber-700 italic">
                &quot;只要写下你最想说的话，就是你人生中最好的一首诗&quot;
              </blockquote>
              <p className="text-amber-600 text-sm mt-2">—— 爱纯对宽植真挚情感的表达</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 