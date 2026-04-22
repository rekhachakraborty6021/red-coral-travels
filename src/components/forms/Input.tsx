import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, className = '', ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={`
          w-full px-4 py-3 rounded-lg border
          text-base text-graphite
          placeholder:text-graphite/50
          focus:outline-none focus:ring-2 focus:ring-lavender-purple
          transition-all duration-200
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

Input.displayName = 'Input';
export default Input;
