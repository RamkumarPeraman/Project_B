import { memories } from '../data/memories'

type MemoriesPageProps = {
  memoryIndex: number
  onPrevious: () => void
  onNext: () => void
}

export function MemoriesPage({ memoryIndex, onPrevious, onNext }: MemoriesPageProps) {
  const memory = memories[memoryIndex]

  return (
    <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-12 text-center">
      <p className="text-xs font-bold uppercase tracking-[.25em] text-[#b7748b]">
        Memory {memoryIndex + 1} / {memories.length}
      </p>

      <h2 className="mt-3 font-serif text-4xl text-[#8d3856] sm:text-5xl">
        Our little memories
      </h2>

      <figure className="animate-in mt-7 w-full max-w-md rounded-sm bg-white p-3 pb-6 text-left shadow-[0_18px_40px_rgba(122,56,81,.16)]">
        <img
          src={memory.src}
          alt={memory.caption}
          className="aspect-[4/5] w-full object-cover"
        />
        <figcaption className="mt-4 px-2 font-serif text-2xl italic text-[#8e5367]">
          {memory.caption}
        </figcaption>
        <p className="mt-1 px-2 text-sm leading-6 text-[#9d7180]">
          {memory.note}
        </p>
      </figure>

      <div className="mt-7 flex items-center gap-4">
        <button
          disabled={memoryIndex === 0}
          onClick={onPrevious}
          className="rounded-full border border-[#e9bcc9] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#a85b73] disabled:opacity-30"
        >
          ← Back
        </button>
        
        <button
          onClick={onNext}
          className="rounded-full bg-[#923b5a] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
        >
          {memoryIndex === memories.length - 1 ? 'One last question →' : 'Next memory →'}
        </button>
      </div>
    </section>
  )
}