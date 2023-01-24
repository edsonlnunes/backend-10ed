"use strict";
/*import { BombaCombustivel } from "./bomba";

const bomba1 = new BombaCombustivel("Comum", 5.65, 100);

console.log(bomba1.valorLitro); // através do getter
console.log(bomba1.recuperarValorLitro()); // através de função
*/
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./ecommerce/produto");
const carrinho_1 = require("./ecommerce/carrinho");
/*
import { ContaBase } from "./banco/conta-base";
import { ContaCorrente } from "./banco/conta-corrente";
import { ContaPoupanca } from "./banco/conta-poupanca";

const poupanca = new ContaPoupanca("Edson Martins", "00001");
const corrente = new ContaCorrente("Marcos Pereira", "00002", 1500);

// const base = new ContaBase("Leandro", "00003");

*/
const teclado = new produto_1.Produto(250, "Teclado", []);
const mouse = new produto_1.Produto(500, "Mouse", [], 0.1);
const carrinho = new carrinho_1.Carrinho("0001", "Edson");
carrinho.add(teclado);
carrinho.add(mouse);
carrinho.mostrarProdutos();
// polimorfismo
// formas
// muitas
