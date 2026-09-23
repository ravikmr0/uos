# UOS Official Website Redesign

## Scope
- Replace the placeholder with a responsive, accessible government-education website for Uttarakhand Open School.
- Build shared official branding, utility links, desktop/mobile navigation, Student Section quick links, and a consistent footer.
- Create dedicated pages for Home, About Us, Courses, Affiliation, Fee Structure, Schools, AI Centers, Study Material, About State, Board Profile, Calendar, Contact, Login, Sitemap, Notices, Downloads, eligibility, admit card, enrollment card, results, and online database.
- Keep secondary informational pages concise but complete enough that every navigation and student-service link works.

## Page Experience
- Homepage: mission-led banner, October 2026 admissions notice, date-sheet action, four education programme cards, certificate-validity information, and vocational training callout.
- About: mission, audiences served, board relationship, curriculum approach, and goals.
- Courses: clear eligibility and progression details for Class X and Class XII.
- Board Profile: accessible accordion-style governing structure.
- Notices and Downloads: scannable dated listings with downloadable PDF-style links.
- Contact: address, map placeholder, and working client-side enquiry confirmation.
- Login: clearly labelled placeholder student portal without real authentication.

## Visual Direction
- Deep navy, saffron, white, and restrained neutral surfaces using semantic design tokens.
- Clean sans-serif typography, square-to-subtle corners, crisp borders, generous spacing, and high contrast.
- Mobile-first layout with a compact menu and persistent access to student services.
- Subtle motion only for navigation and interactive feedback, respecting reduced-motion preferences.

## Technical Notes
- Use TanStack Router links and one route file per shareable page.
- Add unique metadata to every content route.
- Use reusable layout/page components and semantic HTML with keyboard-accessible controls.
- No backend or persistent data is required; login and form submission remain clearly presented prototypes.
- Verify the main navigation, homepage calls-to-action, board accordion, enquiry form, and mobile layout in the live preview.
