import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回济州岛编程之旅</span>
          </Link>
        </div>
        <section className="max-w-3xl mx-auto mb-10 bg-white/80 rounded-xl border border-amber-200 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">初见济州岛 - HTML 基础标签演示</h2>
          <ul className="list-disc list-inside text-amber-700 space-y-2 mb-2">
            <li>重现第一次踏上济州岛的美好印象，用最纯粹的HTML展现岛屿的自然美景。</li>
            <li>就像初次相遇的爱纯和宽植，简单却充满无限可能。</li>
            <li>演示HTML的常用标签：标题、段落、超链接、列表、图片、表格和表单。</li>
            <li>每个元素都承载着济州岛的故事和温暖的回忆。</li>
          </ul>
        </section>
        
        <div className="max-w-3xl mx-auto bg-white/60 rounded-xl border border-amber-200 shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-amber-800">济州岛的第一个清晨</h1>
          <div className="prose prose-amber max-w-none prose-p:text-amber-700 prose-a:text-orange-600 hover:prose-a:text-orange-500 prose-li:text-amber-600 prose-table:border-amber-300 prose-th:bg-amber-100 prose-th:text-amber-800 prose-td:border-amber-200 prose-img:rounded-lg prose-img:shadow-lg prose-img:my-2">
            <p>
              1950年春天，当爱纯第一次踏上济州岛的土地时，海风轻抚着她的脸庞。
              <a href="https://yangzh.cn" target="_blank" rel="noopener noreferrer">这里有关于济州岛更多的故事。</a>
              那时的她还不知道，这个岛屿将见证她一生中最美好的爱情。
            </p>
            
            <h2 className="text-amber-700">济州岛的美好事物清单</h2>
            <ol>
              <li>清晨海边的第一缕阳光</li>
              <li>柑橘园里飘来的花香</li>
              <li>海女们勇敢潜水寻珠的身影</li>
              <li>宽植为爱纯制作的第一个木质书架</li>
            </ol>
            
            <h2 className="text-amber-700">济州岛的风景</h2>
            <p className="flex gap-4 flex-wrap items-center">
              <Image src="/practice/images/th.jpg" alt="济州岛海边的灯塔" width={200} height={120} />
              <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4" alt="济州岛柑橘园风景" width={200} height={120} />
            </p>
            
            <h2 className="text-amber-700">济州岛特产表</h2>
            <table className="w-full border-collapse border border-amber-200">
              <thead>
                <tr className="bg-amber-100">
                  <th className="border border-amber-200 p-2 text-amber-800">特产名称</th>
                  <th className="border border-amber-200 p-2 text-amber-800">季节</th>
                  <th className="border border-amber-200 p-2 text-amber-800">特色</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-amber-200 p-2">济州岛柑橘</td>
                  <td className="border border-amber-200 p-2">秋冬</td>
                  <td className="border border-amber-200 p-2">酸甜可口，苦尽甘来</td>
                </tr>
                <tr>
                  <td className="border border-amber-200 p-2">海女采集的珍珠</td>
                  <td className="border border-amber-200 p-2">全年</td>
                  <td className="border border-amber-200 p-2">珍贵美丽，承载母爱</td>
                </tr>
                <tr>
                  <td className="border border-amber-200 p-2">传统韩屋茶</td>
                  <td className="border border-amber-200 p-2">春夏</td>
                  <td className="border border-amber-200 p-2">温暖人心，家的味道</td>
                </tr>
              </tbody>
            </table>
            
            <h2 className="text-amber-700">留下你的济州岛足迹</h2>
            <form className="space-y-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div>
                <label htmlFor="name" className="block text-amber-800 mb-1">你的名字：</label>
                <input type="text" id="name" name="name" className="w-full p-2 rounded bg-white text-amber-900 border border-amber-300 focus:border-amber-500" placeholder="请输入你的名字" />
              </div>
              <div>
                <label htmlFor="memory" className="block text-amber-800 mb-1">你想在济州岛做什么：</label>
                <textarea id="memory" name="memory" rows={3} className="w-full p-2 rounded bg-white text-amber-900 border border-amber-300 focus:border-amber-500" placeholder="分享你的济州岛愿望..."></textarea>
              </div>
              <div>
                <label className="block text-amber-800 mb-1">你最向往的济州岛体验：</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="experience" value="citrus" className="mr-2" />
                    <span>在柑橘园里采摘橘子</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="experience" value="sea" className="mr-2" />
                    <span>在海边看日出日落</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="experience" value="hanok" className="mr-2" />
                    <span>住在传统韩屋里</span>
                  </label>
                </div>
              </div>
              <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded transition-colors">
                留下足迹
              </button>
            </form>
            
            <div className="mt-6 bg-gradient-to-r from-yellow-100 to-amber-100 p-4 rounded-lg border border-amber-200">
              <h4 className="text-amber-800 font-semibold mb-2">剧中金句</h4>
              <blockquote className="text-amber-700 italic">
                &quot;第一次见到你的时候，我就知道你是那个特别的人&quot;
              </blockquote>
              <p className="text-amber-600 text-sm mt-2">—— 宽植对爱纯的初见感言</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 