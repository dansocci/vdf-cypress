const variables = require('../../../fixtures/save_variables');
const opCode = variables.opCode;

const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false});

describe("Save Call Foward Methods", { env: { hideCredentials: true } }, () => {
  
 
  for (const cFTerminal of variables.cFTerminals) {
      it(`SaveCfu - ${cFTerminal.message}`, () => {
      const attributes = {
        method: "SaveCfu",
        opCode: opCode,
        userName: cFTerminal.userName,
        terminal: cFTerminal.terminal,
        phone_number:cFTerminal.phone_number,
        code: cFTerminal.code,
        message: cFTerminal.message
      };
      cy.cfSave(attributes);
    })
  }

  //##### Remove CFU to be possible to enable other Call Foward #####
  it("Delete CFU", () => {
    const cFTerminal = variables.cFTerminals[0]
    const cfBefore = {
      method: "DeleteCfu",
      opCode: opCode,
      userName: cFTerminal.userName,
      terminal: cFTerminal.terminal,
      code: "0",
      message: "SUCCESS"
    };
    cy.callFowardDelete(cfBefore);
  })
  //##################################################################

  for (const callFowardMethod of variables.callFowardMethods) {
    for (const cFTerminal of variables.cFTerminals) {
      it(`${callFowardMethod} - ${cFTerminal.message}`, () => {
        const attributes = {
          method: callFowardMethod,
          opCode: opCode,
          userName: cFTerminal.userName,
          terminal: cFTerminal.terminal,
          phone_number:cFTerminal.phone_number,
          code: cFTerminal.code,
          message: cFTerminal.message
        };
        cy.cfSave(attributes);
      });
    }
  };
  

  for (const cFNATimeoutTerminal of variables.cFNATimeoutTerminals) {
    it(`SaveCfnaTimeOut - ${cFNATimeoutTerminal.message}`, () => {
      const attributes = {
        method: "SaveCfnaTimeOut",
        opCode: opCode,
        userName: cFNATimeoutTerminal.userName,
        terminal: cFNATimeoutTerminal.terminal,
        phone_number:cFNATimeoutTerminal.phone_number,
        time_out: cFNATimeoutTerminal.timeout,
        code: cFNATimeoutTerminal.code,
        message: cFNATimeoutTerminal.message
      };
      cy.cfTimeoutSave(attributes);
    });
  }
});

describe("Save Multi Hunting Group", { env: { hideCredentials: true } }, () => {
  it("SaveMultiHuntingGroup", () => {
    const attributes = {
      method: "SaveMultiHuntingGroup",
      opCode: opCode,
      userName: "limad",
      companyId: 656122,
      terminal: 44888444222,
      name: "testMuHG",
      type: "R",
      callerPrefix: 12,
      terminalMember: 44333222111,
      huntingOrder: 1,
      active: true,
      loggedIn: true,
      notificationLogin: true,
      notificationLogout: true,
      huntingGroupId: 10
    };
    cy.saveMuHG(attributes)
  })
})

describe("Save Screening Outgoing", { env: { hideCredentials: true } }, () => {
  for (const screeningList of variables.screeningLists) {
    it.only(`SaveScreeningList - ${screeningList.message}`, () => {
      const attributes = {
        method: "SaveScreeningList",
        opCode: opCode,
        userName: "limad",
        company_id: screeningList.company_id,
        screening_list_id: screeningList.screening_list_id,
        name: screeningList.name,
        code: screeningList.code,
        message: screeningList.message
      };
      cy.saveScreeningList(attributes).then(response => {
        parser.parseString(response.body,(err,result) => {
          const listId = result["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["InsertedKey"];
          Cypress.env('listID', listId);
        })
      })
    })
  }

  it.only("SaveScreeningListItem - ${screeningItem.message}", () => {
    const listID = Cypress.env('listID')
    const attributes = {
      method: "SaveScreeningListItem",
      opCode: opCode,
      userName: "limad",
      list_id: listID,
      phone_number: 8888,
      code: "0",
      message: "SUCCESS"
    };
    cy.saveScreeningListItem(attributes)
  })
  
  for (const screeningMethod of variables.screeningMethods) {
    for (const screeningItem of variables.screeningItems) {
      it( `${screeningMethod} - ${screeningItem.message}`, () => {
        const attributes = {
          method: screeningMethod,
          opCode: opCode,
          userName: "limad",
          company_id: screeningItem.company_id,
          layer: screeningItem.layer,
          type: screeningItem.type,
          permission: screeningItem.permission,
          sunday: screeningItem.sunday,
          monday: screeningItem.monday,
          tuesday: screeningItem.tuesday,
          wednesday: screeningItem.wednesday,
          thursday: screeningItem.thursday,
          friday: screeningItem.friday,
          saturday: screeningItem.saturday,
          code: screeningItem.code,
          message: screeningItem.message
        };
        cy.saveScreening(attributes)
      })
    }
  }
})