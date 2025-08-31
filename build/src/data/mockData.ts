export const mockData = {
  // Dados do usuário
  usuario: {
    id: "1",
    nome: "Aluno",
    email: "aluno@aluno.com",
    avatar: "",
  },

  // Aulas para "Continuar Assistindo"
  continuarAssistindo: [
    {
      id: "1",
      titulo: "Tabelas Dinâmicas Avançadas",
      turma: "Excel Essencial",
      progresso: 45,
      duracaoRestante: "15 min restantes",
    },
    {
      id: "2", 
      titulo: "Estruturas de Repetição",
      turma: "Python para Iniciantes",
      progresso: 78,
      duracaoRestante: "5 min restantes",
    },
  ],

  // Progresso por turma
  progressoTurmas: [
    { nome: "Excel Essencial", progresso: 35 },
    { nome: "Python para Iniciantes", progresso: 60 },
    { nome: "n8n para Automação", progresso: 10 },
  ],

  // Notificações
  notificacoes: [
    {
      titulo: "Nova aula disponível: Webhooks e Gatilhos",
      tempo: "2 horas atrás",
    },
    {
      titulo: "Você completou 5 aulas esta semana!",
      tempo: "1 dia atrás",
    },
    {
      titulo: "Lembrete: Aula ao vivo hoje às 19h",
      tempo: "2 dias atrás",
    },
  ],

  // Turmas do aluno
  turmas: [
    {
      id: "1",
      nome: "Excel Essencial",
      professor: "Nara",
      aulas: Array.from({ length: 12 }, (_, i) => ({
        id: `excel-${i + 1}`,
        titulo: `Aula ${i + 1}: ${['Introdução ao Excel', 'Fórmulas Básicas', 'Formatação', 'Gráficos', 'Tabelas Dinâmicas', 'Funções Avançadas', 'Macros', 'Dashboard', 'Análise de Dados', 'Relatórios', 'Automação', 'Projeto Final'][i]}`,
        duracao: 30,
        status: i < 4 ? 'concluida' : i === 4 ? 'em-andamento' : 'nao-iniciada',
        descricao: `Descrição da aula ${i + 1} do curso de Excel Essencial`,
        tags: ['Excel', 'Planilhas', 'Microsoft'],
        materiais: [
          { nome: 'Apostila.pdf', url: '#' },
          { nome: 'Exercícios.xlsx', url: '#' },
        ],
        capitulos: [
          { titulo: 'Introdução', tempo: '0:00' },
          { titulo: 'Desenvolvimento', tempo: '10:00' },
          { titulo: 'Exercícios', tempo: '20:00' },
        ],
      })),
      proximaAula: "Tabelas Dinâmicas (30 min)",
      duracao: "6 horas",
      progresso: 35,
    },
    {
      id: "2",
      nome: "Python para Iniciantes",
      professor: "Caio Rossi",
      aulas: Array.from({ length: 10 }, (_, i) => ({
        id: `python-${i + 1}`,
        titulo: `Aula ${i + 1}: ${['Introdução ao Python', 'Variáveis e Tipos', 'Estruturas Condicionais', 'Estruturas de Repetição', 'Funções', 'Listas e Dicionários', 'Módulos', 'POO', 'Tratamento de Erros', 'Projeto Final'][i]}`,
        duracao: 25,
        status: i < 6 ? 'concluida' : i === 6 ? 'em-andamento' : 'nao-iniciada',
        descricao: `Descrição da aula ${i + 1} do curso de Python para Iniciantes`,
        tags: ['Python', 'Programação', 'Backend'],
        materiais: [
          { nome: 'Código da Aula.py', url: '#' },
          { nome: 'Slides.pdf', url: '#' },
        ],
        capitulos: [
          { titulo: 'Conceitos', tempo: '0:00' },
          { titulo: 'Prática', tempo: '8:00' },
          { titulo: 'Exercícios', tempo: '18:00' },
        ],
      })),
      proximaAula: "Estruturas de Repetição (25 min)",
      duracao: "4.2 horas",
      progresso: 60,
    },
    {
      id: "3",
      nome: "n8n para Automação",
      professor: "Humberto",
      aulas: Array.from({ length: 8 }, (_, i) => ({
        id: `n8n-${i + 1}`,
        titulo: `Aula ${i + 1}: ${['Introdução ao n8n', 'Primeiro Workflow', 'Webhooks e Gatilhos', 'Integração com APIs', 'Processamento de Dados', 'Automação de E-mails', 'Monitoramento', 'Projeto Completo'][i]}`,
        duracao: 20,
        status: i < 1 ? 'concluida' : i === 1 ? 'em-andamento' : 'nao-iniciada',
        descricao: `Descrição da aula ${i + 1} do curso de n8n para Automação`,
        tags: ['n8n', 'Automação', 'No-Code'],
        materiais: [
          { nome: 'Workflow.json', url: '#' },
          { nome: 'Documentação.pdf', url: '#' },
        ],
        capitulos: [
          { titulo: 'Setup', tempo: '0:00' },
          { titulo: 'Configuração', tempo: '5:00' },
          { titulo: 'Teste', tempo: '15:00' },
        ],
      })),
      proximaAula: "Webhooks e Gatilhos (20 min)",
      duracao: "2.7 horas", 
      progresso: 10,
    },
  ],

  // Todas as aulas (para página de aulas)
  todasAulas: [] as any[], // Será populado dinamicamente das turmas
};

// Popular todas as aulas
mockData.todasAulas = mockData.turmas.flatMap(turma => 
  turma.aulas.map(aula => ({
    ...aula,
    turma: turma.nome,
    professor: turma.professor,
  }))
);