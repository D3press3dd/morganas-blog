export function truncateText (text: string, finalLength: number = 6): string {
  const shorterText = text.split(/[.]/g).slice(0, finalLength)
  return `${shorterText.join('')}...`
}
