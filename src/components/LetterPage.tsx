import { useState } from 'react'
import { memories } from '../data/memories'

type LetterPageProps = {
  showLetter: boolean
  onToggleLetter: () => void
  onQuestion: () => void
}

const relationshipNames = [
  'My Love',
  'My Beloved',
  'My Sweetheart',
  'My universe',
  'My Everything',
]

export function LetterPage({ showLetter, onToggleLetter, onQuestion }: LetterPageProps) {
  const [loveLaunchStage, setLoveLaunchStage] = useState<'idle' | 'ready' | 'launching' | 'celebrating'>('idle')
  const scrollToMemories = () =>
    document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const launchLove = () => {
    if (loveLaunchStage === 'idle') {
      setLoveLaunchStage('ready')
      return
    }

    if (loveLaunchStage === 'ready') {
      setLoveLaunchStage('launching')
      window.setTimeout(() => {
        setLoveLaunchStage('celebrating')
        window.setTimeout(() => setLoveLaunchStage('idle'), 5000)
      }, 1150)
      return
    }

    setLoveLaunchStage('idle')
  }

  // September 1, 2026 is a Tuesday
  const firstDayOfMonth = 2 // 0 = Sunday, 1 = Monday, 2 = Tuesday
  const daysInMonth = 30
  const emptyDays = firstDayOfMonth

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-12 sm:py-20 overflow-hidden">
      {/* COUPLE SILHOUETTE - TOP RIGHT CORNER */}
      <div className="hidden" aria-hidden="true">
        <svg
          viewBox="0 0 300 300"
          className="w-full h-full"
          fill="#b9496e"
        >
          {/* Couple silhouette - man and woman holding hands */}
          <g transform="translate(20, 30)">
            {/* Woman */}
            <circle cx="30" cy="25" r="22" />
            <path d="M10,55 L50,55 L45,95 L15,95 Z" />
            <path d="M12,70 L5,100 L15,102 L22,82 Z" />
            <path d="M48,70 L55,100 L45,102 L38,82 Z" />
            <path d="M15,95 L45,95 L50,140 L10,140 Z" />
            <circle cx="20" cy="60" r="5" />
            <path d="M10,25 Q8,12 20,8 Q30,5 40,10 Q48,15 50,22 Q52,28 48,32" fill="none" stroke="#b9496e" strokeWidth="3" />
            
            {/* Man */}
            <circle cx="95" cy="25" r="25" />
            <path d="M70,55 L120,55 L115,95 L75,95 Z" />
            <path d="M72,70 L65,100 L75,102 L82,82 Z" />
            <path d="M118,70 L125,100 L115,102 L108,82 Z" />
            <path d="M75,95 L115,95 L120,140 L70,140 Z" />
            <circle cx="78" cy="60" r="5" />
            
            {/* Arms holding hands */}
            <path d="M50,60 L70,60" stroke="#b9496e" strokeWidth="6" strokeLinecap="round" />
            
            {/* Heart above them */}
            <path
              d="M60,5 C60,-5 52,-15 45,-15 C35,-15 30,-3 30,10 C30,22 60,40 60,40 C60,40 90,22 90,10 C90,-3 85,-15 75,-15 C68,-15 60,-5 60,5 Z"
              fill="#e34978"
              opacity="0.6"
              transform="scale(0.8) translate(15, 5)"
            />
            
            {/* Small floating hearts */}
            <path
              d="M20,-10 C20,-16 16,-20 12,-20 C8,-20 5,-16 5,-12 C5,-7 20,-2 20,-2 C20,-2 35,-7 35,-12 C35,-16 32,-20 28,-20 C24,-20 20,-16 20,-10 Z"
              fill="#e34978"
              opacity="0.4"
              transform="translate(100, -20) scale(0.5)"
            />
            <path
              d="M20,-10 C20,-16 16,-20 12,-20 C8,-20 5,-16 5,-12 C5,-7 20,-2 20,-2 C20,-2 35,-7 35,-12 C35,-16 32,-20 28,-20 C24,-20 20,-16 20,-10 Z"
              fill="#e34978"
              opacity="0.3"
              transform="translate(10, -30) scale(0.4)"
            />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className={`love-launcher is-${loveLaunchStage}`} aria-live="polite">
          <span className="love-launcher-bow" aria-hidden="true">
            <span className="bow-curve" />
            <span className="bow-string bow-string-top" />
            <span className="bow-string bow-string-bottom" />
            <span className="bow-grip" />
            <span className="bow-loaded-arrow" />
          </span>
          <button
            type="button"
            onClick={launchLove}
            disabled={loveLaunchStage === 'launching'}
            className="love-launcher-button mt-5"
          >
            {loveLaunchStage === 'idle' || loveLaunchStage === 'celebrating' ? 'Click here' : loveLaunchStage === 'ready' ? 'Ready' : 'Flying'}
          </button>          
        </div>

        {loveLaunchStage === 'launching' && <span className="love-arrow" aria-hidden="true" />}

        <div className={`love-target ${loveLaunchStage === 'celebrating' ? 'is-celebrating' : ''}`} aria-live="polite">
          {loveLaunchStage === 'celebrating' && (
            <>
              <span className="love-burst love-burst-one" aria-hidden="true">♥</span>
              <span className="love-burst love-burst-two" aria-hidden="true">✦</span>
              <span className="love-burst love-burst-three" aria-hidden="true">♥</span>
              <span className="love-burst love-burst-four" aria-hidden="true">✿</span>
              <span className="love-burst love-burst-five" aria-hidden="true">✦</span>
              <span className="love-burst love-burst-six" aria-hidden="true">♥</span>
              <span className="love-burst love-burst-seven" aria-hidden="true">✿</span>
              <span className="love-burst love-burst-eight" aria-hidden="true">✧</span>
              <p>Love you babiee ♡</p>
            </>
          )}
        </div>

        <div className="grid min-h-[78vh] items-start gap-10 lg:grid-cols-[1fr_.6fr_.45fr] lg:gap-10">
          <div>
            <p className="font-serif text-xl italic text-[#cc7692]">
              To the love of my life
            </p>

            <h2 className="mt-2 font-serif text-5xl leading-none text-[#7d2949] sm:text-7xl">
              Happy Birthday,<br />
              <span className="text-[#e77298]">My Love.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#76515f]">
              The calendar says it&apos;s your birthday. My heart says it&apos;s a
              day to celebrate the person who makes every day brighter.
            </p>

            <button
              onClick={onToggleLetter}
              className="mt-7 rounded-full border-2 border-[#b95073] px-6 py-3 text-xs font-bold uppercase tracking-[.16em] text-[#a63d60] transition hover:bg-[#b95073] hover:text-white cursor-pointer"
            >
              {showLetter ? 'Close my letter' : 'Read my little letter'} ♡
            </button>

            {showLetter && (
              <div className="animate-in mt-5 rounded-2xl border border-[#efd0da] bg-[#fffdfc] p-5 font-serif text-lg leading-8 text-[#754558] shadow-sm">
                My darling, thank you for being you. May this next chapter be full
                of tiny adventures, loud laughs, peaceful mornings, and every
                dream your beautiful heart wants. I&apos;ll be cheering for you in
                all of it. Happy birthday, my love. -- Yours, always 💙
              </div>
            )}

            <button
              onClick={scrollToMemories}
              className="mt-8 block text-xs font-bold uppercase tracking-[.18em] text-[#ae4f6d] hover:text-[#73253f] cursor-pointer"
            >
              See our little memories ↓
            </button>
          </div>

          {/* MEDIUM CALENDAR */}
          <div className="relative mx-auto w-full max-w-[260px] lg:mt-0">
            <div className="absolute -inset-5 rounded-full bg-[#fde2e9] blur-lg opacity-60" />

            <div className="relative overflow-hidden rounded-xl border-[5px] border-white bg-[#fffdfc] text-center shadow-xl">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-[#b9496e] to-[#e981a2] px-3.5 py-2.5 text-white">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em]">September 2026</p>
                <p className="mt-0.5 font-serif text-[11px] italic">a day made for you</p>
              </div>

              {/* Calendar Body */}
              <div className="p-3 sm:p-4">
                {/* Day Names */}
                <div className="grid grid-cols-7 gap-1 text-[8px] font-bold uppercase tracking-wide text-[#b98798]">
                  <span>S</span>
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: emptyDays }, (_, index) => (
                    <span key={`empty-${index}`} className="aspect-square" />
                  ))}

                  {Array.from({ length: daysInMonth }, (_, index) => {
                    const dayNumber = index + 1
                    const isSpecialDay = dayNumber === 11
                    return (
                      <span
                        key={dayNumber}
                        className={`flex aspect-square items-center justify-center rounded-full text-[10px] ${
                          isSpecialDay
                            ? 'bg-[#df587f] font-serif text-[11px] text-white shadow-[0_3px_8px_rgba(209,61,109,.35)] scale-110'
                            : 'text-[#81576a] hover:bg-[#fce8ef] transition-colors'
                        }`}
                      >
                        {isSpecialDay ? '♥' : dayNumber}
                      </span>
                    )
                  })}
                </div>

                {/* Calendar Footer */}
                <div className="mt-3 border-t border-[#f1d6de] pt-3">
                  <p className="font-serif text-2xl text-[#8d3856]">11</p>
                  <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#c36a85]">
                    Friday · Sep 2026
                  </p>
                  <p className="mt-1.5 font-serif text-[10px] italic text-[#b6607c]">
                    our special day ♥
                  </p>
                </div>
              </div>
            </div>

          </div>

          <aside className="who-is-she-panel mx-auto -mt-40 w-full max-w-[230px] self-center text-center lg:mx-0">
            <p className="font-serif text-2xl italic text-[#8d3856]">Who is She?</p>
            <div className="love-name-viewport mt-4" aria-label={relationshipNames.join(', ')}>
              <div className="love-name-track">
                {[...relationshipNames, ...relationshipNames].map((name, index) => (
                  <p key={`${name}-${index}`} className="love-name-item">{name}</p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Memories Section */}
      <div id="memories" className="relative z-10 scroll-mt-8 border-t border-[#f0d4dc] pt-14 text-center">
        <p className="font-serif text-4xl italic text-[#a34a67]">Our little memories</p>

        <p className="mt-3 text-sm text-[#9b7080]">
          Replace these demo photos with your own favourite moments together.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {memories.map((memory, index) => (
            <figure
              key={`${memory.caption}-${index}`}
              className={`rounded-sm bg-white p-3 pb-5 text-left shadow-[0_12px_28px_rgba(122,56,81,.12)] transition duration-300 hover:-translate-y-2 hover:rotate-0 ${
                index % 2 ? 'rotate-2' : '-rotate-2'
              }`}
            >
              <img
                src={memory.src}
                alt={memory.caption}
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-3 px-1 font-serif text-lg italic text-[#8e5367]">
                {memory.caption}
              </figcaption>
              <p className="mt-1 px-1 text-xs leading-5 text-[#a27887]">
                {memory.note}
              </p>
            </figure>
          ))}
        </div>

        <button
          onClick={onQuestion}
          className="mt-12 rounded-full bg-[#923b5a] px-7 py-4 text-xs font-bold uppercase tracking-[.16em] text-white shadow-lg transition hover:-translate-y-1  cursor-pointer"
        >
          One last question →
        </button>
      </div>
    </section>
  )
}
