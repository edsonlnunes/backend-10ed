"use strict";
/*import { BombaCombustivel } from "./bomba";

const bomba1 = new BombaCombustivel("Comum", 5.65, 100);

console.log(bomba1.valorLitro); // através do getter
console.log(bomba1.recuperarValorLitro()); // através de função
*/
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./ecommerce/item");
const pedido_1 = require("./ecommerce/pedido");
/*
import { ContaBase } from "./banco/conta-base";
import { ContaCorrente } from "./banco/conta-corrente";
import { ContaPoupanca } from "./banco/conta-poupanca";

const poupanca = new ContaPoupanca("Edson Martins", "00001");
const corrente = new ContaCorrente("Marcos Pereira", "00002", 1500);

// const base = new ContaBase("Leandro", "00003");

*/
const item1 = new item_1.Item(250, "TV", []);
const item2 = new item_1.Item(500, "Ar", [], 0.1);
const pedido = new pedido_1.Pedido("0001", "Edson", [item1, item2]);
console.log(pedido);
