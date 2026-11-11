# Practical Assignment Guide — P1 to P13

This guide explains what each practical demonstrates, where to find the work, and how to verify it. The main portfolio is the shared project; the newspaper and comparison pages are separate focused demonstrations.

## Module 1 — Terminal, Git & GitHub

### P1 — Project folder and terminal navigation

**Goal:** Create a local project directory and move around it using the terminal.

Run these commands one at a time:

```bash
pwd                         # print the current directory
mkdir WEB-DEV-LAB           # create the project folder
cd WEB-DEV-LAB              # enter the folder
mkdir images practicals     # create subfolders
ls                          # list files and folders
cd practicals               # move into practicals
pwd                         # confirm the current location
cd ..                       # move one level up
```

**Verify:** `pwd` ends in `WEB-DEV-LAB` after `cd ..`; `ls` shows the folders. If you cloned this repository, do not create a second nested folder: run `cd WEB-DEV-LAB` from its parent instead. Capture your own terminal screenshot if required by your instructor.

### P2 — Portfolio repository and initial commit

**Goal:** Track the project in Git and publish it to GitHub. This assignment repository already exists as `mourya-2007/WEB-DEV-LAB`; the portfolio files are committed here.

```bash
git init
git status
git add .
git commit -m "Add initial portfolio structure"
git branch -M main
git remote add origin https://github.com/mourya-2007/WEB-DEV-LAB.git
git push -u origin main
```

If you cloned the existing repository, skip `git init`, `git remote add origin` and the initial push; use `git pull` to sync instead. Check the GitHub repository page to confirm the files are present.

### P3 — Feature-branch Git workflow

**Goal:** Make a change on a separate branch and merge it through a pull request.

```bash
git switch -c feature/portfolio-improvements
# edit a file, then:
git status
git add .
git commit -m "Improve portfolio layout"
git push -u origin feature/portfolio-improvements
```

Open a pull request from `feature/portfolio-improvements` into `main`, review the diff, then merge it. This repository uses a feature branch and pull request for the submitted project changes.

### P4 — GitHub README and version tags

**Goal:** Explain the project and mark meaningful versions. The root `README.md` documents setup, pages and P1–P13 coverage.

```bash
git tag -a v1.0.0 -m "HTML and CSS foundations"
git push origin v1.0.0
git tag -a v1.1.0 -m "Responsive portfolio"
git push origin v1.1.0
git tag -a v2.0.0 -m "Advanced CSS layouts"
git push origin v2.0.0
git tag                         # list local tags
```

Create tags after the corresponding work is committed. If you create tags from a different commit, make sure the version description matches that commit.

## Module 2 — HTML & CSS foundations

### P5 — Semantic bio page

**Goal:** Use meaningful HTML elements rather than generic containers for everything. The About, Skills and Contact areas in `index.html` use `header`, `nav`, `main`, `section`, `article` and `footer`. Headings follow a logical hierarchy and the page declares its language and viewport.

**Verify:** Inspect the page source and confirm there is one main content region, labelled navigation and section headings.

### P6 — Full portfolio page structure in semantic HTML

**Goal:** Build a complete page with introduction, About, Skills, Projects and Contact content. See `index.html`.

**Verify:** Use the navbar links to jump to each section. Confirm all sections have meaningful headings and project cards use `article` elements.

### P7 — Design tokens and typography system in CSS

**Goal:** Centralize reusable colours, fonts and spacing. See the `:root` custom properties at the top of `style.css`, plus the heading and body typography rules.

**Verify:** Change `--accent` or `--space` in `:root` and observe the design update consistently.

### P8 — Sticky navbar and card overlay using CSS positioning

**Goal:** Keep navigation visible while scrolling and layer decorative card elements. See `.site-header { position: sticky; top: 0; }`, `.hero-art`, `.art-circle`, `.art-card` and `.art-stamp` in `style.css`.

**Verify:** Scroll the portfolio and observe the navbar remain at the top; inspect the hero artwork for overlapping positioned elements.

### P9 — Responsive navbar and card grid using Flexbox

**Goal:** Adapt navigation and card layout for smaller screens. The navigation uses Flexbox and a JavaScript toggle; the projects use a responsive grid that becomes one column on small screens. See `style.css` and `script.js`.

**Verify:** Resize the browser below 760px, open the menu and check the project cards stack vertically.

## Module 3 — CSS layout systems

### P10 — Portfolio header and footer with advanced Flexbox

**Goal:** Align logo, navigation and footer content with Flexbox. See `.navbar`, `.nav-links`, `.footer-inner` and `.contact-inner` in `style.css`.

**Verify:** Inspect these elements in browser DevTools and confirm their computed display is flex.

### P11 — Newspaper-style three-column layout with CSS Grid

**Goal:** Create an editorial page with a lead story, side stories and notes. Open `newspaper.html`; the `.news-grid` rule in `newspaper.css` defines three columns.

**Verify:** At desktop width, observe three columns. Below 760px, the layout changes to one column.

### P12 — Portfolio projects grid with advanced CSS Grid

**Goal:** Arrange project cards in a structured grid and allow a featured card to span two columns. See `.project-grid` and `.project-feature` in `style.css`.

**Verify:** At desktop width the featured project spans the full row; at mobile width cards stack.

### P13 — Choosing between Flexbox and Grid for a shared layout

**Goal:** Explain and demonstrate the strengths of each layout system. Open `layout-comparison.html`. The navigation example uses Flexbox; the project tiles use CSS Grid.

**Decision rule:** Flexbox is usually best for one-dimensional alignment (a row or column). Grid is usually best when rows and columns need coordinated control. They can be combined in one interface.

## Final submission checklist

- [ ] Open `index.html`, `newspaper.html` and `layout-comparison.html` in a browser.
- [ ] Test the portfolio at desktop and mobile widths.
- [ ] Replace fictional name, email, skills and project details before presenting it as your own.
- [ ] Run the P1 terminal commands locally and capture evidence if requested.
- [ ] Run the P4 tag commands locally if your instructor expects tags visible in GitHub.
- [ ] Add screenshots of your own results if your instructor requires practical evidence.
