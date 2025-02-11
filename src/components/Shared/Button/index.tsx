import { PropsWithChildren, ButtonHTMLAttributes, ReactNode, FC } from "react";
import { StyledButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: "primary" | "link" | "icon";
}

const Button: FC<PropsWithChildren<Props>> = ({
  variant = "primary",
  icon,
  children,
  ...props
}) => {
  return (
    <StyledButton $variant={variant} $hasIcon={!!icon} {...props}>
      {icon}
      {children}
    </StyledButton>
  );
};

export default Button;
