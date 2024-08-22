const accessToken = `Basic ${Cypress.env('authUK')}`;

Cypress.Commands.add('getAll', terminal => {
    cy.api({
      method: 'POST',
      url: `${Cypress.env('urlUK1')}${terminal.ws}`,
      failOnStatusCode: false,
      body: terminal.body,
      headers: { Authorization: accessToken },
    }).then(response => {
      expect(response.status).to.equal(terminal.status);
    })
})

Cypress.Commands.add('detailMVNO', terminal => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlUK1')}${terminal.ws}`,
    failOnStatusCode: false,
    body: {
      "id": terminal.id,
      "name": terminal.name,
      "wholeSaleRating": terminal.wsr,
      "tariffIndicator": terminal.tariff,
      "insertDate": terminal.insertDate,
      "insertUser": terminal.insertUser,
      "updateDate": terminal.updateDate,
      "updateUser": terminal.updateUser
    },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

Cypress.Commands.add('imsirangeMVNO', terminal => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlUK1')}${terminal.ws}`,
    failOnStatusCode: false,
    body: {
      "id": terminal.id,
      "imsiRange": terminal.imsiRange,
      "isMvno": terminal.isMvno,
      "insertDate": terminal.insertDate,
      "insertUser": terminal.insertUser,
      "updateDate": terminal.updateDate,
      "updateUser": terminal.updateUser
    },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

Cypress.Commands.add('translationMVNO', terminal => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlUK1')}${terminal.ws}`,
    failOnStatusCode: false,
    body: {
      "id": terminal.id,
      "dialledNumber": terminal.dialledNumber,
      "roaming": terminal.roaming,
      "removeDigits": terminal.removeDigits,
      "translatedNumber": terminal.translatedNumber,
      "natureOfAddress": terminal.natureOfAddress,
      "insertDate": terminal.insertDate,
      "insertUser": terminal.insertUser,
      "updateDate": terminal.updateDate,
      "updateUser": terminal.updateUser
    },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

Cypress.Commands.add('normalizationAPI', terminal => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlUK1')}${terminal.ws}`,
    failOnStatusCode: false,
    body: {
      "mccMnc": terminal.mccMnc,
      "prefixNumber": terminal.prefixNumber,
      "natureOfAddress": terminal.natureOfAddress,
      "normalizedPrefix": terminal.normalizedPrefix,
      "deleteDigits": terminal.deleteDigits,
      "insertDate": terminal.insertDate,
      "insertUser": terminal.insertUser,
      "updateDate": terminal.updateDate,
      "updateUser": terminal.updateUser
    },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

Cypress.Commands.add('rafAPI', terminal => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlUK1')}${terminal.ws}`,
    failOnStatusCode: false,
    body: {
      "callingMcc": terminal.callingMcc,
      "callingMnc": terminal.callingMnc,
      "normalizedNumber": terminal.normalizedNumber,
      "isFullDialledNumb": terminal.isFullDialledNumb,
      "prepayRule": terminal.prepayRule,
      "postpayRule": terminal.postpayRule,
      "mvnoRule": terminal.mvnoRule,
      "description": terminal.description
    },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})