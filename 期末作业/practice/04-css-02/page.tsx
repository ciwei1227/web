import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      {/* 温暖夜空星星效果 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-[15%] right-[20%] w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[30%] left-[30%] w-1 h-1 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[25%] right-[15%] w-1 h-1 bg-amber-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[40%] left-[80%] w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回济州岛编程之旅</span>
          </Link>
        </div>

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-800 via-orange-600 to-yellow-600 mb-4">
            济州岛灯塔的夜晚
          </h1>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
            用绝对定位创建济州岛海边灯塔的夜景，星空下的灯塔为出海的渔民指引方向。就像宽植对爱纯的守护，永远照亮彼此的前路。
          </p>
        </header>

        <section className="max-w-4xl mx-auto mb-12">
          {/* 灯塔夜景场景 */}
          <section className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-amber-200 p-8">
            <h2 className="text-3xl font-bold text-amber-800 mb-2 border-l-4 border-amber-600 pl-4">绝对定位 - 构建灯塔夜景</h2>
            <p className="text-amber-700 mb-8 pl-5">使用 `absolute` 定位精确布局灯塔、船只和星空元素，创造层次丰富的夜景画面。</p>
            
            <div className="bg-gradient-to-b from-indigo-900 via-purple-900/80 to-indigo-800 p-10 rounded-lg h-96 relative border-2 border-dashed border-amber-400/50 overflow-hidden">
              <div className="absolute top-4 left-4 text-xs text-amber-200">济州岛海边夜景 (position: relative 容器)</div>
              
              {/* 灯塔 */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-32 bg-gradient-to-t from-stone-600 to-stone-400 rounded-t-sm"></div>
                <div className="w-10 h-8 bg-red-600 rounded-full -mt-2 -ml-2 relative">
                  <div className="absolute top-1 left-1 w-8 h-6 bg-amber-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* 月亮 */}
              <div className="absolute top-12 right-16 w-16 h-16 bg-yellow-200 rounded-full opacity-90"></div>
              
              {/* 海面上的小船 */}
              <div className="absolute bottom-20 right-24 w-12 h-4 bg-amber-800 rounded-b-full">
                <div className="w-1 h-8 bg-amber-700 absolute left-1/2 -top-8 transform -translate-x-1/2"></div>
              </div>
              
              {/* 远处的小船 */}
              <div className="absolute bottom-24 left-24 w-8 h-3 bg-amber-900 rounded-b-full">
                <div className="w-0.5 h-6 bg-amber-800 absolute left-1/2 -top-6 transform -translate-x-1/2"></div>
              </div>

              {/* 灯塔光束 */}
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent rotate-12 animate-pulse"></div>
            </div>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="text-amber-800 font-semibold mb-2">灯塔的守护寓意</h4>
                <p className="text-amber-700">
                  济州岛的灯塔夜夜为渔民照亮回家的路，就像宽植对爱纯的默默守护，
                  无论多远多黑暗，总有一束光为你点亮。
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="text-amber-800 font-semibold mb-2">技术实现要点</h4>
                <ul className="text-amber-700 space-y-1">
                  <li>• 父容器设置 position: relative</li>
                  <li>• 子元素使用 absolute 精确定位</li>
                  <li>• CSS动画营造氛围效果</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 定位演示对比 */}
          <section className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-amber-200 p-8 mt-8">
            <h2 className="text-3xl font-bold text-amber-800 mb-2 border-l-4 border-amber-600 pl-4">Fixed (固定) - 永恒的北极星</h2>
            <p className="text-amber-700 mb-8 pl-5">就像北极星永远固定在天空中为航海者指引方向，`fixed` 定位的元素会固定在视窗中。</p>
            
            <div className="h-48 flex justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-900/60 to-indigo-800 p-10 rounded-lg border border-amber-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <p className="text-amber-100 text-lg">滚动页面，观察右下角的&ldquo;北极星&rdquo;始终固定在视窗中。</p>
                  <p className="text-amber-200 text-sm mt-2">它代表着爱纯和宽植永恒不变的爱情。</p>
                </div>
            </div>
          </section>

          {/* 北极星 - 固定定位元素 */}
          <div className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-2xl shadow-amber-500/50 flex justify-center items-center z-50 animate-pulse">
            <span className="text-2xl">⭐</span>
          </div>

        </section>

        {/* 添加滚动空间 */}
        <div className="h-96 flex items-center justify-center">
          <div className="text-center text-amber-600">
            <div className="text-lg mb-2">继续滚动体验固定定位效果</div>
            <div className="text-sm">就像济州岛的夜空，无论走到哪里，星星总是陪伴着你</div>
          </div>
        </div>

      </main>
    </div>
  );
} 