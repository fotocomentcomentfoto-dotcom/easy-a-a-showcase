import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Star, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-wide.jpg";
import logo from "@/assets/logo.jpg";
import fotoMelhor from "@/assets/foto-melhor.jpg";
import fotoColagem from "@/assets/foto-colagem.jpg";
import bowl from "@/assets/produto-bowl.png";
import copo from "@/assets/produto-copo.png";
import especial from "@/assets/produto-especial.png";

const WHATS = "https://wa.me/5511956095544";
const MAPS = "https://www.google.com/maps/search/?api=1&query=R.+Gabus+Mendes,+29+-+República,+São+Paulo+-+SP,+01043-010";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Easy Açaí — O açaí perfeito na República, SP" },
      { name: "description", content: "Açaí cremoso e refrescante na R. Gabus Mendes, 29 - República, São Paulo. Aberto todos os dias até 2h. Peça pelo WhatsApp." },
      { property: "og:title", content: "Easy Açaí — O açaí perfeito na República, SP" },
      { property: "og:description", content: "Açaí cremoso e refrescante, aberto todos os dias das 16h às 2h. Peça pelo WhatsApp (11) 95609-5544." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const produtos = [
  { img: copo, nome: "Açaí no Copo", desc: "Cremoso, com leite condensado, morango e granola." },
  { img: bowl, nome: "Açaí na Tigela", desc: "Frutas frescas, banana, kiwi e o complemento que quiser." },
  { img: especial, nome: "Açaí Especial", desc: "Camadas de açaí, creme e frutas para matar a vontade." },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* Tela inicial: só a imagem */}
      <section className="w-full bg-primary">
        <img src={hero} alt="Easy Açaí — Hoje seu açaí vai como?" className="block aspect-video w-full object-cover" />
      </section>

      <header className="sticky top-0 z-10 bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Easy Açaí" className="h-11 w-11 rounded-full" />
            <span className="font-display text-xl font-bold">Easy Açaí</span>
          </div>
          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#cardapio">Cardápio</a><a href="#sobre">Sobre</a><a href="#horarios">Horários</a><a href="#contato">Contato</a>
          </nav>
          <a href={WHATS} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">Pedir agora</a>
        </div>
      </header>

      {/* Destaques */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-3">
          {[["Cremoso", "Textura perfeita em cada colherada"], ["Saboroso", "Ingredientes selecionados"], ["Refrescante", "Ideal pra recarregar as energias"]].map(([t, d]) => (
            <div key={t} className="border-l-2 border-accent pl-4">
              <p className="font-display text-lg font-bold">{t}</p>
              <p className="text-sm opacity-80">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cardápio */}
      <section id="cardapio" className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-display text-primary">Nosso cardápio</p>
        <h2 className="font-display text-4xl font-bold">Favoritos da casa</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {produtos.map((p) => (
            <article key={p.nome} className="overflow-hidden rounded-3xl bg-card shadow-lg">
              <div className="bg-primary"><img src={p.img} alt={p.nome} className="aspect-square w-full object-cover" loading="lazy" /></div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold">{p.nome}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <a href={WHATS} target="_blank" rel="noreferrer" className="mt-4 inline-block font-bold text-primary">Pedir pelo WhatsApp →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sobre + foto */}
      <section id="sobre" className="grid md:grid-cols-2">
        <img src={fotoMelhor} alt="O melhor açaí" className="h-full w-full object-cover" loading="lazy" />
        <div className="flex flex-col justify-center bg-accent p-10 text-accent-foreground md:p-16">
          <p className="font-display">Sobre nós</p>
          <h2 className="font-display text-4xl font-bold">O açaí perfeito pra qualquer momento</h2>
          <p className="mt-4 leading-relaxed">
            Com sabor marcante e refrescante, feito com ingredientes selecionados, cada colherada é uma experiência deliciosa.
            Ideal pra matar a vontade, recarregar as energias ou curtir com os amigos. Nosso açaí é sempre a escolha certa.
          </p>
          <p className="mt-4 font-display text-2xl font-bold">Pede aí e se apaixona!</p>
          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            <span className="ml-2 font-bold">5,0 (7 avaliações)</span>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-primary">
        <img src={fotoColagem} alt="Açaí cremoso Easy Açaí" className="mx-auto block max-h-[900px] w-full max-w-4xl object-contain" loading="lazy" />
      </section>

      {/* Horários */}
      <section id="horarios" className="mx-auto max-w-4xl px-6 py-20">
        <div className="flex items-center gap-3"><Clock className="h-7 w-7 text-primary" /><h2 className="font-display text-4xl font-bold">Horário de funcionamento</h2></div>
        <p className="mt-2 text-muted-foreground">Aberto todos os dias</p>
        <div className="mt-8 divide-y divide-border rounded-3xl bg-card p-6 shadow">
          {dias.map((d) => (
            <div key={d} className="flex justify-between py-3">
              <span className="font-semibold">{d}</span>
              <span className="text-right">16:00 – 23:59<br />00:00 – 02:00</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / contato */}
      <footer id="contato" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Easy Açaí" className="h-16 w-16 rounded-full" />
            <div><p className="font-display text-2xl font-bold">Easy Açaí</p><p className="text-sm opacity-80">Loja de açaí</p></div>
          </div>
          <div className="space-y-3 text-sm">
            <a href={MAPS} target="_blank" rel="noreferrer" className="flex gap-2"><MapPin className="h-5 w-5 shrink-0 text-accent" />R. Gabus Mendes, 29 - República, São Paulo - SP, 01043-010</a>
            <a href="tel:+5511956095544" className="flex gap-2"><Phone className="h-5 w-5 text-accent" />(11) 95609-5544</a>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a href={WHATS} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-foreground"><MessageCircle className="h-5 w-5" />Pedir pelo WhatsApp</a>
            <a href={MAPS} target="_blank" rel="noreferrer" className="text-sm underline">Ver rotas no mapa</a>
          </div>
        </div>
        <p className="pb-6 text-center text-xs opacity-70">© 2026 Easy Açaí. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
