import fs from 'fs';

const siteConfig = {
  name: "Júnior Rêgo Advocacia",
  whatsappNumber: "5586999999999",
  phoneDisplay: "(86) 99999-9999",
  address: "Esperantina, PI"
};

const head = (title) => `
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | ${siteConfig.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/src/style.css">
  <meta name="description" content="Atuação jurídica estratégica, responsável e próxima em Esperantina e região norte do Piauí.">
</head>
`;

const nav = `
<header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <a href="/index.html" class="flex items-center">
        <span class="font-serif text-xl font-bold text-neutral-900">Júnior Rêgo<br><span class="text-sm font-sans font-normal text-neutral-500 uppercase tracking-widest">Advocacia</span></span>
      </a>
      <nav class="hidden md:flex space-x-8">
        <a href="/index.html" class="text-neutral-600 hover:text-neutral-900 font-medium text-sm transition-colors">Início</a>
        <a href="/sobre.html" class="text-neutral-600 hover:text-neutral-900 font-medium text-sm transition-colors">O Escritório</a>
        <a href="/areas.html" class="text-neutral-600 hover:text-neutral-900 font-medium text-sm transition-colors">Áreas de Atuação</a>
        <a href="/equipe.html" class="text-neutral-600 hover:text-neutral-900 font-medium text-sm transition-colors">Equipe</a>
        <a href="/conteudos.html" class="text-neutral-600 hover:text-neutral-900 font-medium text-sm transition-colors">Conteúdos</a>
        <a href="/contato.html" class="text-neutral-600 hover:text-neutral-900 font-medium text-sm transition-colors">Contato</a>
      </nav>
      <div class="hidden md:flex">
        <a href="https://wa.me/${siteConfig.whatsappNumber}?text=Ol%C3%A1%2C%20encontrei%20o%20escrit%C3%B3rio%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico." target="_blank" rel="noopener noreferrer" class="bg-neutral-900 text-white px-6 py-2.5 rounded-sm font-medium text-sm hover:bg-neutral-800 transition-colors">
          Falar com o escritório
        </a>
      </div>
      <!-- Mobile menu button -->
      <button id="mobile-menu-btn" class="md:hidden text-neutral-600 p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>
  <!-- Mobile Menu Panel -->
  <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-neutral-100 absolute w-full left-0 top-20">
    <div class="px-4 pt-2 pb-6 space-y-2">
      <a href="/index.html" class="block px-3 py-2 text-neutral-600 font-medium">Início</a>
      <a href="/sobre.html" class="block px-3 py-2 text-neutral-600 font-medium">O Escritório</a>
      <a href="/areas.html" class="block px-3 py-2 text-neutral-600 font-medium">Áreas de Atuação</a>
      <a href="/equipe.html" class="block px-3 py-2 text-neutral-600 font-medium">Equipe</a>
      <a href="/conteudos.html" class="block px-3 py-2 text-neutral-600 font-medium">Conteúdos</a>
      <a href="/contato.html" class="block px-3 py-2 text-neutral-600 font-medium">Contato</a>
      <a href="https://wa.me/${siteConfig.whatsappNumber}" class="block px-3 py-2 text-neutral-900 font-bold">Falar no WhatsApp</a>
    </div>
  </div>
</header>
`;

