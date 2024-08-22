const globals = require("./temp/global.json")
module.exports = {
    "opCode": "UK",
    "callFowardMethods": ["SaveCfb","SaveCfna","SaveCfnr"],
    "cFTerminals": [
        {
            "id": 1,
            "terminal": "44333222111",
            "userName": "userAutTest",
            "phone_number": "44876678876",
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "terminal": "4433322",
            "userName": "userAutTest",
            "phone_number": "44876678876",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "terminal": "",
            "userName": "userAutTest",
            "phone_number": "44876678876",
            "code": "600",
            "message": "Mandatory fields"
        }
    ],
    "cFNATimeoutTerminals": [
        {
            "id": 1,
            "terminal": "44333222111",
            "userName": "userAutTest",
            "phone_number": "44876678876",
            "timeout": "27",
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "terminal": "4433322",
            "userName": "userAutTest",
            "phone_number": "44876678876",
            "timeout": "10",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "terminal": "",
            "userName": "userAutTest",
            "phone_number": "44876678876",
            "timeout": "10",
            "code": "600",
            "message": "Mandatory fields"
        }
    ],
    "screeningMethods": ["SaveScreeningOutgoing", "SaveScreeningIncoming"],
    "screeningItems": [
        {
            "id": 1,
            "company_id": globals.company_id,
            "layer": 4,
            "type": "I",
            "permission": "B",
            "sunday": false,
            "monday": true,
            "tuesday": true,
            "wednesday": false,
            "thursday": true,
            "friday": true,
            "saturday": false,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "company_id": globals.company_id,
            "layer": 4,
            "type": "",
            "permission": "B",
            "sunday": false,
            "monday": true,
            "tuesday": true,
            "wednesday": false,
            "thursday": true,
            "friday": true,
            "saturday": false,
            "code": "600",
            "message": "Mandatory fields"
        },
        {
            "id": 3,
            "company_id": globals.company_id+1,
            "layer": 4,
            "type": "I",
            "permission": "B",
            "sunday": "dasdsa",
            "monday": true,
            "tuesday": true,
            "wednesday": false,
            "thursday": true,
            "friday": true,
            "saturday": false,
            "code": "800",
            "message": "Business errors"
        }
    ],
    "screeningLists": [
        {
            "id": 1,
            "company_id": globals.company_id,
            "screening_list_id": 0,
            "name": "Test List WS",
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "company_id": globals.company_id,
            "screening_list_id": 123,
            "name": "Test List WS",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "company_id": globals.company_id,
            "screening_list_id": 0,
            "name": "",
            "code": "600",
            "message": "Mandatory fields"
        },
        {
            "id": 4,
            "company_id": globals.company_id,
            "screening_list_id": 0,
            "name": "Test List WS",
            "code": "800",
            "message": "Business errors"
        },
        {
            "id": 5,
            "company_id": globals.company_id,
            "screening_list_id": 0,
            "name": "Test List WS 2",
            "code": "0",
            "message": "SUCCESS"
        }
    ],
    "screeningListItems": [
        {
            "id": 1,
            "phone_number": 8888,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "phone_number": 8888,
            "code": "0",
            "message": "SUCCESS"
        },
    ]
}
