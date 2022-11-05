// function randomNumber (min: number, max: number): number {
//   return Math.random() * (max - min) + min
// }

const bgs = ['bg-primary', 'bg-success', 'bg-error', 'bg-danger', 'bg-warning', 'bg-info']

export function getBgClass (i: number): string {
  const bg = bgs[i % bgs.length]
  // bgs[randomNumber(0, bgs.length)]
  return `card text-white bg-secondary ${bg}`
}
