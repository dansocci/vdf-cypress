const endPoint = "gcc-external-services/mvno/details/delete";

describe("Delete MVNO Details", { env: { hideCredentials: true } }, () => {
    it("Delete MVNO Details All Fields", () => {
        const terminal = {
          ws: endPoint,
          id: 431,
          name: "TEST_WS",
          wsr: 1,
          tariff: "Y",
          insertDate: 1650468401,
          insertUser: "TEST",
          updateDate: 1650468401,
          updateUser: "TEST"
        };
        cy.detailMVNO(terminal);
      });
  
      it("Delete MVNO Details Tariff Indicator Empty", () => {
          const terminal = {
            ws: endPoint,
            id: 432,
            name: "TEST_WS_1",
            wsr: 1,
            tariff: "",
            insertDate: 1650468401,
            insertUser: "TEST",
            updateDate: 1650468401,
            updateUser: "TEST"
          };
          cy.detailMVNO(terminal);
        });
  
        it("Delete MVNO Details Tariff Indicator null", () => {
          const terminal = {
            ws: endPoint,
            id: 433,
            name: "TEST_WS_2",
            wsr: 1,
            tariff: null,
            insertDate: 1650468401,
            insertUser: "TEST",
            updateDate: 1650468401,
            updateUser: "TEST"
          };
          cy.detailMVNO(terminal);
        });

        it("Delete MVNO Details Not Found", () => {
            const terminal = {
                ws: endPoint,
                id: 435,
                name: "TEST_WS",
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
    
          it("Delete MVNO Details Invalid Field", () => {
            const terminal = {
                ws: endPoint,
                id: 431,
                name: "TEST_WS",
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
    
          it("Delete MVNO Details Empty Field", () => {
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
    
          it("Delete MVNO Details Inconsistent Data", () => {
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

          it("Delete MVNO Details All Errors", () => {
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