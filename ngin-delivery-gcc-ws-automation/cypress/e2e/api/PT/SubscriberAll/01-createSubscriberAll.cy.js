const endPoint = "gcc-external-services/subscriber/create/all";

describe("Create All Subscriber", { env: { hideCredentials: true } }, () => {
  it("Create All Subscriber MB Normal", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351912345697"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351912345697",
                    "terminalType": "MB",
                    "fx_status": null,
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "blocking_whitelist",
                "object": {
                    "subscriber": "351912345697",
                    "phone_number": 351912000002
                }
            },
            {
                "service": "portability",
                "object": 1
            }
        ]
    }
    };
    cy.addSubscriberAll(subscribers);
  });

  it("Create All Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351910000008"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351910000008",
                    "terminalType": "MB",
                    "fx_status": null,
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "blocking_whitelist",
                "object": {
                    "subscriber": "351910000008",
                    "phone_number": 351912000002
                }
            },
            {
                "service": "pay4me",
                "object": {
                    "msisdn": "351910000008",
                    "phone_number": null,
                    "action": "S"
                }
            },
            {
                "service": "portability",
                "object": 1
            }
        ]
    }
};
    cy.addSubscriberAll(subscribers);
  });

  it("Create All Subscriber FX", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            }
        ]
    }
};
    cy.addSubscriberAll(subscribers);
  });

  it("Create All Subscriber Just Req Subscriber", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351910000008"
                }
            }
        ]
    }
};
    cy.addSubscriberAll(subscribers);
  });

  it("Create All Subscriber No Response", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "service": "subscriber",
        "object": {
            "subscriber": "351910000008",
            "terminalType": "MB",
            "fx_status": null,
            "cforward": 0,
            "cblocking": 0,
            "privacyallowed": 0,
            "pica": 0,
            "pgs": 0,
            "yorn": 0,
            "pay4me": 0,
            "clir": 0,
            "semi_clir": 0,
            "pani1": null,
            "pani2": null,
            "cp4": null,
            "cp3": null,
            "cfnatimeout": 0
        }
    },
    error: ["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Response Null", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": null
    },
    error: ["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Response Empty List", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": []
    },
    error: ["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Mistakes", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351910000008"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "teste",
                    "terminalType": "MB",
                    "fx_status": null,
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "blocking_whitelist",
                "object": {
                    "subscriber": "351910000008",
                    "phone_number": "test"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "S",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "pay4me",
                "object": {
                    "msisdn": "351910000008",
                    "phone_number": null,
                    "action": "S"
                }
            },
            {
                "service": "portability",
                "object": 1
            }
        ]
    },
    error: ["ERR_INVALID_FIELD","ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Service Null", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351910000008"
                }
            },
            {
                "service": null,
                "object": {
                    "subscriber": "351910000008",
                    "terminalType": "MB",
                    "fx_status": null,
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": null,
                "object": {
                    "subscriber": "351910000008",
                    "phone_number": 351912000002
                }
            }
        ]
    },
    error: ["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Object Null", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351910000008"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351910000008",
                    "terminalType": "MB",
                    "fx_status": null,
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "blocking_whitelist",
                "object": null
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Object Empty", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351910000008"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "teste",
                    "terminalType": "MB",
                    "fx_status": null,
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "blocking_whitelist",
                "object": {}
            }
        ]
    },
    error:["ERR_EMPTY_FIELD","ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber FX Correct", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351211111116"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351211111116",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cwaiting":1,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351211111116",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351211111116",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351211111116",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    }
};
    cy.addSubscriberAll(subscribers);
  });

  it("Create All Subscriber Duplicated Record", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3512191000069",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_DUPLICATED_RECORD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Req Subscriber Empty", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": ""
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Req Subscriber Empty List", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {}
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Subscriber Object Null", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": null
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Subscriber Object Empty", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": ""
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Subscriber Object Empty List", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {}
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Subscriber Empty", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing Terminal Type", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing FX Status", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber All Inconsistent Data", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": "A",
                    "cblocking": "A",
                    "privacyallowed": "A",
                    "pica": "A",
                    "pgs": "A",
                    "yorn": "A",
                    "pay4me": "A",
                    "clir": "A",
                    "semi_clir": "A",
                    "pani1": "A",
                    "pani2": "A",
                    "cp4": "A",
                    "cp3": "A",
                    "cfnatimeout": "A"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber All Invalid Data", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 9,
                    "cblocking": 9,
                    "privacyallowed": 9,
                    "pica": 9,
                    "pgs": 9,
                    "yorn": 9,
                    "pay4me": 9,
                    "clir": 9,
                    "semi_clir": 9,
                    "pani1": 9,
                    "pani2": 9,
                    "cp4": 9,
                    "cp3": 9,
                    "cfnatimeout": 9
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_INVALID_FIELD","ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber All Parameter CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {}
            },
            {
                "service": "call_forward",
                "object": {}
            },
            {
                "service": "call_forward",
                "object": {}
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing Subscribers from CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing Phone Number from CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing Action from CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber All Inconsistent Data CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "A",
                    "phone_number": "A",
                    "action": 9
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "A",
                    "phone_number": "A",
                    "action": 9
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "A",
                    "phone_number": "A",
                    "action": 9
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Wrong Subscriber CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000003"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000003",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "3512140001234",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "3512140001234",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_NOT_FOUND"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing All Parameters Blocking", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing Number Range Blocking", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing Phone Number Blocking", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Missing Action Blocking", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000"
                }
            }
        ]
    },
    error:["ERR_EMPTY_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber All Inconsistent Data Blocking", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": 9,
                    "phone_number": "A",
                    "action": 9
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": 9,
                    "phone_number": "A",
                    "action": 9
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": 9,
                    "phone_number": "A",
                    "action": 9
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": 9,
                    "phone_number": "A",
                    "action": 9
                }
            }
        ]
    },
    error:["ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber All Invalid Field Blocking", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "Z",
                    "phone_number": "1000000000",
                    "action": "Z"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "Z",
                    "phone_number": "1000000000",
                    "action": "Z"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "Z",
                    "phone_number": "1000000000",
                    "action": "Z"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "Z",
                    "phone_number": "1000000000",
                    "action": "Z"
                }
            }
        ]
    },
    error:["ERR_INVALID_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber Wrong Terminal", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "MB",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error:["ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber MB Correct", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351914000002"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351914000002",
                    "terminalType": "MB",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    }
};
    cy.addSubscriberAll(subscribers);
  });

  it("Create All Subscriber MB Duplicated", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351914000002"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351914000002",
                    "terminalType": "MB",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error: ["ERR_DUPLICATED_RECORD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber MB Incorrect Parameters", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351914000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351914000001",
                    "terminalType": "MB",
                    "cforward": 1,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 1,
                    "semi_clir": 1,
                    "pani1": "asa",
                    "pani2": "asa",
                    "cp4": 1234,
                    "cp3": 1234,
                    "cfnatimeout": 1
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error: ["ERR_INVALID_FIELD","ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber FX Incorrect Parameters", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 1,
                    "pica": 1,
                    "pgs": 1,
                    "yorn": 1,
                    "pay4me": 1,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error: ["ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber MB Incompatible Requests", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351914000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351914000001",
                    "terminalType": "MB",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351914000001",
                    "phone_number": "351919100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351914000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error: ["ERR_INVALID_FIELD"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber FX Wrong PhoneNumber CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000004"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000004",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351914000001",
                    "phone_number": "351219100006",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351914000001",
                    "phone_number": "3519192939496",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351914000001",
                    "phone_number": "35191111",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error: ["ERR_NOT_FOUND"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber FX Inconsistent Data CallForward", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "as",
                    "action": "NR"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "as",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "asa",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error: ["ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });

  it("Create All Subscriber All Errors", () => {
    const subscribers = {
      ws: endPoint,
      body: {
        "response": [
            {
                "service": "requested_subscriber",
                "object": {
                    "subscriber": "351214000001"
                }
            },
            {
                "service": "subscriber",
                "object": {
                    "subscriber": "351214000001",
                    "terminalType": "FX",
                    "fx_status": "ACTIVE",
                    "cforward": 0,
                    "cblocking": 0,
                    "privacyallowed": 0,
                    "pica": 0,
                    "pgs": 0,
                    "yorn": 0,
                    "pay4me": 0,
                    "clir": 0,
                    "semi_clir": 0,
                    "pani1": null,
                    "pani2": null,
                    "cp4": null,
                    "cp3": null,
                    "cfnatimeout": 0
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "as",
                    "action": null
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "as",
                    "action": "NA"
                }
            },
            {
                "service": "call_forward",
                "object": {
                    "subscriber": "351214000001",
                    "phone_number": "asa",
                    "action": "U"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "Z",
                    "phone_number": "1000000000",
                    "action": "Z"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "10005",
                    "action": "A"
                }
            },
            {
                "service": "blocking_outgoing",
                "object": {
                    "number_range": "L",
                    "phone_number": "1001",
                    "action": "B"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "R",
                    "phone_number": "351218",
                    "action": "A"
                }
            },
            {
                "service": "blocking_incoming",
                "object": {
                    "number_range": "L",
                    "phone_number": "10000",
                    "action": "B"
                }
            }
        ]
    },
    error: ["ERR_EMPTY_FIELD","ERR_INVALID_FIELD","ERR_INCONSISTENT_DATA"]
};
    cy.subscriberAllError(subscribers);
  });
});