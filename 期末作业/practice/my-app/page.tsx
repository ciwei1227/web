import Link from 'next/link';
import Image from 'next/image';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
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
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 rounded-xl border border-amber-200 shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-shrink-0">
            <Image src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="宽植家的鱼摊" width={220} height={140} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-amber-700 mb-4">鱼摊家的温暖守护</h2>
            <p className="text-amber-700 mb-4 leading-relaxed">
              在济州岛的海边，宽植家经营着一个小小的鱼摊。诚实寡言的少年宽植，从小就默默守护着同村的叛逆文学少女爱纯。
              每当爱纯路过鱼摊，他总是用最朴实的方式表达着内心的情感。
            </p>
            <ul className="list-disc list-inside text-amber-600 space-y-1 mb-4 text-sm">
              <li>清晨的第一网鱼 - 为爱纯家留下最新鲜的</li>
              <li>默默的关怀 - 从不多言却总在需要时出现</li>
              <li>青春的悸动 - 每一次相遇都充满温暖</li>
            </ul>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded text-xs font-mono">青春</span>
              <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded text-xs font-mono">守护</span>
              <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded text-xs font-mono">温暖</span>
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto bg-white/60 rounded-xl border border-amber-100 shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-amber-800">鱼摊旁的青春时光</h1>
          <div className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">清晨的海边</h3>
              <p className="text-amber-700 mb-4">
                天刚蒙蒙亮，宽植就跟着父亲到海边收网。他总是会挑选最好的鱼，
                想着等爱纯路过时能给她家带去新鲜的海味。虽然话不多，但每一个动作都充满了关爱。
              </p>
              <MyAppDemo />
            </div>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-700 mb-3">默默的守护</h3>
              <p className="text-amber-700 mb-4">
                在济州岛的传统文化中，真正的爱往往不需要太多言语。宽植用自己的方式守护着爱纯，
                从童年到少年，这份纯真的感情如海边的朝阳一样温暖人心。
              </p>
              <MyAppHello />
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-amber-700 mb-3">剧中金句</h4>
              <blockquote className="text-amber-600 italic border-l-4 border-amber-300 pl-4">
                &ldquo;我不想让她做收拾桌子的人，而是成为可以掀桌子的人&rdquo;
              </blockquote>
              <p className="text-amber-600 text-sm mt-2">—— 这是爱纯妈妈对女儿的期望，也是宽植对爱纯的支持</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 