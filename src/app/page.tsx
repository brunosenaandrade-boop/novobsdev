'use client';

import {
  Code2,
  Smartphone,
  Globe2,
  Layers,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Rocket,
  ShieldCheck,
  Headphones,
  Target,
  TrendingUp,
  Users,
  Award,
  Phone,
  Zap,
  Database,
  Monitor,
  Cpu,
} from 'lucide-react';

export default function Home() {
  const whatsappLink =
    'https://wa.me/5548998649898?text=Olá!%20Gostaria%20de%20um%20orçamento';

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <Code2 size={28} className="text-blue-300" />
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
              <Phone size={18} />
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-bg min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-yellow-300" size={24} />
              <span className="text-blue-200 font-medium">Engenheiro de Software</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Sua ideia merece
              <span className="text-blue-200"> virar realidade.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Eu construo o software que você precisa.
            </p>
            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              Do aplicativo que você sonha ao sistema que vai multiplicar seus resultados.
              Não importa o tamanho do desafio — se pode ser programado, eu faço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition flex items-center justify-center gap-2"
              >
                Vamos Conversar
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que me escolher?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Não sou uma fábrica de software. Sou um engenheiro que vai entender seu problema
              e criar a solução perfeita para você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Feito Sob Medida</h3>
              <p className="text-gray-600">
                Cada linha de código é pensada para o seu negócio.
                Nada de soluções genéricas que não resolvem seu problema de verdade.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Código que Funciona</h3>
              <p className="text-gray-600">
                Software bem feito, testado e documentado.
                Você recebe um produto profissional, não um protótipo.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                <Headphones className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Parceiro de Verdade</h3>
              <p className="text-gray-600">
                Comunicação direta comigo, sem intermediários.
                Você fala com quem realmente vai construir seu projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que eu faço */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Se pode ser programado, eu faço.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Anos de experiência me permitem atacar qualquer desafio técnico.
              Aqui estão algumas das coisas que construo:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Monitor className="text-blue-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Sistemas Web</h3>
              <p className="text-gray-400 text-sm">
                CRMs, ERPs, dashboards, painéis administrativos, portais
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Smartphone className="text-green-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Apps Mobile</h3>
              <p className="text-gray-400 text-sm">
                iOS, Android, apps híbridos, aplicativos de delivery, fintech
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Globe2 className="text-purple-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Sites</h3>
              <p className="text-gray-400 text-sm">
                Landing pages, institucionais, e-commerces, blogs, portfólios
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Database className="text-orange-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">APIs e Integrações</h3>
              <p className="text-gray-400 text-sm">
                APIs REST, webhooks, integrações com ERPs, gateways de pagamento
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Layers className="text-pink-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">SaaS</h3>
              <p className="text-gray-400 text-sm">
                Plataformas completas, multi-tenant, assinaturas, white-label
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Cpu className="text-cyan-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Automações</h3>
              <p className="text-gray-400 text-sm">
                Bots, scrapers, rotinas automatizadas, integrações entre sistemas
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">MVPs</h3>
              <p className="text-gray-400 text-sm">
                Validação rápida de ideias, protótipos funcionais, startups
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <Code2 className="text-red-400 mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Projeto Especial?</h3>
              <p className="text-gray-400 text-sm">
                Me conta sua ideia. Se pode ser programado, eu encontro o caminho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços com preços */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Investimento</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Projetos sob medida com preço justo. Você paga pelo valor que recebe,
              não por horas gastas em reuniões desnecessárias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Globe2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sites</h3>
              <p className="text-gray-600 mb-4">
                Landing pages, sites institucionais, portfólios e blogs profissionais.
              </p>
              <p className="text-blue-600 font-bold text-lg">A partir de R$ 2.000</p>
            </div>

            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-green-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Code2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sistemas Web</h3>
              <p className="text-gray-600 mb-4">
                CRMs, ERPs, dashboards e sistemas personalizados para sua operação.
              </p>
              <p className="text-green-600 font-bold text-lg">A partir de R$ 8.000</p>
            </div>

            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-purple-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Apps Mobile</h3>
              <p className="text-gray-600 mb-4">
                Aplicativos nativos e híbridos para iOS e Android.
              </p>
              <p className="text-purple-600 font-bold text-lg">A partir de R$ 15.000</p>
            </div>

            <div className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-orange-500 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Layers className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">SaaS Completo</h3>
              <p className="text-gray-600 mb-4">
                Plataformas completas com assinaturas, multi-tenant e escaláveis.
              </p>
              <p className="text-orange-600 font-bold text-lg">A partir de R$ 25.000</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
            <p className="text-blue-800 text-lg">
              <strong>Projeto diferente?</strong> Me conta sua ideia.
              Faço um orçamento personalizado sem compromisso.
            </p>
          </div>
        </div>
      </section>

      {/* Dor - O que você perde */}
      <section id="sobre" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enquanto você espera, seu concorrente age.
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Cada dia sem o sistema certo é dinheiro escorrendo pelo ralo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
              <div className="text-red-400 text-5xl font-bold mb-4">3h</div>
              <p className="text-gray-300">
                É o tempo médio que você <strong>desperdiça por dia</strong> em processos
                manuais que um software resolveria em segundos.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
              <div className="text-red-400 text-5xl font-bold mb-4">23%</div>
              <p className="text-gray-300">
                Das vendas são <strong>perdidas</strong> por falta de um sistema
                que organize seus leads e automatize o follow-up.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
              <div className="text-red-400 text-5xl font-bold mb-4">R$</div>
              <p className="text-gray-300">
                Quanto você já <strong>deixou na mesa</strong> por não ter a ferramenta
                certa para escalar seu negócio?
              </p>
            </div>
          </div>

          {/* Garantia */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-white" size={64} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Minha garantia: Ou funciona, ou você não paga.
                </h3>
                <p className="text-green-100 text-lg mb-6">
                  Simples assim. Se na entrega o software não fizer exatamente o que foi combinado,
                  você recebe <strong>100% do seu dinheiro de volta</strong>. Sem burocracia, sem enrolação.
                </p>
                <p className="text-green-200">
                  Por que eu ofereço isso? Porque eu sei que vou entregar. E você precisa
                  saber que não tem risco nenhum em começar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escassez */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="text-white" size={40} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Aceito apenas 3 projetos por mês.
                </h3>
                <p className="text-amber-100 text-lg">
                  Qualidade exige foco. Prefiro entregar perfeito do que entregar rápido e mal feito.
                </p>
              </div>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition flex items-center gap-2 whitespace-nowrap"
            >
              Garantir Minha Vaga
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <Rocket className="mx-auto text-white mb-6" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos construir algo incrível?
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            Me conta sua ideia. A primeira conversa é sem compromisso —
            e você já sai com uma visão clara de como posso te ajudar.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition"
          >
            <MessageCircle size={28} />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Fale Comigo</h2>
            <p className="text-gray-600">
              Escolha o canal que preferir. Respondo rápido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-green-50 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600">(48) 99864-9898</p>
            </a>

            <a
              href="mailto:contato@bsdeveloper.com.br"
              className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 hover:shadow-lg transition"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">contato@bsdeveloper.com.br</p>
            </a>

            <div className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Localização</h3>
              <p className="text-gray-600 text-center">
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
            <div className="text-2xl font-bold mb-4 md:mb-0 flex items-center gap-2">
              <Code2 size={28} className="text-blue-400" />
              BS<span className="text-blue-400">DEVELOPER</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2026 BSDEVELOPER. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">
                Capivari de Baixo - SC | CNPJ: 26.630.862/0001-91
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
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition hover:scale-110 z-50"
      >
        <MessageCircle className="text-white" size={32} />
      </a>
    </main>
  );
}
