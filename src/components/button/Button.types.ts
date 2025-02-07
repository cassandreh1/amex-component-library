// Each component would have interfaces which would help define the components expect config(props)
// Using typescript with implicitly let the developer know the expect value types for the props 

export interface ButtonProps {
    size: string,
    color: string,
    text: string,
    handleClick: ()=> {},
};
