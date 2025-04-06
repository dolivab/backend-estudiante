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
exports.deletePrueba = exports.updatePrueba = exports.createPrueba = exports.getPrueba = exports.getPruebas = void 0;
const prueba_service_1 = require("../services/prueba.service");
const getPruebas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pruebas = yield (0, prueba_service_1.srvGetPruebas)();
        res.status(200).json(pruebas);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPruebas = getPruebas;
const getPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const prueba = yield (0, prueba_service_1.srvGetPrueba)(Number(id));
        if (!prueba)
            res.status(404).json({ message: 'Prueba no encontrada' });
        res.status(200).json(prueba);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getPrueba = getPrueba;
const createPrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre } = req.body;
        const prueba = yield (0, prueba_service_1.srvCreatePrueba)(nombre);
        res.status(201).json(prueba);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createPrueba = createPrueba;
const updatePrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const prueba = yield (0, prueba_service_1.srvUpdatePrueba)(Number(id), nombre);
        if (!prueba)
            res.status(404).json({ message: 'Prueba no encontrada' });
        res.status(200).json(prueba);
    }
    catch (error) {
        console.log(error);
    }
});
exports.updatePrueba = updatePrueba;
const deletePrueba = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const prueba = yield (0, prueba_service_1.srvDeletePrueba)(Number(id));
        if (!prueba)
            res.status(404).json({ message: 'Prueba no encontrada' });
        res.status(200).json(prueba);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deletePrueba = deletePrueba;