const footer = `
<footer class="bg-neutral-950 text-white pt-20 pb-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div class="md:col-span-1">
        <span class="font-serif text-2xl font-bold text-white block mb-4">Júnior Rêgo<br><span class="text-sm font-sans font-normal text-neutral-400 uppercase tracking-widest">Advocacia</span></span>
        <p class="text-neutral-400 text-sm leading-relaxed mb-6">Atuação jurídica estratégica, responsável e próxima.</p>
        <p class="text-neutral-500 text-sm">OAB/PI 18.664</p>
      </div>
      <div>
        <h3 class="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-6">Áreas de Atuação</h3>
        <ul class="space-y-3 text-neutral-400 text-sm">
          <li><a href="/areas.html#criminal" class="hover:text-white transition-colors">Direito Criminal</a></li>
          <li><a href="/areas.html#familia" class="hover:text-white transition-colors">Direito de Família</a></li>
          <li><a href="/areas.html#previdenciario" class="hover:text-white transition-colors">Direito Previdenciário</a></li>
          <li><a href="/areas.html#civil" class="hover:text-white transition-colors">Direito Civil</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-6">Institucional</h3>
        <ul class="space-y-3 text-neutral-400 text-sm">
          <li><a href="/sobre.html" class="hover:text-white transition-colors">O Escritório</a></li>
          <li><a href="/equipe.html" class="hover:text-white transition-colors">Equipe</a></li>
          <li><a href="/conteudos.html" class="hover:text-white transition-colors">Conteúdos</a></li>
          <li><a href="/contato.html" class="hover:text-white transition-colors">Contato</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-sm font-bold uppercase tracking-wider text-neutral-300 mb-6">Contato</h3>
        <ul class="space-y-3 text-neutral-400 text-sm">
          <li>${siteConfig.phoneDisplay}</li>
          <li>[PREENCHER EMAIL]</li>
          <li>${siteConfig.address}</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
      <p>&copy; 2026 Júnior Rêgo Advocacia. Todos os direitos reservados.</p>
      <div class="flex gap-6">
        <a href="/privacidade.html" class="hover:text-neutral-300 transition-colors">Política de Privacidade</a>
        <a href="/termos.html" class="hover:text-neutral-300 transition-colors">Termos de Uso</a>
      </div>
    </div>
    <div class="mt-8 text-center text-xs text-neutral-600 max-w-3xl mx-auto">
      <p>Conteúdo de caráter informativo. A análise jurídica depende das particularidades de cada caso.</p>
    </div>
  </div>
</footer>
<script type="module" src="/src/main.js"></script>
`;

const buildPage = (title, content) => `<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
${head(title)}
<body class="bg-neutral-50 text-neutral-900 font-sans pt-20">
  ${nav}
  <main class="min-h-screen">
    ${content}
  </main>
  ${footer}
</body>
</html>
`;

