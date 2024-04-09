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
