import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Send,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  XCircle,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import logoLumia from "./logo.gif";
import imgOnboard from "./lumiaplanos.png";
import imgDash from "./lumia2.png";
import imgChat from "./lumia3.png";
import imgHome from "./lumia1.png";

const WA_LINK = "https://wa.me/5511980003836?text=Ol%C3%A1%21+Quero+conhecer+a+Lumia.";

// ─── Chat demo ───────────────────────────────────────────────────────────────

const MSGS = [
  { from: "user", text: "Oi, quero saber sobre os planos." },
  { from: "ai",   text: "Boa tarde! Temos o Starter e o Pro. Para qual porte de empresa você precisa?" },
  { from: "user", text: "Somos uma equipe de 10 pessoas." },
  { from: "ai",   text: "Perfeito, o Plano Pro atende bem: IA integrada, múltiplos WhatsApps, API Oficial Meta e painel completo." },
];

function ChatDemo() {
  const [visible, setVisible] = useState(1);
  useEffect(() => {
    const t = setInterval(() =>
      setVisible(v => (v >= MSGS.length ? 1 : v + 1)), 1900
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="chat-card">
      <div className="chat-header">
        <img src={logoLumia} alt="Lumia" className="chat-avatar" />
        <div>
          <strong>IA Lumia</strong>
          <span className="online"><i />Online agora</span>
        </div>
      </div>
      <div className="chat-body">
        <AnimatePresence>
          {MSGS.slice(0, visible).map((m, i) => (
            <motion.div
              key={i}
              className={`bubble ${m.from}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
            >
              {m.from === "ai" && (
                <div className="bubble-author">
                  <img src={logoLumia} alt="" />IA Lumia
                </div>
              )}
              <p>{m.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="chat-input">
        <span>Digite sua mensagem...</span>
        <button aria-label="enviar"><Send size={15} /></button>
      </div>
    </div>
  );
}

// ─── Features ────────────────────────────────────────────────────────────────

const FEATURES = [
  { title: "Atendimento integrado via WhatsApp", desc: "Todas as conversas da empresa centralizadas em um único painel moderno." },
  { title: "Múltiplos números na mesma conta", desc: "Conecte vários WhatsApps e organize por setor, equipe ou departamento." },
  { title: "Inteligência Artificial integrada", desc: "A IA atende, responde e direciona clientes automaticamente, 24h por dia." },
  { title: "Transferência IA e atendente humano", desc: "A IA passa a conversa para o humano quando necessário e retoma depois." },
  { title: "Disparo de mensagens e campanhas", desc: "Envie avisos, cobranças e promoções diretamente pelo WhatsApp." },
  { title: "Fluxos e etapas automatizadas", desc: "Configure etapas de atendimento, captura de dados e respostas automáticas." },
  { title: "Painel administrativo completo", desc: "Gerencie atendentes, números, campanhas, IA, fluxos e permissões." },
  { title: "API Oficial Meta integrada", desc: "Menor risco de bloqueio e conexão via estrutura oficial do WhatsApp Business." },
];

function FeatureCard({ f, i }: { f: { title: string; desc: string }; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className="feat-card"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
    >
      <CheckCircle2 size={20} className="feat-icon" />
      <div>
        <strong>{f.title}</strong>
        <p>{f.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Showcase image block ─────────────────────────────────────────────────────

function Showcase({ img, tag, title, desc, reverse = false }: { img: string; tag: string; title: string; desc: string; reverse?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={`showcase ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="showcase-text">
        <span className="showcase-tag">{tag}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="showcase-img-wrap">
        <img src={img} alt={title} />
      </div>
    </motion.div>
  );
}

// ─── Plans ────────────────────────────────────────────────────────────────────

const STARTER_YES = [
  "1 número de WhatsApp conectado",
  "Até 3 usuários por empresa",
  "Painel administrativo básico",
  "Histórico de conversas",
  "Organização de contatos",
  "Sistema na nuvem (HTTPS + backup)",
];
const STARTER_NO = [
  "API Oficial Meta",
  "Inteligência Artificial integrada",
  "Disparos de mensagens",
  "Fluxos automatizados",
  "Etiquetas inteligentes",
];

const PRO_YES = [
  "Múltiplos números de WhatsApp",
  "Usuários ilimitados",
  "Inteligência Artificial integrada",
  "Transferência IA / atendente humano",
  "Reativação automática da IA",
  "Disparos de mensagens e campanhas",
  "Fluxos e etapas automatizados",
  "Etiquetas inteligentes",
  "Captura de dados do cliente",
  "API Oficial Meta (menor risco de bloqueio)",
  "Painel administrativo completo",
  "Suporte individualizado",
];

// ─── Mobile nav ───────────────────────────────────────────────────────────────

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.28 }}
        >
          <button className="mobile-close" onClick={onClose}><X size={24} /></button>
          <nav>
            <a href="#produto" onClick={onClose}>O Produto</a>
            <a href="#recursos" onClick={onClose}>Recursos</a>
            <a href="#planos" onClick={onClose}>Planos</a>
            <a href={WA_LINK} target="_blank" className="mobile-cta" onClick={onClose}>Demonstração grátis</a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="page">
      {/* NAV */}
      <header className="navbar">
        <a href="#" className="brand">
          <img src={logoLumia} alt="Lumia" />
          <span>Lumia</span>
        </a>
        <nav className="nav-links">
          <a href="#produto">O Produto</a>
          <a href="#recursos">Recursos</a>
          <a href="#planos">Planos</a>
        </nav>
        <div className="nav-right">
          <a href={WA_LINK} target="_blank" className="nav-btn">Demonstração grátis</a>
          <button className="hamburger" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow g1" />
        <div className="hero-glow g2" />

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <span className="hero-badge">Assistente virtual com IA para WhatsApp</span>
          <h1>
            Atendimento automático,<br />
            <em>inteligente</em> e organizado<br />
            via WhatsApp
          </h1>
          <p>
            A Lumia centraliza conversas, conecta múltiplos números, responde clientes
            com inteligência artificial e organiza todo o atendimento da sua empresa
            em um painel moderno e completo.
          </p>
          <div className="hero-actions">
            <a href={WA_LINK} target="_blank" className="btn-primary">
              Conhecer a Lumia <ArrowRight size={16} />
            </a>
            <a href="#planos" className="btn-ghost">Ver planos</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-chat"
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <ChatDemo />
        </motion.div>

        <a href="#produto" className="scroll-hint">
          <ChevronDown size={20} />
        </a>
      </section>

      {/* PRODUCT SHOWCASES */}
      <section className="showcases" id="produto">
        <div className="section-label">O que é a Lumia</div>
        <h2 className="section-h2">Uma plataforma completa,<br />pensada para o seu negócio</h2>

        <Showcase
          img={imgOnboard}
          tag="Configuração em minutos"
          title="Cadastre, configure e ative tudo em poucos passos"
          desc="O processo de onboarding é guiado: crie sua conta, configure a empresa, conecte o WhatsApp e ative a IA em uma sequência simples e intuitiva. Não é preciso ter conhecimento técnico."
        />
        <Showcase
          img={imgHome}
          tag="Painel central"
          title="Tudo o que acontece na empresa em uma tela"
          desc="Acesse conversas, atendentes online, números conectados, filas de atendimento e indicadores do dia. Uma visão geral clara e em tempo real."
          reverse
        />
        <Showcase
          img={imgDash}
          tag="Dashboard"
          title="Dados e métricas para tomar decisões melhores"
          desc="Acompanhe volume de atendimentos, tempos de resposta, desempenho por atendente e muito mais. O dashboard foi projetado para ser objetivo e fácil de interpretar."
        />
        <Showcase
          img={imgChat}
          tag="Chat inteligente"
          title="A IA responde, transfere e retoma automaticamente"
          desc="A IA atende o cliente, identifica o contexto, aplica etiquetas, captura dados e transfere para o humano quando necessário. Depois do atendimento humano, ela retoma o fluxo sozinha."
          reverse
        />
      </section>

      {/* FEATURES */}
      <section className="features" id="recursos">
        <div className="section-label">Recursos</div>
        <h2 className="section-h2">O que a plataforma oferece<br />para a sua empresa</h2>
        <div className="feat-grid">
          {FEATURES.map((f, i) => <FeatureCard key={i} f={f} i={i} />)}
        </div>
      </section>

      {/* PLANS */}
      <section className="plans" id="planos">
        <div className="section-label">Planos e Preços</div>
        <h2 className="section-h2">Escolha o plano ideal<br />para a sua operação</h2>
        <p className="plans-sub">Sem taxas escondidas. Sem surpresas.</p>

        <div className="plans-grid">
          {/* STARTER */}
          <div className="plan-card">
            <div className="plan-name">Starter</div>
            <div className="plan-price">
              <span>R$</span><strong>197</strong><small>/mês</small>
            </div>
            <p className="plan-desc">
              Para quem quer começar a organizar o atendimento via WhatsApp sem complexidade.
              Ideal para testar a plataforma com uma operação pequena.
            </p>
            <hr className="plan-hr" />
            <ul>
              {STARTER_YES.map(t => (
                <li key={t}><CheckCircle2 size={15} className="yes" />{t}</li>
              ))}
              {STARTER_NO.map(t => (
                <li key={t} className="no"><XCircle size={15} />{t}</li>
              ))}
            </ul>
            <a href={WA_LINK} target="_blank" className="plan-btn outline">Começar agora</a>
          </div>

          {/* PRO */}
          <div className="plan-card featured">
            <div className="plan-badge">Recomendado</div>
            <div className="plan-name">Pro</div>
            <div className="plan-price">
              <span>R$</span><strong>397</strong><small>/mês</small>
            </div>
            <p className="plan-desc">
              Para empresas que querem IA de verdade no WhatsApp, automação completa,
              API Oficial Meta e um painel profissional para toda a equipe.
            </p>
            <hr className="plan-hr" />
            <ul>
              {PRO_YES.map(t => (
                <li key={t}><CheckCircle2 size={15} className="yes" />{t}</li>
              ))}
            </ul>
            <a href={WA_LINK} target="_blank" className="plan-btn solid">Solicitar demonstração</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-glow" />
        <h2>Pronto para automatizar<br />o seu atendimento?</h2>
        <p>Tenha IA, automações e organização completa em um único sistema.</p>
        <a href={WA_LINK} target="_blank" className="btn-primary">
          Falar no WhatsApp <ArrowRight size={16} />
        </a>
      </section>

      {/* FLOAT */}
      <a className="wa-float" href={WA_LINK} target="_blank" aria-label="WhatsApp">
        <MessageCircle size={24} />
      </a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --bg:       #060912;
          --bg2:      #080d1a;
          --teal:     #2affc8;
          --blue:     #3ea8ff;
          --teal2:    rgba(42,255,200,0.12);
          --border:   rgba(255,255,255,0.09);
          --text:     #e8edf8;
          --muted:    #7a8ba6;
          --card:     rgba(255,255,255,0.04);
          --radius:   20px;
          --font:     'Sora', sans-serif;
          --body:     'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }
        body { font-family: var(--body); background: var(--bg); color: var(--text); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
        a { text-decoration: none; color: inherit; }
        img { display: block; max-width: 100%; }

        .page { min-height: 100vh; }

        /* ── NAV ── */
        .navbar {
          position: sticky; top: 0; z-index: 200;
          display: grid; grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 0 40px;
          height: 80px;
          background: rgba(6,9,18,0.75);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .brand {
          display: flex; align-items: center; gap: 12px;
          font-family: var(--font); font-weight: 800; font-size: 20px;
          justify-self: start;
        }
        .brand img {
          width: 56px; height: 56px;
          border-radius: 50%; object-fit: cover;
          box-shadow: 0 0 0 2px rgba(42,255,200,0.25);
        }

        .nav-links {
          display: flex; align-items: center; gap: 2px;
          justify-self: center;
        }
        .nav-links a {
          padding: 8px 18px; border-radius: 999px;
          font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.6);
          transition: color .2s, background .2s;
          white-space: nowrap;
        }
        .nav-links a:hover { color: #fff; background: rgba(255,255,255,0.07); }

        .nav-right {
          justify-self: end;
        }
        .nav-btn {
          display: inline-flex; align-items: center;
          padding: 10px 20px; border-radius: 999px;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          color: #030d18 !important; font-weight: 700; font-size: 14px;
          font-family: var(--font);
          box-shadow: 0 0 24px rgba(42,255,200,0.2);
          transition: opacity .2s;
          white-space: nowrap;
        }
        .nav-btn:hover { opacity: .88; }

        .hamburger { display: none; background: none; border: none; color: var(--text); cursor: pointer; padding: 6px; justify-self: end; }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          position: fixed; inset: 0; z-index: 300;
          background: rgba(6,9,18,0.97);
          backdrop-filter: blur(24px);
          display: flex; flex-direction: column;
          padding: 28px 28px 40px;
        }
        .mobile-close { align-self: flex-end; background: none; border: 1px solid var(--border); color: var(--text); border-radius: 999px; padding: 8px; cursor: pointer; display: grid; place-items: center; }
        .mobile-menu nav { display: flex; flex-direction: column; gap: 8px; margin-top: 40px; }
        .mobile-menu nav a { font-family: var(--font); font-size: 22px; font-weight: 700; padding: 18px 0; border-bottom: 1px solid var(--border); color: var(--text); }
        .mobile-cta {
          margin-top: 16px;
          padding: 18px !important;
          border-radius: 16px !important;
          text-align: center;
          background: linear-gradient(135deg, var(--teal), var(--blue)) !important;
          color: #030d18 !important;
          border-bottom: none !important;
          font-size: 18px !important;
        }

        /* ── HERO ── */
        .hero {
          position: relative; overflow: hidden;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 60px;
          max-width: 1240px; margin: 0 auto;
          padding: 100px 40px 120px;
        }
        .hero-glow {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(100px);
        }
        .g1 { width: 520px; height: 520px; background: rgba(42,255,200,0.07); top: -100px; left: -120px; }
        .g2 { width: 400px; height: 400px; background: rgba(62,168,255,0.08); bottom: -60px; right: 0; }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px; border-radius: 999px;
          background: rgba(42,255,200,0.08); border: 1px solid rgba(42,255,200,0.2);
          color: var(--teal); font-size: 13px; font-weight: 600; font-family: var(--font);
          margin-bottom: 22px;
        }
        .hero-text h1 {
          font-family: var(--font); font-size: clamp(36px, 4.5vw, 66px);
          line-height: 1.05; letter-spacing: -2px; font-weight: 800;
          margin-bottom: 22px;
        }
        .hero-text h1 em { font-style: normal; color: var(--teal); }
        .hero-text p { font-size: 17px; line-height: 1.75; color: var(--muted); margin-bottom: 34px; max-width: 520px; }

        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 24px; border-radius: 999px;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          color: #030d18; font-weight: 700; font-family: var(--font); font-size: 15px;
          box-shadow: 0 0 32px rgba(42,255,200,0.2);
          transition: opacity .2s, transform .2s;
        }
        .btn-primary:hover { opacity: .9; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 24px; border-radius: 999px;
          border: 1px solid var(--border); font-weight: 600; font-size: 15px;
          color: var(--muted); transition: border-color .2s, color .2s;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.2); color: #fff; }

        .scroll-hint {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          color: var(--muted); animation: bounce 2s infinite;
          grid-column: 1/-1; display: flex; justify-content: center;
        }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }

        /* ── CHAT DEMO ── */
        .chat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          border-radius: 28px;
          padding: 22px;
          backdrop-filter: blur(18px);
          box-shadow: 0 30px 80px rgba(0,0,0,0.3);
          max-width: 440px; width: 100%;
          margin-left: auto;
        }
        .chat-header { display: flex; align-items: center; gap: 12px; padding-bottom: 16px; margin-bottom: 16px; border-bottom: 1px solid var(--border); }
        .chat-avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; }
        .chat-header strong { display: block; font-family: var(--font); font-size: 15px; }
        .online { display: flex; align-items: center; gap: 5px; color: var(--teal); font-size: 12px; margin-top: 2px; }
        .online i { width: 6px; height: 6px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 10px var(--teal); }

        .chat-body { min-height: 230px; display: flex; flex-direction: column; gap: 10px; }
        .bubble { max-width: 85%; }
        .bubble.user { align-self: flex-end; }
        .bubble.ai { align-self: flex-start; }
        .bubble-author { display: flex; align-items: center; gap: 5px; color: var(--teal); font-size: 11px; font-weight: 700; margin-bottom: 4px; }
        .bubble-author img { width: 16px; height: 16px; border-radius: 50%; object-fit: cover; }
        .bubble p { padding: 11px 14px; border-radius: 18px; font-size: 14px; line-height: 1.5; }
        .bubble.user p { background: linear-gradient(135deg, var(--teal), var(--blue)); color: #030d18; font-weight: 600; border-bottom-right-radius: 4px; }
        .bubble.ai p { background: rgba(255,255,255,0.07); border: 1px solid var(--border); border-bottom-left-radius: 4px; }

        .chat-input {
          margin-top: 16px; padding: 9px 9px 9px 16px;
          border-radius: 999px; border: 1px solid var(--border);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: space-between;
          color: var(--muted); font-size: 13px;
        }
        .chat-input button {
          width: 36px; height: 36px; border-radius: 50%; border: none;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          color: #030d18; display: grid; place-items: center; cursor: pointer;
          flex-shrink: 0;
        }

        /* ── SECTION LABELS ── */
        .section-label {
          text-align: center; color: var(--teal); font-family: var(--font);
          font-size: 13px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .section-h2 {
          font-family: var(--font); font-size: clamp(28px, 3.5vw, 52px);
          font-weight: 800; line-height: 1.1; letter-spacing: -1.5px;
          text-align: center; margin-bottom: 16px;
        }

        /* ── SHOWCASES ── */
        .showcases {
          max-width: 1240px; margin: 0 auto;
          padding: 80px 40px;
        }
        .showcases > .section-h2 { margin-bottom: 64px; }

        .showcase {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 56px; align-items: center;
          margin-bottom: 80px;
        }
        .showcase.reverse { direction: rtl; }
        .showcase.reverse > * { direction: ltr; }

        .showcase-tag {
          display: inline-block; padding: 6px 14px; border-radius: 999px;
          background: var(--teal2); border: 1px solid rgba(42,255,200,0.18);
          color: var(--teal); font-size: 12px; font-weight: 700; font-family: var(--font);
          margin-bottom: 14px; letter-spacing: .5px;
        }
        .showcase-text h3 { font-family: var(--font); font-size: clamp(22px, 2.5vw, 34px); font-weight: 800; line-height: 1.15; letter-spacing: -1px; margin-bottom: 14px; }
        .showcase-text p { font-size: 16px; line-height: 1.75; color: var(--muted); }

        .showcase-img-wrap {
          border-radius: 22px; overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 20px 70px rgba(0,0,0,0.35);
        }
        .showcase-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ── FEATURES ── */
        .features {
          max-width: 1240px; margin: 0 auto;
          padding: 80px 40px;
          border-top: 1px solid var(--border);
        }
        .features .section-h2 { margin-bottom: 52px; }

        .feat-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
        }
        .feat-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 20px;
          display: flex; gap: 14px; align-items: flex-start;
          transition: border-color .2s, background .2s;
        }
        .feat-card:hover { border-color: rgba(42,255,200,0.22); background: rgba(42,255,200,0.04); }
        .feat-icon { color: var(--teal); flex-shrink: 0; margin-top: 2px; }
        .feat-card strong { display: block; font-family: var(--font); font-size: 14px; font-weight: 700; margin-bottom: 5px; }
        .feat-card p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* ── PLANS ── */
        .plans {
          max-width: 900px; margin: 0 auto;
          padding: 80px 40px;
        }
        .plans-sub { text-align: center; color: var(--muted); font-size: 16px; margin-bottom: 48px; margin-top: 8px; }

        .plans-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }

        .plan-card {
          border-radius: 24px; padding: 32px;
          border: 1px solid var(--border);
          background: var(--card);
          display: flex; flex-direction: column; gap: 0;
        }
        .plan-card.featured {
          background: #fff; color: #0e1420;
          border-color: transparent;
          box-shadow: 0 0 60px rgba(42,255,200,0.14), 0 24px 80px rgba(0,0,0,0.25);
        }

        .plan-badge {
          width: fit-content; padding: 6px 14px; border-radius: 999px;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          color: #030d18; font-size: 12px; font-weight: 800; font-family: var(--font);
          margin-bottom: 20px;
        }
        .plan-name { font-family: var(--font); font-size: 22px; font-weight: 800; margin-bottom: 4px; }
        .plan-price { display: flex; align-items: flex-end; gap: 4px; margin: 16px 0; }
        .plan-price span { font-size: 18px; font-weight: 700; margin-bottom: 6px; }
        .plan-price strong { font-family: var(--font); font-size: 52px; font-weight: 800; line-height: 1; }
        .plan-price small { font-size: 15px; margin-bottom: 8px; opacity: .6; }
        .plan-desc { font-size: 14px; line-height: 1.7; opacity: .75; margin-bottom: 16px; }

        .plan-hr { border: none; border-top: 1px solid rgba(0,0,0,0.08); margin: 20px 0; }
        .plan-card:not(.featured) .plan-hr { border-color: var(--border); }

        .plan-card ul { list-style: none; display: flex; flex-direction: column; gap: 10px; flex: 1; margin-bottom: 28px; }
        .plan-card li { display: flex; align-items: flex-start; gap: 8px; font-size: 14px; line-height: 1.5; }
        .plan-card li .yes { color: #1ec990; flex-shrink: 0; margin-top: 1px; }
        .plan-card li .no, .plan-card li.no { opacity: .4; text-decoration: line-through; }
        .plan-card li.no svg { flex-shrink: 0; }

        .plan-btn {
          display: flex; justify-content: center; align-items: center;
          padding: 14px 20px; border-radius: 999px;
          font-family: var(--font); font-size: 15px; font-weight: 700;
          transition: opacity .2s, transform .2s;
        }
        .plan-btn:hover { opacity: .88; transform: translateY(-1px); }
        .plan-btn.solid { background: linear-gradient(135deg, var(--teal), var(--blue)); color: #030d18; box-shadow: 0 0 28px rgba(42,255,200,0.2); }
        .plan-btn.outline { border: 1px solid var(--border); background: rgba(255,255,255,0.05); color: var(--text); }

        /* ── CTA BAND ── */
        .cta-band {
          position: relative; overflow: hidden;
          max-width: 1000px; margin: 20px auto 80px;
          padding: 72px 40px;
          text-align: center;
          border-radius: 32px;
          background: linear-gradient(140deg, rgba(42,255,200,0.08), rgba(62,168,255,0.07));
          border: 1px solid rgba(42,255,200,0.18);
        }
        .cta-glow { position: absolute; width: 500px; height: 300px; background: radial-gradient(circle, rgba(42,255,200,0.1), transparent 70%); top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none; }
        .cta-band h2 { font-family: var(--font); font-size: clamp(28px, 4vw, 52px); font-weight: 800; line-height: 1.1; letter-spacing: -2px; margin-bottom: 16px; }
        .cta-band p { color: var(--muted); font-size: 17px; line-height: 1.7; max-width: 560px; margin: 0 auto 32px; }

        /* ── FLOAT ── */
        .wa-float {
          position: fixed; bottom: 24px; right: 24px; z-index: 150;
          width: 54px; height: 54px; border-radius: 50%;
          background: linear-gradient(135deg, var(--teal), var(--blue));
          color: #030d18; display: grid; place-items: center;
          box-shadow: 0 6px 28px rgba(42,255,200,0.28);
          transition: transform .2s;
        }
        .wa-float:hover { transform: scale(1.08); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .feat-grid { grid-template-columns: repeat(2,1fr); }
        }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-btn { display: none; }
          .hamburger { display: grid; place-items: center; }
          .navbar { padding: 0 20px; grid-template-columns: 1fr auto; }
          .nav-right { display: flex; align-items: center; }

          .hero {
            grid-template-columns: 1fr;
            padding: 70px 24px 80px;
            text-align: center;
            gap: 36px;
          }
          .hero-text p { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .chat-card { margin: 0 auto; }
          .scroll-hint { display: none; }

          .showcases { padding: 60px 24px; }
          .showcase { grid-template-columns: 1fr; gap: 28px; direction: ltr !important; }

          .feat-grid { grid-template-columns: repeat(2,1fr); }
          .features { padding: 60px 24px; }

          .plans { padding: 60px 24px; }
          .plans-grid { grid-template-columns: 1fr; }

          .cta-band { margin: 20px 20px 60px; padding: 52px 28px; }
        }

        @media (max-width: 520px) {
          .feat-grid { grid-template-columns: 1fr; }
          .hero-text h1 { font-size: 38px; letter-spacing: -1.5px; }
          .btn-primary, .btn-ghost { width: 100%; justify-content: center; }
          .hero-actions { flex-direction: column; }
          .plan-card { padding: 24px 20px; }
        }
      `}</style>
    </main>
  );
}