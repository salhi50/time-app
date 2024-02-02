import classNames from "classnames";
import * as React from "react";
import { IconType } from "react-icons";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  Icon?: IconType;
  variant?: "primary" | "secondary" | "tertiary";
  shape?: "rectangle" | "square"
}

const Button: React.FC<Props> = ({
  label,
  Icon,
  variant = "secondary",
  shape = "rectangle",
  disabled = false,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames({
        "select-none font-medium rounded space-x-8 text-center active:opacity-70": true,
        "py-4 px-16 md:py-6 md:px-24": shape === "rectangle",
        "py-12 px-16 md:py-16 md:px-24": shape === "square",
        "text-dark-900 bg-primary hover:opacity-80": variant === "primary",
        "border bg-dark-700 border-dark-400 hover:opacity-80": variant === "secondary",
        "bg-transparent hover:bg-dark-700": variant === "tertiary",
        "opacity-50 pointer-events-none": disabled,
        [className!]: className
      })}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {Icon && <Icon size="1.25rem" />}
      {label && <span>{label}</span>}
    </button>
  )
}

export default Button;