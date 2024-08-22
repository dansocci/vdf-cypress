const endPoint = "gcc-external-services/blocking/all/get";
const PhoneNumberFX = "351213456789";
const PhoneRangeFX = "351211";
const PhoneNumberMB = "351913456789";
const PhoneRangeMB = "351911";

describe("ALL Barring - getBlockingAll",{env: {hideCredentials: true }}, () => {
  it("Get Allow FX Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: "A"
    };
    cy.addBlockingAll(subscribers).then(response => {
        expect(response.body.response[0].resultCode).to.equal(1)
      });
  });

  it("Get Allow FX Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "R",
      phoneNumber: PhoneRangeFX,
      action: "A"
    };
    cy.addBlockingAll(subscribers).then(response => {
        expect(response.body.response[0].resultCode).to.equal(1)
      });
  });

  it("Get Barring FX Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: "B"
    };
    cy.addBlockingAll(subscribers).then(response => {
        expect(response.body.response[0].resultCode).to.equal(1)
      });
  });

  it("Get Barring FX Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "R",
      phoneNumber: PhoneRangeFX,
      action: "B"
    };
    cy.addBlockingAll(subscribers).then(response => {
        expect(response.body.response[0].resultCode).to.equal(1)
      });
  });

  it("Get Barring MB Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "R",
      phoneNumber: PhoneRangeMB,
      action: "B"
    };
    cy.addBlockingAll(subscribers).then(response => {
        expect(response.body.response[0].resultCode).to.equal(1)
      });
  });

  it("Get Barring FX NumberRange Missing", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: null,
      phoneNumber: PhoneNumberFX,
      action: "B",
      error:["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Get Barring FX PhoneNumber Missing", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: null,
      action: "B",
      error:["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Get Barring FX Action Missing", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: null,
      error:["ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Get Barring FX NumberRange Invalid", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "P",
      phoneNumber: PhoneNumberFX,
      action: "B",
      error:["ERR_INVALID_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Get Barring FX Action Invalid", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: PhoneNumberFX,
      action: "Q",
      error:["ERR_INVALID_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Get Barring FX Invalid and Empty", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: null,
      action: "Q",
      error:["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Get Barring FX Invalid and Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      numberRange: "N",
      phoneNumber: "test",
      action: "Q",
      error:["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD"]
    };
    cy.callBlockingAllError(subscribers);
  });

  it("Get Barring FX Empty and Inconsistent", () => {
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
