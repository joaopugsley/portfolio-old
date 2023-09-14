"use client"

import { MouseEventHandler } from "react"

export type ButtonProps = {
  onClick?: MouseEventHandler
  className?: string
  children?: React.ReactNode
}

const Button = ({ onClick, className, children }: ButtonProps): JSX.Element => {

  return (
    <button onClick={onClick} className={`outline-0 px-6 py-3 rounded-md w-fit bg-gradient-to-r from-violet-500 to-blue-700 select-none transition-all duration-75 hover:scale-110 ${className}`}>
      {children}
    </button>
  )

}

export default Button;