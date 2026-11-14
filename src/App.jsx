
import logo from "./assets/logo.png";

const whatsapp = "https://wa.me/5511994773143";
const diagnostico = `${whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar um diagnóstico gratuito de TI para minha empresa."
)}`;

const servicos = [
  {
    numero: "01",
    titulo: "Gestão de TI",
    descricao:
      "Acompanhamento e administração da infraestrutura tecnológica para manter sua empresa funcionando.",
  },
  {
    numero: "02",
    titulo: "Suporte Técnico",
    descricao:
      "Atendimento remoto e presencial sob consulta para computadores, sistemas e usuários.",
  },
  {
    numero: "03",
    titulo: "Microsoft 365",
    descricao:
      "Implantação, migração, licenciamento e administração de e-mails, Teams, OneDrive e SharePoint.",
  },
  {
    numero: "04",
    titulo: "Redes e Wi-Fi",
    descricao:
      "Configuração de redes corporativas, Wi-Fi, equipamentos e conectividade.",
  },
  {
    numero: "05",
    titulo: "Segurança e Backup",
    descricao:
      "Proteção de acessos, políticas de segurança e soluções para preservar informações importantes.",
  },
  {
    numero: "06",
    titulo: "Cloud e Azure",
    descricao:
      "Consultoria e administração de infraestrutura e serviços em nuvem Microsoft Azure.",
  },
  {
    numero: "07",
    titulo: "Câmeras e Infraestrutura",
    descricao:
      "Instalação e configuração de câmeras, cabeamento estruturado e infraestrutura de TI.",
  },
];

const segmentos = [
  "Escritórios de contabilidade",
  "Escritórios de advocacia",
  "Arquitetura e engenharia",
  "Comércios e pequenas empresas",
];

const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico",
    descricao: "Entendemos a estrutura, as dificuldades e as necessidades da sua empresa.",
  },
  {
    numero: "02",
    titulo: "Proposta",
    descricao: "Apresentamos soluções adequadas ao seu ambiente e orçamento.",
  },
  {
    numero: "03",
    titulo: "Implementação",
    descricao: "Configuramos e organizamos os recursos tecnológicos necessários.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento",
    descricao: "Oferecemos suporte e gestão contínua conforme o serviço contratado.",
  },
];

