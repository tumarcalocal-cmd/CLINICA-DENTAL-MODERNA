import React from 'react';
import { UserCheck, Microscope, ShieldCheck } from 'lucide-react';
import { CLINIC_BENEFITS } from '../data/dentalData';

const BENEFIT_ICONS = [UserCheck, Microscope, ShieldCheck];

export const BenefitsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 sm:py-20 bg-white text-[#41474D] border-y border-[#E8E9E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">
            Por qué elegirnos
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#10283F]">
            Nuestros pilares de atención
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {CLINIC_BENEFITS.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index] || ShieldCheck;
            return (
              <div
                key={benefit.id}
                className="p-7 rounded-2xl bg-[#FAF9F6] border border-[#E8E9E7] space-y-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#10283F] text-[#C5A46D] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#10283F]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#41474D] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
