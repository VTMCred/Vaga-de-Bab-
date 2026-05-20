/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VacancyInfo {
  location: string;
  child: string;
  scheduleWeek: string;
  scheduleSat: string;
  scheduleSun: string;
}

export const VACANCY_DATA: VacancyInfo = {
  location: 'Próximo ao parque da cidade',
  child: 'Menina de 2 anos de idade',
  scheduleWeek: '08h30 às 16h30',
  scheduleSat: '08h30 às 12h30',
  scheduleSun: 'Folga (em feriado será analisado possibilidade de folga)',
};

export const RESPONSIBILITIES_LIST = [
  'Cuidar da criança.',
  'Zelar pela segurança e bem-estar da criança.',
  'Preparar refeições simples para a criança quando necessário.',
  'Lavar roupas da criança quando necessário.',
  'Organizar brinquedos e objetos utilizados pela criança.',
  'Comunicar imediatamente qualquer situação relevante envolvendo a criança.'
];

export const PUNCTUALITY_LIST = [
  'O cuidado de uma criança exige responsabilidade e pontualidade.',
  'Atrasos frequentes poderão comprometer a continuidade da contratação.',
  'Ausências devem ser comunicadas com antecedência sempre que possível.',
  'Dias não trabalhados poderão gerar desconto proporcional ao período não trabalhado.',
  'Faltas recorrentes poderão ser consideradas para a continuidade da contratação.'
];

export const CONDUCT_LIST = [
  'Trate a criança com respeito e paciência.',
  'Não utilizar celular enquanto cuida da criança.',
  'Não utilize agressão física ou verbal.',
  'Não fume durante o período de trabalho.',
  'Mantenha discrição sobre assuntos da família.',
  'Atue com honestidade e responsabilidade.'
];

export const SALARY_OPTIONS = [
  'R$ 800',
  'R$ 900',
  'R$ 1.000',
  'R$ 1.100',
  'R$ 1.200',
  'R$ 1.300'
] as const;

export const FILHOS_COUNT_OPTIONS = [
  '1',
  '2',
  '3',
  '4 ou mais'
] as const;

export const TRANS_OPTIONS = [
  'Moto',
  'Carro',
  'Bicicleta',
  'Ônibus',
  'Aplicativo',
  'Carona',
  'Outro'
] as const;

export const EXP_OPTIONS = [
  'Menos de 6 meses',
  'De 6 meses a 1 ano',
  'De 1 a 2 anos',
  'De 2 a 3 anos',
  'De 3 a 5 anos',
  'Mais de 5 anos'
] as const;
