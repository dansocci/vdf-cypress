const endPoint = "gcc-external-services/hotlinenumber/update"
const HotlinePhoneNumber1 = "351912345678"

describe('Update Hotline Number',{env: {hideCredentials: true }}, () => {
  it('Update Hotline Normal Number to 1', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: HotlinePhoneNumber1,
        status: 1
    }
    cy.hotlineNumber(phone).then(response => {
      expect(response.body.response[0].resultCode).to.equal(1)
    })
  })

  it('Update Hotline Normal Number to 0', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: HotlinePhoneNumber1,
        status: 0
    }
    cy.hotlineNumber(phone).then(response => {
      expect(response.body.response[0].resultCode).to.equal(1)
    })
  })

  it('Update Hotline Number Not In Format E164', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 800,
        status: 1,
        error: ["ERR_INVALID_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Status Invalid', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: HotlinePhoneNumber1,
        status: 9,
        error: ["ERR_INVALID_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Number Not Normal', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 351912345673123123131231237876876868,
        status: 1,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Number Null', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: null,
        status: 1,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Status Null', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: HotlinePhoneNumber1,
        status: null,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })
  
  it('Update Hotline Number String', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: "test",
        status: 1,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Number All Null', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: null,
        status: null,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Number Null and Inconsistent Data', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 351912345671111111111111111111111111111111118,
        status: null,
        error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Number Invalid and Inconsistent Data', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: 351912345671111111111111111111111111111111118,
        status: 9,
        error: ["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })

  it('Update Hotline Number Null and Inconsistent Data', () => {
    const phone = {
        ws: endPoint,
        phoneNumber: null,
        status: 9,
        error: ["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    }
    cy.hotlineNumberError(phone)
  })
})
