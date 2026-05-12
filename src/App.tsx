import {
  Bot,
  Building2,
  CheckCircle2,
  MessageCircle,
  XCircle,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
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

export default function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand">
          <img src={logoLumia} alt="Logo Lumia" className="logo" />
          <span>Lumia</span>
        </div>

        <a className="navButton" href={whatsappLink} target="_blank">
          Solicitar demonstração
        </a>
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
          className="mockup"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mockupHeader">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="chatCard left">
            <MessageCircle size={18} />

            <div>
              <b>Novo cliente</b>
              <p>Olá, gostaria de saber mais sobre os planos.</p>
            </div>
          </div>

          <div className="chatCard right">
            <Bot size={18} />

            <div>
              <b>IA Lumia</b>
              <p>Claro! Vou te explicar e direcionar para o setor correto.</p>
            </div>
          </div>

          <div className="statsGrid">
            <div>
              <Building2 size={20} />
              <strong>Multiempresa</strong>
              <span>várias operações</span>
            </div>

            <div>
              <Zap size={20} />
              <strong>24h</strong>
              <span>respostas automáticas</span>
            </div>
          </div>
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

              <p className="groupTitle">🤖 Acesso à ferramenta</p>

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
              <p className="groupTitle">∞ API Oficial da META</p>

              <ul>
                <li className="no">
                  <XCircle size={16} /> Não incluso
                </li>
              </ul>
            </div>

            <div className="planGroup">
              <p className="groupTitle">🧰 Ferramentas inclusas</p>

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

              <p className="groupTitle">🤖 Acesso à ferramenta</p>

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
              <p className="groupTitle">∞ API Oficial da META</p>

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
              <p className="groupTitle">🧰 Ferramentas inclusas</p>

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
          width: min(1180px, calc(100% - 32px));
          margin: 16px auto 0;
          padding: 20px 28px;

          border-radius: 24px;

          background: rgba(6, 10, 24, 0.92);

          border: 1px solid rgba(255,255,255,0.08);

          backdrop-filter: blur(18px);

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 16px;

          font-size: 30px;
          font-weight: 900;

          color: #ffffff;
        }

        .logo {
          width: 78px;
          height: 78px;

          object-fit: cover;

          border-radius: 50%;

          flex-shrink: 0;
        }

        .navButton {
          padding: 16px 28px;

          border-radius: 999px;

          background: rgba(255,255,255,0.08);

          border: 1px solid rgba(255,255,255,0.12);

          color: #ffffff;

          font-weight: 800;

          transition: 0.25s;
        }

        .navButton:hover {
          background: rgba(255,255,255,0.14);
          transform: translateY(-2px);
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

        .mockup {
          border-radius: 34px;

          padding: 24px;

          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.1),
            rgba(255,255,255,0.04)
          );

          border: 1px solid rgba(255,255,255,0.12);
        }

        .mockupHeader {
          display: flex;
          gap: 8px;

          margin-bottom: 22px;
        }

        .mockupHeader span {
          width: 11px;
          height: 11px;

          border-radius: 50%;

          background: rgba(255,255,255,0.24);
        }

        .chatCard {
          display: flex;
          gap: 14px;

          padding: 18px;

          border-radius: 22px;

          background: rgba(255,255,255,0.07);

          border: 1px solid rgba(255,255,255,0.09);

          margin-bottom: 16px;
        }

        .chatCard.right {
          margin-left: 34px;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(2,1fr);

          gap: 14px;

          margin-top: 20px;
        }

        .statsGrid div {
          padding: 20px;

          border-radius: 24px;

          background: #070b1b;

          border: 1px solid rgba(0,255,200,0.16);
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

          .featureGrid {
            grid-template-columns: repeat(2,1fr);
          }

          .plansGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .navbar {
            padding: 16px 18px;
          }

          .brand {
            font-size: 22px;
            gap: 12px;
          }

          .logo {
            width: 62px;
            height: 62px;
          }

          .navButton {
            display: none;
          }

          .heroActions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
            justify-content: center;
          }

          .featureGrid {
            grid-template-columns: 1fr;
          }

          .statsGrid {
            grid-template-columns: 1fr;
          }

          .plansGrid {
            gap: 22px;
          }

          .planCard {
            padding: 24px;
          }

          .chatCard.right {
            margin-left: 0;
          }
        }
      `}</style>
    </main>
  );
}