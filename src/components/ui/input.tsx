import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl outline-none focus:ring focus:ring-amber-500/30 ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
