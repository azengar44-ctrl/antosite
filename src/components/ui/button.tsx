import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className = "", asChild, children, ...props }, ref) => {
    const base = `inline-flex items-center justify-center px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-xl font-medium transition ${className}`;
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: `${base} ${children.props.className || ""}`,
        ref,
        ...props,
      });
    }
    return (
      <button ref={ref as any} className={base} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
