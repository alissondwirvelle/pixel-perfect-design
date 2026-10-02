import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bone,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Facebook,
  HeartPulse,
  Home,
  Instagram,
  Mail,
  MapPin,
  PawPrint,
  Phone,
  Play,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Syringe,
  Twitter,
  X,
} from "lucide-react";
import heroImage from "@/assets/pet-hero.jpg";
import aboutImage from "@/assets/pet-about.jpg";
import offerImage from "@/assets/pet-offer.jpg";
import testimonialImage from "@/assets/pet-testimonial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pet Shop — Tudo para o seu melhor amigo" },
      { name: "description", content: "Produtos, cuidados e serviços especializados para deixar seu pet mais feliz e saudável." },
      { property: "og:title", content: "Pet Shop — Tudo para o seu melhor amigo" },
      { property: "og:description", content: "Produtos, cuidados e serviços especializados para o seu pet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Home, title: "Hospedagem", text: "Ambiente seguro, confortável e monitorado para seu pet." },
  { icon: Bone, title: "Alimentação", text: "Cardápio equilibrado e adaptado às necessidades do seu amigo." },
  { icon: Scissors, title: "Banho e tosa", text: "Higiene completa com cuidado, carinho e produtos especiais." },
  { icon: PawPrint, title: "Adestramento", text: "Aprendizado positivo para uma convivência ainda melhor." },
  { icon: Stethoscope, title: "Exercícios", text: "Atividades divertidas para manter corpo e mente saudáveis." },
  { icon: ShieldCheck, title: "Tratamentos", text: "Acompanhamento atento e profissionais sempre preparados." },
];

const products = [
  { name: "Ração Natural", detail: "Frango & arroz", price: "R$ 119,90", tone: "product-bag-one" },
  { name: "Ração Premium", detail: "Carne & vegetais", price: "R$ 139,90", tone: "product-bag-two" },
  { name: "Mix Orgânico", detail: "Cães adultos", price: "R$ 129,90", tone: "product-bag-three" },
  { name: "Receita Leve", detail: "Todas as raças", price: "R$ 99,90", tone: "product-bag-four" },
];

const plans = [
  { name: "Básico", subtitle: "O essencial", price: "49", featured: false, features: [true, true, false, false] },
  { name: "Standard", subtitle: "O mais escolhido", price: "99", featured: true, features: [true, true, true, false] },
  { name: "Estendido", subtitle: "Cuidado completo", price: "149", featured: false, features: [true, true, true, true] },
];

