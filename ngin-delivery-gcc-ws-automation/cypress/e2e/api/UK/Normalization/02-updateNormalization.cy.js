const endPoint = "gcc-external-services/normalization/update";

describe("Update Normalization", { env: { hideCredentials: true } }, () => {
  it("Update Normalization All Fields", () => {
    const terminal = {
      ws: endPoint,
      mccMnc: 7654,
      prefixNumber: "351",
      natureOfAddress: 1,
      normalizedPrefix: "351",
      deleteDigits: 4,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST"
    };
    cy.normalizationAPI(terminal);
  });

  it("Update Normalization Other Values", () => {
    const terminal = {
      ws: endPoint,
      mccMnc: 7655,
      prefixNumber: "351",
      natureOfAddress: 2,
      normalizedPrefix: "351",
      deleteDigits: 2,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST"
    };
    cy.normalizationAPI(terminal);
  });

  it("Update Normalization Not Found", () => {
    const terminal = {
      ws: endPoint,
      mccMnc: 7654321,
      prefixNumber: "351",
      natureOfAddress: 1,
      normalizedPrefix: "351",
      deleteDigits: 2,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_NOT_FOUND"]
    };
    cy.normalizationAPIError(terminal);
  });

  it("Update Normalization Invalid Field", () => {
    const terminal = {
      ws: endPoint,
      mccMnc: "7654",
      prefixNumber: 351,
      natureOfAddress: 9,
      normalizedPrefix: "351",
      deleteDigits: 2,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_INVALID_FIELD"],
    };
    cy.normalizationAPIError(terminal);
  });

  it("Update Normalization Empty Field", () => {
    const terminal = {
      ws: endPoint,
      mccMnc: 7654,
      prefixNumber: null,
      natureOfAddress: 1,
      normalizedPrefix: "351",
      deleteDigits: 2,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.normalizationAPIError(terminal);
  });

  it("Update Normalization Inconsistent Data", () => {
    const terminal = {
      ws: endPoint,
      mccMnc: 7654,
      prefixNumber: "351",
      natureOfAddress: "as",
      normalizedPrefix: "351",
      deleteDigits: 2,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.normalizationAPIError(terminal);
  });

  it("Update Normalization All Errors", () => {
    const terminal = {
      ws: endPoint,
      mccMnc: null,
      prefixNumber: "351",
      natureOfAddress: 12,
      normalizedPrefix: "351",
      deleteDigits: "asd",
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_EMPTY_FIELD", "ERR_INCONSISTENT_DATA", "ERR_INVALID_FIELD"],
    };
    cy.normalizationAPIError(terminal);
  });
});
