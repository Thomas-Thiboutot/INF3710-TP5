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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.DatabaseController = void 0;
const express_1 = require("express");
const inversify_1 = require("inversify");
const database_service_1 = require("../services/database.service");
const types_1 = require("../types");
let DatabaseController = class DatabaseController {
    constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    databaseService) {
        this.databaseService = databaseService;
        this.configureRouter();
    }
    // public get router(): Router {
    //   const router: Router = Router();
    //   return router;
    // }
    configureRouter() {
        this.router = (0, express_1.Router)();
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const medecins = yield this.databaseService.getAllMedecins();
            res.status(200).json(medecins.rows);
        }));
        this.router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.databaseService.insertNewMedecin(req.body);
            res.status(201).json("Insertion completée");
        }));
        this.router.put('/medecin/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const { prenom, nom, specialite, anneesexperience, idservice } = req.body;
            try {
                const updatedMedecin = yield this.databaseService.updateMedecin(id, prenom, nom, specialite, anneesexperience, idservice);
                res.status(200).json(updatedMedecin);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        }));
        this.router.delete('/medecin/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                yield this.databaseService.deleteMedecin(id);
                res.status(200).json("Suppression completée");
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        }));
    }
};
DatabaseController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.DatabaseService)),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
exports.DatabaseController = DatabaseController;
//# sourceMappingURL=database.controller.js.map