import ParticlesBG from '@/components/ParticlesBG'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Methods() {
  const buttons = [
    { name: "Splunk", link: "https://app.splunk.gg/u/exmadeGG" },
    { name: "Injuries", link: "https://www.logged.tg/auth/exmade" },
    { name: "Cookie Bypasser", link: "https://app.splunk.gg/u/exmadeGG" },
    { name: "Hyperlink Gen", link: "https://dsprs.vercel.app/hyperlink" }
  ]

  const [particleColor, setParticleColor] = useState('#ff1b1b')

  useEffect(() => {
    const pc = localStorage.getItem('exmade_particleColor')
    if (pc) setParticleColor(pc)
  }, [])

  const handleClick = (e) => {
    // simple visual feedback when clicked (grow then back)
    const el = e.currentTarget
    el.classList.add('clicked')
    setTimeout(() => el.classList.remove('clicked'), 210)
    // allow the anchor to open as normal
  }

  return (
    <div className="page-root" >
      <ParticlesBG color={particleColor} />

      <main className="container">
        <Link href="/"><a className="back">← Home</a></Link>

        <h2 className="methods-title">Methods</h2>

        <div className="method-list" role="list">
          {buttons.map((b, idx) => (
            <a
              key={b.name}
              className="method-btn"
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              role="listitem"
            >
              <span className="num" aria-hidden="true">{idx + 1}.</span>
              <span className="label-txt">{b.name}</span>
            </a>
          ))}
        </div>

        <footer className="small-foot">External links open in a new tab</footer>
      </main>
    </div>
  )
}
