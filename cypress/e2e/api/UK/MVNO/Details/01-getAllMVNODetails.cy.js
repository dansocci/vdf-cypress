const endPoint = "gcc-external-services/mvno/details/get/all";

describe("Get All MVNO Details", { env: { hideCredentials: true } }, () => {
    it("Get All MVNO Details - Success", () => {
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

    it("Get All MVNO Details - Failure", () => {
      const terminal = {
        ws: endPoint,
        body: {
          "id": ""
        },
        status: 400,
        error: "ERR_NOT_EMPTY"
      };
      cy.getAll(terminal).then((response) => {
        expect(response.body.businessError[0]).to.equal(terminal.error);
      });;
    });
})  