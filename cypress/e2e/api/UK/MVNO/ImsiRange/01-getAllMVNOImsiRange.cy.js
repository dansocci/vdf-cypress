const endPoint = "gcc-external-services/mvno/imsirange/get/all";

describe("Get All MVNO ImsiRange", { env: { hideCredentials: true } }, () => {
  it("Get All MVNO IMSI Range - Success", () => {
    const terminal = {
      ws: endPoint,
      body: {},
      status: 200,
      error: null,
    };
    cy.getAll(terminal).then((response) => {
      expect(response.body.businessError).to.equal(terminal.error);
    });
  });

  it("Get All MVNO IMSI Range - Failure", () => {
    const terminal = {
      ws: endPoint,
      body: {
        id: "",
      },
      status: 400,
      error: "ERR_NOT_EMPTY",
    };
    cy.getAll(terminal).then((response) => {
      expect(response.body.businessError[0]).to.equal(terminal.error);
    });
  });
});
