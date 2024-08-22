const endPoint = "gcc-external-services/blocking/outgoing/add";
const SubscriberCB = "351912345697";
const PhoneNumber = "35191111";

describe("OUTGOING Barring - addBlocking",{env: {hideCredentials: true }}, () => {
  it("Add Allow Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange: "N",
      phoneNumber: PhoneNumber,
      action: "A"
    };
    cy.addBlocking(subscribers);
  });

  it("Add Allow Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange: "R",
      phoneNumber: PhoneNumber,
      action: "A"
    };
    cy.addBlocking(subscribers);
  });

  it("Add Allow Label Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange: "L",
      phoneNumber: PhoneNumber,
      action: "A"
    };
    cy.addBlocking(subscribers);
  });

  it("Add Barring Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange: "N",
      phoneNumber: PhoneNumber,
      action: "B"
    };
    cy.addBlocking(subscribers);
  });

  it("Add Barring Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange: "R",
      phoneNumber: PhoneNumber,
      action: "B"
    };
    cy.addBlocking(subscribers);
  });

  it("Add Barring Label Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange: "L",
      phoneNumber: PhoneNumber,
      action: "B"
    };
    cy.addBlocking(subscribers);
  });

  it("Add Subscriber Missing", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "L",
      phoneNumber: PhoneNumber,
      action: "B",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add All Empty Fields", () => {
    const subscribers = {
      ws: endPoint,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add Empty Fields Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "3519192939495999999999",
      action: 1,
      error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });
  
  it("Add Empty Fields Invalid Field", () => {
    const subscribers = {
      ws: endPoint,
      action: "z",
      error: ["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add Empty Fields Invalid Field Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      numberRange:"z",
      phoneNumber: "35191111111111111111111",
      action: "z",
      error: ["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add All Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: 351919293949511111111111,
      numberRange:1111111111,
      phoneNumber: 3519111111111111112222222221,
      action: 11111111111111111,
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add Subscriber Null", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      numberRange:"L",
      phoneNumber: PhoneNumber,
      action: "A",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add Action Null", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange:"L",
      phoneNumber: PhoneNumber,
      action: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add Phone Number Null", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange:"L",
      phoneNumber: null,
      action: "A",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add Number Range Null", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCB,
      numberRange:null,
      phoneNumber: PhoneNumber,
      action: "A",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingError(subscribers);
  });

  it("Add Bad Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "test",
      numberRange:"L",
      phoneNumber: PhoneNumber,
      action: "A",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callBlockingError(subscribers);
  });
});
