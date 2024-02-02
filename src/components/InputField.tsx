import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputField = React.forwardRef<
  HTMLInputElement,
  Props
>(({...props}, ref) => {
  return (
    <input
      className="bg-dark-900 border-2 border-dark-400 rounded py-4 px-12 placeholder:text-muted focus:border-primary focus:outline-0"
      ref={ref}
      {...props}
    />
  )
})

export default InputField;