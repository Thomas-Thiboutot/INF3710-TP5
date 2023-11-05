import { Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";

@injectable()
export class DatabaseController {
  router : Router;
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

    this.router.get('/id', async (req, res) => {
      const ids = await this.databaseService.getAllIDs();
      res.status(200).json(ids);
    });

  }
}
