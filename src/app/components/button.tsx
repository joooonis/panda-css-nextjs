import { css } from "@/styled-system/css";
import { FC } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const style = css({
  color: "white",
  bg: "tomato",
  p: "2",
  borderRadius: "md",
  border: "none",
  cursor: "pointer",
  _hover: {
    opacity: 0.8,
  },
});

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={style}>{children}</button>;
};

export default Button;
