'use client';

import { useState } from 'react';

export default function DeleteAccount() {
  const [confirmed, setConfirmed] = useState(false);
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically make an API call to request account deletion
  };

  if (submitted) {
    return (
      <div className="p-6 max-w-md mx-auto text-center">
        <div className="card">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#B026FF] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="heading">Solicitação Recebida</h1>
          <p className="text-[#A0A0A0] mb-6">
            Sua solicitação de exclusão de conta foi recebida. Processaremos seu pedido em até 30 dias.
          </p>
          <p className="text-sm text-[#A0A0A0]">
            Você receberá um email de confirmação quando sua conta for excluída.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="heading text-2xl mb-6">Excluir Conta</h1>

      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">⚠️ Aviso Importante</h2>
        <ul className="text-[#A0A0A0] space-y-3 mb-6">
          <li>• Todos os seus dados serão permanentemente excluídos</li>
          <li>• Seu histórico financeiro não poderá ser recuperado</li>
          <li>• O processo pode levar até 30 dias</li>
          <li>• Esta ação não pode ser desfeita</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card">
          <label className="block mb-4">
            <span className="text-[#A0A0A0] mb-2 block">Por que você está excluindo sua conta?</span>
            <textarea
              className="w-full bg-[#1A1A1A] border border-[#333333] rounded-lg p-3 text-[#E5E5E5] focus:outline-none focus:border-[#B026FF] transition-colors"
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Sua opinião é importante para nós..."
            />
          </label>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="mt-1"
            />
            <span className="text-sm text-[#A0A0A0]">
              Eu entendo que ao excluir minha conta, todos os dados serão permanentemente apagados e não poderão ser recuperados.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!confirmed}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
            confirmed
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-[#333333] text-[#666666] cursor-not-allowed'
          }`}
        >
          Solicitar Exclusão da Conta
        </button>

        <p className="text-sm text-[#A0A0A0] text-center">
          Precisa de ajuda? <a href="/support" className="text-[#B026FF] hover:underline">Entre em contato com o suporte</a>
        </p>
      </form>
    </div>
  );
} 