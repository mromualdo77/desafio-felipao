// Array de heróis com nome e XP
const heroisMortalKombat = [
    { nome: "Liu Kang", xp: 10000 },
    { nome: "Raiden", xp: 15000 },
    { nome: "Kronika", xp: 7300 },
    { nome: "Um Ser", xp: 8800 },
    { nome: "Shang Tsung", xp: 750 },
    {nome: "Shao Kahn", xp:3680 },
    {nome: "Shinnok", xp:1009},
    {nome: "Centrion", xp: 6300},

];

// Função para classificar o nível do herói com base em sua XP
function classificarNivelHeroi(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Laço de repetição para classificar cada herói e exibir os resultados
heroisMortalKombat.forEach(heroi => {
    const nivel = classificarNivelHeroi(heroi.xp);
    console.log(`O herói ${heroi.nome} possui ${heroi.xp} XP e está classificado como: ${nivel}`);
});
