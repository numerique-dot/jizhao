# Frontend Boundaries

## Recommended stack
- Next.js
- TypeScript
- Tailwind CSS
- Native browser camera APIs
- Minimal state management

## Proposed structure
```
app/
  page.tsx
  camera/page.tsx
  upload/page.tsx
  preview/page.tsx
  processing/page.tsx
  result/page.tsx
  help/page.tsx
  privacy/page.tsx
  legal/page.tsx

components/
  Header.tsx
  CountrySelector.tsx
  ActionCard.tsx
  CameraCapture.tsx
  PhotoUploader.tsx
  PhotoPreview.tsx
  ProcessingStatus.tsx
  ResultCard.tsx
  ErrorNotice.tsx

domain/
  photo-session.ts
  photo-validation.ts

services/
  photo-processing.ts
  camera.ts

config/
  photo-rules/
    fr.ts
    cn.ts
    gb.ts
    us.ts
```

## Boundary rules
- UI components never own country compliance rules.
- AI provider code never lives inside page components.
- Camera capture is isolated from photo processing.
- Result rendering consumes a completed PhotoSession.
- Mock processing is acceptable until the real API is connected.

## Mobile first
The first viewport should make both primary actions discoverable:
1. 立即拍摄
2. 上传照片功能
