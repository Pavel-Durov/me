const bgs = ['bg-primary', 'bg-success', 'bg-error', 'bg-danger', 'bg-warning', 'bg-info']

export function getBgClass (i: number): string {
  const bg = bgs[i % bgs.length]
  return `card text-white bg-secondary ${bg}`
}
