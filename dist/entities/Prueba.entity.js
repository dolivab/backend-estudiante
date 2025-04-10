"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prueba = void 0;
const typeorm_1 = require("typeorm");
let Prueba = class Prueba {
};
exports.Prueba = Prueba;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_prueba' }),
    __metadata("design:type", Number)
], Prueba.prototype, "idPrueba", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Prueba.prototype, "nombre", void 0);
exports.Prueba = Prueba = __decorate([
    (0, typeorm_1.Entity)({ name: 'prueba' })
], Prueba);
