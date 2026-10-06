// CEIE orientative placement test — DRAFT pending review by the teaching team.
// Original items aligned with the CEFR / Plan Curricular del Instituto Cervantes (A1–C1).
// 7 items per level; a level counts as "mastered" with at least PASS_MARK correct answers.

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1'

export interface TestItem {
  level: CefrLevel
  prompt: string
  options: string[]
  answer: number // index into options
}

export const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1']
export const ITEMS_PER_LEVEL = 7
export const PASS_MARK = 5

export const TEST_ITEMS: TestItem[] = [
  // ── A1 ──
  { level: 'A1', prompt: 'Hola, me ___ Ana. Soy de Brasil.', options: ['llamo', 'llama', 'llamas', 'llaman'], answer: 0 },
  { level: 'A1', prompt: '¿De dónde ___ ustedes?', options: ['es', 'son', 'están', 'somos'], answer: 1 },
  { level: 'A1', prompt: 'Yo ___ 25 años.', options: ['soy', 'estoy', 'tengo', 'hay'], answer: 2 },
  { level: 'A1', prompt: 'En mi clase ___ doce estudiantes.', options: ['están', 'son', 'tiene', 'hay'], answer: 3 },
  { level: 'A1', prompt: 'Me gusta ___ café por la mañana.', options: ['el', 'la', 'los', 'un'], answer: 0 },
  { level: 'A1', prompt: 'Mi hermana ___ en un hospital; es enfermera.', options: ['trabajo', 'trabaja', 'trabajas', 'trabajan'], answer: 1 },
  { level: 'A1', prompt: '—¿Qué hora es? —___ las tres y media.', options: ['Es', 'Están', 'Son', 'Hay'], answer: 2 },

  // ── A2 ──
  { level: 'A2', prompt: 'Ayer ___ al cine con mis amigos.', options: ['voy', 'iba', 'iré', 'fui'], answer: 3 },
  { level: 'A2', prompt: 'Cuando era niño, ___ en el campo con mis abuelos.', options: ['vivía', 'viví', 'vivo', 'viviré'], answer: 0 },
  { level: 'A2', prompt: '¿Alguna vez has ___ a Valparaíso?', options: ['ir', 'ido', 'iba', 'fuiste'], answer: 1 },
  { level: 'A2', prompt: 'Este libro es ___ interesante que la película.', options: ['tan', 'muy', 'más', 'mucho'], answer: 2 },
  { level: 'A2', prompt: '—¿Dónde están mis llaves? —___ dejaste en la mesa.', options: ['Les', 'Los', 'La', 'Las'], answer: 3 },
  { level: 'A2', prompt: 'Mañana ___ a llover, así que lleva paraguas.', options: ['va', 'vamos', 'iba', 'fue'], answer: 0 },
  { level: 'A2', prompt: 'Ahora no puedo hablar: estoy ___ la cena.', options: ['preparado', 'preparando', 'preparar', 'preparo'], answer: 1 },

  // ── B1 ──
  { level: 'B1', prompt: 'Espero que ___ un buen viaje.', options: ['tienes', 'tendrás', 'tengas', 'tenías'], answer: 2 },
  { level: 'B1', prompt: 'Si tengo tiempo el sábado, te ___ con la mudanza.', options: ['ayudaría', 'ayudara', 'ayudé', 'ayudaré'], answer: 3 },
  { level: 'B1', prompt: 'Cuando ___ a Santiago, llámame.', options: ['llegues', 'llegas', 'llegarás', 'llegaste'], answer: 0 },
  { level: 'B1', prompt: 'Me dijo que ___ cansado y que se iba a dormir.', options: ['está', 'estaba', 'estará', 'esté'], answer: 1 },
  { level: 'B1', prompt: 'Cuando llegué a la estación, el tren ya ___.', options: ['ha salido', 'salía', 'había salido', 'saldrá'], answer: 2 },
  { level: 'B1', prompt: 'Te recomiendo que ___ el museo antes de irte.', options: ['visitas', 'visitar', 'visitarás', 'visites'], answer: 3 },
  { level: 'B1', prompt: 'No creo que ___ tiempo para terminar hoy.', options: ['tengamos', 'tenemos', 'tendremos', 'teníamos'], answer: 0 },

  // ── B2 ──
  { level: 'B2', prompt: 'Si ___ más dinero, viajaría por toda Sudamérica.', options: ['tengo', 'tuviera', 'tendría', 'tuve'], answer: 1 },
  { level: 'B2', prompt: 'Buscamos un profesor que ___ experiencia en enseñanza en línea.', options: ['tiene', 'tuvo', 'tenga', 'tendrá'], answer: 2 },
  { level: 'B2', prompt: 'Me molestó que no me ___ antes de cancelar la reunión.', options: ['avisaron', 'avisan', 'avisen', 'avisaran'], answer: 3 },
  { level: 'B2', prompt: 'Por mucho que ___, no conseguirás convencerla.', options: ['insistas', 'insistes', 'insistirás', 'insististe'], answer: 0 },
  { level: 'B2', prompt: 'Ojalá ___ venido a la fiesta; te habrías divertido.', options: ['habías', 'hubieras', 'has', 'habrías'], answer: 1 },
  { level: 'B2', prompt: 'Después de meses de esfuerzo, por fin ___ aprobar el examen.', options: ['realizó', 'cumplió', 'logró', 'alcanzó'], answer: 2 },
  { level: 'B2', prompt: 'Le pedí que ___ la puerta al salir.', options: ['cerró', 'cierra', 'cerrará', 'cerrara'], answer: 3 },

  // ── C1 ──
  { level: 'C1', prompt: 'De ___ sabido, no habría aceptado el trabajo.', options: ['haberlo', 'haber', 'haberle', 'habiéndolo'], answer: 0 },
  { level: 'C1', prompt: 'No es que no ___ ayudarte; es que hoy no puedo.', options: ['quiero', 'quiera', 'querré', 'quise'], answer: 1 },
  { level: 'C1', prompt: 'Al enterarse de la noticia, «se quedó de piedra». Es decir, quedó…', options: ['muy enfadado', 'muy cansado', 'muy sorprendido', 'muy tranquilo'], answer: 2 },
  { level: 'C1', prompt: 'El proyecto era prometedor; ___, la falta de financiamiento impidió llevarlo a cabo.', options: ['por lo tanto', 'es decir', 'así que', 'no obstante'], answer: 3 },
  { level: 'C1', prompt: 'Te presto el auto ___ me lo devuelvas antes del lunes.', options: ['siempre que', 'ya que', 'aunque', 'puesto que'], answer: 0 },
  { level: 'C1', prompt: 'Lamentó no ___ despedirse de sus compañeros antes de volver a su país.', options: ['poder haber', 'haber podido', 'haya podido', 'hubiera podido'], answer: 1 },
  {
    level: 'C1',
    prompt: '¿Cuál es la opción más adecuada para un correo formal?',
    options: [
      'Mándame la info altiro.',
      'Envíame eso rápido, porfa.',
      'Le agradecería que me enviara la información a la brevedad.',
      'Pásame los datos cuando puedas.',
    ],
    answer: 2,
  },
]
