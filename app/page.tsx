export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to BrainOn
        </h1>
        <p className="text-center text-lg mb-8">
          Phase 1: Foundation Scaffold - Status Page
        </p>
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4">System Status</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Next.js 14 with TypeScript</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Tailwind CSS configured</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>ESLint & Prettier setup</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Jest & React Testing Library</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Security headers configured</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Supabase client ready</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
