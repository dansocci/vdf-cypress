const globals = require("./temp/global.json")
module.exports = {
    "opCode": "UK",
    "usersUpdate": [
        {
            "id": 1,
            "userName": "Update Test",
            "user_id": globals.user_id,
            "call_park": false,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "userName": "Update Test",
            "user_id": "44123123123",
            "call_park": false,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "userName": "",
            "user_id": globals.user_id,
            "call_park": false,
            "code": "600",
            "message": "Mandatory fields"
        },
        {
            "id": 4,
            "userName": "Update Test",
            "user_id": "user_id",
            "call_park": false,
            "code": "800",
            "message": "Business errors"
        }
    ],
    "networkStatuses": [
        {
            "id": 1,
            "terminal": globals.terminal,
            "network_provisioned": true,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "terminal": globals.terminal+1,
            "network_provisioned": true,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "terminal": "",
            "network_provisioned": true,
            "code": "600",
            "message": "Mandatory fields"
        }
    ]
}