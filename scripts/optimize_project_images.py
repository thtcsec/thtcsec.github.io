"""Smart WebP compress for portfolio project screenshots (no commit)."""
from __future__ import annotations

import io
import json
import shutil
from pathlib import Path

from PIL import Image

ROOT_SDN = Path(r"D:\tu_projects\sdn-its-resilience-ai")
PORT = Path(r"D:\tu_projects\Portfolio\public\images\project_image")
SDN_OUT = PORT / "sdn_its"
SEC_OUT = PORT / "securecoating"
BAK = PORT / "_bak_pre_webp_20260830"


def save_smart(
    src: Path,
    dst: Path,
    *,
    max_w: int = 1600,
    q_hi: int = 86,
    q_lo: int = 78,
) -> dict:
    im = Image.open(src)
    has_alpha = im.mode in ("RGBA", "LA") or (
        im.mode == "P" and "transparency" in im.info
    )
    if has_alpha:
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, (11, 13, 18))
        bg.paste(im, mask=im.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")

    w, h = im.size
    if w > max_w:
        nh = int(round(h * (max_w / w)))
        im = im.resize((max_w, nh), Image.Resampling.LANCZOS)

    candidates: list[tuple[int, bytes]] = []
    for q in (q_hi, max(q_lo, q_hi - 4), q_lo):
        buf = io.BytesIO()
        im.save(buf, format="WEBP", quality=q, method=6, exact=False)
        candidates.append((q, buf.getvalue()))

    chosen = None
    for q, data in candidates:
        if len(data) <= 220_000:
            chosen = (q, data)
            break
    if chosen is None:
        chosen = min(candidates, key=lambda x: abs(len(x[1]) - 180_000))
        best_q = candidates[0]
        if len(chosen[1]) > len(best_q[1]) * 0.92:
            chosen = best_q

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_bytes(chosen[1])
    return {
        "src": str(src),
        "dst": str(dst),
        "in_kb": round(src.stat().st_size / 1024, 1),
        "out_kb": round(len(chosen[1]) / 1024, 1),
        "q": chosen[0],
        "size": f"{im.size[0]}x{im.size[1]}",
        "ratio": round(len(chosen[1]) / max(src.stat().st_size, 1), 3),
    }


def main() -> None:
    BAK.mkdir(exist_ok=True)
    for folder in (SDN_OUT, SEC_OUT):
        bak_dir = BAK / folder.name
        bak_dir.mkdir(parents=True, exist_ok=True)
        for f in folder.glob("*.png"):
            shutil.copy2(f, bak_dir / f.name)

    report: dict[str, list] = {"sdn_its": [], "securecoating": []}

    sdn_jobs = [
        (SDN_OUT / "sdn_its.png", SDN_OUT / "sdn_its.webp", 1100, 88, 82),
        (
            ROOT_SDN / "assets/images/slides/slide_01_console_overview.png",
            SDN_OUT / "sdn_its-1.webp",
            1600,
            86,
            80,
        ),
        (
            ROOT_SDN / "assets/images/slides/slide_02_live_cameras.png",
            SDN_OUT / "sdn_its-2.webp",
            1600,
            86,
            80,
        ),
        (
            ROOT_SDN / "assets/images/slides/slide_03_fusion_rush_preserve.png",
            SDN_OUT / "sdn_its-3.webp",
            1600,
            86,
            80,
        ),
        (
            ROOT_SDN / "assets/images/slides/slide_04_ddos_containment.png",
            SDN_OUT / "sdn_its-4.webp",
            1600,
            86,
            80,
        ),
        (
            ROOT_SDN / "assets/images/slides/slide_05_re_chart_ddos.png",
            SDN_OUT / "sdn_its-5.webp",
            1600,
            86,
            80,
        ),
        (
            ROOT_SDN / "assets/images/report/fig03_settings_drawer.png",
            SDN_OUT / "sdn_its-6.webp",
            1600,
            86,
            80,
        ),
        (
            ROOT_SDN / "assets/images/report/compressed/architecture.jpg",
            SDN_OUT / "sdn_its-7.webp",
            1400,
            85,
            80,
        ),
    ]

    for src, dst, max_w, q_hi, q_lo in sdn_jobs:
        if not src.exists():
            print("MISSING", src)
            continue
        r = save_smart(src, dst, max_w=max_w, q_hi=q_hi, q_lo=q_lo)
        report["sdn_its"].append(r)
        print(
            f"SDN {dst.name:18s} {r['in_kb']:7.1f}KB -> {r['out_kb']:6.1f}KB  "
            f"q={r['q']}  {r['size']}"
        )

    for src in sorted(SEC_OUT.glob("securecoating-*.png")):
        dst = src.with_suffix(".webp")
        r = save_smart(src, dst, max_w=1600, q_hi=85, q_lo=78)
        report["securecoating"].append(r)
        print(
            f"SEC {dst.name:22s} {r['in_kb']:7.1f}KB -> {r['out_kb']:6.1f}KB  "
            f"q={r['q']}  {r['size']}"
        )

    for folder in (SDN_OUT, SEC_OUT):
        for f in list(folder.glob("*.png")):
            f.unlink()
            print("removed png", f.name)

    for key, rows in report.items():
        before = sum(x["in_kb"] for x in rows)
        after = sum(x["out_kb"] for x in rows)
        saved = before - after
        pct = 100 * (1 - after / max(before, 1))
        print(f"\n{key}: {before:.0f}KB -> {after:.0f}KB  saved {saved:.0f}KB ({pct:.0f}%)")

    (PORT / "_compress_report.json").write_text(
        json.dumps(report, indent=2), encoding="utf-8"
    )
    print("\nBackup:", BAK)
    print("Done")


if __name__ == "__main__":
    main()
