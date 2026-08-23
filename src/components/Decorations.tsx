import type { CSSProperties } from 'react'

type DecorationsProps = {
  mood: 'normal' | 'sad' | 'happy'
}

export function Decorations({ mood }: DecorationsProps) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {mood === 'sad' ? (
        <>
          <div className="sad-stickers">{['☁️', '💔', '😞', '😢', '💧', '🥺', '☁️', '💔', '😔'].map((sticker, index) => <span key={`${sticker}-${index}`} style={{ left: `${2 + ((index * 17) % 95)}%`, top: `${4 + ((index * 29) % 88)}%`, '--sticker-delay': `${index * -0.45}s` } as CSSProperties}>{sticker}</span>)}</div>
          <div className="sad-rain">
            {Array.from({ length: 24 }, (_, index) => {
              const symbols = ['😭', '😢', '🥺', '💔', '💧', '😞']
              return <span key={index} style={{ left: `${3 + ((index * 29) % 94)}%`, fontSize: `${1.1 + (index % 4) * 0.45}rem`, '--sad-delay': `${(index % 7) * 0.5}s`, '--sad-duration': `${4.5 + (index % 5) * 0.5}s`, '--sad-drift': `${-4 + (index % 5) * 2}vw` } as CSSProperties}>{symbols[index % symbols.length]}</span>
            })}
          </div>
        </>
      ) : (
        <>
          {/* Floating hearts - more of them! */}
          <span className="floaty left-[5%] top-[8%] text-3xl text-[#ff6b8a]">♥</span>
          <span className="floaty delay-1 left-[12%] top-[45%] text-2xl text-[#ff8fa3]">♥</span>
          <span className="floaty delay-2 left-[8%] top-[85%] text-4xl text-[#ff6b8a]">♥</span>
          <span className="floaty delay-3 left-[3%] top-[60%] text-2xl text-[#ffb3c1]">♥</span>
          
          <span className="floaty delay-4 right-[5%] top-[5%] text-3xl text-[#ff6b8a]">♥</span>
          <span className="floaty delay-1 right-[12%] top-[40%] text-4xl text-[#ff8fa3]">♥</span>
          <span className="floaty delay-2 right-[8%] top-[80%] text-2xl text-[#ff6b8a]">♥</span>
          <span className="floaty delay-5 right-[3%] top-[65%] text-3xl text-[#ffb3c1]">♥</span>
          
          {/* Stars */}
          <span className="floaty delay-2 left-[20%] top-[15%] text-2xl text-[#f7d44a]">✦</span>
          <span className="floaty delay-3 left-[75%] top-[20%] text-3xl text-[#f7d44a]">✦</span>
          <span className="floaty delay-1 left-[45%] top-[10%] text-2xl text-[#f7d44a]">✦</span>
          <span className="floaty delay-4 left-[60%] top-[85%] text-2xl text-[#f7d44a]">✦</span>
          <span className="floaty delay-2 left-[30%] top-[90%] text-3xl text-[#f7d44a]">✦</span>
          <span className="floaty delay-5 left-[85%] top-[50%] text-2xl text-[#f7d44a]">✦</span>
          <span className="floaty delay-3 left-[50%] top-[70%] text-2xl text-[#f7d44a]">✦</span>
          
          {/* Flowers */}
          <span className="floaty delay-3 left-[25%] top-[30%] text-3xl text-[#ff9ebb]">✿</span>
          <span className="floaty delay-5 left-[70%] top-[35%] text-2xl text-[#ffb7c5]">✿</span>
          <span className="floaty delay-2 left-[40%] top-[50%] text-3xl text-[#ff9ebb]">✿</span>
          <span className="floaty delay-4 left-[15%] top-[70%] text-2xl text-[#ffb7c5]">✿</span>
          <span className="floaty delay-1 left-[80%] top-[70%] text-3xl text-[#ff9ebb]">✿</span>
          <span className="floaty delay-6 left-[55%] top-[30%] text-2xl text-[#ffb7c5]">✿</span>
          <span className="floaty delay-3 left-[90%] top-[25%] text-3xl text-[#ff9ebb]">✿</span>
          <span className="floaty delay-2 left-[10%] top-[50%] text-2xl text-[#ffb7c5]">✿</span>
          
          {/* Sparkles */}
          <span className="floaty delay-4 left-[35%] top-[5%] text-xl text-[#ffd4e0]">✦</span>
          <span className="floaty delay-6 left-[65%] top-[5%] text-xl text-[#ffd4e0]">✦</span>
          <span className="floaty delay-5 left-[50%] top-[95%] text-xl text-[#ffd4e0]">✦</span>
          
          {/* Background blur decorations */}
          <span className="absolute left-[15%] top-[5%] text-8xl text-[#f7ced6] blur-[2px] opacity-40">✦</span>
          <span className="absolute right-[20%] top-[10%] text-7xl text-[#f7ced6] blur-[2px] opacity-40">♥</span>
          <span className="absolute left-[30%] bottom-[10%] text-8xl text-[#f7ced6] blur-[2px] opacity-40">✿</span>
          <span className="absolute right-[25%] bottom-[15%] text-7xl text-[#f7ced6] blur-[2px] opacity-40">✦</span>
          <span className="absolute left-[5%] top-[50%] text-6xl text-[#f7ced6] blur-[2px] opacity-30">♥</span>
          <span className="absolute right-[5%] top-[40%] text-6xl text-[#f7ced6] blur-[2px] opacity-30">✿</span>
        </>
      )}

      {mood === 'happy' && (
        <div className="happy-rain">
          {Array.from({ length: 30 }, (_, index) => {
            const symbols = ['😍', '💕', '❤️', '🥰', '🌸', '🌺', '🌼', '✨', '⭐', '🦋', '🎀']
            const colours = ['#ff477e', '#ff6fae', '#ff9f1c', '#ffd166', '#c77dff', '#f72585', '#06d6a0']
            return (
              <span
                key={index}
                style={
                  {
                    left: `${3 + ((index * 23) % 94)}%`,
                    fontSize: `${1 + (index % 5) * 0.5}rem`,
                    '--fall-delay': `${(index % 8) * 0.4}s`,
                    '--fall-duration': `${4 + (index % 6) * 0.6}s`,
                    '--drift': `${-8 + (index % 7) * 2.8}vw`,
                    color: colours[index % colours.length]
                  } as CSSProperties
                }
              >
                {symbols[index % symbols.length]}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}
