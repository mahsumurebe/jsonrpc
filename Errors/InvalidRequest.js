"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerError_1 = require("./ServerError");
class InvalidRequest extends ServerError_1.ServerError {
    constructor(data = [], message = 'Invalid request', code = -32600) {
        super(...arguments);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.InvalidRequest = InvalidRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52YWxpZFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvRXJyb3JzL0ludmFsaWRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQXNEO0FBR3RELE1BQWEsY0FBZSxTQUFRLHlCQUFXO0lBQzNDLFlBQTZCLE9BQWtDLEVBQUUsRUFBbUIsVUFBa0IsaUJBQWlCLEVBQWtCLE9BQXdCLENBQUMsS0FBSztRQUNuSyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztRQURLLFNBQUksR0FBSixJQUFJLENBQWdDO1FBQW1CLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBQWtCLFNBQUksR0FBSixJQUFJLENBQTBCO0lBRXZLLENBQUM7Q0FDSjtBQUpELHdDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZXJ2ZXJFcnJvciwgVEVycm9yRGF0YX0gZnJvbSBcIi4vU2VydmVyRXJyb3JcIjtcblxuXG5leHBvcnQgY2xhc3MgSW52YWxpZFJlcXVlc3QgZXh0ZW5kcyBTZXJ2ZXJFcnJvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5ICBkYXRhOiBURXJyb3JEYXRhIHwgVEVycm9yRGF0YVtdID0gW10sIHB1YmxpYyByZWFkb25seSAgbWVzc2FnZTogc3RyaW5nID0gJ0ludmFsaWQgcmVxdWVzdCcsIHB1YmxpYyByZWFkb25seSBjb2RlOiBudW1iZXIgfCBzdHJpbmcgPSAtMzI2MDApIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICB9XG59Il19