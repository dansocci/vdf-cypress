const variables = require("../../../fixtures/insert_variables_success");
const opCode = variables.opCode;

const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false});

describe("Insert Methods - Success", { env: { hideCredentials: true } }, () => {
  const groupInsertSuccess = variables.groupSuccess
  const usersInsertSuccess = variables.usersInsertSuccess
  const mondrianTerminalSuccess = variables.mondrianTerminalSuccess
  const companyTerminalSuccess = variables.companyTerminalSuccess
  const companyInsertSuccess = variables.companySuccess

  after(() => {
    cy.writeFile('./cypress/fixtures/temp/global.json', { 'company_id': "656122", 'group_id': Cypress.env('groupID'), 'user_id': Cypress.env('userID'), 
      'terminal': mondrianTerminalSuccess.terminal , "companyNumber": companyTerminalSuccess.terminal })
  })

    // ##### Business Error #####
    it.skip(`InsertCompany - ${companyInsertSuccess.message}`, () => {
      const attributes = {
        method: "InsertCompany",
        opCode: opCode,
        userName: companyInsertSuccess.userName,
        name: companyInsertSuccess.name,
        language: companyInsertSuccess.language,
        dual_outgoing_ctransfer: companyInsertSuccess.dual_outgoing_ctransfer,
        vatin: companyInsertSuccess.vatin,
        vpn_force_onnet: companyInsertSuccess.vpn_force_onnet,
        code: companyInsertSuccess.code,
        message: companyInsertSuccess.message
      };
      cy.companyInsert(attributes).then(response => {
        parser.parseString(response.body,(err,result) => {
          const companyId = result["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["InsertedKey"];
          Cypress.env('companyID', companyId);
        })
      })
    });

    it(`InsertGroup - ${groupInsertSuccess.message}`, () => {
      const attributes = {
        method: "InsertGroup",
        opCode: opCode,
        userName: groupInsertSuccess.userName,
        company_id: groupInsertSuccess.company_id,
        name: groupInsertSuccess.name,
        code: groupInsertSuccess.code,
        message: groupInsertSuccess.message
      };
      cy.groupInsert(attributes).then(response => {
        parser.parseString(response.body,(err,result) => {
          const groupId = result["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["InsertedKey"];
          Cypress.env('groupID', groupId);
        })
      })
    });


  it(`InsertUser - ${usersInsertSuccess.message}`, () => {
      const attributes = {
        method: "InsertUser",
        opCode: opCode,
        userName: usersInsertSuccess.userName,
        group_id: Cypress.env('groupID'),
        name: usersInsertSuccess.name,
        display_name: usersInsertSuccess.display_name,
        is_corporate: usersInsertSuccess.is_corporate,
        code: usersInsertSuccess.code,
        message: usersInsertSuccess.message
      };
      cy.userInsert(attributes).then(response => {
        parser.parseString(response.body,(err,result) => {
          const userId = result["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["InsertedKey"];
          Cypress.env('userID', userId);
        })
      })
    });

    it(`InsertTerminalMondrian - ${mondrianTerminalSuccess.message}`, () => {
        const attributes = {
          method: "InsertTerminalMondrian",
          opCode: opCode,
          userName: mondrianTerminalSuccess.userName,
          terminal: mondrianTerminalSuccess.terminal ,
          short_number: mondrianTerminalSuccess.short_number,
          terminal_type: mondrianTerminalSuccess.terminal_type,
          user_id: Cypress.env('userID'),
          is_corporate: mondrianTerminalSuccess.is_corporate,
          group_id: Cypress.env('groupID'),
          name: mondrianTerminalSuccess.name,
          code: mondrianTerminalSuccess.code,
          message: mondrianTerminalSuccess.message
        };
        cy.mondrianTerminalInsert(attributes);
      });

      it(`InsertTerminalMondrian - Company Number - ${companyTerminalSuccess.message}`, () => {
        const attributes = {
          method: "InsertTerminalMondrian",
          opCode: opCode,
          userName: companyTerminalSuccess.userName,
          terminal: companyTerminalSuccess.terminal ,
          short_number: companyTerminalSuccess.short_number,
          terminal_type: companyTerminalSuccess.terminal_type,
          // user_id: Cypress.env('userID'),
          is_corporate: companyTerminalSuccess.is_corporate,
          group_id: Cypress.env('groupID') ,
          name: companyTerminalSuccess.name,
          code: companyTerminalSuccess.code,
          message: companyTerminalSuccess.message
        };
        cy.mondrianTerminalInsert(attributes);
      });
  }
)
