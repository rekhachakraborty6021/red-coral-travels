import { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ error, className = '', ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={`
          w-full px-4 py-3 rounded-lg border
          text-base text-graphite min-h-[120px]
          placeholder:text-graphite/50 focus:placeholder-transparent
          focus:outline-none focus:ring-2 focus:ring-lavender-purple
          transition-all duration-200 resize-y
          ${error
                        ? 'border-red-500 focus:border-red-500 bg-red-50'
                        : 'border-thistle/50 focus:border-lavender-purple bg-white'
                    }
          ${className}
        `}
                {...props}
            />
        );
    }
);

Textarea.displayName = 'Textarea';
export default Textarea;
