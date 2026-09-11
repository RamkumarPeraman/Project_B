import { useEffect, useState } from 'react'
import { Decorations } from './components/Decorations'
import { AstralPage } from './components/AstralPage'
import { LetterPage } from './components/LetterPage'
import { LoveQuestionPage } from './components/LoveQuestionPage'
import { WelcomePage } from './components/WelcomePage'
import { timeLeft } from './utils/countdown'
import './App.css'

function App() {
  const [page, setPage] = useState(0)
  const [countdown, setCountdown] = useState(timeLeft)
  const [showLetter, setShowLetter] = useState(false)
  const [mood, setMood] = useState<'normal' | 'sad' | 'happy'>('normal')
  const [saidYes, setSaidYes] = useState(false)
  const [noMove, setNoMove] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(timeLeft()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const dodgeNo = () => {
    setMood('sad')
    setNoMove({
      x: 90 + Math.floor(Math.random() * 220),
      y: Math.floor(Math.random() * 180) - 90
    })
  }

  const replay = () => {
    setMood('normal')
    setSaidYes(false)
    setPage(0)
  }

  return (
    <main
      className={`min-h-screen overflow-hidden text-[#4a2735] selection:bg-[#ffb9cc] transition-colors duration-500 ${
        mood === 'sad'
          ? 'bg-[#e6e2e5] text-[#59505a]'
          : mood === 'happy'
          ? 'bg-[#fff0f5]'
          : 'bg-[#fff9f7]'
      }`}
    >
      <Decorations mood={mood} />

      {page === 0 && (
        <WelcomePage countdown={countdown} onOpen={() => setPage(1)} />
      )}

      {page === 1 && (
        <LetterPage
          showLetter={showLetter}
          onToggleLetter={() => setShowLetter(!showLetter)}
          onQuestion={() => setPage(3)}
          onOpenAstral={() => setPage(2)}
        />
      )}

      {page === 2 && <AstralPage onBack={() => setPage(1)} />}

      {page === 3 && (
        <LoveQuestionPage
          mood={mood}
          saidYes={saidYes}
          noMove={noMove}
          onYesEnter={() => setMood('happy')}
          onYesLeave={() => setMood('normal')}
          onYes={() => {
            setMood('happy')
            setSaidYes(true)
          }}
          onNoEnter={dodgeNo}
          onNoLeave={() => setMood('normal')}
          onReplay={replay}
        />
      )}
    </main>
  )
}

export default App
