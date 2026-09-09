import { useState } from 'react'
import type { FormEvent } from 'react'
import { Countdown } from './Countdown'
import "./baloon.css"
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"

type WelcomePageProps = {
  countdown: { days: number; hours: number; mins: number; secs: number }
  onOpen: () => void
}

type Balloon = {
  id: number
  image: string
  left: string
  top: string
  color: string
  rotate: number
}

// ======================================================
// 7 BALLOONS
// ======================================================
// Put your images inside:
// public/images/
//   image1.jpg
//   image2.jpg
//   image3.jpg
//   image4.jpg
//   image5.jpg
//   image6.jpg
//   image7.jpg
//
// Each balloon has its own image.
// ======================================================

const balloons: Balloon[] = [
  {
    id: 1,
    image: img6,
    left: '7%',
    top: '18%',
    color: '#10ce1a',
    rotate: -8,
  },
  {
    id: 2,
    image: img1,
    left: '18%',
    top: '78%',
    color: '#19c8e3',
    rotate: 7,
  },
  {
    id: 3,
    image: img2,
    left: '5%',
    top: '52%',
    color: '#f9f918',
    rotate: -5,
  },
  {
    id: 4,
    image: img5,
    left: '93%',
    top: '18%',
    color: '#f973a5',
    rotate: 7,
  },
  {
    id: 5,
    image: img3,
    left: '82%',
    top: '78%',
    color: '#d82dcd',
    rotate: -7,
  },
  {
    id: 6,
    image: img4,
    left: '95%',
    top: '52%',
    color: '#a78bfa',
    rotate: 6,
  },
  // {
  //   id: 7,
  //   image: img5,
  //   left: '50%',
  //   top: '91%',
  //   color: '#f43f7a',
  //   rotate: -4,
  // },
]

// ======================================================
// DUDU BUBU GIF
// ======================================================

const duduBubuAssets = import.meta.glob(
  '../assets/dudu-bubu-transparent.{gif,png,webp}',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
) as Record<string, string>

const DUDU_BUBU_GIF = Object.values(duduBubuAssets)[0]

