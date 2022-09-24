function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    },
  });
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);

  const digito1 = this.criaDigito(cpfParcial);

  return true;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArry = Array.from(cpfParcial);
  

  let regressivo = cpfArry.length+1;
  const digito = cpfArry.reduce((ac,val) => {

    console.log(regressivo,val,regressivo * val);
    ac +=(regressivo*Number(val));
    regressivo--;
    return ac;
  });

};

const cpf = new ValidaCPF('705.484.450-52');
// console.log(cpf.cpfLimpo);
console.log(cpf.valida());
