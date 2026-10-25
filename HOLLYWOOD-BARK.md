# Hollywood Bark landing page

The landing page is `main_files/index-2.html`, adapted directly from that template. The other demo pages are unchanged and are not part of the landing page. No build or package installation is required.

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory main_files
```

Open the server's `/index-2.html` path in your local browser, or open `main_files/index-2.html` directly. To deploy, serve `main_files` as static files and configure the hosting service to use `index-2.html` as its entry document. The original `index.html` is still a demo; it was intentionally not replaced.

## Files and design

- `main_files/index-2.html`: English one-page content, navigation, pricing, booking and policies from `website-copy-draft.pdf`.
- `main_files/assets/css/hollywood-bark.css`: responsive adaptations, sticky navigation, accessible focus styles and reduced-motion support.
- `main_files/assets/js/hollywood-bark.js`: centralized draft phone number, menu, active section, accessible animated accordions, slideshow pause and scroll reveals.
- `main_files/assets/css/hollywood-fonts.css` and `main_files/assets/fonts/hollywood-bark/`: local copies of the original Anybody and DynaPuff variable fonts and their SIL Open Font Licenses, from the official google/fonts repository.
- `main_files/assets/css/style.css`: only the two Google Fonts imports were replaced with the local font stylesheet. All original style rules remain intact.

The index-2 hero layout, Owl carousel, dog-focused slide artwork, animated paw/shape decorations, package cards, pet-icon tiles, provide cards, accordion styling, footer, button hovers and scroll-to-top component are reused. The unrelated shop, adoption, newsletter, search and demonstration content is removed from this page. Original vendor CSS/JS files are retained; the unused slider_input script is no longer loaded because its demo controls were removed.

## Confirm before publication

- Confirm the draft phone number, +1 (281) 908-9671, or replace it in the single `contact` object in `hollywood-bark.js`. The page labels it as awaiting confirmation.
- Supply the additional-dog boarding rate for Hollywood Park neighbors. This rate is intentionally not invented.
- Confirm the general cancellation policy. The suggested refund schedule in the PDF is not published as a final policy.
- Clarify holiday availability/handoffs: the PDF lists holiday-rate windows and closures on Christmas Day, New Year's Day and federal holiday weekends. Both are disclosed; visitors are asked to confirm arrangements with Wendy.
- Replace illustrative template photos with authentic Wendy/pack/home photographs when available. The illustration captions must be updated at that time. No personal portrait is presented as an authenticated photo of Wendy.
- Add only verified client quotes with permission. No sample testimonials or invented review identities are published. The 100+ five-star Rover review claim is reproduced from the supplied PDF; no Rover profile URL was supplied.

## Validation

Chromium via Playwright was used at 1440, 1024, 768, 390 and 360 px widths to check the page, local resource loading, carousel initialization, pause control, navigation menu, booking link destinations, expanded/collapsed accordions and horizontal overflow. Reduced-motion mode was checked separately. No page JavaScript errors, failed network requests or HTTP errors were observed in these runs. Tests do not submit a booking or verify ownership/availability of external accounts. The Google Calendar booking destination and Instagram handle are taken from the PDF.

Direct `file://` navigation could not be exercised in this cloud browser because it is blocked by its administrator policy. Use the local HTTP server for the verified workflow.
