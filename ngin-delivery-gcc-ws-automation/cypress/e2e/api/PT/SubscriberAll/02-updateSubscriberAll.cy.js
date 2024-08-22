const endPoint = "gcc-external-services/subscriber/update/all";

describe("Update All Subscriber", { env: { hideCredentials: true } }, () => {
    it("Update All Subscriber MB Normal", () => {
        const subscribers = {
          ws: endPoint,
          body: {
            "response": [
                {
                    "service": "requested_subscriber",
                    "object": {
                        "subscriber": "351910000001"
                    }
                },
                {
                    "service": "subscriber",
                    "object": {
                        "subscriber": "351910000001",
                        "terminalType": "MB",
                        "fx_status": null,
                        "cforward": 0,
                        "cwaiting": 0,
                        "cblocking": 0,
                        "privacyallowed": 0,
                        "pica": 0,
                        "pgs": 0,
                        "yorn": 0,
                        "pay4me": 1,
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

    it("Update All Subscriber Bad Fields", () => {
        const subscribers = {
          ws: endPoint,
          body: {
            "response": [
                {
                    "service": "requested_subscriber",
                    "object": {
                        "subscriber": "351910000001"
                    }
                },
                {
                    "service": "subscriber",
                    "object": {
                        "subscriber": "351910000001",
                        "terminalType": "MB",
                        "fx_status": null,
                        "cforward": 0,
                        "cwaiting": 1,
                        "cblocking": 0,
                        "privacyallowed": 0,
                        "pica": 1,
                        "pgs": 0,
                        "yorn": 0,
                        "pay4me": 1,
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
        },
        error: ["ERR_INCONSISTENT_DATA"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Service Null", () => {
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
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });
    
    it("Update All Subscriber Add Call Foward Success", () => {
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
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });
    
    it("Update All Subscriber Wrong Call Foward Number", () => {
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
                        "subscriber": "351211111111",
                        "phone_number": "351219100008",
                        "action": "U"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "action": "NR"
                    }
                }
            ]
        },
        error: ["ERR_NOT_FOUND"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Call Foward Remove and Add", () => {
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
                        "phone_number": null,
                        "action": "NR"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": "351219100008",
                        "action": "NR"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Call Foward Multiple Same Success", () => {
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
                        "phone_number": "351219100008",
                        "action": "NR"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": "351219100006",
                        "action": "NR"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Call Foward Multiple Different Success", () => {
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
                        "phone_number": "351219100008",
                        "action": "B"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": "3512191000010",
                        "action": "NR"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });
    
    it("Update All Subscriber Call Foward Multiple Options", () => {
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
                        "phone_number": "351219100008",
                        "action": "B"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": "3512191000010",
                        "action": "NR"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": null,
                        "action": "NR"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": "3512191000010",
                        "action": "NR"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": null,
                        "action": "U"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Call Foward Remove Only Actions", () => {
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
                        "action": "NR"
                    }
                }
            ]
        },
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Blocking Incoming Add Success", () => {
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
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "A"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Outgoing Add Success", () => {
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
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "A"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Incoming Remove Success", () => {
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
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "R"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Outgoing Remove Success", () => {
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
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "R"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Outgoing Add Remove", () => {
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
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "R"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Outgoing Remove Add", () => {
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
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "R"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "A"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Multiple Add Success", () => {
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
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351219",
                        "action": "A",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351210",
                        "action": "B",
                        "operationType": "A"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Multiple Remove Success", () => {
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
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351219",
                        "action": "A",
                        "operationType": "R"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351210",
                        "action": "B",
                        "operationType": "R"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber Blocking Multiple Options", () => {
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
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351219",
                        "action": "A",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351211",
                        "action": "B",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351210",
                        "action": "A",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351210",
                        "action": "B",
                        "operationType": "A"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber CF Blocking Updates", () => {
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
                        "phone_number": "351219100008",
                        "action": "NA"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": "3512191000011",
                        "action": "U"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351229",
                        "action": "A",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351221",
                        "action": "B",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351220",
                        "action": "A",
                        "operationType": "A"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "35121",
                        "action": "B",
                        "operationType": "A"
                    }
                }
            ]
        }
        };
        cy.addSubscriberAll(subscribers);
    });

    it("Update All Subscriber CF Blocking Error CF", () => {
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
                        "phone_number": "sad",
                        "action": "NA"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351229",
                        "action": "A",
                        "operationType": "A"
                    }
                }
            ]
        },
        error: ["ERR_INCONSISTENT_DATA"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber CF Blocking Error Blocking", () => {
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
                        "phone_number": "351219100008",
                        "action": "NA"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "R",
                        "phone_number": "tet",
                        "action": "A",
                        "operationType": "A"
                    }
                }
            ]
        },
        error: ["ERR_INCONSISTENT_DATA"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Just Req Subscriber", () => {
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

    it("Update All Subscriber No Response", () => {
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

    it("Update All Subscriber Response Null", () => {
        const subscribers = {
          ws: endPoint,
          body: {
            "response": null
        },
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Response Empty List", () => {
        const subscribers = {
          ws: endPoint,
          body: {
            "response": []
        },
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Mistakes", () => {
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
                }
            ]
        },
        error: ["ERR_INCONSISTENT_DATA"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber No Req Subscriber", () => {
        const subscribers = {
          ws: endPoint,
          body: {
            "response": [
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
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Req Subscriber Object Null", () => {
        const subscribers = {
          ws: endPoint,
          body: {
            "response": [
                {
                    "service": "requested_subscriber",
                    "object": null
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
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Req Subscriber Object List Empty", () => {
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
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Missing Subscriber", () => {
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
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Subscriber Object Null", () => {
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
                    "object": null
                }
            ]
        },
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Subscriber Object List Empty", () => {
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
                    "object": ""
                }
            ]
        },
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Call Blocking Missing Operation Type", () => {
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
        error: ["ERR_EMPTY_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber Call Blocking Bad Operation Type", () => {
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
                        "action": "A",
                        "operationType": "Test"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "L",
                        "phone_number": "1001",
                        "action": "B",
                        "operationType": "Test"
                    }
                },
                {
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "Test"
                    }
                },
                {
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "L",
                        "phone_number": "10000",
                        "action": "B",
                        "operationType": "Test"
                    }
                }
            ]
        },
        error: ["ERR_INCONSISTENT_DATA"]
        };
        cy.subscriberAllError(subscribers);
    });

    it("Update All Subscriber All Errors", () => {
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
                        "clir": 9,
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
                        "subscriber": null,
                        "phone_number": "3512191000069",
                        "action": "NR"
                    }
                },
                {
                    "service": "call_forward",
                    "object": {
                        "subscriber": "351214000001",
                        "phone_number": "test",
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
                        "action": "A",
                        "operationType": "Test"
                    }
                },
                {
                    "service": "blocking_outgoing",
                    "object": {
                        "number_range": "L",
                        "phone_number": "1001",
                        "action": "B",
                        "operationType": "Test"
                    }
                },
                {
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "R",
                        "phone_number": "351218",
                        "action": "A",
                        "operationType": "Test"
                    }
                },
                {
                    "service": "blocking_incoming",
                    "object": {
                        "number_range": "L",
                        "phone_number": "10000",
                        "action": "B",
                        "operationType": "Test"
                    }
                }
            ]
        },
        error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD","ERR_INVALID_FIELD"]
        };
        cy.subscriberAllError(subscribers);
    });
});