// Index / Home
const homeContent = `
  <section class="relative py-24 md:py-32 overflow-hidden bg-neutral-950 text-white">
    <div class="absolute inset-0 z-0 opacity-20">
      <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" alt="Escritório" class="w-full h-full object-cover grayscale" />
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-3xl">
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
          Atuação jurídica estratégica, responsável e próxima.
        </h1>
        <p class="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed font-light">
          Orientação e representação jurídica com análise individualizada, comunicação clara e atenção a cada etapa do caso.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="https://wa.me/${siteConfig.whatsappNumber}" class="bg-white text-neutral-900 px-8 py-4 rounded-sm font-medium text-center hover:bg-neutral-100 transition-colors">
            Falar com o escritório
          </a>
          <a href="/areas.html" class="border border-neutral-700 text-white px-8 py-4 rounded-sm font-medium text-center hover:bg-neutral-800 transition-colors">
            Conhecer as áreas de atuação
          </a>
        </div>
        <p class="text-sm text-neutral-400 font-light flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          Atendimento em Esperantina, região norte do Piauí e de forma remota quando aplicável.
        </p>
      </div>
    </div>
  </section>

  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">Áreas de Atuação</h2>
        <div class="w-12 h-1 bg-neutral-900 mx-auto mb-6"></div>
        <p class="text-neutral-600">Apoio jurídico especializado nas principais áreas do direito, com foco na resolução eficiente de conflitos e proteção de direitos.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <a href="/areas.html#criminal" class="group block p-8 border border-neutral-200 hover:border-neutral-900 transition-colors rounded-sm bg-neutral-50 hover:bg-white">
          <div class="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-900 text-white rounded-sm group-hover:bg-neutral-800 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 mb-3">Direito Criminal</h3>
          <p class="text-sm text-neutral-600 leading-relaxed">Atuação em investigações, prisões, audiências, processos criminais, recursos, Tribunal do Júri e execução penal.</p>
        </a>
        <a href="/areas.html#familia" class="group block p-8 border border-neutral-200 hover:border-neutral-900 transition-colors rounded-sm bg-neutral-50 hover:bg-white">
          <div class="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-900 text-white rounded-sm group-hover:bg-neutral-800 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 mb-3">Direito de Família</h3>
          <p class="text-sm text-neutral-600 leading-relaxed">Atuação em divórcio, guarda, alimentos, reconhecimento e dissolução de união estável, adoção e outras questões familiares.</p>
        </a>
        <a href="/areas.html#previdenciario" class="group block p-8 border border-neutral-200 hover:border-neutral-900 transition-colors rounded-sm bg-neutral-50 hover:bg-white">
          <div class="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-900 text-white rounded-sm group-hover:bg-neutral-800 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 mb-3">Direito Previdenciário</h3>
          <p class="text-sm text-neutral-600 leading-relaxed">Orientação e acompanhamento em benefícios previdenciários, aposentadorias, pensões, BPC e revisões.</p>
        </a>
        <a href="/areas.html#civil" class="group block p-8 border border-neutral-200 hover:border-neutral-900 transition-colors rounded-sm bg-neutral-50 hover:bg-white">
          <div class="w-12 h-12 mb-6 flex items-center justify-center bg-neutral-900 text-white rounded-sm group-hover:bg-neutral-800 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 class="text-xl font-bold text-neutral-900 mb-3">Direito Civil</h3>
          <p class="text-sm text-neutral-600 leading-relaxed">Atuação em obrigações, responsabilidade civil, contratos, cobranças, indenizações e conflitos patrimoniais.</p>
        </a>
      </div>
    </div>
  </section>

  <section class="py-20 bg-neutral-100 border-t border-neutral-200">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 class="font-serif text-3xl mb-4 text-neutral-900">Precisa de orientação jurídica?</h2>
      <p class="text-neutral-600 mb-8">Entre em contato para apresentar sua situação e verificar a disponibilidade de atendimento.</p>
      <a href="/contato.html" class="inline-block bg-neutral-900 text-white px-8 py-3 rounded-sm font-medium hover:bg-neutral-800 transition-colors">Falar pelo WhatsApp</a>
      <p class="mt-6 text-xs text-neutral-500">O envio da mensagem não estabelece automaticamente relação de contratação.</p>
    </div>
  </section>
`;

const sobreContent = `
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">O Escritório</h1>
      <div class="w-12 h-1 bg-neutral-900 mb-12"></div>
      
      <div class="prose prose-neutral max-w-none text-neutral-700">
        <p class="text-lg leading-relaxed mb-6">
          A Júnior Rêgo Advocacia atua com atendimento jurídico personalizado, responsável e estratégico. Cada demanda é analisada de forma individualizada, com comunicação clara sobre possibilidades, riscos e próximos passos.
        </p>
        
        <p class="leading-relaxed mb-6">
          Com sede em Esperantina, no Piauí, nosso escritório dedica-se a prestar serviços jurídicos de excelência, fundamentados na ética e no compromisso inabalável com os interesses de nossos clientes.
        </p>
        
        <h2 class="font-serif text-2xl text-neutral-900 mt-12 mb-6">Nosso Posicionamento</h2>
        <ul class="space-y-4 list-disc pl-5">
          <li><strong>Atendimento individualizado:</strong> Cada caso recebe a atenção dedicada necessária para a melhor resolução.</li>
          <li><strong>Comunicação clara:</strong> Evitamos o "juridiquês" excessivo ao explicar o processo, garantindo que você compreenda cada etapa.</li>
          <li><strong>Análise estratégica:</strong> Avaliamos todas as opções viáveis antes de propor o melhor caminho, seja judicial ou extrajudicial.</li>
          <li><strong>Presença regional:</strong> Forte atuação em Esperantina e no norte do Piauí, com estrutura para atendimento remoto seguro e eficiente.</li>
        </ul>
      </div>
    </div>
  </section>
`;

