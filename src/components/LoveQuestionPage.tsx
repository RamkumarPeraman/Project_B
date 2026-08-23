import { useRef } from 'react'
import { HappyCollage } from './HappyCollage'

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
        <div className="love-note-card animate-in relative z-10 max-w-xl px-7 py-10 sm:px-12">
          <div className="text-4xl">💙💙</div>
          <p className="mt-5 font-serif text-4xl italic text-[#b33d64] sm:text-5xl">
            I love you more,<br />
            always and forever.
          </p>
          <p className="mt-4 text-sm text-[#9b5e74]">
            Every little photo is another reason I&apos;m grateful for you.
          </p>
          <button
            onClick={onReplay}
            className="mt-8 text-xs font-bold uppercase tracking-widest text-[#af5c75]"
          >
            Replay our little story
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-5 py-12 text-center">
      <p
        className={`font-serif text-xl italic ${
          mood === 'sad' ? 'text-[#837583]' : 'text-[#d57694]'
        }`}
      >
        {mood === 'sad'
          ? 'Oh no… that makes my heart a little sad.'
          : 'One tiny question before you go'}
      </p>

      <h2
        className={`mt-3 font-serif text-6xl leading-none sm:text-8xl ${
          mood === 'sad' ? 'text-[#665a66]' : 'text-[#842f50]'
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
          className="rounded-full border-2 border-[#9e9099] bg-white/80 px-8 py-4 text-sm font-bold uppercase tracking-[.18em] text-[#766873] transition-transform duration-100"
        >
          No
        </button>
      </div>

      <p className="mt-8 text-xs text-[#a9808e]">
        Psst… the No button is a little shy.
      </p>
    </section>
  )
}