function BotaoWhatsApp({ children, secundario = false }) {
  return (
    <a
      href={diagnostico}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl px-7 py-4 font-bold transition ${
        secundario
          ? "bg-white text-[#061B44] hover:bg-slate-100"
          : "bg-lime-400 text-[#061B44] hover:bg-lime-300"
      }`}
    >
      {children}
      <span className="ml-2" aria-hidden="true">↗</span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* MENU */}
      <header className="bg-[#04152F] text-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <a href="#inicio" aria-label="NDZ Tecnologia - Início">
            <img
              src={logo}
              alt="NDZ Tecnologia"
              className="w-32 sm:w-40"
            />
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#servicos" className="hover:text-lime-400">
              Serviços
            </a>
            <a href="#segmentos" className="hover:text-lime-400">
              Quem atendemos
            </a>
            <a href="#sobre" className="hover:text-lime-400">
              Sobre
            </a>
          </div>

          <a
            href={diagnostico}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-lime-400 px-4 py-3 text-center text-xs font-semibold text-lime-400 transition hover:bg-lime-400 hover:text-[#04152F] sm:text-sm"
          >
            Fale conosco
          </a>
        </nav>
      </header>

      {/* INÍCIO */}
      <main>
        <section
          id="inicio"
          className="relative overflow-hidden bg-[#04152F] px-6 py-20 text-white md:py-28"
        >
          <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-24 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-sm font-bold uppercase tracking-widest text-lime-400">
                Tecnologia para o seu negócio
              </p>

              <h1 className="mb-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Sua empresa funcionando.
                <span className="block text-lime-400">
                  A TI fica com a gente.
                </span>
              </h1>

              <p className="mb-9 max-w-xl text-lg leading-relaxed text-slate-300">
                Cuidamos da tecnologia da sua empresa para que você
                tenha mais tranquilidade para cuidar do seu negócio.
                Suporte, infraestrutura, Microsoft 365 e segurança
                em um só lugar.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <BotaoWhatsApp>
                  Solicitar diagnóstico gratuito
                </BotaoWhatsApp>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 font-semibold transition hover:bg-white/10"
                >
                  Conhecer serviços
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-sm sm:p-10">
              <p className="mb-7 text-sm font-bold uppercase tracking-widest text-lime-400">
                Gestão de TI para empresas
              </p>

              {[
                "Computadores e suporte",
                "Redes e conectividade",
                "Microsoft 365 e nuvem",
                "Segurança e backup",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 py-5 last:border-b-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime-400/15 font-bold text-lime-400">
                    ✓
                  </span>
                  <span className="text-lg font-medium text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-700">
              Nossas soluções
            </p>

            <h2 className="mb-5 text-center text-3xl font-extrabold text-[#061B44] md:text-4xl">
              Tecnologia completa para sua empresa
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
              Da rotina de suporte aos projetos de infraestrutura,
              oferecemos soluções para diferentes necessidades do seu negócio.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {servicos.map((servico) => (
                <article
                  key={servico.numero}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mb-6 block text-sm font-extrabold text-lime-600">
                    {servico.numero}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-[#061B44]">
                    {servico.titulo}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {servico.descricao}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEGMENTOS */}
        <section id="segmentos" className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
                Quem atendemos
              </p>
              <h2 className="mb-6 text-3xl font-extrabold text-[#061B44] md:text-4xl">
                Sua equipe focada no trabalho, não nos problemas de TI.
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                A NDZ atende escritórios, profissionais e pequenas
                empresas que precisam de tecnologia organizada,
                segura e funcionando no dia a dia.
              </p>
            </div>

            <div className="grid gap-4">
              {segmentos.map((segmento) => (
                <div
                  key={segmento}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 p-5"
                >
                  <span className="font-bold text-lime-600">✓</span>
                  <span className="font-semibold text-[#061B44]">
                    {segmento}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="bg-[#061B44] px-6 py-20 text-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-extrabold md:text-4xl">
              Por que escolher a NDZ?
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  titulo: "Atendimento próximo",
                  descricao:
                    "Comunicação clara e atenção às necessidades reais da sua empresa.",
                },
                {
                  titulo: "Soluções sob medida",
                  descricao:
                    "Recomendações compatíveis com sua estrutura, prioridades e orçamento.",
                },
                {
                  titulo: "Visão preventiva",
                  descricao:
                    "Organização e boas práticas para reduzir riscos e evitar problemas recorrentes.",
                },
              ].map((item) => (
                <div key={item.titulo} className="border-t-2 border-lime-400 pt-7">
                  <h3 className="mb-4 text-xl font-bold">
                    {item.titulo}
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-5 text-center text-3xl font-extrabold text-[#061B44] md:text-4xl">
              Como trabalhamos
            </h2>
            <p className="mb-12 text-center text-slate-600">
              Um processo simples, do primeiro contato ao acompanhamento.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {etapas.map((etapa) => (
                <div key={etapa.numero} className="rounded-2xl bg-white p-7 shadow-sm">
                  <span className="mb-5 block text-3xl font-extrabold text-lime-600">
                    {etapa.numero}
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-[#061B44]">
                    {etapa.titulo}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {etapa.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-700">
              Sobre nós
            </p>

            <h2 className="mb-6 text-3xl font-extrabold text-[#061B44] md:text-4xl">
              NDZ Tecnologia
            </h2>

            <p className="mb-6 text-xl font-semibold text-[#061B44]">
              Negócios. Digitalização. Zelo.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              A NDZ Tecnologia ajuda empresas a organizar,
              administrar e modernizar seus ambientes de TI.
              Nosso propósito é simplificar a tecnologia, oferecer
              atendimento próximo e contribuir para que nossos
              clientes trabalhem com mais tranquilidade.
            </p>

            <p className="mt-6 text-base leading-relaxed text-slate-500">
              Atendimento presencial sob consulta em São Paulo,
              Embu das Artes, Taboão da Serra e região.
              Serviços remotos Microsoft 365 e Azure para todo o Brasil.
            </p>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-[#04152F] px-6 py-20 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 font-bold uppercase tracking-widest text-lime-400">
              Vamos conversar?
            </p>

            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
              Sua empresa precisa de uma TI mais organizada?
            </h2>

            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-slate-300">
              Conte o que sua empresa precisa e descubra como
              a NDZ Tecnologia pode ajudar.
            </p>

            <BotaoWhatsApp>
              Solicitar diagnóstico gratuito
            </BotaoWhatsApp>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-[#020D20] px-6 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm md:flex-row">
          <p>© {new Date().getFullYear()} NDZ Tecnologia. Todos os direitos reservados.</p>

          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/ndztecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
