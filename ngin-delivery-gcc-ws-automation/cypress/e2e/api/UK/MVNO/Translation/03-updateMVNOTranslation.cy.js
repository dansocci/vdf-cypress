const endPoint = "gcc-external-services/mvno/translation/update";

describe("Update MVNO Details", { env: { hideCredentials: true } }, () => {
  it("Update MVNO Translation All Fields", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      dialledNumber: "45678",
      roaming: 1,
      removeDigits: 17,
      translatedNumber: "9876",
      natureOfAddress: 4,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST"
    };
    cy.translationMVNO(terminal);
  });

  it("Update MVNO Translation Other Values", () => {
    const terminal = {
      ws: endPoint,
      id: 76,
      dialledNumber: "45688",
      roaming: 1,
      removeDigits: 2,
      translatedNumber: "9876",
      natureOfAddress: 1,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST"
    };
    cy.translationMVNO(terminal);
  });

  it("Update MVNO Translation Not Found", () => {
    const terminal = {
      ws: endPoint,
      id: 175,
      dialledNumber: "45678",
      roaming: 1,
      removeDigits: 4,
      translatedNumber: "9876",
      natureOfAddress: 3,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_NOT_FOUND"],
    };
    cy.translationMVNOError(terminal);
  });

  it("Update MVNO Translation Invalid Field", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      dialledNumber: "45678",
      roaming: 3,
      removeDigits: 4,
      translatedNumber: "9876",
      natureOfAddress: 3,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_INVALID_FIELD"],
    };
    cy.translationMVNOError(terminal);
  });

  it("Update MVNO Translation Empty Field", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      dialledNumber: "45678",
      roaming: 1,
      removeDigits: null,
      translatedNumber: "9876",
      natureOfAddress: 3,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.translationMVNOError(terminal);
  });

  it("Update MVNO Translation Inconsistent Data", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      dialledNumber: "45678",
      roaming: "tes",
      removeDigits: 4,
      translatedNumber: "9876",
      natureOfAddress: 3,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.translationMVNOError(terminal);
  });

  it("Update MVNO Translation All Errors", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      dialledNumber: "45678",
      roaming: 2,
      removeDigits: null,
      translatedNumber: "9876",
      natureOfAddress: "a",
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_EMPTY_FIELD", "ERR_INCONSISTENT_DATA", "ERR_INVALID_FIELD"],
    };
    cy.translationMVNOError(terminal);
  });
});
