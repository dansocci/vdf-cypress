const opCode = "UK";
const variables = require('../../../fixtures/delete_variables');
import { user_id, group_id, company_id, terminal } from "../../../fixtures/temp/global.json";

describe("Delete Call Fowards", { env: { hideCredentials: true } }, () => {

  for (const cfMethods of variables.cfMethods) {
    it(`${cfMethods} - SUCCESS`, () => {
      const attributes = {
        method: cfMethods,
        opCode: opCode,
        userName: "Delete Test",
        terminal: terminal,
        code: "0",
        message: "SUCCESS"
      };
      cy.callFowardDelete(attributes)
    }); 
  };
  for (const cfMethods of variables.cfMethods) {
    for (const cfFail of variables.cfFails) {
      it(`${cfMethods} - ${cfFail.message}`, () => {
        const attributes = {
          method: cfMethods,
          opCode: opCode,
          userName: cfFail.userName,
          terminal: cfFail.terminal,
          code: cfFail.code,
          message: cfFail.message
        };
        cy.callFowardDelete(attributes)
      }); 
    }
  }

  //##### Save CFU that wasn't enable because other CF were enabled #####
  it("Save CFU for test", () => {
    const cfBefore = {
      method: "SaveCfu",
      opCode: opCode,
      userName: "Delete Test",
      terminal: terminal,
      phone_number: "123",
      code: "0",
      message: "SUCCESS"
    };
    cy.cfSave(cfBefore);
  })
  //######################################################################
  it("DeleteCfu - Success", () => {
    const cfBefore = {
      method: "DeleteCfu",
      opCode: opCode,
      userName: "Delete Test",
      terminal: terminal,
      code: "0",
      message: "SUCCESS"
    };
    cy.callFowardDelete(cfBefore);
  })
  for (const cfFail of variables.cfFails) {
    it(`DeleteCfu - ${cfFail.message}`, () => {
      const attributes = {
        method: "DeleteCfu",
        opCode: opCode,
        userName: cfFail.userName,
        terminal: cfFail.terminal,
        code: cfFail.code,
        message: cfFail.message
      };
      cy.callFowardDelete(attributes)
    });
  } 
});

describe("Delete Items", { env: { hideCredentials: true } }, () => {
  for (const deleteTerminal of variables.deleteTerminals) { 
    it(`DeleteTerminal - ${deleteTerminal.message}`, () => {
      const attributes = {
        method: "DeleteTerminal",
        opCode: opCode,
        userName: "Delete Test",
        item: "terminal",
        item_id: deleteTerminal.terminal,
        code: deleteTerminal.code,
        message: deleteTerminal.message
      };
      cy.itemDelete(attributes)
    });
  }

  for (const deleteUser of variables.deleteUsers) {
    it(`DeleteUser - ${deleteUser.message}`, () => {
      const attributes = {
        method: "DeleteUser",
        opCode: opCode,
        userName: "Delete Test",
        item: "user_id",
        item_id: deleteUser.user_id,
        code: deleteUser.code,
        message: deleteUser.message
      };
      cy.itemDelete(attributes)
    });
  }

  for (const deleteGroup of variables.deleteGroups){
    it(`DeleteGroup - ${deleteGroup.message}`, () => {
      const attributes = {
        method: "DeleteGroup",
        opCode: opCode,
        userName: "Delete Test",
        item: "group_id",
        item_id: deleteGroup.group_id,
        code: deleteGroup.code,
        message: deleteGroup.message
      };
      cy.itemDelete(attributes)
    });
  }

  for (const deleteCompany of variables.deleteCompanies) {
    it(`DeleteCompany - ${deleteCompany.message}`, () => {
      const attributes = {
        method: "DeleteCompany",
        opCode: opCode,
        userName: "Delete Test",
        item: "company_id",
        item_id: deleteCompany.company_id,
        code: deleteCompany.code,
        message: deleteCompany.message
      };
      cy.itemDelete(attributes)
    });
  }
});
