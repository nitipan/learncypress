import * as Papa from 'papaparse';

describe('test', () => {
  let csv = `
username|password
pok|1234
111|1234
  `;

  let parsed = Papa.parse(csv.trim(), {
    header: true,
    delimiter: '|',
    trimHeaders: true,
  });

  parsed.data.forEach((d) => {
    it('test' + JSON.stringify(d), () => {
      cy.log(d);
    });
  });
});
