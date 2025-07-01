'use client';

import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [currentLetter, setCurrentLetter] = useState(0);
  
  const letters = [
    {
      title: "第一封信 - 初识",
      date: "1952年春",
      from: "宽植",
      to: "爱纯",
      content: "爱纯，今天在柑橘园里遇见你，你专注读书的样子如春日暖阳。虽然话不多，但我想告诉你，你的存在让这个世界都变得明亮了。愿你的文学梦想如柑橘花一样绚烂绽放。"
    },
    {
      title: "第二封信 - 约定",  
      date: "1952年夏",
      from: "爱纯",
      to: "宽植",
      content: "宽植，谢谢你总是在我需要的时候出现。你说要为我做一个书架，我很期待。妈妈说海女要坚强，但和你在一起时，我想做个温柔的普通女孩。"
    },
    {
      title: "第三封信 - 思念",
      date: "1952年秋", 
      from: "爱纯",
      to: "宽植",
      content: "宽植，你去首尔学手艺已经一个月了。柑橘开始变黄，就像我每天想你的心情。妈妈潜水时找到了一颗特别美的珍珠，她说要留给我做嫁妆。"
    },
    {
      title: "第四封信 - 承诺",
      date: "1953年冬",
      from: "宽植", 
      to: "爱纯",
      content: "爱纯，不管叔叔家如何对待你，我都会保护你。我在首尔学会了很多新技艺，回来后要为我们建造最美的家。等柑橘收获的时候，我们就结婚吧。"
    }
  ];

  useEffect(() => {
    console.log("=== 爱纯与宽植的情书集 ===");
    console.log("展示1950年代济州岛青年男女的纯真爱情");
    
    // 类定义 - 信件类
    class LoveLetter {
      from: string;
      to: string;
      date: string;
      content: string;
      
      constructor(from: string, to: string, date: string, content: string) {
        this.from = from;
        this.to = to;
        this.date = date;
        this.content = content;
      }
      
      display() {
        console.log(`从 ${this.from} 写给 ${this.to}`);
        console.log(`日期：${this.date}`);
        console.log(`内容：${this.content}`);
      }
    }
    
    // 创建信件对象
    const firstLetter = new LoveLetter(
      "宽植", 
      "爱纯", 
      "1952年春", 
      "今天在柑橘园里遇见你..."
    );
    
    firstLetter.display();
    
    // 继承 - 特殊信件类
    class SpecialLetter extends LoveLetter {
      occasion: string;
      
      constructor(from: string, to: string, date: string, content: string, occasion: string) {
        super(from, to, date, content);
        this.occasion = occasion;
      }
      
      displaySpecial() {
        console.log(`特殊场合：${this.occasion}`);
        this.display();
      }
    }
    
    const proposalLetter = new SpecialLetter(
      "宽植",
      "爱纯", 
      "1953年秋",
      "愿意嫁给我吗？",
      "求婚"
    );
    
    proposalLetter.displaySpecial();
    
    // DOM操作和事件绑定
    if (h1Ref.current) {
      h1Ref.current.addEventListener('click', () => {
        alert('你点击了情书标题！就像翻开了爱纯和宽植的爱情故事。');
      });
    }
    
    // 回调函数演示
    function readLetter(callback: () => void) {
      console.log("正在阅读情书...");
      setTimeout(callback, 1000);
    }
    
    readLetter(() => {
      console.log("读完情书，心中满怀温暖");
    });
    
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回济州岛编程之旅</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 rounded-xl border border-amber-200 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">爱纯与宽植的情书 - JavaScript 高级特性演示</h2>
          <ul className="list-disc list-inside text-amber-700 space-y-2 mb-2">
            <li>创建互动式情书展示页面，用JavaScript实现书信的翻页效果。</li>
            <li>每一封信都记录着两人从青梅竹马到相知相恋的美好时光。</li>
            <li>演示 TypeScript 类、继承、回调函数、DOM 操作等基础知识。</li>
            <li>请按 F12 打开浏览器控制台，观察情书的技术实现。</li>
          </ul>
        </section>
        
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 
              ref={h1Ref}
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-800 via-orange-600 to-yellow-600 mb-4 cursor-pointer hover:scale-105 transition-transform"
            >
              爱纯与宽植的情书
            </h1>
            <p className="text-lg text-amber-700 mb-8">
              1950年代济州岛的纯真爱情故事
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* 信件展示区 */}
            <div className="bg-white/70 backdrop-blur-md rounded-lg p-8 shadow-xl border border-amber-200">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100 text-amber-900 p-6 rounded-lg shadow-inner border border-amber-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-amber-800">
                    {letters[currentLetter].title}
                  </h3>
                  <span className="text-sm text-amber-600">
                    {letters[currentLetter].date}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-amber-600 mb-4">
                  <span>从：{letters[currentLetter].from}</span>
                  <span>致：{letters[currentLetter].to}</span>
                </div>
                <p className="text-amber-700 leading-relaxed font-serif text-base">
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
                      <div className="text-xs opacity-60">{letter.from} → {letter.to}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 技术说明 */}
              <div className="bg-white/70 backdrop-blur-md rounded-lg p-6 border border-amber-200 shadow-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-4">技术实现</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-amber-50 p-3 rounded border border-amber-200">
                    <strong className="text-amber-800">TypeScript 类：</strong>
                    <span className="text-amber-700"> LoveLetter 类封装信件属性</span>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                    <strong className="text-amber-800">继承机制：</strong>
                    <span className="text-amber-700"> SpecialLetter 继承自 LoveLetter</span>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <strong className="text-amber-800">DOM 操作：</strong>
                    <span className="text-amber-700"> 点击标题触发交互事件</span>
                  </div>
                  <div className="bg-amber-50 p-3 rounded border border-amber-200">
                    <strong className="text-amber-800">回调函数：</strong>
                    <span className="text-amber-700"> 异步处理信件阅读</span>
                  </div>
                </div>
              </div>

              {/* 爱情寓意 */}
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg p-6 border border-amber-200 shadow-xl">
                <h3 className="text-xl font-bold text-amber-800 mb-4">爱情的编程隐喻</h3>
                <div className="space-y-3 text-sm text-amber-700">
                  <p>• <strong>类的继承</strong>：就像爱情的传承，每一代都有新的特色</p>
                  <p>• <strong>回调函数</strong>：如同等待回信，耐心而充满期待</p>
                  <p>• <strong>事件绑定</strong>：就像心有灵犀，一触即发</p>
                  <p>• <strong>状态管理</strong>：如同恋人间的默契，心意相通</p>
                </div>
                
                <div className="mt-6 bg-white/60 p-4 rounded-lg border border-amber-200">
                  <h4 className="text-amber-800 font-semibold mb-2">剧中金句</h4>
                  <blockquote className="text-amber-700 italic">
                    &quot;只要写下你最想说的话，就是你人生中最好的一首诗&quot;
                  </blockquote>
                  <p className="text-amber-600 text-sm mt-2">—— 爱纯对宽植真挚情感的表达</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 