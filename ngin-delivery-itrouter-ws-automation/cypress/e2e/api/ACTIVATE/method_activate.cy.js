const opCode = "UK";
const variables = require('../../../fixtures/activate_variables');
import { user_id, group_id, company_id, terminal } from "../../../fixtures/temp/global.json";

describe("Activate Items", { env: { hideCredentials: true } }, () => {
    for (const activateMethod of variables.activateMethods) {
        for (const activateItem of variables.activateItems) { 
            it(`${activateMethod} - ${activateItem.message}`, () => {
                const attributes = {
                method: activateMethod,
                opCode: opCode,
                userName: "Delete Test",
                terminal: activateItem.terminal,
                code: activateItem.code,
                message: activateItem.message
                };
                cy.itemActivate(attributes)
            });
        }
    }
})

describe("Deactivate Items", { env: { hideCredentials: true } }, () => {
    for (const deactivateMethod of variables.deactivateMethods) {
        for (const activateItem of variables.activateItems) { 
            it(`${deactivateMethod} - ${activateItem.message}`, () => {
                const attributes = {
                method: deactivateMethod,
                opCode: opCode,
                userName: "Delete Test",
                terminal: activateItem.terminal,
                code: activateItem.code,
                message: activateItem.message
                };
                cy.itemActivate(attributes)
            });
        }
    }
})