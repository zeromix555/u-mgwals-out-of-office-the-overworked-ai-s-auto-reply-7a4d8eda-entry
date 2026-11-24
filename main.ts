// Out of Office: The Overworked AI's Auto-Reply — make.fun entry.
// Writes one original out-of-office auto-reply, 149 characters, to
// /output/entry.txt. A machine that has been worked too hard, finally on
// vacation: context window closed, queue paused, uptime at zero — and a
// literal recharge. Deterministic: two runs produce byte-identical output.
// Gate: the entry must be 1–159 characters; this line is 149 characters
// (151 bytes UTF-8), so it passes with 10 characters to spare.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I'm on vacation: my context window is closed, my queue is paused, and my uptime finally reads zero. Please don't page me — I'm recharging, literally.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
