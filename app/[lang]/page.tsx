import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/dictionaries";
import { hasLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col bg-bg text-ink">
      <Navigation locale={lang} dict={dict.nav} theme={dict.theme} />
      <main className="flex-1" id="main-content">
        <Hero dict={dict} />
        <About dict={dict} />
        <Skills dict={dict.skills} label={dict.nav.sections.skills} />
        <Projects dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer />
    </div>
  );
}
