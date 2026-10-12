# JiZhao Domain Model

## PhotoSession

A PhotoSession is the single source of truth for one user journey.

```ts
export type PhotoSource = "camera" | "upload";

export type PhotoSessionStatus =
  | "created"
  | "preview"
  | "processing"
  | "completed"
  | "failed";

export interface PhotoSession {
  id: string;
  country: string;
  source: PhotoSource;
  originalImageUrl?: string;
  processedImageUrl?: string;
  status: PhotoSessionStatus;
  validation?: PhotoValidation;
  createdAt: string;
}
```

## PhotoValidation

```ts
export interface PhotoValidation {
  faceDetected: boolean;
  qualityAcceptable: boolean;
  poseAcceptable: boolean;
  backgroundRepairable: boolean;
  blockingReasons: string[];
}
```

## ProcessingConfig

Internal only. Never rendered as a consumer form.

```ts
export interface ProcessingConfig {
  country: string;
  documentType: "identity_photo";
  widthMm?: number;
  heightMm?: number;
  backgroundMode: "auto";
  faceCentering: boolean;
  headRatioCheck: boolean;
  complianceMode: "strict";
}
```

## Architectural rule
Pages operate on PhotoSession.
Country-specific photo rules live in a rules engine, not in UI components.
