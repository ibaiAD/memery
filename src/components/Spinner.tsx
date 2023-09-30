interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Spinner ({ size = 'md' }: Props) {
  const sizeClasses = {
    sm: 'w-10 h-10 border-4',
    md: 'w-12 h-12 border-[5px]',
    lg: 'w-14 h-14 border-[6px]',
    xl: 'w-16 h-16 border-[7px]'
  }

  return <div className={`spinner animate-spin rounded-full border-slate-300 border-l-purple-500 ${sizeClasses[size]}`}></div>
}
