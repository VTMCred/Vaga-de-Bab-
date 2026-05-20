/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Baby,
  Clock,
  MapPin,
  Check,
  User,
  Phone,
  Briefcase,
  Car,
  Heart,
  Smile,
  Stethoscope,
  Sparkles,
  Info,
  AlertTriangle,
  Github,
  Award,
  ShieldCheck,
  CalendarDays,
  FileText,
  DollarSign
} from 'lucide-react';
import { ApplicationData } from '../types';
import {
  VACANCY_DATA,
  RESPONSIBILITIES_LIST,
  PUNCTUALITY_LIST,
  CONDUCT_LIST,
  SALARY_OPTIONS,
  FILHOS_COUNT_OPTIONS,
  TRANS_OPTIONS,
  EXP_OPTIONS
} from '../data';

interface StepViewProps {
  data: ApplicationData;
  onChange: (fields: Partial<ApplicationData>) => void;
  onValidate: (isValid: boolean) => void;
}

// -------------------------------------------------------------
// TELA 1 — BOAS-VINDAS
// -------------------------------------------------------------
export const WelcomeStep: React.FC<StepViewProps> = () => {
  return (
    <div className="text-center pt-2 pb-1">
      <div className="w-20 h-20 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xs border border-sage-100">
        <Baby className="w-10 h-10 text-sage-500" />
      </div>
      
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-800 mb-4 font-poppins">
        Candidatura para Vaga de Babá
      </h1>
      
      <p className="text-neutral-600 leading-relaxed max-w-md mx-auto text-sm md:text-base mb-4">
        Leia atentamente as informações da vaga e os termos apresentados nas próximas etapas.
      </p>

      <div className="bg-sage-50 border border-sage-100/80 rounded-xl p-4 text-left max-w-sm mx-auto flex items-start gap-3">
        <Info className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
        <span className="text-xs text-sage-800 leading-relaxed font-medium">
          O preenchimento é rápido e, no final, as respostas serão enviadas de forma organizada pelo seu WhatsApp direto para análise.
        </span>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// TELA 2 — INFORMAÇÕES DA VAGA
// -------------------------------------------------------------
export const AboutJobStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onChange({ termsAcceptedVaga: checked });
    onValidate(checked);
  };

  React.useEffect(() => {
    onValidate(data.termsAcceptedVaga);
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <Info className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Sobre a vaga</h2>
        <p className="text-xs text-neutral-500 mt-1">Conheça o local, horários e requisitos</p>
      </div>

      <div className="space-y-4">
        {/* Local de trabalho */}
        <div className="flex items-start gap-3 p-3.5 bg-neutral-50 rounded-xl border border-neutral-100">
          <MapPin className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Local de trabalho</p>
            <p className="text-sm font-medium text-neutral-800 mt-0.5">{VACANCY_DATA.location}</p>
          </div>
        </div>

        {/* Criança */}
        <div className="flex items-start gap-3 p-3.5 bg-neutral-50 rounded-xl border border-neutral-100">
          <Baby className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Criança sob cuidados</p>
            <p className="text-sm font-medium text-neutral-800 mt-0.5">{VACANCY_DATA.child}</p>
          </div>
        </div>

        {/* Horários */}
        <div className="flex items-start gap-3 p-3.5 bg-neutral-50 rounded-xl border border-neutral-100">
          <Clock className="w-5 h-5 text-sage-500 shrink-0 mt-1" />
          <div className="w-full">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Horário de trabalho</p>
            <div className="grid grid-cols-2 gap-2 mt-1.5 text-xs text-neutral-700">
              <div className="bg-white p-2 rounded-lg border border-neutral-100">
                <span className="font-semibold block text-neutral-500">Segunda a Sexta</span>
                <span className="font-medium text-neutral-800 text-sm mt-0.5 block">{VACANCY_DATA.scheduleWeek}</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-neutral-100">
                <span className="font-semibold block text-neutral-500">Sábado</span>
                <span className="font-medium text-neutral-800 text-sm mt-0.5 block">{VACANCY_DATA.scheduleSat}</span>
              </div>
            </div>
            <div className="mt-2 text-xs bg-sage-50 text-sage-800 py-1 px-2.5 rounded-md inline-flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 bg-sage-500 rounded-full"></span>
              Domingo: {VACANCY_DATA.scheduleSun}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-neutral-100">
        <label className="flex items-start gap-3 cursor-pointer select-none group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="termsAcceptedVaga"
              checked={data.termsAcceptedVaga}
              onChange={handleCheckbox}
              className="peer appearance-none w-5 h-5 border border-neutral-350 rounded-md checked:bg-sage-400 checked:border-sage-400 focus:outline bg-white cursor-pointer transition-all duration-150"
            />
            <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 transition-transform duration-150" />
          </div>
          <span className="text-sm text-neutral-700 leading-snug group-hover:text-neutral-900 transition-colors duration-150">
            Li e compreendi as informações da vaga.
          </span>
        </label>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// TELA 3 — RESPONSABILIDADES
// -------------------------------------------------------------
export const ResponsibilitiesStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onChange({ termsAcceptedResponsabilidades: checked });
    onValidate(checked);
  };

  React.useEffect(() => {
    onValidate(data.termsAcceptedResponsabilidades);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <Award className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Responsabilidades da função</h2>
        <p className="text-xs text-neutral-500 mt-1">Atividades e rotinas operacionais cotidianas</p>
      </div>

      <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
        <p className="text-xs font-medium text-neutral-600 mb-3 leading-relaxed">
          A profissional será responsável pelos cuidados da criança durante o horário de trabalho. As atividades incluem:
        </p>

        <ul className="space-y-2.5">
          {RESPONSIBILITIES_LIST.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs text-neutral-700">
              <span className="w-4.5 h-4.5 rounded-full bg-sage-50 flex items-center justify-center shrink-0 mt-0.5 border border-sage-100">
                <Check className="w-3.5 h-3.5 text-sage-600" />
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-neutral-100">
        <label className="flex items-start gap-3 cursor-pointer select-none group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="termsAcceptedResponsabilidades"
              checked={data.termsAcceptedResponsabilidades}
              onChange={handleCheckbox}
              className="peer appearance-none w-5 h-5 border border-neutral-350 rounded-md checked:bg-sage-400 checked:border-sage-400 focus:outline bg-white cursor-pointer transition-all duration-150"
            />
            <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 transition-transform duration-150" />
          </div>
          <span className="text-sm text-neutral-700 leading-snug group-hover:text-neutral-900 transition-colors duration-150">
            Li e concordo com as responsabilidades da vaga.
          </span>
        </label>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// TELA 4 — PONTUALIDADE E COMPROMISSO
// -------------------------------------------------------------
export const PunctualityStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onChange({ termsAcceptedPontualidade: checked });
    onValidate(checked);
  };

  React.useEffect(() => {
    onValidate(data.termsAcceptedPontualidade);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <CalendarDays className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Pontualidade e compromisso</h2>
        <p className="text-xs text-neutral-500 mt-1">Critérios de assiduidade e responsabilidade</p>
      </div>

      <div className="p-4 bg-orange-50/40 rounded-xl border border-orange-100 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
        <p className="text-xs text-orange-850 leading-relaxed font-medium">
          O cuidado de uma criança exige máxima assiduidade. A pontualidade é indispensável para o bom andamento da rotina familiar.
        </p>
      </div>

      <div className="space-y-2">
        {PUNCTUALITY_LIST.slice(1).map((item, index) => (
          <div key={index} className="p-3 bg-neutral-50 rounded-lg border border-neutral-100 text-xs text-neutral-700 flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-neutral-400 shrink-0 mt-1.5"></span>
            <span className="leading-relaxed">{item}</span>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-neutral-100">
        <label className="flex items-start gap-3 cursor-pointer select-none group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="termsAcceptedPontualidade"
              checked={data.termsAcceptedPontualidade}
              onChange={handleCheckbox}
              className="peer appearance-none w-5 h-5 border border-neutral-350 rounded-md checked:bg-sage-400 checked:border-sage-400 focus:outline bg-white cursor-pointer transition-all duration-150"
            />
            <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 transition-transform duration-150" />
          </div>
          <span className="text-sm text-neutral-700 leading-snug group-hover:text-neutral-900 transition-colors duration-150">
            Li e compreendi as informações acima.
          </span>
        </label>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// TELA 5 — CONDUTA PROFISSIONAL
// -------------------------------------------------------------
export const ConductStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onChange({ termsAcceptedConduta: checked });
    onValidate(checked);
  };

  React.useEffect(() => {
    onValidate(data.termsAcceptedConduta);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <ShieldCheck className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Conduta profissional</h2>
        <p className="text-xs text-neutral-500 mt-1">Diretrizes éticas e boa convivência</p>
      </div>

      <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-4">
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">Espera-se que a profissional:</p>
        <ul className="space-y-3">
          {CONDUCT_LIST.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs text-neutral-700">
              <span className="w-5 h-5 rounded-full bg-[#E9ECE7] text-sage-700 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                {index + 1}
              </span>
              <span className="leading-relaxed font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-neutral-100">
        <label className="flex items-start gap-3 cursor-pointer select-none group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="termsAcceptedConduta"
              checked={data.termsAcceptedConduta}
              onChange={handleCheckbox}
              className="peer appearance-none w-5 h-5 border border-neutral-350 rounded-md checked:bg-sage-400 checked:border-sage-400 focus:outline bg-white cursor-pointer transition-all duration-150"
            />
            <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 transition-transform duration-150" />
          </div>
          <span className="text-sm text-neutral-700 leading-snug group-hover:text-neutral-900 transition-colors duration-150">
            Li e concordo com as regras de conduta.
          </span>
        </label>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — DADOS PESSOAIS (ETAPA 1)
// -------------------------------------------------------------
export const FormPersonalDataStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const [localNome, setLocalNome] = React.useState(data.nome);
  const [localIdade, setLocalIdade] = React.useState(data.idade);
  const [localBairro, setLocalBairro] = React.useState(data.bairro);

  // Validate on load or change
  const validate = (n: string, i: string, b: string, kids: 'Sim' | 'Não' | '', count: string) => {
    const isNameValid = n.trim().length >= 3;
    const isAgeValid = i.trim().length > 0 && parseInt(i, 10) > 0;
    const isBairroValid = b.trim().length >= 2;
    const isKidsValid = kids === 'Não' || (kids === 'Sim' && count !== '');
    
    onValidate(isNameValid && isAgeValid && isBairroValid && isKidsValid);
  };

  const handleTextChange = (field: 'nome' | 'idade' | 'bairro', val: string) => {
    if (field === 'nome') setLocalNome(val);
    if (field === 'idade') setLocalIdade(val.replace(/\D/g, ''));
    if (field === 'bairro') setLocalBairro(val);

    const updated = {
      nome: field === 'nome' ? val : localNome,
      idade: field === 'idade' ? val.replace(/\D/g, '') : localIdade,
      bairro: field === 'bairro' ? val : localBairro,
    };
    
    onChange(updated);
    validate(updated.nome, updated.idade, updated.bairro, data.possuiFilhos, data.quantidadeFilhos);
  };

  const handleFilhosToggle = (val: 'Sim' | 'Não') => {
    const changes: Partial<ApplicationData> = { possuiFilhos: val };
    if (val === 'Não') {
      changes.quantidadeFilhos = '';
    }
    onChange(changes);
    validate(localNome, localIdade, localBairro, val, val === 'Não' ? '' : data.quantidadeFilhos);
  };

  const handleKidsCount = (count: '1' | '2' | '3' | '4 ou mais') => {
    onChange({ quantidadeFilhos: count });
    validate(localNome, localIdade, localBairro, data.possuiFilhos, count);
  };

  React.useEffect(() => {
    validate(data.nome, data.idade, data.bairro, data.possuiFilhos, data.quantidadeFilhos);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <User className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Dados Pessoais</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 1 de 8: Informações básicas</p>
      </div>

      <div className="space-y-4 text-left">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Nome Completo
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            value={localNome}
            onChange={(e) => handleTextChange('nome', e.target.value)}
            className="w-full h-11 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-sage-400 focus:ring-1 focus:ring-sage-400 focus:outline text-sm text-neutral-800 placeholder-neutral-400 transition-all duration-150 shadow-xs"
          />
        </div>

        {/* Idade & Bairro */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1">
            <label htmlFor="idade" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Idade
            </label>
            <input
              id="idade"
              type="text"
              inputMode="numeric"
              placeholder="Idade"
              value={localIdade}
              onChange={(e) => handleTextChange('idade', e.target.value)}
              className="w-full h-11 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-sage-400 focus:ring-1 focus:ring-sage-400 focus:outline text-sm text-neutral-800 placeholder-neutral-400 transition-all duration-150 shadow-xs text-center"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="bairro" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Bairro onde mora
            </label>
            <input
              id="bairro"
              type="text"
              placeholder="Ex: Santíssimo..."
              value={localBairro}
              onChange={(e) => handleTextChange('bairro', e.target.value)}
              className="w-full h-11 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-sage-400 focus:ring-1 focus:ring-sage-400 focus:outline text-sm text-neutral-800 placeholder-neutral-400 transition-all duration-150 shadow-xs"
            />
          </div>
        </div>

        {/* Filhos? Tile selection */}
        <div>
          <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Possui filhos?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              id="possuiFilhosSim"
              onClick={() => handleFilhosToggle('Sim')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.possuiFilhos === 'Sim'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              id="possuiFilhosNao"
              onClick={() => handleFilhosToggle('Não')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.possuiFilhos === 'Não'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Não
            </button>
          </div>
        </div>

        {/* Dynamic: Filhos count */}
        {data.possuiFilhos === 'Sim' && (
          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-150 space-y-2 animate-fade-in">
            <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide">
              Quantos filhos possui?
            </label>
            <div className="grid grid-cols-4 gap-2">
              {FILHOS_COUNT_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  id={`kidsCount-${opt}`}
                  onClick={() => handleKidsCount(opt)}
                  className={`h-10 flex items-center justify-center rounded-lg border text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    data.quantidadeFilhos === opt
                      ? 'border-sage-500 bg-sage-100 text-sage-900'
                      : 'border-neutral-250 bg-white hover:border-neutral-300 text-neutral-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — CONTATO (ETAPA 2)
// -------------------------------------------------------------
export const FormContactStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const [localWhatsapp, setLocalWhatsapp] = React.useState(data.whatsapp);
  const [localSocial, setLocalSocial] = React.useState(data.redeSocial);

  // Auto-format WhatsApp as user types: (XX) XXXXX-XXXX
  const formatWhatsappLocal = (digitsIn: string) => {
    const digits = digitsIn.replace(/\D/g, '');
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const validate = (wa: string) => {
    const digits = wa.replace(/\D/g, '');
    // Standard Brazilian mobile format with area code: minimum 10 or 11 digits
    onValidate(digits.length >= 10);
  };

  const handleWaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const formatted = formatWhatsappLocal(rawVal);
    setLocalWhatsapp(formatted);
    onChange({ whatsapp: formatted });
    validate(formatted);
  };

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setLocalSocial(val);
    onChange({ redeSocial: val });
  };

  React.useEffect(() => {
    validate(data.whatsapp);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100 font-poppins">
          <Phone className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Canais de Contato</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 2 de 8: Telefone e redes sociais</p>
      </div>

      <div className="space-y-4 text-left">
        <div>
          <label htmlFor="whatsapp" className="flex items-center justify-between text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            <span>Número do WhatsApp</span>
            <span className="text-[10px] text-sage-700 font-bold uppercase">Obrigatório</span>
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400">
              <Phone className="w-4 h-4" />
            </span>
            <input
              id="whatsapp"
              type="tel"
              placeholder="(93) 99158-0000"
              value={localWhatsapp}
              onChange={handleWaChange}
              className="w-full h-11 pl-10 pr-3.5 bg-white border border-neutral-300 rounded-xl focus:border-sage-400 focus:ring-1 focus:ring-sage-400 focus:outline text-sm text-neutral-800 placeholder-neutral-400 transition-all duration-150 shadow-xs"
            />
          </div>
          <p className="text-[10px] text-neutral-400 mt-1.5 leading-normal">
            Por favor, informe um número de WhatsApp válido com código de área (ex: DD 9XXXXXXXX).
          </p>
        </div>

        <div>
          <label htmlFor="redeSocial" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
            Rede social <span className="text-[10px] text-neutral-400 lowercase font-normal">(opcional)</span>
          </label>
          <input
            id="redeSocial"
            type="text"
            placeholder="@instagram ou facebook.com/perfil"
            value={localSocial}
            onChange={handleSocialChange}
            className="w-full h-11 px-3.5 bg-white border border-neutral-300 rounded-xl focus:border-sage-400 focus:ring-1 focus:ring-sage-400 focus:outline text-sm text-neutral-800 placeholder-neutral-400 transition-all duration-150 shadow-xs"
          />
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — EXPERIÊNCIA (ETAPA 3)
// -------------------------------------------------------------
export const FormExperienceStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const validate = (trb: 'Sim' | 'Não' | '', temp: string) => {
    onValidate(trb === 'Não' || (trb === 'Sim' && temp !== ''));
  };

  const handleWorkedToggle = (val: 'Sim' | 'Não') => {
    const changes: Partial<ApplicationData> = { trabalhouComoBaba: val };
    if (val === 'Não') {
      changes.tempoExperiencia = '';
    }
    onChange(changes);
    validate(val, val === 'Não' ? '' : data.tempoExperiencia);
  };

  const handleTimeSelect = (val: typeof EXP_OPTIONS[number]) => {
    onChange({ tempoExperiencia: val });
    validate(data.trabalhouComoBaba, val);
  };

  React.useEffect(() => {
    validate(data.trabalhouComoBaba, data.tempoExperiencia);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <Briefcase className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Experiência Profissional</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 3 de 8: Histórico como babá</p>
      </div>

      <div className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2.5">
            Já trabalhou como babá?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              id="workedBabaSim"
              onClick={() => handleWorkedToggle('Sim')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.trabalhouComoBaba === 'Sim'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              id="workedBabaNao"
              onClick={() => handleWorkedToggle('Não')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.trabalhouComoBaba === 'Não'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Não
            </button>
          </div>
        </div>

        {data.trabalhouComoBaba === 'Sim' && (
          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-150 space-y-2 animate-fade-in">
            <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide">
              Por quanto tempo trabalhou como babá?
            </label>
            <div className="grid grid-cols-1 gap-2.5">
              {EXP_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  id={`expTime-${opt}`}
                  onClick={() => handleTimeSelect(opt)}
                  className={`h-10 px-3.5 flex items-center justify-between rounded-lg border text-xs font-medium transition-all duration-150 cursor-pointer ${
                    data.tempoExperiencia === opt
                      ? 'border-sage-500 bg-sage-100 text-sage-900 border-2'
                      : 'border-neutral-250 bg-white hover:border-neutral-300 text-neutral-700'
                  }`}
                >
                  <span>{opt}</span>
                  {data.tempoExperiencia === opt && <Check className="w-4 h-4 text-sage-600 shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — TRANSPORTE (ETAPA 4)
// -------------------------------------------------------------
export const FormTransportStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const validate = (proprio: 'Sim' | 'Não' | '', util: string) => {
    onValidate(proprio !== '' && util !== '');
  };

  const handleOwnToggle = (val: 'Sim' | 'Não') => {
    onChange({ possuiTransporteProprio: val });
    validate(val, data.transporteUtilizado);
  };

  const handleTransportSelect = (val: typeof TRANS_OPTIONS[number]) => {
    onChange({ transporteUtilizado: val });
    validate(data.possuiTransporteProprio, val);
  };

  React.useEffect(() => {
    validate(data.possuiTransporteProprio, data.transporteUtilizado);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <Car className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Transporte e Mobilidade</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 4 de 8: Deslocamento até o trabalho</p>
      </div>

      <div className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2.5">
            Possui transporte próprio?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              id="transportProprioSim"
              onClick={() => handleOwnToggle('Sim')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.possuiTransporteProprio === 'Sim'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              id="transportProprioNao"
              onClick={() => handleOwnToggle('Não')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.possuiTransporteProprio === 'Não'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Não
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
            Qual transporte utiliza para se locomover?
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {TRANS_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                id={`transportUse-${opt}`}
                onClick={() => handleTransportSelect(opt)}
                className={`h-10 flex items-center justify-center rounded-lg border text-xs font-medium transition-all duration-150 cursor-pointer ${
                  data.transporteUtilizado === opt
                    ? 'border-sage-500 bg-sage-100 text-sage-900 font-semibold'
                    : 'border-neutral-250 bg-white hover:border-neutral-300 text-neutral-650'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — ATIVIDADES DA VAGA (ETAPA 5)
// -------------------------------------------------------------
export const FormActivitiesStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const handleToggle = (val: 'Sim' | 'Não') => {
    onChange({ dispostaAtividades: val });
    onValidate(true);
  };

  React.useEffect(() => {
    onValidate(data.dispostaAtividades !== '');
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100 font-poppins">
          <Smile className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Atividades Gerais</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 5 de 8: Disponibilidade operacional</p>
      </div>

      <div className="p-4 bg-sage-50 rounded-xl border border-sage-100/50 text-left">
        <p className="text-xs md:text-sm text-neutral-750 font-medium leading-relaxed">
          Você está disposta a realizar todas as atividades relacionadas aos cuidados da criança, incluindo alimentação, roupas, brinquedos e organização dos itens da criança?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          id="dispostaAtividadesSim"
          onClick={() => handleToggle('Sim')}
          className={`h-14 flex items-center justify-center rounded-xl border text-base font-semibold transition-all duration-150 cursor-pointer ${
            data.dispostaAtividades === 'Sim'
              ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-md scale-[1.02]'
              : 'border-neutral-200 bg-white hover:border-neutral-350 text-neutral-600'
          }`}
        >
          Sim
        </button>
        <button
          type="button"
          id="dispostaAtividadesNao"
          onClick={() => handleToggle('Não')}
          className={`h-14 flex items-center justify-center rounded-xl border text-base font-semibold transition-all duration-150 cursor-pointer ${
            data.dispostaAtividades === 'Não'
              ? 'border-sage-400 bg-sage-50 text-sage-850 shadow-md scale-[1.02]'
              : 'border-neutral-200 bg-white hover:border-neutral-350 text-neutral-600'
          }`}
        >
          Não
        </button>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — SAÚDE (ETAPA 6)
// -------------------------------------------------------------
export const FormHealthStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const [localLimitacao, setLocalLimitacao] = React.useState(data.descricaoLimitacao);

  const validate = (saude: 'Sim' | 'Não' | '', txt: string) => {
    onValidate(saude === 'Não' || (saude === 'Sim' && txt.trim().length >= 3));
  };

  const handleHealthToggle = (val: 'Sim' | 'Não') => {
    const changes: Partial<ApplicationData> = { possuiProblemaSaude: val };
    if (val === 'Não') {
      changes.descricaoLimitacao = '';
      setLocalLimitacao('');
    }
    onChange(changes);
    validate(val, val === 'Não' ? '' : localLimitacao);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setLocalLimitacao(val);
    onChange({ descricaoLimitacao: val });
    validate(data.possuiProblemaSaude, val);
  };

  React.useEffect(() => {
    validate(data.possuiProblemaSaude, data.descricaoLimitacao);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100 font-poppins">
          <Stethoscope className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Condições de Saúde</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 6 de 8: Aptidão e limitações</p>
      </div>

      <div className="space-y-4 text-left">
        <div>
          <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wide leading-relaxed mb-1.5">
            Possui algum problema de saúde que possa dificultar os cuidados com uma criança de 2 anos ou as atividades da vaga?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              id="healthProblemSim"
              onClick={() => handleHealthToggle('Sim')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.possuiProblemaSaude === 'Sim'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Sim
            </button>
            <button
              type="button"
              id="healthProblemNao"
              onClick={() => handleHealthToggle('Não')}
              className={`h-11 flex items-center justify-center rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer ${
                data.possuiProblemaSaude === 'Não'
                  ? 'border-sage-400 bg-sage-50 text-sage-800 shadow-xs'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50 text-neutral-600'
              }`}
            >
              Não
            </button>
          </div>
        </div>

        {data.possuiProblemaSaude === 'Sim' && (
          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-150 space-y-2 animate-fade-in">
            <label htmlFor="limitDescription" className="block text-xs font-semibold text-neutral-600 uppercase tracking-wide">
              Qual problema ou limitação?
            </label>
            <textarea
              id="limitDescription"
              rows={3}
              placeholder="Descreva detalhadamente sua limitação de saúde..."
              value={localLimitacao}
              onChange={handleTextChange}
              className="w-full p-3 bg-white border border-neutral-300 rounded-lg focus:border-sage-400 focus:ring-1 focus:ring-sage-400 focus:outline text-xs text-neutral-800 placeholder-neutral-400 transition-all duration-150 shadow-xs resize-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — PRETENSÃO SALARIAL (ETAPA 7)
// -------------------------------------------------------------
export const FormSalaryStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const handleSelect = (val: typeof SALARY_OPTIONS[number]) => {
    onChange({ pretensaoSalarial: val });
    onValidate(true);
  };

  React.useEffect(() => {
    onValidate(data.pretensaoSalarial !== '');
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-2">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <DollarSign className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Pretensão Salarial</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 7 de 8: Expectativa financeira</p>
      </div>

      <p className="text-xs text-neutral-500 text-center uppercase tracking-wider font-semibold">
        Qual sua pretensão salarial mensal?
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {SALARY_OPTIONS.map((opt) => (
          <button
            key={opt}
            type="button"
            id={`salaryExpect-${opt}`}
            onClick={() => handleSelect(opt)}
            className={`h-12 flex flex-col items-center justify-center rounded-xl border transition-all duration-155 cursor-pointer ${
              data.pretensaoSalarial === opt
                ? 'border-sage-500 bg-sage-50 text-sage-800 border-2 shadow-xs'
                : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600'
            }`}
          >
            <span className="text-xs text-neutral-400 uppercase tracking-widest font-semibold scale-90 -mb-0.5">Mensal</span>
            <span className="text-sm font-semibold">{opt}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// FORM — CONFIRMAÇÃO (ETAPA 8 / CONCLUSÃO)
// -------------------------------------------------------------
export const FormConfirmationStep: React.FC<StepViewProps> = ({ data, onChange, onValidate }) => {
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    onChange({ revisaoConfirmada: checked });
    onValidate(checked);
  };

  React.useEffect(() => {
    onValidate(data.revisaoConfirmada);
  }, []);

  return (
    <div className="space-y-5">
      <div className="text-center pb-1">
        <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center mx-auto mb-2 border border-sage-100">
          <FileText className="w-6 h-6 text-sage-500" />
        </div>
        <h2 className="text-xl font-semibold text-neutral-800">Leia atentamente</h2>
        <p className="text-xs text-neutral-500 mt-1">Etapa 8 de 8: Revisão e confirmação de dados</p>
      </div>

      <div className="bg-sage-50 border border-sage-100 p-4 rounded-xl text-left text-xs text-sage-850 leading-relaxed">
        <p className="font-semibold mb-1">Seu formulário foi preenchido com sucesso!</p>
        <p>
          Revise as informações fornecidas e, quando estiver pronta, clique no botão abaixo para enviar sua candidatura diretamente ao contratante.
        </p>
        <p className="mt-1.5 opacity-90">
          Ao enviar, todas as respostas preenchidas e todos os termos aceitos durante o cadastro serão encaminhados automaticamente para análise.
        </p>
      </div>

      {/* Accordion / Scrollable box summarizing inputs */}
      <div className="border border-neutral-200 rounded-xl max-h-52 overflow-y-auto bg-neutral-50/50 p-3.5 space-y-4 text-left">
        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider border-b border-neutral-150 pb-1.5">
          Resumo das Informações preenchidas
        </p>
        
        {/* Dados Pessoais */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-neutral-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-sage-400 rounded-full"></span>
            Dados Pessoais
          </p>
          <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 pl-3 text-neutral-600">
            <div><span className="font-medium">Nome:</span> {data.nome}</div>
            <div><span className="font-medium">Idade:</span> {data.idade} anos</div>
            <div><span className="font-medium">Bairro:</span> {data.bairro}</div>
            <div>
              <span className="font-medium">Filhos:</span> {data.possuiFilhos}
              {data.possuiFilhos === 'Sim' && ` (${data.quantidadeFilhos})`}
            </div>
          </div>
        </div>

        {/* Contato */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-neutral-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-sage-400 rounded-full"></span>
            Canais de Contato
          </p>
          <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 pl-3 text-neutral-600">
            <div><span className="font-medium">WhatsApp:</span> {data.whatsapp}</div>
            <div><span className="font-medium">Rede Social:</span> {data.redeSocial || 'Não informada'}</div>
          </div>
        </div>

        {/* Trabalho e Transporte */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-neutral-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-sage-400 rounded-full"></span>
            Experiência & Transporte
          </p>
          <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 pl-3 text-neutral-600">
            <div>
              <span className="font-medium">Exp. Babá:</span> {data.trabalhouComoBaba}
              {data.trabalhouComoBaba === 'Sim' && ` (${data.tempoExperiencia})`}
            </div>
            <div><span className="font-medium">Transp. Próprio:</span> {data.possuiTransporteProprio}</div>
            <div className="col-span-2"><span className="font-medium">Transporte utilizado:</span> {data.transporteUtilizado}</div>
          </div>
        </div>

        {/* Atividades e Saúde */}
        <div className="space-y-2 text-xs">
          <p className="font-semibold text-neutral-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-sage-400 rounded-full"></span>
            Requisitos & Saúde
          </p>
          <div className="grid grid-cols-1 gap-y-1.5 pl-3 text-neutral-600">
            <div>
              <span className="font-medium">Disposta a todas as tarefas:</span> {data.dispostaAtividades}
            </div>
            <div>
              <span className="font-medium">Problema ou restrição de saúde:</span> {data.possuiProblemaSaude}
              {data.possuiProblemaSaude === 'Sim' && ` - ${data.descricaoLimitacao}`}
            </div>
            <div>
              <span className="font-medium">Pretensão Salarial:</span> {data.pretensaoSalarial}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-neutral-100">
        <label className="flex items-start gap-3 cursor-pointer select-none group">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="revisaoConfirmada"
              checked={data.revisaoConfirmada}
              onChange={handleCheckbox}
              className="peer appearance-none w-5 h-5 border border-neutral-350 rounded-md checked:bg-sage-400 checked:border-sage-400 focus:outline bg-white cursor-pointer transition-all duration-150"
            />
            <Check className="absolute w-3.5 h-3.5 text-white pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 transition-transform duration-150" />
          </div>
          <span className="text-sm font-medium text-neutral-750 leading-snug group-hover:text-neutral-900 transition-colors duration-155">
            Confirmo que revisei minhas informações e desejo enviar minha candidatura.
          </span>
        </label>
      </div>
    </div>
  );
};
