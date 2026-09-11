import astralSky from '../assets/moonback.jpg'
import ourPhoto from '../assets/moon.jpg'

type AstralPageProps = {
  onBack: () => void
}

const stars = [
  ['8%', '13%', '0.75rem'], ['17%', '29%', '0.45rem'], ['28%', '9%', '0.55rem'],
  ['38%', '18%', '0.4rem'], ['53%', '8%', '0.7rem'], ['66%', '21%', '0.45rem'],
  ['79%', '11%', '0.6rem'], ['91%', '28%', '0.4rem'], ['6%', '67%', '0.45rem'],
  ['19%', '82%', '0.7rem'], ['77%', '75%', '0.45rem'], ['90%', '89%', '0.65rem'],
]

export function AstralPage({ onBack }: AstralPageProps) {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[#020a12] px-5 py-10 text-center text-white">
      <img
        src={astralSky}
        alt="Glowing spiral galaxy"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,151,199,.20),rgba(2,10,18,.55)_42%,rgba(2,5,10,.92)_100%)]" />

      {stars.map(([left, top, size], index) => (
        <span
          key={index}
          aria-hidden="true"
          className="absolute rounded-full bg-white shadow-[0_0_12px_4px_rgba(172,226,255,.75)] animate-pulse"
          style={{ left, top, width: size, height: size, animationDelay: `${index * 180}ms` }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-xl">
        <button
          type="button"
          onClick={onBack}
          className="absolute -top-3 left-0 rounded-full border border-white/40 bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white/90 backdrop-blur transition hover:bg-white/15"
        >
          ← Back
        </button>

        <p className="pt-12 font-serif text-lg italic tracking-wide text-sky-100/85">
          Written in the stars
        </p>
        <h2 className="mt-2 font-serif text-5xl text-white sm:text-6xl">
          Us, in our own universe
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-sky-100/80">
          Out of all the stars in every sky, I would still find you.
        </p>

        <div className="relative mx-auto mt-10 aspect-square w-full max-w-[390px] rounded-full border border-sky-100/70 p-3 shadow-[0_0_35px_8px_rgba(127,213,255,.45),0_0_100px_25px_rgba(255,186,133,.16)]">
          <div className="absolute -inset-5 rounded-full border border-dashed border-sky-100/45 animate-[spin_45s_linear_infinite]" />
          <div className="absolute -inset-11 rounded-full border border-sky-200/20" />
          <img
            src={ourPhoto}
            alt="A cherished memory of us together"
            className="h-full w-full rounded-full border-4 border-white/90 object-cover object-[47%_37%] shadow-2xl"
          />
          <span className="absolute -right-3 top-10 text-3xl text-amber-200 drop-shadow-[0_0_10px_rgba(255,222,145,.9)]">✦</span>
          <span className="absolute bottom-7 -left-4 text-2xl text-sky-100 drop-shadow-[0_0_10px_rgba(181,232,255,.9)]">✧</span>
        </div>

        <p className="mt-10 font-serif text-xl italic text-white/90">Always yours. ♡</p>
      </div>
    </section>
  )
}
