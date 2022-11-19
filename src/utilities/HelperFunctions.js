import blogImage from "../res/blogImage.jpg";

export const CPF = "CPF";
export const CNPJ = "CNPJ"
export const PF = "PF"
export const PJ = "PJ"
export const DOACAO = "DOACAO"
export const ASSINATURA = "ASSINATURA"


export const meses = [
    {"nome":"Janeiro",
        "numero": 1,
        "abreviada": "Jan"},
    {"nome":"Fevereiro",
        "numero": 2,
        "abreviada": "Fev"},
    {"nome":"Março",
        "numero": 3,
        "abreviada": "Mar"},
    {"nome":"Abril",
        "numero": 4,
        "abreviada": "Abr"},
    {"nome":"Maio",
        "numero": 5,
        "abreviada": "Mai"},
    {"nome":"Junho",
        "numero": 6,
        "abreviada": "Jun"},
    {"nome":"Julho",
        "numero": 7,
        "abreviada": "Jul"},
    {"nome":"Agosto",
        "numero": 8,
        "abreviada": "Ago"},
    {"nome":"Setembro",
        "numero": 9,
        "abreviada": "Set"},
    {"nome":"Outubro",
        "numero": 10,
        "abreviada": "Out"},
    {"nome":"Novembro",
        "numero": 11,
        "abreviada": "Nov"},
    {"nome":"Dezembro",
        "numero": 12,
        "abreviada": "Dez"},
]
export const anos = [2022, 2023, 2024, 2025]

export function spliceArray(array, start){
    let newArray = array.slice()
    return newArray.splice(start,9)
}

export const realNotation = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

function addZero(number){
    if (number <= 9)
        return "0" + number;
    else
        return number;
}

function showDate(date){
    let jsDate = new Date(date)
    return jsDate.getDate() + " de " + meses[jsDate.getMonth()].nome + " de " + jsDate.getFullYear()
}

export function showUsers(user){
    if (user.cpf !== null){
        return(user.nome + " usuário PF " + user.login + " de CPF " + user.cpf)
    } else if (user.vl_cnpj !== null){
        return(user.razao_social +  " usuário PJ " + user.login + " de CNPJ " + user.cnpj)
    } else{
        return ("Usuário com dados com problemas, verifique e corrija, por favor!")
    }
}

export function showDonations(donation){
    return ("Doação de " + realNotation.format(donation.valor) + " realizada em " + showDate(donation.created_at))
}

export function showSignatures(signature){
    return ("Programada doação de " + realNotation.format(signature.valor) + " no dia " + signature.dia)
}

export function verifyCPF(cpf){
    return cpf.length === 11;
}

export function verifyCNPJ(cnpj){
    return cnpj.length === 14;
}

