/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPubkeyResolver,
  IPubkeyResolverInterface,
} from "../../../../../../@ensdomains/ens-contracts/contracts/resolvers/profiles/IPubkeyResolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "x",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "y",
        type: "bytes32",
      },
    ],
    name: "PubkeyChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "pubkey",
    outputs: [
      {
        internalType: "bytes32",
        name: "x",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "y",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IPubkeyResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IPubkeyResolverInterface {
    return new utils.Interface(_abi) as IPubkeyResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPubkeyResolver {
    return new Contract(address, _abi, signerOrProvider) as IPubkeyResolver;
  }
}