const endPoint = "gcc-external-services/subscriber/update"

describe('Update Subscriber',{env: {hideCredentials: true }}, () => {
  it('Update Subscriber MB Add Normal', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345697",
        cwaiting: 0,
        cblocking: 1,
        privacyallowed: 0,
        pica: 1,
        pgs: 1,
        pay4me: 1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Partial 1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345698",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Partial 2', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345699",
        pay4me:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Add CFNA as Null', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345700",
        cblocking:1,
        privacyallowed:1,
        pica:0,
        cfnatimeout:null
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345701",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:0,
        pay4me:1,
        clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Semi CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345702",
        cblocking:1,
        privacyallowed:1,
        pica:0,
        pgs:1,
        pay4me:1,
        semi_clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Yorn0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345703",
        cblocking:0,
        privacyallowed:1,
        pica:1,
        pgs:1,
        yorn:0,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Yorn1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345704",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        pgs:1,
        yorn:1,
        pay4me:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Without Yorn', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345705",
        cblocking:1,
        privacyallowed:1,
        pica:0,
        pgs:1,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Foward Alone 0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345706",
        cforward:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Add Normal CFoward0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345707",
        cforward:0,
        cblocking:0,
        privacyallowed:1,
        pica:1,
        pgs:1,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber MB Update With VLB', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351912345708",
        cblocking:1,
        privacyallowed:1,
        pica:0,
        pgs:1,
        vlb:1,
        vlballweekends:1,
        vlbfourweekends:1,
        pay4me:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Add Normal', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418707",
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

  it('Update Subscriber FX Add Normal With CFNA', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418708",
        fx_status: "INACTIVE",
        cblocking:1,
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

  it('Update Subscriber FX Add CFNA Null', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418709",
        fx_status: "PRE_ACTIVE",
        cfnatimeout: null
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Add Only CFNA', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418710",
        fx_status: "PRE_ACTIVE",
        cfnatimeout: 776
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Add Different Fix Status', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418711",
        fx_status: "ACTIVE",
        cblocking:0,
        pica:0,
        pgs:0,
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX With no Pani', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418713",
        fx_status:"PRE_ACTIVE",
        cblocking:1,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX With no CPs', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418714",
        fx_status:"PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:1,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37"
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Partial 1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418715",
        fx_status:"PRE_ACTIVE",
        cblocking:1,
        privacyallowed:0,
        pica:0,
        pgs:0,
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Partial 2 With Pani', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418716",
        fx_status:"ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pani1:"Follow The Leader Galvao"
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418717",
        fx_status:"ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:1,
        pgs:0,
        pay4me:0,
        clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX CLIR1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418718",
        fx_status:"INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        clir:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Semi CLIR0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418719",
        fx_status:"INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        semi_clir:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Semi CLIR1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418720",
        fx_status:"PRE_ACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:0,
        pgs:0,
        pay4me:0,
        semi_clir:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Yorn 0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418721",
        fx_status:"INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:1,
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

  it('Update Subscriber FX Withou Yorn', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418723",
        fx_status:"INACTIVE",
        cblocking:0,
        privacyallowed:0,
        pica:1,
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

  it('Update Subscriber FX CFoward Alone0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418724",
        fx_status:"ACTIVE",
        cforward:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX CFoward Alone1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418725",
        fx_status:"ACTIVE",
        cforward:1
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Normal CFoward Alone1', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418726",
        fx_status:"INACTIVE",
        cforward:1,
        cblocking:0,
        privacyallowed:0,
        pica:1,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX Normal CFoward Alone0', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418727",
        fx_status:"INACTIVE",
        cforward:0,
        cblocking:0,
        privacyallowed:0,
        pica:1,
        pgs:0,
        pay4me:0,
        pani1:"01DM01_01_02#01#09#1#35",
        pani2:"01DM01_01_02#01#09#1#37",
        cp4:2050,
        cp3:270
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber FX With CWaiting', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418728",
        fx_status: "ACTIVE",
        cwaiting:1,
        cblocking:0
    }
    cy.addSubscriber(subscribers)
  })

  it('Update Subscriber Bad FX STATUS', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418728",
        fx_status: "TOY",
        cwaiting:1,
        cblocking:1,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Update Subscriber MB Add With CFNA', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418707",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        cfnatimeout:767,
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Update Subscriber MB Add CFNA As Empty', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418707",
        cblocking:1,
        privacyallowed:1,
        pica:1,
        cfnatimeout:"",
        error: ["ERR_INCONSISTENT_DATA"]
    }
    cy.subscriberError(subscribers)
  })

  it('Update Subscriber Add All Empty Fields', () => {
    const subscribers = {
        ws: endPoint,
        error: ["ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it('Update Subscriber 1 Empty Field 1 Inconsistent Data', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351965550886000000000000000000",
        error: ["ERR_INCONSISTENT_DATA","ERR_EMPTY_FIELD"]
    }
    cy.subscriberError(subscribers)
  })

  it  ('Update Subscriber 1 Empty Field 6 Invalid Fields', () => {
    const subscribers = {
        ws: endPoint,
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

  it  ('Update Subscriber FX with MB Number', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351965550886",
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

  it('Update Subscriber FX Partial With CFNA Value Bad Type', () => {
    const subscribers = {
        ws: endPoint,
        subscriber:"351213418712",
        cfnatimeout: "Vodafone",
        error: ["ERR_INCONSISTENT_DATA"]
      }
    cy.subscriberError(subscribers)
  })

  it('Update Subscriber All Errors', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "",
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

  it('Update Subscriber Duplicated', () => {
    const subscribers = {
        ws: endPoint,
        subscriber: "351912345691",
        cwaiting: 0,
        cblocking: 0,
        privacyallowed: 1,
        pica: 1,
        pgs: 1,
        pay4me: 1,
        error: ["ERR_NOT_FOUND"]
    }
    cy.subscriberError(subscribers)
  })
})