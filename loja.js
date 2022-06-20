const prompt = require('prompt-sync')();

console.clear();

let alteraTempo = {
    somarArrayDia: (array, numero) => {
        let nn = array[0] + numero; // array desejada de alteracao
        array.splice(0, 1, nn); // 0 indice/1 n. itens excluidos/nn variavel operacao
        return array[0];
    },
    somarArrayHora: (array, numero) => {
        let nn = array[1] + numero; // array desejada de alteracao
        array.splice(1, 1, nn); // 0 indice/1 n. itens excluidos/nn variavel operacao
        return array[1];
    },
};

let adicionarHora = {
    maisHora: (hora) => {
    alteraTempo.somarArrayHora(tempo,hora)
    },
    maisDia: () => { // isso aqui valida e aumenta o dia - aplicar em todas perguntas
        if (tempo[0] == 1 && tempo[1] > 23){
            tempo[0] = 2
            tempo[1] = tempo[1] - 24
            };
        if (tempo[0] == 2 && tempo[1] > 23){
            tempo[0] = 3
            tempo[1] = tempo[1] - 24
            };
        if (tempo[0] == 3 && tempo[1] > 23){
            tempo[0] = 4
            tempo[1] = tempo[1] - 24
            };
    },
};

let personagem = {
    nome: ``,
    amor: 10,
    vergonha: 5,
    stats: () => {
        console.log();
        console.log(`------------------------------`);
        console.log(`Dia ${tempo[0]} Hora ${tempo[1]}:00`);
        console.log(`amor: ${personagem.amor} | vergonha: ${personagem.vergonha}`);
        console.log();
    },
    somaamor: (numero) => {
        personagem.amor = personagem.amor + numero;
    },
    menosamor: (numero) => {
        personagem.amor = personagem.amor  - numero;
    },
    somavergonha: (numero) => {
        personagem.vergonha  = personagem.vergonha + numero
    },
    menosvergonha: (numero) => {
        personagem.vergonha = personagem.vergonha - numero
    },
};

