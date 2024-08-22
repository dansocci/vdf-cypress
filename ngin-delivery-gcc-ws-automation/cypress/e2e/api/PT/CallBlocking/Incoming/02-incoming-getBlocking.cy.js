const endPoint = "gcc-external-services/blocking/incoming/get";
const SubscriberCB = "351912345697";

describe("INCOMING Barring - getBlocking",{env: {hideCredentials: true }}, () => {
  it("Get Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB
    };
    cy.searchSubscriber(subscribers);
  });

  it("Get Subscriber Not Found", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: 351912345622,
      error:["ERR_NOT_FOUND"]
    };
    cy.subscriberError(subscribers);
  });

  it("Get Subscriber Empty Fields", () => {
    const subscribers = {
      ws: endPoint,
      error:["ERR_EMPTY_FIELD"]
    };
    cy.subscriberError(subscribers);
  });

  it("Get Subscriber Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber:"35191929394950000000000000",
      error:["ERR_INCONSISTENT_DATA"]
    };
    cy.subscriberError(subscribers);
  });

  it("Get Subscriber Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber:"3332221",
      error:["ERR_NOT_FOUND"]
    };
    cy.subscriberError(subscribers);
  });

  it("Get Subscriber Null", () => {
    const subscribers = {
      ws: endPoint,
      subscriber:null,
      error:["ERR_EMPTY_FIELD"]
    };
    cy.subscriberError(subscribers);
  });

  it("Get Subscriber Bad Type", () => {
    const subscribers = {
      ws: endPoint,
      subscriber:"test",
      error:["ERR_INCONSISTENT_DATA"]
    };
    cy.subscriberError(subscribers);
  });
})