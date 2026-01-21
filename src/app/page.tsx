'use client';

import {
  Code,
  Smartphone,
  Globe,
  Cpu,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
} from 'lucide-react';

export default function Home() {
  const whatsappLink =
    'https://wa.me/5548999999999?text=Olá!%20Gostaria%20de%20um%20orçamento';

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              BS<span className="text-blue-300">DEVELOPER</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#servicos"
                className="text-white/80 hover:text-white transition"
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-white/80 hover:text-white transition"
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-white/80 hover:text-white transition"
              >
                Contato
              </a>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-bg min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transformamos suas
              <span className="text-blue-200"> ideias em software</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Somos uma softhouse inovadora que utiliza inteligência artificial
              para entregar projetos com qualidade, agilidade e custo acessível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight size={20} />
              </a>
              <a
                href="#servicos"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition text-center"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">
                Com IA aceleramos o desenvolvimento e entregamos projetos em
                tempo recorde.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">
                Testes automatizados e revisão de código por IA garantem
                software robusto.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">
                Nossos agentes de IA estão disponíveis a qualquer momento para
                te ajudar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas de desenvolvimento de software para
              transformar seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sites e Landing Pages</h3>
              <p className="text-gray-600 mb-4">
                Sites institucionais, landing pages e e-commerces modernos e
                responsivos.
              </p>
              <p className="text-blue-600 font-bold">A partir de R$ 2.000</p>
            </div>

            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sistemas Web</h3>
              <p className="text-gray-600 mb-4">
                CRMs, ERPs, dashboards e sistemas personalizados para sua
                empresa.
              </p>
              <p className="text-green-600 font-bold">A partir de R$ 8.000</p>
            </div>

            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Apps Mobile</h3>
              <p className="text-gray-600 mb-4">
                Aplicativos para iOS e Android com React Native ou Flutter.
              </p>
              <p className="text-purple-600 font-bold">A partir de R$ 15.000</p>
            </div>

            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Cpu className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Automação com IA</h3>
              <p className="text-gray-600 mb-4">
                Chatbots, automações e integração de inteligência artificial.
              </p>
              <p className="text-orange-600 font-bold">A partir de R$ 5.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre a BSDEVELOPER</h2>
              <p className="text-gray-300 mb-6">
                Somos uma softhouse inovadora localizada em Capivari de Baixo -
                SC. Nossa missão é democratizar o acesso à tecnologia de
                qualidade, utilizando inteligência artificial para otimizar
                processos e reduzir custos.
              </p>
              <p className="text-gray-300 mb-8">
                Com uma abordagem moderna, combinamos o melhor da tecnologia com
                atendimento humanizado para entregar soluções que realmente
                fazem a diferença no seu negócio.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={24} />
                  <span>Projetos entregues com excelência</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={24} />
                  <span>Tecnologia de ponta com IA</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={24} />
                  <span>Suporte contínuo e dedicado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={24} />
                  <span>Preços acessíveis para todos</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">100+</div>
                <div className="text-blue-200 mb-8">Projetos Entregues</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-blue-200 text-sm">
                      Clientes Satisfeitos
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-blue-200 text-sm">Suporte Ativo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e receba um orçamento personalizado em
            até 24 horas.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition"
          >
            <MessageCircle size={28} />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-gray-600">
              Estamos prontos para transformar sua ideia em realidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-green-50 transition"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600">(48) 99999-9999</p>
            </a>

            <a
              href="mailto:contato@bsdeveloper.com.br"
              className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">contato@bsdeveloper.com.br</p>
            </a>

            <div className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Endereço</h3>
              <p className="text-gray-600 text-center">
                Rua João Rodrigues Martins, 101
                <br />
                Capivari de Baixo - SC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              BS<span className="text-blue-400">DEVELOPER</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 BSDEVELOPER. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">
                Capivari de Baixo - SC | CNPJ: 00.000.000/0001-00
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition hover:scale-110 z-50"
      >
        <MessageCircle className="text-white" size={32} />
      </a>
    </main>
  );
}
