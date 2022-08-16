const colourIsLight = (rgb) => {
  if (!rgb) return
  const [r, g, b] = rgb.replace("(", "").replace(")", "").split(",")
  const a = 1 - (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return a < 0.5
}

export default colourIsLight
