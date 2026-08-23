import { Countdown } from './Countdown'

type WelcomePageProps = {
  countdown: { days: number; hours: number; mins: number; secs: number }
  onOpen: () => void
}

// Add a transparent GIF, PNG, or WebP at src/assets/dudu-bubu-transparent.
// Vite will automatically bundle it once the file is present.
const duduBubuAssets = import.meta.glob('../assets/dudu-bubu-transparent.{gif,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>
const DUDU_BUBU_GIF = Object.values(duduBubuAssets)[0]

export function WelcomePage({ countdown, onOpen }: WelcomePageProps) {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center overflow-hidden px-5 py-12 text-center">
      {DUDU_BUBU_GIF && (
        <div className="dudu-bubu-scenes" aria-hidden="true">
          <img className="dudu-bubu-gif dudu-bubu-top-left" src={DUDU_BUBU_GIF} alt="" />
          <img className="dudu-bubu-gif dudu-bubu-top-right" src={DUDU_BUBU_GIF} alt="" />
          <img className="dudu-bubu-gif dudu-bubu-bottom-left" src={DUDU_BUBU_GIF} alt="" />
          <img className="dudu-bubu-gif dudu-bubu-bottom-right" src={DUDU_BUBU_GIF} alt="" />
        </div>
      )}

      <div className="dudu-bubu-stickers" aria-hidden="true">
        <span className="sticker sticker-heart sticker-one">♥</span>
        <span className="sticker sticker-flower sticker-two">✿</span>
        <span className="sticker sticker-sparkle sticker-three">✦</span>
        <span className="sticker sticker-bow sticker-four">🎀</span>
        <span className="sticker sticker-heart sticker-five">♥</span>
        <span className="sticker sticker-flower sticker-six">✿</span>
        <span className="sticker sticker-sparkle sticker-seven">✧</span>
        <span className="sticker sticker-heart sticker-eight">♥</span>
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#f1c7d3] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[.22em] text-[#a95b74] shadow-sm">
          ✦ a little surprise for you ✦
        </div>

        <p className="mt-7 font-serif text-xl italic text-[#bb758b]">
          September 11, 2026
        </p>

        <div className="mt-7 rounded-[2rem] border border-[#f3d6df] bg-white/65 px-5 py-5 shadow-[0_14px_40px_rgba(168,77,111,.10)] sm:px-8">
          <Countdown values={countdown} />
        </div>

        <button
          onClick={onOpen}
          className="group mt-8 rounded-full bg-[#8f3658] px-7 py-4 text-sm font-bold uppercase tracking-[.16em] text-white shadow-[0_12px_28px_rgba(143,54,88,.25)] transition hover:-translate-y-1 hover:bg-[#73253f]"
        >
          Open your birthday surprise{' '}
          <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  )
}
