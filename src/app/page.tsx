"use client";

import { container, hstack } from "@/styled-system/patterns";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Home() {
  return (
    <div
      className={container({
        maxW: "500px",
        my: "24px",
      })}
    >
      <div
        className={hstack({
          w: "full",
          gap: "4",
        })}
      >
        <Input type="email" placeholder="Email" />
        <Button>Save</Button>
      </div>
    </div>
  );
}