const equipeContent = `
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">Equipe</h1>
      <div class="w-12 h-1 bg-neutral-900 mb-12"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-neutral-50 p-8 rounded-sm border border-neutral-200">
        <div class="aspect-[3/4] bg-neutral-200 rounded-sm overflow-hidden flex items-center justify-center text-neutral-400">
          <span class="text-sm">[FOTO DO ADVOGADO]</span>
        </div>
        <div>
          <h2 class="font-serif text-3xl text-neutral-900 mb-2">Francisco das Chagas Rêgo Júnior</h2>
          <p class="text-neutral-500 font-medium mb-6">Advogado • OAB/PI 18.664</p>
          <p class="text-neutral-700 leading-relaxed mb-6">
            Profissional com atuação pautada na ética, responsabilidade e na busca incansável pela proteção dos direitos de seus clientes. Destaca-se pela comunicação clara e pelo acompanhamento próximo de cada processo, garantindo que o cliente esteja sempre informado sobre o andamento de sua demanda.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 text-xs rounded-sm">Direito Criminal</span>
            <span class="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 text-xs rounded-sm">Direito de Família</span>
            <span class="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 text-xs rounded-sm">Direito Previdenciário</span>
            <span class="px-3 py-1 bg-white border border-neutral-300 text-neutral-700 text-xs rounded-sm">Direito Civil</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const areasContent = `
  <section class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">Áreas de Atuação</h1>
      <div class="w-12 h-1 bg-neutral-900 mb-16"></div>
      
      <div class="space-y-24">
        <div id="criminal" class="scroll-mt-32">
          <h2 class="font-serif text-3xl text-neutral-900 mb-6">Direito Criminal</h2>
          <p class="text-lg text-neutral-700 mb-6">Atuação diligente na defesa dos direitos e garantias fundamentais.</p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-600 mb-8 list-disc pl-5">
            <li>Acompanhamento em Delegacias e Audiências de Custódia</li>
            <li>Defesa em Ações Penais e Tribunal do Júri</li>
            <li>Recursos e Habeas Corpus</li>
            <li>Execução Penal</li>
          </ul>
        </div>
        
        <div class="w-full h-px bg-neutral-200"></div>
        
        <div id="familia" class="scroll-mt-32">
          <h2 class="font-serif text-3xl text-neutral-900 mb-6">Direito de Família</h2>
          <p class="text-lg text-neutral-700 mb-6">Orientação humanizada em questões familiares e sucessórias.</p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-600 mb-8 list-disc pl-5">
            <li>Divórcio e Dissolução de União Estável</li>
            <li>Pensão Alimentícia (Fixação, Revisão e Execução)</li>
            <li>Guarda e Convivência Familiar</li>
            <li>Inventários e Planejamento Sucessório</li>
          </ul>
        </div>

        <div class="w-full h-px bg-neutral-200"></div>
        
        <div id="previdenciario" class="scroll-mt-32">
          <h2 class="font-serif text-3xl text-neutral-900 mb-6">Direito Previdenciário</h2>
          <p class="text-lg text-neutral-700 mb-6">Busca pela efetivação de direitos sociais junto ao INSS.</p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-600 mb-8 list-disc pl-5">
            <li>Aposentadorias (Idade, Tempo de Contribuição, Especial)</li>
            <li>Benefícios por Incapacidade (Auxílio-Doença, Invalidez)</li>
            <li>Pensão por Morte</li>
            <li>Benefício de Prestação Continuada (BPC/LOAS)</li>
          </ul>
        </div>

        <div class="w-full h-px bg-neutral-200"></div>
        
        <div id="civil" class="scroll-mt-32">
          <h2 class="font-serif text-3xl text-neutral-900 mb-6">Direito Civil</h2>
          <p class="text-lg text-neutral-700 mb-6">Resolução de conflitos patrimoniais e obrigacionais.</p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-neutral-600 mb-8 list-disc pl-5">
            <li>Contratos (Elaboração e Revisão)</li>
            <li>Responsabilidade Civil e Indenizações</li>
            <li>Cobranças Judiciais e Extrajudiciais</li>
            <li>Direitos do Consumidor</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
