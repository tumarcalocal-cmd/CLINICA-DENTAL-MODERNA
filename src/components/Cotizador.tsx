import React, { useState } from 'react';
import { DentalTreatment, SelectedTreatment, AdditionalService, SpecialtyCategory } from '../types/dental';
import { DENTAL_TREATMENTS, SPECIALTY_CATEGORIES, INITIAL_ADDITIONAL_SERVICES } from '../data/dentalData';
import { Calculator, Trash2, Plus, Minus, ArrowRight, RefreshCw, CheckSquare, Square, AlertCircle, Clock } from 'lucide-react';

interface CotizadorProps {
  selectedTreatments: SelectedTreatment[];
  setSelectedTreatments: React.Dispatch<React.SetStateAction<SelectedTreatment[]>>;
  additionalServices: AdditionalService[];
  setAdditionalServices: React.Dispatch<React.SetStateAction<AdditionalService[]>>;
  onContinueToBooking: () => void;
}

export const Cotizador: React.FC<CotizadorProps> = ({
  selectedTreatments,
  setSelectedTreatments,
  additionalServices,
  setAdditionalServices,
  onContinueToBooking,
}) => {
  const [activeSpecialty, setActiveSpecialty] = useState<SpecialtyCategory>('TODAS');
  const [selectedTreatmentIdToAdd, setSelectedTreatmentIdToAdd] = useState<string>('');

  // Add treatment to calculator
  const handleAddTreatment = (treatmentId: string) => {
    if (!treatmentId) return;
    const treatment = DENTAL_TREATMENTS.find(t => t.id === treatmentId);
    if (!treatment) return;

    const existingIndex = selectedTreatments.findIndex(st => st.treatment.id === treatment.id);
    if (existingIndex > -1) {
      // Increase quantity
      const updated = [...selectedTreatments];
      updated[existingIndex].quantity += 1;
      updated[existingIndex].subtotalUSD = updated[existingIndex].quantity * treatment.priceUSD;
      setSelectedTreatments(updated);
    } else {
      setSelectedTreatments(prev => [
        ...prev,
        {
          treatment,
          quantity: 1,
          subtotalUSD: treatment.priceUSD,
        }
      ]);
    }
    setSelectedTreatmentIdToAdd('');
  };

  // Modify quantity
  const handleQuantityChange = (treatmentId: string, delta: number) => {
    setSelectedTreatments(prev => {
      return prev.map(st => {
        if (st.treatment.id === treatmentId) {
          const newQty = Math.max(1, st.quantity + delta);
          return {
            ...st,
            quantity: newQty,
            subtotalUSD: newQty * st.treatment.priceUSD,
          };
        }
        return st;
      });
    });
  };

  // Remove treatment
  const handleRemoveTreatment = (treatmentId: string) => {
    setSelectedTreatments(prev => prev.filter(st => st.treatment.id !== treatmentId));
  };

  // Toggle additional service
  const handleToggleAdditional = (serviceId: string) => {
    setAdditionalServices(prev =>
      prev.map(serv => serv.id === serviceId ? { ...serv, selected: !serv.selected } : serv)
    );
  };

  // Clear all selections
  const handleClearAll = () => {
    setSelectedTreatments([]);
    setAdditionalServices(prev => prev.map(s => ({ ...s, selected: false })));
  };

  // Calculations
  const treatmentsSubtotal = selectedTreatments.reduce((sum, st) => sum + st.subtotalUSD, 0);
  const additionalsSubtotal = additionalServices
    .filter(s => s.selected)
    .reduce((sum, s) => sum + s.priceUSD, 0);
  const grandTotal = treatmentsSubtotal + additionalsSubtotal;

  // Approximate duration calculation
  const totalDurationMinutes = selectedTreatments.reduce((sum, st) => {
    const durationMatch = st.treatment.indicativeDuration.match(/(\d+)/);
    const mins = durationMatch ? parseInt(durationMatch[1], 10) : 30;
    return sum + (mins * st.quantity);
  }, 0);

  const availableTreatmentsForCategory = activeSpecialty === 'TODAS'
    ? DENTAL_TREATMENTS
    : DENTAL_TREATMENTS.filter(t => t.specialty === activeSpecialty);

  return (
    <section id="cotizador" className="py-20 bg-[#10283F] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A46D]/20 text-[#C5A46D] text-xs font-bold uppercase tracking-wider border border-[#C5A46D]/30">
            <Calculator className="w-4 h-4" />
            <span>COTIZADOR INTERACTIVO DENTAL</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            CALCULA EL PRESUPUESTO ESTIMADO DE TU TRATAMIENTO DENTAL.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Selecciona los servicios que deseas consultar y obtén un presupuesto orientativo para planificar tu visita con total claridad.
          </p>
        </div>

        {/* Cotizador Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Selector & Services (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1 & 2: Category Filter & Add Treatment Selector */}
            <div className="bg-[#183a5a]/80 border border-[#C5A46D]/30 rounded-2xl p-6 space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C5A46D] text-[#10283F] flex items-center justify-center text-xs font-extrabold">1</span>
                  Seleccionar Especialidad y Tratamiento
                </span>
                <span className="text-[11px] text-gray-400">Selección múltiple disponible</span>
              </div>

              {/* Specialty Category Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300 block">Especialidad:</label>
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                  {SPECIALTY_CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveSpecialty(cat)}
                      className={`px-3 py-1.5 text-[11px] font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                        activeSpecialty === cat
                          ? 'bg-[#C5A46D] text-[#10283F]'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dropdown to pick & add treatment */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-300 block">Tratamiento a cotizar:</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <select
                    value={selectedTreatmentIdToAdd}
                    onChange={(e) => setSelectedTreatmentIdToAdd(e.target.value)}
                    className="flex-1 bg-[#10283F] text-white text-xs border border-white/20 rounded-lg p-3 focus:outline-none focus:border-[#C5A46D]"
                  >
                    <option value="">-- Elige un tratamiento ({availableTreatmentsForCategory.length} disponibles) --</option>
                    {availableTreatmentsForCategory.map(t => (
                      <option key={t.id} value={t.id}>
                        {t.name} — ${t.priceUSD} USD ({t.indicativeDuration})
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => handleAddTreatment(selectedTreatmentIdToAdd)}
                    disabled={!selectedTreatmentIdToAdd}
                    className="px-5 py-3 bg-[#C5A46D] hover:bg-[#b38f56] disabled:opacity-40 disabled:cursor-not-allowed text-[#10283F] font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Step 3: Selected Treatments List */}
            <div className="bg-[#183a5a]/80 border border-[#C5A46D]/30 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#C5A46D] text-[#10283F] flex items-center justify-center text-xs font-extrabold">2</span>
                  Tratamientos Seleccionados ({selectedTreatments.length})
                </span>
                {selectedTreatments.length > 0 && (
                  <button 
                    onClick={handleClearAll}
                    className="text-xs text-red-300 hover:text-red-100 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Limpiar todo</span>
                  </button>
                )}
              </div>

              {selectedTreatments.length === 0 ? (
                <div className="text-center py-8 text-gray-400 space-y-2 border border-dashed border-white/10 rounded-xl">
                  <Calculator className="w-8 h-8 text-[#C5A46D]/50 mx-auto" />
                  <p className="text-xs">Aún no has agregado tratamientos a tu presupuesto.</p>
                  <p className="text-[11px] text-gray-500">Selecciona arriba los tratamientos que te interesan o explora nuestro catálogo.</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                  {selectedTreatments.map((item) => (
                    <div 
                      key={item.treatment.id}
                      className="p-4 rounded-xl bg-[#10283F] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-white">{item.treatment.name}</h4>
                        <span className="text-[10px] text-[#C5A46D] uppercase tracking-wider block">{item.treatment.specialty}</span>
                        <span className="text-[11px] text-gray-400">Duración: {item.treatment.indicativeDuration}</span>
                      </div>

                      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                        
                        {/* Quantity controls if applicable */}
                        {item.treatment.allowsQuantity ? (
                          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-md p-1">
                            <button
                              onClick={() => handleQuantityChange(item.treatment.id, -1)}
                              className="p-1 hover:bg-white/10 rounded text-gray-300 hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-white">
                              {item.quantity} {item.treatment.unitLabel || 'unid'}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.treatment.id, 1)}
                              className="p-1 hover:bg-white/10 rounded text-gray-300 hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400 font-medium">1 unidad</span>
                        )}

                        <div className="text-right">
                          <span className="text-sm font-bold text-white block">
                            ${item.subtotalUSD} USD
                          </span>
                        </div>

                        <button
                          onClick={() => handleRemoveTreatment(item.treatment.id)}
                          className="p-1.5 text-red-400 hover:text-red-200 hover:bg-red-500/20 rounded transition-colors"
                          title="Eliminar del cotizador"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Step 4: Complementary Services */}
            <div className="bg-[#183a5a]/80 border border-[#C5A46D]/30 rounded-2xl p-6 space-y-4">
              <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#C5A46D] text-[#10283F] flex items-center justify-center text-xs font-extrabold">3</span>
                Servicios Complementarios Opcionales
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {additionalServices.map(service => (
                  <button
                    key={service.id}
                    onClick={() => handleToggleAdditional(service.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                      service.selected
                        ? 'bg-[#10283F] border-[#C5A46D] text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="mt-0.5 text-[#C5A46D] shrink-0">
                      {service.selected ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 opacity-50" />}
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center gap-2">
                        <span className="font-bold text-xs text-white">{service.name}</span>
                        <span className="text-xs font-bold text-[#C5A46D]">${service.priceUSD} USD</span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-snug">{service.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Total Summary Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-[#183a5a] to-[#10283F] border-2 border-[#C5A46D] rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl sticky top-28">
              
              <div className="border-b border-white/15 pb-4">
                <span className="text-xs font-bold text-[#C5A46D] uppercase tracking-widest block">RESUMEN DEL PRESUPUESTO</span>
                <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">Presupuesto Estimado</h3>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal Tratamientos ({selectedTreatments.length}):</span>
                  <span className="font-bold text-white">${treatmentsSubtotal} USD</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Servicios adicionales:</span>
                  <span className="font-bold text-white">${additionalsSubtotal} USD</span>
                </div>

                <div className="flex justify-between text-gray-300 pt-2 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A46D]" />
                    Duración aproximada:
                  </span>
                  <span className="font-bold text-[#C5A46D]">
                    {totalDurationMinutes > 0 ? `${totalDurationMinutes} minutos aprox.` : '0 min'}
                  </span>
                </div>
              </div>

              {/* Total display */}
              <div className="bg-[#10283F] p-5 rounded-xl border border-[#C5A46D]/40 text-center space-y-1">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block">TOTAL ESTIMADO EN DEMOSTRACIÓN</span>
                <span className="font-serif-luxury text-4xl font-bold text-[#C5A46D]">
                  ${grandTotal} USD
                </span>
                <span className="text-[10px] text-gray-400 block pt-1">
                  *Impuestos y facilidades de pago a consultar en clínica
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={onContinueToBooking}
                  disabled={selectedTreatments.length === 0}
                  className="w-full py-4 bg-[#C5A46D] hover:bg-[#b38f56] disabled:opacity-50 disabled:cursor-not-allowed text-[#10283F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>CONTINUAR A RESERVA DE CITA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="#tratamientos"
                    className="py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-[11px] font-semibold text-center rounded-lg transition-colors block"
                  >
                    AGREGAR OTRO
                  </a>
                  <button
                    onClick={handleClearAll}
                    className="py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-[11px] font-semibold text-center rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>LIMPIAR SELECCIÓN</span>
                  </button>
                </div>
              </div>

              {/* Mandatory Illustrative Disclaimer */}
              <div className="p-4 rounded-xl bg-black/30 border border-white/10 text-[11px] text-gray-300 space-y-1 leading-relaxed">
                <div className="flex items-center gap-1.5 text-[#C5A46D] font-bold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Aviso de Transparencia:</span>
                </div>
                <p>
                  Los precios son ilustrativos y corresponden a esta demostración comercial. El costo definitivo depende de la evaluación odontológica, el diagnóstico clínico y el plan de tratamiento final personalizado.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
