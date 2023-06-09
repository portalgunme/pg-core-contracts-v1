/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ENSResolverInterface extends utils.Interface {
  functions: {
    "addr(bytes32)": FunctionFragment;
    "text(bytes32,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addr"
      | "addr(bytes32)"
      | "text"
      | "text(bytes32,string)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addr",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "addr(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "text",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "text(bytes32,string)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addr(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "text(bytes32,string)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ENSResolver extends BaseContract {
  contractName: "ENSResolver";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ENSResolverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addr(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "addr(bytes32)"(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    text(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "text(bytes32,string)"(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  addr(
    node: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "addr(bytes32)"(
    node: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  text(
    node: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  "text(bytes32,string)"(
    node: PromiseOrValue<BytesLike>,
    key: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    addr(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "addr(bytes32)"(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    text(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    "text(bytes32,string)"(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addr(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addr(bytes32)"(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    text(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "text(bytes32,string)"(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addr(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addr(bytes32)"(
      node: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    text(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "text(bytes32,string)"(
      node: PromiseOrValue<BytesLike>,
      key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
