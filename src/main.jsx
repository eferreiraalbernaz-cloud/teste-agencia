import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const copy = {
  pt: {
    common: {
      navigation: 'Navegação principal', studio: 'Estúdio', services: 'Serviços', projects: 'Projetos',
      talk: 'Vamos conversar', openMenu: 'Abrir navegação', closeMenu: 'Fechar navegação',
      language: 'Idioma', footer: 'Estúdio digital independente · Brasil', whatsapp: 'WhatsApp',
      portfolio: 'Portfólio', back: '← Portfólio ALBR.', fictional: 'PROJETO CONCEITUAL FICTÍCIO',
      contact: 'Falar com a ALBR. ↗', demoDefault: 'Quero conhecer o programa',
      demoLabel: 'CONCEITO DEMONSTRATIVO FICTÍCIO', otherProjects: '← Conhecer outros projetos',
    },
    projects: [
      { n: '01', title: 'Código de Origem', kind: 'Educação profissional', desc: 'Uma experiência de aprendizagem para quem quer construir uma carreira em tecnologia.', url: '/educacao/', theme: 'edu', label: 'FORMAÇÃO EM TECNOLOGIA', tagline: 'Aprenda a construir.' },
      { n: '02', title: 'Órbita', kind: 'Empreendedorismo', desc: 'Estratégia e direção para negócios digitais em movimento.', url: '/empreendedorismo/', theme: 'biz', label: 'MENTORIA DE NEGÓCIOS', tagline: 'Negócios em movimento.' },
      { n: '03', title: 'Entretempo', kind: 'Desenvolvimento pessoal', desc: 'Um convite a trabalhar com mais intenção e menos ruído.', url: '/desenvolvimento-pessoal/', theme: 'life', label: 'PROGRAMA DE PRODUTIVIDADE', tagline: 'Faça espaço para o que importa.' },
    ],
    home: {
      heroKicker: 'ESTÚDIO DIGITAL INDEPENDENTE', region: 'BRASIL · 2026',
      title: <>Ideias que<br />ganham <i>presença.</i></>,
      description: <>Experiências digitais construídas para se destacar.<br />Estratégia, design e desenvolvimento em uma só direção.</>,
      explore: 'Explore o trabalho',
      introLabel: '01 / O ESTÚDIO', introTitle: <>Pequeno por escolha.<br /><span>Grande na intenção.</span></>,
      introCopy: ['A ALBR. é um estúdio digital independente que transforma boas ideias em experiências online claras, envolventes e feitas para durar.', 'Trabalhamos especialmente com criadores de cursos, mentores e empreendedores que querem apresentar seu trabalho com mais força.'],
      servicesLabel: '02 / O QUE FAZEMOS', servicesTitle: <>Estratégia, forma<br />e função.</>,
      services: ['Landing pages de alta clareza', 'Direção de arte e identidade digital', 'Design responsivo e desenvolvimento', 'Estrutura de conteúdo e conversão'],
      workLabel: '03 / PROJETOS CONCEITUAIS', workTitle: <>Três ideias.<br /><i>Três mundos.</i></>,
      workDesc: 'Estudos demonstrativos fictícios para mostrar como uma boa experiência pode ganhar formas diferentes.',
      fictional: 'CONCEITO FICTÍCIO', exploreProject: 'Explorar projeto',
      processLabel: '04 / COMO ACONTECE', processTitle: <>Do primeiro papo<br />à tela no ar.</>,
      steps: [['Conversa', 'Entendemos seu momento, seu público e o que precisa acontecer.'], ['Direção', 'Definimos mensagem, estrutura e linguagem visual antes de desenhar.'], ['Construção', 'Desenhamos e desenvolvemos uma experiência responsiva e acessível.'], ['Entrega', 'Publicamos o projeto e deixamos tudo organizado para evoluir.']],
      faqLabel: '05 / PERGUNTAS', faqTitle: 'Sem mistério.',
      faqs: [['Para quem é a ALBR.?', 'Para criadores de cursos, mentores e empreendedores digitais que precisam apresentar uma oferta com clareza.'], ['O que está incluído?', 'O escopo varia por projeto e pode incluir estratégia de conteúdo, direção de arte, design e desenvolvimento da landing page.'], ['Quanto tempo leva?', 'Prazo e etapas são definidos depois de entendermos o escopo e os materiais disponíveis.'], ['Como começo?', 'Envie uma mensagem contando um pouco sobre o projeto. Retornamos para entender se faz sentido trabalharmos juntos.']],
      contactLabel: '06 / PRÓXIMO PASSO', contactTitle: <>Tem uma ideia<br />para colocar <i>no mundo?</i></>,
      contactDesc: 'Conte um pouco sobre o que você está construindo.', contactButton: 'Conversar pelo WhatsApp',
    },
    edu: {
      nav: 'CÓDIGO DE ORIGEM', brand: 'FORMAÇÃO PROFISSIONAL', heroPill: 'TECNOLOGIA PARA NOVOS COMEÇOS',
      title: <>Seu próximo<br />capítulo começa<br /><em>com código.</em></>,
      heroDesc: 'Uma formação prática em desenvolvimento web para quem quer transformar curiosidade em competência.',
      cta: 'Conheça a formação', codeIdea: '“sua próxima versão”', stamp: <>APRENDER<br />FAZENDO ↘</>,
      aboutLabel: '01 — O CURSO', aboutTitle: <>Aprender tecnologia<br />é aprender a <i>criar.</i></>,
      aboutText: 'Uma jornada de fundamentos, projetos e repertório para dar os primeiros passos no desenvolvimento web com segurança e autonomia.',
      benefitsLabel: '02 — O QUE VOCÊ DESENVOLVE',
      benefits: [['Fundamentos sólidos', 'Entenda como a web funciona e construa uma base que acompanha você.'], ['Prática com propósito', 'Exercícios e projetos autorais conectam conceito e aplicação.'], ['Repertório profissional', 'Aprenda a ler interfaces, organizar código e comunicar suas escolhas.']],
      syllabusLabel: '03 — PERCURSO', syllabusTitle: <>Do primeiro elemento<br />à experiência completa.</>,
      syllabus: ['A web por dentro · HTML e estrutura', 'Estilo e sistemas · CSS responsivo', 'Interação · JavaScript essencial', 'Projeto final · Uma página do início ao fim'],
      methodLabel: '04 — METODOLOGIA', methodTitle: <>Menos aula passiva.<br /><i>Mais mão na massa.</i></>,
      methodText: 'Aulas curtas introduzem cada conceito. Na sequência, você experimenta, recebe orientação ilustrativa e aplica o que aprendeu em projetos progressivos. Ritmo e formato deste conceito não representam uma oferta real.',
      instructorLabel: '05 — QUEM ENSINA', illustrative: 'PERFIL ILUSTRATIVO',
      instructorTitle: <>Uma pessoa<br />que também começou.</>,
      instructorText: 'O perfil de instrutor desta demonstração é fictício e ilustrativo. Em um projeto real, esta área apresentaria a trajetória e abordagem de quem conduz o curso.',
      faqLabel: '06 — DÚVIDAS', faqTitle: 'Antes de dar o próximo passo.',
      faqs: [['Preciso saber programar?', 'Não. O percurso começa pelos fundamentos e avança com prática guiada.'], ['O curso garante uma vaga?', 'Não há promessa de emprego. O programa oferece conteúdo e prática para apoiar seu desenvolvimento.'], ['Quando posso começar?', 'Esta página é um conceito demonstrativo. Datas e inscrições não estão disponíveis.']],
      noteTitle: 'Esta experiência não oferece inscrições.', noteText: 'O conteúdo e a marca foram criados para demonstrar uma possibilidade de landing page.',
    },
    biz: {
      nav: 'ÓRBITA / MENTORIA', eyebrow: 'ÓRBITA — ESTRATÉGIA PARA NEGÓCIOS DIGITAIS',
      title: <>Todo negócio<br />precisa de uma<br /><i>órbita própria.</i></>,
      heroText: 'Uma mentoria estratégica para organizar decisões, dar forma à oferta e construir o próximo movimento com intenção.',
      cta: 'Explorar a mentoria', foot: 'ESTRATÉGIA SEM FÓRMULAS MÁGICAS', footNote: 'CONCEITO FICTÍCIO · 2026',
      proposalLabel: '01 / A PROPOSTA', proposalTitle: <>Clareza para escolher<br />o que vem <i>agora.</i></>,
      proposalText: 'A Órbita propõe um espaço de trabalho para olhar o negócio com distância, encontrar prioridades e transformar intenção em decisões concretas. Sem atalhos universais. Sem promessas de resultado.',
      pillarsLabel: '02 / EM QUE TRABALHAMOS',
      pillars: [['Posicionamento', 'Articule valor, público e diferenciais com mais nitidez.'], ['Oferta', 'Organize a experiência que você entrega e como a apresenta.'], ['Operação', 'Enxergue processos e escolhas que sustentam o próximo ciclo.']],
      modulesLabel: '03 / CICLOS DA MENTORIA', modulesTitle: <>Um caminho<br />com intenção.</>,
      modules: [['Mapa atual', 'Contexto, desafios e objetivos do negócio.'], ['Direção estratégica', 'Hipóteses, prioridades e decisões com critério.'], ['Plano de ação', 'Próximos passos realistas e uma forma de acompanhar.']],
      audienceLabel: '04 / PARA QUEM FAZ SENTIDO', audienceTitle: <>Para quem está pronto<br />para pensar com <i>calma.</i></>,
      audience: ['Quem está estruturando uma oferta digital', 'Quem quer rever prioridades e posicionamento', 'Quem busca uma conversa estratégica sem receita pronta'],
      faqLabel: '05 / PERGUNTAS FREQUENTES',
      faqs: [['Para quem é a Órbita?', 'Para pessoas construindo ou estruturando um negócio digital que buscam clareza para decidir próximos passos.'], ['A mentoria garante resultados financeiros?', 'Não. Não há promessas de faturamento ou resultados. A demonstração apresenta um formato de acompanhamento estratégico.'], ['Como funciona o acompanhamento?', 'Formato, duração e agenda seriam definidos pela oferta real. Esta página é apenas um conceito fictício.']],
      noteTitle: <>Uma ideia de experiência.<br />Sem oferta comercial ativa.</>,
      noteText: 'Esta página não vende mentoria nem apresenta resultados ou depoimentos reais.',
    },
    life: {
      nav: 'ENTRETEMPO / PROGRAMA', label: 'UM PROGRAMA PARA TRABALHAR E VIVER COM PRESENÇA',
      imageAlt: 'Luz suave do amanhecer sobre uma paisagem montanhosa', imageCaption: <>UM POUCO DE ESPAÇO<br />MUDA O OLHAR.</>,
      title: <>Seu tempo<br />também é<br /><i>seu.</i></>,
      heroText: 'Um programa de produtividade consciente para fazer espaço para o que importa — uma escolha de cada vez.',
      cta: 'Conheça a proposta', credit: 'FOTO: JEREMY BISHOP / UNSPLASH',
      introLabel: '02 — UMA OUTRA RELAÇÃO COM O DIA', introTitle: <>Produtividade pode<br />ter <i>respiro.</i></>,
      introText: 'Entretempo é uma jornada para observar como usamos atenção, energia e tempo. Com práticas simples e reflexão guiada, você experimenta um jeito mais intencional de organizar o cotidiano.',
      benefitsLabel: '03 — O QUE PODE MUDAR',
      benefits: [['Atenção', 'Reconhecer o que merece seu foco neste momento.'], ['Ritmo', 'Criar uma rotina possível, sem perseguir perfeição.'], ['Escolhas', 'Abrir espaço para agir de acordo com suas prioridades.']],
      contentLabel: '04 — A JORNADA', contentTitle: <>Quatro temas.<br />Um cotidiano mais seu.</>,
      content: [['Observar', 'Perceber hábitos, interrupções e pontos de energia.'], ['Priorizar', 'Distinguir urgência, importância e intenção.'], ['Experimentar', 'Testar acordos e práticas pequenas no seu dia real.'], ['Integrar', 'Rever aprendizados e levar adiante o que funciona.']],
      quote: <>“Não é sobre caber mais no dia.<br />É sobre caber melhor nele.”</>,
      methodLabel: '05 — METODOLOGIA', methodText: 'Conteúdos breves, exercícios de observação e momentos de revisão. O método combina reflexão e prática leve para que cada pessoa encontre ajustes compatíveis com sua realidade.',
      faqLabel: '06 — PERGUNTAS FREQUENTES',
      faqs: [['O Entretempo é terapia?', 'Não. O conceito apresenta um programa educacional de produtividade e reflexão, sem substituir acompanhamento psicológico.'], ['Preciso mudar toda a minha rotina?', 'A proposta parte da rotina real e convida a experimentar pequenos ajustes com intenção.'], ['Quando começam as turmas?', 'Não há turma ou inscrição ativa. Esta página é uma demonstração fictícia.']],
      noteTitle: <>Uma pausa para imaginar<br />outras possibilidades.</>,
      noteText: 'Marca, programa e conteúdo fictícios. Nenhuma inscrição está disponível.',
    },
  },
  en: {
    common: {
      navigation: 'Main navigation', studio: 'Studio', services: 'Services', projects: 'Projects',
      talk: 'Let’s talk', openMenu: 'Open navigation', closeMenu: 'Close navigation',
      language: 'Language', footer: 'Independent digital studio · Brazil', whatsapp: 'WhatsApp',
      portfolio: 'Portfolio', back: '← ALBR. portfolio', fictional: 'FICTIONAL CONCEPT PROJECT',
      contact: 'Contact ALBR. ↗', demoDefault: 'Explore the program',
      demoLabel: 'FICTIONAL DEMONSTRATION CONCEPT', otherProjects: '← Explore other projects',
    },
    projects: [
      { n: '01', title: 'Code of Origin', kind: 'Professional education', desc: 'A learning experience for people ready to build a career in technology.', url: '/educacao/', theme: 'edu', label: 'TECHNOLOGY TRAINING', tagline: 'Learn to build.' },
      { n: '02', title: 'Orbit', kind: 'Entrepreneurship', desc: 'Strategy and direction for digital businesses in motion.', url: '/empreendedorismo/', theme: 'biz', label: 'BUSINESS MENTORSHIP', tagline: 'Business in motion.' },
      { n: '03', title: 'In Between', kind: 'Personal development', desc: 'An invitation to work with more intention and less noise.', url: '/desenvolvimento-pessoal/', theme: 'life', label: 'PRODUCTIVITY PROGRAM', tagline: 'Make room for what matters.' },
    ],
    home: {
      heroKicker: 'INDEPENDENT DIGITAL STUDIO', region: 'BRAZIL · 2026',
      title: <>Ideas that<br />make a <i>mark.</i></>,
      description: <>Digital experiences, built to stand out.<br />Strategy, design, and development in one clear direction.</>,
      explore: 'Explore our work',
      introLabel: '01 / THE STUDIO', introTitle: <>Small by choice.<br /><span>Big on intention.</span></>,
      introCopy: ['ALBR. is an independent digital studio turning good ideas into clear, engaging online experiences made to last.', 'We work especially with course creators, mentors, and entrepreneurs who want to present their work with more impact.'],
      servicesLabel: '02 / WHAT WE DO', servicesTitle: <>Strategy, form<br />and function.</>,
      services: ['Clear, focused landing pages', 'Art direction and digital identity', 'Responsive design and development', 'Content structure and conversion'],
      workLabel: '03 / CONCEPT PROJECTS', workTitle: <>Three ideas.<br /><i>Three worlds.</i></>,
      workDesc: 'Fictional concept projects showing how a thoughtful digital experience can take different forms.',
      fictional: 'FICTIONAL CONCEPT', exploreProject: 'Explore project',
      processLabel: '04 / HOW IT WORKS', processTitle: <>From our first conversation<br />to launch.</>,
      steps: [['Conversation', 'We learn about your goals, audience, and what the project needs to do.'], ['Direction', 'We define the message, structure, and visual language before design begins.'], ['Build', 'We design and develop a responsive, accessible experience.'], ['Delivery', 'We launch the project and leave everything organized for future updates.']],
      faqLabel: '05 / QUESTIONS', faqTitle: 'Good to know.',
      faqs: [['Who is ALBR. for?', 'Course creators, mentors, and digital entrepreneurs who need to present an offer clearly.'], ['What is included?', 'The scope varies by project and may include content strategy, art direction, design, and landing page development.'], ['How long does it take?', 'We set the timeline and milestones after reviewing the scope and available materials.'], ['How do I get started?', 'Send a message with a little about your project. We’ll follow up to see if it makes sense to work together.']],
      contactLabel: '06 / NEXT STEP', contactTitle: <>Have an idea<br />you’re ready to <i>put out there?</i></>,
      contactDesc: 'Tell us a little about what you’re building.', contactButton: 'Start a WhatsApp conversation',
    },
    edu: {
      nav: 'CODE OF ORIGIN', brand: 'PROFESSIONAL TRAINING', heroPill: 'TECHNOLOGY FOR A FRESH START',
      title: <>Your next<br />chapter starts<br /><em>with code.</em></>,
      heroDesc: 'Hands-on web development training for people ready to turn curiosity into practical skills.',
      cta: 'Explore the course', codeIdea: '“your next version”', stamp: <>LEARN BY<br />BUILDING ↘</>,
      aboutLabel: '01 — THE COURSE', aboutTitle: <>Learning technology<br />means learning to <i>create.</i></>,
      aboutText: 'A path through core concepts, projects, and practical context to help you take your first steps in web development with confidence and independence.',
      benefitsLabel: '02 — WHAT YOU WILL BUILD',
      benefits: [['A strong foundation', 'Understand how the web works and build knowledge you can keep using.'], ['Purposeful practice', 'Exercises and original projects connect concepts with real application.'], ['Professional perspective', 'Learn to read interfaces, organize code, and explain your choices.']],
      syllabusLabel: '03 — THE LEARNING PATH', syllabusTitle: <>From your first element<br />to a complete experience.</>,
      syllabus: ['How the web works · HTML and structure', 'Style and systems · Responsive CSS', 'Interaction · Essential JavaScript', 'Final project · A page from start to finish'],
      methodLabel: '04 — OUR APPROACH', methodTitle: <>Less passive watching.<br /><i>More hands-on work.</i></>,
      methodText: 'Short lessons introduce each concept. Then you experiment, receive illustrative guidance, and apply what you learned in progressively larger projects. The pace and format shown here are not a real course offer.',
      instructorLabel: '05 — YOUR INSTRUCTOR', illustrative: 'ILLUSTRATIVE PROFILE',
      instructorTitle: <>Someone who<br />started out, too.</>,
      instructorText: 'The instructor profile in this demonstration is fictional and illustrative. In a real project, this area would introduce the person’s background and teaching approach.',
      faqLabel: '06 — QUESTIONS', faqTitle: 'Before your next step.',
      faqs: [['Do I need to know how to code?', 'No. The learning path starts with the fundamentals and builds through guided practice.'], ['Does the course guarantee a job?', 'No job is promised. The program offers learning material and practice to support your development.'], ['When can I start?', 'This page is a demonstration concept. Dates and enrollment are not available.']],
      noteTitle: 'Enrollment is not available for this concept.', noteText: 'The content and brand were created to demonstrate one possible landing page.',
    },
    biz: {
      nav: 'ORBIT / MENTORSHIP', eyebrow: 'ORBIT — STRATEGY FOR DIGITAL BUSINESSES',
      title: <>Every business<br />needs its own<br /><i>orbit.</i></>,
      heroText: 'Strategic mentorship to organize decisions, shape your offer, and plan your next move with intention.',
      cta: 'Explore the mentorship', foot: 'STRATEGY WITHOUT MAGIC FORMULAS', footNote: 'FICTIONAL CONCEPT · 2026',
      proposalLabel: '01 / THE APPROACH', proposalTitle: <>Clarity to choose<br />what comes <i>next.</i></>,
      proposalText: 'Orbit creates space to step back, see your business clearly, find priorities, and turn intention into concrete decisions. No universal shortcuts. No promises of results.',
      pillarsLabel: '02 / WHAT WE WORK ON',
      pillars: [['Positioning', 'Bring your value, audience, and strengths into sharper focus.'], ['Your offer', 'Shape the experience you provide and how you present it.'], ['Operations', 'See the processes and choices that can support your next chapter.']],
      modulesLabel: '03 / MENTORSHIP CYCLES', modulesTitle: <>A path<br />with intention.</>,
      modules: [['Current landscape', 'Context, challenges, and business goals.'], ['Strategic direction', 'Hypotheses, priorities, and thoughtful decisions.'], ['Action plan', 'Realistic next steps and a way to keep track.']],
      audienceLabel: '04 / WHO IT IS FOR', audienceTitle: <>For people ready<br />to think it through <i>carefully.</i></>,
      audience: ['People shaping a digital offer', 'People rethinking priorities and positioning', 'People looking for strategic conversation without a one-size-fits-all playbook'],
      faqLabel: '05 / FREQUENTLY ASKED QUESTIONS',
      faqs: [['Who is Orbit for?', 'People building or structuring a digital business who want clarity on what to do next.'], ['Does the mentorship guarantee financial results?', 'No. There are no revenue or results promises. This concept presents a strategic guidance format.'], ['How does the guidance work?', 'Format, duration, and schedule would depend on a real offer. This page is a fictional concept only.']],
      noteTitle: <>An experience concept.<br />No active commercial offer.</>,
      noteText: 'This page does not sell mentorship or present real results or testimonials.',
    },
    life: {
      nav: 'IN BETWEEN / PROGRAM', label: 'A PROGRAM FOR MORE PRESENT WORK AND LIFE',
      imageAlt: 'Soft morning light over a mountain landscape', imageCaption: <>A LITTLE SPACE<br />CHANGES YOUR VIEW.</>,
      title: <>Your time<br />belongs to<br /><i>you, too.</i></>,
      heroText: 'A mindful productivity program to make room for what matters, one choice at a time.',
      cta: 'Explore the program', credit: 'PHOTO: JEREMY BISHOP / UNSPLASH',
      introLabel: '02 — A DIFFERENT RELATIONSHIP WITH YOUR DAY', introTitle: <>Productivity can<br />have <i>room to breathe.</i></>,
      introText: 'In Between is a chance to notice how we use our attention, energy, and time. With simple practices and guided reflection, you can try a more intentional way to organize everyday life.',
      benefitsLabel: '03 — WHAT CAN CHANGE',
      benefits: [['Attention', 'Notice what deserves your focus right now.'], ['Pace', 'Create a routine that works without chasing perfection.'], ['Choices', 'Make room to act in line with your priorities.']],
      contentLabel: '04 — THE JOURNEY', contentTitle: <>Four themes.<br />A day that feels more yours.</>,
      content: [['Notice', 'Recognize habits, interruptions, and moments of energy.'], ['Prioritize', 'Tell urgency, importance, and intention apart.'], ['Experiment', 'Try small practices in the rhythm of your real day.'], ['Integrate', 'Reflect on what you learned and keep what works.']],
      quote: <>“It’s not about fitting more into your day.<br />It’s about feeling more at home in it.”</>,
      methodLabel: '05 — THE APPROACH', methodText: 'Short lessons, observation exercises, and time to reflect. The method brings together reflection and gentle practice so each person can find adjustments that fit real life.',
      faqLabel: '06 — FREQUENTLY ASKED QUESTIONS',
      faqs: [['Is In Between therapy?', 'No. This concept presents an educational program about productivity and reflection. It does not replace mental health care.'], ['Do I need to change my whole routine?', 'The idea starts with your real routine and invites you to try small, intentional adjustments.'], ['When do sessions begin?', 'There are no active sessions or enrollment. This page is a fictional demonstration.']],
      noteTitle: <>A pause to imagine<br />other possibilities.</>,
      noteText: 'The brand, program, and content are fictional. Enrollment is not available.',
    },
  },
};

