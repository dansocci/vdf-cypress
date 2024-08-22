const endPoint = "gcc-external-services/mvno/imsirange/add";

describe("Add MVNO imsirange", { env: { hideCredentials: true } }, () => {
  it("Add MVNO IMSI Range All Fields", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      imsiRange: "9876543",
      isMvno: 1,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST"
    };
    cy.imsirangeMVNO(terminal);
  });

  it("Add MVNO IMSI Range Not MVNO", () => {
    const terminal = {
      ws: endPoint,
      id: 76,
      imsiRange: "9876542",
      isMvno: 0,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST"
    };
    cy.imsirangeMVNO(terminal);
  });

  it("Add MVNO IMSI Range Duplicated", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      imsiRange: "9876543",
      isMvno: 1,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_ALREADY_EXISTS"]
    };
    cy.imsirangeMVNOError(terminal);
  });

  it("Add MVNO IMSI Range Invalid Field", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      imsiRange: "9797979",
      isMvno: 2,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_INVALID_FIELD"]
    };
    cy.imsirangeMVNOError(terminal);
  });

  it("Add MVNO IMSI Range Empty Field", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      imsiRange: "9797979",
      isMvno: "",
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_EMPTY_FIELD"]
    };
    cy.imsirangeMVNOError(terminal);
  });

  it("Add MVNO IMSI Range Inconsistent Data", () => {
    const terminal = {
      ws: endPoint,
      id: 75,
      imsiRange: "9797979",
      isMvno: "a",
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_INCONSISTENT_DATA"]
    };
    cy.imsirangeMVNOError(terminal);
  });

  it("Add MVNO IMSI Range All Errors", () => {
    const terminal = {
      ws: endPoint,
      id: "asd",
      imsiRange: "",
      isMvno: 2,
      insertDate: 1650468401,
      insertUser: "TEST",
      updateDate: 1650468401,
      updateUser: "TEST",
      error: ["ERR_EMPTY_FIELD", "ERR_INCONSISTENT_DATA", "ERR_INVALID_FIELD"]
    };
    cy.imsirangeMVNOError(terminal);
  });
});
