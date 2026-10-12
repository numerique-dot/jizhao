# JiZhao Product Architecture v1

## Product promise
JiZhao is a zero-settings AI photo ID product for ordinary users.

User promise: take or upload one photo; JiZhao handles the rest.

## Product principles
1. One visible decision at a time.
2. Mobile-first.
3. No technical parameters in the consumer flow.
4. AI complexity stays behind the interface.
5. No account required before first successful result.
6. Country rules are configuration, not UI.
7. Every screen must make the next action obvious.

## Core flow
Country -> Source -> Preview -> Processing -> Result

### Country
Default: France.
Visible only as a light selector, not a settings page.

### Source
Primary action: 立即拍摄
Secondary action: 上传照片功能

### Preview
User only confirms whether to use the photo.
No crop box, background selector, DPI, or size controls.

### Processing
Three user-facing stages:
- AI 检测中
- AI 优化中
- 正在生成合规证件照

### Result
Primary action: 下载证件照
Secondary actions: 重新拍摄 / 重新上传

## Information architecture
- /
- /camera
- /upload
- /preview
- /processing
- /result
- /history (phase 2)
- /help
- /privacy
- /legal

## Consumer UI must never expose
- DPI
- crop coordinates
- face ratio
- background algorithm
- compliance thresholds
- model/API names
- raw validation scores
- internal JSON

## Phase 1 scope
Build only the conversion-critical loop:
Home -> Camera/Upload -> Preview -> Processing -> Result

Do not add dashboard, analytics cards, workspaces, projects, or admin UI.
