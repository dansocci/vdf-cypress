const endPoint = Cypress.env('url');
const auth = { username: Cypress.env('user'), password: Cypress.env('password')}

const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false});

Cypress.Commands.add('methodByTerminal', attributes => {
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

Cypress.Commands.add('methodByCompany', attributes => {
  cy.api({
   method: 'POST',
      url: endPoint,
      failOnStatusCode: false,
      body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
              <soap:Header/>
                  <soap:Body>
                      <web:${attributes.method}>
                          <web:opCode>${attributes.opCode}</web:opCode>
                          <web:company_id>${attributes.company_id}</web:company_id>
                      </web:${attributes.method}>
                  </soap:Body>
              </soap:Envelope>`,
      auth: auth
  }).then(response => {
    parser.parseString(response.body,(err,result) => {
      const jsonData = result
      const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
      const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
      expect(statusCode).to.equal(attributes.code)
      expect(statusMessage).to.equal(attributes.message)
    })
  })
});

Cypress.Commands.add('bossKey', attributes => {
    cy.api({
     method: 'POST',
        url: endPoint,
        failOnStatusCode: false,
        body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
                <soap:Header/>
                    <soap:Body>
                        <web:${attributes.method}>
                            <web:opCode>${attributes.opCode}</web:opCode>
                            <web:user_id>${attributes.user_id}</web:user_id>
                        </web:${attributes.method}>
                    </soap:Body>
                </soap:Envelope>`,
        auth: auth
    }).then(response => {
      parser.parseString(response.body,(err,result) => {
        const jsonData = result
        const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
        const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
        expect(statusCode).to.equal(attributes.code)
        expect(statusMessage).to.equal(attributes.message)
      })
    })
});

Cypress.Commands.add('dialedByNumber', attributes => {
  cy.api({
   method: 'POST',
      url: endPoint,
      failOnStatusCode: false,
      body: `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:web="http://microsoft.com/webservices">
              <soap:Header/>
                  <soap:Body>
                      <web:${attributes.method}>
                          <web:opCode>${attributes.opCode}</web:opCode>
                          <web:ANumber>${attributes.aNumber}</web:ANumber>
                          <web:dialedNumber>${attributes.dialedNumber}</web:dialedNumber>
                      </web:${attributes.method}>
                  </soap:Body>
              </soap:Envelope>`,
      auth: auth
  }).then(response => {
    parser.parseString(response.body,(err,result) => {
      const jsonData = result
      const statusCode = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusCode"];
      const statusMessage = jsonData["soap:Envelope"]["soap:Body"][attributes.method+"Response"][attributes.method+"Result"]["Root"]["StatusMessage"];
      expect(statusCode).to.equal(attributes.code)
      expect(statusMessage).to.equal(attributes.message)
    })
  })
});