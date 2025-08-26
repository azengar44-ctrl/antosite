import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", asChild, children, ...props }, ref) => {
    if (asChild) {
      // When rendered as <a> via asChild, we expect parent to pass an anchor
      return (
        <button
          ref={ref}
          className={`inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-xl font-medium transition ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    }
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-xl font-medium transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
