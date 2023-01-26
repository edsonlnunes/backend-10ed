"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dhl_1 = require("./transportadoras/dhl");
const rede_sul_1 = require("./transportadoras/rede-sul");
const sedex_1 = require("./transportadoras/sedex");
const freteDhl = freteTransportadora(new dhl_1.Dhl()); // windson
const freteSedex = freteTransportadora(new sedex_1.Sedex()); // leticia
const freteRedeSul = freteTransportadora(new rede_sul_1.RedeSul()); // marcos
// const freteJadLog = freteTransportadora(new JadLog()); // bruno
function freteTransportadora(transportadora) {
    const endereco = {};
    return transportadora.calcularFrete(endereco);
}
