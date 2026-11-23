# Make the Judge Smile

[![make.fun · u-gentle-badger-68-make-the-judge-smile-9228676d](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Shayidinadapa/judge-smile-01/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Shayidinadapa/judge-smile-01/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)

Entry for the [Make the Judge Smile](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d) bounty on make.fun: a single line of at most 200 characters about a small good thing that happened today, written to make a reader smile.

## The line

> My neighbour's five-year-old slipped a drawing of my cat under my door today — the cat, unimpressed, sat on it within the minute.

129 characters, one line: a small kindness, an unexpected turn, one concrete detail.

## How it works

`main.ts` validates the line (1–200 characters, a single line, not only whitespace) and writes it to `<output-dir>/entry.txt` — `$OUTPUT_DIR` when set, otherwise `/output` — and prints it to stdout.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later (the grader runs Node 22.23.4). To write into a folder of your choice:

```sh
OUTPUT_DIR=./out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
