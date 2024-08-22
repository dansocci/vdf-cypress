const endPoint = "gcc-external-services/callforward/add";
const SubscriberCF = 351213418707;
const FowardNumber = 351919293949;

describe("Call Foward - addCallFoward",{env: {hideCredentials: true }}, () => {
  //Add the FX number to use in the CallFoward tests
  it("Add the subscriber for CF tests", () => {
    const subscribers = {
      ws: "gcc-external-services/subscriber/add",
      subscriber: SubscriberCF,
      terminalType: "FX",
      fx_status: "INACTIVE",
      cblocking: 0,
      privacyallowed: 0,
      pica: 0,
      pgs: 0,
      pay4me: 0,
      pani1: "01DM01_01_02#01#09#1#35",
      pani2: "01DM01_01_02#01#09#1#37",
      cp4: 2050,
      cp3: 270,
    };
    cy.addSubscriber(subscribers);
  });

  it("Add Call Forward Unconditional", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      fowardNumber: FowardNumber,
      action: "U"
    };
    cy.callFoward(subscribers).then((response) => {
      expect(response.body.response[0].subscriber).to.equal(SubscriberCF);
      expect(response.body.response[0].phone_number).to.equal(FowardNumber);
    });
  });

  it("Add Call Forward Not Recheable", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      fowardNumber: FowardNumber,
      action: "NR"
    };
    cy.callFoward(subscribers).then((response) => {
      expect(response.body.response[0].subscriber).to.equal(SubscriberCF);
      expect(response.body.response[0].phone_number).to.equal(FowardNumber);
    });
  });

  it("Add Call Forward No Answer", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      fowardNumber: FowardNumber,
      action: "NA"
    };
    cy.callFoward(subscribers).then((response) => {
      expect(response.body.response[0].subscriber).to.equal(SubscriberCF);
      expect(response.body.response[0].phone_number).to.equal(FowardNumber);
    });
  });

  it("Add Call Forward Busy", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      fowardNumber: FowardNumber,
      action: "B"
    };
    cy.callFoward(subscribers).then((response) => {
      expect(response.body.response[0].subscriber).to.equal(SubscriberCF);
      expect(response.body.response[0].phone_number).to.equal(FowardNumber);
    });
  });

  it("Add Call Forward Subscriber Missing", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      fowardNumber: FowardNumber,
      action: "B",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Forward Phone Missing", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      fowardNumber: null,
      action: "B",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Action Missing", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      fowardNumber: FowardNumber,
      action: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call All Missing", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      fowardNumber: null,
      action: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Forward Subscriber Number Excedded", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: 31231298318723832312371,
      fowardNumber: FowardNumber,
      action: "B",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Forward Subscriber Bad Number", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "teste",
      fowardNumber: FowardNumber,
      action: "B",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Foward Empty Field and Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      fowardNumber: null,
      action: "123",
      error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Foward All Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "adsda",
      fowardNumber: "asdasda",
      action: "123",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Foward Empty Field and Invalid Field", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      fowardNumber: null,
      action: "q",
      error: ["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it("Add Call Foward Empty Field, Invalid Field and Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: null,
      fowardNumber: "dagsdjka",
      action: "q",
      error: ["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.callFowardError(subscribers)
  });

  it.skip("Add Call Foward Duplicated", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: SubscriberCF,
      fowardNumber: FowardNumber,
      action: "U",
      error: ["ERR_DUPLICATED_RECORD"]
    };
    cy.callFowardError(subscribers)
  });
});