function getLocale() {
  return new URLSearchParams(window.location.search).get('lang')?.toLowerCase().startsWith('en') ? 'en' : 'pt';
}

function localizedHref(href, lang) {
  if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
  const url = new URL(href, window.location.href);
  if (lang === 'en') url.searchParams.set('lang', 'en-US');
  else url.searchParams.delete('lang');
  return url.pathname + url.search + url.hash;
}

function whatsappUrl(lang) {
  const message = lang === 'en'
    ? 'Hi! I saw ALBR. Agency’s website and would like to talk about a landing page for my project.'
    : 'Oi! Vi o site da ALBR. e quero conversar sobre uma landing page para meu projeto.';
  return 'https://wa.me/5575999280550?text=' + encodeURIComponent(message);
}

function LanguageToggle({ lang, t }) {
  const switchTo = (next) => localizedHref(window.location.pathname + window.location.search + window.location.hash, next);
  return <div className="language-toggle" role="group" aria-label={t.common.language}>
    <a href={switchTo('pt')} aria-current={lang === 'pt' ? 'page' : undefined} lang="pt-BR">PT</a>
    <a href={switchTo('en')} aria-current={lang === 'en' ? 'page' : undefined} lang="en-US">EN</a>
  </div>;
}

function Mark({ lang }) {
  return <a className="brand" href={localizedHref('/', lang)} aria-label={lang === 'en' ? 'ALBR. Agency — home' : 'ALBR. Agency — início'}>
    <img className="mark" src="/albr-logo.png" alt="" />
    <span className="brand-name">ALBR<span>.</span><small>AGENCY</small></span>
  </a>;
}

