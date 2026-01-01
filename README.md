# BrainOn
A web app for any academic learners providing an online immersive study experience for personal, interactive group discussions and tutoring sessions - for the modern-day scholar!

## Can this repo host a full-stack app with Supabase, payments, monitoring, Vercel, and video?
Short answer: yes, the codebase can be extended to a production-grade full stack. You provide credentials, service selections, and domain setup. I will build the Next.js front end and wire in Supabase, payments, monitoring, video, and Vercel configs. You retain control of accounts and keys; I cannot purchase domains or generate live API keys.

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
4) Chosen services:
   - Supabase: project URL plus anon key (and service role key if server-side tasks are needed).
   - Payments: provider (e.g., Stripe) plus products/plans.
   - Monitoring: provider (e.g., Sentry) and desired signals.
   - Video: provider (e.g., LiveKit/Daily/Jitsi) and room/recording requirements.
   - Messaging (optional): email/SMS provider if needed.
5) Deployment target (Vercel) and custom domain details; note if edge/functions are preferred.
6) Security/compliance expectations (e.g., audit logs, PII handling, rate limits).
7) UI/brand constraints and any must-have integrations.

Example prompt starter:
“Build a tutoring marketplace for STEM students. Roles: student, tutor, admin. Payments via Stripe (products: single session $50, monthly pass $200). Monitoring with Sentry. Video with Daily rooms (up to 10 participants, recordings on). Supabase schemas for users, sessions, payouts, reviews; RLS for tenant isolation. Deploy on Vercel to study.example.com. Provide env var list and webhook endpoints; assume I will supply all keys and domain/DNS.”
