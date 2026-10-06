'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, RotateCcw, Clock, ListChecks, Info } from 'lucide-react'
import { TEST_ITEMS, LEVELS, ITEMS_PER_LEVEL, PASS_MARK, type CefrLevel } from '@/data/placementTest'

type Lang = 'es' | 'en' | 'pt' | 'zh'

const UI: Record<Lang, {
  introTitle: string
  intro: string[]
  duration: string
  questions: string
  disclaimer: string
  start: string
  progress: (n: number, total: number) => string
  levelTag: string
  dontKnow: string
  back: string
  next: string
  finish: string
  resultTitle: string
  yourLevel: string
  beginner: string
  levelDesc: Record<CefrLevel, string>
  recommended: (level: CefrLevel) => string
  recommendedTop: string
  breakdown: string
  correct: string
  officialNote: string
  seePrograms: string
  contact: string
  retake: string
  programsHref: string
  contactHref: string
}> = {
  es: {
    introTitle: 'Descubre tu nivel de español',
    intro: [
      'Este test orientativo te ayuda a estimar tu nivel según el Marco Común Europeo de Referencia (MCER), de A1 a C1.',
      'Las preguntas aumentan de dificultad. Si no sabes una respuesta, elige «No lo sé»: así el resultado será más preciso.',
    ],
    duration: 'Aprox. 15 minutos',
    questions: `${TEST_ITEMS.length} preguntas de opción múltiple`,
    disclaimer: 'Resultado orientativo: no reemplaza el test de nivel obligatorio que se realiza antes del inicio de cada programa. No guardamos tus respuestas.',
    start: 'Comenzar el test',
    progress: (n, t) => `Pregunta ${n} de ${t}`,
    levelTag: 'Nivel',
    dontKnow: 'No lo sé',
    back: 'Anterior',
    next: 'Siguiente',
    finish: 'Ver resultado',
    resultTitle: 'Tu resultado',
    yourLevel: 'Nivel estimado',
    beginner: 'A1 · Inicial',
    levelDesc: {
      A1: 'Comprendes y usas expresiones cotidianas y frases básicas para presentarte y satisfacer necesidades inmediatas.',
      A2: 'Te comunicas en situaciones sencillas y habituales, y describes tu entorno y tu pasado en términos simples.',
      B1: 'Te desenvuelves en la mayoría de las situaciones de viaje, expresas opiniones y relatas experiencias con cierta fluidez.',
      B2: 'Interactúas con fluidez y naturalidad con hablantes nativos y produces textos claros y detallados sobre temas diversos.',
      C1: 'Te expresas de forma fluida, espontánea y precisa, con un uso flexible del idioma en contextos sociales, académicos y profesionales.',
    },
    recommended: (l) => `Te recomendamos inscribirte en el nivel ${l} del Programa Semestral de Español.`,
    recommendedTop: 'Te recomendamos el nivel C1 del Programa Semestral o un Programa de Español con Fines Específicos.',
    breakdown: 'Respuestas correctas por nivel',
    correct: 'correctas',
    officialNote: 'Recuerda: este resultado es orientativo. Tu nivel definitivo se confirma con el test de nivel obligatorio antes del inicio del programa.',
    seePrograms: 'Ver programas',
    contact: 'Contáctanos',
    retake: 'Repetir el test',
    programsHref: '/programas-y-cursos',
    contactHref: '/contacto',
  },
  en: {
    introTitle: 'Find out your Spanish level',
    intro: [
      'This orientative test helps you estimate your level according to the Common European Framework of Reference (CEFR), from A1 to C1.',
      'Questions get progressively harder and are written in Spanish. If you don’t know an answer, choose “I don’t know” for a more accurate result.',
    ],
    duration: 'Approx. 15 minutes',
    questions: `${TEST_ITEMS.length} multiple-choice questions`,
    disclaimer: 'Orientative result: it does not replace the mandatory placement test taken before each programme starts. We do not store your answers.',
    start: 'Start the test',
    progress: (n, t) => `Question ${n} of ${t}`,
    levelTag: 'Level',
    dontKnow: 'I don’t know',
    back: 'Back',
    next: 'Next',
    finish: 'See result',
    resultTitle: 'Your result',
    yourLevel: 'Estimated level',
    beginner: 'A1 · Beginner',
    levelDesc: {
      A1: 'You understand and use everyday expressions and basic phrases to introduce yourself and meet immediate needs.',
      A2: 'You communicate in simple, routine situations and describe your surroundings and past in simple terms.',
      B1: 'You can handle most travel situations, express opinions and describe experiences with some fluency.',
      B2: 'You interact fluently and naturally with native speakers and produce clear, detailed texts on a range of topics.',
      C1: 'You express yourself fluently, spontaneously and precisely, using the language flexibly in social, academic and professional contexts.',
    },
    recommended: (l) => `We recommend enrolling in level ${l} of the Semester Spanish Programme.`,
    recommendedTop: 'We recommend level C1 of the Semester Programme or a Spanish for Specific Purposes Programme.',
    breakdown: 'Correct answers by level',
    correct: 'correct',
    officialNote: 'Remember: this result is orientative. Your final level is confirmed by the mandatory placement test before the programme starts.',
    seePrograms: 'See programmes',
    contact: 'Contact us',
    retake: 'Retake the test',
    programsHref: '/en/programs-and-courses',
    contactHref: '/en/contact',
  },
  pt: {
    introTitle: 'Descubra seu nível de espanhol',
    intro: [
      'Este teste orientativo ajuda você a estimar seu nível segundo o Quadro Europeu Comum de Referência (QECR), de A1 a C1.',
      'As perguntas aumentam de dificuldade e estão em espanhol. Se não souber uma resposta, escolha «Não sei» para um resultado mais preciso.',
    ],
    duration: 'Aprox. 15 minutos',
    questions: `${TEST_ITEMS.length} perguntas de múltipla escolha`,
    disclaimer: 'Resultado orientativo: não substitui o teste de nível obrigatório realizado antes do início de cada programa. Não armazenamos suas respostas.',
    start: 'Começar o teste',
    progress: (n, t) => `Pergunta ${n} de ${t}`,
    levelTag: 'Nível',
    dontKnow: 'Não sei',
    back: 'Anterior',
    next: 'Próxima',
    finish: 'Ver resultado',
    resultTitle: 'Seu resultado',
    yourLevel: 'Nível estimado',
    beginner: 'A1 · Inicial',
    levelDesc: {
      A1: 'Você compreende e usa expressões cotidianas e frases básicas para se apresentar e atender a necessidades imediatas.',
      A2: 'Você se comunica em situações simples e habituais e descreve seu entorno e seu passado em termos simples.',
      B1: 'Você se vira na maioria das situações de viagem, expressa opiniões e relata experiências com certa fluência.',
      B2: 'Você interage com fluência e naturalidade com falantes nativos e produz textos claros e detalhados sobre diversos temas.',
      C1: 'Você se expressa de forma fluente, espontânea e precisa, com uso flexível do idioma em contextos sociais, acadêmicos e profissionais.',
    },
    recommended: (l) => `Recomendamos que você se inscreva no nível ${l} do Programa Semestral de Espanhol.`,
    recommendedTop: 'Recomendamos o nível C1 do Programa Semestral ou um Programa de Espanhol para Fins Específicos.',
    breakdown: 'Respostas corretas por nível',
    correct: 'corretas',
    officialNote: 'Lembre-se: este resultado é orientativo. Seu nível definitivo é confirmado pelo teste de nível obrigatório antes do início do programa.',
    seePrograms: 'Ver programas',
    contact: 'Fale conosco',
    retake: 'Refazer o teste',
    programsHref: '/pt/programas-e-cursos',
    contactHref: '/pt/contato',
  },
  zh: {
    introTitle: '测一测你的西班牙语水平',
    intro: [
      '本测试为参考性测试，可根据欧洲语言共同参考框架（CEFR）帮助你估算A1至C1的水平。',
      '题目难度逐步提高，题目为西班牙语。如果不知道答案，请选择“我不知道”，结果会更准确。',
    ],
    duration: '约15分钟',
    questions: `${TEST_ITEMS.length}道单项选择题`,
    disclaimer: '结果仅供参考，不能替代各项目开课前必须参加的分级测试。我们不会保存你的答案。',
    start: '开始测试',
    progress: (n, t) => `第${n}题，共${t}题`,
    levelTag: '级别',
    dontKnow: '我不知道',
    back: '上一题',
    next: '下一题',
    finish: '查看结果',
    resultTitle: '你的结果',
    yourLevel: '估算水平',
    beginner: 'A1 · 入门',
    levelDesc: {
      A1: '能理解并使用日常用语和基础句子进行自我介绍，满足基本需求。',
      A2: '能在简单、常规的情境中交流，并用简单的语言描述身边环境和过去的经历。',
      B1: '能应对大多数旅行情境，较为流利地表达观点、讲述经历。',
      B2: '能与母语者流利、自然地交流，并就多种话题写出清晰、详细的文章。',
      C1: '能流利、自如、准确地表达，在社交、学术和职业场合灵活运用语言。',
    },
    recommended: (l) => `建议你报名西班牙语学期项目的${l}级课程。`,
    recommendedTop: '建议你报名学期项目C1级课程，或专门用途西班牙语项目。',
    breakdown: '各级别答对题数',
    correct: '题正确',
    officialNote: '请注意：此结果仅供参考。你的最终级别将以开课前的必考分级测试为准。',
    seePrograms: '查看课程项目',
    contact: '联系我们',
    retake: '重新测试',
    programsHref: '/zh/programs',
    contactHref: '/zh/contact',
  },
}

