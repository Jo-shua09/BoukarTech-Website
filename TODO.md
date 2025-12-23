# TODO: Make Home Page Responsive

## Overview

Ensure all home page sections (Hero, VisionMission, Services, ImageMosaic, FAQ, CTA) are fully responsive. The lowest font size should be at least `text-base` (16px). Check and update layouts, font sizes, and responsive classes.

## Sections to Update

- [x] Hero: Already responsive, confirm font sizes.
- [x] VisionMission: Fix fixed widths and layout for mobile.
- [x] Services: Change `text-sm` to `text-base` in descriptions.
- [x] ImageMosaic: Adjust layout for smaller screens.
- [x] FAQ: Ensure responsive layout.
- [x] CTA: Already responsive, confirm.

## Implementation Steps

1. Update Services.tsx: Replace `text-sm` with `text-base`.
2. Update VisionMission.tsx: Add responsive classes for widths and flex layout.
3. Update ImageMosaic.tsx: Make layout responsive with breakpoints.
4. Update FAQ.tsx: Make layout responsive.
5. Test responsiveness across devices.
6. Final verification of font sizes.

## Notes

- Use Tailwind responsive prefixes (sm:, md:, lg:) for breakpoints.
- Ensure no font sizes below `text-base`.
- Focus on mobile-first design.
