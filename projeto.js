//pagina 1
const contarMedalhasTenisDeMesa = async (tipoMedalha) => {
    try {
        const atletasChinesesTenisDeMesa = await lerAtletasChineses('athlete_events.csv');
        const medalhas = atletasChinesesTenisDeMesa
            .map(linha => (linha.Medal === tipoMedalha && linha.Sport === 'Table Tennis') ? 1 : 0)
            .reduce((total, acc) => total + acc, 0);

    
        const elementoResultado = document.getElementById('resultado');
        elementoResultado.textContent = `Quantidade de medalhas de ${tipoMedalha} no tênis de mesa para atletas chineses: ${medalhas}`;
        
        return `Quantidade de medalhas de ${tipoMedalha} no tênis de mesa para atletas chineses: ${medalhas}`;
    } catch (error) {
        console.error('Erro ao ler o arquivo CSV:', error);
        return 'Erro ao ler o arquivo CSV.';
    }
};

//pagina 2
const contarMedalhasWeightlifting = async (tipoMedalha) => {
    try {
        const atletasChinesesWeightlifting = await lerAtletasChineses('athlete_events.csv');
        const medalhas = atletasChinesesWeightlifting
            .map(linha => (linha.Medal === tipoMedalha && linha.Sport === 'Weightlifting') ? 1 : 0)
            .reduce((total, acc) => total + acc, 0);

        const elementoResultado = document.getElementById('resultado');
        elementoResultado.textContent = `Quantidade de medalhas de ${tipoMedalha} no levantamento de peso para atletas chineses: ${medalhas}`;
        
        return `Quantidade de medalhas de ${tipoMedalha} no levantamento de peso para atletas chineses: ${medalhas}`;
    } catch (error) {
        console.error('Erro ao ler o arquivo CSV:', error);
        return 'Erro ao ler o arquivo CSV.';
    }
};

//pagina 3
const contarMedalhasGymnastics = async (tipoMedalha) => {
    try {
        const atletasChinesesGymnastics = await lerAtletasChineses('athlete_events.csv');
        const medalhas = atletasChinesesGymnastics
            .map(linha => (linha.Medal === tipoMedalha && linha.Sport === 'Gymnastics') ? 1 : 0)
            .reduce((total, acc) => total + acc, 0);

        const elementoResultado = document.getElementById('resultado');
        elementoResultado.textContent = `Quantidade de medalhas de ${tipoMedalha} na ginástica para atletas chineses: ${medalhas}`;
        
        return `Quantidade de medalhas de ${tipoMedalha} na ginástica para atletas chineses: ${medalhas}`;
    } catch (error) {
        console.error('Erro ao ler o arquivo CSV:', error);
        return 'Erro ao ler o arquivo CSV.';
    }
};

// Função para pagina 1, contar quantos atletas chineses participaram de certa olimpíada

const quantidadeChineses = async (anoOlimpiada) => {
    try {
        const atletasChineses = await lerAtletasChineses('athlete_events.csv')
        //Aqui vai filtrar a lista de atletas chineses conforme o ano selecionado
        const quantidade = atletasChineses
            .filter(linha => linha.Year == anoOlimpiada)
            .map(linha => linha.ID)
            .reduce((total, id) => {
                if (!total.includes(id)) {
                    return [...total, id]
                }
                return total
            })
        const resultado = document.getElementById('resultado')
        resultado.textContent = `Quantidade de atletas chineses na olimpiada de ${anoOlimpiada}: ${quantidade.length}`
        return quantidade.length
    } catch (error) {
        console.error('Erro ao ler o arquivo csv', error)
        return `Erro ao ler o arquivo csv`
    }
}

// Função para calcular a média de idade

const mediaDeIdade = async (medalhaEsporte) => {
    try {
        const atletasChi = await lerAtletasChineses('athlete_events.csv') // Esperando o processamento da função para ler
        const atletasComMedalha = atletasChi
            .filter(linha => linha.Medal == medalhaEsporte && linha.Sport == 'Shooting')
        if (atletasComMedalha.length == 0) {
            console.log("Erro")
        }
        const somaIdades = atletasComMedalha.reduce((acumulador, atleta) => {
            return acumulador + parseInt(atleta.age, 10) // Usada para converter os inteiros na base decimal 
        }, 0)
        const mediaIdade = somaIdades / atletasComMedalha.length
        const resultado = document.getElementById('resultado')
        resultado.textContent = `Media de idade: ${mediaIdade}`
        return mediaIdade
    } catch (error) {
        console.error("Erro ao calcular a media")
        throw error
    }
}
