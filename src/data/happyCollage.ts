const googleDriveImage = (fileId: string) =>
  `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`

export const happyCollagePhotos = [
  { id: '1Eetp8KfzzGO2q9F5wIYqC2oYky0yNxf2', position: 'center 80%' },
  { id: '1PgOhjEhVOLqm9e4U7F4OIiOMAeTYttoT', position: 'center 65%' },
  { id: '1LqleL_Nawa7OcQ20XDWvC3gh29tdHNkz', position: '55% 25%' },
  
].map(({ id, position }) => ({
  src: googleDriveImage(id),
  position,
}))