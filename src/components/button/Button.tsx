import "./Button.css";
import { ButtonProps } from  "./Button.types";

export function Button({size, color, text, handleClick}: ButtonProps) {
  let classNames = [ size, color ];
    return (
      <button 
        className={classNames.join(' ')}
        type="button"
        onClick={handleClick}>
          {text}
      </button>
    );
  }