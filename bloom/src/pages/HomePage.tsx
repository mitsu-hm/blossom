import { Hero } from "@/components/Hero"
import { Portfolio } from "@/components/Portfolio"
import { Atelier } from "@/components/Atelier"
import { Collections } from "@/components/Collections"
import { Experience } from "@/components/Experience"

export function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Atelier />
      <Collections />
      <Experience />
    </>
  )
}
