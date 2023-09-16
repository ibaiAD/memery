export const renderTime = (totalSecons: number) => {
  if (totalSecons === 0) return '00:00'

  const seconds = totalSecons % 60 < 10 ? `0${totalSecons % 60}` : totalSecons % 60
  const minutes = totalSecons / 60 < 10 ? `0${Math.floor(totalSecons / 60)}` : Math.floor(totalSecons / 60)

  return `${minutes}:${seconds}`
}
