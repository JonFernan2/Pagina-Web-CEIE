export interface TeacherData {
  nombre: string
  rol: string
  formacion: string
  especialidad: string
  foto: string | null
  fotoPendiente: boolean
}

export const TEACHERS: TeacherData[] = [
  {
    nombre: 'Juan Ignacio Salinas',
    rol: 'Docente ELE',
    formacion: '[PENDIENTE — completar con UAI]',
    especialidad: '[PENDIENTE]',
    foto: null,
    fotoPendiente: true,
  },
  {
    nombre: 'Pedro Pacheco',
    rol: 'Docente ELE',
    formacion: '[PENDIENTE — completar con UAI]',
    especialidad: '[PENDIENTE]',
    foto: null,
    fotoPendiente: true,
  },
  {
    nombre: '[Nombre Docente 3]',
    rol: '[Rol — completar con UAI]',
    formacion: '[PENDIENTE]',
    especialidad: '[PENDIENTE]',
    foto: null,
    fotoPendiente: true,
  },
  {
    nombre: '[Nombre Docente 4]',
    rol: '[Rol — completar con UAI]',
    formacion: '[PENDIENTE]',
    especialidad: '[PENDIENTE]',
    foto: null,
    fotoPendiente: true,
  },
]
