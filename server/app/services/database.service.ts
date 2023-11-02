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
}
