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
    md:min-h-screen
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

      <div className="mb-14 flex items-start">
        <img
          src={logo}
          alt="NDZ Tecnologia"
          className="w-60 md:w-80 lg:w-[420px]"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        A tecnologia que impulsiona o seu negócio
      </h1>

      <p className="text-xl text-slate-200 mb-8 leading-relaxed">
        Soluções em Microsoft 365, Azure e suporte técnico para pequenas empresas.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">

        <a
          href="https://wa.me/5511994773143"
          target="_blank"
          className="bg-lime-500 hover:bg-lime-400 transition px-6 py-4 rounded-2xl text-lg font-semibold text-black text-center"
        >
          Fale comigo no WhatsApp
        </a>

        <a
          href="#servicos"
          className="border border-white/30 hover:bg-white/10 transition px-6 py-4 rounded-2xl text-lg text-center"
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
                title: 'Azure',
                desc: 'Infraestrutura cloud e administração Azure.',
              },
              {
                title: 'Segurança',
                desc: 'MFA, backup e proteção de identidades.',
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
            Somos especialistas em infraestrutura e cloud, com foco em Microsoft 365 e Azure. Ajudamos pequenas empresas a organizarem, modernizarem e protegerem seus ambientes de TI de forma simples, eficiente e segura.

          </p>

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