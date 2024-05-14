"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeServices = void 0;
const typeDB_1 = require("../repository/typeDB");
class typeServices {
    constructor() {
        this.db = new typeDB_1.typeRepository();
    }
    getAllType() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.getAllType();
        });
    }
    addType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.createType(type);
        });
    }
    updateType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.updateType(type);
        });
    }
    deleteType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.db.deleteType(id);
        });
    }
    getTypeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getTypeById(id);
            return result;
        });
    }
    getTypeByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.db.getTypeByName(name);
            return result;
        });
    }
}
exports.typeServices = typeServices;
