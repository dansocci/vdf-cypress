const endPoint = "gcc-external-services/raf/delete";

describe("Delete  Roaming Anti Fraud", { env: { hideCredentials: true } }, () => {
  it("Delete Roaming Anti Fraud All Fields", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 1,
      prepayRule: 1,
      postpayRule: 1,
      mvnoRule: 1,
      description: "raf update"
    };
    cy.rafAPI(terminal);
  });

  it("Delete Roaming Anti Fraud Other Values", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 0,
      prepayRule: 0,
      postpayRule: 0,
      mvnoRule: 0,
      description: "raf update"
    };
    cy.rafAPI(terminal);
  });

  it("Delete Roaming Anti Fraud Not Found", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "4336",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 0,
      prepayRule: 0,
      postpayRule: 1,
      mvnoRule: 0,
      description: "raf",
      error: ["ERR_NOT_FOUND"]
    };
    cy.rafAPIError(terminal);
  });

  it("Delete Roaming Anti Fraud Invalid Field", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 0,
      prepayRule: 0,
      postpayRule: 2,
      mvnoRule: 0,
      description: "raf",
      error: ["ERR_INVALID_FIELD"],
    };
    cy.rafAPIError(terminal);
  });

  it("Delete Roaming Anti Fraud Empty Field", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: null,
      normalizedNumber: "44",
      isFullDialledNumb: 0,
      prepayRule: 0,
      postpayRule: 1,
      mvnoRule: 0,
      description: "raf",
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.rafAPIError(terminal);
  });

  it("Delete Roaming Anti Fraud Inconsistent Data", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 0,
      prepayRule: "test",
      postpayRule: 1,
      mvnoRule: 0,
      description: "raf",
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.rafAPIError(terminal);
  });

  it("Delete Roaming Anti Fraud All Errors", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: null,
      isFullDialledNumb: 2,
      prepayRule: "test",
      postpayRule: 1,
      mvnoRule: 0,
      description: "raf",
      error: ["ERR_EMPTY_FIELD", "ERR_INCONSISTENT_DATA", "ERR_INVALID_FIELD"],
    };
    cy.rafAPIError(terminal);
  });
});
