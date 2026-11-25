Blind-test candidates for the drill bed (2026-09-15). NOT in ../index.json, so
the app's per-drill pick never uses them; the lab's Test mode forces them via
`setAudio {track: "candidates/<name>"}`. Pre-screened with tools/bed_check.py:
c2 deep house 124 (swing ±2.4 dB, 10.9 onsets/s), c4 hypnotic minimal 126
(±0.5, 13.8), c5 lo-fi house 122 (±4.3, 1.8), c6 percussive minimal 120
(±0.1, 13.7). Controls in the test: ../bed-2 (Carl's current favourite family)
and no music.

2026-09-16: n1–n5 are lo-fi siblings from tools/bed_make.mjs (levelled .m4a beside
the raw .mp3), on Carl's round 1 QA page with bed-5..12. n2 passes bed_check
outright (±0.2 dB, 2.5 onsets/s); n1/n3/n4/n5 fail on onsets (7.5–8.7/s) but
so does bed-1, so his ear decides. n6 dropped (±6.8 dB after levelling).
