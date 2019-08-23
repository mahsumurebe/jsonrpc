"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RPCError extends Error {
    constructor(data = [], message = 'Server error', code = -32000) {
        super(message);
        this.data = data;
        this.message = message;
        this.code = code;
    }
}
exports.RPCError = RPCError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUlBDRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvQ2xpZW50L0Vycm9ycy9SUENFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQWEsUUFBUyxTQUFRLEtBQUs7SUFDL0IsWUFBNkIsT0FBTyxFQUFTLEVBQW1CLFVBQWtCLGNBQWMsRUFBa0IsT0FBd0IsQ0FBQyxLQUFLO1FBQzVJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURVLFNBQUksR0FBSixJQUFJLENBQVk7UUFBbUIsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFBa0IsU0FBSSxHQUFKLElBQUksQ0FBMEI7SUFFaEosQ0FBQztDQUNKO0FBSkQsNEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JQQ30gZnJvbSBcIi4uLy4uL0B0eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgUlBDRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5ICBkYXRhID0gW10gYXMgYW55LCBwdWJsaWMgcmVhZG9ubHkgIG1lc3NhZ2U6IHN0cmluZyA9ICdTZXJ2ZXIgZXJyb3InLCBwdWJsaWMgcmVhZG9ubHkgY29kZTogbnVtYmVyIHwgc3RyaW5nID0gLTMyMDAwKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn0iXX0=