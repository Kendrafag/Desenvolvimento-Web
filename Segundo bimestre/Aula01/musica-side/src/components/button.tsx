import "../styles/button.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({ text, secondary, onClick, disabled, type = "button" }: IButtonProps) {
    return (
        <button
            type={type}
            className={secondary ? "btn-secondary" : "btn-primary"}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
