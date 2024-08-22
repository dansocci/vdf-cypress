const accessToken = `Basic ${Cypress.env('authUK')}`;

Cypress.Commands.add("detailMVNOError", (terminal) => {
  cy.api({
    method: "POST",
    url: `${Cypress.env("urlUK1")}${terminal.ws}`,
    failOnStatusCode: false,
    body: {
      id: terminal.id,
      name: terminal.name,
      wholeSaleRating: terminal.wsr,
      tariffIndicator: terminal.tariff,
      insertDate: terminal.insertDate,
      insertUser: terminal.insertUser,
      updateDate: terminal.updateDate,
      updateUser: terminal.updateUser,
    },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(400);
    const expectedErrors = terminal.error;
    const actualErrors = response.body.businessError;
    const missingErrors = expectedErrors.filter(
      (error) => !actualErrors.includes(error)
    );
    expect(terminal.error.length).to.eq(actualErrors.length);
    expect(missingErrors.length).to.eq(0);
  });
});

Cypress.Commands.add("imsirangeMVNOError", (terminal) => {
  cy.api({
    method: "POST",
    url: `${Cypress.env("urlUK1")}${terminal.ws}`,
    failOnStatusCode: false,
    body: {
      id: terminal.id,
      imsiRange: terminal.imsiRange,
      isMvno: terminal.isMvno,
      insertDate: terminal.insertDate,
      insertUser: terminal.insertUser,
      updateDate: terminal.updateDate,
      updateUser: terminal.updateUser,
    },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(400);
    const expectedErrors = terminal.error;
    const actualErrors = response.body.businessError;
    const missingErrors = expectedErrors.filter(
      (error) => !actualErrors.includes(error)
    );
    expect(terminal.error.length).to.eq(actualErrors.length);
    expect(missingErrors.length).to.eq(0);
  });
});

Cypress.Commands.add('translationMVNOError', terminal => {
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
  }).then((response) => {
    expect(response.status).to.equal(400);
    const expectedErrors = terminal.error;
    const actualErrors = response.body.businessError;
    const missingErrors = expectedErrors.filter(
      (error) => !actualErrors.includes(error)
    );
    expect(terminal.error.length).to.eq(actualErrors.length);
    expect(missingErrors.length).to.eq(0);
  });
});

Cypress.Commands.add('normalizationAPIError', terminal => {
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
  }).then((response) => {
    expect(response.status).to.equal(400);
    const expectedErrors = terminal.error;
    const actualErrors = response.body.businessError;
    const missingErrors = expectedErrors.filter(
      (error) => !actualErrors.includes(error)
    );
    expect(terminal.error.length).to.eq(actualErrors.length);
    expect(missingErrors.length).to.eq(0);
  });
});

Cypress.Commands.add('rafAPIError', terminal => {
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
  }).then((response) => {
    expect(response.status).to.equal(400);
    const expectedErrors = terminal.error;
    const actualErrors = response.body.businessError;
    const missingErrors = expectedErrors.filter(
      (error) => !actualErrors.includes(error)
    );
    expect(terminal.error.length).to.eq(actualErrors.length);
    expect(missingErrors.length).to.eq(0);
  });
});