export function WelcomePage({
  countdown,
  onOpen,
}: WelcomePageProps) {
  const [isPinOpen, setIsPinOpen] = useState(false)
  const [pin, setPin] = useState('')
  const [pinMessage, setPinMessage] = useState('')

  // ======================================================
  // BALLOON STATE
  // ======================================================

  const [poppedIds, setPoppedIds] = useState<number[]>([])
  const [poppingId, setPoppingId] = useState<number | null>(null)

  // ======================================================
  // OPEN PIN
  // ======================================================

  const openPin = () => {
    setPin('')
    setPinMessage('')
    setIsPinOpen(true)
  }

  // ======================================================
  // PIN SUBMIT
  // ======================================================

  const submitPin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (pin === '102938') {
      setIsPinOpen(false)
      onOpen()
      return
    }

    setPinMessage(
      'That is not our little secret, my love. Try the date that holds our sweetest memory. ♡'
    )
  }

  // ======================================================
  // POP BALLOON
  // ======================================================

  const popBalloon = (id: number) => {
    if (poppingId !== null) return

    if (poppedIds.includes(id)) return

    setPoppingId(id)

    // Wait for pop animation to finish,
    // then replace balloon with its image.
    setTimeout(() => {
      setPoppedIds((current) => [...current, id])
      setPoppingId(null)
    }, 550)
  }

  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center overflow-hidden px-5 py-12 text-center">

      {/* ==================================================
          7 BALLOONS
      ================================================== */}

      <div
        className="welcome-balloons"
        aria-hidden={isPinOpen}
      >
        {balloons.map((balloon) => {
          const isPopped = poppedIds.includes(balloon.id)
          const isPopping = poppingId === balloon.id

          // ----------------------------------------------
          // AFTER POP -> SHOW IMAGE
          // ----------------------------------------------

          if (isPopped) {
            return (
              <div
                key={`photo-${balloon.id}`}
                className="welcome-balloon-photo"
                style={{
                  left: balloon.left,
                  top: balloon.top,
                  transform: `translate(-50%, -50%) rotate(${balloon.rotate}deg)`,
                }}
              >
                <img
                  className="dudu-bubu-gif"
                  src={balloon.image}
                  alt={`Memory ${balloon.id}`}
                />
              </div>
            )
          }

          // ----------------------------------------------
          // BALLOON
          // ----------------------------------------------

          return (
            <button
              key={balloon.id}
              type="button"
              disabled={isPinOpen}
              aria-label={`Pop balloon ${balloon.id}`}
              onClick={() => popBalloon(balloon.id)}
              className={`welcome-balloon ${isPopping
                  ? 'welcome-balloon-popping'
                  : ''
                }`}
              style={{
                left: balloon.left,
                top: balloon.top,
                '--balloon-color': balloon.color,
                '--balloon-rotate': `${balloon.rotate}deg`,
              } as React.CSSProperties}
            >
              {/* Balloon body */}

              <span className="welcome-balloon-shape">
                <span className="welcome-balloon-shine" />
              </span>

              {/* Balloon knot */}

              <span className="welcome-balloon-knot" />

              {/* Balloon string */}

              <span className="welcome-balloon-string" />

              {/* Burst particles */}

              {isPopping && (
                <span className="welcome-balloon-burst">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* ==================================================
          DUDU BUBU GIFS
      ================================================== */}

      {DUDU_BUBU_GIF && (
        <div className="dudu-bubu-scenes" aria-hidden="true">
          {/* <img
            className="dudu-bubu-gif dudu-bubu-top-left"
            src={DUDU_BUBU_GIF}
            alt="" */}
          {/* /> */}

          {/* <img
            className="dudu-bubu-gif dudu-bubu-top-right"
            src={DUDU_BUBU_GIF}
            alt=""
          /> */}

          {/* <img
            className="dudu-bubu-gif dudu-bubu-bottom-left"
            src={DUDU_BUBU_GIF}
            alt=""
          /> */}

          {/* <img
            className="dudu-bubu-gif dudu-bubu-bottom-right"
            src={DUDU_BUBU_GIF}
            alt=""
          /> */}
        </div>
      )}

      {/* ==================================================
          STICKERS
      ================================================== */}

      <div
        className="dudu-bubu-stickers"
        aria-hidden="true"
      >
        <span className="sticker sticker-heart sticker-one">
          ♥
        </span>

        <span className="sticker sticker-flower sticker-two">
          ✿
        </span>

        <span className="sticker sticker-sparkle sticker-three">
          ✦
        </span>

        <span className="sticker sticker-bow sticker-four">
          🎀
        </span>

        <span className="sticker sticker-heart sticker-five">
          ♥
        </span>

        <span className="sticker sticker-flower sticker-six">
          ✿
        </span>

        <span className="sticker sticker-sparkle sticker-seven">
          ✧
        </span>

        <span className="sticker sticker-heart sticker-eight">
          ♥
        </span>
      </div>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div className="relative z-10">

        {/* Small heading */}

        <div className="inline-flex items-center gap-2 rounded-full border border-[#f1c7d3] bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[.22em] text-[#a95b74] shadow-sm">
          ✦ a little surprise for you ✦
        </div>

        {/* Date */}

        <p className="mt-7 font-serif text-xl italic text-[#bb758b]">
          September 11, 2026
        </p>

        {/* Countdown */}

        <div className="mt-7 rounded-[2rem] border border-[#f3d6df] bg-white/65 px-5 py-5 shadow-[0_14px_40px_rgba(168,77,111,.10)] sm:px-8">
          <Countdown values={countdown} />
        </div>

        {/* Open button */}

        <button
          onClick={openPin}
          className="group mt-8 cursor-pointer rounded-full bg-[#8f3658] px-7 py-4 text-sm font-bold uppercase tracking-[.16em] text-white shadow-[0_12px_28px_rgba(143,54,88,.25)] transition hover:-translate-y-1 hover:bg-[#73253f]"
        >
          Open your birthday surprise

          <span className="ml-2 inline-block transition group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* ==================================================
          PIN MODAL
      ================================================== */}

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
            {/* Modal title */}

            <p className="font-serif text-3xl text-[#8f3658]">
              A little secret
            </p>

            {/* Modal description */}

            <p className="mt-2 text-sm leading-6 text-[#8f6272]">
              Enter the six-digit PIN to open your birthday surprise.
            </p>

            {/* PIN input */}

            <input
              autoFocus
              value={pin}
              onChange={(event) => {
                setPin(
                  event.target.value
                    .replace(/\D/g, '')
                    .slice(0, 6)
                )

                setPinMessage('')
              }}
              inputMode="numeric"
              maxLength={6}
              type="password"
              aria-label="Six-digit PIN"
              placeholder="• • • • • •"
              className="mt-6 w-full rounded-2xl border border-[#efc1d0] bg-white px-4 py-4 text-center text-2xl tracking-[.45em] text-[#8f3658] outline-none transition placeholder:tracking-[.2em] placeholder:text-[#efbfd0] focus:border-[#c75078] focus:ring-4 focus:ring-[#f9dce5]"
            />

            {/* Error message */}

            <p
              className="mt-3 min-h-10 text-sm leading-5 text-[#bd5578]"
              role="status"
            >
              {pinMessage}
            </p>

            {/* Buttons */}

            <div className="mt-3 flex justify-center gap-3">

              <button
                type="button"
                onClick={() => setIsPinOpen(false)}
                className="cursor-pointer rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[.15em] text-[#a86378] transition hover:bg-[#f9e4ea]"
              >
                Not yet
              </button>

              <button
                type="submit"
                className="cursor-pointer rounded-full bg-[#8f3658] px-6 py-3 text-xs font-bold uppercase tracking-[.15em] text-white shadow-[0_8px_18px_rgba(143,54,88,.22)] transition hover:bg-[#73253f]"
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