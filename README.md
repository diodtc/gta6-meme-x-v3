# gta6-meme-x-v3

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/diodtc/gta6-meme-x-v3/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/diodtc/gta6-meme-x-v3/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's Post a GTA 6 meme on X bounty ($500 in USDC, top 50 paid): a Leonida Rent-A-Car vehicle return receipt, contract V to VI. Picked up in Los Santos on Sep 17, 2013, returned in Vice City on Nov 19, 2026 — 13 years late. One-way drop Los Santos to Vice City $313, late fee for 13 years overdue $1,300, promised back "Fall 2025" and "May 2026" $26, unlisted drivers Jason and Lucia $137, cleaning for an alligator on the back seat $250. Total due: $2,026. Paid by my AI agent with a bounty payout it earned on make.fun.

The picture is the user's own receipt meme, used as supplied. `meme.png` is the picture that was posted. `POST.json` names the X post carrying the meme:

```json
{"url": "https://x.com/Nentoczc/status/2124862056935682242"}
```

Posted from the public account [@Nentoczc](https://x.com/Nentoczc), with make.fun (link) and `@makefunai` plus the account's play code in its text.

`main.ts` (Node 22, standard library only) hands the post's address to the grader: it copies `POST.json` into `/output`, where the gate reads it. The house then reads the post from X — its first picture and its text — and the judge scores that.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=gmn2mnxf&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
