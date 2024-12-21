'use client';

export default function Privacy() {
  return (
    <div className="min-h-screen py-12">
      <div className="container-width">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <h1 className="heading-xl mb-8">
            <span className="text-gradient">Política de Privacidade</span>
          </h1>
          <p className="subtitle mb-12">Sua privacidade é nossa prioridade. Saiba como protegemos seus dados.</p>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Introdução</h2>
              <p className="text-text-secondary leading-relaxed">
                A KZeny está comprometida em proteger sua privacidade e seus dados pessoais. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações ao usar nosso aplicativo.
              </p>
            </section>

            {/* Data Collection */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Dados Coletados</h2>
              <div className="space-y-4 text-text-secondary">
                <p className="leading-relaxed">
                  Coletamos apenas as informações necessárias para fornecer nossos serviços:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Informações de registro (nome, email)</li>
                  <li>Dados financeiros inseridos por você</li>
                  <li>Informações de uso do aplicativo</li>
                  <li>Preferências e configurações</li>
                </ul>
              </div>
            </section>

            {/* Data Usage */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Uso dos Dados</h2>
              <div className="space-y-4 text-text-secondary">
                <p className="leading-relaxed">
                  Utilizamos seus dados para:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer análises financeiras personalizadas</li>
                  <li>Melhorar nossos serviços e funcionalidades</li>
                  <li>Enviar notificações importantes sobre sua conta</li>
                  <li>Garantir a segurança de suas informações</li>
                </ul>
              </div>
            </section>

            {/* Data Protection */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Proteção de Dados</h2>
              <div className="space-y-4 text-text-secondary">
                <p className="leading-relaxed">
                  Implementamos medidas rigorosas de segurança:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Criptografia de ponta a ponta</li>
                  <li>Autenticação de dois fatores</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares e seguros</li>
                </ul>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Compartilhamento</h2>
              <p className="text-text-secondary leading-relaxed">
                Não compartilhamos suas informações pessoais com terceiros sem seu consentimento explícito. Apenas em casos exigidos por lei ou para proteger nossos direitos legais, podemos compartilhar dados com autoridades competentes.
              </p>
            </section>

            {/* User Rights */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Seus Direitos</h2>
              <div className="space-y-4 text-text-secondary">
                <p className="leading-relaxed">
                  Você tem direito a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Solicitar correções de informações</li>
                  <li>Excluir sua conta e dados</li>
                  <li>Exportar suas informações</li>
                </ul>
              </div>
            </section>

            {/* Updates */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Atualizações da Política</h2>
              <p className="text-text-secondary leading-relaxed">
                Esta política pode ser atualizada periodicamente. Notificaremos você sobre mudanças significativas através do aplicativo ou por email.
              </p>
            </section>

            {/* Contact */}
            <section className="gradient-card p-8">
              <h2 className="heading-md mb-4 text-primary">Contato</h2>
              <p className="text-text-secondary leading-relaxed">
                Para questões sobre privacidade ou exercer seus direitos, entre em contato:
              </p>
              <div className="mt-4">
                <a href="mailto:privacy@kzeny.com" className="text-primary hover:text-primary-dark transition-colors">
                  privacy@kzeny.com
                </a>
              </div>
            </section>

            {/* Last Update */}
            <div className="text-center text-text-secondary text-sm">
              Última atualização: Dezembro 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 