/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ApplicationData {
  // Terms accepted (Telas 2, 3, 4, 5)
  termsAcceptedVaga: boolean;
  termsAcceptedResponsabilidades: boolean;
  termsAcceptedPontualidade: boolean;
  termsAcceptedConduta: boolean;

  // Etapa 1 - Dados Pessoais
  nome: string;
  idade: string;
  bairro: string;
  possuiFilhos: 'Sim' | 'Não' | '';
  quantidadeFilhos: '1' | '2' | '3' | '4 ou mais' | '';

  // Etapa 2 - Contato
  whatsapp: string;
  redeSocial: string;

  // Etapa 3 - Experiência
  trabalhouComoBaba: 'Sim' | 'Não' | '';
  tempoExperiencia: 'Menos de 6 meses' | 'De 6 meses a 1 ano' | 'De 1 a 2 anos' | 'De 2 a 3 anos' | 'De 3 a 5 anos' | 'Mais de 5 anos' | '';

  // Etapa 4 - Transporte
  possuiTransporteProprio: 'Sim' | 'Não' | '';
  transporteUtilizado: 'Moto' | 'Carro' | 'Bicicleta' | 'Ônibus' | 'Aplicativo' | 'Carona' | 'Outro' | '';

  // Etapa 5 - Atividades da Vaga
  dispostaAtividades: 'Sim' | 'Não' | '';

  // Etapa 6 - Saúde
  possuiProblemaSaude: 'Sim' | 'Não' | '';
  descricaoLimitacao: string;

  // Etapa 7 - Pretensão Salarial
  pretensaoSalarial: 'R$ 800' | 'R$ 900' | 'R$ 1.000' | 'R$ 1.100' | 'R$ 1.200' | 'R$ 1.300' | '';

  // Etapa 8 - Confirmação Final
  revisaoConfirmada: boolean;
}

export type AppStepName = 
  | 'WELCOME'                      // Tela 1
  | 'ABOUT_JOB'                    // Tela 2
  | 'RESPONSIBILITIES'             // Tela 3
  | 'PUNCTUALITY'                  // Tela 4
  | 'CONDUCT'                      // Tela 5
  | 'FORM_PERSONAL_DATA'          // Etapa 1
  | 'FORM_CONTACT'                // Etapa 2
  | 'FORM_EXPERIENCE'             // Etapa 3
  | 'FORM_TRANSPORT'              // Etapa 4
  | 'FORM_ACTIVITIES'             // Etapa 5
  | 'FORM_HEALTH'                 // Etapa 6
  | 'FORM_SALARY'                 // Etapa 7
  | 'FORM_CONFIRMATION';          // Etapa 8

export const STEPS_ORDER: AppStepName[] = [
  'WELCOME',
  'ABOUT_JOB',
  'RESPONSIBILITIES',
  'PUNCTUALITY',
  'CONDUCT',
  'FORM_PERSONAL_DATA',
  'FORM_CONTACT',
  'FORM_EXPERIENCE',
  'FORM_TRANSPORT',
  'FORM_ACTIVITIES',
  'FORM_HEALTH',
  'FORM_SALARY',
  'FORM_CONFIRMATION'
];
