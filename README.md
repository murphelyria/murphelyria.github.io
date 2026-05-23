# murphelyria.com

Personal portfolio site for Murph Elyria — composer, sound designer, voice actor.

---

## File Structure

```
index.html          Main portfolio page (Hero, Music, Voice, Contact)
blog.html           Blog post listing
blog/
  hello-world.html  Post template / existing post
  ive-graduated.html  Existing post
assets/
  css/style.css     All styles
  js/main.js        All JavaScript
  images/           Your image assets (copy from original repo)
CNAME               Custom domain config
404.html            Custom 404 page
```

---

## Updating the Site

### Edit the homepage

Open `index.html` in any text editor. All sections are clearly labelled with HTML comments.

### Add a new music album

Find the `<!-- Music Section -->` block in `index.html`. Copy an existing `.music-card` block and update:
- `href` — Bandcamp album URL
- `src` on the `<img>` — path to cover art in `assets/images/MusicCoverArt/`
- `alt` — descriptive text for accessibility
- `.music-card-title` — album name
- `.music-card-desc` — short description

Add the image to `assets/images/MusicCoverArt/`.

### Add a new blog post

1. Duplicate `blog/hello-world.html` and rename it (use lowercase, hyphens, no spaces — e.g. `blog/new-project.html`).
2. Update the `<title>`, `<meta name="description">`, date, category, and heading.
3. Replace the body paragraphs with your content.
4. Open `blog.html` and add a new `.blog-item` block at the top of the list (newest first). Update the number, date, title, and excerpt.

### Update contact/social links

Search `index.html` for `contact-socials` and update the `href` values.

### Add a new VO reel

Find the `<!-- Voice Over Section -->` in `index.html`. Replace the YouTube embed `src` URL with the new video's embed URL:
```
https://www.youtube.com/embed/YOUR_VIDEO_ID
```
