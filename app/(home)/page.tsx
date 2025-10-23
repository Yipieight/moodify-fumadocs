import Link from 'next/link';
import { ArrowRight, BookOpen, Music, Shield, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-fd-secondary px-3 py-1 text-xs font-medium text-fd-muted-foreground ring-1 ring-inset ring-fd-border">
            Moodify · Docs
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Música que se adapta a tu emoción
          </h1>
          <p className="mt-4 text-fd-muted-foreground">
            Explora la documentación de Moodify: arquitectura, guías y referencia de API.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/docs/introduccion"
              className="inline-flex items-center gap-2 rounded-md bg-fd-foreground px-4 py-2 font-medium text-fd-background hover:opacity-90"
            >
              <BookOpen className="size-4" />
              Ver Documentación
            </Link>
            <Link
              href="/docs/arquitectura/diagrama-arquitectura"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium hover:bg-fd-secondary"
            >
              Arquitectura
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Sparkles className="size-5" />}
            title="Detección Emocional"
            desc="face-api.js para analizar expresiones y estados de ánimo."
          />
          <Feature
            icon={<Music className="size-5" />}
            title="Recomendaciones"
            desc="Integración con Spotify para playlists personalizadas."
          />
          <Feature
            icon={<Shield className="size-5" />}
            title="Autenticación Segura"
            desc="NextAuth.js y mejores prácticas de seguridad."
          />
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-xl border bg-fd-secondary p-6 text-center sm:p-8">
          <h2 className="text-xl font-semibold">¿Listo para empezar?</h2>
          <p className="mt-2 text-fd-muted-foreground">
            Sigue la guía de inicio para configurar el proyecto en minutos.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/docs/guia-inicio/instalacion"
              className="inline-flex items-center gap-2 rounded-md bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground hover:opacity-90"
            >
              Empezar ahora
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border p-5">
      <div className="mb-3 inline-flex items-center justify-center rounded-md bg-fd-secondary p-2 text-fd-muted-foreground">
        {icon}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-fd-muted-foreground">{desc}</p>
    </div>
  );
}
