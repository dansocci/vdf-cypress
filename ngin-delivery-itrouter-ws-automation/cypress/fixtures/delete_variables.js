const globals = require("./temp/global.json")
module.exports = {
    "opCode": "UK",
    "cfMethods": ["DeleteCfb", "DeleteCfna", "DeleteCfnr"],
    "cfFails": [
        {
            "id": 1,
            "userName": "Delete CF Test",
            "terminal": "123123123",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 2,
            "userName": "Delete CF Test",
            "terminal": "",
            "code": "600",
            "message": "Mandatory fields"
        }
    ],
    "deleteTerminals": [
        {
            "id": 1,
            "terminal": globals.terminal,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "terminal": globals.companyNumber,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 3,
            "terminal": globals.terminal+1,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 4,
            "terminal": "",
            "code": "600",
            "message": "Mandatory fields"
        }
    ],
    "deleteUsers": [
        {
            "id": 1,
            "user_id": globals.user_id,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "user_id": globals.user_id+1,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "user_id": "",
            "code": "600",
            "message": "Mandatory fields"
        }
    ],
    "deleteGroups": [
        {
            "id": 1,
            "group_id": globals.group_id,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "group_id": globals.group_id+1,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "group_id": "",
            "code": "600",
            "message": "Mandatory fields"
        }
    ],
    "deleteCompanies": [
        {
            "id": 1,
            "company_id": globals.company_id,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "company_id": globals.company_id+1,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "company_id": "",
            "code": "600",
            "message": "Mandatory fields"
        }
    ]
}