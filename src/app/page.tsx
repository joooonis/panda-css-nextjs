"use client";

import { flex as flexBase } from "@/styled-system/patterns";
import { useState } from "react";

const flex = (isBlack: boolean) =>
  flexBase({
    direction: "column",
    justify: "center",
    align: "center",
    bg: "primary.300",
    color: isBlack ? "black" : "white",
  });

export default function Home() {
  const [isBlack, setIsBlack] = useState(false);
  return (
    <div onClick={() => setIsBlack(!isBlack)} className={flex(isBlack)}>
      Hello 🐼!
    </div>
  );
}
