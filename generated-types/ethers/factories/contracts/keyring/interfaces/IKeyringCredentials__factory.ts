/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKeyringCredentials,
  IKeyringCredentialsInterface,
} from "../../../../contracts/keyring/interfaces/IKeyringCredentials";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "Unacceptable",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "policyManager",
        type: "address",
      },
    ],
    name: "CredentialsDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "CredentialsInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "updater",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "admissionPolicyId",
        type: "uint32",
      },
    ],
    name: "UpdateCredential",
    type: "event",
  },
  {
    inputs: [],
    name: "ROLE_CREDENTIAL_UPDATER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "admissionPolicyId",
        type: "uint32",
      },
    ],
    name: "cache",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "admissionPolicyId",
        type: "uint32",
      },
    ],
    name: "getCredential",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "admissionPolicyId",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "setCredential",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IKeyringCredentials__factory {
  static readonly abi = _abi;
  static createInterface(): IKeyringCredentialsInterface {
    return new utils.Interface(_abi) as IKeyringCredentialsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKeyringCredentials {
    return new Contract(address, _abi, signerOrProvider) as IKeyringCredentials;
  }
}
