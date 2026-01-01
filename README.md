# BrainOn
A web app for any academic learners providing an online immersive study experience for personal, interactive group discussions and tutoring sessions - for the modern-day scholar!

## Can this repo host a full-stack app with Supabase, payments, monitoring, Vercel, and video?
Short answer: yes, the codebase can be extended to a production-grade full stack, but I need your credentials, choices, and domain setup to do it. I can write the Next.js (14/TS) front end, wire Supabase auth/database, integrate a payment SDK (e.g., Stripe), hook an APM/monitoring SDK (e.g., Sentry), add a video SDK (e.g., LiveKit/Daily/Jitsi), and produce deployment-ready configs for Vercel with your custom domain. I cannot create or manage cloud accounts, purchase domains, or generate live API keys; you provide those secrets and service choices, and I’ll plug them in.

### Pros (what I can do here)
- Ship production-quality Next.js/React code with Supabase already available in the stack.
- Add SDK-based integrations for payments, monitoring, and video conferencing with environment-driven configuration.
- Define schemas, migrations, and client calls for Supabase; add role-based access patterns and tests.
- Produce Vercel-ready config, env var lists, and deployment notes tailored to your domain.

### Constraints (what I need from you)
- All third-party service accounts, API keys, webhooks, and domain/DNS changes must come from you.
- I cannot run external provisioning or purchase anything; I can only add code/config and describe the steps.
- Clear product scope is required: user roles, flows, data model, pricing plans, and compliance needs (e.g., GDPR/FERPA).

## How to prompt me for a production-ready build
Give a single prompt that includes:
1) Target industry and core use case.
2) Required user roles and their key journeys.
3) Data model outline and any access rules.
4) Chosen services: Supabase project URL/key, payment provider (e.g., Stripe) + products/plans, monitoring (e.g., Sentry), video provider (e.g., LiveKit/Daily/Jitsi) + room requirements, email/SMS provider if needed.
5) Deployment target (Vercel) and custom domain details; note if edge/functions are preferred.
6) Security/compliance expectations (e.g., audit logs, PII handling, rate limits).
7) UI/brand constraints and any must-have integrations.

Example prompt starter:
“Build a tutoring marketplace for STEM students. Roles: student, tutor, admin. Payments via Stripe (products: single session $50, monthly pass $200). Monitoring with Sentry. Video with Daily rooms (up to 10 participants, recordings on). Supabase schemas for users, sessions, payouts, reviews; RLS for tenant isolation. Deploy on Vercel to study.example.com. Provide env var list and webhook endpoints; assume I will supply all keys and domain/DNS.”
