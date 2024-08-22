const endPoint = "gcc-external-services/blocking/label/get";
const LabelCB = "10000";

describe("LABEL Barring - getBlocking",{env: {hideCredentials: true }}, () => {
  it("Get Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
    };
    cy.labelBlocking(subscribers);
  });

  it("Get Number Not Found", () => {
    const subscribers = {
      ws: endPoint,
      label: "10021",
      error: ["ERR_NOT_FOUND"]
    };
    cy.labelBlockingError(subscribers);
  });

  it("Get Number Empty", () => {
    const subscribers = {
      ws: endPoint,
      label: null,
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.labelBlockingError(subscribers);
  });

  it("Get Number Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      label: "100101111111111111111111",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.labelBlockingError(subscribers);
  });
})