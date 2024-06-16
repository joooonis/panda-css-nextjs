import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        color: "white",
        background: "tomato",
      })}
    >
      Hello 🐼!
    </div>
  );
}
