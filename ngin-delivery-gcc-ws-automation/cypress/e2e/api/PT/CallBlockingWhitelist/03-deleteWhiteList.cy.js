const endPoint = "gcc-external-services/whitelist/delete";
const SubscriberWL = "351912345678";
const CallingNumber = "351912345674";

describe("WhiteList - deleteSubscriber",{env: {hideCredentials: true }}, () => {
  it("Delete WhiteList Normal Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberWL,
      callingNumber: CallingNumber,
    };
    cy.whiteListCB(subscribers).then((response) => {
      expect(response.body.response[0].resultCode).to.equal(1);
    });
  });

  it("Delete WhiteList Not Normal Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: 351912345678323123123313132,
      callingNumber: CallingNumber,
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.whiteListError(subscribers);
  });

  it("Delete WhiteList Not Normal Calling Number", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberWL,
      callingNumber: 351912345678323123123313132,
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.whiteListError(subscribers);
  });

  it("Delete WhiteList Empty Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      callingNumber: CallingNumber,
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.whiteListError(subscribers);
  });

  it("Delete WhiteList Empty Calling Number", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberWL,
      callingNumber: null,
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.whiteListError(subscribers);
  });

  it("Delete WhiteList Empty and Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "asasd",
      callingNumber: null,
      error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"],
    };
    cy.whiteListError(subscribers);
  });
});
