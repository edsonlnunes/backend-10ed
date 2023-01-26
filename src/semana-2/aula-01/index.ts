import { Dhl } from "./transportadoras/dhl";
import { Endereco, IFrete } from "./transportadoras/frete";
import { JadLog } from "./transportadoras/jadlog";
import { RedeSul } from "./transportadoras/rede-sul";
import { Sedex } from "./transportadoras/sedex";

const freteDhl = freteTransportadora(new Dhl()); // windson
const freteSedex = freteTransportadora(new Sedex()); // leticia
const freteRedeSul = freteTransportadora(new RedeSul()); // marcos
// const freteJadLog = freteTransportadora(new JadLog()); // bruno

function freteTransportadora(transportadora: IFrete) {
  const endereco = {} as Endereco;
  return transportadora.calcularFrete(endereco);
}
