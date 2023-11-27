export function quantidadeTotalObjetos(objetoAninhado) {
  let quantidadeTotal = 0;

  for (const key in objetoAninhado) {
    if (objetoAninhado.hasOwnProperty(key)) {
      quantidadeTotal += objetoAninhado[key].data.length;
    }
  }

  return quantidadeTotal;
}
export function melhorSequenciaRefeicoesTrue(objetoAninhado) {
  let melhorSequencia = 0;
  let sequenciaAtual = 0;

  Object.values(objetoAninhado).forEach((dataObj) => {
    if (dataObj && dataObj.data) {
      const data = dataObj.data;

      data.forEach((obj) => {
        if (obj && typeof obj === "object" && obj.dieta !== undefined) {
          if (obj.dieta) {
            sequenciaAtual++;

            if (sequenciaAtual > melhorSequencia) {
              melhorSequencia = sequenciaAtual;
            }
          } else {
            sequenciaAtual = 0;
          }
        }
      });
    }
  });
  return melhorSequencia;
}

export function quantidadeRefeicoesTrueFalse(objetoAninhado) {
  let somaRefeicoesTrue = 0;
  let somaRefeicoesFalse = 0;

  function iterarObjeto(objeto) {
    for (const chave in objeto) {
      if (objeto.hasOwnProperty(chave)) {
        const valor = objeto[chave];

        if (valor && typeof valor === "object") {
          if (valor.hasOwnProperty("dieta")) {
            if (valor.dieta === true) {
              somaRefeicoesTrue++;
            } else if (valor.dieta === false) {
              somaRefeicoesFalse++;
            }
          } else {
            iterarObjeto(valor); // Chama recursivamente para objetos aninhados
          }
        }
      }
    }
  }

  iterarObjeto(objetoAninhado);

  return {
    somaRefeicoesTrue,
    somaRefeicoesFalse,
  };
}
