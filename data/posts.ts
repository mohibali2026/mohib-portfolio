export const posts = [
  {
    slug: "designing-for-clarity",
    date: "Jun 2026",
    title: "Designing for Clarity",
    excerpt:
      "How intentional visual choices reduce cognitive load and build lasting user trust.",
    content: `Clarity in design is not an accident — it's a decision made at every step of the process. When I began my career, I thought good design meant making things look beautiful. Over time I learned that beauty without clarity is noise.

The most powerful design decisions are often subtractive. Removing a button, simplifying a flow, cutting a label that explains itself — these acts of restraint create space for users to think and act without friction.

Cognitive load is the silent killer of digital products. Every time a user has to stop and figure out what to do next, you've lost them a little. The goal isn't to make things obvious — it's to make them inevitable.

Visual hierarchy is your primary tool. Size, weight, contrast, and spacing communicate importance without a single word. When I design a screen, I ask: if a user glanced at this for two seconds, would they know what to do?

Color carries meaning. Consistent use of color builds trust and reduces decision fatigue. I keep my palettes minimal — one action color, one neutral, one alert. Everything else is whitespace.

Typography is tone. A poorly chosen typeface undermines even the strongest layout. I gravitate toward geometric grotesks for UI because they are legible, neutral, and modern without being trendy.

Clarity also lives in the language. Microcopy — button labels, empty states, error messages — shapes the emotional texture of a product. "Something went wrong" is cold. "We couldn't save your work — try again?" is human.

The final test: show your design to someone who has never seen it. Watch where their eyes go. Watch where they hesitate. That moment of hesitation is your next design problem.

Design with intention. Remove everything that doesn't earn its place. What remains is clarity.`,
  },
  {
    slug: "photography-and-product-design",
    date: "May 2026",
    title: "The Role of Photography in Product Design",
    excerpt:
      "Why visual thinking cultivated through photography makes better product designers.",
    content: `Before I was a product designer, I was a photographer. I spent years studying light, composition, and the decisive moment — the fraction of a second when all elements of a scene align. That training shaped everything about how I design.

Photography teaches you to see. Not just to look, but to truly see — to notice the way light falls on a surface, how negative space gives a subject room to breathe, how a slightly different angle changes the entire emotional register of an image.

These instincts translate directly to interface design. White space is negative space. Visual weight is the equivalent of exposure. The user's eye, like a camera's lens, can only focus on one thing at a time.

The decisive moment in photography has a product design parallel: the moment a user makes a decision. Every screen is a frame. Every interaction is a composition. You are directing attention, creating tension, then resolving it.

Photography also taught me empathy. When you photograph a person, you must understand them — their comfort, their story, their context — or the image feels hollow. The same is true of users. A product built without understanding its users is a portrait taken without permission.

Constraint fuels creativity. Working with a single prime lens — no zoom — forces you to move, to get creative with what you have. In product design, shipping with constraints (time, resources, scope) produces more focused, honest work than open-ended exploration.

I founded Bibin Photography Magazine partly to maintain this connection — to keep one foot in the world of pure visual craft, so it never leaves my work as a designer.

If you want to become a better product designer, pick up a camera. Not to document, but to see.`,
  },
  {
    slug: "building-design-systems",
    date: "Apr 2026",
    title: "Building Design Systems That Last",
    excerpt:
      "Lessons from creating Aseel's component library — what works and what doesn't.",
    content: `I've built design systems from scratch twice. The first time was painful. The second time was better — not because I was smarter, but because I understood what a design system is actually for.

A design system is not a UI kit. It is a shared language. The moment you think of it as a library of components, you've already started building the wrong thing.

At Aseel, we needed a system that could serve three different product teams — e-commerce, institutional, and creative — while maintaining visual coherence. That meant the system had to be opinionated enough to ensure consistency, yet flexible enough to avoid becoming a cage.

The first principle I follow: tokens before components. Before you design a single button, define your spacing scale, your color palette, your type ramp. Tokens are the atomic decisions that make everything else composable. Without them, you'll spend months arguing about whether a spacing value should be 12px or 14px.

The second principle: build from real use cases. Don't design components in isolation. Find the three most common patterns in your product and build the system to serve them first. A card component you've never seen in production is a gamble. A card component built from ten real screens is a foundation.

The third principle: document the why, not just the what. "Use this button for primary actions" is useful. "We chose this button because secondary actions were being ignored in testing" is invaluable. Context is the difference between a system people follow and one they work around.

The hardest part isn't the design. It's the maintenance. Treat your design system like a product, with owners, versioning, and a changelog. Otherwise it will drift — and a drifted system is worse than no system at all.`,
  },
  {
    slug: "product-thinking-for-designers",
    date: "Mar 2026",
    title: "Product Thinking for Designers",
    excerpt:
      "How shifting from 'how it looks' to 'how it works' changed the way I approach every project.",
    content: `There is a version of design that is purely aesthetic — making things look good. It's satisfying work. But it's not enough.

Product thinking is what separates designers who ship value from designers who ship screens. It means asking: what problem are we solving, for whom, and how will we know if we've solved it?

The transition for me came at Aseel, when I moved from being a designer to a product lead. Suddenly I was responsible not just for how things looked, but for why they existed. Every feature needed justification. Every screen needed a metric.

The most important question in product design is "why." Why does this user need this feature? Why does this flow work the way it does? Why are users dropping off at this step? Why do we believe this solution will work?

Designers who can't answer "why" are decoration. Designers who obsess over "why" become indispensable.

The second shift is from deliverables to outcomes. A designer who measures success by the quality of their Figma file is optimizing for the wrong thing. The Figma file is a means to an end. The end is a user who accomplishes something they couldn't before.

This doesn't mean aesthetics don't matter. They matter enormously. But they serve the outcome — they don't replace it.

If you are a designer who wants to grow, start sitting in on product meetings. Read user research reports. Look at analytics. Understand the business model. The more you understand why the product exists, the better your design decisions will be.

Design is problem solving. Product thinking is how you make sure you're solving the right problem.`,
  },
  {
    slug: "humanitarian-ux",
    date: "Feb 2026",
    title: "Designing for Humanitarian Contexts",
    excerpt:
      "What designing aid distribution platforms taught me about empathy-first UX.",
    content: `Designing consumer products teaches you about convenience. Designing humanitarian platforms teaches you about stakes.

When I worked on Aseel Institution — a platform for distributing aid to Afghan families through NGOs and institutions — I had to rethink almost everything I knew about UX.

The users weren't browsing. They were making decisions about who received food, medicine, and support. Every interaction had real-world consequences. A confusing form didn't just frustrate a user — it could delay aid to someone who needed it.

The first lesson: assume nothing about your user's context. In consumer design, I assumed fast internet, modern devices, and a user with time to explore. In humanitarian design, I assumed slow connections, older devices, high stress, and limited time. Every design choice had to pass a stress test.

Simplicity isn't a preference in these contexts — it's an ethical requirement. The fewer decisions a user has to make, the fewer errors they make. Error states aren't just UX failures — they erode trust in the system itself.

The second lesson: trust the field workers. The people distributing aid know things no user research session can capture. Building in feedback mechanisms, and actually acting on that feedback, made the platform better in ways I never anticipated.

The third lesson: design for failure gracefully. Power cuts happen. Connections drop. The system has to handle incomplete states without losing data and without panicking the user.

Designing for humanitarian contexts stripped my work down to essentials. It reminded me that design is not decoration — it is infrastructure. And infrastructure, when it fails, has consequences.`,
  },
  {
    slug: "from-kabul-to-istanbul",
    date: "Jan 2026",
    title: "From Kabul to Istanbul: A Designer's Journey",
    excerpt:
      "How moving across cultures shaped my perspective on design and communication.",
    content: `I grew up in Kabul and built the early years of my career there. Then I moved to Istanbul. Both cities are layered — ancient and modern, traditional and restless — and living between them has shaped how I see design in ways I'm still discovering.

Design is never culturally neutral. Every layout, every color choice, every typographic decision carries assumptions about the reader, the reader's culture, and what the reader values. When you've lived in only one context, those assumptions are invisible. When you've moved between contexts, they become visible — sometimes uncomfortably so.

In Kabul, I learned to design for users navigating significant uncertainty — political, economic, infrastructural. That shaped my instinct for resilience: designs that work even when conditions aren't ideal.

In Istanbul, I encountered a different kind of complexity: a city where tradition and modernity coexist in constant negotiation. The design culture here is sophisticated, internationally connected, and deeply interested in identity. It pushed me to be more intentional about what I was communicating and to whom.

Moving also changed my relationship to language. I work in multiple languages — Dari, English, Turkish — and each one shapes how I think. Short, declarative English microcopy doesn't always translate cleanly. Designing for multilingual products requires building in space for language: literally, in the layout, and figuratively, in the logic.

The most valuable thing about moving is being a beginner again. You lose your assumptions. You have to observe, ask, and revise. That is also exactly how good design works.

I don't know where I'll go next. But I know the journey will show up in the work.`,
  },
  {
    slug: "bibin-story",
    date: "Dec 2025",
    title: "Why I Started Bibin Magazine",
    excerpt:
      "The story behind founding a photography magazine to celebrate Afghan visual culture.",
    content: `Bibin is a Dari word. It means "look" — not just glance, but truly observe. That's the invitation the magazine makes to its readers.

I started Bibin Photography Magazine in 2025 because I believed there was a gap — a space for Afghan photographers to share their work with the world on their own terms, without the filter of crisis journalism or the flattening lens of foreign media.

Afghan photographers are extraordinary. They document extraordinary things. But the dominant images of Afghanistan in global media are images of suffering and conflict, taken by outsiders for outside audiences. Bibin was founded to offer something different: Afghan visual culture, as seen by Afghans.

The process of building the magazine was a design project in itself. Every layout decision was a statement about what we valued: unhurried reading, generous image space, serious typography. I wanted the physical magazine to feel like an object worth keeping — not disposable, but archival.

Curating the work was the most demanding part. I spent months in conversation with photographers, understanding their processes, their influences, their intentions. The magazine isn't a portfolio dump — it's an editorial argument about what contemporary Afghan photography is and can be.

The response surprised me. Copies reached readers in Kabul, Istanbul, London, Toronto, and Nairobi. People sent messages saying they had never seen Afghanistan depicted this way — with beauty, with interiority, with complexity.

That was the point. That is still the point.

Bibin continues. If you are an Afghan photographer and want to be considered for a future issue, I'd love to hear from you.`,
  },
];