let historias = {
    ligação: () => {
        let repetir = 1;
        while (repetir == 1) {
        console.log(`------------------------------`);
        console.log(`\nQuer ligar pra quem: [1, 2, 3]:\n`);
        let decisao = +prompt();

        if (decisao == 1){
            console.log(`\ntuuuu.........\ntuuuuuu.............\ntuuuuuuuuu....................
            \n--Amiga estou muito feliz por você e irei te apoiar , so temos um problema a empresa que travbalhamos vai fechar em 4 dias 
e iremos trabalhar em outro local , então você tem que se apresar para ele saber que você esta afim dele.
    *chamada perdida*`);
            console.log(`\n\nDeseja discar para mais alguém?
            1. Sim
            2. Não`);
            repetir = +prompt();

        } else if (decisao == 2){
            console.log(`\ntuuuuuuuuuuuu........\ntuuuuuuuuuuuuuuu............\ntuuuuuuuuuuuuuuuuuuuu..........
    *chamada perdida*`);
            console.log(`\n\nDeseja discar para mais alguém?
            1. Sim
            2. Não`);
            repetir = +prompt();

        } else if (decisao == 3){
            console.log(`\ntuuuuuuuu.....\ntuuuuuuuuuu......
            \n--Fico feliz que tenha se apaixonado por ele porém a empresa que ele trabalha vai fechar em 4 dias e ele não vai vir mais em nossa loja , vamos fazer de tudo para ele saber que você esta afim dele. 
    *chamada encerrada*`);
            console.log(`\n\nDeseja discar para mais alguém?
            1. Sim
            2. Não`);
            repetir = +prompt();
        };
    };
    },
    introdução: () => {
        console.log(`Você trabalha em uma loja de chocolate...
        \nE acaba se apaixonado por um cliente
        \nE decide pedir ajuda por telefone.
        `);
        
        personagem.nome = prompt('Escolha o nome do seu personagem: ');
        
        console.log(`\n${personagem.nome}, você tem 3 pessoas para ligar: `);
        
        console.log(`
        1.Amiga(Trabalha com ele )
        2.Irmã (Sua confidente)
        3.Lider (Conhece o rapaz)
        `);
    },
    sejaBemVindo: () => {
        console.log();
        console.log(`------------------------------`);
        console.log(`-"Hoje é o primeiro dia para começar a se programar para se declarar , o que você irá fazer?"\n`);
          console.log(`"Você no momento esta pensando nas estrategias que pode usar para chamar ele para sair antes de chegar no 4º dia , que é quando ele vem se despedir pois ira trabalhar em outra região.."
- Boa sorte!`);
        console.log();
        console.log('-O tempo vai andar de acordo com suas escolhas, faça ela se declarar antes do prazo.\n- Você não se declara e fica com vergonha: amor > 20 || vergonha < 1');
        console.log();
    },
    escolhas: () => {
        personagem.stats();
        console.log(`\n1.  Fazer café com desenho de coração (3h)\n  -10 amor   -1 vergonha\n\n2.   Pedir o numero de telefone (6h)\n  +5 amor  -2 vergonha\n\n3.   fugir do balcão de atendimento (3h) \n  +5 amor  -1 vergonha\n\n4.   Chamar ele para ir no cinema (12h)\n  +10 amor -3 vergonha\n\n5.   Puxar assunto no caixa (4h)\n  +5 amor  +5 vergonha\n\n6.   Mandar bombom para o serviço dele (8h)\n  +5  amor  -2 vergonha`);
        let manhaEscolha1 = +prompt();
        if (manhaEscolha1 == 1) {
            adicionarHora.maisHora(3);
            personagem.menosvergonha(1);
            personagem.menosamor(10);
            adicionarHora.maisDia();

            console.log(`\n Dei o primeiro passo pois não faço coração nos cafés.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 2) {
            adicionarHora.maisHora(6);
            personagem.menosvergonha(2);
            personagem.somaamor(5);
            adicionarHora.maisDia();

            console.log(`\n Pedir o telefone dele foi facil demais assim consigo manter contato.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 3) {
            adicionarHora.maisHora(3);
            personagem.menosvergonha(1);
            personagem.somaamor(3);
            adicionarHora.maisDia();

            console.log(`\nNão sei o que ta acontecendo mais não to com coragem para atender ele hoje.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 4) {
            adicionarHora.maisHora(12);
            personagem.menosvergonha(3);
            personagem.somaamor(10);
            adicionarHora.maisDia();

            console.log(`\n Sair para o cinema foi muito bom e agora?`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 5) {
            adicionarHora.maisHora(4);
            personagem.somavergonha(5);
            personagem.somaamor(5);
            adicionarHora.maisDia();

            console.log(`\nÉ muito bom conversar nem que seja por uns minutos no caixa .`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
        } else if (manhaEscolha1 == 6) {
            adicionarHora.maisHora(8);
            personagem.menosvergonha(2);
            personagem.somaamor(5);
            adicionarHora.maisDia();

            console.log(`\nEnviar uma caixa de bombom só para mostrar o meu carinho.`);
            prompt(`\nVoltar menu principal (qualquer tecla)__`);
    };
    },
};

let tempo = [1, 7]; // Dia e Hora
let jogarNovamente;

// Início da história
historias.introdução();

historias.ligação();

historias.sejaBemVindo();

// Início do game
while (tempo[0] == 1){
    historias.escolhas();

    // Variáveis de encerramento
    if (personagem.vergonha < 1){
        console.log(`\Você não conseguiu se declarar e outra pessoa fez isso.. (vergonha < 1)`);
        console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
        jogarNovamente = +prompt();
        if (jogarNovamente == 1){
            tempo[0] = 1; tempo[1] = 7; personagem.amor = 10; personagem.vergonha = 5;
            continue
        } else if (jogarNovamente == 2) {
            break
        };
        };
    if (personagem.amor > 20){
        console.log(`\n Ele acabou se apaixonado pela sua amiga! (amor > 20)`);
        console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
        jogarNovamente = +prompt();
        if (jogarNovamente == 1){
            tempo[0] = 1; tempo[1] = 7; personagem.amor = 10; personagem.vergonha = 5;
            continue
        } else if (jogarNovamente == 2) {
            break
        };
        };
    
    while (tempo[0] == 2){
    historias.escolhas();

    // Variáveis de encerramento
        if (personagem.vergonha < 1){
            console.log(`\nVocê não conseguiu se declarar e outra pessoa fez isso... (vergonha < 1)`);
            console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
            jogarNovamente = +prompt();
            if (jogarNovamente == 1){
                tempo[0] = 1; tempo[1] = 7; personagem.amor = 10; personagem.vergonha = 5;
                continue
            } else if (jogarNovamente == 2) {
                break
            };
            };
        if (personagem.amor> 20){
        console.log(`\nEle acabou se apaixonado pela sua amiga ! (Amor > 20)`);
        console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
        jogarNovamente = +prompt();
        if (jogarNovamente == 1){
            tempo[0] = 1; tempo[1] = 7; personagem.amor = 10; personagem.vergonha = 5;
            continue
        } else if (jogarNovamente == 2) {
            break
        };
        };

        while (tempo[0] == 3){
        historias.escolhas();

        // Variáveis de encerramento
            if (personagem.vergonha < 1){
                console.log(`\nVocê não conseguiu se declarar e outra pessoa fez isso.. (vergonha < 1)`);
                console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
                jogarNovamente = +prompt();
                if (jogarNovamente == 1){
                    tempo[0] = 1; tempo[1] = 7; personagem.amor = 10; personagem.vergonha = 5;
                    continue
                } else if (jogarNovamente == 2) {
                    break
                };
                };
            if (personagem.amor > 20){
                console.log(`\nEle acabou se apaixonado pela sua amiga !(Amor > 20)`);
                console.log(`Você deseja jogar novamente? 1. Sim 2. Não`);
                jogarNovamente = +prompt();
                if (jogarNovamente == 1){
                    tempo[0] = 1; tempo[1] = 7; personagem.amor = 10; personagem.vergonha = 5;
                    continue
                } else if (jogarNovamente == 2) {
                    break
                };
                };

         // Encerramento do game
            if (tempo[0] == 4){
        console.log('\nParabéns você conseguiu se declara e estão namorado, arrasou .!!!!.');
        console.log('\nDeseja jogar novamente?\n1. Sim 2. Não');
        jogarNovamente = +prompt();
        if (jogarNovamente == 1) { tempo[0] = 1; } else { break; }
            };
        };
    };
};