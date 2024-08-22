const opCode = "UK";
const variables = require('../../../fixtures/suspend_variables');

describe("Suspend Terminal", { env: { hideCredentials: true } }, () => {
    for (const suspendTerminal of variables.suspendTerminals) { 
      it(`SuspendTerminal - ${suspendTerminal.message}`, () => {
        const attributes = {
          method: "SuspendTerminal",
          opCode: opCode,
          userName: "Suspend Test",
          terminal: suspendTerminal.terminal,
          code: suspendTerminal.code,
          message: suspendTerminal.message
        };
        cy.terminalSuspend(attributes)
      });
    }
})