import { useRef } from 'react'
import { HappyCollage } from './HappyCollage'
import './baloon.css'

type LoveQuestionPageProps = {
  mood: 'normal' | 'sad' | 'happy'
  saidYes: boolean
  noMove: { x: number; y: number }
  onYesEnter: () => void
  onYesLeave: () => void
  onYes: () => void
  onNoEnter: () => void
  onNoLeave: () => void
  onReplay: () => void
}

export function LoveQuestionPage({
  mood,
  saidYes,
  noMove,
  onYesEnter,
  onYesLeave,
  onYes,
  onNoEnter,
  onNoLeave,
  onReplay
}: LoveQuestionPageProps) {
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const dodgeWhenClose = (event: React.MouseEvent<HTMLDivElement>) => {
    const button = noButtonRef.current
    if (!button) return
    const bounds = button.getBoundingClientRect()
    if (
      Math.hypot(
        event.clientX - (bounds.left + bounds.width / 2),
        event.clientY - (bounds.top + bounds.height / 2)
      ) < 180
    ) {
      onNoEnter()
    }
  }

  if (saidYes) {
    return (
      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 py-12 text-center">
        <HappyCollage />
        <div className="love-note-card animate-in relative z-10 max-w-sm px-3 py-4 sm:px-4">
          <div className="text-2xl">💙💙</div>

          <p className="mt-3 font-serif text-2xl italic text-[#b33d64] sm:text-3xl">
            I love you more,<br />
            always and forever.
          </p>

          <p className="mt-3 text-xs text-[#9b5e74]">
            Every little photo is another reason I&apos;m grateful for you.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 py-12 text-center">
      <p
        className={`font-serif text-xl italic ${mood === 'sad' ? 'text-[#837583]' : 'text-[#d57694]'
          }`}
      >
        {mood === 'sad'
          ? 'Oh no... that makes my heart ache even more. 🥺💔'
          : 'One tiny question before you go'}
      </p>

      <h2
        className={`mt-3 font-serif text-6xl leading-none sm:text-8xl ${mood === 'sad' ? 'text-[#665a66]' : 'text-[#842f50]'
          }`}
      >
        Do you<br />
        <span className={mood === 'happy' ? 'text-[#fa5b8b]' : ''}>love me?</span>
      </h2>

      <div
        onMouseMove={dodgeWhenClose}
        onMouseLeave={onNoLeave}
        className="relative mt-10 flex min-h-[250px] w-full max-w-xl items-start justify-center gap-8"
      >
        <button
          onMouseEnter={onYesEnter}
          onMouseLeave={onYesLeave}
          onFocus={onYesEnter}
          onBlur={onYesLeave}
          onClick={onYes}
          className="z-10 rounded-full bg-[#e34978] px-9 py-4 text-sm font-bold uppercase tracking-[.18em] text-white shadow-[0_12px_25px_rgba(227,73,120,.32)] transition hover:scale-110 cursor-pointer"
        >
          Yes! ♥
        </button>

        <button
          ref={noButtonRef}
          onMouseEnter={onNoEnter}
          onPointerDown={onNoEnter}
          style={{ transform: `translate(${noMove.x}px, ${noMove.y}px)` }}
          className="rounded-full border-2 border-[#9e9099] bg-white/80 px-8 py-4 text-sm font-bold uppercase tracking-[.18em] text-[#766873] transition-transform duration-100 cursor-pointer"
        >
          No
        </button>
      </div>
    </section>
  )
}