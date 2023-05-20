/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RelayerRegistry,
  RelayerRegistryInterface,
} from "../../../contracts/portalgate/RelayerRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isRelayer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "isRelayerRegistered",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b61045f8061007e6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063715018a61161005b578063715018a6146100e25780638da5cb5b146100ea578063f2fde38b14610105578063fb04c9391461011857600080fd5b80630a3b0a4f1461008257806329092d0e14610097578063541d5548146100aa575b600080fd5b6100956100903660046103f9565b610144565b005b6100956100a53660046103f9565b610209565b6100cd6100b83660046103f9565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100956102c2565b6000546040516001600160a01b0390911681526020016100d9565b6100956101133660046103f9565b6102d6565b6100cd6101263660046103f9565b6001600160a01b031660009081526001602052604090205460ff1690565b61014c61034f565b6001600160a01b03811660009081526001602052604090205460ff16156101ba5760405162461bcd60e51b815260206004820152601a60248201527f5468652072656c6179657220616c72656164792065786973747300000000000060448201526064015b60405180910390fd5b6001600160a01b0381166000818152600160208190526040808320805460ff1916909217909155517f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c59190a250565b61021161034f565b6001600160a01b03811660009081526001602052604090205460ff166102795760405162461bcd60e51b815260206004820152601a60248201527f5468652072656c6179657220646f6573206e6f7420657869737400000000000060448201526064016101b1565b6001600160a01b038116600081815260016020526040808220805460ff19169055517f10e1f7ce9fd7d1b90a66d13a2ab3cb8dd7f29f3f8d520b143b063ccfbab6906b9190a250565b6102ca61034f565b6102d460006103a9565b565b6102de61034f565b6001600160a01b0381166103435760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101b1565b61034c816103a9565b50565b6000546001600160a01b031633146102d45760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101b1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561040b57600080fd5b81356001600160a01b038116811461042257600080fd5b939250505056fea2646970667358221220b6b981d3492c4a3e471a4562f43d267db9383fe6eea4600c2b88145ec89a5fb864736f6c63430008130033";

type RelayerRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerRegistry__factory extends ContractFactory {
  constructor(...args: RelayerRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "RelayerRegistry";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerRegistry> {
    return super.deploy(overrides || {}) as Promise<RelayerRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RelayerRegistry {
    return super.attach(address) as RelayerRegistry;
  }
  override connect(signer: Signer): RelayerRegistry__factory {
    return super.connect(signer) as RelayerRegistry__factory;
  }
  static readonly contractName: "RelayerRegistry";

  public readonly contractName: "RelayerRegistry";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerRegistryInterface {
    return new utils.Interface(_abi) as RelayerRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerRegistry {
    return new Contract(address, _abi, signerOrProvider) as RelayerRegistry;
  }
}
