const endPoint = "gcc-external-services/callforward/get";
const SubscriberCF = "351213418707";
const FowardNumber = "351919293949";

describe("Call Foward -getCallFoward",{env: {hideCredentials: true }}, () => {
  
    it("Get Call Forward", () => {
      const subscribers = {
        ws: endPoint,
        subscriber: SubscriberCF
      };
      cy.searchSubscriber(subscribers).then((response) => {
        expect(response.body.response[0,1,2,3].phone_number).to.equal(FowardNumber);
        expect(response.body.response[0].action).to.be.equal("B")
        expect(response.body.response[1].action).to.be.equal("NR")
        expect(response.body.response[2].action).to.be.equal("NA")
        expect(response.body.response[3].action).to.be.equal("U")
      });
    });

    it("Get Call Forward Not Found", () => {
        const subscribers = {
          ws: endPoint,
          subscriber: "351213418722",
          error: ["ERR_NOT_FOUND"]
        };
        cy.callFowardError(subscribers)
      });

      it("Get Call Forward Empty Field", () => {
        const subscribers = {
          ws: endPoint,
          subscriber: null,
          error: ["ERR_EMPTY_FIELD"]
        };
        cy.callFowardError(subscribers)
      });

      it("Get Call Forward Inconsistent Data", () => {
        const subscribers = {
          ws: endPoint,
          subscriber: 3519192939495999999999999999999999999,
          error: ["ERR_INCONSISTENT_DATA"]
        };
        cy.callFowardError(subscribers)
      });

      it("Get Call Forward Bad Type", () => {
        const subscribers = {
          ws: endPoint,
          subscriber: "test",
          error: ["ERR_INCONSISTENT_DATA"]
        };
        cy.callFowardError(subscribers)
      });
})