export interface DirectorioMember {
  nombre: string
  cargo: { es: string; en: string }
  foto: string
  alt: { es: string; en: string }
}

export const DIRECTORIO: DirectorioMember[] = [
  {
    nombre: 'Carlos Ramírez',
    cargo: {
      es: 'Dirección Ejecutiva',
      en: 'Executive Director',
    },
    foto: '/images/directorio-carlos-ramirez.jpg',
    alt: {
      es: 'Carlos Ramírez — Director Ejecutivo del CEIE UAI',
      en: 'Carlos Ramírez — Executive Director of CEIE UAI',
    },
  },
  {
    nombre: 'Ilse Capona',
    cargo: {
      es: 'Dirección Académica',
      en: 'Academic Director',
    },
    foto: '/images/directorio-ilse-capona.jpg',
    alt: {
      es: 'Ilse Capona — Directora Académica del CEIE UAI',
      en: 'Ilse Capona — Academic Director of CEIE UAI',
    },
  },
  {
    nombre: 'Caroline Cortés',
    cargo: {
      es: 'Coordinación RRII — Área Ventas',
      en: 'International Relations — Commercial',
    },
    foto: '/images/directorio-caroline-cortes.jpg',
    alt: {
      es: 'Caroline Cortés — Coordinadora RRII del CEIE UAI',
      en: 'Caroline Cortés — International Relations Coordinator, CEIE UAI',
    },
  },
  {
    nombre: 'Lorena León',
    cargo: {
      es: 'Coordinación RRII — Administración y Finanzas',
      en: 'International Relations — Administration & Finance',
    },
    foto: '/images/directorio-lorena-leon.jpg',
    alt: {
      es: 'Lorena León — Coordinadora Administración del CEIE UAI',
      en: 'Lorena León — Administration Coordinator, CEIE UAI',
    },
  },
]
