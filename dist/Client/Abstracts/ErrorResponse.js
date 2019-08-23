"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse {
    constructor(error) {
        this.code = null;
        this.message = null;
        this.data = null;
        this.code = error.code || null;
        this.message = error.message || null;
        this.data = error.data || null;
    }
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGllbnQvQWJzdHJhY3RzL0Vycm9yUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFhLGFBQWE7SUFLdEIsWUFBWSxLQUE4QjtRQUoxQyxTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUErQixJQUFJLENBQUM7UUFHcEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7SUFDbkMsQ0FBQztDQUNKO0FBVkQsc0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JQQ30gZnJvbSBcIi4uLy4uL0B0eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JSZXNwb25zZSB7XG4gICAgY29kZT86IG51bWJlciA9IG51bGw7XG4gICAgbWVzc2FnZTogc3RyaW5nID0gbnVsbDtcbiAgICBkYXRhPzogUlBDLlJlc3BvbnNlLklFcnJvckRhdGFbXSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihlcnJvcjogUlBDLlJlc3BvbnNlLklFcnJvckRhdGEpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gZXJyb3IuY29kZSB8fCBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IGVycm9yLmRhdGEgfHwgbnVsbDtcbiAgICB9XG59Il19