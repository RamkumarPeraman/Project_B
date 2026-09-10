import { useEffect } from 'react'

type CountdownProps = {
  values: { days: number; hours: number; mins: number; secs: number }
  onComplete?: () => void
}

export function Countdown({ values, onComplete }: CountdownProps) {
  const { days, hours, mins, secs } = values

  useEffect(() => {
    if (days === 0 && hours === 0 && mins === 0 && secs === 0) {
      onComplete?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, hours, mins, secs])

  const units = [
    [days, 'days'],
    [hours, 'hours'],
    [mins, 'mins'],
    [secs, 'secs'],
  ]

  return (
    <>
      <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#bd8a9b]">
        The countdown to your big day
      </p>

      <div className="mt-3 flex gap-2 sm:gap-3">
        {units.map(([value, label]) => (
          <div
            key={label as string}
            className="min-w-[60px] rounded-2xl border border-[#f1d4dd] bg-white/80 px-2 py-3 shadow-sm sm:min-w-[76px]"
          >
            <strong className="block font-serif text-2xl text-[#943958] sm:text-3xl">
              {String(value).padStart(2, '0')}
            </strong>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#b4788a]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}