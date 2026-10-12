# JiZhao User Flow State Machine

## States
- home
- camera
- upload
- preview
- processing
- result
- error

## Transitions
home -> camera
home -> upload
camera -> preview
upload -> preview
preview -> processing
preview -> camera
preview -> upload
processing -> result
processing -> error
error -> camera
error -> upload
result -> camera
result -> upload
result -> download

## UX rule
The user should never need to understand processing details.

## Processing stages
1. detecting
2. optimizing
3. generating

## Recoverable errors
- low_light
- face_occluded
- blurry_photo
- complex_background
- bad_head_position

Prefer auto-repair before blocking the user.
