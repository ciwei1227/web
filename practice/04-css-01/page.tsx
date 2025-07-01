'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900 relative overflow-hidden">
      {/* 房间背景效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.2),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(251,191,36,0.15),transparent_50%)]"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 py-12">
        <nav className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-amber-600 hover:text-amber-500 transition-colors"
          >
            ← 返回济州岛编程之旅
          </Link>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-800 via-orange-600 to-yellow-600 mb-6">
            爱纯的书桌布局
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            重现爱纯房间里的书桌场景，使用CSS定位技术精确布局书籍、信件和写作工具
          </p>
        </header>

        {/* 书桌场景 - CSS定位演示 */}
        <section className="mb-12">
          <div className="desk-container">
            <div className="desk-surface">
              {/* 书籍堆叠 */}
              <div className="book-stack book-1">
                <div className="book-title">诗歌集</div>
              </div>
              <div className="book-stack book-2">
                <div className="book-title">文学理论</div>
              </div>
              <div className="book-stack book-3">
                <div className="book-title">世界名著</div>
              </div>

              {/* 写作工具 */}
              <div className="writing-tools">
                <div className="ink-bottle">墨</div>
                <div className="fountain-pen">钢笔</div>
              </div>

              {/* 情书 */}
              <div className="love-letter">
                <div className="letter-header">给宽植的信</div>
                <div className="letter-preview">
                  亲爱的宽植，<br/>
                  济州岛的柑橘花又开了，<br/>
                  想起你说过的话...<br/>
                  <small style={{ color: '#92400e', fontSize: '6px' }}>absolute定位</small>
                </div>
              </div>

              {/* 台灯 */}
              <div className="desk-lamp">
                <div className="lamp-shade">🔅</div>
                <div className="lamp-arm"></div>
                <div className="lamp-base"></div>
              </div>

              {/* 小盆栽 */}
              <div className="small-plant">
                <div style={{ fontSize: '16px' }}>🌱</div>
                <div className="plant-pot">🏺</div>
                <div className="plant-label">济州岛仙人掌</div>
              </div>

              {/* 日记本 */}
              <div className="diary-book">
                <div className="diary-cover">爱纯日记</div>
                <div className="diary-pages"></div>
              </div>

              {/* 文具 */}
              <div className="eraser">橡皮</div>
              <div className="pencil">✏️</div>

              {/* 闹钟 */}
              <div className="alarm-clock">
                <div className="clock-face">⏰</div>
                <div className="clock-time">早上6点</div>
              </div>
            </div>

            {/* 书桌抽屉 */}
            <div className="desk-drawer">
              <div className="drawer-handle"></div>
              <div className="drawer-handle"></div>
              <div className="drawer-label">文学梦想的小抽屉</div>
            </div>
          </div>
        </section>

        {/* 定位方式说明 */}
        <section className="bg-white/80 rounded-xl border border-amber-200 shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">CSS 定位技术详解</h2>
          <div className="space-y-4">
            <div className="positioning-example">
              <div className="position-type static">static</div>
              <div className="position-desc">默认定位，元素按照文档流正常排列</div>
            </div>
            <div className="positioning-example">
              <div className="position-type relative">relative</div>
              <div className="position-desc">相对定位，相对于自身原始位置进行偏移</div>
            </div>
            <div className="positioning-example">
              <div className="position-type absolute">absolute</div>
              <div className="position-desc">绝对定位，相对于最近的已定位父元素</div>
            </div>
            <div className="positioning-example">
              <div className="position-type fixed">fixed</div>
              <div className="position-desc">固定定位，相对于浏览器窗口</div>
            </div>
          </div>
        </section>

        {/* 爱纯的房间故事 */}
        <section className="bg-white/60 rounded-xl border border-amber-200 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">爱纯房间的故事</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-4">文学的梦想角落</h3>
              <p className="text-amber-600 leading-relaxed mb-4">
                在叔叔家的小房间里，爱纯用心布置了属于自己的文学天地。每一本书的位置、
                每一支笔的摆放，都体现着她对知识的渴望和对美好未来的憧憬。
              </p>
              <ul className="text-amber-700 space-y-2 text-sm">
                <li>• 诗歌集是她最珍爱的书籍</li>
                <li>• 给宽植的信件总是放在最显眼的位置</li>
                <li>• 小盆栽代表着对生活的希望</li>
                <li>• 日记记录着青春的点点滴滴</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-4">技术实现亮点</h3>
              <p className="text-amber-600 leading-relaxed mb-4">
                通过精确的CSS定位，我们重现了爱纯书桌的每一个细节。
                这不仅是技术的展示，更是对那个时代文学少女内心世界的致敬。
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="text-amber-800 font-semibold mb-2">剧中金句</h4>
                <blockquote className="text-amber-700 italic">
                  &ldquo;只要写下你最想说的话，就是你人生中最好的一首诗&rdquo;
                </blockquote>
                <p className="text-amber-600 text-sm mt-2">—— 爱纯对文学的理解与热爱</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .desk-container {
          max-width: 800px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(251, 191, 36, 0.2));
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 3px solid rgba(245, 158, 11, 0.4);
        }
        
        .desk-surface {
          position: relative;
          width: 100%;
          height: 500px;
          background: linear-gradient(45deg, rgba(254, 243, 199, 0.9), rgba(253, 230, 138, 0.8));
          border-radius: 0.5rem;
          border: 2px solid rgba(245, 158, 11, 0.6);
          overflow: hidden;
          box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .book-stack {
          position: absolute;
          width: 80px;
          height: 12px;
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        
        .book-stack:hover {
          transform: translateY(-2px);
        }
        
        .book-1 {
          background: linear-gradient(90deg, #dc2626, #991b1b);
          top: 50px;
          left: 50px;
          z-index: 3;
        }
        
        .book-2 {
          background: linear-gradient(90deg, #059669, #047857);
          top: 65px;
          left: 55px;
          z-index: 2;
        }
        
        .book-3 {
          background: linear-gradient(90deg, #7c3aed, #5b21b6);
          top: 80px;
          left: 60px;
          z-index: 1;
        }
        
        .book-title {
          position: absolute;
          top: -25px;
          left: 0;
          font-size: 10px;
          color: #92400e;
          font-weight: 600;
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.9);
          padding: 2px 6px;
          border-radius: 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .book-stack:hover .book-title {
          opacity: 1;
        }
        
        .writing-tools {
          position: relative;
          top: 200px;
          left: 150px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .ink-bottle {
          width: 30px;
          height: 40px;
          background: linear-gradient(180deg, #1e40af, #1e3a8a);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: white;
          text-align: center;
          line-height: 1;
        }
        
        .fountain-pen {
          width: 60px;
          height: 8px;
          background: linear-gradient(90deg, #374151, #111827);
          border-radius: 4px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: #d1d5db;
          transform: rotate(15deg);
        }
        
        .love-letter {
          position: absolute;
          top: 30px;
          right: 50px;
          width: 120px;
          height: 80px;
          background: linear-gradient(135deg, #fef3c7, #fbbf24);
          border-radius: 4px;
          padding: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          border: 1px solid #f59e0b;
          z-index: 4;
        }
        
        .letter-header {
          font-size: 10px;
          font-weight: 600;
          color: #92400e;
          margin-bottom: 4px;
          text-align: center;
        }
        
        .letter-preview {
          font-size: 8px;
          color: #451a03;
          line-height: 1.3;
        }
        
        .desk-lamp {
          position: absolute;
          top: 20px;
          left: 200px;
          z-index: 5;
        }
        
        .lamp-base {
          width: 20px;
          height: 8px;
          background: #374151;
          border-radius: 50%;
          margin: 0 auto;
        }
        
        .lamp-arm {
          width: 3px;
          height: 40px;
          background: #6b7280;
          margin: 0 auto;
        }
        
        .lamp-shade {
          font-size: 20px;
          text-align: center;
          filter: drop-shadow(0 0 10px #fbbf24);
        }
        
        .small-plant {
          position: relative;
          top: 350px;
          left: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        
        .plant-pot {
          font-size: 24px;
        }
        
        .plant-label {
          font-size: 8px;
          color: #92400e;
          background: rgba(255, 255, 255, 0.8);
          padding: 2px 4px;
          border-radius: 2px;
        }
        
        .diary-book {
          position: absolute;
          top: 300px;
          left: 50px;
          width: 100px;
          height: 70px;
          background: linear-gradient(135deg, #7c2d12, #a3332b);
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .diary-cover {
          font-size: 10px;
          color: #fbbf24;
          font-weight: 600;
          text-align: center;
        }
        
        .diary-pages {
          width: 90%;
          height: 4px;
          background: #f3f4f6;
          margin-top: 4px;
          border-radius: 1px;
        }
        
        .eraser {
          position: absolute;
          top: 150px;
          right: 100px;
          width: 30px;
          height: 12px;
          background: #ec4899;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          color: white;
        }
        
        .pencil {
          position: absolute;
          top: 170px;
          right: 120px;
          font-size: 20px;
          transform: rotate(-30deg);
        }
        
        .alarm-clock {
          position: absolute;
          bottom: 50px;
          right: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        
        .clock-face {
          font-size: 24px;
        }
        
        .clock-time {
          font-size: 8px;
          color: #92400e;
          background: rgba(255, 255, 255, 0.8);
          padding: 2px 4px;
          border-radius: 2px;
        }
        
        .desk-drawer {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.8), rgba(251, 191, 36, 0.6));
          height: 40px;
          border-radius: 0 0 0.5rem 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 2px solid rgba(245, 158, 11, 0.6);
          border-top: none;
        }
        
        .drawer-handle {
          width: 20px;
          height: 8px;
          background: #6b7280;
          border-radius: 4px;
          border: 1px solid #374151;
        }
        
        .drawer-label {
          font-size: 10px;
          color: #92400e;
        }
        
        .positioning-example {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 6px;
        }
        
        .position-type {
          font-family: monospace;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 4px;
          min-width: 60px;
          text-align: center;
        }
        
        .position-type.static {
          background: #6b7280;
          color: white;
        }
        
        .position-type.relative {
          background: #059669;
          color: white;
        }
        
        .position-type.absolute {
          background: #dc2626;
          color: white;
        }
        
        .position-type.fixed {
          background: #7c3aed;
          color: white;
        }
        
        .position-desc {
          font-size: 14px;
          color: #92400e;
        }
        
        @media (max-width: 768px) {
          .desk-surface {
            height: 400px;
          }
          
          .book-stack, .love-letter, .desk-lamp, .small-plant, .diary-book {
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
} 