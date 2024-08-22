const endPoint = "gcc-external-services/normalization/get/all";

describe("Get All Normalization", { env: { hideCredentials: true } }, () => {
    it("Get All Normalization - Success", () => {
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

    it("Get All Normalization - Failure", () => {
      const terminal = {
        ws: endPoint,
        body: {
            "mccMnc": ""
        },
        status: 400,
        error: "ERR_NOT_EMPTY"
      };
      cy.getAll(terminal).then((response) => {
        expect(response.body.businessError[0]).to.equal(terminal.error);
      });;
    });
})  