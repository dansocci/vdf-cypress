const endPoint = "gcc-external-services/hotlinenumber/get/all";
const HotlinePhoneNumber1 = "351912345678";
const HotlinePhoneNumber2 = "351912175031";
const phoneList = [HotlinePhoneNumber1, 800, 9223372036854775808, null, "test"];
const testName = [
  "Get All Hotline Normal Number",
  "Get All Hotline Not In Format E164",
  "Get All Hotline Excessive Number",
  "Get All Hotline Empty Field",
  "Get All Hotline Bad Value",
];

after(() => {
  const phone = {
    ws: "gcc-external-services/hotlinenumber/update",
    phoneNumber: HotlinePhoneNumber1,
    status: 0,
  };
  cy.hotlineNumber(phone);
});

describe("Get All Hotline Number", { env: { hideCredentials: true } }, () => {
  phoneList.forEach((phoneList, i) => {
    it(`${testName[i]}`, () => {
      const phone = {
        ws: endPoint,
        phoneNumber: phoneList,
      };
      cy.hotlineNumber(phone).then((response) => {
        cy.wrap(
          response.body.response.filter(
            (phone) => phone.phone_number === HotlinePhoneNumber1
          )
        ).should("have.length", 1);
        cy.wrap(
          response.body.response.filter(
            (phone) => phone.phone_number === HotlinePhoneNumber2
          )
        ).should("have.length", 1);
      });
    });
  });
});
