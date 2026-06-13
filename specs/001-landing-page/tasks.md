# Tasks: Landing Page for OCA

**Input**: Design documents from `/specs/001-landing-page/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: End-to-end tests with Playwright, manual accessibility audits included

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project directory structure per implementation plan (src/components, src/layouts, src/pages, src/styles, public/images, public/icons, tests/e2e, tests/accessibility)
- [ ] T002 Initialize Astro project with TypeScript dependencies and configuration
- [ ] T003 [P] Configure ESLint and Prettier for code quality
- [ ] T004 [P] Install development dependencies (Playwright, axe DevTools, Sharp for image optimization)
- [ ] T005 [P] Configure TypeScript with strict type checking
- [ ] T006 Create basic astro.config.mjs with static site generation and image optimization settings

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T007 Setup base Layout component in src/layouts/Layout.astro with HTML structure and metadata injection
- [ ] T008 [P] Configure SEO metadata (title, description, Open Graph, Twitter cards) in Layout component
- [ ] T009 [P] Create global styles in src/styles/global.css with CSS variables and reset styles
- [ ] T010 Create sample hero image in public/images/hero.jpg for testing
- [ ] T011 Configure site URL and locale in astro.config.mjs for Portuguese content
- [ ] T012 Setup testing infrastructure (Playwright configuration, test scripts)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Landing Page (Priority: P1) 🎯 MVP

**Goal**: Implement a responsive, accessible landing page that displays OCA's mission with browser tab title "Oca"

**Independent Test**: Visit localhost:4321 and verify page loads with correct title "Oca", displays OCA content, works on mobile, and is accessible via keyboard navigation

### Tests for User Story 1 ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T013 [P] [US1] E2E test for page load in tests/e2e/landing-page.spec.ts (verify title "Oca", content displays)
- [ ] T014 [P] [US1] E2E test for mobile responsiveness in tests/e2e/landing-page.spec.ts (test on mobile viewport)
- [ ] T015 [P] [US1] Accessibility audit report in tests/accessibility/audit-report.md (manual keyboard navigation test)

### Implementation for User Story 1

**Components (independent - can be created in parallel)**:

- [ ] T016 [P] [US1] Create Header component in src/components/Header.astro with navigation links
- [ ] T017 [P] [US1] Create Footer component in src/components/Footer.astro with OCA links
- [ ] T018 [P] [US1] Create HeroSection component in src/components/HeroSection.astro with main messaging and CTA
- [ ] T019 [P] [US1] Create AboutSection component in src/components/AboutSection.astro with OCA mission content

**Page Assembly (sequential dependencies)**:

- [ ] T020 [US1] Create index page in src/pages/index.astro that uses Layout and all section components
- [ ] T021 [US1] Configure browser tab title "Oca" in src/pages/index.astro
- [ ] T022 [US1] Add hero image optimization using Astro Image component in HeroSection.astro
- [ ] T023 [US1] Implement responsive design with mobile-first CSS in component styles

**Accessibility & Performance**:

- [ ] T024 [US1] Ensure semantic HTML structure (header, main, section, footer) throughout components
- [ ] T025 [US1] Verify color contrast ratios ≥ 4.5:1 in all text content
- [ ] T026 [US1] Add keyboard navigation support for interactive elements
- [ ] T027 [US1] Implement lazy-loading for below-the-fold images
- [ ] T028 [US1] Add Portuguese (pt-BR) language attributes and content

**Quality Assurance**:

- [ ] T029 [US1] Run E2E tests to verify all acceptance scenarios pass
- [ ] T030 [US1] Conduct manual accessibility audit with screen reader and keyboard
- [ ] T031 [US1] Run Lighthouse performance audit and verify Core Web Vitals targets (<2s LCP, <100ms FID, <0.1 CLS)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect the landing page

- [ ] T032 [P] Create social sharing image in public/images/oca-social.jpg (1200x630px optimized)
- [ ] T033 [P] Add error page handling (404, 500) with user-friendly messages
- [ ] T034 Optimize all images for performance (WebP format with JPEG fallback, appropriate sizes)
- [ ] T035 [P] Add favicon files in public/icons/ directory
- [ ] T036 Update README.md with project overview and quickstart instructions
- [ ] T037 [P] Create deployment documentation in docs/deployment.md
- [ ] T038 [P] Set up CI/CD pipeline for automated testing and deployment

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3)**: All depend on Foundational phase completion
  - User Story 1 (P1): Can start after Foundational - No dependencies on other stories
- **Polish (Phase 4)**: Depends on User Story 1 completion

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Tests (T013, T014, T015) MUST be written and FAIL before implementation
- Component tasks (T016-T019) can run in parallel
- Page assembly tasks (T020-T023) depend on components being created
- Accessibility and performance tasks (T024-T028) can run in parallel after page assembly
- Quality assurance tasks (T029-T031) depend on all implementation tasks

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Tests for User Story 1 marked [P] can run in parallel
- Component tasks for User Story 1 marked [P] can run in parallel (T016-T019)
- Polish phase tasks marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together:
Task: "E2E test for page load in tests/e2e/landing-page.spec.ts"
Task: "E2E test for mobile responsiveness in tests/e2e/landing-page.spec.ts"
Task: "Accessibility audit report in tests/accessibility/audit-report.md"

# Launch all components for User Story 1 together:
Task: "Create Header component in src/components/Header.astro"
Task: "Create Footer component in src/components/Footer.astro"
Task: "Create HeroSection component in src/components/HeroSection.astro"
Task: "Create AboutSection component in src/components/AboutSection.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add Polish improvements → Test → Deploy/Demo
4. Each phase adds value without breaking previous phases

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All accessibility requirements must be met per OCA constitution
- Performance targets must be achieved (<2s LCP on 3G)
