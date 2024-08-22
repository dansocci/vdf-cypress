const variables = require("../../../fixtures/insert_variables_fail");
const opCode = variables.opCode;

describe("Insert Methods - Fail", { env: { hideCredentials: true } }, () => {
    for (const group of variables.groups) {
      it(`InsertGroup - ${group.message}`, () => {
        const attributes = {
          method: "InsertGroup",
          opCode: opCode,
          userName: group.userName,
          company_id: group.company_id,
          name: group.name,
          code: group.code,
          message: group.message
        };
        cy.groupInsert(attributes)
      });
    }
  
    for (const userInsert of variables.usersInsert) {
    it(`InsertUser - ${userInsert.message}`, () => {
        const attributes = {
          method: "InsertUser",
          opCode: opCode,
          userName: userInsert.userName,
          group_id: userInsert.group_id,
          name: userInsert.name,
          display_name: userInsert.display_name,
          is_corporate: userInsert.is_corporate,
          code: userInsert.code,
          message: userInsert.message
        };
        cy.userInsert(attributes)
      });
    }
  
    for (const mondrianTerminal of variables.mondrianTerminals) {
      it(`InsertTerminalMondrian - ${mondrianTerminal.message}`, () => {
          const attributes = {
            method: "InsertTerminalMondrian",
            opCode: opCode,
            userName: mondrianTerminal.userName,
            terminal: mondrianTerminal.terminal ,
            short_number: mondrianTerminal.short_number,
            terminal_type: mondrianTerminal.terminal_type,
            user_id: mondrianTerminal.user_id,
            is_corporate: mondrianTerminal.is_corporate,
            group_id: mondrianTerminal.group_id,
            name: mondrianTerminal.name,
            code: mondrianTerminal.code,
            message: mondrianTerminal.message
          };
          cy.mondrianTerminalInsert(attributes);
        });
    }
  })