function Header({ lang, t }) {
  const [open, setOpen] = React.useState(false);
  const closeNav = () => setOpen(false);
  return <header className="header">
    <Mark lang={lang} />
    <nav id="primary-navigation" className={open ? 'open' : ''} aria-label={t.common.navigation}>
      <a href={localizedHref('/#estudio', lang)} onClick={closeNav}>{t.common.studio}</a>
      <a href={localizedHref('/#servicos', lang)} onClick={closeNav}>{t.common.services}</a>
      <a href={localizedHref('/#projetos', lang)} onClick={closeNav}>{t.common.projects}</a>
      <a className="nav-contact" href={localizedHref('/#contato', lang)} onClick={closeNav}>{t.common.talk} <span>↗</span></a>
    </nav>
    <LanguageToggle lang={lang} t={t} />
    <button type="button" className="menu" aria-controls="primary-navigation" aria-expanded={open}
      aria-label={open ? t.common.closeMenu : t.common.openMenu} onClick={() => setOpen(value => !value)}>{open ? '×' : '☰'}</button>
  </header>;
}

function Footer({ lang, t }) {
  return <footer className="footer">
    <Mark lang={lang} />
    <span>{t.common.footer}</span>
    <a href={whatsappUrl(lang)} target="_blank" rel="noreferrer">{t.common.whatsapp} ↗</a>
    <a href={localizedHref('/#projetos', lang)}>{t.common.portfolio} ↑</a>
    <small>© {new Date().getFullYear()} ALBR. Agency</small>
  </footer>;
}

