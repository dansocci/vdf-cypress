const endPoint = "gcc-external-services/subscriber/delete";
const subscriberMB = 351912345697;
const subscriberFX = 351213418707;
const testValues = [
  351912345698, 351912345699, 351912345700, 351912345701, 351912345702,
  351912345703, 351912345704, 351912345705, 351912345706, 351912345707,
  351912345708, 351213418708, 351213418709, 351213418710, 351213418711,
  351213418712, 351213418713, 351213418714, 351213418715, 351213418716,
  351213418717, 351213418718, 351213418719, 351213418720, 351213418721,
  351213418723, 351213418724, 351213418725, 351213418726, 351213418727,
  351213418728,
];

describe("Delete Subscriber",{env: {hideCredentials: true }}, () => {
  it("Delete Subscriber MB Add Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: subscriberMB,
    };

    cy.searchSubscriber(subscribers);
  });

  it("Delete Subscriber FX Add Normal", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: subscriberFX,
    };

    cy.searchSubscriber(subscribers);
  });

  it("Delete Subscriber Bad Number", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "35191234564131231231313131",
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.subscriberError(subscribers);
  });

  it("Delete Subscriber Empty Fields", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "",
      error: ["ERR_EMPTY_FIELD"],
    };
    cy.subscriberError(subscribers);
  });

  it("Delete Subscriber Inconsistents Fields", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "aaaa",
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.subscriberError(subscribers);
  });

  it("Delete Subscriber Invalid Field", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "969686100",
      error: ["ERR_INVALID_FIELD"],
    };
    cy.subscriberError(subscribers);
  });

  it("Delete Subscriber Bad Value", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "este",
      error: ["ERR_INCONSISTENT_DATA"],
    };
    cy.subscriberError(subscribers);
  });

  it("Delete Subscriber Doesn't exist", () => {
    const subscribers = {
      ws: endPoint,
      subscriber: "351912345640",
      error: ["ERR_NOT_FOUND"],
    };
    cy.subscriberError(subscribers);
  });
});

//Test to remove inserted subscribers during the addSubscriber test
describe("Delete Subscribers Test",{env: {hideCredentials: true }}, () => {
  testValues.forEach((subscriberValue) => {
    it(`Subscriber ${subscriberValue} deleted`, () => {
      cy.deleteTestSubscriber(subscriberValue);
    });
  });
});
