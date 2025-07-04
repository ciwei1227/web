"use client";
import Link from 'next/link';

export default function EmbedDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      <main className="flex-grow w-full h-full relative z-10">
        <div className="sticky top-0 left-0 w-full z-20 bg-white/90 backdrop-blur-md border-b border-amber-200 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-amber-600 hover:text-amber-500 text-xl font-bold transition-colors">← 返回济州岛编程之旅</Link>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent drop-shadow">爱纯的文学世界</span>
            </div>
            <span className="text-amber-600 text-sm hidden md:block">1950年代济州岛少女的诗歌天地</span>
          </div>
        </div>
        <iframe
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="爱纯的诗歌朗读空间"
          width="100%"
          height="100%"
          className="fixed left-0 w-full z-10"
          style={{
            top: 64, // 只留导航栏高度
            height: 'calc(100vh - 64px)',
            border: 'none',
          }}
          allowFullScreen
        />
      </main>
    </div>
  );
} 