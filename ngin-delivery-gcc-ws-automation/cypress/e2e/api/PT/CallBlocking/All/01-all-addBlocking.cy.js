const endPoint = "gcc-external-services/blocking/all/add";
const PhoneNumberFX = 351213456789;
const PhoneRangeFX = 351211;
const PhoneNumberMB = 351913456789;
const PhoneRangeMB = 351911;

describe("ALL Barring - addBlockingAll",{env: {hideCredentials: true }}, () => {
  it("Add Allow FX Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: "A"
    };
    cy.addBlockingAll(subscribers).then(response => {
      expect(response.body.response[0].number_range).to.equal(subscribers.numberRange)
      expect(response.body.response[0].phone_number).to.equal(subscribers.phoneNumber)
      expect(response.body.response[0].action).to.equal(subscribers.action)
    });
  });

  it("Add Allow FX Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "R",
      phoneNumber: PhoneRangeFX,
      action: "A"
    };
    cy.addBlockingAll(subscribers).then(response => {
      expect(response.body.response[0].number_range).to.equal(subscribers.numberRange)
      expect(response.body.response[0].phone_number).to.equal(subscribers.phoneNumber)
      expect(response.body.response[0].action).to.equal(subscribers.action)
    });;
  });

  it("Add Barring FX Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: "B"
    };
    cy.addBlockingAll(subscribers).then(response => {
      expect(response.body.response[0].number_range).to.equal(subscribers.numberRange)
      expect(response.body.response[0].phone_number).to.equal(subscribers.phoneNumber)
      expect(response.body.response[0].action).to.equal(subscribers.action)
    });;
  });

  it("Add Barring FX Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "R",
      phoneNumber: PhoneRangeFX,
      action: "B"
    };
    cy.addBlockingAll(subscribers).then(response => {
      expect(response.body.response[0].number_range).to.equal(subscribers.numberRange)
      expect(response.body.response[0].phone_number).to.equal(subscribers.phoneNumber)
      expect(response.body.response[0].action).to.equal(subscribers.action)
    });;
  });

  it("Add Barring MB Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberMB,
      action: "B",
      error:["ERR_INCONSISTENT_DATA"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring MB Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "R",
      phoneNumber: PhoneRangeMB,
      action: "B"
    };
    cy.addBlockingAll(subscribers).then(response => {
      expect(response.body.response[0].number_range).to.equal(subscribers.numberRange)
      expect(response.body.response[0].phone_number).to.equal(subscribers.phoneNumber)
      expect(response.body.response[0].action).to.equal(subscribers.action)
    });;
  });

  it("Add Allow MB Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberMB,
      action: "A",
      error:["ERR_INCONSISTENT_DATA"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Allow MB Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "R",
      phoneNumber: PhoneRangeMB,
      action: "A",
      error:["ERR_INCONSISTENT_DATA"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX NumberRange Missing", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: null,
      phoneNumber: PhoneNumberFX,
      action: "B",
      error:["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX PhoneNumber Missing", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: null,
      action: "B",
      error:["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX Action Missing", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: null,
      error:["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX NumberRange Invalid", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "P",
      phoneNumber: PhoneNumberFX,
      action: "B",
      error:["ERR_INVALID_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX PhoneNumber Invalid", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: "99999999",
      action: "B",
      error:["ERR_INVALID_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX Action Invalid", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: "Q",
      error:["ERR_INVALID_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX Invalid and Empty", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: null,
      action: "Q",
      error:["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX Invalid and Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: "test",
      action: "Q",
      error:["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Add Barring FX Empty and Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: null,
      action: 1234,
      error:["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

});
