const questoes = require('./questoesV2');

test('Testar a função maior número', () => {
    expect(questoes.ehMaior(7,3,9)).toBe(9);
  });