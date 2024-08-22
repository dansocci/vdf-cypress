const endPoint = "gcc-external-services/raf/get/all";

describe("Get All Roaming Anti Fraud", { env: { hideCredentials: true } }, () => {
    it("Get All Roaming Anti Fraud - Success", () => {
      const terminal = {
        ws: endPoint,
        body: {},
        status: 200,
        error: null
      };
      cy.getAll(terminal).then((response) => {
        expect(response.body.businessError).to.equal(terminal.error);
      });
    });

    it("Get All Roaming Anti Fraud - Failure", () => {
      const terminal = {
        ws: endPoint,
        body: {
            "callingMcc": ""
        },
        status: 400,
        error: "ERR_NOT_EMPTY"
      };
      cy.getAll(terminal).then((response) => {
        expect(response.body.businessError[0]).to.equal(terminal.error);
      });;
    });
})  