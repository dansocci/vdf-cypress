const endPoint = Cypress.env('url');
const auth = { username: Cypress.env('user'), password: Cypress.env('password')}

const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false});

Cypress.Commands.add('cfSave', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                    <soap:Body>
                        <web:${attributes.method}>
                            <web:opCode>${attributes.opCode}</web:opCode>
                            <web:user_name>${attributes.userName}</web:user_name>
                            <web:terminal>${attributes.terminal}</web:terminal>
                            <web:phone_number>${attributes.phone_number}</web:phone_number>
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
      expect(response.status).to.equal(200);
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});

Cypress.Commands.add('cfTimeoutSave', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                    <soap:Body>
                        <web:${attributes.method}>
                            <web:opCode>${attributes.opCode}</web:opCode>
                            <web:user_name>${attributes.userName}</web:user_name>
                            <web:terminal>${attributes.terminal}</web:terminal>
                            <web:phone_number>${attributes.phone_number}</web:phone_number>
                            <web:time_out>${attributes.time_out}</web:time_out>
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
      expect(response.status).to.equal(200);
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});

Cypress.Commands.add('saveMuHG', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                    <soap:Body>
                        <web:${attributes.method}>
                            <web:inputXML>
                                <Root>
                                    <opCode>${attributes.opCode}</opCode>
                                    <userName>${attributes.userName}</userName>
                                    <Update>
                                        <MhgTO>
                                            <opCode>${attributes.opCode}</opCode>
                                            <UserName>${attributes.userName}</UserName>
                                            <CompanyId>${attributes.companyId}</CompanyId>
                                            <Terminal>${attributes.terminal}</Terminal>
                                            <Name>${attributes.name}</Name>
                                            <Type>${attributes.type}</Type>
                                            <CallerPrefix>${attributes.callerPrefix}</CallerPrefix>
                                            <MhgTerminals>
                                                <PhoneNumber>
                                                    <TerminalMember>${attributes.terminalMember}</TerminalMember>
                                                    <HuntingOrder>${attributes.huntingOrder}</HuntingOrder>
                                                    <HuntGroupActive>${attributes.active}</HuntGroupActive>
                                                    <LoggedIn>${attributes.loggedIn}</LoggedIn>
                                                    <NotificationLogin>${attributes.notificationLogin}</NotificationLogin>
                                                    <NotificationLogout>${attributes.notificationLogout}</NotificationLogout>
                                                    <CallHuntingGroupId>${attributes.huntingGroupId}</CallHuntingGroupId>
                                                </PhoneNumber>
                                            </MhgTerminals>
                                        </MhgTO>
                                    </Update>
                                </Root>
                            </web:inputXML>
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
      expect(response.status).to.equal(200);
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});

Cypress.Commands.add('saveScreening', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                    <soap:Body>
                        <web:${attributes.method}>
                            <web:opCode>${attributes.opCode}</web:opCode>
                            <web:user_name>${attributes.userName}</web:user_name>
                            <web:company_id>${attributes.company_id}</web:company_id>
                            <web:layer>${attributes.layer}</web:layer>
                            <web:type>${attributes.type}</web:type>
                            <web:permission>${attributes.permission}</web:permission>
                            <web:sunday>${attributes.sunday}</web:sunday>
                            <web:monday>${attributes.monday}</web:monday>
                            <web:tuesday>${attributes.tuesday}</web:tuesday>
                            <web:wednesday>${attributes.wednesday}</web:wednesday>
                            <web:thursday>${attributes.thursday}</web:thursday>
                            <web:friday>${attributes.friday}</web:friday>
                            <web:saturday>${attributes.saturday}</web:saturday>
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
      expect(response.status).to.equal(200);
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});

Cypress.Commands.add('saveScreeningList', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                    <soap:Body>
                        <web:${attributes.method}>
                            <web:opCode>${attributes.opCode}</web:opCode>
                            <web:user_name>${attributes.userName}</web:user_name>
                            <web:screening_list_id>${attributes.screening_list_id}</web:screening_list_id>
                            <web:company_id>${attributes.company_id}</web:company_id>
                            <web:name>${attributes.name}</web:name>
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
      expect(response.status).to.equal(200);
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});

Cypress.Commands.add('saveScreeningListItem', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                    <soap:Body>
                        <web:${attributes.method}>
                            <web:inputXML>
                                <Root>
                                    <opCode>${attributes.opCode}</opCode>
                                    <userName>${attributes.userName}</userName>
                                    <Insert>
                                        <ArrayOfScreeningListItemTO>
                                            <ScreeningListItemTO>
                                                <screening_list_id>${attributes.list_id}</screening_list_id>
                                                <phone_number>${attributes.phone_number}</phone_number>
                                            </ScreeningListItemTO>
                                        </ArrayOfScreeningListItemTO>
                                    </Insert>
                                </Root>
                            </web:inputXML>
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
      expect(response.status).to.equal(200);
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});