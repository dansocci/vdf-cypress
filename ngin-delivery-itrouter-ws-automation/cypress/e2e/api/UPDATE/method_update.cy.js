const opCode = "UK";
const variables = require('../../../fixtures/update_variables');
import { user_id, group_id, company_id, terminal } from "../../../fixtures/temp/global.json";

describe("Update User and Terminal Items", { env: { hideCredentials: true } }, () => {
    it.skip(`UpdateTerminal - BLOCKED`, () => {
      const attributes = {
        method: "UpdateTerminal",
        opCode: opCode,
        userName: "Delete Test",
        terminal: terminal,
        short_number: "8760",
        user_id: user_id,
        status: "ACTIVE",
        code: "0",
        message: "SUCCESS"
      };
      cy.terminalUpdate(attributes)
    });

    it.skip(`UpdateTerminalNumber - BLOCKED`, () => {
      const attributes = {
        method: "UpdateTerminalNumber",
        opCode: opCode,
        userName: "Delete Test",
        old_number: terminal,
        new_number: terminal+1,
        code: "0",
        message: "SUCCESS"
      };
      cy.terminalNumberUpdate(attributes)
    });

    it.skip(`UpdateTerminalUser - BLOCKED`, () => {
      const attributes = {
        method: "UpdateTerminalUser",
        opCode: opCode,
        userName: "UpdateTerminalUserTest",
        terminal: 44754765471,
        user_id: user_id,
        code: "0",
        message: "SUCCESS"
      };
      cy.terminalUserUpdate(attributes)
    });

    for (const userUpdate of variables.usersUpdate) {
      it(`UpdateUser - ${userUpdate.message}`, () => {
        const attributes = {
          method: "UpdateUser",
          opCode: opCode,
          userName: userUpdate.userName,
          user_id: userUpdate.user_id,
          call_park: userUpdate.call_park,
          code: userUpdate.code,
          message: userUpdate.message
        };
        cy.userUpdate(attributes)
      });
    }

    it.skip(`UpdateCompany - `, () => {
      const attributes = {
        method: "UpdateCompany",
        opCode: opCode,
        userName: "TestUpdateCompany",
        company_id: company_id,
        name: "name",
        language: "UK",
        vatin: "8761-asd",
        vpn_force_onnet: 1,
        dual_outgoing_ctransfer: false,
        // hotdesk_timeout: 3650,
        // max_annc_size: 250,
        // trunking_allowed: false,
        // chunt_prefix_length: 6,
        // call_log: true,
        // dnd_max_time: 28800,
        // enable_presence: false,
        code: "0",
        message: "SUCCESS"
      };
      cy.companyUpdate(attributes)
    });
});

describe.only("Update Features", { env: { hideCredentials: true } }, () => {
  for (const networkStatus of variables.networkStatuses) {
    it(`UpdateNetworkStatus - ${networkStatus.message}`, () => {
      const attributes = {
        method: "UpdateNetworkStatus",
        opCpde: opCode,
        terminal: networkStatus.terminal,
        network_provisioned: networkStatus.network_provisioned,
        userName: "Update Test",
        code: networkStatus.code,
        message: networkStatus.message
      };
      cy.networkStatusUpdate(attributes)
    })
  }
})