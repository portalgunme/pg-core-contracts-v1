/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDNSZoneResolver,
  IDNSZoneResolverInterface,
} from "../../../../../../@ensdomains/ens-contracts/contracts/resolvers/profiles/IDNSZoneResolver";

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
        internalType: "bytes",
        name: "lastzonehash",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "zonehash",
        type: "bytes",
      },
    ],
    name: "DNSZonehashChanged",
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
    name: "zonehash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IDNSZoneResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IDNSZoneResolverInterface {
    return new utils.Interface(_abi) as IDNSZoneResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDNSZoneResolver {
    return new Contract(address, _abi, signerOrProvider) as IDNSZoneResolver;
  }
}