function Preview({ p, lang }) {
  return <div className={'preview ' + p.theme}>
    <div className="preview-top"><span>{p.label}</span><span>{lang === 'en' ? 'CONCEPT' : 'CONCEITO'} {p.n}</span></div>
    <div className="preview-art"><i>{p.theme === 'edu' ? '[ ]' : p.theme === 'biz' ? 'O' : '/ /'}</i><strong>{p.title}</strong><em>{p.tagline}</em></div>
    <div className="preview-bottom"><span>{lang === 'en' ? 'DIGITAL EXPERIENCE' : 'EXPERIÊNCIA DIGITAL'}</span><span>↗</span></div>
  </div>;
}

function Home({ lang, t }) {
  const c = t.home;
  return <div className="home">
    <Header lang={lang} t={t} />
    <main>
      <section className="hero">
        <div className="hero-kicker"><span className="dot" /> {c.heroKicker} <span>{c.region}</span></div>
        <h1>{c.title}</h1>
        <div className="hero-foot"><p>{c.description}</p><a className="circle-link" href={localizedHref('#projetos', lang)}>↓<span>{c.explore}</span></a></div>
        <div className="hero-index">ALBR. — DIGITAL EXPERIENCES / 001</div>
      </section>
      <section className="intro section" id="estudio">
        <div className="eyebrow">{c.introLabel}</div><div><h2>{c.introTitle}</h2><div className="intro-copy">{c.introCopy.map(x => <p key={x}>{x}</p>)}</div></div>
      </section>
      <section className="services section" id="servicos">
        <div className="eyebrow">{c.servicesLabel}</div><div className="services-list"><h2>{c.servicesTitle}</h2>
          {c.services.map((x, i) => <div className="service" key={x}><span>0{i + 1}</span><b>{x}</b><span>↗</span></div>)}
        </div>
      </section>
      <section className="work section" id="projetos">
        <div className="eyebrow">{c.workLabel}</div><div className="work-head"><h2>{c.workTitle}</h2><p>{c.workDesc}</p></div>
        <div className="project-grid">{t.projects.map(p => <article className="project" key={p.n}>
          <a href={localizedHref(p.url, lang)} aria-label={c.exploreProject + ': ' + p.title}><Preview p={p} lang={lang} /></a>
          <div className="project-info"><div><span>{p.kind} · {c.fictional}</span><h3>{p.title}</h3><p>{p.desc}</p></div>
            <a className="text-link" href={localizedHref(p.url, lang)}>{c.exploreProject} <b>↗</b></a>
          </div>
        </article>)}</div>
      </section>
      <section className="process section">
        <div className="eyebrow">{c.processLabel}</div><div><h2>{c.processTitle}</h2>
          <div className="steps">{c.steps.map((s, i) => <div className="step" key={s[0]}><span>0{i + 1}</span><b>{s[0]}</b><p>{s[1]}</p></div>)}</div>
        </div>
      </section>
      <section className="faq section">
        <div className="eyebrow">{c.faqLabel}</div><div><h2>{c.faqTitle}</h2>
          {c.faqs.map(a => <details key={a[0]}><summary>{a[0]}<span>+</span></summary><p>{a[1]}</p></details>)}
        </div>
      </section>
      <section className="contact" id="contato">
        <span className="eyebrow">{c.contactLabel}</span><h2>{c.contactTitle}</h2><p>{c.contactDesc}</p>
        <a className="contact-btn" href={whatsappUrl(lang)} target="_blank" rel="noreferrer">{c.contactButton} <span>↗</span></a><small>+55 75 99928-0550</small>
      </section>
    </main>
    <Footer lang={lang} t={t} />
  </div>;
}

