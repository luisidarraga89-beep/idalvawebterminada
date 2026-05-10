import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BRAND = {
  name:     'idalva',
  tagline:  'Escalar sin caos. Operar sin límites.',
  email:    'luisidarraga89@gmail.com',
  phone:    '+34 643 43 12 97',
  linkedin: 'https://www.linkedin.com/in/luisalbertoidarragamedina/',
} as const
