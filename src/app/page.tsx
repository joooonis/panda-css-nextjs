import { css, cx } from "../../styled-system/css";
import Button from "./components/button";

const flexCol = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default function Home() {
  console.log("flexCol class names", flexCol);
  return (
    <div className={cx(css({ gap: "4" }), flexCol)}>
      Hello 🐼!
      <Button>Click me</Button>
    </div>
  );
}
