/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAuthorizationProofVerifier,
  IAuthorizationProofVerifierInterface,
} from "../../../../contracts/keyring/interfaces/IAuthorizationProofVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[5]",
        name: "input",
        type: "uint256[5]",
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
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAuthorizationProofVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IAuthorizationProofVerifierInterface {
    return new utils.Interface(_abi) as IAuthorizationProofVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAuthorizationProofVerifier {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAuthorizationProofVerifier;
  }
}