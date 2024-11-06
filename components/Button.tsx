// components/Button.tsx
import React from 'react'
import Link from 'next/link'

type Props = {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const Button: React.FC<Props> = ({ href, onClick, children, className }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${className}`}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
