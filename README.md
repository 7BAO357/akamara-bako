# Akamara

Static website for Imoye Akamara. Plain HTML, CSS, and JavaScript; no dependencies or build step.

## Structure

- `index.html`: home and directory
- `bokojo.html` and `bokojo-ontola.html`: dedicated practice pages
- `membership.html`: future membership portal landing page
- `ori.html`: Ori Log, Ori Alignment, Phase Two, Ori Flourish
- `asera.html`: spiritual hygiene, creative formatting, No Self Now
- `iwakiri-forge.html`: Iwakiri Forge
- `books.html`: books and writings directory
- `ebook.html`: separate e-book page for a future third-party purchase link
- `akode-and-aseda.html`: interactive e-book landing page
- `assets/`: shared styles, navigation script, favicon

## Preview

From the repository root, run `python3 -m http.server 8000`, then visit http://localhost:8000.

Edit HTML directly. Shared appearance and interactions live in `assets/style.css` and `assets/site.js`. All links are relative to support a GitHub Pages project URL.

## Publishing

The Pages workflow publishes only HTML and assets on pushes to `main`, or through its manual trigger. In GitHub **Settings → Pages**, choose **GitHub Actions** as the source. If initial automatic enablement is denied, enable Pages there and rerun the workflow.

Expected project URL: https://7bao357.github.io/akamara-bako/

Akamara.org is the intended domain. No CNAME is committed until ownership and DNS configuration are confirmed. To connect it, configure the custom domain in repository Pages settings and follow GitHub's DNS instructions.

## Content to supply

Practice descriptions, app destination URLs, membership provider URL, the separate e-book's title and seller URL, and Akode and Aseda reading access. Unavailable destinations are labeled “Coming soon”; this site does not implement accounts, checkout, or the apps themselves.
