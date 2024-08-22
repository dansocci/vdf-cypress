const endPoint = Cypress.env('url');
const auth = { username: Cypress.env('user'), password: Cypress.env('password')}

const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false});

Cypress.Commands.add('companyInsert', attributes => {
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
                                        <CompanyTO>
                                            <name>${attributes.name}</name>
                                            <language>${attributes.language}</language>
                                            <dual_outgoing_ctransfer>${attributes.dual_outgoing_ctransfer}</dual_outgoing_ctransfer>
                                            <vatin>${attributes.vatin}</vatin>
                                            <vpn_force_onnet>${attributes.vpn_force_onnet}</vpn_force_onnet>
                                        </CompanyTO>
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

Cypress.Commands.add('groupInsert', attributes => {
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
                                        <GroupTO>
                                            <company_id>${attributes.company_id}</company_id>
                                            <name>${attributes.name}</name>
                                        </GroupTO>
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

Cypress.Commands.add('userInsert', attributes => {
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
                                         <UserTO>
                                            <group_id>${attributes.group_id}</group_id>
                                            <name>${attributes.name}</name>
                                            <display_name>${attributes.display_name}</display_name>
                                            <is_corporate>${attributes.is_corporate}</is_corporate>
                                        </UserTO>
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

Cypress.Commands.add('mondrianTerminalInsert', attributes => {
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
                                        <TerminalTO>
                                            <terminal>${attributes.terminal}</terminal>
                                            <short_number>${attributes.short_number}</short_number>
                                            <terminal_type>${attributes.terminal_type}</terminal_type>
                                            <user_id>${attributes.user_id}</user_id>
                                            <is_corporate>${attributes.is_corporate}</is_corporate>
                                            <group_id>${attributes.group_id}</group_id>
                                            <name>${attributes.name}</name>
                                        </TerminalTO>
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