'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface WeatherData {
  location: string;
  date: string;
  temperature: number;
  weather: string;
  humidity: number;
  windSpeed: number;
  seaCondition: string;
  advice: string;
}

export default function Page() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("=== 济州岛天气预报系统启动 ===");
    
    // 模拟 Fetch API 获取天气数据
    const fetchWeatherData = async (): Promise<WeatherData> => {
      console.log("正在从气象站获取数据...");
      
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 模拟随机天气数据
      const weatherOptions = ["晴朗", "多云", "小雨", "海风习习", "雾气"];
      const seaConditions = ["平静", "微浪", "适中", "较大浪"];
      
      const mockData: WeatherData = {
        location: "济州岛海边",
        date: "1950年10月15日",
        temperature: Math.floor(Math.random() * 10) + 18,
        weather: weatherOptions[Math.floor(Math.random() * weatherOptions.length)],
        humidity: Math.floor(Math.random() * 30) + 60,
        windSpeed: Math.floor(Math.random() * 15) + 5,
        seaCondition: seaConditions[Math.floor(Math.random() * seaConditions.length)],
        advice: "适合海女下海作业，爱纯妈妈今天可以安心潜水采珠"
      };
      
      console.log("天气数据获取成功：", mockData);
      return mockData;
    };

    // 使用 async/await 处理异步操作
    const loadWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchWeatherData();
        setWeatherData(data);
        
        console.log("天气数据已更新到界面");
        
      } catch (err) {
        const errorMessage = "无法获取天气数据，请稍后重试";
        setError(errorMessage);
        console.error("天气数据获取失败：", err);
        
      } finally {
        setLoading(false);
        console.log("天气预报加载完成");
      }
    };

    // 演示 Promise 的不同状态
    const promiseDemo = () => {
      console.log("=== Promise 状态演示 ===");
      
      const weatherPromise = fetchWeatherData();
      
      console.log("Promise 状态：pending（等待中）");
      
      weatherPromise
        .then((data) => {
          console.log("Promise 状态：fulfilled（已完成）");
          console.log("获取到的数据：", data);
        })
        .catch((error) => {
          console.log("Promise 状态：rejected（已拒绝）");
          console.error("错误信息：", error);
        });
    };

    loadWeatherData();
    promiseDemo();
    
  }, []);

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "晴朗": return "☀️";
      case "多云": return "⛅";
      case "小雨": return "🌧️";
      case "海风习习": return "💨";
      case "雾气": return "🌫️";
      default: return "🌤️";
    }
  };

  const getSeaConditionColor = (condition: string) => {
    switch (condition) {
      case "平静": return "text-green-600";
      case "微浪": return "text-blue-600";
      case "适中": return "text-yellow-600";
      case "较大浪": return "text-red-600";
      default: return "text-amber-600";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      {/* 天空云朵效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-[10%] left-[10%] w-16 h-8 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-[20%] right-[20%] w-20 h-10 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-[15%] left-[60%] w-12 h-6 bg-white rounded-full opacity-50"></div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-12">
          <Link href="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回济州岛编程之旅</span>
          </Link>
        </div>

        <section className="max-w-3xl mx-auto mb-10 bg-white/80 rounded-xl border border-amber-200 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">济州岛天气预报 - Fetch API 与异步编程</h2>
          <ul className="list-disc list-inside text-amber-700 space-y-2 mb-2">
            <li>使用Fetch API获取济州岛的天气数据，为海女的出海提供参考。</li>
            <li>就像爱纯关心妈妈的安危，每一次数据请求都承载着关爱。</li>
            <li>演示 Promise、async/await、错误处理等异步编程技术。</li>
            <li>请按 F12 打开浏览器控制台，观察异步请求的详细过程。</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto bg-white/60 rounded-xl border border-amber-200 shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent">
            済州岛今日天气
          </h1>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 animate-pulse">🌤️</div>
              <div className="text-xl text-amber-700 mb-2">正在获取天气信息...</div>
              <div className="text-amber-600">为海女妈妈查询最新海况</div>
              <div className="mt-4">
                <div className="w-full bg-amber-200 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">❌</div>
              <div className="text-xl text-red-600 mb-2">天气数据获取失败</div>
              <div className="text-amber-600">{error}</div>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                重新获取
              </button>
            </div>
          ) : weatherData && (
            <div className="space-y-6">
              {/* 主要天气信息 */}
              <div className="bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 p-6 rounded-xl border border-amber-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-800">{weatherData.location}</h3>
                    <p className="text-amber-600">{weatherData.date}</p>
                  </div>
                  <div className="text-6xl">
                    {getWeatherIcon(weatherData.weather)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-700">{weatherData.temperature}°C</div>
                    <div className="text-amber-600">温度</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold text-amber-700">{weatherData.weather}</div>
                    <div className="text-amber-600">天气状况</div>
                  </div>
                </div>
              </div>

              {/* 详细信息 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-amber-800 mb-3">大气条件</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-amber-700">湿度:</span>
                      <span className="text-amber-600">{weatherData.humidity}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-amber-700">风速:</span>
                      <span className="text-amber-600">{weatherData.windSpeed} km/h</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-amber-800 mb-3">海况信息</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-amber-700">海浪:</span>
                      <span className={getSeaConditionColor(weatherData.seaCondition)}>
                        {weatherData.seaCondition}
                      </span>
                    </div>
                    <div className="text-amber-600 text-xs">
                      {weatherData.advice}
                    </div>
                  </div>
                </div>
              </div>

              {/* 温馨提示 */}
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-3">海女妈妈的温馨提示</h4>
                <p className="text-amber-700 text-sm leading-relaxed">
                  {weatherData.seaCondition === "平静" 
                    ? "今天海况很好，是潜水采珠的好日子。记得带足装备，注意安全。"
                    : weatherData.seaCondition === "较大浪"
                    ? "今天海浪较大，建议暂缓下海，在家陪伴爱纯读书。"
                    : "海况一般，有经验的海女可以考虑出海，但要格外小心。"
                  }
                </p>
                
                <div className="mt-4 bg-white/60 p-4 rounded-lg border border-amber-200">
                  <h5 className="text-amber-800 font-semibold mb-2">剧中金句</h5>
                  <blockquote className="text-amber-700 italic">
                    &quot;海女就像海洋一样，表面平静，内心却波涛汹涌&quot;
                  </blockquote>
                  <p className="text-amber-600 text-sm mt-2">—— 爱纯妈妈对女儿的人生感悟</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
} 