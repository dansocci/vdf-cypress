const endPoint = "gcc-external-services/subscriber/add"

describe('Add Subscriber',{env: {hideCredentials: true }}, () => {
  it('Add Subscriber MB Add Normal', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345697",
        terminalType: "MB",
        cwaiting: 0,
        cblocking: 0,
        privacyallowed: 1,
        pica: 1,
        pgs: 1,
        pay4me: 1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Partial 1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345698",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Partial 2', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345699",
        terminalType: "MB",
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Add CFNA as Null', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345700",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        cfnatimeout:null
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345701",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        pay4me:1,
        clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Semi CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345702",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        pay4me:1,
        semi_clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Yorn0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345703",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        yorn:0,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Yorn1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345704",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        yorn:1,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Without Yorn', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345705",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Foward Alone 0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345706",
        terminalType: "MB",
        cforward:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Add Normal CFoward0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345707",
        terminalType: "MB",
        cforward:0,
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber MB Add With VLB', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345708",
        terminalType: "MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        vlb:1,
        vlballweekends:1,
        vlbfourweekends:1,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Add Normal', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418707",
        terminalType: "FX",
        fx_status: "INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Add Normal With CFNA', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418708",
        terminalType: "FX",
        fx_status: "INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270,
        cfnatimeout:776
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Add CFNA Null', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418709",
        terminalType: "FX",
        fx_status: "INACTIVE",
        cfnatimeout: null
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Add Only CFNA', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418710",
        terminalType: "FX",
        fx_status: "INACTIVE",
        cfnatimeout: 776
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Add Different Fix Status', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418711",
        terminalType: "FX",
        fx_status: "PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX With no Pani and No CPs', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418712",
        terminalType: "FX",
        fx_status: "PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX With no Pani', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418713",
        terminalType:"FX",
        fx_status:"PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX With no CPs', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418714",
        terminalType:"FX",
        fx_status:"PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37"
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Partial 1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418715",
        terminalType:"FX",
        fx_status:"PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Partial 2 With Pani', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418716",
        terminalType:"FX",
        fx_status:"PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pani1:"Follow The Leader Galvao"
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418717",
        terminalType:"FX",
        fx_status:"ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX CLIR1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418718",
        terminalType:"FX",
        fx_status:"ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        clir:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Semi CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418719",
        terminalType:"FX",
        fx_status:"ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        semi_clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Semi CLIR1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418720",
        terminalType:"FX",
        fx_status:"ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        semi_clir:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Yorn 0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418721",
        terminalType:"FX",
        fx_status:"INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        yorn:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Withou Yorn', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418723",
        terminalType:"FX",
        fx_status:"INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        yorn:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX CFoward Alone0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418724",
        terminalType:"FX",
        fx_status:"INACTIVE",
        cforward:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX CFoward Alone1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418725",
        terminalType:"FX",
        fx_status:"INACTIVE",
        cforward:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Normal CFoward Alone1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418726",
        terminalType:"FX",
        fx_status:"INACTIVE",
        cforward:1,
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX Normal CFoward Alone0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418727",
        terminalType:"FX",
        fx_status:"INACTIVE",
        cforward:0,
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber FX With CWaiting', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418728",
        terminalType:"FX",
        fx_status: "ACTIVE",
        cwaiting:1,
        cblocking:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Add Subscriber Bad Terminal Type', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418728",
        terminalType:"TOY",
        fx_status: "ACTIVE",
        cwaiting:1,
        cblocking:1,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Add Subscriber MB Add With CFNA', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418707",
        terminalType:"MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        cfnatimeout:767,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Add Subscriber MB Add CFNA As Empty', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418707",
        terminalType:"MB",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        cfnatimeout:"",
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Add Subscriber MB Without Type', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418707",
        terminalType:"",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        pay4me:1,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Add Subscriber Add All Empty Fields', () => {
    const subscribers = {
        ws: endPoint,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it('Add Subscriber 1 Empty Field 1 Inconsistent Data', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351965550886000000000000000000",
        error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it  ('Add Subscriber 1 Empty Field 6 Invalid Fields', () => {
    const subscribers = {
        ws: endPoint,
        terminalType: "MB",
        cblocking: 111111,
        privacyallowed: 11111,
        pica: 111111,
        pgs: 11111,
        yorn: 11111,
        pay4me: 11111,
        error: ["ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it  ('Add Subscriber FX with MB Number', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351965550886",
        terminalType: "FX",
        fx_status: "ACTIVE",
        cforward: 0,
        cblocking: 1,
        clir: 0,
        semi_clir: 0,
        pani1: null,
        pani2: null,
        cp4: null,
        cp3: null,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Add Subscriber All Errors', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "",
        terminalType: "JOy",
        fx_status: "IACTIVE",
        cforward: 3,
        cwaiting: 4,
        cblocking: 11,
        privacyallowed: 11,
        pica: 12,
        pgs: 11,
        yorn: 11,
        pay4me: "a",
        clir: 3,
        semi_clir: 2,
        pani1: 12,
        pani2: 312,
        cp4: 22333,
        cp3: 312133,
        cfnatimeout: "dasd",
        onlinecharging: 2,
        amarecordgenlevel: 4,
        error: ["ERR_INCONSISTENT_DATA","ERR_INVALID_FIELD","ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it('Add Subscriber Duplicated', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345697",
        terminalType: "MB",
        cwaiting: 0,
        cblocking: 0,
        privacyallowed: 1,
        pica: 1,
        pgs: 1,
        pay4me: 1,
        error: ["ERR_DUPLICATED_RECORD"]
    }
    cy.subscriberError(subscribers)
  })
})