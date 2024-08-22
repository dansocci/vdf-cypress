const endPoint = Cypress.env('url');
const auth = { username: Cypress.env('user'), password: Cypress.env('password')}

const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false});

Cypress.Commands.add('terminalUpdate', attributes => {
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
                                        <TerminalTO>
                                            <terminal>${attributes.terminal}</terminal>
                                            <short_number>${attributes.short_number}</short_number>
                                            <user_id>${attributes.user_id}</user_id>
                                            <status>${attributes.status}</status>
                                        </TerminalTO>
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

Cypress.Commands.add('terminalNumberUpdate', attributes => {
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
                            <web:old_number>${attributes.old_number}</web:old_number>
                            <web:new_number>${attributes.new_number}</web:new_number>
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

Cypress.Commands.add('terminalUserUpdate', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                     <soap:Body>
                        <web:${attributes.method}>
                            <web:opCode>${attributes.opCode}</web:opCode>
                            <web:terminal>${attributes.terminal}</web:terminal>
                            <web:user_id>${attributes.user_id}</web:user_id>
                            <web:user_name>${attributes.userName}</web:user_name>
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

Cypress.Commands.add('userUpdate', attributes => {
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
                                        <UserTO>
                                            <user_id>${attributes.user_id}</user_id>
                                            <call_park>${attributes.call_park}</call_park>
                                        </UserTO>
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

Cypress.Commands.add('companyUpdate', attributes => {
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
                                        <CompanyTO>
                                            <company_id>${attributes.company_id}</company_id>
                                            <name>${attributes.name}</name>
                                            <language>${attributes.language}</language>
                                            <vatin>${attributes.vatin}</vatin>
                                            <vpn_force_onnet>${attributes.vpn_force_onnet}</vpn_force_onnet>
                                            <dual_outgoing_ctransfer>${attributes.dual_outgoing_ctransfer}</dual_outgoing_ctransfer>
                                            <hotdesk_timeout>${attributes.hotdesk_timeout}</hotdesk_timeout>
                                            <max_annc_size>${attributes.max_annc_size}</max_annc_size>
                                            <trunking_allowed>${attributes.trunking_allowed}</trunking_allowed>
                                            <chunt_prefix_length>${attributes.chunt_prefix_length}</chunt_prefix_length>
                                            <call_log>${attributes.call_log}</call_log>
                                            <dnd_max_time>${attributes.dnd_max_time}</dnd_max_time>
                                            <enable_presence>${attributes.enable_presence}</enable_presence>
                                        </CompanyTO>
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

Cypress.Commands.add('networkStatusUpdate', attributes => {
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
                            <web:network_provisioned>${attributes.network_provisioned}</web:network_provisioned>
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