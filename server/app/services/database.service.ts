import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";

@injectable()
export class DatabaseService {
  public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "hopital_bd",
    password: "Poly2021",
    port: 5432,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
    host: "127.0.0.1",
    keepAlive: true
  };

  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  public async getAllMedecins() {
    const client = await this.pool.connect();
    const res = await client.query(`SELECT * FROM Medecins;`);
    client.release();
    return res;
  }

  public async getAllIDs() {
    const client = await this.pool.connect();
    var sql = "SELECT idmedecin FROM Medecins;";
    const ids = (await client.query(sql)).rows;
    client.release();
    return ids;
  }

  public async insertNewMedecin(med: any) {
    const client = await this.pool.connect();
    const values: string[] = [
      Number(med.idmedecin),
      med.prenom,
      med.nom,
      med.specialite,
      Number(med.anneesexperience),
      Number(med.idservice)
    ];

    const queryText: string = `INSERT INTO Medecins VALUES($1,$2,$3,$4,$5,$6);`;
    const res = await client.query(queryText, values);
    client.release();
    return res;
  }

  public async updateMedecin(idMedecin: number, prenom: string, nom: string, specialite: string, anneesExperience: number, idService: number) {
    const client = await this.pool.connect();
    const query = `UPDATE Medecins SET prenom = $2, nom = $3, specialite = $4, anneesExperience = $5, idService = $6 WHERE idMedecin = $1;`;
    await client.query(query, [idMedecin, prenom, nom, specialite, anneesExperience, idService]);
    client.release();
  }
}
