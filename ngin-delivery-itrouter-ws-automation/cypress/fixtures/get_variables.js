const globals = require("./temp/global.json")
module.exports = {
    "opCode": "UK",
    "terminalMethods": ["GetUserId", "GetCfbByKey", "GetCfnaByKey", "GetCfnrByKey", "GetCfuByKey", "GetLoginTerminal", "GetProfileByTerminal", "GetTerminalByKey"],
    "userMethods": ["GetBossCfgByKey","GetUserByKey"],
    "terminals": [
        {
            "id": 1,
            "terminal": globals.terminal,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "terminal": "44333222000",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "terminal": "",
            "code": "600",
            "message": "Mandatory fields"
        }
    ],
    "users": [
        {
            "id": 1,
            "user": globals.user_id,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "user": "1000",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "user": "",
            "code": "600",
            "message": "Mandatory fields"
        },
        {
            "id": 2,
            "user": "test",
            "code": "800",
            "message": "Business errors"
        }
    ],
    "companies": [
        {
            "id": 1,
            "company": globals.company_id,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "company": "1000",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "company": "",
            "code": "600",
            "message": "Mandatory fields"
        },
        {
            "id": 2,
            "company": "test",
            "code": "800",
            "message": "Business errors"
        }
    ],
    "dialedNumbers": [
        {
            "id": 1,
            "aNumber": "5678",
            "dialedNumber": "44321321321",
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "aNumber": "1000",
            "dialedNumber": "44321321321",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "aNumber": "",
            "dialedNumber": "44321321321",
            "code": "600",
            "message": "Mandatory fields"
        }
    ]
};