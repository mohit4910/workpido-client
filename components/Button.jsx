import { Button as ChakraButton } from "@chakra-ui/react";

function Button({
  onClick,
  label,
  type,
  icon,
  className,
  disabled,
  btnType,
  isDisabled,
  hide,
}) {
  let propStyle = "";
  switch (type) {
    case "primary":
      propStyle = "bg-primary-P50 text-white-P50 hover:bg-blue-700";
      break;

    case "secondary":
      propStyle = "btn-secondary text-white-P50 hover:bg-blue-700";
      break;

    default:
      break;
  }

  if (disabled) {
    propStyle += " italic";
  }
  if (isDisabled) {
    propStyle += " opacity-50";
  }

  return (
    !hide && (
      <ChakraButton
        disabled={disabled}
        onClick={onClick}
        type={btnType}
        className={className}
      >
        {icon && <p>{icon}</p>}
        {label}
        {disabled && " . . ."}
      </ChakraButton>
    )
  );
}

export default Button;
