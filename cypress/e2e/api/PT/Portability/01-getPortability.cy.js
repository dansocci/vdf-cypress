const endPoint = "gcc-external-services/portability/get";
const PortabilityNumber = 351912345678;

describe("Get Portability Number",{env: {hideCredentials: true }}, () => {
  it("Get Portability Normal Number", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: PortabilityNumber,
    };
    cy.portabilityNumber(phone)
  });

  it("Get Portability Bad Number", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: "test",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.portabilityNumberError(phone)
  });

  it("Get Portability Not In Format E164", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: 35192839379739739747937893,
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.portabilityNumberError(phone);
  });

  it("Get Portability Empty Number", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.portabilityNumberError(phone)
  });

  it("Get Portability Invalid Number", () => {
    const phone = {
      ws: endPoint,
      phoneNumber: 351912345,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.portabilityNumberError(phone)
  });
});
