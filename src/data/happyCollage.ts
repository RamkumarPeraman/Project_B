const googleDriveImage = (fileId: string) =>
  `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`

export const happyCollagePhotos = [
  { id: '', position: 'center 80%' },
  { id: '', position: 'center 65%' },
  { id: '', position: '55% 25%' },
].map(({ id, position }) => ({
  src: googleDriveImage(id),
  position,
}))