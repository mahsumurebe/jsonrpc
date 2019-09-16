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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGllbnQvQWJzdHJhY3RzL0Vycm9yUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFhLGFBQWE7SUFLdEIsWUFBWSxLQUE4QjtRQUoxQyxTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsU0FBSSxHQUErQixJQUFJLENBQUM7UUFHcEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7SUFDbkMsQ0FBQztDQUNKO0FBVkQsc0NBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JQQ30gZnJvbSBcIi4uLy4uXCI7XG5cbmV4cG9ydCBjbGFzcyBFcnJvclJlc3BvbnNlIHtcbiAgICBjb2RlPzogbnVtYmVyID0gbnVsbDtcbiAgICBtZXNzYWdlOiBzdHJpbmcgPSBudWxsO1xuICAgIGRhdGE/OiBSUEMuUmVzcG9uc2UuSUVycm9yRGF0YVtdID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGVycm9yOiBSUEMuUmVzcG9uc2UuSUVycm9yRGF0YSkge1xuICAgICAgICB0aGlzLmNvZGUgPSBlcnJvci5jb2RlIHx8IG51bGw7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5kYXRhID0gZXJyb3IuZGF0YSB8fCBudWxsO1xuICAgIH1cbn1cbiJdfQ==