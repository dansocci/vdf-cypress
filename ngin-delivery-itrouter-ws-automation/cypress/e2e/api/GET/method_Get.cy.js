const variables = require('../../../fixtures/get_variables');
const opCode = variables.opCode;

describe("Get Terminal Methods", { env: { hideCredentials: true } }, () => {
  for (const terminalMethod of variables.terminalMethods) {
    for (const terminal of variables.terminals) {
      it(`${terminalMethod} - ${terminal.message}`, () => {
        const attributes = {
          method: terminalMethod,
          opCode: opCode,
          terminal: terminal.terminal,
          code: terminal.code,
          message: terminal.message
        };
        cy.methodByTerminal(attributes);
      });
    }
  }
});

describe("Get Company Methods", { env: { hideCredentials: true } }, () => {
  for (const company of variables.companies) {
  it(`Get Company By Key - ${company.message}`, () => {
    const attributes = {
      method: "GetCompanyByKey",
      opCode: opCode,
      company_id: company.company,
      code: company.code,
      message: company.message
    };
    cy.methodByCompany(attributes);
  });
}
for (const company of variables.companies) {
  it(`Get Company By Structure - ${company.message}`, () => {
    const attributes = {
      method: "GetCompanyStructure",
      opCode: opCode,
      company_id: company.company,
      code: company.code,
      message: company.message
    };
    cy.methodByCompany(attributes);
  });
}
});

describe("Get User Methods",{ env: { hideCredentials: true } }, () => {
  for (const userMethod of variables.userMethods) {
    for (const user of variables.users) {
      it(`${userMethod} - ${user.message}`, () => {
        const attributes = {
          method: userMethod,
          opCode: opCode,
          user_id: user.user,
          code: user.code,
          message: user.message,
        };
        cy.bossKey(attributes);
      });
    }
  }
});

describe("Get Profile By Dialed Number Methods",{ env: { hideCredentials: true } }, () => {
  for (const dialedNumber of variables.dialedNumbers) {
    it(`Get Boss Cfg By Key - ${dialedNumber.message}`, () => {
      const attributes = {
        method: "GetProfileByDialedNumber",
        opCode: opCode,
        aNumber: dialedNumber.aNumber,
        dialedNumber:dialedNumber.dialedNumber,
        code: dialedNumber.code,
        message: dialedNumber.message,
      };
      cy.dialedByNumber(attributes);
    });
  }
});