export function getNowDate(){
    let date = new Date(Date.now())
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

export const pt_Br = {
    code: 'pt_br',
    toolbar: {
        default: 'Padrão',
        save: 'Salvar',
        font: 'Fonte',
        formats: 'Formatos',
        fontSize: 'Tamanho',
        bold: 'Negrito',
        underline: 'Sublinhado',
        italic: 'Itálico',
        strike: 'Riscado',
        subscript: 'Subescrito',
        superscript: 'Sobrescrito',
        removeFormat: 'Remover Formatação',
        fontColor: 'Cor da Fonte',
        hiliteColor: 'Cor de destaque',
        indent: 'Recuo',
        outdent: 'Avançar',
        align: 'Alinhar',
        alignLeft: 'Alinhar à esquerda',
        alignRight: 'Alinhar à direita',
        alignCenter: 'Alinhar ao centro',
        alignJustify: 'Alinhat justificado',
        list: 'Lista',
        orderList: 'Lista ordenada',
        unorderList: 'Lista desordenada',
        horizontalRule: 'Linha horizontal',
        hr_solid: 'solida',
        hr_dotted: 'pontilhada',
        hr_dashed: 'tracejada',
        table: 'Tabela',
        link: 'Link',
        math: 'Matemática',
        image: 'Imagem',
        video: 'Vídeo',
        audio: 'Áudio',
        fullScreen: 'Tela cheia',
        showBlocks: 'Mostrar blocos',
        codeView: 'Mostrar códigos',
        undo: 'Voltar',
        redo: 'Refazer',
        preview: 'Prever',
        print: 'imprimir',
        tag_p: 'Paragráfo',
        tag_div: '(DIV) Normal',
        tag_h: 'Cabeçalho',
        tag_blockquote: 'Citar',
        tag_pre: 'Código',
        template: 'Modelo',
        lineHeight: 'Altura da linha',
        paragraphStyle: 'Estilo do parágrafo',
        textStyle: 'Estilo do texto',
        imageGallery: 'Galeria de imagens',
        dir_ltr: 'Da esquerda para direita',
        dir_rtl: 'Direita para esquerda',
        mention: 'Menção'
    },
    dialogBox: {
        linkBox: {
            title: 'Inserir link',
            url: 'URL para link',
            text: 'Texto à mostrar',
            newWindowCheck: 'Abrir em nova guia',
            downloadLinkCheck: 'Link para Download',
            bookmark: 'marca páginas'
        },
        mathBox: {
            title: 'Matemática',
            inputLabel: 'Notação matemática',
            fontSizeLabel: 'Tamanho',
            previewLabel: 'Prever'
        },
        imageBox: {
            title: 'Inserir imagens',
            file: 'Selecionar arquivos',
            url: 'URL da imagem',
            altText: 'Texto alternativo'
        },
        videoBox: {
            title: 'Inserir vídeo',
            file: 'Selecionar arquivos',
            url: 'URL do YouTube/Vimeo'
        },
        audioBox: {
            title: 'Inserir audio',
            file: 'Selecionar arquivos',
            url: 'URL da audio'
        },
        browser: {
            tags: 'Tag',
            search: 'Procurar',
        },
        caption: 'Inserir descrição',
        close: 'Fechar',
        submitButton: 'Enviar',
        revertButton: 'Reverter',
        proportion: 'restringir proporções',
        basic: 'Básico',
        left: 'Esquerda',
        right: 'Direita',
        center: 'Centro',
        width: 'Largura',
        height: 'Altura',
        size: 'Tamanho',
        ratio: 'Proporções'
    },
    controller: {
        edit: 'Editar',
        unlink: 'Retirar link',
        remove: 'Remover',
        insertRowAbove: 'Inserir linha acima',
        insertRowBelow: 'Inserir linha abaixo',
        deleteRow: 'Deletar linha',
        insertColumnBefore: 'Inserir coluna antes',
        insertColumnAfter: 'Inserir coluna depois',
        deleteColumn: 'Deletar coluna',
        fixedColumnWidth: 'Largura fixa da coluna',
        resize100: 'Redimensionar para 100%',
        resize75: 'Redimensionar para 75%',
        resize50: 'Redimensionar para 50%',
        resize25: 'Redimensionar para 25%',
        autoSize: 'Tamanho automático',
        mirrorHorizontal: 'Espelho, Horizontal',
        mirrorVertical: 'Espelho, Vertical',
        rotateLeft: 'Girar para esquerda',
        rotateRight: 'Girar para direita',
        maxSize: 'Tam max',
        minSize: 'Tam min',
        tableHeader: 'Cabeçalho da tabela',
        mergeCells: 'Mesclar células',
        splitCells: 'Dividir células',
        HorizontalSplit: 'Divisão horizontal',
        VerticalSplit: 'Divisão vertical'
    },
    menu: {
        spaced: 'Espaçado',
        bordered: 'Com borda',
        neon: 'Néon',
        translucent: 'Translúcido',
        shadow: 'Sombreado',
        code: 'Código'
    }
};

export const  blog = {
    id: 12345,
    image: blogImage,
    titulo: "Copa dos Refugiados e Imigrantes 2022",
    chamada: "Vai começar !!! \n Abertura oficial da Copa dos Refugiados e Imigrantes 2022. No Museu do Futebol nesta sexta feira, dia 26/08/2022 `as 11hs",
    conteudo: "<p><span style=\"color: rgb(0, 0, 128); font-size: 36px;\"><u><b>Vai começar !!!</b></u></span></p>\n" +
        "\n" +
        "<hr class=\"__se__solid\">\n" +
        "\n" +
        "<p><span style=\"color: rgb(0, 0, 255); font-size: 24px; font-weight: var(--bs-body-font-weight); text-align: var(--bs-body-text-align);\">Abertura oficial da Copa dos Refugiados e Imigrantes 2022. No Museu do Futebol nesta sexta feira, dia 26/08/2022 `as 11hs. A “Copa dos Refugiados e Imigrantes” é um projeto sócio-esportivo que tem o objetivo de integrar pessoas refugiadas e migrantes na comunidade local, incentivar seu protagonismo, gerar uma agenda positiva e colocar em destaque a agenda global de migração e deslocamento forçado.&nbsp;</span><br>\n" +
        "</p>\n" +
        "\n" +
        "<p><span style=\"font-size: 24px; color: rgb(0, 0, 255);\">Bora conhecer o futebol de países do MUNDO que geralmente não conseguimos ver na COPA do MUNDO?&nbsp;</span></p>\n" +
        "\n" +
        "<p><span style=\"font-size: 24px; color: rgb(0, 0, 255);\">Este ano de 2022, esta edição contará com a participação de 7 Estados brasileiros, nas seguintes capitais: Porto Alegre/RS, Curitiba/PR, São Paulo/SP, Rio de Janeiro/RJ, Belo Horizonte/MG, Recife/PE e Brasília / DF.</span>​<br>\n" +
        "</p>\n",
    data: new Date(Date.now()),
    categorias: ["Copa", "Eventos"]
}
