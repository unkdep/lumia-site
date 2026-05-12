import { useEffect, useState } from "react";
import {
  Bot,
  CheckCircle2,
  MessageCircle,
  Send,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoLumia from "./logo.gif";

const whatsappLink =
  "https://wa.me/5511980003836?text=Olá! Quero conhecer a Lumia.";

const features = [
  "Atendimento integrado via WhatsApp",
  "Múltiplos WhatsApps na mesma empresa",
  "Inteligência Artificial integrada",
  "Transferência entre IA e atendente humano",
  "Disparo de mensagens e campanhas",
  "Painel administrativo completo",
];

function ChatDemo() {
  const messages = [
    {
      from: "user",
      text: "Oi, qual o horário de atendimento?",
    },
    {
      from: "ai",
      text: "Olá! Atendemos de segunda a sexta, das 8h às 18h. Posso te ajudar com algo mais?",
    },
    {
      from: "user",
      text: "Quero saber sobre o Plano Pro.",
    },
    {
      from: "ai",
      text: "Perfeito. O Plano Pro inclui IA integrada, fluxos automatizados e suporte individualizado.",
    },
  ];

  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((current) => (current >= messages.length ? 1 : current + 1));
    }, 1700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="chatDemo">
      <div className="chatHeader">
        <img src={logoLumia} alt="Logo Lumia" />

        <div>
          <strong>IA Lumia</strong>
          <span>
            <i></i>
            Online agora
          </span>
        </div>
      </div>

      <div className="chatMessages">
        <AnimatePresence>
          {messages.slice(0, visible).map((message, index) => (
            <motion.div
              key={`${message.text}-${index}`}
              className={`message ${message.from}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {message.from === "ai" && (
                <div className="messageAuthor">
                  <img src={logoLumia} alt="Logo Lumia" />
                  IA Lumia
                </div>
              )}

              <p>{message.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="chatInput">
        <span>Digite sua mensagem...</span>
        <button>
          <Send size={17} />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={logoLumia} alt="Logo Lumia" className="logo" />
          <span>Lumia</span>
        </div>

        <div className="navLinks">
          <a href="#recursos">Recursos</a>
          <a href="#planos">Planos</a>
          <a href={whatsappLink} target="_blank" className="navButton">
            Demonstração grátis
          </a>
        </div>
      </nav>

      <section className="hero">
        <motion.div
          className="heroText"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge">
            <Bot size={16} />
            Assistente virtual com IA para WhatsApp
          </span>

          <h1>
            Automatize seu atendimento e venda mais pelo{" "}
            <strong>WhatsApp</strong>
          </h1>

          <p>
            A Lumia centraliza conversas, conecta múltiplos números, responde
            clientes com inteligência artificial e organiza todo o atendimento da
            sua empresa em um painel moderno.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href={whatsappLink} target="_blank">
              Quero conhecer a Lumia
            </a>

            <a className="secondaryButton" href="#planos">
              Ver planos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ChatDemo />
        </motion.div>
      </section>

      <section className="features" id="recursos">
        <div className="sectionTitle">
          <span>O que a plataforma oferece</span>
          <h2>Recursos para transformar o atendimento da sua empresa</h2>
        </div>

        <div className="featureGrid">
          {features.map((item) => (
            <div className="featureCard" key={item}>
              <CheckCircle2 size={22} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="plans" id="planos">
        <div className="sectionTitle">
          <span>Planos & Preços</span>
          <h2>Escolha o plano ideal para sua operação</h2>
          <p>Sem taxas escondidas, sem surpresas.</p>
        </div>

        <div className="billingToggle">
          <button className="active">Mensal</button>
        </div>

        <div className="plansGrid">
          <div className="planCard dark">
            <h3>Plano Starter</h3>

            <div className="price">
              <span>R$</span>
              <strong>199</strong>
              <small>/mês</small>
            </div>

            <p className="planDesc">
              Só pra quem ainda não tem operação no WhatsApp e quer só o básico
              pra testar — <b>nada de IA, nada de automação.</b>
            </p>

            <div className="planDivider" />

            <div className="planGroup">
              <h4>Recursos:</h4>
              <p className="groupTitle">Acesso à ferramenta</p>

              <ul>
                <li>
                  <CheckCircle2 size={16} /> 5 membros por equipe
                </li>
                <li>
                  <CheckCircle2 size={16} /> Organização de contatos
                </li>
                <li>
                  <CheckCircle2 size={16} /> Dashboard 2.0
                </li>
              </ul>
            </div>

            <div className="planGroup">
              <p className="groupTitle">API Oficial da Meta</p>

              <ul>
                <li className="no">
                  <XCircle size={16} /> Não incluso
                </li>
              </ul>
            </div>

            <div className="planGroup">
              <p className="groupTitle">Ferramentas inclusas</p>

              <ul>
                <li className="no">
                  <XCircle size={16} /> Integrações
                </li>
                <li className="no">
                  <XCircle size={16} /> Inteligência artificial
                </li>
                <li className="no">
                  <XCircle size={16} /> Disparos automáticos
                </li>
              </ul>
            </div>

            <a href={whatsappLink} target="_blank" className="planButton">
              Começar agora
            </a>
          </div>

          <div className="planCard light">
            <div className="recommended">Recomendado</div>

            <h3>Plano Pro</h3>

            <div className="price">
              <span>R$</span>
              <strong>299</strong>
              <small>/mês</small>
            </div>

            <p className="planDesc">
              Pra empresas que querem uma{" "}
              <b>IA no WhatsApp que entende o negócio de verdade</b>.
            </p>

            <div className="planDivider" />

            <div className="planGroup">
              <h4>Recursos:</h4>
              <p className="groupTitle">Acesso à ferramenta</p>

              <ul>
                <li>
                  <CheckCircle2 size={16} /> Até 5 membros da equipe
                </li>
                <li>
                  <CheckCircle2 size={16} /> Atendimento compartilhado
                </li>
                <li>
                  <CheckCircle2 size={16} /> Suporte individualizado
                </li>
              </ul>
            </div>

            <div className="planGroup">
              <p className="groupTitle">API Oficial da Meta</p>

              <ul>
                <li>
                  <CheckCircle2 size={16} /> Reduz risco de bloqueio
                </li>
                <li>
                  <CheckCircle2 size={16} /> Conexão coexistência
                </li>
              </ul>
            </div>

            <div className="planGroup">
              <p className="groupTitle">Ferramentas inclusas</p>

              <ul>
                <li>
                  <CheckCircle2 size={16} /> Inteligência artificial integrada
                </li>
                <li>
                  <CheckCircle2 size={16} /> Disparo de mensagens
                </li>
                <li>
                  <CheckCircle2 size={16} /> Fluxos automatizados
                </li>
              </ul>
            </div>

            <a href={whatsappLink} target="_blank" className="planButton">
              Solicitar demonstração
            </a>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Pronto para automatizar seu atendimento?</h2>

        <p>
          Tenha atendimento inteligente, automações e organização completa em um
          único sistema.
        </p>

        <a href={whatsappLink} target="_blank">
          Falar no WhatsApp
        </a>
      </section>

      <a className="whatsappFloat" href={whatsappLink} target="_blank">
        <MessageCircle size={26} />
      </a>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Inter, sans-serif;
          background: #050816;
          color: white;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(circle at top left, rgba(0,255,200,0.12), transparent 30%),
            radial-gradient(circle at 80% 0%, rgba(0,140,255,0.12), transparent 30%),
            linear-gradient(180deg, #050816 0%, #070b1b 50%, #050816 100%);
        }

        .navbar {
          position: sticky;
          top: 16px;
          z-index: 100;
          width: min(1180px, calc(100% - 32px));
          margin: 16px auto 0;
          padding: 14px 20px;
          border-radius: 999px;
          background:
            linear-gradient(
              90deg,
              rgba(12, 34, 44, 0.95) 0%,
              rgba(5, 20, 40, 0.96) 48%,
              rgba(0, 42, 72, 0.95) 100%
            );
          border: 1px solid rgba(95,255,215,0.2);
          backdrop-filter: blur(22px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow:
            0 0 60px rgba(0,255,200,0.08),
            0 24px 70px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 26px;
          font-weight: 900;
          color: #ffffff;
        }

        .logo {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .navLinks a {
          padding: 12px 18px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          color: #dbe7f4;
          transition: 0.25s;
        }

        .navLinks a:hover {
          background: rgba(255,255,255,0.08);
          color: #ffffff;
        }

        .navLinks .navButton {
          background: linear-gradient(135deg, #28f5be, #35a7ff);
          color: #030712;
          box-shadow:
            0 0 24px rgba(40,245,190,0.22),
            0 10px 30px rgba(0,0,0,0.22);
        }

        .hero {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          min-height: calc(100vh - 110px);
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 54px;
          align-items: center;
          padding: 60px 0 100px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(0,255,200,0.1);
          border: 1px solid rgba(0,255,200,0.2);
          color: #63ffd8;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .heroText h1 {
          font-size: clamp(42px, 6vw, 76px);
          line-height: 0.95;
          letter-spacing: -3px;
          margin-bottom: 24px;
        }

        .heroText h1 strong {
          color: #5fffd7;
        }

        .heroText p {
          color: #b9c3d6;
          font-size: 19px;
          line-height: 1.7;
          margin-bottom: 34px;
        }

        .heroActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primaryButton,
        .planButton,
        .cta a {
          padding: 15px 24px;
          border-radius: 999px;
          background: linear-gradient(135deg, #28f5be, #35a7ff);
          color: #030712;
          font-weight: 900;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }

        .secondaryButton {
          padding: 15px 24px;
          border-radius: 999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          font-weight: 800;
        }

        .chatDemo {
          width: 100%;
          max-width: 460px;
          margin-left: auto;
          border-radius: 34px;
          padding: 24px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.1),
            rgba(255,255,255,0.04)
          );
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: 0 30px 90px rgba(0,0,0,0.34);
          backdrop-filter: blur(18px);
        }

        .chatHeader {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .chatHeader img {
          width: 44px;
          height: 44px;
          object-fit: cover;
          border-radius: 50%;
        }

        .chatHeader strong {
          display: block;
          font-size: 16px;
        }

        .chatHeader span {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #5fffd7;
          font-size: 12px;
          margin-top: 2px;
        }

        .chatHeader i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #5fffd7;
          box-shadow: 0 0 14px rgba(95,255,215,0.8);
        }

        .chatMessages {
          min-height: 260px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .message {
          max-width: 84%;
        }

        .message.user {
          align-self: flex-end;
        }

        .message.ai {
          align-self: flex-start;
        }

        .messageAuthor {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 5px;
          color: #5fffd7;
          font-size: 11px;
          font-weight: 800;
        }

        .messageAuthor img {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          object-fit: cover;
        }

        .message p {
          padding: 12px 14px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.45;
        }

        .message.user p {
          border-bottom-right-radius: 5px;
          background: linear-gradient(135deg, #28f5be, #35a7ff);
          color: #031018;
          font-weight: 800;
        }

        .message.ai p {
          border-bottom-left-radius: 5px;
          background: rgba(255,255,255,0.075);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f5f9ff;
        }

        .chatInput {
          margin-top: 18px;
          padding: 10px 10px 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.045);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #7f8da3;
          font-size: 13px;
        }

        .chatInput button {
          width: 38px;
          height: 38px;
          border: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #28f5be, #35a7ff);
          color: #031018;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .features,
        .plans {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 80px 0;
        }

        .sectionTitle {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 44px;
        }

        .sectionTitle span {
          color: #5fffd7;
          font-weight: 800;
        }

        .sectionTitle h2 {
          font-size: clamp(32px, 4vw, 54px);
          line-height: 1.05;
          letter-spacing: -2px;
          margin-top: 14px;
        }

        .sectionTitle p {
          color: #aeb7c8;
          font-size: 18px;
          margin-top: 14px;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 18px;
        }

        .featureCard {
          min-height: 130px;
          padding: 24px;
          border-radius: 26px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .billingToggle {
          width: fit-content;
          margin: 0 auto 40px;
          padding: 7px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
        }

        .billingToggle button {
          border: 0;
          padding: 13px 23px;
          border-radius: 999px;
          background: #eaf4ff;
          color: #172033;
          font-size: 17px;
          font-weight: 800;
        }

        .plansGrid {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 40px;
        }

        .planCard {
          border-radius: 16px;
          padding: 32px;
        }

        .planCard.dark {
          background: #1b1d22;
          border: 1px solid rgba(95,255,215,0.18);
        }

        .planCard.light {
          background:
            radial-gradient(circle at top right, rgba(53,167,255,0.16), transparent 34%),
            #f7fbff;
          color: #1b1d22;
        }

        .recommended {
          width: fit-content;
          margin-bottom: 18px;
          padding: 8px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #28f5be, #35a7ff);
          color: #031018;
          font-size: 12px;
          font-weight: 900;
        }

        .price {
          display: flex;
          align-items: flex-end;
          gap: 5px;
          margin: 20px 0;
        }

        .price strong {
          font-size: 48px;
        }

        .planDesc {
          opacity: 0.8;
          line-height: 1.6;
        }

        .planDivider {
          height: 1px;
          background: rgba(255,255,255,0.12);
          margin: 24px 0;
        }

        .light .planDivider {
          background: rgba(0,0,0,0.12);
        }

        .planGroup {
          padding: 14px 0;
        }

        .groupTitle {
          font-weight: 800;
          margin-bottom: 10px;
        }

        .planGroup ul {
          display: grid;
          gap: 8px;
          list-style: none;
        }

        .planGroup li {
          display: flex;
          align-items: center;
          gap: 7px;
          opacity: 0.85;
        }

        .planGroup li.no {
          text-decoration: line-through;
          opacity: 0.55;
        }

        .cta {
          width: min(980px, calc(100% - 32px));
          margin: 40px auto 90px;
          padding: 58px 30px;
          text-align: center;
          border-radius: 34px;
          background: linear-gradient(
            135deg,
            rgba(0,255,200,0.13),
            rgba(53,167,255,0.1)
          );
          border: 1px solid rgba(0,255,200,0.24);
        }

        .cta h2 {
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 18px;
        }

        .cta p {
          max-width: 650px;
          margin: 0 auto 28px;
          color: #b9c3d6;
          font-size: 18px;
          line-height: 1.7;
        }

        .whatsappFloat {
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #28f5be, #35a7ff);
          color: #030712;
          display: grid;
          place-items: center;
          z-index: 99;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .chatDemo {
            margin: 0 auto;
          }

          .featureGrid {
            grid-template-columns: repeat(2,1fr);
          }

          .plansGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .navbar {
            width: calc(100% - 20px);
            top: 8px;
            margin-top: 8px;
            padding: 10px 10px;
            border-radius: 28px;
          }

          .brand {
            font-size: 22px;
            gap: 9px;
          }

          .logo {
            width: 50px;
            height: 50px;
          }

          .navLinks {
            gap: 3px;
          }

          .navLinks a {
            padding: 9px 10px;
            font-size: 11px;
          }

          .navLinks .navButton {
            padding: 10px 11px;
            font-size: 11px;
            white-space: nowrap;
          }

          .hero {
            width: calc(100% - 28px);
            padding: 56px 0 70px;
            text-align: center;
          }

          .badge {
            margin-bottom: 22px;
          }

          .heroText h1 {
            font-size: 44px;
            letter-spacing: -2px;
          }

          .heroText p {
            font-size: 16px;
          }

          .heroActions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }

          .chatDemo {
            max-width: 100%;
            padding: 18px;
            border-radius: 26px;
          }

          .chatMessages {
            min-height: 250px;
          }

          .message {
            max-width: 88%;
            text-align: left;
          }

          .featureGrid {
            grid-template-columns: 1fr;
          }

          .features,
          .plans {
            width: calc(100% - 28px);
            padding: 70px 0;
          }

          .plansGrid {
            gap: 22px;
          }

          .planCard {
            padding: 24px;
          }

          .cta {
            width: calc(100% - 28px);
            padding: 42px 22px;
            border-radius: 28px;
            margin-bottom: 110px;
          }
        }
      `}</style>
    </main>
  );
}