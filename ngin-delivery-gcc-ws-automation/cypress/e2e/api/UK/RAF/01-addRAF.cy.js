const endPoint = "gcc-external-services/raf/add";

describe("Add  Roaming Anti Fraud", { env: { hideCredentials: true } }, () => {
  it("Add Roaming Anti Fraud All Fields", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 0,
      prepayRule: 0,
      postpayRule: 1,
      mvnoRule: 0,
      description: "raf"
    };
    cy.rafAPI(terminal);
  });

  it("Add Roaming Anti Fraud Other Values", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 1,
      prepayRule: 1,
      postpayRule: 1,
      mvnoRule: 1,
      description: "raf"
    };
    cy.rafAPI(terminal);
  });

  it("Add Roaming Anti Fraud Duplicated", () => {
    const terminal = {
      ws: endPoint,
      callingMcc: "436",
      callingMnc: "ALL",
      normalizedNumber: "44",
      isFullDialledNumb: 0,
      prepayRule: 0,
      postpayRule: 1,
      mvnoRule: 0,
      description: "raf",
      error: ["ERR_ALREADY_EXISTS"]
    };
    cy.rafAPIError(terminal);
  });

  it("Add Roaming Anti Fraud Invalid Field", () => {
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

  it("Add Roaming Anti Fraud Empty Field", () => {
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

  it("Add Roaming Anti Fraud Inconsistent Data", () => {
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

  it("Add Roaming Anti Fraud All Errors", () => {
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
