import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      {/* 韩屋氛围效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.2),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.15),transparent_70%)]"></div>
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
            叔叔家的传统韩屋
          </h1>
          <p className="text-lg text-amber-700 max-w-3xl mx-auto">
           还原爱纯寄养的叔叔家韩屋布局，展现1950年代传统建筑的魅力。相对定位的运用让每个房间都有它的故事，虽然充满挑战但也见证了成长。
          </p>
        </header>

        <div className="space-y-12">
          {/* 标准韩屋布局 */}
          <section className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-amber-200 p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">标准韩屋布局</h2>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-lg border border-amber-300">
              <div className="space-y-4 text-amber-900 text-center">
                <div className="p-4 bg-amber-200/60 rounded-lg border border-amber-400/50">
                  <div className="text-sm text-amber-800 mb-1">安채 (女性区域)</div>
                  <div className="text-xs text-amber-600">爱纯的房间</div>
                </div>
                <div className="p-4 bg-orange-200/60 rounded-lg border border-orange-400/50">
                  <div className="text-sm text-orange-800 mb-1">大청 (大厅)</div>
                  <div className="text-xs text-orange-600">家族聚会场所</div>
                </div>
                <div className="p-4 bg-yellow-200/60 rounded-lg border border-yellow-400/50">
                  <div className="text-sm text-yellow-800 mb-1">사랑채 (男性区域)</div>
                  <div className="text-xs text-yellow-600">叔叔的书房</div>
                </div>
                <div className="p-4 bg-amber-200/50 rounded-lg border border-amber-400/50">
                  <div className="text-sm text-amber-800 mb-1">부엌 (厨房)</div>
                  <div className="text-xs text-amber-600">婶婶的领域</div>
                </div>
              </div>
            </div>
          </section>

          {/* 相对定位调整后的布局 */}
          <section className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-amber-200 p-8">
             <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">适应性调整布局</h2>
             <div className="bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 p-6 rounded-lg border border-amber-300 relative min-h-[400px]">
              
              <div className="space-y-4 text-amber-900 text-center relative">
                {/* 爱纯的房间 - 原始位置的幽灵 */}
                <div className="p-4 bg-amber-200/20 border-2 border-dashed border-amber-400 rounded-lg text-amber-500">
                  <div className="text-sm">安채原始位置</div>
                  <div className="text-xs">(爱纯本应住的地方)</div>
                </div>

                {/* 爱纯的房间 - 相对定位调整 */}
                <div className="p-4 bg-amber-400/60 rounded-lg border border-amber-500 absolute w-full" style={{ top: '0rem', left: '60px' }}>
                  <div className="text-sm text-amber-900 mb-1">安채 (调整后)</div>
                  <div className="text-xs text-amber-800">position: relative</div>
                  <div className="text-xs text-amber-700">left: 60px</div>
                  <div className="text-xs text-amber-600 mt-1">爱纯被安排到角落</div>
                </div>

                <div className="p-4 bg-orange-200/60 rounded-lg border border-orange-400/50">
                  <div className="text-sm text-orange-800 mb-1">大청 (不变)</div>
                  <div className="text-xs text-orange-600">家族聚会仍在这里</div>
                </div>
                
                {/* 叔叔书房 - 扩大了空间 */}
                <div className="p-4 bg-yellow-300/60 rounded-lg border border-yellow-500 relative" style={{ height: '80px', marginTop: '20px' }}>
                  <div className="text-sm text-yellow-900 mb-1">사랑채 (扩大后)</div>
                  <div className="text-xs text-yellow-800">position: relative</div>
                  <div className="text-xs text-yellow-700">height: +40px</div>
                  <div className="text-xs text-yellow-600 mt-1">叔叔的权威空间</div>
                </div>

                {/* 厨房 - 也被压缩了 */}
                <div className="p-2 bg-amber-300/40 rounded-lg border border-amber-400 relative" style={{ height: '50px', marginTop: '10px' }}>
                  <div className="text-sm text-amber-900 mb-1">부엌 (压缩)</div>
                  <div className="text-xs text-amber-700">height: -20px</div>
                  <div className="text-xs text-amber-600">婶婶的空间变小</div>
                </div>
              </div>
              
              {/* 说明文字 */}
              <div className="absolute bottom-4 right-4 bg-white/80 p-3 rounded-lg border border-amber-300 text-xs">
                <div className="text-amber-800 font-semibold mb-1">相对定位效果</div>
                <div className="text-amber-600">相对于原始位置的偏移</div>
              </div>
            </div>
          </section>

          {/* 生活现实的反映 */}
          <section className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-amber-200 p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">生活现实的反映</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">爱纯的处境</h3>
                <div className="space-y-3 text-amber-700 text-sm">
                  <p>• 寄人篱下的无奈，房间被安排在最角落</p>
                  <p>• 在叔叔家必须小心翼翼，不敢占用太多空间</p>
                  <p>• 渴望独立，但现实让她必须忍耐</p>
                  <p>• 内心的文学梦想与现实环境的对比</p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">家庭权力结构</h3>
                <div className="space-y-3 text-amber-700 text-sm">
                  <p>• 叔叔的사랑채占据最大空间，体现男性权威</p>
                  <p>• 大청作为公共区域，维持表面和谐</p>
                  <p>• 厨房空间的压缩反映女性地位</p>
                  <p>• 传统韩屋布局中的等级观念</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4 text-center">CSS相对定位的寓意</h3>
              <p className="text-amber-700 text-center leading-relaxed">
                就像相对定位（position: relative）一样，爱纯在叔叔家的生活也是相对于&quot;正常家庭生活&quot;的偏移。
                虽然表面上还在原来的位置，但实际上已经被边缘化了。这种微妙的位置调整，
                正如CSS中的相对定位——看似在原位，实则已偏移。
              </p>
              
              <div className="mt-6 bg-white/60 p-4 rounded-lg border border-amber-200">
                <h4 className="text-amber-800 font-semibold mb-2">剧中金句</h4>
                <blockquote className="text-amber-700 italic text-center">
                  &quot;我不是你们家的孩子，但也不是外人&quot;
                </blockquote>
                <p className="text-amber-600 text-sm mt-2 text-center">—— 爱纯在叔叔家尴尬身份的写照</p>
              </div>
            </div>
          </section>

          {/* 技术说明 */}
          <section className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-amber-200 p-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">相对定位技术要点</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                <div className="text-2xl mb-2">📍</div>
                <h4 className="font-semibold text-amber-800 mb-2">position: relative</h4>
                <p className="text-amber-700 text-sm">相对于元素原始位置进行偏移</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
                <div className="text-2xl mb-2">📏</div>
                <h4 className="font-semibold text-amber-800 mb-2">偏移属性</h4>
                <p className="text-amber-700 text-sm">top, right, bottom, left</p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
                <div className="text-2xl mb-2">👻</div>
                <h4 className="font-semibold text-amber-800 mb-2">占位保留</h4>
                <p className="text-amber-700 text-sm">原始位置仍被保留(虚线框)</p>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">代码示例</h3>
              <div className="bg-amber-900/10 p-4 rounded font-mono text-sm text-amber-800">
                <div>.anchae-room &#123;</div>
                <div className="ml-4">position: relative;</div>
                <div className="ml-4">left: 60px;</div>
                <div className="ml-4">{/* 向右偏移60px，但原位置仍占据空间 */}</div>
                <div>&#125;</div>
              </div>
            </div>
          </section>
        </div>

      </main>
    </div>
  );
}