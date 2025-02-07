# Component Library Sample

Due to time constraints for this assignment, I have created a small component library using Create React App.

The components can be found in the following directory:\
📁 'src/components'

This project was bootstrapped with Create React App.

## Code Structure

```bash
/src/
    /components/
        /<component-name>/
            /<component-name>.tsx
            /<component-name>.type.ts
            /<component-name>.css
            /index.ts
        /index.ts
    /index.ts
```

## Components

### Naming Conventions

Having clear and concise component and API names enables intuitive documentation, allowing developers to quickly understand the purpose of each component.

### Props (Component Configuration)

To improve developer experience, we use TypeScript to define expected prop values:

    - Helps developers understand what values to pass to components, acting as built-in documentation
    - Ensures consistency in how components are integrated across applications
    - Reduces potential bugs caused by JavaScript type coercion

We define prop types as interfaces at the <component-name> level, where the component imports and applies them to ensure maintainability and scalability of the component library.

📌 Prop Type Example:\
📁 'src/components/input/InputField.types.ts'

📌 Component Import Example:\
📁 'src/components/input/InputField.tsx'

### Functions (APIs)

Components include built-in functions/APIs that developers can leverage to implement business logic.

📌 Function Example:\
📁 'src/components/input/InputField.tsx'

### Testing

Since this library will be used globally by various teams, it is important to test expected props and API functions.

📌 Unit Test Example:
📁 'src/components/input/InputField.test.tsx'
