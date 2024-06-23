"use client";

import { flex as flexBase } from "@/styled-system/patterns";

const flex = (diection: "row" | "col") =>
  flexBase({
    direction: diection,
    justify: "center",
    align: "center",
    bg: "primary.300",
  });

export default function Home() {
  return <div className={flex("col")}>Hello 🐼!</div>;
}
