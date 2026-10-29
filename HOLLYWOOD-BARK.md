# Hollywood Bark landing page

The live entry document is `main_files/index.html`. It was adapted from the original index-2 template, which has been removed from the latest repository version. Other demo pages are not part of this landing page. No build or package installation is required.

## Preview and deploy

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory main_files
```

Open the server's root path. Deploy `main_files` as a static site with `index.html` as its entry document. Direct `file://` navigation is blocked by the cloud browser's administrator policy; use HTTP for the verified workflow.

## Files and design

- `main_files/index.html`: one-page English content, pricing, booking and policies. The latest owner-approved corrections take precedence over `website-copy-draft.pdf`.
- `main_files/assets/css/hollywood-bark.css`: responsive layout, navigation, focus styles and reduced-motion support.
- `main_files/assets/css/hollywood-brand.css`: scoped blue/celeste palette using brand blue `#1663B4`; includes decorated cards, buttons, accordions, loading animation, footer and scroll-to-top indicator. Source photographs retain their original colors.
- `main_files/assets/js/hollywood-bark.js`: confirmed phone number in one `contact` object, mobile menu, active section, accessible animated accordions, carousel controls, scroll reveals and branded scroll progress.
- `main_files/assets/img/paw-blue.svg`: generic blue paw favicon, not the official business logo.
- `main_files/assets/css/hollywood-fonts.css` and `main_files/assets/fonts/hollywood-bark/`: original Anybody and DynaPuff fonts with their SIL Open Font Licenses, from the official google/fonts repository.

Original carousel, template classes, decorations, hover effects and vendor scripts are retained. The unrelated demo content is not included in the landing page.

## Current business information

- Location: San Antonio, TX. Hollywood Park is mentioned only for its residents' special discount; its amount is not published. The regular additional-dog boarding price remains $45/night.
- Saturday handoffs: 11:00 AM–2:00 PM.
- General cancellations: free up to 48 hours before drop-off; within 48 hours, 50% of the reservation.
- Holiday cancellations: payments are non-refundable for cancellations within 72 hours of drop-off. Holiday weekends start with Friday drop-offs; no Saturday/Sunday handoffs; Monday holiday handoffs only 4:00–6:00 PM. Closed Christmas Day and New Year's Day. Rates and listed holiday windows remain available under pricing.
- Confirmed phone: +1 (281) 908-9671. SMS and Instagram DM are available for returning clients; the free initial meet & greet is for new clients.
- Pet CPR & First Aid wording and the 10% military/first responder discount remain as requested by the owner. The owner plans to complete the CPR course before launch.

## Remaining assets

The black tree/dog/cat logo is now displayed in the header and footer. `main_files/assets/img/hollywood-bark-logo.png` is a transparent image prepared with an image-editing model from the owner-supplied flyer reference. It is an adaptation of that reference, not the original vector/master artwork. Replace it with the original logo file when available for exact brand fidelity. The orange template icon remains removed. The generic blue paw favicon is separate from the business logo.

Real Wendy/pack photos and permission-approved client quotes will be supplied later. Existing template photographs remain; no fictitious testimonials were added. Public placeholder notes have been removed. The review-count claim comes from the supplied business copy.

## Validation

Chromium/Playwright checks at 1440, 1024, 768, 390 and 360 px cover the updated business copy, cancellation and holiday policies, menu, booking links, SMS/Instagram destinations, accordions, carousel pause, reduced motion, branded colors and lack of horizontal overflow. Keyboard accordion behavior is checked separately. No page JavaScript errors, failed requests or HTTP errors were observed. External booking submission and account ownership are not tested.
