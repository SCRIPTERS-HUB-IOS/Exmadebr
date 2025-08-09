import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaDiscord } from 'react-icons/fa'
import ParticlesBG from '@/components/ParticlesBG'

export default function Home() {
  const [brightness, setBrightness] = useState(100)
  const [particleColor, setParticleColor] = useState('#ff1b1b')

  useEffect(() => {
    const b = localStorage.getItem('exmade_brightness')
    const pc = localStorage.getItem('exmade_particleColor')
    if (b) setBrightness(Number(b))
    if (pc) setParticleColor(pc)
  }, [])

  useEffect(() => localStorage.setItem('exmade_brightness', brightness), [brightness])
  useEffect(() => localStorage.setItem('exmade_particleColor', particleColor), [particleColor])

  return (
    <div className="page-root" style={{ filter: `brightness(${brightness}%)` }}>
      <ParticlesBG color={particleColor} />

      <main className="container">
        <h1 className="logo">exmadeW</h1>

        <div className="controls">
          <Link href="/methods"><a className="btn primary">Methods</a></Link>

          <a
            className="btn discord"
            href="https://discord.gg/skDSzwCScu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our Discord"
          >
            <span className="discord-logo" aria-hidden="true">
              <FaDiscord />
            </span>
            <span>Our Discord</span>
          </a>
        </div>

        <div className="panel">
          <label className="label">Brightness</label>
          <input
            className="range"
            type="range"
            min="50"
            max="150"
            value={brightness}
            onChange={e => setBrightness(Number(e.target.value))}
          />

          <label className="label" style={{ marginTop: 12 }}>Particle color</label>
          <div className="color-row">
            <button
              className={`color-dot ${particleColor === '#ff1b1b' ? 'active' : ''}`}
              onClick={() => setParticleColor('#ff1b1b')}
              aria-label="Red particles"
            />
            <button
              className={`color-dot ${particleColor === '#0055ff' ? 'active' : ''}`}
              onClick={() => setParticleColor('#0055ff')}
              aria-label="Blue particles"
            />
          </div>
        </div>

        <footer className="small-foot">exmadeW · red neon glass theme</footer>
      </main>
    </div>
  )
}
