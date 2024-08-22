const endPoint = Cypress.env('url');
const auth = { username: Cypress.env('user'), password: Cypress.env('password')}

const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false});

Cypress.Commands.add('itemActivate', attributes => {
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
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
    //   expect(response.status).to.equal(200);
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});