`;

const conteudosContent = `
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="font-serif text-4xl md:text-5xl text-neutral-900 mb-8">Conteúdos</h1>
      <div class="w-12 h-1 bg-neutral-900 mb-12"></div>
      
      <div class="bg-neutral-50 p-8 rounded-sm border border-neutral-200 text-center">
        <svg class="w-12 h-12 text-neutral-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
        <h3 class="font-serif text-2xl text-neutral-900 mb-2">Novos artigos em breve</h3>
        <p class="text-neutral-600">Acompanhe nosso site para publicações jurídicas informativas.</p>
      </div>
    </div>
  </section>
`;

const contatoContent = `
  <section class="py-24 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
          <h1 class="font-serif text-4xl text-neutral-900 mb-6">Contato</h1>
          <div class="w-12 h-1 bg-neutral-900 mb-10"></div>
          <p class="text-neutral-600 mb-8">Entre em contato para apresentar sua situação e verificar a disponibilidade de atendimento. Responderemos o mais breve possível.</p>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="mt-1 bg-neutral-100 p-3 rounded-sm"><svg class="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div>
              <div>
                <h3 class="font-bold text-neutral-900">Telefone / WhatsApp</h3>
                <p class="text-neutral-600">${siteConfig.phoneDisplay}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="mt-1 bg-neutral-100 p-3 rounded-sm"><svg class="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
              <div>
                <h3 class="font-bold text-neutral-900">Localização</h3>
                <p class="text-neutral-600">${siteConfig.address}</p>
                <p class="text-sm text-neutral-500 mt-1">Atendimento presencial mediante agendamento.</p>
              </div>
            </div>
          </div>
          
          <div class="mt-12">
            <a href="https://wa.me/${siteConfig.whatsappNumber}" class="inline-flex items-center justify-center gap-2 w-full bg-neutral-900 text-white px-6 py-4 rounded-sm font-medium hover:bg-neutral-800 transition-colors">
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div class="bg-neutral-50 p-8 rounded-sm border border-neutral-200">
          <h2 class="font-serif text-2xl text-neutral-900 mb-6">Envie uma mensagem</h2>
          <form id="contact-form" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">Nome completo</label>
              <input type="text" required class="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all">
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">Telefone / WhatsApp</label>
              <input type="tel" required class="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all">
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">Área de interesse</label>
              <select class="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all">
                <option>Direito Criminal</option>
                <option>Direito de Família</option>
                <option>Direito Previdenciário</option>
                <option>Direito Civil</option>
                <option>Outros</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-1">Mensagem (breve relato)</label>
              <textarea rows="4" required class="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 outline-none transition-all"></textarea>
            </div>
            <div class="pt-2">
              <button type="submit" class="w-full bg-neutral-900 text-white px-6 py-3 rounded-sm font-medium hover:bg-neutral-800 transition-colors">Enviar Mensagem</button>
            </div>
            <p class="text-xs text-neutral-500 mt-4">Não envie documentos sigilosos ou informações sensíveis pelo formulário inicial.</p>
          </form>
        </div>
      </div>
    </div>
  </section>
