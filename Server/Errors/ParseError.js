"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerError_1 = require("./ServerError");
class ParseError extends ServerError_1.ServerError {
    constructor(data = [], message = 'Parse error', code = -32700) {
        super(...arguments);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.ParseError = ParseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZXJ2ZXIvRXJyb3JzL1BhcnNlRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBc0Q7QUFHdEQsTUFBYSxVQUFXLFNBQVEseUJBQVc7SUFDdkMsWUFBNkIsT0FBa0MsRUFBRSxFQUFtQixVQUFrQixhQUFhLEVBQWtCLE9BQXdCLENBQUMsS0FBSztRQUMvSixLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQURLLFNBQUksR0FBSixJQUFJLENBQWdDO1FBQW1CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQWtCLFNBQUksR0FBSixJQUFJLENBQTBCO0lBRW5LLENBQUM7Q0FFSjtBQUxELGdDQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXJ2ZXJFcnJvciwgVEVycm9yRGF0YX0gZnJvbSBcIi4vU2VydmVyRXJyb3JcIjtcblxuXG5leHBvcnQgY2xhc3MgUGFyc2VFcnJvciBleHRlbmRzIFNlcnZlckVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgIGRhdGE6IFRFcnJvckRhdGEgfCBURXJyb3JEYXRhW10gPSBbXSwgcHVibGljIHJlYWRvbmx5ICBtZXNzYWdlOiBzdHJpbmcgPSAnUGFyc2UgZXJyb3InLCBwdWJsaWMgcmVhZG9ubHkgY29kZTogbnVtYmVyIHwgc3RyaW5nID0gLTMyNzAwKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgfVxuXG59Il19