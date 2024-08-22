const accessToken = `Basic ${Cypress.env('authPT')}`

Cypress.Commands.add('subscriberError', subscribers => {
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
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('subscriberAllError', subscribers => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('urlPT')}${subscribers.ws}`,
        failOnStatusCode: false,
        body: subscribers.body,
        headers: { Authorization: accessToken },
    }).then(response => {
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('callBlockingError', subscribers => {
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
    }).then(response => {
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('callBlockingAllError', subscribers => {
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
    }).then(response => {
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('labelBlockingError', subscribers => {
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
    }).then(response => {
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('whiteListError', subscribers => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('urlPT')}${subscribers.ws}`,
        failOnStatusCode: false,
        body: {
            "subscriber": subscribers.subscriber,
            "calling": subscribers.callingNumber
          },
        headers: { Authorization: accessToken },
    }).then(response => {
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('callFowardError', subscribers => {
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
    }).then(response => {
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('geoNumberError', subscribers => {
    cy.api({
        method: 'POST',
        url: `${Cypress.env('urlPT')}${subscribers.ws}`,
        failOnStatusCode: false,
        body: {
            "cp4": subscribers.cp4,
            "suffix": subscribers.suffix
          },
        headers: { Authorization: accessToken },
    }).then(response => {
        expect(response.status).to.equal(400)
        const expectedErrors = subscribers.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(subscribers.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('hotlineNumberError', phone => {
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
        expect(response.status).to.equal(400)
        const expectedErrors = phone.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(phone.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})

Cypress.Commands.add('portabilityNumberError', phone => {
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
        expect(response.status).to.equal(400)
        const expectedErrors = phone.error;
        const actualErrors = response.body.businessError;
        const missingErrors = expectedErrors.filter(error => !actualErrors.includes(error));
        expect(phone.error.length).to.eq(actualErrors.length);
        expect(missingErrors.length).to.eq(0);
    })
})