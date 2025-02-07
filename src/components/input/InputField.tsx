import { InputFieldProps } from "./InputField.types";

export function InputField({ label, type, value, onChange, placeholder }: InputFieldProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-medium">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
