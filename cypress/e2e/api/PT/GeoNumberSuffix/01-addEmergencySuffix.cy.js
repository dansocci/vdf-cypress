const endPoint = "gcc-external-services/emergencysuffix/add";
const Cp4Test = 2050;

describe("Geo Number Suffix - addEmergencySuffix",{env: {hideCredentials: true }}, () => {

  it("Add Emergency Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      cp4: Cp4Test,
      suffix: 15
    };
    cy.geoNumber(subscribers).then((response) => {
      expect(response.body.response[0].cp4).to.equal(Cp4Test);
    });
  });

  it("Add Emergency Number Duplicated", () => {
    const subscribers = {
      ws: endPoint,
      cp4: Cp4Test,
      suffix: 15,
      error: ["ERR_DUPLICATED_RECORD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Emergency Number Empty", () => {
    const subscribers = {
      ws: endPoint,
      cp4: null,
      suffix: 15,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Suffix Empty", () => {
    const subscribers = {
      ws: endPoint,
      cp4: Cp4Test,
      suffix: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Suffix All Empty", () => {
    const subscribers = {
      ws: endPoint,
      cp4: null,
      suffix: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Suffix Empty and Invalid Field", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 90,
      suffix: null,
      error: ["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Suffix All Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      cp4: "test",
      suffix: "test",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Suffix All Invalid", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 999999,
      suffix: 999999,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add CP4 Bellow Value", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 800,
      suffix: 15,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add CP4 Above Value", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 10000,
      suffix: 15,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Suffix Above Value", () => {
    const subscribers = {
      ws: endPoint,
      cp4: Cp4Test,
      suffix: 1000,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add CP4 Above Integer", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 91823712893712,
      suffix: 15,
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Add Suffix Above Integer", () => {
    const subscribers = {
      ws: endPoint,
      cp4: Cp4Test,
      suffix: 89213712893712,
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.geoNumberError(subscribers)
  });
});
