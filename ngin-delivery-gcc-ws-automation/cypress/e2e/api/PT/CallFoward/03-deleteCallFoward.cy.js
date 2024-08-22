const endPoint = "gcc-external-services/callforward/delete";
const SubscriberCF = 351213418707;
const FowardNumber = 351919293949;

describe("Call Foward - deleteCallFoward",{env: {hideCredentials: true }}, () => {
  it("Delete Call Forward Unconditional", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      action: "U"
    };
    cy.deleteCallFoward(subscribers)
  });

  it("Delete Call Forward Not Recheable", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      action: "NR"
    };
    cy.deleteCallFoward(subscribers)
  });

  it("Delete Call Forward No Answer", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      action: "NA"
    };
    cy.deleteCallFoward(subscribers)
  });

  it("Delete Call Forward Busy", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      action: "B"
    };
    cy.deleteCallFoward(subscribers)
  });

  it("Delete Call Forward Subscriber Missing", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      action: "B",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Delete Call Action Missing", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      action: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Delete Call All Missing", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      action: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Delete Call Forward Subscriber Number Excedded", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: 31231298318723832312371,
      action: "B",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callFowardError(subscribers)
  });

  it("Delete Call Forward Subscriber Bad Number", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "teste",
      action: "B",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callFowardError(subscribers)
  });

  it("Delete Call Foward Empty Field and Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      action: "123",
      error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Delete Call Foward All Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "adsda",
      action: "123",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callFowardError(subscribers)
  });

  it("Delete Call Foward Empty Field and Invalid Field", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      action: "q",
      error: ["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it.skip("Delete Call Foward Not Found", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      action: "U",
      error: ["ERR_NOT_FOUND"]
    };
    cy.callFowardError(subscribers)
  });

    //Delete the FX number to use in the CallFoward tests
  it("Delete the subscriber for CF tests", () => {
    const subscribers = {
      ws: "gcc-external-services/subscriber/delete",
      subscriber: SubscriberCF
    };
    cy.searchSubscriber(subscribers);
  });
});
