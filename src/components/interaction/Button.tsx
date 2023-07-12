import { useRouter } from "next/router"
import React, { useState } from "react"
import "./button.css"

interface ButtonProps {
  testId: string
  label: string
  text?: string
  href?: string
  primary?: boolean
  "data-testid"?: string
}

export const Button = ({
  testId,
  label,
  text,
  href,
  primary = false,
  ...props
}: ButtonProps) => {
  const [textToggle, setTextToggle] = useState(false)
  const router = useRouter()
  const mode = primary ? "primary" : ""

  const onClick = () => {
    if (href) {
      void router.push(href)
    } else {
      setTextToggle(!textToggle)
    }
  }

  return (
    <div>
      <button
        data-test-id={testId}
        type='button'
        className={["button", mode].join(" ")}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
      {textToggle && <div>{text}</div>}
    </div>
  )
}
