import logo from "./assets/logo.png";
import heroImage from './assets/hero2.png'
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* HERO */}
<section
  className="
    text-white
    px-6
    pt-8
    pb-20
    md:min-h-screenx
    flex
    items-center
    bg-[#031B4E]
    md:bg-no-repeat
    md:bg-center
    md:bg-cover
  "
  style={{
    backgroundImage:
      window.innerWidth >= 768
        ? `
          linear-gradient(
            rgba(3, 15, 40, 0.82),
            rgba(3, 15, 40, 0.82)
          ),
          url(${heroImage})
        `
        : "none"
  }}
>
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

    <div>

      <div className="mb-4 flex items-start">
        <img
          src={logo}
          alt="NDZ Tecnologia"
          className="w-60 md:w-80 lg:w-[420px]"
        />
      </div>

      <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
        Organize, proteja e modernize sua empresa com Microsoft 365
      </h1>

      <p className="text-xl md:text-2xl mb-8 leading-relaxed">
        Mais produtividade, segurança e organização para sua empresa com Microsoft 365 e suporte especializado.
      </p>
      <p className="text-lime-400 font-bold text-xl mb-2">
      Gestão Microsoft 365 a partir de R$ 28,60 por usuário/mês
      </p>
      <p className="text-slate-300 text-sm mb-8">
      Implantação, suporte e acompanhamento especializado.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">

  <a
    href="https://wa.me/5511994773143"
    target="_blank"
    className="bg-lime-500 hover:bg-lime-400 transition px-6 py-4 rounded-2xl text-lg font-semibold text-black text-center inline-block"
  >
    Falar com um especialista
  </a>

  <a
    href="#servicos"
    className="border border-white/30 hover:bg-white/10 transition px-6 py-4 rounded-2xl text-lg text-center inline-block"
  >
    Ver serviços
  </a>

</div>

    </div>

  </div>
  
</section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 bg-slate-50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Serviços
            </h2>

            <p className="text-slate-600 text-lg">
              Soluções simples e eficientes para sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: 'Microsoft 365',
                desc: 'Exchange Online, Teams, OneDrive e SharePoint.',
              },
              {
                title: 'Cloud e Servidores',
                desc: 'Infraestrutura em nuvem, servidores e administração Microsoft Azure.',
              },
              {
                title: 'Segurança',
                desc: 'MFA, backup e proteção contra acessos indevidos e perda de dados.',
              },
              {
                title: 'Suporte Técnico',
                desc: 'Atendimento remoto para pequenas empresas.',
              },
              {
                title: 'E-mail Corporativo',
                desc: 'Configuração e migração de contas profissionais.',
              },
              {
                title: 'Organização',
                desc: 'Estruturação de arquivos e ambientes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#061B44]">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SOBRE */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Sobre
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Ajudamos pequenas empresas a organizar e proteger seus e-mails, arquivos e usuários com Microsoft 365. Nossa missão é simplificar a tecnologia para que você possa focar no crescimento do seu negócio.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mt-4">
            Atendemos empresas do Capão Redondo, Campo Limpo, Santo Amaro, Taboão da Serra e região.
          </p>

        </div>

      </section>
      <section className="py-16 px-6 bg-slate-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">
      Por que escolher a NDZ?
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-bold">Atendimento próximo</h3>
        <p>Suporte rápido para pequenas empresas.</p>
      </div>

      <div>
        <h3 className="font-bold">Especialistas Microsoft 365</h3>
        <p>Experiência prática em ambientes corporativos.</p>
      </div>

      <div>
        <h3 className="font-bold">Sem burocracia</h3>
        <p>Soluções simples e eficientes para o seu negócio.</p>
      </div>
    </div>
  </div>
</section>      


      {/* CTA */}
      <section className="bg-[#061B44] text-white py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Vamos conversar?
          </h2>

          <p className="text-xl text-slate-200 mb-10">
            Solicite um diagnóstico gratuito.
          </p>

          <a
            href="https://wa.me/5511994773143"
            target="_blank"
            className="inline-block bg-lime-500 hover:bg-lime-400 transition px-8 py-5 rounded-2xl text-xl font-semibold text-black"
          >
            Chamar no WhatsApp
          </a>

        </div>

      </section>

    </div>
  )
}