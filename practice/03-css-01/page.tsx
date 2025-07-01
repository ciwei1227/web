import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.3),transparent_70%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.2),transparent_70%)]"></div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10 relative">
        <div className="relative mb-12">
          <Link href="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回济州岛编程之旅</span>
          </Link>
        </div>

        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-800 via-orange-600 to-yellow-600 mb-4">
            海女妈妈的潜水日记
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            用CSS构建海女妈妈的潜水记录页面，展现她在海底寻找珍珠的艰辛。深蓝海洋与温暖阳光的对比，致敬每一位坚韧的海女。
          </p>
        </header>

        <section className="max-w-3xl mx-auto mb-10 bg-white/80 rounded-xl border border-amber-200 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">CSS 基础选择器演示</h2>
          <ul className="list-disc list-inside text-amber-700 space-y-2 mb-2">
            <li>通过海女妈妈的潜水故事，学习三种最基础的CSS选择器。</li>
            <li>标签选择器 (h2) - 如海面上的标识，指引方向</li>
            <li>类选择器 (.pearl-diary) - 如珍珠分类，各有特色</li>
            <li>ID选择器 (#diving-record) - 如唯一的珍珠，独一无二</li>
          </ul>
        </section>

        <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-amber-200">
          <div className="p-6 border-b border-amber-200 bg-gradient-to-r from-amber-100 to-yellow-100">
            <h3 className="text-xl font-semibold text-amber-800">1952年夏 - 爱纯妈妈的潜水记录</h3>
          </div>
          
          <div className="p-8">
            
            <div className="diving-section">
              <h1 className="text-3xl font-bold text-amber-800 mb-4" style={{ fontFamily: 'serif' }}>济州岛海女传统</h1>
              
              <h2 id="diving-record" className="text-2xl font-semibold text-orange-700 mb-4 border-l-4 border-orange-600 pl-4">
                今日潜水记录 (ID: diving-record)
              </h2>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <p className="text-blue-900 leading-relaxed mb-4">
                  清晨5点，海水温度18度。今天的能见度很好，海底的珊瑚礁清晰可见。
                  我在15米深的海底找到了3颗珍珠，其中一颗特别大，准备留给爱纯做嫁妆。
                </p>
                
                <div className="pearl-diary bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-md border-l-4 border-cyan-500">
                  <h4 className="text-cyan-700 font-semibold mb-2">珍珠收获记录 (class: pearl-diary)</h4>
                  <ul className="text-blue-800 space-y-1">
                    <li>• 大珍珠 1颗 - 直径8mm，光泽极佳</li>
                    <li>• 中等珍珠 2颗 - 可用于制作项链</li>
                    <li>• 小珍珠 5颗 - 留作备用</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200 mb-6">
                <h3 className="text-xl font-bold text-amber-800 mb-4">今日感悟 (标签选择器 h3)</h3>
                <p className="text-amber-700 leading-relaxed mb-4">
                  每次下潜都是一次生与死的考验。海底的世界虽然美丽，但也充满危险。
                  为了爱纯的未来，我必须坚持下去。这些珍珠不仅仅是财富，更是母亲对女儿深深的爱。
                </p>
                
                <div className="pearl-diary bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-500">
                  <h4 className="text-yellow-800 font-semibold mb-2">母亲的心愿 (class: pearl-diary)</h4>
                  <p className="text-yellow-700 text-sm">
                    &ldquo;我希望爱纯能够读书识字，不要像我一样只能靠体力生活。
                    这些珍珠是我能给她的最好礼物。&rdquo;
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200 mb-6">
                <h3 className="text-xl font-bold text-orange-800 mb-4">海女传统文化</h3>
                <p className="text-orange-700 leading-relaxed">
                  济州岛的海女文化已有千年历史。海女们不使用任何呼吸设备，
                  仅凭一口气潜入深海采集海产。这种古老的生活方式体现了女性的坚韧与勇敢。
                </p>
              </div>
            </div>
            
            <div className="haenyeo-spirit bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 p-6 rounded-xl border border-amber-300">
              <h3 className="text-xl font-bold text-amber-800 mb-4">海女精神的传承</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-amber-700 font-semibold mb-2">技能与勇气</h4>
                  <p className="text-amber-600 text-sm leading-relaxed">
                    海女们不使用任何呼吸设备，仅凭一口气潜入深海。这需要多年的训练和无比的勇气。
                    每一次下潜都是与大海的对话，与生命的较量。
                  </p>
                </div>
                <div>
                  <h4 className="text-amber-700 font-semibold mb-2">母爱的力量</h4>
                  <p className="text-amber-600 text-sm leading-relaxed">
                    爱纯的妈妈潜水不仅是为了生计，更是为了女儿的未来。
                    每一颗珍珠都承载着母亲的爱与期望。
                  </p>
                </div>
              </div>
              
              <div className="mt-6 bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="text-amber-800 font-semibold mb-2">剧中金句</h4>
                <blockquote className="text-amber-700 italic">
                  &ldquo;妈妈就像一朵向阳生长的野花&rdquo;
                </blockquote>
                <p className="text-amber-600 text-sm mt-2">—— 即使在最艰难的环境中，母亲的爱也如阳光般温暖</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}