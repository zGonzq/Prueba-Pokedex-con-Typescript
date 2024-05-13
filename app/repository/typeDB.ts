import { Conexion } from "../DBConnect";
import { iType } from "../interface/iType";
import mysql from "mysql2/promise"

export class typeRepository {
    private connection: Conexion;
    
    constructor() {
        this.connection = new Conexion();
    }
    
    async getTypeById(id: number): Promise<mysql.RowDataPacket>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM type WHERE IDtype = ?", [id]);
        return rows;
    }
    
    async getTypeByName(name: string): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM type WHERE typename = ?", [name]);
        return rows;
    }
    
    public async getAllType(): Promise<iType[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM type");
        return rows;
    }

    async createType(type: iType): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("INSERT INTO type (IDtype, typename) VALUES (?, ?)", [type.IDtype, type.typename]);
        return rows;
    }

    async updateType(type: iType): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("UPDATE type SET typename = ? WHERE IDtype = ?", [type.typename, type.IDtype]);
        return rows;
    }
    
    async deleteType(id: number): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("DELETE FROM type WHERE IDtype = ?", [id]);
        return rows;
    }
}