const endPoint = "gcc-external-services/portability/update"
const PortabilityNumber = "351912345678"

describe('Update Portability Number',{env: {hideCredentials: true }}, () => {
  it('Update Portability Normal Number to 1', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: PortabilityNumber,
        status: 1
    }
    cy.portabilityNumber(phone).then(response => {
      expect(response.body.response[0].resultCode).to.equal(1)
    })
  })

  it('Update Portability Normal Number to 0', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: PortabilityNumber,
        status: 0
    }
    cy.portabilityNumber(phone).then(response => {
      expect(response.body.response[0].resultCode).to.equal(1)
    })
  })

  it('Update Portability Number Not In Format E164', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 800,
        status: 1,
        error: ["ERR_INVALID_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Status Invalid', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: PortabilityNumber,
        status: 9,
        error: ["ERR_INVALID_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Number Not Normal', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 351912345673123123131231237876876868,
        status: 1,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Number Null', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: null,
        status: 1,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Status Null', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: PortabilityNumber,
        status: null,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })
  
  it('Update Portability Number String', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: "test",
        status: 1,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Number All Null', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: null,
        status: null,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Number Null and Inconsistent Data', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 351912345671111111111111111111111111111111118,
        status: null,
        error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Number Invalid and Inconsistent Data', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 351912345671111111111111111111111111111111118,
        status: 9,
        error: ["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })

  it('Update Portability Number Null and Ivalid Data', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: null,
        status: 9,
        error: ["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    }
    cy.portabilityNumberError(phone)
  })
})
