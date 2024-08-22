const endPoint = "gcc-external-services/hotlinenumber/get";
const HotlinePhoneNumber1 = 351912345678;

after(() => {
  const phone = {
    ws: "gcc-external-services/hotlinenumber/update",
    phoneNumber: HotlinePhoneNumber1,
    status: 1,
  };
  cy.hotlineNumber(phone);
});

describe("Get Hotline Number",{env: {hideCredentials: true }}, () => {
  it("Get Hotline Normal Number", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: HotlinePhoneNumber1,
    };
    cy.hotlineNumber(phone).then((response) => {
      expect(response.body.response[0].resultCode).to.equal(0);
    });
  });

  it("Get Hotline Not In Format E164", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: 800,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.hotlineNumberError(phone);
  });

  it("Get Hotline Excessive Number", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: 9223372036854775808,
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.hotlineNumberError(phone);
  });

  it("Get Hotline Empty Field", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.hotlineNumberError(phone);
  });

  it("Get Hotline Bad Value", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: "test",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.hotlineNumberError(phone);
  });
});
