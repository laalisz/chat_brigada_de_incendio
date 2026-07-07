const baseDeConhecimento = [
    {
        id: "fumaca_geral",
        palavrasChave: ["fumaca", "intoxicacao"],
        excecoes: ["mascara", "improvisar"],
        resposta: "Diretriz de Segurança: Em caso de fumaça densa, mantenha-se próximo ao chão, cubra as vias respiratórias com tecido e siga a sinalização de emergência.",
        sugestoes: ["Como improvisar uma máscara?", "Qual a distância segura?", "Ver rota de fuga"]
    },
    {
        id: "mascara",
        palavrasChave: ["mascara", "improvisar", "pano"],
        excecoes: [],
        resposta: "Para improvisar uma proteção respiratória, utilize um pedaço de tecido de algodão umedecido em água. Amarre-o cobrindo nariz e boca para filtrar partículas tóxicas.",
        sugestoes: ["Qual a distância segura?", "Ver menu principal"]
    },
    {
        id: "distancia",
        palavrasChave: ["distancia", "segura", "afastar"],
        excecoes: [],
        resposta: "Mantenha-se o mais distante possível do foco de calor e fumaça. Se estiver confinado, vede as frestas de portas com toalhas úmidas e aguarde o resgate próximo a janelas.",
        sugestoes: ["Ver rota de fuga", "Ver menu principal"]
    },
    {
        id: "extintor_geral",
        palavrasChave: ["extintor", "apagar", "fogo"],
        excecoes: ["destravar", "classe a", "classe b", "classe c"],
        resposta: "Protocolo de Extintores: Identifique a classe de incêndio antes de agir. Usar o extintor errado pode agravar a situação severamente.",
        sugestoes: ["Como destravar o extintor?", "O que é fogo Classe A?", "O que é fogo Classe B?", "O que é fogo Classe C?"]
    },
    {
        id: "extintor_uso",
        palavrasChave: ["destravar", "usar", "pino"],
        excecoes: [],
        resposta: "Para destravar o extintor: 1. Rompa o lacre de plástico. 2. Puxe o pino de segurança metálico. 3. Aponte a mangueira para a base do fogo. 4. Aperte o gatilho.",
        sugestoes: ["Ver menu principal"]
    },
    {
        id: "classe_a",
        palavrasChave: ["classe a", "madeira", "papel"],
        excecoes: [],
        resposta: "Fogo Classe A ocorre em materiais sólidos que deixam resíduos, como madeira, papel e tecido. O melhor agente extintor é a Água, que age por resfriamento.",
        sugestoes: ["O que é fogo Classe B?", "O que é fogo Classe C?"]
    },
    {
        id: "classe_b",
        palavrasChave: ["classe b", "liquido", "gasolina", "alcool"],
        excecoes: [],
        resposta: "Fogo Classe B ocorre em líquidos e gases inflamáveis, como álcool, óleo e gasolina. Nunca use água. Utilize extintores de Pó Químico ou CO2, que agem por abafamento.",
        sugestoes: ["O que é fogo Classe A?", "O que é fogo Classe C?"]
    },
    {
        id: "classe_c",
        palavrasChave: ["classe c", "eletrico", "choque", "computador"],
        excecoes: [],
        resposta: "Fogo Classe C envolve equipamentos elétricos energizados, como computadores e quadros de força. Utilize extintor de CO2 ou Pó Químico. Nunca use água para evitar choques elétricos mortais.",
        sugestoes: ["Como destravar o extintor?", "Ver rota de fuga"]
    },
    {
        id: "evacuacao",
        palavrasChave: ["rota", "fuga", "evacuar", "sair"],
        excecoes: ["bloqueada", "elevador"],
        resposta: "Procedimento de Evacuação: Siga as placas luminosas verdes. Caminhe em passo rápido, sem correr. Utilize as escadas de emergência mantendo-se sempre à direita.",
        sugestoes: ["O que fazer se a escada estiver bloqueada?", "Posso usar o elevador?", "Onde é o ponto de encontro?"]
    },
    {
        id: "bloqueio",
        palavrasChave: ["bloqueada", "fechada", "trancada"],
        excecoes: [],
        resposta: "Se a escada principal estiver bloqueada por fogo ou fumaça densa, retorne para uma área segura, busque uma rota alternativa ou acesse a área de refúgio e aguarde o resgate.",
        sugestoes: ["Onde é o ponto de encontro?", "Ver menu principal"]
    },
    {
        id: "elevador",
        palavrasChave: ["elevador"],
        excecoes: [],
        resposta: "Nunca utilize elevadores em caso de incêndio. A energia pode ser cortada, prendendo ocupantes, e o poço do elevador age como uma chaminé canalizando a fumaça tóxica.",
        sugestoes: ["Como ajudar pessoas com mobilidade reduzida?", "Ver rota de fuga"]
    },
    {
        id: "ponto_encontro",
        palavrasChave: ["ponto de encontro", "reunir", "onde ir"],
        excecoes: [],
        resposta: "O Ponto de Encontro é a área externa e segura designada para reunir todos os ocupantes após a evacuação. Permaneça no local até que o líder da brigada realize a contagem e os Bombeiros liberem a área.",
        sugestoes: ["Ver rota de fuga", "Ver menu principal"]
    },
    {
        id: "menu",
        palavrasChave: ["menu", "inicio", "voltar"],
        excecoes: [],
        resposta: "Retornando ao menu principal. Selecione a área de interesse para obter diretrizes técnicas e operacionais:",
        sugestoes: ["Como usar extintores?", "Primeiros Socorros", "Evacuação e Fuga", "Vazamento de Gás"]
    },
    {
        id: "socorro",
        palavrasChave: ["humano", "socorro", "bombeiro", "193"],
        excecoes: [],
        resposta: "Registrando solicitação para atendimento e resgate. Em caso de emergência real com risco iminente à vida, acione imediatamente o Corpo de Bombeiros pelo telefone 193 e informe o endereço completo e o tipo de ocorrência.",
        sugestoes: ["Ver menu principal"]
    }
];