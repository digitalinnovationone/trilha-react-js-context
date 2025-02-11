import { InputHTMLAttributes, ReactNode } from "react";
import { StyledInput, InputContainer } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input: React.FC<Props> = ({ icon, ...props }) => {
  return (
    <InputContainer>
      {icon}
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default Input;
