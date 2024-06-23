import { css } from "@/styled-system/css";
import { vstack } from "@/styled-system/patterns";
import { FC } from "react";

interface TextInputProps {
  label: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput: FC<TextInputProps> = ({ label, value, onChange }) => (
  <div
    className={vstack({
      gap: 2,
      alignItems: "start",
    })}
  >
    <label>{label}</label>
    <input
      className={css({
        p: 2,
        borderRadius: "md",
        borderColor: "gray.300",
        bg: "#fff",
        _focus: {
          outline: "none",
        },
      })}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextInput;
