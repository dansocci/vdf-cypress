const endPoint = "gcc-external-services/emergencysuffix/get";
const Cp4Test = 2050;

describe("Geo Number Suffix - getEmergencySuffix",{env: {hideCredentials: true }}, () => {

  it("Get Emergency Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      cp4: Cp4Test,
    };
    cy.geoNumber(subscribers).then((response) => {
      expect(response.body.response[0].cp4).to.equal(Cp4Test);
    });
  });

  it("Get Emergency Number Empty", () => {
    const subscribers = {
      ws: endPoint,
      cp4: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Get CP4 Bellow Value", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 800,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Get CP4 Above Value", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 10000,
      error: ["ERR_INVALID_FIELD"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Get CP4 Inconsistent Field", () => {
    const subscribers = {
      ws: endPoint,
      cp4: "test",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Get CP4 Above Integer", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 89213712893712,
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.geoNumberError(subscribers)
  });

  it("Get CP4 Not Found", () => {
    const subscribers = {
      ws: endPoint,
      cp4: 3693,
      error: ["ERR_NOT_FOUND"]
    };
    cy.geoNumberError(subscribers)
  });
});
