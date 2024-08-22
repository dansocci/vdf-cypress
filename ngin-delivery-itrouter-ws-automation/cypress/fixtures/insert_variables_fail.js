const globals = require("./temp/global.json")
module.exports = {
    "opCode": "UK",
    "groups": [
        {
            "id": 2,
            "userName": "test",
            "company_id": 6561222,
            "name": "groupTest",
            "group_id": 1234,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "userName": "",
            "company_id": 44321321,
            "name": "groupTest",
            "code": "600",
            "message": "Mandatory fields"
        },
        {
            "id": 4,
            "userName": "test",
            "company_id": "dadsa",
            "name": "groupTest",
            "code": "800",
            "message": "Business errors"
        }
    ],
    "usersInsert": [
        {
            "id": 2,
            "userName": "WSTest",
            "name": "TestWS",
            "display_name": "InsertUser Test",
            "group_id": globals.group_id + 1,
            "is_corporate": false,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 4,
            "userName": "WSTest",
            "name": "TestWS",
            "display_name": "InsertUser Test",
            "group_id": globals.group_id,
            "is_corporate": false,
            "code": "800",
            "message": "Business errors"
        }
    ],
    "mondrianTerminals": [
            {
            "id": 2,
            "userName": "test",
            "terminal": 44765876987,
            "short_number": 6987,
            "terminal_type": "MB",
            "user_id": globals.user_id + 1,
            "group_id": null,
            "is_corporate": false,
            "userName": "test",
            "name": "groupTest",
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "userName": "test",
            "terminal": 44765876987,
            "short_number": 6987,
            "terminal_type": "MB",
            "user_id": null,
            "group_id": "",
            "is_corporate": false,
            "userName": "test",
            "name": "groupTest",
            "code": "600",
            "message": "Mandatory fields"
        },
        {
            "id": 4,
            "userName": "test",
            "terminal": 44765876987,
            "short_number": 6987,
            "terminal_type": "MB",
            "user_id": globals.user_id,
            "group_id": "",
            "is_corporate": false,
            "userName": "test",
            "name": "groupTest",
            "code": "800",
            "message": "Business errors"
        }
    ]
}
