import React, { useState, useEffect } from 'react';
import { MapPin, Users, Zap, Search, Smartphone, Layers, Code, CheckCircle, Brain, Rocket } from './icons.jsx';

const App = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
            <div className="bg-blue-900 text-white text-xs md:text-sm py-2 text-center px-4">
                Agrobank & IT Community of Uzbekistan — <span className="font-bold">AI500! 1-bosqich ishtirokchisi</span>
            </div>

            <nav className={`fixed w-full top-[32px] z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <MapPin className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-800">Localify</span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                        <a href="#muammo" className="hover:text-blue-600 transition">Muammo</a>
                        <a href="#yechim" className="hover:text-blue-600 transition">Yechim</a>
                        <a href="#roadmap" className="hover:text-blue-600 transition">Yo‘l xaritasi</a>
                        <a href="#jamoa" className="hover:text-blue-600 transition">Jamoa</a>
                    </div>
                    <a href="#demo" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
                        Demo Ko‘rish
                    </a>
                </div>
            </nav>

            <section 
                className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden"
                style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none"></div>

                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6 border border-blue-200">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        MVP Building Stage
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-slate-900">
                        Yaqin atrofingizdagi eng qulay <br />
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">sotuvchilarni toping</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Localify — bu lokatsiya asosida ishlaydigan mahalliy marketplace. 
                        Kichik biznesni raqamlashtiramiz va xaridorlar vaqtini tejaymiz.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#yechim" className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition flex items-center justify-center gap-2">
                            <Rocket width={20} height={20} /> Loyiha haqida
                        </a>
                        <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition shadow-sm flex items-center justify-center gap-2">
                            <Code width={20} height={20} /> Texnik Stack
                        </button>
                    </div>
                </div>
            </section>

            <section id="muammo" className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Mavjud Muammolar</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Biz O‘zbekiston bozoridagi uchta asosiy og‘riqli nuqtani aniqladik.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                                <Search className="text-red-600 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Ko‘rinmas Sotuvchilar</h3>
                            <p className="text-slate-600 leading-relaxed">Mahalliy kichik bizneslar faqat Telegram yoki Instagramda. Ularni qidiruv orqali yoki xaritada topishning iloji yo‘q.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                                <Zap className="text-orange-600 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Vaqt Yo‘qotish</h3>
                            <p className="text-slate-600 leading-relaxed">"Qayerda ochiq magazin bor?" degan savolga javob yo‘q. Masofa, narx va manzilni aniqlash qiyin.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <Layers className="text-indigo-600 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Marketplace Cheklovi</h3>
                            <p className="text-slate-600 leading-relaxed">Katta platformalar faqat yirik brendlar uchun. Bozor rastalari va uyda ishlab chiqaruvchilar e'tibordan chetda qolmoqda.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="yechim" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full pointer-events-none"></div>
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <div className="text-blue-400 font-bold tracking-wider text-sm mb-2">YECHIM</div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Localify — Lokal Biznesni Raqamlashtirish</h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Bizning IT-yechimimiz xaridorga o‘ziga eng yaqin sotuvchini xarita orqali ko‘rsatadi va sun'iy intellekt (AI) yordamida savdoni osonlashtiradi.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400"><MapPin width={24} height={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">Xarita Asosida Qidiruv</h4>
                                        <p className="text-slate-400 text-sm">Manzil, narx, masofa va yo‘l tarifi bir joyda.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-600/20 p-2 rounded-lg text-purple-400"><Brain width={24} height={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">AI Integratsiya</h4>
                                        <p className="text-slate-400 text-sm">OpenAI & Vision API yordamida mahsulot tavsifi va rasm optimizatsiyasi.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-600/20 p-2 rounded-lg text-green-400"><Smartphone width={24} height={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-lg">Tezkor Start</h4>
                                        <p className="text-slate-400 text-sm">Sotuvchilar uchun 3 daqiqada ro‘yxatdan o‘tish va do‘kon ochish.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                                <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="text-xs text-slate-400 ml-auto">Tech Stack</div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                                        <div className="text-blue-400 font-bold text-xl mb-1">React</div>
                                        <div className="text-xs text-slate-400">Frontend UI</div>
                                    </div>
                                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                                        <div className="text-green-400 font-bold text-xl mb-1">Node.js</div>
                                        <div className="text-xs text-slate-400">Backend API</div>
                                    </div>
                                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                                        <div className="text-purple-400 font-bold text-xl mb-1">OpenAI</div>
                                        <div className="text-xs text-slate-400">Generative Content</div>
                                    </div>
                                    <div className="bg-slate-700/50 p-4 rounded-xl text-center">
                                        <div className="text-cyan-400 font-bold text-xl mb-1">PostgreSQL</div>
                                        <div className="text-xs text-slate-400">Database</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="roadmap" className="py-20 px-6 bg-slate-50">
                 <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Rivojlanish Yo‘l Xaritasi</h2>
                        <p className="text-slate-600">Biz hozir MVP bosqichidamiz.</p>
                    </div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200"></div>

                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
                            <div className="md:w-5/12 text-center md:text-right p-4">
                                <h3 className="font-bold text-xl text-slate-400">1-Bosqich: Prototip</h3>
                                <p className="text-slate-500 text-sm">Strukturaviy UI/UX, Xarita layout, Product card dizaynlari</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-300 border-4 border-white flex items-center justify-center">
                                <CheckCircle width={16} height={16} className="text-white" />
                            </div>
                            <div className="md:w-5/12 p-4"></div>
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
                            <div className="md:w-5/12 p-4 order-2 md:order-1"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center z-10">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            </div>
                            <div className="md:w-5/12 text-center md:text-left p-4 order-1 md:order-2 bg-white rounded-xl shadow-md border border-blue-100">
                                <span className="text-blue-600 font-bold text-xs uppercase tracking-wide">Joriy holat</span>
                                <h3 className="font-bold text-xl text-slate-800">2-Bosqich: MVP</h3>
                                <p className="text-slate-600 text-sm mt-2">Sotuvchi ro‘yxatdan o‘tishi, Lokatsiya tanlash, 3 ta mahsulot yuklash, Xarita qidiruvi.</p>
                            </div>
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
                            <div className="md:w-5/12 text-center md:text-right p-4">
                                <h3 className="font-bold text-xl text-slate-800">3-Bosqich: MVP+ AI</h3>
                                <p className="text-slate-600 text-sm">AI product description, Rasm optimizatsiyasi, Smart filtrlar.</p>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-200 border-4 border-white"></div>
                            <div className="md:w-5/12 p-4"></div>
                        </div>

                        <div className="relative flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-5/12 p-4 order-2 md:order-1"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-200 border-4 border-white"></div>
                            <div className="md:w-5/12 text-center md:text-left p-4 order-1 md:order-2">
                                <h3 className="font-bold text-xl text-slate-800">4-Bosqich: Full Launch</h3>
                                <p className="text-slate-600 text-sm">To‘lovlar integratsiyasi, Delivery API, Obuna modeli.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="jamoa" className="py-20 px-6 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bizning Jamoa</h2>
                    <p className="text-slate-600 mb-12">Mahalliy bozor muammolarini ichidan biladigan va texnik yechim bera oladigan mutaxassislar.</p>

                    <div className="flex justify-center">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md w-full relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                            <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-md">
                                <img src="https://picsum.photos/150" alt="Umidjon" className="w-full h-full object-cover" /> 
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Umidjon</h3>
                            <p className="text-blue-600 font-medium mb-4">Founder & Full-Stack Developer</p>

                            <div className="flex flex-wrap gap-2 justify-center mb-6">
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">React</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Node.js</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">Laravel</span>
                                <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">AI API</span>
                            </div>

                            <div className="text-left text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                                <p className="mb-2"><strong>Tajriba:</strong> 3 yil (Web & Mobile)</p>
                                <p><strong>Loyihalar:</strong> E-commerce, CRM, Delivery tizimlari.</p>
                            </div>

                            <div className="mt-6 flex justify-center gap-4">
                                <button className="text-slate-400 hover:text-blue-600 transition"><Users width={20} height={20} /></button>
                                <button className="text-slate-400 hover:text-slate-900 transition"><Code width={20} height={20} /></button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 bg-blue-50 rounded-xl p-8">
                        <h4 className="font-bold text-xl mb-2 text-slate-800">Nega aynan biz?</h4>
                        <p className="text-slate-600">
                            Mahalliy bozor muammolarini ichidan bilamiz. Kichik bizneslar bilan doimiy ishlaganimiz sabab, ularning real ehtiyojlarini ko‘ramiz. E-commerce va Lokatsiya tizimlari bo'yicha real amaliy tajribaga egamiz.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-400 py-12 px-6">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                        <MapPin className="w-6 h-6" />
                        <span className="text-xl font-bold">Localify</span>
                    </div>
                    <div className="text-sm text-center md:text-right">
                        <p>&copy; 2024 Localify. AI500 1-bosqich uchun maxsus.</p>
                        <p className="mt-1">Built with React, Tailwind & AI.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
