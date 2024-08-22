const globals = require("./temp/global.json")
module.exports = {
    "opCode": "UK",
    "activateMethods": ["ActivateAutoCallBack", "ActivateCallForward", "ActivateCallWaiting", "ActivateClirOffnet", "ActivateRestricted", "ActivateTerminal"],
    "deactivateMethods": ["DeactivateAutoCallBack", "DeactivateCallWaiting", "DeactivateRestricted", "DeactivateClir", "DeactivateCnip"],
    // "activateMethods": ["DeactivateRestricted"],
    "activateItems": [
        {
            "id": 1,
            "terminal": globals.terminal,
            "code": "0",
            "message": "SUCCESS"
        },
        {
            "id": 2,
            "terminal": globals.terminal+1,
            "code": "100",
            "message": "Record not found"
        },
        {
            "id": 3,
            "terminal": "",
            "code": "600",
            "message": "Mandatory fields"
        }
    ]
}