import { center, flex } from "@/styled-system/patterns";

const flexCol = flex({
  direction: "column",
  justify: "center",
  align: "center",
  bg: "primary.300",
});

export default function Home() {
  return (
    <div className={flexCol}>
      Hello 🐼!
      <p
        className={center({
          bg: "primary.900",
          p: 36,
          m: 12,
          borderRadius: "xxl",
          color: "white",
          fontSize: 24,
        })}
      >
        Center
      </p>
    </div>
  );
}
