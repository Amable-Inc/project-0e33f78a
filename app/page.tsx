'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function AppleLandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span className="text-2xl font-bold">🍎</span>
              <div className="hidden md:flex space-x-8 text-sm">
                <a href="#" className="hover:text-gray-600 transition">Store</a>
                <a href="#" className="hover:text-gray-600 transition">Mac</a>
                <a href="#" className="hover:text-gray-600 transition">iPad</a>
                <a href="#" className="hover:text-gray-600 transition">iPhone</a>
                <a href="#" className="hover:text-gray-600 transition">Watch</a>
                <a href="#" className="hover:text-gray-600 transition">AirPods</a>
                <a href="#" className="hover:text-gray-600 transition">Support</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hover:text-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white pt-20">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-black"
          style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            iPhone 15 Pro
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Titanium. So strong. So light. So Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Buy now
            </button>
            <button className="border border-blue-600 text-blue-400 hover:bg-blue-600/10 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              Learn more
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="relative w-full h-96 mt-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl transform hover:scale-105 transition-transform duration-500 border-8 border-gray-700">
                <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl">
                  📱
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                A17 Pro chip.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                A monster win for gaming. Pro-class GPU with 6 cores. Hardware-accelerated ray tracing. And the fastest performance for demanding AAA games.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-lg inline-flex items-center gap-2">
                Learn more about A17 Pro
                <ChevronRight size={20} />
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center aspect-square flex flex-col items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="text-7xl mb-4">⚡</div>
                <div className="text-4xl font-bold">20% faster</div>
                <div className="text-lg opacity-80 mt-2">GPU performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Pro camera system.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most advanced camera ever. Capture stunning detail and rich colors in any light.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📸', title: '48MP Main', desc: 'Super-high-resolution photos' },
              { icon: '🔭', title: '5x Telephoto', desc: 'Optical zoom range' },
              { icon: '🌙', title: 'Night Mode', desc: 'Stunning low-light photos' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all transform hover:scale-105 cursor-pointer"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Titanium Section */}
      <section className="py-32 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            Forged in titanium.
          </h2>
          <p className="text-2xl text-gray-600 mb-12">
            The same alloy used in spacecraft. Making iPhone 15 Pro the lightest Pro model ever.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Natural', 'Blue', 'White', 'Black'].map((color, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full shadow-xl transform group-hover:scale-110 transition-transform ${
                  color === 'Natural' ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                  color === 'Blue' ? 'bg-gradient-to-br from-blue-400 to-blue-800' :
                  color === 'White' ? 'bg-gradient-to-br from-gray-100 to-gray-300' :
                  'bg-gradient-to-br from-gray-700 to-gray-900'
                }`} />
                <p className="text-sm font-semibold">{color}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Button Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-32 h-32 flex items-center justify-center text-5xl shadow-2xl mb-8 transform hover:rotate-12 transition-transform duration-300">
                🎯
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Action button.
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                A fast track to your favorite feature. Just press and hold to launch the action you want.
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Silent mode
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Camera
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> Voice memo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">✓</span> And more
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 aspect-square flex items-center justify-center shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-white/20 flex items-center justify-center">
                <div className="text-white text-6xl">🔘</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🌍</div>
          <h2 className="text-5xl font-bold mb-6">
            Better for the planet.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            iPhone 15 Pro uses 100% recycled aluminum. And 100% recycled rare earth elements in all magnets.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700">Recycled aluminum</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
              <p className="text-gray-700">Recycled cobalt</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-gray-700">Recycled gold plating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Get iPhone 15 Pro from $999
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Or pay over time, interest‑free when you choose to check out with Apple Card Monthly Installments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Buy iPhone 15 Pro
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
              Shop all iPhone
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            {[
              { title: 'Shop and Learn', links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods'] },
              { title: 'Services', links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'iCloud+'] },
              { title: 'Account', links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'] },
              { title: 'Apple Store', links: ['Find a Store', 'Genius Bar', 'Today at Apple'] },
              { title: 'About Apple', links: ['Newsroom', 'Careers', 'Investors', 'Contact Apple'] }
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold mb-3 text-sm">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-gray-200 text-sm text-gray-600 text-center">
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
