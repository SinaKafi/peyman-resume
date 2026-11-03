# Build a Premium Executive Portfolio — Content-Driven & Unslopped

Act as a Senior Frontend Engineer, Creative Developer, UI/UX Designer, and Motion Designer.

Your task is to transform this repository into a premium, highly polished professional portfolio for:

**Mohammad Moghaddam — Administrative & Operations Manager**

The portfolio must communicate operational leadership, project management expertise, organizational development, procurement management, and business process improvement.

## 1. Source of Truth

Read `content/resume.md` before making any design or implementation decisions.

This file is the single source of truth for:

- Personal information
- Professional experience
- Employment dates
- Job titles
- Achievements
- Skills and competencies
- Education
- Certifications and training
- Contact information

Strict rules:

- Never invent experience, employers, achievements, statistics, certifications, or professional capabilities.
- Do not fabricate performance metrics or business results.
- Improve wording when necessary, but preserve factual meaning.
- Prioritize achievements and measurable operational contributions over generic job descriptions.
- Do not expose unnecessary personal information such as marital status or date of birth in the public portfolio unless explicitly requested.
- Keep all portfolio content consistent with the source resume.

## 2. Mandatory Unslop Skill Integration

You MUST use the existing Unslop skill available at:

`.claude/skills/unslop/SKILL.md`

Before making any design or implementation decisions:

1. Read the complete `.claude/skills/unslop/SKILL.md` file.
2. Follow its instructions, design principles, workflows, and quality criteria.
3. Apply its recommendations throughout the entire portfolio implementation.
4. Do not skip or replace the Unslop workflow with your own interpretation.

After completing the initial implementation:

1. Revisit the Unslop skill instructions.
2. Perform its recommended design review and refinement process.
3. Identify and eliminate generic AI-generated design patterns.
4. Refine typography, spacing, composition, visual hierarchy, interactions, and overall design quality.
5. Repeat the review until the portfolio meets the skill's quality standards.

**Important:** The Unslop skill is mandatory for this project, not an optional reference. Do not claim it was applied unless you actually read and followed its instructions.

## 3. Creative Direction

Create an editorial, premium executive portfolio.

The design should feel:

- Professional
- Confident
- Sophisticated
- Structured
- Minimal but expressive
- Corporate without feeling outdated
- Modern without looking like a generic SaaS landing page

The visual identity should communicate someone who understands how organizations operate, how projects move forward, and how business processes can be structured and improved.

### Avoid AI Design Clichés

Do not use:

- Generic purple/blue gradients.
- Random gradient backgrounds.
- Excessive glassmorphism.
- Floating decorative blobs.
- Unnecessary floating cards.
- Generic dashboard-style layouts.
- Excessive rounded containers.
- Arbitrary skill percentage bars.
- Fake client logos.
- Fake testimonials.
- Fake metrics.
- Stock illustrations that add no meaning.
- Repetitive card grids.
- Generic hero sections with oversized empty space.
- Unnecessary animations and scroll effects.

Every visual element must have a clear purpose.

## 4. Visual Design System

Develop a cohesive design system before implementing individual sections.

Focus on:

- Strong editorial typography.
- Carefully selected font families.
- A sophisticated and restrained color palette.
- Excellent contrast and readability.
- Precise spacing and alignment.
- Consistent grid systems.
- Elegant dividers and borders.
- Clear content hierarchy.
- Subtle but meaningful visual details.

Use typography and composition as the primary design elements rather than relying on decorative effects.

The result should resemble a custom-designed professional portfolio, not a downloaded template.

## 5. Information Architecture

Create a complete portfolio with the following sections.

### Hero

Introduce Mohammad Moghaddam with:

- Name
- Administrative & Operations Manager title
- A compelling positioning statement based on actual experience
- Primary contact action
- Email and phone links

Avoid generic phrases such as "I am passionate about innovation."

### Professional Overview

Present a concise overview of professional experience.

Highlight:

- Operational management
- Project planning and control
- Procurement and supply management
- Organizational development
- Process standardization
- Management reporting

### Professional Experience

Create a visually engaging and easy-to-navigate experience section.

Prioritize these organizations:

1. Arman Pandar Hasti
2. Parto Fanavar Sharif
3. Farazan Sazeh Darya
4. Milad Tower

