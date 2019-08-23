"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerError extends Error {
    constructor(data = [], message = 'Server error', code = -32000) {
        super(message);
        this.data = data;
        this.message = message;
        this.code = code;
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message,
            data: this.data
        };
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvU2VydmVyL0Vycm9ycy9TZXJ2ZXJFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLE1BQWEsV0FBWSxTQUFRLEtBQUs7SUFFbEMsWUFBNkIsT0FBa0MsRUFBRSxFQUFtQixVQUFrQixjQUFjLEVBQWtCLE9BQXdCLENBQUMsS0FBSztRQUNoSyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEVSxTQUFJLEdBQUosSUFBSSxDQUFnQztRQUFtQixZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUFrQixTQUFJLEdBQUosSUFBSSxDQUEwQjtJQUVwSyxDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU87WUFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2xCLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFiRCxrQ0FhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UlBDfSBmcm9tIFwiLi4vLi4vQHR5cGVzL3R5cGVzXCI7XG5pbXBvcnQgRXJyb3JEYXRhID0gUlBDLlJlc3BvbnNlLklFcnJvckRhdGE7XG5cbmV4cG9ydCB0eXBlIFRFcnJvckRhdGEgPSBFcnJvckRhdGEgfCBFcnJvciB8IGFueTtcblxuZXhwb3J0IHR5cGUgU2VydmVyRXJyb3JKc29uID0ge1xuICAgIGNvZGU6IG51bWJlciB8IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgZGF0YTogVEVycm9yRGF0YSB8IFRFcnJvckRhdGFbXVxufVxuXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgIGRhdGE6IFRFcnJvckRhdGEgfCBURXJyb3JEYXRhW10gPSBbXSwgcHVibGljIHJlYWRvbmx5ICBtZXNzYWdlOiBzdHJpbmcgPSAnU2VydmVyIGVycm9yJywgcHVibGljIHJlYWRvbmx5IGNvZGU6IG51bWJlciB8IHN0cmluZyA9IC0zMjAwMCkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0b0pTT04oKTogU2VydmVyRXJyb3JKc29uIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YVxuICAgICAgICB9O1xuICAgIH1cbn0iXX0=