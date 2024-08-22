const endPoint = "gcc-external-services/subscriber/get"

describe('Get Subscriber',{env: {hideCredentials: true }}, () => {
  it('Get Subscriber MB Add Normal', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345697"
    }

    cy.searchSubscriber(subscribers)
  })

  it('Get Subscriber Bad Number', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345641543543535353",
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Get Subscriber Empty Fields', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "",
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it('Get Subscriber Invalid Fields', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "35191000000000000000000000000000",
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Get Subscriber Bad Number Not In Format E164', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "969686100",
        error: ["ERR_INVALID_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it('Get Subscriber Bad Value', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "este",
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Get Subscriber Doesn\'t exist', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345640",
        error: ["ERR_NOT_FOUND"]
    }
    cy.subscriberError(subscribers)
  })
})