`;

const privacidadeContent = `
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="font-serif text-4xl text-neutral-900 mb-8">Política de Privacidade</h1>
      <div class="w-12 h-1 bg-neutral-900 mb-12"></div>
      
      <div class="prose prose-neutral max-w-none text-neutral-700">
        <p>A Júnior Rêgo Advocacia está comprometida com a proteção de sua privacidade e de seus dados pessoais. Esta política descreve como coletamos e utilizamos as informações inseridas neste site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
        
        <h3 class="font-bold text-neutral-900 mt-6 mb-2">1. Coleta de Dados</h3>
        <p>Coletamos apenas os dados essenciais para viabilizar o contato inicial através do nosso formulário, tais como: nome, telefone e área de interesse.</p>

        <h3 class="font-bold text-neutral-900 mt-6 mb-2">2. Uso dos Dados</h3>
        <p>Os dados fornecidos serão utilizados exclusivamente para responder à sua solicitação de contato e prestar informações sobre nossos serviços jurídicos. Não compartilhamos, vendemos ou repassamos seus dados a terceiros.</p>

        <h3 class="font-bold text-neutral-900 mt-6 mb-2">3. Armazenamento e Segurança</h3>
        <p>Adotamos medidas de segurança adequadas para proteger seus dados pessoais contra acessos não autorizados, perdas ou alterações. Os dados são mantidos apenas pelo tempo necessário para o cumprimento das finalidades descritas nesta política.</p>
      </div>
    </div>
  </section>
`;

const termosContent = `
  <section class="py-24 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="font-serif text-4xl text-neutral-900 mb-8">Termos de Uso</h1>
      <div class="w-12 h-1 bg-neutral-900 mb-12"></div>
      
      <div class="prose prose-neutral max-w-none text-neutral-700">
        <p>Bem-vindo ao site da Júnior Rêgo Advocacia. Ao acessar e utilizar este site, você concorda com os termos aqui estabelecidos.</p>
        
        <h3 class="font-bold text-neutral-900 mt-6 mb-2">1. Natureza Informativa</h3>
        <p>Todo o conteúdo disponibilizado neste site possui caráter exclusivamente informativo. Nenhuma informação aqui contida constitui parecer ou orientação jurídica específica para casos concretos. A análise jurídica de qualquer situação depende da consulta formal com o advogado e da avaliação das particularidades do caso.</p>

        <h3 class="font-bold text-neutral-900 mt-6 mb-2">2. Relação Cliente-Advogado</h3>
        <p>O envio de mensagens pelo formulário de contato ou WhatsApp não estabelece automaticamente uma relação de prestação de serviços jurídicos (cliente-advogado) e não implica na aceitação da causa por parte do escritório.</p>

        <h3 class="font-bold text-neutral-900 mt-6 mb-2">3. Propriedade Intelectual</h3>
        <p>Todos os textos, logotipos e elementos visuais deste site são de propriedade exclusiva da Júnior Rêgo Advocacia, sendo vedada a reprodução total ou parcial sem autorização prévia.</p>
      </div>
    </div>
  </section>
`;

const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if(btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  const form = document.getElementById('contact-form');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Formulário enviado com sucesso. Retornaremos o contato em breve.');
      form.reset();
    });
  }
});
`;

fs.writeFileSync('index.html', buildPage('Início', homeContent));
fs.writeFileSync('sobre.html', buildPage('O Escritório', sobreContent));
fs.writeFileSync('areas.html', buildPage('Áreas de Atuação', areasContent));
fs.writeFileSync('equipe.html', buildPage('Equipe', equipeContent));
fs.writeFileSync('conteudos.html', buildPage('Conteúdos', conteudosContent));
fs.writeFileSync('contato.html', buildPage('Contato', contatoContent));
fs.writeFileSync('privacidade.html', buildPage('Política de Privacidade', privacidadeContent));
fs.writeFileSync('termos.html', buildPage('Termos de Uso', termosContent));

fs.mkdirSync('src', { recursive: true });
fs.writeFileSync('src/main.js', jsContent);
fs.writeFileSync('src/style.css', '@import "tailwindcss";');