function FAQ({ items }) {
  return <div className="demo-faq">{items.map(q => <details key={q[0]}><summary>{q[0]} <b>＋</b></summary><p>{q[1]}</p></details>)}</div>;
}

function DemoNav({ name, lang, t }) {
  return <div className="demo-nav">
    <a href={localizedHref('/#projetos', lang)}>{t.common.back}</a><span>{t.common.fictional}</span>
    <a className="demo-contact" href={whatsappUrl(lang)} target="_blank" rel="noreferrer">{t.common.contact}</a>
    <b>{name}</b><LanguageToggle lang={lang} t={t} />
  </div>;
}

function DemoCTA({ children, lang, t }) {
  return <a className="demo-cta" href={localizedHref('#demo-note', lang)}>{children || t.common.demoDefault} <span>↗</span></a>;
}

function DemoNote({ theme, title, text, lang, t }) {
  return <section id="demo-note" className={'demo-note ' + (theme || '')}>
    <small>{t.common.demoLabel}</small><h2>{title}</h2><p>{text}</p>
    <a href={localizedHref('/#projetos', lang)}>{t.common.otherProjects}</a>
  </section>;
}

function Education({ lang, t }) {
  const c = t.edu;
  return <div className="education demo">
    <DemoNav name={c.nav} lang={lang} t={t} />
    <section className="edu-hero">
      <div className="edu-brand">co<span>.</span>lab <small>{c.brand}</small></div>
      <div className="edu-hero-content"><span className="pill">{c.heroPill}</span><h1>{c.title}</h1><p>{c.heroDesc}</p><DemoCTA lang={lang} t={t}>{c.cta}</DemoCTA></div>
      <div className="edu-visual"><div className="code-window"><div className="window-dots">● ● ● <span>project.html</span></div>
        <code><i>&lt;section&gt;</i><br />&nbsp;&nbsp;<b>idea</b> = <u>{c.codeIdea}</u><br />&nbsp;&nbsp;<i>build</i>(idea)<br /><i>&lt;/section&gt;</i></code>
      </div><span className="edu-stamp">{c.stamp}</span></div>
      <span className="hero-note">{lang === 'en' ? 'DEMONSTRATION CONCEPT · 2026' : 'CONCEITO DEMONSTRATIVO · 2026'}</span>
    </section>
    <section className="edu-about"><span>{c.aboutLabel}</span><h2>{c.aboutTitle}</h2><p>{c.aboutText}</p></section>
    <section className="edu-benefits"><span>{c.benefitsLabel}</span><div className="benefit-grid">{c.benefits.map((b, i) => <div key={b[0]}><small>0{i + 1}</small><h3>{b[0]}</h3><p>{b[1]}</p></div>)}</div></section>
    <section className="edu-syllabus"><span>{c.syllabusLabel}</span><h2>{c.syllabusTitle}</h2>{c.syllabus.map((x, i) => <div className="syllabus-row" key={x}><span>0{i + 1}</span><b>{x}</b><span>＋</span></div>)}</section>
    <section className="edu-method"><div><span>{c.methodLabel}</span><h2>{c.methodTitle}</h2></div><p>{c.methodText}</p></section>
    <section className="instructor"><span>{c.instructorLabel}</span><div><div className="instructor-art">&lt;/&gt;</div><div><small>{c.illustrative}</small><h2>{c.instructorTitle}</h2><p>{c.instructorText}</p></div></div></section>
    <section className="edu-questions"><span>{c.faqLabel}</span><h2>{c.faqTitle}</h2><FAQ items={c.faqs} /></section>
    <DemoNote title={c.noteTitle} text={c.noteText} lang={lang} t={t} />
  </div>;
}

