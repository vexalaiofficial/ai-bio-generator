'use client';

import { useState } from 'react';
import { Sparkles, Copy, Check, Palette, Zap, BarChart, ArrowRight, Star, MessageSquare, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [generatedBio, setGeneratedBio] = useState('');
  const [tone, setTone] = useState('professional');

  const tones = [
    { id: 'professional', label: 'Professional' },
    { id: 'casual', label: 'Casual' },
    { id: 'funny', label: 'Funny' },
    { id: 'inspirational', label: 'Inspirational' },
  ];

  const platforms = [
    { icon: Twitter, label: 'Twitter', color: 'bg-blue-500' },
    { icon: Linkedin, label: 'LinkedIn', color: 'bg-blue-700' },
    { icon: Instagram, label: 'Instagram', color: 'bg-pink-500' },
  ];

  const features = [
    { icon: Sparkles, title: 'AI-Powered', desc: 'Advanced AI generates bios that capture your unique voice' },
    { icon: Palette, title: 'Multiple Tones', desc: 'Professional, casual, funny, or inspirational' },
    { icon: Zap, title: 'Instant Results', desc: 'Get 5 unique bios in seconds, not minutes' },
    { icon: BarChart, title: 'Viral Optimization', desc: 'Bios crafted to maximize engagement' },
  ];

  const testimonials = [
    { name: 'Alex Rivera', role: 'Tech Creator', text: 'My Twitter bio got 3x more follows after using this!', avatar: 'AR' },
    { name: 'Jordan Lee', role: 'Startup Founder', text: 'The LinkedIn bios generated actual investor interest.', avatar: 'JL' },
    { name: 'Sam Taylor', role: 'Content Creator', text: 'Finally a bio tool that sounds like me, not a robot.', avatar: 'ST' },
  ];

  const generateBio = () => {
    const templates = {
      professional: [
        'Building the future of innovation | Tech entrepreneur | Speaker |',
        'Product leader with 10+ years of experience | Scaling startups from 0 to 1 |',
        'Serial entrepreneur | Advisor | Helping businesses grow through',
      ],
      casual: [
        'Just here building cool stuff 🚀 | Coffee addict |',
        'Making the internet more interesting, one post at a time ✨',
        'Your friendly neighborhood creator | Building in public |',
      ],
      funny: [
        'Professional overthinker | Part-time genius | Full-time',
        'I put the "pro" in procrastinate 🐔 | Also building cool',
        'Warning: May contain excessive amounts of sarcasm and',
      ],
      inspirational: [
        'Dreamer doer | Building a legacy, not just a business |',
        'Creating impact one idea at a time | Join the journey |',
        'Believer in impossible things | Making dreams reality |',
      ],
    };
    
    const options = templates[tone as keyof typeof templates];
    const random = options[Math.floor(Math.random() * options.length)];
    setGeneratedBio(random + ' ' + ['🌟', '💫', '✨', '🚀'][Math.floor(Math.random() * 4)]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AIBio</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Generate Now
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-300">Features</a>
              <a href="#pricing" className="block text-gray-300">Pricing</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero with Demo */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-black to-blue-900/30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">AI-powered bio generation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Write a bio that{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                converts
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Stop struggling with your bio. Our AI generates perfect bios for any platform 
              in seconds — optimized for engagement and virality.
            </p>
          </div>

          {/* Generator Demo */}
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-6 text-center">Try it now — it's free</h3>
            
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">Select tone</label>
              <div className="flex flex-wrap gap-2">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTone(t.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      tone === t.id 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">Platform</label>
              <div className="flex gap-3">
                {platforms.map((p) => (
                  <button key={p.label} className={`${p.color} px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2`}>
                    <p.icon className="w-4 h-4" /> {p.label}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={generateBio}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" /> Generate Bio
            </button>

            {generatedBio && (
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-lg mb-4">{generatedBio}</p>
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">
                  <Copy className="w-4 h-4" /> Copy to clipboard
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why creators love AIBio</h2>
            <p className="text-gray-400">Everything you need to write the perfect bio</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
            <p className="text-gray-400">Start free, upgrade for unlimited</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white-white/10 rounded/5 border border-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {['5 bios/day', 'All tones', 'Twitter & Instagram', 'Basic templates'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-green-400" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-white/20 py-3 rounded-full font-medium hover:bg-white/10 transition">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">$9<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {['Unlimited bios', 'All platforms', 'Custom keywords', 'Save favorites', 'Priority support'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300">
                    <Check className="w-5 h-5 text-cyan-400" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-full font-medium hover:opacity-90 transition">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by 10,000+ creators</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your perfect bio is one click away</h2>
          <p className="text-gray-400 mb-8">Join thousands of creators who've found their voice.</p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition">
            Generate Your Bio Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">AIBio</span>
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2026 AIBio
          </div>
        </div>
      </footer>
    </div>
  );
}
