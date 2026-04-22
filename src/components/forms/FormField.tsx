import { ReactNode } from 'react';

interface FormFieldProps {
    label: string;
    error?: string;
    required?: boolean;
    children: ReactNode;
    htmlFor?: string;
}

export default function FormField({
    label,
    error,
    required,
    children,
    htmlFor
}: FormFieldProps) {
    return (
        <div className="space-y-2">
            <label
                htmlFor={htmlFor}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {children}
            {error && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                    <span>⚠</span>
                    {error}
                </p>
            )}
        </div>
    );
}
