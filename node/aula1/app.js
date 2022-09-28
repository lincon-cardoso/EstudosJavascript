const nome = 'luiz';
const sobrenome = 'miranda';

const falaNome = () => {
    console.log(nome,sobrenome);
}

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

console.log(exports);