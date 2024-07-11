// Array of Objects -> Comeca no 0 e vai até 3
const quiz = [
    {
        q: 'Quais formas de sermos sustentável está correta ?',
        options: ['Nunca reduzir o consumo de energia, não economizar a água e não usar transportes públicos e as bicicletas', 'Reduzir o consumo de energia, economizar a água, usar transportes públicos e bicicletas', 'Aumentar o tempo de uso dos dispositivos eletrônicos na tomada elétrica', 'Tomar banhos prolongados e deixar luzes acesas'],
        answer: 1
    },
    {
        q: 'Ao reciclar estamos a ',
        options: ['Estamos a fazer pouca diferença para ajudar o planeta a ser um lugar mais sustentável', 'Deitar o lixo fora, sem fazer a separaçáo dos recicláveis', 'Estamos a fazer algo bom para o planeta', 'Cuidar do meio ambiente, não estamos a poluir e com isso estamos a contribuir para um futuro melhor'],
        answer: 3
    },
    {
        q: 'Ao cuidarmos do meio ambiente',
        options: ['Estamos a contribuir para a nossa "Diversão" ', 
                  'Estamos a cuidar do nosso psicológico', 
                  'Poluímos menos e estamos a equilibrar as necessidades do presente', 
                  'Estamos a cuidar da nossa casa, escola, amigos e família'],
        answer: 2
    },
    {
        q: 'Em qual ecoponto devemos despejar o pacote de plástico',
        options: ['Azul', 'Verde', 'Amarelo', 'Vermelho'],
        answer: 2
    }, 
    {
        q: 'Em qual ecoponto devemos despejar o Cartão, jornais e folhetos ?',
        options: ['Azul', 'Verde', 'Amarelo', 'Vermelho'],
        answer: 0
    }, 
    {
        q: 'Em qual ecoponto devemos despejar as garrafas, fracos de vidro ?',
        options: ['Azul', 'Verde', 'Amarelo', 'Vermelho'],
        answer: 1
    },
    {
        q: 'Na praia quando acumulamos lixo, onde devemos coloca-lo ?',
        options: ['No mar', 'Na areia', 'Dar os restos de comida às gaivotas', 'Os ecopontos recicláveis/sacos descartáveis'],
        answer: 3
    },
    {
        q: 'Quando vamos acampar e fazemos fogueiras, não devemos...',
        options: ['Fazer a fogueira perto das árvores', 'Deixar que o instrutor ou outro adulto acendam o fogo', 'Seguir as orientações do instrutor ou outro adulto', 'Estar todos juntos'],
        answer: 0
    },
    {
        q: 'Quando vamos acampar e fazemos fogueiras, devemos...',
        options: ['Escolher uma área longe das árvores, limpar a área e construir uma proteção com pedras ao redor', 'Apagar o fogo com as pedras', 'Atirar folhas para fazer o fogo', 'Colocar terra para apagar o fogo'],
        answer: 0
    },
    {
        q: 'Os restos de comida que acumulamos diariamente podem ajudar em...',
        options: ['Deixar a nossa casa cheia de lixo', 'Alimentar os nossos animais de estimação', 'Virar um fertilizante, e que o mesmo seja utilizado para o crescimento das plantas', 'Deitar para o chão o lixo da rua'],
        answer: 2
    },
    {
        q: 'Como a reciclagem pode contribuir para a sustentabilidade do meio ambiente ?',
        options: ['A reciclagem não tem impacto significativo no meio ambiente', 'A reciclagem ajuda a reduzir a quantidade de resíduos enviados para aterros sanitários e a poupar recursos naturais', 'A reciclagem aumenta a poluição do solo e da água', 'A reciclagem é uma prática que acelera o esgotamento dos recursos naturais'],
        answer:1
    },
    {
        q: 'Como a poluição do ar afeta a qualidade de vida das pessoas e o meio ambiente ?',
        options: ['A poluição do ar não tem efeitos na qualidade de vida das pesoas ou no meio ambiente', 'A poluição do ar pode melhorar a qualidade do ar que respiramos, tornando-o mais rico em nutrientes', 'A poluição do ar pode causar problemas respiratórios, como asma, e impactar negativamente a saúde das pessoas', 'A poluição do ar contribuir para a preservação da biodiversidade nas áreas urbanas'],
        answer: 2
    },
    {
        q: 'Escolhe a opção que melhor representa a diminuição do consumo de energia em casa e na escola',
        options: ['Deixa luzes e aparelhos eletrônicos ligados o tempo todo para evitar o uso constante de energia', 'Utilizar lâmpadas incandescentes em vez de lâmpadas LED, pois consomem menos energia', 'Manter janelas e portas abertas durante o inverno para reduzir a necessidade de aquecimento, economizando energia', 'Desligar aparelhos eletrônicos quando não estiverem em uso para evitar o consumo em modo standby'],
        answer: 3
    }, 
    {
        q: 'Quais são os benefícios de se utilizar fontes de energia renovável em comparação com fontes não renováveis ?',
        options: ['Fontes de energia renovável, como carvão e o petróleo, são mais eficientes e sustentáveis a longo prazo', 'Energias renováveis ajudam a reduzir a dependência de recursos finitos, como petróleo, e minimizam os impactos ambientais', 'Energias renováveis são mais caras e inacessíveis, tornando-as inviáveis para a maioria das pessoas', 'Fontes não renováveis contribuem para a redução das emissões de gases de efeito estufa, ao contrário das fontes renováveis'],
        answer: 1
    }
]