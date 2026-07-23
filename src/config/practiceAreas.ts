import { Scale, Users, FileText, Briefcase } from "lucide-react";

export const practiceAreas = [
  {
    id: "direito-criminal",
    title: "Direito Criminal",
    slug: "direito-criminal",
    description: "Atuação em investigações, prisões, audiências, processos criminais, recursos, Tribunal do Júri e execução penal.",
    icon: Scale,
    situations: [
      "Audiência de custódia",
      "Prisão em flagrante",
      "Pedido de liberdade (Habeas Corpus)",
      "Inquérito policial",
      "Ação penal",
      "Recursos",
      "Tribunal do Júri",
      "Execução penal",
      "Medidas protetivas",
      "Crimes patrimoniais",
      "Crimes de trânsito"
    ],
    faqs: [
      { question: "Fui intimado para comparecer à delegacia, o que fazer?", answer: "É fundamental estar acompanhado de um advogado para garantir que seus direitos sejam respeitados e para evitar declarações que possam prejudicá-lo futuramente." },
      { question: "Como funciona a audiência de custódia?", answer: "É o momento em que a pessoa presa em flagrante é apresentada ao juiz, que analisará a legalidade da prisão e a necessidade de mantê-la ou conceder liberdade provisória." }
    ]
  },
  {
    id: "direito-de-familia",
    title: "Direito de Família",
    slug: "direito-de-familia",
    description: "Atuação em divórcio, guarda, alimentos, reconhecimento e dissolução de união estável, adoção e outras questões familiares.",
    icon: Users,
    situations: [
      "Divórcio (judicial e extrajudicial)",
      "Reconhecimento e dissolução de união estável",
      "Ação de alimentos (pensão alimentícia)",
      "Guarda e regulamentação de convivência",
      "Investigação de paternidade",
      "Adoção",
      "Partilha de bens",
      "Interdição e curatela"
    ],
    faqs: [
      { question: "É possível fazer o divórcio no cartório?", answer: "Sim, caso não haja filhos menores ou incapazes e as partes estejam em acordo (divórcio consensual). Em outras situações, será necessário o processo judicial." },
      { question: "Como é definida a guarda dos filhos?", answer: "A prioridade é o interesse e o bem-estar da criança. A guarda compartilhada é a regra, mas a guarda unilateral pode ser estabelecida se houver acordo ou motivos graves." }
    ]
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário",
    slug: "direito-previdenciario",
    description: "Orientação e acompanhamento em benefícios previdenciários, aposentadorias, pensões, BPC e revisões.",
    icon: FileText,
    situations: [
      "Aposentadoria por idade",
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria especial",
      "Aposentadoria por invalidez",
      "Auxílio-doença",
      "Pensão por morte",
      "Salário-maternidade",
      "BPC / LOAS",
      "Planejamento previdenciário",
      "Revisões de benefícios"
    ],
    faqs: [
      { question: "Posso pedir aposentadoria se nunca contribuí?", answer: "A aposentadoria exige contribuição, mas existe o Benefício de Prestação Continuada (BPC/LOAS) destinado a idosos e pessoas com deficiência em situação de vulnerabilidade, que não exige contribuição prévia." },
      { question: "Meu benefício foi negado pelo INSS, e agora?", answer: "É possível apresentar recurso administrativo no próprio INSS ou ingressar com uma ação judicial para garantir a concessão do benefício." }
    ]
  },
  {
    id: "direito-civil",
    title: "Direito Civil",
    slug: "direito-civil",
    description: "Atuação em obrigações, responsabilidade civil, contratos, cobranças, indenizações e conflitos patrimoniais.",
    icon: Briefcase,
    situations: [
      "Elaboração e análise de contratos",
      "Ações de cobrança e execução",
      "Indenização por danos morais e materiais",
      "Responsabilidade civil",
      "Questões imobiliárias e possessórias",
      "Inventário e planejamento sucessório",
      "Direito do Consumidor"
    ],
    faqs: [
      { question: "Quanto tempo tenho para cobrar uma dívida?", answer: "O prazo varia de acordo com a natureza da dívida (ex: 5 anos para boletos e notas promissórias), sendo essencial consultar um advogado para não perder o direito (prescrição)." },
      { question: "Tive meu nome negativado indevidamente. O que fazer?", answer: "É possível exigir judicialmente a retirada do nome dos cadastros de restrição, além de buscar indenização pelos danos morais sofridos." }
    ]
  }
];
