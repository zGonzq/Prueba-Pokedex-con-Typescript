import { Conexion } from "../DBConnect";
import { iPokemon } from "../interface/iPokemon";
import mysql from "mysql2/promise"

export class PokemonRepository {
    private connection: Conexion;
    
    constructor() {
        this.connection = new Conexion();
    }
    
    async getPokemonById(id: number): Promise<mysql.RowDataPacket>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM pokemon WHERE IDpoke = ?", [id]);
        return rows;
    }
    
    async getPokemonByName(name: string): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM pokemon WHERE pokename = ?", [name]);
        return rows;
    }
    
    public async getAllPokemon(): Promise<iPokemon[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("SELECT * FROM pokemon");
        return rows;
    }
    
    async createPokemon(pokemon: iPokemon): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("INSERT INTO pokemon (IDpoke, pokename, HP, attack, defense, spattack, spdefense, speed, dualtype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [pokemon.IDpoke, pokemon.pokename, pokemon.HP, pokemon.attack, pokemon.defense, pokemon.spattack, pokemon.spdefense, pokemon.speed, pokemon.dualtype]);
        return rows;
    }

    async updatePokemon(pokemon: iPokemon): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("UPDATE pokemon SET pokename = ?, HP = ?, attack = ?, defense = ?, spattack = ?, spdefense = ?, speed = ?, dualtype = ? WHERE IDpoke = ?", [pokemon.pokename, pokemon.HP, pokemon.attack, pokemon.defense, pokemon.spattack, pokemon.spdefense, pokemon.speed, pokemon.dualtype, pokemon.IDpoke]);
        return rows;
    }
    
    async deletePokemon(id: number): Promise<mysql.RowDataPacket[]>{
        const conn = await this.connection.connect();
        const [rows] = await conn.query("DELETE FROM pokemon WHERE IDpoke = ?", [id]);
        return rows;
    }
}