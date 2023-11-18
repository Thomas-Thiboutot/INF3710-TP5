import { Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  router: Router;
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {
    this.configureRouter();
  }

  // public get router(): Router {
  //   const router: Router = Router();
  //   return router;
  // }

  private configureRouter(): void {
    this.router = Router();
    this.router.get('/', async (req, res) => {
      const medecins = await this.databaseService.getAllMedecins();
      res.status(200).json(medecins.rows);
    });

    this.router.post('/', async (req, res) => {
      await this.databaseService.insertNewMedecin(req.body);
      res.status(201).json("Insertion completée");
    });

    this.router.put('/medecin/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      const { prenom, nom, specialite, anneesexperience, idservice } = req.body;

      try {
        const updatedMedecin = await this.databaseService.updateMedecin(id, prenom, nom, specialite, anneesexperience, idservice);
        res.status(200).json(updatedMedecin);
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

    this.router.delete('/medecin/:id', async (req, res) => {
      const id = parseInt(req.params.id);

      try {
        await this.databaseService.deleteMedecin(id);
        res.status(200).json("Suppression completée");
      } catch (error) {
        res.status(500).send(error.message);
      }
    });

  }
}
