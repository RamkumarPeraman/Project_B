import { happyCollagePhotos } from '../data/happyCollage'

export function HappyCollage() {
  return (
    <div className="happy-collage" aria-hidden="true">
      <div className="happy-collage-grid">
        {happyCollagePhotos.map(({ src, position }, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            style={{ objectPosition: position }}
            loading={index > 15 ? 'lazy' : 'eager'}
          />
        ))}
      </div>
      <div className="happy-collage-dim" />
    </div>
  )
}