Present earlier commercial roles more compactly.

Use a chronological timeline, editorial experience layout, or another thoughtful presentation.

For each major position:

- Display company name.
- Display job title.
- Display employment period.
- Highlight important achievements.
- Emphasize the operational impact of the work.
- Keep descriptions concise and readable.

Do not turn every achievement into a separate generic card.

### Selected Achievements

Create a dedicated section showcasing the most significant professional contributions.

Potential themes:

- Scrum-ban workflow implementation.
- Holding-wide performance evaluation framework.
- Management reporting redesign.
- Integrated procurement management.
- Project planning and control.
- Document control standardization.
- Contract and payroll administration.
- Warehouse management redesign.

Use meaningful visual storytelling where appropriate.

### Core Competencies

Organize competencies into logical professional categories:

- Operations Management
- Project Planning & Control
- Procurement & Supply Chain
- Organizational Performance
- Administrative Management
- HR & Personnel Administration
- Financial Administration
- Commercial Operations

Do not use artificial skill ratings or percentages.

### Tools & Methodologies

Show professional tools and methodologies:

- Microsoft Project
- Primavera
- Jira
- Trello
- Microsoft Office
- CRM Systems
- Agile
- Scrum
- Scrum-ban

Use a refined typographic or editorial presentation.

### Education & Training

Present academic background and professional training clearly.

### Contact

Create a professional closing section with:

- Email
- Phone
- Location

Use actual contact information from `content/resume.md`.

## 6. Content Architecture

Keep content maintainable and centralized.

Preferred approach:

- Use `content/resume.md` as the original content source.
- Create structured content modules when necessary.
- Avoid duplicating the same information across components.
- Keep presentation components separate from content definitions.
- Ensure future resume updates can be reflected easily.

Do not create unnecessary abstraction or overengineer the content system.

## 7. Technical Requirements

Before implementation, inspect the existing repository.

Identify:

- Framework and version.
- Existing dependencies.
- Project structure.
- Styling approach.
- Existing components.
- Available fonts and assets.
- Build and deployment configuration.

Implementation requirements:

- Reuse the existing technology stack.
- Follow established repository conventions.
- Avoid unnecessary dependency installation.
- Use semantic HTML.
- Ensure accessibility.
- Support keyboard navigation.
- Provide visible focus states.
- Maintain appropriate color contrast.
- Fully support desktop, tablet, and mobile.
- Respect `prefers-reduced-motion`.
- Optimize images and loading performance.
- Implement proper SEO metadata.
- Avoid layout shifts.
- Ensure all links and interactions work.
- Do not leave placeholder content or unfinished sections.

## 8. Responsive Experience

The website must be carefully designed for:

- Large desktop screens
- Standard laptops
- Tablets
- Mobile phones

Do not simply shrink the desktop layout.

Reconsider the layout, typography, navigation, spacing, and content presentation for smaller screens.

## 9. Motion & Interaction

Use purposeful motion to improve the experience.

Possible interactions:

- Subtle entrance transitions.
- Refined navigation behavior.
- Elegant experience timeline interactions.
- Subtle hover states.
- Smooth section transitions.

Avoid unnecessary animation.

All interactions must remain accessible and respect reduced-motion preferences.

## 10. Implementation Workflow

Follow this workflow in order:

1. Inspect the complete existing repository.
2. Read `content/resume.md`.
3. Inspect and read the installed Unslop instructions.
4. Analyze the professional positioning and strongest achievements.
5. Establish the visual direction and design system.
6. Implement the complete portfolio.
7. Verify desktop and mobile layouts.
8. Run linting and type checks if available.
9. Run the production build.
10. Fix all errors introduced by your implementation.
11. Run the Unslop review and refinement pass.
12. Remove remaining generic AI design patterns.
13. Review accessibility, SEO, performance, and functionality.
14. Provide a concise implementation report.

## 11. Final Quality Standard

The final result must look like a portfolio created by a senior creative developer for an experienced operations executive.

It should not look like:

- An AI-generated website.
- A generic resume template.
- A standard SaaS landing page.
- A collection of unrelated UI cards.

It should communicate professional credibility within the first few seconds.

**Important: Do not stop at planning, recommendations, or mockups. Implement the complete working portfolio directly in the existing repository.**