function Business({ lang, t }) {
  const c = t.biz;
  return <div className="business demo">
    <DemoNav name={c.nav} lang={lang} t={t} />
    <section className="biz-hero"><div className="biz-eyebrow">{c.eyebrow}</div>
      <div className="orbit-art"><div className="orbit o1" /><div className="orbit o2" /><div className="orbit-core">O</div><span>{lang === 'en' ? 'IDEA' : 'IDEIA'}</span><span>{lang === 'en' ? 'DIRECTION' : 'DIREÇÃO'}</span></div>
      <h1>{c.title}</h1><p>{c.heroText}</p><DemoCTA lang={lang} t={t}>{c.cta}</DemoCTA>
      <div className="biz-foot">{c.foot} <span>{c.footNote}</span></div>
    </section>
    <section className="biz-manifesto"><span>{c.proposalLabel}</span><h2>{c.proposalTitle}</h2><p>{c.proposalText}</p></section>
    <section className="biz-pillars"><span>{c.pillarsLabel}</span><div className="pillar-grid">{c.pillars.map((x, i) => <article key={x[0]}><small>0{i + 1} — {lang === 'en' ? 'PILLAR' : 'PILAR'}</small><h3>{x[0]}</h3><p>{x[1]}</p><b>↗</b></article>)}</div></section>
    <section className="biz-modules"><span>{c.modulesLabel}</span><h2>{c.modulesTitle}</h2><div>{c.modules.map((x, i) => <div className="biz-module" key={x[0]}><i>0{i + 1}</i><b>{x[0]}</b><p>{x[1]}</p></div>)}</div></section>
    <section className="biz-audience"><span>{c.audienceLabel}</span><h2>{c.audienceTitle}</h2><div className="audience-list">{c.audience.map(x => <p key={x}>↗ &nbsp; {x}</p>)}</div></section>
    <section className="biz-faq"><span>{c.faqLabel}</span><FAQ items={c.faqs} /></section>
    <DemoNote theme="dark" title={c.noteTitle} text={c.noteText} lang={lang} t={t} />
  </div>;
}

