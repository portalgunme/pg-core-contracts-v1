/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IRuleRegistry,
  IRuleRegistryInterface,
} from "../../../../contracts/keyring/interfaces/IRuleRegistry";

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
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "toxic",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "enum IRuleRegistry.Operator",
        name: "operator",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "operands",
        type: "bytes32[]",
      },
    ],
    name: "CreateRule",
    type: "event",
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
    ],
    name: "RuleRegistryDeployed",
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
      {
        indexed: false,
        internalType: "string",
        name: "universeDescription",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "universeUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "emptyDescription",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "emptyUri",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "universeRule",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "emptyRule",
        type: "bytes32",
      },
    ],
    name: "RuleRegistryInitialized",
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
      {
        indexed: false,
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isToxic",
        type: "bool",
      },
    ],
    name: "SetToxic",
    type: "event",
  },
  {
    inputs: [],
    name: "ROLE_RULE_ADMIN",
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
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "enum IRuleRegistry.Operator",
        name: "operator",
        type: "uint8",
      },
      {
        internalType: "bytes32[]",
        name: "operands",
        type: "bytes32[]",
      },
    ],
    name: "createRule",
    outputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "enum IRuleRegistry.Operator",
        name: "operator",
        type: "uint8",
      },
      {
        internalType: "bytes32[]",
        name: "operands",
        type: "bytes32[]",
      },
    ],
    name: "generateRuleId",
    outputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "genesis",
    outputs: [
      {
        internalType: "bytes32",
        name: "universeRule",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "emptyRule",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "universeDescription",
        type: "string",
      },
      {
        internalType: "string",
        name: "universeUri",
        type: "string",
      },
      {
        internalType: "string",
        name: "emptyDescription",
        type: "string",
      },
      {
        internalType: "string",
        name: "emptyUri",
        type: "string",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    name: "isRule",
    outputs: [
      {
        internalType: "bool",
        name: "isIndeed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    name: "rule",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "enum IRuleRegistry.Operator",
        name: "operator",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "operandCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "ruleAtIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ruleCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    name: "ruleDescription",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    name: "ruleIsToxic",
    outputs: [
      {
        internalType: "bool",
        name: "isIndeed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "ruleOperandAtIndex",
    outputs: [
      {
        internalType: "bytes32",
        name: "operandId",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    name: "ruleOperandCount",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    name: "ruleOperator",
    outputs: [
      {
        internalType: "enum IRuleRegistry.Operator",
        name: "operator",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
    ],
    name: "ruleUri",
    outputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ruleId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "toxic",
        type: "bool",
      },
    ],
    name: "setToxic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IRuleRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IRuleRegistryInterface {
    return new utils.Interface(_abi) as IRuleRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRuleRegistry {
    return new Contract(address, _abi, signerOrProvider) as IRuleRegistry;
  }
}
