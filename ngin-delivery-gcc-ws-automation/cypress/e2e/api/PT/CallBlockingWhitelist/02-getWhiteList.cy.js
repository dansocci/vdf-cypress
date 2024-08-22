const endPoint = "gcc-external-services/whitelist/get";
const SubscriberWL = "351912345678";
const CallingNumber = "351912345674";

describe("WhiteList - getSubscriber",{env: {hideCredentials: true }}, () => {
  it("Get WhiteList Normal Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberWL,
    };
    cy.whiteListCB(subscribers).then((response) => {
      expect(response.body.response[0].phone_number).to.equal(CallingNumber);
    });
  });

  it("Get WhiteList Not Normal Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: 351912345678323123123313132,
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.whiteListError(subscribers);
  });

  it("Get WhiteList Empty Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.whiteListError(subscribers);
  });

  it("Get WhiteList Not Found", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "351912345640",
      error: ["ERR_NOT_FOUND"],
    };
    cy.whiteListError(subscribers);
  });
});
