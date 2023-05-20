/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Bytes32Set,
  Bytes32SetInterface,
} from "../../../../contracts/keyring/lib/Bytes32Set";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "module",
        type: "string",
      },
      {
        internalType: "string",
        name: "method",
        type: "string",
      },
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
      {
        internalType: "string",
        name: "context",
        type: "string",
      },
    ],
    name: "SetConsistency",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cec886afea3a65c9e997631cb04669e96799c9b5e569ee249f3962738948289d64736f6c634300080e0033";

type Bytes32SetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Bytes32SetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bytes32Set__factory extends ContractFactory {
  constructor(...args: Bytes32SetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Bytes32Set";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Bytes32Set> {
    return super.deploy(overrides || {}) as Promise<Bytes32Set>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Bytes32Set {
    return super.attach(address) as Bytes32Set;
  }
  override connect(signer: Signer): Bytes32Set__factory {
    return super.connect(signer) as Bytes32Set__factory;
  }
  static readonly contractName: "Bytes32Set";

  public readonly contractName: "Bytes32Set";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Bytes32SetInterface {
    return new utils.Interface(_abi) as Bytes32SetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Bytes32Set {
    return new Contract(address, _abi, signerOrProvider) as Bytes32Set;
  }
}
