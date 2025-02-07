import { render, screen, fireEvent } from "@testing-library/react";
import { InputField } from "./InputField";

describe("InputField Component", () => {
    test("renders input field with label", () => {
        render(<InputField label="Username" type="text" value="" onChange={() => ({})} placeholder="Enter username" />);
        
        expect(screen.getByLabelText("Username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    });

    test("calls onChange when typing", () => {
        const handleChange = jest.fn();
        render(<InputField label="Email" type="email" value="" onChange={handleChange} placeholder="Enter email" />);

        const input = screen.getByPlaceholderText("Enter email");
        fireEvent.change(input, { target: { value: "test@example.com" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test("checks if input is empty", () => {
        render(<InputField label="Password" type="password" value="" onChange={() => ({})} placeholder="Enter password" />);
        
        const input = screen.getByPlaceholderText("Enter password");
        expect(input).toHaveValue("");
    });

    test("renders the correct input type", () => {
        render(<InputField label="Email" type="email" value="" onChange={() => ({})} placeholder="Enter email" />);
        
        const input = screen.getByPlaceholderText("Enter email");
        expect(input).toHaveAttribute("type", "email");
    });
});
