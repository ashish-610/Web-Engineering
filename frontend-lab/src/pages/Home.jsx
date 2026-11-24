
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card.jsx';

const features = [
  {
    title: 'Responsive layouts',
    description: 'Compose flexible interfaces with responsive Flexbox and Grid utilities.',
  },
  {
    title: 'Reusable primitives',
    description: 'Build consistent pages from simple, accessible buttons and cards.',
  },
  {
    title: 'Theme tokens',
    description: 'Switch between light and dark palettes using shared design tokens.',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="flex flex-col items-center gap-8 rounded-card border border-line bg-surface p-6 md:flex-row md:p-10">
        <div className="flex-1 space-y-4">
          <p className="font-semibold text-primary">Frontend engineering playground</p>
          <h1 className="text-4xl font-bold tracking-tight text-fg md:text-5xl">
            Build clear, responsive interfaces.
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Explore a small design system powered by Tailwind CSS, responsive layouts, and
            light and dark theme tokens.
          </p>
          <Link
            to="/users"
            className="inline-flex rounded-card bg-primary px-4 py-2 font-medium text-primary-contrast no-underline hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Explore users
          </Link>
        </div>
        <Card className="w-full max-w-sm space-y-3">
          <p className="text-sm font-semibold text-muted">DESIGN SYSTEM</p>
          <div className="flex items-center gap-3">
            <span className="size-10 rounded-full bg-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold text-fg">Shared tokens</p>
              <p className="text-sm text-muted">One palette, every page</p>
            </div>
          </div>
          <div className="h-2 rounded-full bg-bg">
            <div className="h-2 w-3/4 rounded-full bg-primary" />
          </div>
        </Card>
      </section>

      <section aria-labelledby="features-heading" className="space-y-5">
        <div>
          <h2 id="features-heading" className="text-2xl font-bold text-fg">
            Made for modern interfaces
          </h2>
          <p className="mt-2 text-muted">A few building blocks used throughout this lab.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4">
          {features.map((feature) => (
            <Card key={feature.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-fg">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
