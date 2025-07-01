'use client';
import { useState } from 'react';
import Link from 'next/link';

class Challenge {
  constructor(
    public name: string,
    public description: string,
    public impact: string,
    public solution: string,
    public color: string
  ) {}
}

class LifeStory {
  private challenges: Challenge[] = [];

  addChallenge(challenge: Challenge) {
    this.challenges.push(challenge);
  }

  getChallenges(): Challenge[] {
    return this.challenges;
  }

  getHope(): string {
    return "相爱的二人相互扶持，努力生活";
  }
}

export default function RealityTestPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const lifeStory = new LifeStory();
  
  // 添加现实考验
  lifeStory.addChallenge(new Challenge(
    "世俗偏见",
    "社会对私奔的不理解和指责",
    "面临巨大的社会压力和道德谴责",
    "坚持内心的选择，用真诚打动人心",
    "bg-gradient-to-br from-amber-100 to-yellow-100"
  ));

  lifeStory.addChallenge(new Challenge(
    "婆家刁难",
    "宽植家人对爱纯的苛刻对待",
    "在家庭中感受到冷漠和敌意",
    "用包容和努力逐渐改善关系",
    "bg-gradient-to-br from-yellow-100 to-orange-100"
  ));

  lifeStory.addChallenge(new Challenge(
    "经济困窘",
    "新婚夫妇面临的生活压力",
    "日常开支都成为沉重负担",
    "两人共同努力工作，节俭度日",
    "bg-gradient-to-br from-orange-100 to-amber-100"
  ));

  lifeStory.addChallenge(new Challenge(
    "孩子成长",
    "如何给孩子更好的未来",
    "担心孩子重复自己的艰难",
    "让女儿走出济州岛成为职场女性",
    "bg-gradient-to-br from-amber-100 to-yellow-100"
  ));

  const challenges = lifeStory.getChallenges();

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
          <h1 className="text-3xl font-bold text-amber-800 mb-6 text-center">私奔后的现实考验</h1>
          <p className="text-amber-700 text-center mb-8 text-lg leading-relaxed">
            爱纯和宽植私奔后面临的现实困境，婆家的刁难和经济的窘迫。
            虽然现实残酷，但相爱的二人相互扶持，努力生活。
          </p>
          
          <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-amber-800 mb-3">剧中真理</h3>
            <blockquote className="text-amber-700 italic text-center text-lg">
              &ldquo;父母总是惦记着他们没能给予的，孩子却总想着他们没能得到的&rdquo;
            </blockquote>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {challenges.map((challenge) => (
              <div 
                key={challenge.name}
                className={`${challenge.color} p-6 rounded-lg border border-amber-200 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                  selectedChallenge?.name === challenge.name ? 'ring-2 ring-amber-400' : ''
                }`}
                onClick={() => setSelectedChallenge(challenge)}
              >
                <h3 className="text-lg font-semibold text-amber-800 mb-2">{challenge.name}</h3>
                <p className="text-amber-700 text-sm mb-3">{challenge.description}</p>
                <div className="text-xs text-amber-600 font-mono">
                  点击查看详情
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedChallenge && (
          <section className="max-w-4xl mx-auto bg-white/60 rounded-xl border border-amber-100 shadow-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
              {selectedChallenge.name} - 深入分析
            </h2>
            
            <div className={`${selectedChallenge.color} p-6 rounded-lg border border-amber-200 mb-6`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-amber-800 mb-3">面临的困难</h4>
                  <p className="text-amber-700 mb-4">{selectedChallenge.impact}</p>
                  <h4 className="font-semibold text-amber-800 mb-3">应对方式</h4>
                  <p className="text-amber-700">{selectedChallenge.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-3">技术特点</h4>
                  <ul className="text-amber-700 space-y-1 text-sm">
                    <li>• TypeScript 类的继承</li>
                    <li>• 面向对象编程思想</li>
                    <li>• 动态内容渲染</li>
                    <li>• 状态管理和交互</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="max-w-4xl mx-auto bg-white/60 rounded-xl border border-amber-100 shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">相互扶持的力量</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">爱纯的坚强</h3>
              <ul className="text-amber-700 space-y-2 text-sm">
                <li>• 面对婆家的冷眼依然保持善良</li>
                <li>• 在经济困难中依然乐观向上</li>
                <li>• 坚持自己的文学梦想</li>
                <li>• 为孩子的未来努力奋斗</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">宽植的守护</h3>
              <ul className="text-amber-700 space-y-2 text-sm">
                <li>• 在家庭压力中保护爱纯</li>
                <li>• 努力工作承担家庭责任</li>
                <li>• 默默承受外界的批评</li>
                <li>• 坚定地支持爱纯的选择</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4 text-center">希望的力量</h3>
            <p className="text-amber-700 text-center text-lg italic mb-4">
              {lifeStory.getHope()}
            </p>
            <div className="text-center">
              <blockquote className="text-amber-600 italic">
                &ldquo;妈妈就像一朵向阳生长的野花&rdquo;
              </blockquote>
              <p className="text-amber-600 text-sm mt-2">—— 即使在最艰难的环境中，也要向着阳光生长</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 