const team = [
  { name: "Ana Martins", role: "Veterinária", crop: "team-one" },
  { name: "Marina Costa", role: "Especialista em banho", crop: "team-two" },
  { name: "Paulo Freitas", role: "Adestrador", crop: "team-three" },
  { name: "Luiza Alves", role: "Cuidadora", crop: "team-four" },
];

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="section-title">
      <span>{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="utility-bar page-shell">
          <div><Clock3 aria-hidden="true" /><span><b>Horário</b>Seg–Sáb, 8h às 19h</span></div>
          <div><Mail aria-hidden="true" /><span><b>Fale conosco</b>oi@petshop.com</span></div>
          <div><Phone aria-hidden="true" /><span><b>Telefone</b>(11) 3456-7890</span></div>
        </div>
        <div className="nav-bar">
          <div className="page-shell nav-inner">
            <a className="brand" href="#inicio" aria-label="Pet Shop, início"><PawPrint aria-hidden="true" /><strong>MIMO PET</strong></a>
            <nav className="main-nav" aria-label="Navegação principal">
              <a href="#inicio">Início</a>
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#produtos">Produtos</a>
              <a href="#planos">Planos <ChevronDown aria-hidden="true" /></a>
              <a className="nav-contact" href="#contato">Contato <ArrowRight aria-hidden="true" /></a>
            </nav>
            <details className="mobile-menu">
              <summary aria-label="Abrir menu"><span /><span /><span /></summary>
              <nav aria-label="Navegação móvel">
                <a href="#inicio">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a>
                <a href="#produtos">Produtos</a><a href="#planos">Planos</a><a href="#contato">Contato</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <section id="inicio" className="hero">
        <img src={heroImage} width={1920} height={900} alt="Cão bernês feliz em um parque" />
        <div className="hero-shade" />
        <div className="page-shell hero-content">
          <span>Bem-vindo ao</span>
          <h1>MIMO PET</h1>
          <h2>SEU PET MAIS FELIZ</h2>
          <p>Cuidado, carinho e tudo o que seu melhor amigo precisa para viver bem.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#produtos">Ver produtos</a>
            <a className="play-link" href="#sobre"><i><Play aria-hidden="true" /></i>Conheça a gente</a>
          </div>
        </div>
      </section>

      <section id="sobre" className="section page-shell about-grid">
        <div className="about-photo"><img src={aboutImage} loading="lazy" width={900} height={1100} alt="Dois cães felizes juntos no jardim" /></div>
        <div className="about-copy">
          <SectionTitle eyebrow="Sobre nós">Mantemos seu pet<br />feliz o tempo todo</SectionTitle>
          <h3>Amor de verdade em cada cuidado.</h3>
          <p>Somos apaixonados por animais e criamos um espaço completo para cuidar de cada fase da vida do seu companheiro.</p>
          <div className="note-box">
            <b>NOSSO COMPROMISSO</b>
            <p>Atendimento próximo, produtos selecionados e profissionais que entendem que cada pet é único. Aqui, saúde e diversão caminham juntas.</p>
          </div>
        </div>
      </section>

      <section id="servicos" className="section page-shell">
        <SectionTitle eyebrow="Serviços">Nossos excelentes<br />cuidados para pets</SectionTitle>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <Icon aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p><a href="#contato">Saiba mais <ArrowRight aria-hidden="true" /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="produtos" className="section page-shell products-section">
        <SectionTitle eyebrow="Produtos">Produtos para os<br />seus melhores amigos</SectionTitle>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className={`product-bag ${product.tone}`}><PawPrint aria-hidden="true" /><span>PET FOOD</span><small>PREMIUM</small></div>
              <h3>{product.name}</h3><p>{product.detail}</p><strong>{product.price}</strong>
            </article>
          ))}
        </div>
        <div className="slider-buttons"><button type="button" aria-label="Produtos anteriores"><ArrowLeft /></button><button type="button" aria-label="Próximos produtos"><ArrowRight /></button></div>
      </section>

      <section className="offer-banner">
        <img src={offerImage} loading="lazy" width={1920} height={720} alt="Cachorrinho brincando com uma bola no gramado" />
        <div className="offer-shade" />
        <div className="page-shell offer-content">
          <span>Oferta especial</span>
          <h2>ECONOMIZE 50% EM TODOS OS ITENS<br />NO SEU PRIMEIRO PEDIDO</h2>
          <p>Escolha os favoritos do seu pet e aproveite uma condição especial de boas-vindas.</p>
          <div><a className="light-button" href="#produtos">Comprar agora</a><a className="text-button" href="#contato">Saiba mais <ArrowRight /></a></div>
        </div>
      </section>

      <section id="planos" className="section page-shell pricing-section">
        <SectionTitle eyebrow="Planos">Preços competitivos<br />para serviços pet</SectionTitle>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={plan.featured ? "price-card featured" : "price-card"} key={plan.name}>
              <div className="plan-name"><h3>{plan.name}</h3><p>{plan.subtitle}</p></div>
              <div className="plan-price"><sup>R$</sup><b>{plan.price}</b><span>/mês</span></div>
              <ul>
                {["Banho e secagem", "Tosa higiênica", "Avaliação mensal", "Transporte gratuito"].map((feature, i) => <li key={feature}>{feature}{plan.features[i] ? <Check /> : <X />}</li>)}
              </ul>
              <a href="#contato">Escolher plano</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section page-shell team-section">
        <SectionTitle eyebrow="Nossa equipe">Profissionais qualificados<br />em cuidados pet</SectionTitle>
        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className={`team-portrait ${member.crop}`}><img src={aboutImage} loading="lazy" alt="" /></div>
              <h3>{member.name}</h3><p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <img src={testimonialImage} loading="lazy" width={1920} height={720} alt="Corgi correndo feliz em um parque" />
        <div className="page-shell testimonial-inner">
          <div className="testimonial-card">
            <div className="client-avatar"><PawPrint aria-hidden="true" /></div>
            <p>“O cuidado da equipe é incrível. Meu cachorro volta sempre feliz, cheiroso e muito bem tratado. Viramos clientes de carteirinha!”</p>
            <strong>CAROLINA MELO</strong><span>Cliente Pet Shop</span>
            <button className="quote-prev" type="button" aria-label="Depoimento anterior"><ArrowLeft /></button>
            <button className="quote-next" type="button" aria-label="Próximo depoimento"><ArrowRight /></button>
          </div>
        </div>
      </section>

      <section className="section page-shell blog-section">
        <SectionTitle eyebrow="Últimas dicas">Conteúdos recentes<br />do nosso blog pet</SectionTitle>
        <div className="blog-grid">
          <article><div className="blog-art blog-art-one"><HeartPulse /></div><div><span>Saúde • 12 set, 2026</span><h3>Como manter seu pet saudável em todas as fases</h3><p>Rotina, alimentação e carinho fazem toda a diferença.</p><a href="#contato">Leia mais <ArrowRight /></a></div></article>
          <article><div className="blog-art blog-art-two"><Syringe /></div><div><span>Cuidados • 08 set, 2026</span><h3>Vacinas essenciais e quando aplicar</h3><p>Um guia rápido para proteger o seu melhor amigo.</p><a href="#contato">Leia mais <ArrowRight /></a></div></article>
        </div>
      </section>

      <footer id="contato" className="footer">
        <div className="page-shell footer-grid">
          <div><h3>Entre em contato</h3><p>Seu pet merece o melhor. Fale com a nossa equipe.</p><ul><li><MapPin /> Rua das Flores, 123</li><li><Mail /> oi@petshop.com</li><li><Phone /> (11) 3456-7890</li></ul></div>
          <div><h3>Links rápidos</h3><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#produtos">Produtos</a><a href="#contato">Contato</a></div>
          <div><h3>Links populares</h3><a href="#planos">Planos</a><a href="#servicos">Banho e tosa</a><a href="#servicos">Hospedagem</a><a href="#produtos">Ofertas</a></div>
          <div><h3>Newsletter</h3><div className="newsletter"><input aria-label="Seu e-mail" type="email" placeholder="Seu e-mail" /><button type="button">Enviar</button></div><h3 className="follow-title">Siga a gente</h3><div className="socials"><a href="#contato" aria-label="Facebook"><Facebook /></a><a href="#contato" aria-label="Instagram"><Instagram /></a><a href="#contato" aria-label="Twitter"><Twitter /></a></div></div>
        </div>
        <div className="copyright"><div className="page-shell"><span>© 2026 Pet Shop. Todos os direitos reservados.</span><span>Feito com carinho para quem ama animais.</span></div></div>
      </footer>
    </main>
  );
}