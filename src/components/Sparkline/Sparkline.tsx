interface SparklineProps {
  data: number[]
  color?: string
}

export const Sparkline = ({ data, color = "#754043" }: SparklineProps) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100
      const y = 100 - ((value - min) / range) * 100
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg className="w-16 h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polyline fill="none" stroke={color} strokeWidth="3" points={points} className="opacity-80" />
    </svg>
  )
} 