const DONT_KNOW = -1

function scoreTest(answers: (number | undefined)[]) {
  const byLevel = Object.fromEntries(LEVELS.map((l) => [l, 0])) as Record<CefrLevel, number>
  TEST_ITEMS.forEach((item, i) => { if (answers[i] === item.answer) byLevel[item.level]++ })
  // Highest level mastered consecutively from A1.
  let mastered: CefrLevel | null = null
  for (const l of LEVELS) {
    if (byLevel[l] >= PASS_MARK) mastered = l
    else break
  }
  return { byLevel, mastered }
}

export default function PlacementTest({ lang = 'es' }: { lang?: Lang }) {
  const t = UI[lang]
  const total = TEST_ITEMS.length
  const [step, setStep] = useState<'intro' | 'test' | 'result'>('intro')
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | undefined)[]>([])
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Move focus to the new heading so screen-reader and keyboard users follow each step.
  useEffect(() => {
    if (step !== 'intro') headingRef.current?.focus()
  }, [step, index])

  const item = TEST_ITEMS[index]
  const selected = answers[index]

  function choose(value: number) {
    setAnswers((prev) => { const next = [...prev]; next[index] = value; return next })
  }

  function restart() {
    setAnswers([]); setIndex(0); setStep('intro')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const card = 'w-full max-w-3xl mx-auto p-6 md:p-10'
  const cardStyle = { background: '#FFFFFF', borderRadius: '4px', border: '1px solid #E5E3DE' }
  const primaryBtn = 'inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2'
  const primaryStyle = { background: '#1d1e20', color: '#FFFFFF', borderRadius: '2px' }

  if (step === 'intro') {
    return (
      <div className={card} style={cardStyle}>
        <h2 className="font-display font-bold text-negro text-2xl md:text-3xl mb-4">{t.introTitle}</h2>
        {t.intro.map((p) => (
          <p key={p} className="text-base leading-relaxed mb-3" style={{ color: '#2D2D2D' }}>{p}</p>
        ))}
        <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 my-6 text-sm" style={{ color: '#1d1e20' }}>
          <li className="flex items-center gap-2"><Clock size={18} style={{ color: '#6493b5' }} aria-hidden="true" />{t.duration}</li>
          <li className="flex items-center gap-2"><ListChecks size={18} style={{ color: '#6493b5' }} aria-hidden="true" />{t.questions}</li>
        </ul>
        <p className="flex items-start gap-2 text-xs leading-relaxed mb-8 p-3" style={{ background: '#F4F2EE', color: '#2D2D2D', borderRadius: '2px' }}>
          <Info size={16} className="shrink-0 mt-0.5" style={{ color: '#1d1e20' }} aria-hidden="true" />
          {t.disclaimer}
        </p>
        <button type="button" className={primaryBtn} style={primaryStyle} onClick={() => setStep('test')}>
          {t.start} <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    )
  }

  if (step === 'result') {
    const { byLevel, mastered } = scoreTest(answers)
    const label = mastered ?? t.beginner
    const desc = t.levelDesc[mastered ?? 'A1']
    const nextLevel = mastered ? LEVELS[LEVELS.indexOf(mastered) + 1] : 'A1'
    const recommendation = nextLevel ? t.recommended(nextLevel) : t.recommendedTop

    return (
      <div className={card} style={cardStyle}>
        <h2 ref={headingRef} tabIndex={-1} className="font-display font-bold text-negro text-2xl md:text-3xl mb-6 focus:outline-none">{t.resultTitle}</h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
          <div className="flex flex-col items-center justify-center shrink-0 w-32 h-32 rounded-full" style={{ background: '#1d1e20' }}>
            <span className="text-[11px] uppercase tracking-widest text-white/80">{t.yourLevel}</span>
            <span className="font-display font-bold text-white text-3xl leading-tight text-center px-2">{mastered ?? 'A1'}</span>
          </div>
          <div>
            <p className="font-semibold text-negro mb-1">{label}</p>
            <p className="text-sm leading-relaxed" style={{ color: '#2D2D2D' }}>{desc}</p>
          </div>
        </div>

        <p className="text-base font-semibold text-negro mb-6 p-4" style={{ background: '#F4F2EE', borderLeft: '3px solid #6493b5', borderRadius: '2px' }}>
          {recommendation}
        </p>

        <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#1d1e20' }}>{t.breakdown}</h3>
        <ul className="flex flex-col gap-2 mb-6">
          {LEVELS.map((l) => (
            <li key={l} className="flex items-center gap-3 text-sm">
              <span className="w-8 font-semibold text-negro">{l}</span>
              <span className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: '#E5E3DE' }} aria-hidden="true">
                <span className="block h-full rounded-full" style={{ width: `${(byLevel[l] / ITEMS_PER_LEVEL) * 100}%`, background: byLevel[l] >= PASS_MARK ? '#6493b5' : '#9A968F' }} />
              </span>
              <span className="w-28 text-right" style={{ color: '#2D2D2D' }}>{byLevel[l]}/{ITEMS_PER_LEVEL} {t.correct}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs leading-relaxed mb-8" style={{ color: '#2D2D2D' }}>{t.officialNote}</p>

        <div className="flex flex-wrap gap-3">
          <Link href={t.programsHref} className={primaryBtn} style={primaryStyle}>{t.seePrograms}</Link>
          <Link href={t.contactHref} className={primaryBtn} style={{ background: '#6493b5', color: '#1d1e20', borderRadius: '2px' }}>{t.contact}</Link>
          <button type="button" onClick={restart} className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold underline focus:outline-none focus-visible:ring-2" style={{ color: '#1d1e20' }}>
            <RotateCcw size={16} aria-hidden="true" /> {t.retake}
          </button>
        </div>
      </div>
    )
  }

  const isLast = index === total - 1
  const options = [...item.options.map((o, i) => ({ value: i, label: o })), { value: DONT_KNOW, label: t.dontKnow }]

  return (
    <div className={card} style={cardStyle}>
      <div className="flex items-center justify-between gap-4 mb-2 text-xs font-semibold uppercase tracking-widest" style={{ color: '#1d1e20' }}>
        <span>{t.progress(index + 1, total)}</span>
        <span>{t.levelTag} {item.level}</span>
      </div>
      <div
        className="h-1.5 w-full rounded-full overflow-hidden mb-8"
        style={{ background: '#E5E3DE' }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        aria-label={t.progress(index + 1, total)}
      >
        <div className="h-full transition-all duration-300" style={{ width: `${((index + 1) / total) * 100}%`, background: '#6493b5' }} />
      </div>

      <fieldset>
        <legend className="w-full">
          <h2 ref={headingRef} tabIndex={-1} lang="es" className="font-body text-lg md:text-xl font-semibold text-negro mb-6 leading-snug focus:outline-none">
            {item.prompt}
          </h2>
        </legend>
        <div className="flex flex-col gap-3">
          {options.map((o) => {
            const checked = selected === o.value
            return (
              <label
                key={o.value}
                className="flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors focus-within:ring-2"
                style={{
                  border: `1px solid ${checked ? '#1d1e20' : '#D1CFC9'}`,
                  background: checked ? '#F4F2EE' : '#FFFFFF',
                  borderRadius: '4px',
                }}
              >
                <input
                  type="radio"
                  name={`q-${index}`}
                  value={o.value}
                  checked={checked}
                  onChange={() => choose(o.value)}
                  className="w-4 h-4 accent-[#1d1e20]"
                />
                <span className={`text-base ${o.value === DONT_KNOW ? 'italic' : ''}`} style={{ color: '#1d1e20' }} lang={o.value === DONT_KNOW ? undefined : 'es'}>
                  {o.label}
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="flex items-center justify-between gap-3 mt-8">
        <button
          type="button"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          className="inline-flex items-center gap-1 px-3 py-3 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2"
          style={{ color: '#1d1e20' }}
        >
          <ChevronLeft size={18} aria-hidden="true" /> {t.back}
        </button>
        <button
          type="button"
          disabled={selected === undefined}
          onClick={() => {
            if (isLast) { setStep('result'); window.scrollTo({ top: 0, behavior: 'smooth' }) }
            else setIndex((i) => i + 1)
          }}
          className={primaryBtn}
          style={primaryStyle}
        >
          {isLast ? t.finish : t.next} <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
