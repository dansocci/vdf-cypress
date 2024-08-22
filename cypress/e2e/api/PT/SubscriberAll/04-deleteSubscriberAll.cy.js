const endPoint = "gcc-external-services/subscriber/delete/all"
const SubscriberMB = "351912345697"
const SubscriberFX = "351211111116"
const testValues = [351910000008,351214000001,351914000002]

describe('Delete Subscriber All',{env: {hideCredentials: true }}, () => {
  it('Delete Subscriber All MB Normal', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: SubscriberMB
    }
    cy.searchSubscriber(subscribers)
  });

  it('Delete Subscriber All FX Normal', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: SubscriberFX
    }
    cy.searchSubscriber(subscribers)
  });

  it('Delete Subscriber All Inconsistent Data', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "teste",
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  });

  it('Delete Subscriber All MB Invalid Field', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "3519123456",
        error: ["ERR_INVALID_FIELD"]
    }
    cy.subscriberError(subscribers)
  });

  it('Delete Subscriber All FX Invalid Field', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "3512100020",
        error: ["ERR_INVALID_FIELD"]
    }
    cy.subscriberError(subscribers)
  });

  it('Delete Subscriber All Empty Field', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: null,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  });

  it('Delete Subscriber All Not Found', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345688",
        error: ["ERR_NOT_FOUND"]
    }
    cy.subscriberError(subscribers)
  });
});

//Test to remove inserted subscribers during the addSubscriber test
describe("Delete All Subscribers Test",{env: {hideCredentials: true }}, () => {
  testValues.forEach((subscriberValue) => {
    it(`Subscriber ${subscriberValue} deleted`, () => {
      cy.deleteTestAllSubscriber(subscriberValue);
    });
  });
});
