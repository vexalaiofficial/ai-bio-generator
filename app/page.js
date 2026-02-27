'use client'

import { useState } from 'react'

const platforms = ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok']
const tones = ['Professional', 'Fun', 'Witty', 'Minimal', 'Bold']

export default function Home() {
  const [profession, setProfession] = useState('')
  const [platform, setPlatform] = useState('Instagram')
  const [tone, setTone] = useState('Professional')
  const [bios, setBios] = useState([])
  const [loading, setLoading] = useState(false)
  const [dailyUsed, setDailyUsed] = useState(0)

  const generateBios = async () => {
    if (!profession.trim()) return
    if (dailyUsed >= 3) {
      alert('Daily free limit reached! Upgrade to premium for unlimited.')
      return
    }

    setLoading(true)
    setBios([])

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || ''}`,
          'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : '',
          'X-Title': 'AI Bio Generator',
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [{
            role: 'user',
            content: `Generate 3 creative ${tone.toLowerCase()} bio options for ${platform} for someone who is a ${profession}. Each bio should be under 150 characters. Format as a numbered list.`
          }],
          max_tokens: 300,
        }),
      })

      const data = await res.json()
      const text = data.choices?.[0]?.message?.content || 'Failed to generate. Please try again.'
      
      const lines = text.split('\n').filter(line => line.trim().match(/^[1-3][\.\)]|^[•\-]/))
      setBios(lines.length > 0 ? lines : [text])
      setDailyUsed(dailyUsed + 1)
    } catch (err) {
      setBios(['Error generating bios. Make sure OPENROUTER_API_KEY is set.'])
    }

    setLoading(false)
  }

  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', background: 'linear-gradient(90deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          ✨ AI Bio Generator
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem' }}>
          Perfect Instagram, Twitter & LinkedIn bios in seconds
        </p>
      </header>

      <section style={{ background: '#161616', borderRadius: '16px', padding: '24px', marginBottom: '40px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontWeight: '500' }}>Your Profession</label>
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            placeholder="e.g., Software Engineer, Coffee Shop Owner, Photographer..."
            style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #333', background: '#0a0a0a', color: '#fff', fontSize: '1rem', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontWeight: '500' }}>Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #333', background: '#0a0a0a', color: '#fff', fontSize: '1rem', boxSizing: 'border-box' }}
            >
              {platforms.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontWeight: '500' }}>Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #333', background: '#0a0a0a', color: '#fff', fontSize: '1rem', boxSizing: 'border-box' }}
            >
              {tones.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <button
          onClick={generateBios}
          disabled={loading || !profession.trim()}
          style={{ width: '100%', padding: '16px', borderRadius: '10px', border: 'none', background: loading ? '#666' : 'linear-gradient(90deg, #a855f7, #ec4899)', color: '#fff', fontSize: '1.1rem', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', transition: 'transform 0.1s' }}
        >
          {loading ? 'Generating...' : '✨ Generate My Bio'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '12px', color: '#666', fontSize: '0.9rem' }}>
          {3 - dailyUsed} free generations remaining today
        </p>
      </section>

      {bios.length > 0 && (
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '16px', color: '#fff' }}>Your Generated Bios</h2>
          {bios.map((bio, i) => (
            <div key={i} style={{ background: '#161616', borderRadius: '12px', padding: '16px', marginBottom: '12px', border: '1px solid #333', position: 'relative' }}>
              <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.5', color: '#e0e0e0' }}>{bio.replace(/^[1-3][\.\)]\s*|^[•\-]\s*/, '')}</p>
              <button
                onClick={() => navigator.clipboard.writeText(bio.replace(/^[1-3][\.\)]\s*|^[•\-]\s*/, ''))}
                style={{ position: 'absolute', right: '12px', top: '12px', padding: '6px 12px', borderRadius: '6px', border: '1px solid #444', background: '#222', color: '#aaa', fontSize: '0.8rem', cursor: 'pointer' }}
              >
                Copy
              </button>
            </div>
          ))}
        </section>
      )}

      <section id="pricing" style={{ background: '#161616', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🚀 Go Unlimited</h2>
        <p style={{ color: '#888', marginBottom: '24px' }}>Remove daily limits, generate as many bios as you need</p>
        
        <div style={{ background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', borderRadius: '16px', padding: '24px', maxWidth: '280px', margin: '0 auto' }}>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 8px 0' }}>$5<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/month</span></p>
          <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '0 0 20px 0', fontSize: '0.95rem' }}>
            <li style={{ padding: '6px 0' }}>✓ Unlimited generations</li>
            <li style={{ padding: '6px 0' }}>✓ All platforms included</li>
            <li style={{ padding: '6px 0' }}>✓ All tones included</li>
            <li style={{ padding: '6px 0' }}>✓ Priority support</li>
          </ul>
          <button style={{ width: '100%', padding: '14px', borderRadius: '8px', border: 'none', background: '#fff', color: '#a855f7', fontSize: '1rem', fontWeight: '600', cursor: 'pointer' }}>
            Subscribe Now
          </button>
        </div>
        <p style={{ marginTop: '16px', color: '#666', fontSize: '0.85rem' }}>Free tier: 3 bios/day • Cancel anytime</p>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px 0', color: '#444', fontSize: '0.85rem' }}>
        <p>Built with Next.js + OpenRouter</p>
      </footer>
    </main>
  )
}
