import { useState } from 'react'
import type { FormEvent } from 'react'
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
  const [isPinOpen, setIsPinOpen] = useState(false)
  const [pin, setPin] = useState('')
  const [pinMessage, setPinMessage] = useState('')

  const openPin = () => {
    setPin('')
    setPinMessage('')
    setIsPinOpen(true)
  }

  const submitPin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (pin === '112027' || pin == '112003' || pin == '270323') {
      setIsPinOpen(false)
      onOpen()
      return
    }

    setPinMessage('That is not our little secret, my love. Try the date that holds our sweetest memory. ♡')
  }

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
          onClick={openPin}
          className="group mt-8 rounded-full bg-[#8f3658] px-7 py-4 text-sm font-bold uppercase tracking-[.16em] text-white shadow-[0_12px_28px_rgba(143,54,88,.25)] transition hover:-translate-y-1 hover:bg-[#73253f] cursor-pointer"
        >
          Open your birthday surprise{' '}
          <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
        </button>
      </div>

      {isPinOpen && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#4a2033]/35 px-5 backdrop-blur-sm"
          onClick={() => setIsPinOpen(false)}
        >
          <form
            className="w-full max-w-sm rounded-[2rem] border border-[#f2c7d5] bg-[#fffafa] p-7 text-center shadow-[0_24px_70px_rgba(91,35,60,.30)]"
            onSubmit={submitPin}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="font-serif text-3xl text-[#8f3658]">A little secret</p>
            <p className="mt-2 text-sm leading-6 text-[#8f6272]">
              Enter the six-digit PIN to open your birthday surprise.
            </p>

            <input
              autoFocus
              value={pin}
              onChange={(event) => {
                setPin(event.target.value.replace(/\D/g, '').slice(0, 6))
                setPinMessage('')
              }}
              inputMode="numeric"
              maxLength={6}
              type="password"
              aria-label="Six-digit PIN"
              placeholder="• • • • • •"
              className="mt-6 w-full rounded-2xl border border-[#efc1d0] bg-white px-4 py-4 text-center text-2xl tracking-[.45em] text-[#8f3658] outline-none transition placeholder:tracking-[.2em] placeholder:text-[#efbfd0] focus:border-[#c75078] focus:ring-4 focus:ring-[#f9dce5]"
            />

            <p className="mt-3 min-h-10 text-sm leading-5 text-[#bd5578]" role="status">
              {pinMessage}
            </p>

            <div className="mt-3 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setIsPinOpen(false)}
                className="rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[.15em] text-[#a86378] transition hover:bg-[#f9e4ea] cursor-pointer"
              >
                Not yet
              </button>
              <button
                type="submit"
                className="rounded-full bg-[#8f3658] px-6 py-3 text-xs font-bold uppercase tracking-[.15em] text-white shadow-[0_8px_18px_rgba(143,54,88,.22)] transition hover:bg-[#73253f] cursor-pointer"
              >
                Unlock ♡
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  )
}
