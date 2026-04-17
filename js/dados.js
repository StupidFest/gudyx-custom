const siteData = {
    slider: [
        { imagem: "imagens/slide1.jpg", titulo: "Cadernos Personalizados" },
        { imagem: "imagens/slide2.jpg", titulo: "Planners 2026" },
        { imagem: "imagens/slide3.jpg", titulo: "Kits de Papelaria" }
    ],
    homeTitulo: "Bem-vindo à Gudyx Custom",
    homeTexto: "Criatividade, organização e sonhos em cada detalhe. Conheça nossos produtos exclusivos!",
    
    catalogo: {
        categorias: [
            { nome: "Caixas", imagem: "imagens/cat-caixas.jpg", itens: [
                { nome: "Caixa Explosiva", descricao: "Caixa surpresa personalizada", preco: "R$ 45,00", imagem: "imagens/caixa1.jpg" }
            ]},
            { nome: "Displays", imagem: "imagens/cat-displays.jpg", itens: [] },
            { nome: "Toppers", imagem: "imagens/cat-toppers.jpg", itens: [] },
            { nome: "Cadernos", imagem: "imagens/cat-cadernos.jpg", itens: [
                { nome: "Caderno Argolado", descricao: "Capa dura personalizada", preco: "R$ 59,90", imagem: "imagens/caderno1.jpg" }
            ]},
            { nome: "Agendas", imagem: "imagens/cat-agendas.jpg", itens: [] },
            { nome: "Calendários", imagem: "imagens/cat-calendarios.jpg", itens: [] },
            { nome: "Cardápios", imagem: "imagens/cat-cardapios.jpg", itens: [] },
            { nome: "Imã", imagem: "imagens/cat-ima.jpg", itens: [] },
            { nome: "Cards", imagem: "imagens/cat-cards.jpg", itens: [] }
        ]
    },
    
    servicos: {
        categorias: [
            { nome: "Banner Digital", imagem: "imagens/serv-banner.jpg", itens: [
                { nome: "Banner para Redes Sociais", descricao: "Design personalizado", preco: "R$ 35,00", imagem: "imagens/banner1.jpg" }
            ]},
            { nome: "Plastificações", imagem: "imagens/serv-plast.jpg", itens: [] },
            { nome: "Impressões", imagem: "imagens/serv-impress.jpg", itens: [] }
        ]
    },
    
    quemSomosTitulo: "Nossa História",
    quemSomosTexto: "<p>A Gudyx Custom nasceu em 2024 do desejo de unir criatividade e organização. Trabalhamos com produtos exclusivos e personalização para tornar seu dia a dia mais inspirador.</p><p>Missão: transformar sonhos em papel.</p>",
    quemSomosImagem: "imagens/loja.jpg",
    
    contato: {
        telefone: "(11) 98765-4321",
        email: "contato@gudyxcustom.com",
        endereco: "Rua dos Inventores, 456 - São Paulo/SP",
        horario: "Segunda a Sexta 9h às 18h, Sábado 9h às 13h"
    }
};

// Função auxiliar para renderizar cards
function renderCards(containerId, itens) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = itens.map(item => `
        <div class="card">
            <img src="${item.imagem}" alt="${item.nome}" onerror="this.src='imagens/placeholder.png'">
            <div class="card-conteudo">
                <h3>${item.nome}</h3>
                <p>${item.descricao || ''}</p>
                <div class="preco">${item.preco || ''}</div>
            </div>
        </div>
    `).join('');
}
