export const BIRTHDAY = new Date('2026-09-11T00:00:00+05:30').getTime()

export function timeLeft() {
  const distance = Math.max(0, BIRTHDAY - Date.now())
  return { days: Math.floor(distance / 86_400_000), hours: Math.floor((distance / 3_600_000) % 24), mins: Math.floor((distance / 60_000) % 60), secs: Math.floor((distance / 1_000) % 60) }
}
