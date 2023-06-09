/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVerifier,
  IVerifierInterface,
} from "../../../../contracts/tornado-core/Tornado.sol/IVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "uint256[6]",
        name: "_input",
        type: "uint256[6]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IVerifierInterface {
    return new utils.Interface(_abi) as IVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVerifier {
    return new Contract(address, _abi, signerOrProvider) as IVerifier;
  }
}
