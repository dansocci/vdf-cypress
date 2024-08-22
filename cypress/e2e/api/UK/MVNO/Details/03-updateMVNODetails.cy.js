const endPoint = "gcc-external-services/mvno/details/update";

describe("Update MVNO Details", { env: { hideCredentials: true } }, () => {
    it("Update MVNO Details All Fields", () => {
        const terminal = {
          ws: endPoint,
          id: 431,
          name: "TEST_WS_UPDATE",
          wsr: 1,
          tariff: "Y",
          insertDate: 1650468401,
          insertUser: "TEST",
          updateDate: 1650468401,
          updateUser: "TEST"
        };
        cy.detailMVNO(terminal);
      });
  
      it("Update MVNO Details Whole Sale Rating", () => {
          const terminal = {
            ws: endPoint,
            id: 432,
            name: "TEST_WS_UPDATE_1",
            wsr: 0,
            tariff: "",
            insertDate: 1650468401,
            insertUser: "TEST",
            updateDate: 1650468401,
            updateUser: "TEST"
          };
          cy.detailMVNO(terminal);
        });
  
        it("Update MVNO Details Tariff Indicator", () => {
          const terminal = {
            ws: endPoint,
            id: 433,
            name: "TEST_WS_UPDATE_2",
            wsr: 1,
            tariff: "TEST",
            insertDate: 1650468401,
            insertUser: "TEST",
            updateDate: 1650468401,
            updateUser: "TEST"
          };
          cy.detailMVNO(terminal);
        });

        it("Update MVNO Details Tariff Indicator null", () => {
            const terminal = {
              ws: endPoint,
              id: 433,
              name: "TEST_WS_UPDATE_2",
              wsr: 1,
              tariff: null,
              insertDate: 1650468401,
              insertUser: "TEST_UPDATE",
              updateDate: 1650468401,
              updateUser: "TEST_UPDATE"
            };
            cy.detailMVNO(terminal);
          });

        it("Update MVNO Details Not Found", () => {
            const terminal = {
                ws: endPoint,
                id: 435,
                name: "TEST_UPDATE_WS",
                wsr: 1,
                tariff: "Y",
                insertDate: 1650468401,
                insertUser: "TEST",
                updateDate: 1650468401,
                updateUser: "TEST",
                error: ["ERR_NOT_FOUND"]
            };
            cy.detailMVNOError(terminal);
          });
    
          it("Update MVNO Details Invalid Field", () => {
            const terminal = {
                ws: endPoint,
                id: 431,
                name: "TEST_UPDATE_WS",
                wsr: 10,
                tariff: "Y",
                insertDate: 1650468401,
                insertUser: "TEST",
                updateDate: 1650468401,
                updateUser: "TEST",
                error: ["ERR_INVALID_FIELD"]
            };
            cy.detailMVNOError(terminal);
          });
    
          it("Update MVNO Details Empty Field", () => {
            const terminal = {
                ws: endPoint,
                id: 431,
                name: "",
                wsr: 1,
                tariff: "Y",
                insertDate: 1650468401,
                insertUser: "TEST",
                updateDate: 1650468401,
                updateUser: "TEST",
                error: ["ERR_EMPTY_FIELD"]
            };
            cy.detailMVNOError(terminal);
          });
    
          it("Update MVNO Details Inconsistent Data", () => {
            const terminal = {
                ws: endPoint,
                id: 431,
                name: "TEST",
                wsr: "a",
                tariff: "Y",
                insertDate: 1650468401,
                insertUser: "TEST",
                updateDate: 1650468401,
                updateUser: "TEST",
                error: ["ERR_INCONSISTENT_DATA"]
            };
            cy.detailMVNOError(terminal);
          });

          it("Update MVNO Details All Errors", () => {
            const terminal = {
                ws: endPoint,
                id: "asd",
                name: "",
                wsr: 10,
                tariff: "Y",
                insertDate: 1650468401,
                insertUser: "TEST",
                updateDate: 1650468401,
                updateUser: "TEST",
                error: ["ERR_EMPTY_FIELD","ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD"]
            };
            cy.detailMVNOError(terminal);
          });
})  