"use client"

import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

export type DropdownProps = {
  label: string
  className?: string
  initialState?: boolean
  children?: React.ReactNode
}

const Dropdown = ({ label, className, initialState = false, children}: DropdownProps): JSX.Element => {

  const [dropdownState, setDropdownState] = useState<boolean>(initialState);

  const toggleDropdown = () => {
    setDropdownState((state) => !state);
  }

  return (
    <div className="flex flex-col">
      <button onClick={toggleDropdown} className={`flex flex-row justify-center items-center outline-0 px-2 py-1 rounded-md w-fit bg-gradient-to-r from-violet-500 to-blue-700 select-none ${className}`}>
        {
          dropdownState ? (
            <AiOutlineArrowDown/>
          ) : (
            <AiOutlineArrowRight/>
          )
        }
        <span className="ml-1">{label}</span>
      </button>
      {
        dropdownState ? (
          <>
            {children}
          </>
        ) : null
      }
    </div>
  )

}

export default Dropdown;