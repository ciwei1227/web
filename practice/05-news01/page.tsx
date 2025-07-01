'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // 模拟1950年代济州岛民俗新闻的加载过程
    console.log("=== 济州岛民俗新闻 1950年秋 ===");
    
    // 变量与类型演示
    const newsTitle: string = "济州岛柑橘丰收，海女文化传承不息";
    const harvestYear: number = 1950;
    const isGoodHarvest: boolean = true;
    
    console.log(`新闻标题：${newsTitle}`);
    console.log(`丰收年份：${harvestYear}`);
    console.log(`是否大丰收：${isGoodHarvest}`);
    
    // 类型判断
    if (typeof newsTitle === "string") {
      console.log("新闻标题是文字类型");
    }
    if (typeof harvestYear === "number") {
      console.log("年份是数字类型");
    }
    
    // 分支语句 - 根据收成情况发布不同新闻
    if (isGoodHarvest) {
      console.log("发布好消息：济州岛柑橘大丰收，家家户户笑开颜！");
      alert("济州岛民俗新闻：1950年柑橘大丰收！海女们的辛勤付出得到了回报。");
    } else {
      console.log("发布关怀新闻：虽然收成不佳，但济州岛人民相互扶持，共度难关。");
    }
    
    // 循环语句 - 打印一周的民俗活动
    console.log("=== 本周济州岛民俗活动预告 ===");
    const folkActivities = [
      "周一：海女下海采珠",
      "周二：柑橘园采摘节",
      "周三：传统韩屋茶会",
      "周四：渔民祈福仪式",
      "周五：民俗音乐表演",
      "周六：青年联谊会",
      "周日：家庭团聚日"
    ];
    
    for (let i = 0; i < folkActivities.length; i++) {
      console.log(`${i + 1}. ${folkActivities[i]}`);
    }
    
    // 函数演示 - 计算海女收入
    function calculateSeawomanIncome(pearlCount: number, pricePerPearl: number): number {
      return pearlCount * pricePerPearl;
    }
    
    const monthlyPearls = 15;
    const pearlPrice = 20;
    const monthlyIncome = calculateSeawomanIncome(monthlyPearls, pearlPrice);
    console.log(`爱纯妈妈这个月采了${monthlyPearls}颗珍珠，每颗${pearlPrice}文钱，总收入：${monthlyIncome}文钱`);
    
    // 对象演示 - 济州岛家庭信息
    const jejuFamily = {
      motherName: "海女 春花",
      daughterName: "吴爱纯",
      sonInLawName: "梁宽植",
      location: "济州岛柑橘园",
      dream: "为女儿买珍珠项链"
    };
    
    console.log("=== 济州岛家庭档案 ===");
    console.log(jejuFamily);
    
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
          <h2 className="text-2xl font-bold text-amber-800 mb-4">济州岛民俗新闻 - JavaScript 基础语法演示</h2>
          <ul className="list-disc list-inside text-amber-700 space-y-2 mb-2">
            <li>制作1950年代济州岛的民俗新闻页面，报道海女文化、柑橘丰收和传统节庆。</li>
            <li>复古的排版设计让人仿佛穿越回那个纯朴的年代。</li>
            <li>演示 JavaScript 变量、类型判断、分支、循环、函数等基础语法。</li>
            <li>请按 F12 打开浏览器控制台，观察济州岛民俗新闻的输出。</li>
          </ul>
        </section>
        
        <section className="max-w-3xl mx-auto bg-white/60 rounded-xl border border-amber-200 shadow-2xl p-8">
          <div className="text-center mb-8 border-b border-amber-300 pb-6">
            <h1 className="text-4xl font-bold text-amber-800 mb-2">济州岛民俗新闻</h1>
            <p className="text-orange-600 text-lg">1950年秋季刊</p>
            <p className="text-amber-600 text-sm mt-2">记录济州岛的美好时光，传承海女文化精神</p>
          </div>
          
          <article className="space-y-6">
            <div className="bg-amber-100 p-6 rounded-lg border border-amber-300">
              <h2 className="text-2xl font-bold text-amber-800 mb-3">头条新闻：柑橘大丰收，苦尽甘来时</h2>
              <p className="text-amber-700 leading-relaxed mb-4">
                1950年秋，济州岛迎来了十年来最好的柑橘收成。岛上的家家户户都沉浸在丰收的喜悦中。
                正如岛民们常说的&quot;苦尽柑来&quot;，经历了春天的播种、夏天的守护，终于迎来了秋天的收获。
              </p>
              <p className="text-amber-700 leading-relaxed">
                年轻的爱纯和宽植也在柑橘园里忙碌着，他们的爱情如同这些柑橘一样，经历了酸涩，
                最终变得甘甜。村里的长辈们都说，这是上天对勤劳善良的济州岛人民的眷顾。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">海女文化传承</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  海女春花阿姨本月采集了15颗珍珠，她说：&quot;每一次潜入海底，
                  都是为了女儿爱纯的未来。希望有一天能为她买一条最美的珍珠项链。&quot;
                </p>
              </div>
              
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-3">青年才俊</h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  木工宽植的手艺越来越精湛，他亲手制作的书架深受村民喜爱。
                  据说他正在为心爱的姑娘制作一个特别的礼物。
                </p>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">本周民俗活动预告</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700">
                <ul className="space-y-2">
                  <li>• 周一：海女下海采珠</li>
                  <li>• 周二：柑橘园采摘节</li>
                  <li>• 周三：传统韩屋茶会</li>
                  <li>• 周四：渔民祈福仪式</li>
                </ul>
                <ul className="space-y-2">
                  <li>• 周五：民俗音乐表演</li>
                  <li>• 周六：青年联谊会</li>
                  <li>• 周日：家庭团聚日</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-amber-300">
              <p className="text-amber-600 text-sm">
                济州岛民俗新闻社 | 传承文化，记录美好 | 1950年创刊
              </p>
              
              <div className="mt-6 bg-gradient-to-r from-amber-100 to-yellow-100 p-4 rounded-lg border border-amber-200">
                <h4 className="text-amber-800 font-semibold mb-2">剧中金句</h4>
                <blockquote className="text-amber-700 italic">
                  &quot;苦尽柑来遇见你&quot;
                </blockquote>
                <p className="text-amber-600 text-sm mt-2">—— 济州岛人民对美好生活的向往</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
} 