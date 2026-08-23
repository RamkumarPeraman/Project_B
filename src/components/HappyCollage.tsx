import { happyCollagePhotos } from '../data/happyCollage'

export function HappyCollage() {
  return (
    <div className="happy-collage" aria-hidden="true">
      <div className="happy-collage-grid">
        {happyCollagePhotos.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            loading={index > 15 ? 'lazy' : 'eager'}
          />
        ))}
      </div>
      <div className="happy-collage-dim" />
    </div>
  )
}