function Personal({ lang, t }) {
  const c = t.life;
  return <div className={'personal demo ' + (lang === 'en' ? 'english' : '')}>
    <DemoNav name={c.nav} lang={lang} t={t} />
    <section className="life-hero"><div className="life-label">{c.label}</div>
      <div className="life-image"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=80" alt={c.imageAlt} /><span>{c.imageCaption}</span></div>
      <div className="life-title"><span>{lang === 'en' ? '01 — IN BETWEEN' : '01 — ENTRETEMPO'}</span><h1>{c.title}</h1><p>{c.heroText}</p><DemoCTA lang={lang} t={t}>{c.cta}</DemoCTA></div>
      <span className="life-credit">{c.credit}</span>
    </section>
    <section className="life-intro"><span>{c.introLabel}</span><h2>{c.introTitle}</h2><p>{c.introText}</p></section>
    <section className="life-benefits"><span>{c.benefitsLabel}</span><div>{c.benefits.map(x => <article key={x[0]}><h3>{x[0]}.</h3><p>{x[1]}</p></article>)}</div></section>
    <section className="life-content"><span>{c.contentLabel}</span><h2>{c.contentTitle}</h2><div>{c.content.map((x, i) => <div className="life-row" key={x[0]}><span>0{i + 1}</span><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></section>
    <section className="life-method"><blockquote>{c.quote}</blockquote><span>{c.methodLabel}</span><p>{c.methodText}</p></section>
    <section className="life-faq"><span>{c.faqLabel}</span><FAQ items={c.faqs} /></section>
    <DemoNote theme="warm" title={c.noteTitle} text={c.noteText} lang={lang} t={t} />
  </div>;
}

function App() {
  const lang = getLocale();
  const t = copy[lang];
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const metadata = lang === 'en' ? {
    '/': ['ALBR. Agency — Independent digital studio', 'ALBR. is an independent digital studio creating thoughtful landing pages for course creators, mentors, and digital entrepreneurs.'],
    '/educacao': ['Code of Origin — Professional training | ALBR.', 'Fictional concept for a professional web development training landing page.'],
    '/empreendedorismo': ['Orbit — Digital business mentorship | ALBR.', 'Fictional concept for a digital business strategy mentorship landing page.'],
    '/desenvolvimento-pessoal': ['In Between — Mindful productivity | ALBR.', 'Fictional concept for a personal development and productivity program landing page.'],
  } : {
    '/': ['ALBR. — Estúdio digital independente', 'ALBR. — Estúdio digital independente. Experiências digitais construídas para se destacar.'],
    '/educacao': ['Código de Origem — Formação em tecnologia | ALBR.', 'Conceito demonstrativo fictício de uma formação profissional em desenvolvimento web.'],
    '/empreendedorismo': ['Órbita — Mentoria de negócios digitais | ALBR.', 'Conceito demonstrativo fictício de uma mentoria em estratégia para negócios digitais.'],
    '/desenvolvimento-pessoal': ['Entretempo — Produtividade consciente | ALBR.', 'Conceito demonstrativo fictício de um programa de produtividade e desenvolvimento pessoal.'],
  };
  const [title, description] = metadata[path] || metadata['/'];
  document.title = title;
  document.documentElement.lang = lang === 'en' ? 'en-US' : 'pt-BR';
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  if (path === '/educacao') return <Education lang={lang} t={t} />;
  if (path === '/empreendedorismo') return <Business lang={lang} t={t} />;
  if (path === '/desenvolvimento-pessoal') return <Personal lang={lang} t={t} />;
  return <Home lang={lang} t={t} />;
}

createRoot(document.getElementById('root')).render(<App />);
