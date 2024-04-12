const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
    },
  ];

  function adicionarApresentacao(medico) {
  let apresentacao = '';
  switch (medico.genero) {
    case 'feminino':
      apresentacao = 'Dr(a) ' + medico.nome + ' ' + medico.sobrenome;
      break;
    case 'masculino':
      apresentacao = 'Dr. ' + medico.nome + ' ' + medico.sobrenome;
      break;
    case 'nao-binario':
      apresentacao = 'Dr(e) ' + medico.nome + ' ' + medico.sobrenome;
      break;
    default:
      apresentacao = 'Dr. ' + medico.nome + ' ' + medico.sobrenome;
  }
  return { ...medico, apresentacao };
}

const medicosComApresentacao = medicos.map(adicionarApresentacao);

console.log(medicosComApresentacao);
