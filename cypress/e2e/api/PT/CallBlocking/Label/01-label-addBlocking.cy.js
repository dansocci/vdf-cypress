const endPoint = "gcc-external-services/blocking/label/add";
const LabelCB = "10000";
const PhoneNumber = "35191111";

describe("LABEL Barring - addBlocking",{env: {hideCredentials: true }}, () => {
  it("Add Allow Number Normal", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      type: "N",
      phoneNumber: PhoneNumber,
    };
    cy.labelBlocking(subscribers);
  });

  it("Add Allow Range Normal", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      type: "R",
      phoneNumber: PhoneNumber,
    };
    cy.labelBlocking(subscribers);
  });

  it("Add Allow All Normal", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      type: "A",
      phoneNumber: 0,
    };
    cy.labelBlocking(subscribers);
  });

  it("Add Label Missing", () => {
    const subscribers = {
      ws: endPoint,
      type: "N",
      phoneNumber: PhoneNumber,
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add Type Missing", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      phoneNumber: PhoneNumber,
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add PhoneNumber Missing", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      type: "N",
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add All Empty Fields", () => {
    const subscribers = {
      ws: endPoint,
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add Empty and Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      type: "10000",
      phoneNumber: PhoneNumber,
      error: ["ERR_INCONSISTENT_DATA", "ERR_EMPTY_FIELD"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add Invalid Field and Empty Field", () => {
    const subscribers = {
      ws: endPoint,
      type: "z",
      phoneNumber: PhoneNumber,
      error: ["ERR_INVALID_FIELD", "ERR_EMPTY_FIELD"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add Invalid Field and Empty Field and Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      type: "z",
      phoneNumber: 9999999999999999999999999999999999999,
      error: ["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD", "ERR_EMPTY_FIELD"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add Label Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      label: "aaaaaaaaa",
      type: "N",
      phoneNumber: PhoneNumber,
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add Type Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      type: "aaaaaa",
      phoneNumber: PhoneNumber,
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add PhoneNumber Inconsistent", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      type: "N",
      phoneNumber: "35191114234234242424424242424241",
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.labelBlockingError(subscribers);
  });

  it("Add Allow Number Duplicated", () => {
    const subscribers = {
      ws: endPoint,
      label: LabelCB,
      type: "N",
      phoneNumber: PhoneNumber,
      error: ["ERR_DUPLICATED_RECORD"]
    };
    cy.labelBlockingError(subscribers);
  });
});
