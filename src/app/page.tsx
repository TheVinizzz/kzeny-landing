'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-width relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="heading-xl mb-6">
                <span className="text-gradient">Finanças</span> sob controle, vida em harmonia
              </h1>
              <p className="subtitle mb-8">
                Gerencie suas finanças com elegância e simplicidade. Uma experiência premium para suas conquistas financeiras.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
                <button className="gradient-button inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Começar Agora
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ver Demo
                </button>
              </div>
            </div>

            {/* App Preview */}
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 blur-3xl rounded-full transform -translate-y-1/2"></div>
              <div className="relative animate-float">
                {/* Phone Frame SVG */}
                <div className="relative w-full aspect-[1/2] max-w-sm mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 320 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Phone Frame */}
                    <rect x="0" y="0" width="320" height="640" rx="40" fill="#1E293B" />
                    <rect x="8" y="8" width="304" height="624" rx="32" fill="#0F172A" />
                    
                    {/* Status Bar */}
                    <rect x="16" y="16" width="288" height="32" rx="16" fill="#1E293B" />
                    
                    {/* App Content */}
                    <g transform="translate(24, 64)">
                      {/* Header */}
                      <text x="0" y="24" fill="#F8FAFC" fontSize="24" fontWeight="bold">Bem-vindo de volta</text>
                      <text x="0" y="48" fill="#94A3B8" fontSize="16">sábado</text>
                      
                      {/* Balance Card */}
                      <rect x="0" y="72" width="272" height="160" rx="24" fill="rgba(30, 41, 59, 0.5)" />
                      <text x="24" y="108" fill="#94A3B8" fontSize="14">Saldo Total • dezembro</text>
                      <text x="24" y="144" fill="#7C3AED" fontSize="32" fontWeight="bold">R$ 97,22</text>
                      <rect x="24" y="168" width="224" height="40" rx="12" fill="#7C3AED" />
                      <text x="136" y="192" fill="white" fontSize="14" textAnchor="middle">Nova Transação</text>
                      
                      {/* Financial Summary */}
                      <text x="0" y="272" fill="#7C3AED" fontSize="20" fontWeight="bold">Ciclos Financeiros</text>
                      <text x="0" y="296" fill="#94A3B8" fontSize="16">Histórico mensal</text>
                      
                      {/* Summary Card */}
                      <rect x="0" y="320" width="272" height="160" rx="24" fill="rgba(30, 41, 59, 0.5)" />
                      <text x="24" y="356" fill="#F8FAFC" fontSize="16">dezembro de 2024</text>
                      <text x="24" y="392" fill="#94A3B8" fontSize="14">Entradas</text>
                      <text x="200" y="392" fill="#10B981" fontSize="14" textAnchor="end">+ R$ 1.222,22</text>
                      <text x="24" y="428" fill="#94A3B8" fontSize="14">Saídas</text>
                      <text x="200" y="428" fill="#EF4444" fontSize="14" textAnchor="end">- R$ 1.125,00</text>
                      <line x1="24" y1="448" x2="248" y2="448" stroke="#1E293B" strokeWidth="1" />
                      <text x="24" y="464" fill="#94A3B8" fontSize="14">Saldo</text>
                      <text x="200" y="464" fill="#10B981" fontSize="14" textAnchor="end">+ R$ 97,22</text>
                    </g>
                    
                    {/* Navigation Bar */}
                    <rect x="16" y="592" width="288" height="32" rx="16" fill="#1E293B" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background-light/5">
        <div className="container-width">
          <h2 className="heading-lg text-center mb-16">
            Recursos <span className="text-gradient">Premium</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="gradient-card p-8 fade-in-up">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="heading-md mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-gradient">{stat.value}</span>
                </div>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-primary-dark/5">
        <div className="container-width text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-6">
              Pronto para transformar suas <span className="text-gradient">finanças</span>?
            </h2>
            <p className="subtitle mb-8">
              Junte-se a milhares de pessoas que já estão gerenciando suas finanças de forma inteligente e elegante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="gradient-button inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.577 7.203c-.605-.244-1.328-.12-1.799.31-.473.43-.675 1.092-.542 1.71.134.62.601 1.105 1.195 1.24.594.135 1.214-.09 1.586-.576.372-.486.467-1.17.244-1.776-.224-.605-.774-1.027-1.684-.908zM8.677 2.693c-.58-.295-1.287-.213-1.78.207-.492.42-.73 1.068-.635 1.698.094.63.518 1.152 1.09 1.332.57.18 1.204.01 1.615-.432.412-.442.557-1.118.37-1.736-.186-.617-.704-1.068-1.66-1.069z"/>
                </svg>
                App Store
              </a>
              <a href="#" className="gradient-button inline-flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414C17.523 16.0194 16.9497 16.5926 16.2717 16.5926H8.92167C8.24367 16.5926 7.67041 16.0194 7.67041 15.3414V9.24139C7.67041 8.56339 8.24367 7.99012 8.92167 7.99012H16.2717C16.9497 7.99012 17.523 8.56339 17.523 9.24139V15.3414Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding border-t border-white/10">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">KZeny</h3>
              <p className="text-text-secondary">Suas finanças, simplificadas.</p>
            </div>
            <div className="flex gap-8">
              <a href="/terms" className="text-text-secondary hover:text-primary transition-colors">Termos</a>
              <a href="/privacy" className="text-text-secondary hover:text-primary transition-colors">Privacidade</a>
              <a href="/support" className="text-text-secondary hover:text-primary transition-colors">Suporte</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-text-secondary text-sm">
            © 2024 KZeny. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Análise Inteligente",
    description: "Insights personalizados sobre seus gastos e investimentos com IA avançada."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Segurança Total",
    description: "Proteção de dados com criptografia de ponta e autenticação avançada."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Relatórios Detalhados",
    description: "Visualize seus dados financeiros com gráficos elegantes e interativos."
  }
];

const stats = [
  {
    value: "50K+",
    label: "Usuários Ativos"
  },
  {
    value: "R$ 1M+",
    label: "Transações Processadas"
  },
  {
    value: "4.9",
    label: "Avaliação na App Store"
  }
];
