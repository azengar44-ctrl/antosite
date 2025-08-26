import * as React from "react";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl outline-none focus:ring focus:ring-amber-500/30 ${className}`}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
