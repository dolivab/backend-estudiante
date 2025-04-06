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
exports.srvDeletePrueba = exports.srvUpdatePrueba = exports.srvCreatePrueba = exports.srvGetPrueba = exports.srvGetPruebas = void 0;
const db_1 = require("../config/db");
const Prueba_entity_1 = require("../entities/Prueba.entity");
const pruebaRepository = db_1.AppDataSource.getRepository(Prueba_entity_1.Prueba);
const srvGetPruebas = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield pruebaRepository.find();
});
exports.srvGetPruebas = srvGetPruebas;
const srvGetPrueba = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield pruebaRepository.findOne({
        where: { idPrueba: id }
    });
});
exports.srvGetPrueba = srvGetPrueba;
const srvCreatePrueba = (nombre) => __awaiter(void 0, void 0, void 0, function* () {
    const prueba = new Prueba_entity_1.Prueba();
    prueba.nombre = nombre;
    return yield pruebaRepository.save(prueba);
});
exports.srvCreatePrueba = srvCreatePrueba;
const srvUpdatePrueba = (id, nombre) => __awaiter(void 0, void 0, void 0, function* () {
    const prueba = yield pruebaRepository.findOne({
        where: { idPrueba: id }
    });
    if (!prueba)
        return null;
    prueba.nombre = nombre;
    return yield pruebaRepository.save(prueba);
});
exports.srvUpdatePrueba = srvUpdatePrueba;
const srvDeletePrueba = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const prueba = yield pruebaRepository.findOne({
        where: { idPrueba: id }
    });
    if (!prueba)
        return null;
    return yield pruebaRepository.remove(prueba);
});
exports.srvDeletePrueba = srvDeletePrueba;
