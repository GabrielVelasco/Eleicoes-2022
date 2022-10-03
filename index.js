const axios = require("axios");

async function getResults(){
    const data = await axios.get("https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json");
    
    const cand1 = {
        nome: data.data.cand[0].nm,
        percentVotos: data.data.cand[0].pvap.replace(',', '.')
    }
    
    const cand2 = {
        nome: data.data.cand[1].nm,
        percentVotos: data.data.cand[1].pvap.replace(',', '.')
    }

    console.log(`${cand1.nome} == ${cand1.percentVotos}`);
    console.log(`${cand2.nome} == ${cand2.percentVotos}`);
    console.log(`Diff prim pro seg: ${Number(cand1.percentVotos) - Number(cand2.percentVotos)}`);
    console.log(`Urnas apuradas: ${data.data.pst}`);
}

getResults();
setInterval(() => {console.clear()}, 1000);
setInterval(getResults, 1000);