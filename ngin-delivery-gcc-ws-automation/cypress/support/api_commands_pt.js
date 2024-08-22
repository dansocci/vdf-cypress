const accessToken = `Basic ${Cypress.env('authPT')}`

Cypress.Commands.add('addSubscriber', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscribers.subscriber,
        "terminalType": subscribers.terminalType,
        "fx_status": subscribers.fx_status,
        "cforward": subscribers.cforward,
        "cwaiting": subscribers.cwaiting,
        "cblocking": subscribers.cblocking,
        "privacyallowed": subscribers.privacyallowed,
        "pica": subscribers.pica,
        "pgs": subscribers.pgs,
        "yorn": subscribers.yorn,
        "pay4me": subscribers.pay4me,
        "clir": subscribers.clir,
        "semi_clir": subscribers.semi_clir,
        "pani1": subscribers.pani1,
        "pani2": subscribers.pani2,
        "cp4": subscribers.cp4,
        "cp3": subscribers.cp3,
        "cfnatimeout": subscribers.cfnatimeout,
        "onlinecharging": subscribers.amarecordgenlevel,
        "amarecordgenlevel": subscribers.amarecordgenlevel
      },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

Cypress.Commands.add('addSubscriberAll', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: subscribers.body,
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

//Method used to get and delete subscribers
Cypress.Commands.add('searchSubscriber', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscribers.subscriber
      },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200)
    expect(response.body.businessError).to.be.null;
  })
})

//Command used to delete subscribers added on addSubscriber test
Cypress.Commands.add('deleteTestSubscriber', subscriberValue => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}gcc-external-services/subscriber/delete`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscriberValue
      },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

//Command used to delete all subscribers added on addAllSubscriber test
Cypress.Commands.add('deleteTestAllSubscriber', subscriberValue => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}gcc-external-services/subscriber/delete/all`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscriberValue
      },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  })
})

Cypress.Commands.add('addBlocking', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscribers.subscriber,
        "number_range": subscribers.numberRange,
        "phone_number": subscribers.phoneNumber,
        "action": subscribers.action
      },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
    // expect(response.body.response[0].phone_number).to.equal(subscribers.phoneNumber);
  });
})

Cypress.Commands.add('addBlockingAll', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "number_range": subscribers.numberRange,
        "phone_number": subscribers.phoneNumber,
        "action": subscribers.action
      },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  });
})

Cypress.Commands.add('labelBlocking', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "label": subscribers.label,
        "type": subscribers.type,
        "phone_number": subscribers.phoneNumber
      },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  });
})

Cypress.Commands.add('whiteListCB', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscribers.subscriber,
        "calling": subscribers.callingNumber
      },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  });
})

Cypress.Commands.add('callFoward', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscribers.subscriber,
        "phone_number": subscribers.fowardNumber,
        "action": subscribers.action
      },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  });
})

Cypress.Commands.add('deleteCallFoward', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
        "subscriber": subscribers.subscriber,
        "action": subscribers.action
      },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
    expect(response.body.response[0].resultCode).to.equal(1);
  });
})

Cypress.Commands.add('geoNumber', subscribers => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${subscribers.ws}`,
    failOnStatusCode: false,
    body: {
      "cp4": subscribers.cp4,
      "suffix": subscribers.suffix
      },
    headers: { Authorization: accessToken },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.businessError).to.be.null;
  });
})

Cypress.Commands.add('hotlineNumber', phone => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${phone.ws}`,
    failOnStatusCode: false,
    body: {
        "phone_number": phone.phoneNumber,
        "status": phone.status
      },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200)
    expect(response.body.businessError).to.be.null;
  })
})

Cypress.Commands.add('portabilityNumber', phone => {
  cy.api({
    method: 'POST',
    url: `${Cypress.env('urlPT')}${phone.ws}`,
    failOnStatusCode: false,
    body: {
        "msisdn": phone.phoneNumber,
        "status": phone.status
      },
    headers: { Authorization: accessToken },
  }).then(response => {
    expect(response.status).to.equal(200)
    expect(response.body.businessError).to.be.null;
  })
})