import { InputFieldProps } from "./InputField.types";
import "./InputField.css";

export function InputField({ label, type, value, onChange, placeholder }: InputFieldProps) {
    return (
        <div className="margin-bottom">
            <label className="">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input-style"
            />
        </div>
    );
}
