/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IIdentityTreeInterface extends utils.Interface {
  functions: {
    "ROLE_AGGREGATOR()": FunctionFragment;
    "isMerkleRoot(bytes32)": FunctionFragment;
    "latestBirthday()": FunctionFragment;
    "latestRoot()": FunctionFragment;
    "merkleRootAtIndex(uint256)": FunctionFragment;
    "merkleRootBirthday(bytes32)": FunctionFragment;
    "merkleRootCount()": FunctionFragment;
    "merkleRootSuccessors(bytes32)": FunctionFragment;
    "setMerkleRootBirthday(bytes32,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ROLE_AGGREGATOR"
      | "ROLE_AGGREGATOR()"
      | "isMerkleRoot"
      | "isMerkleRoot(bytes32)"
      | "latestBirthday"
      | "latestBirthday()"
      | "latestRoot"
      | "latestRoot()"
      | "merkleRootAtIndex"
      | "merkleRootAtIndex(uint256)"
      | "merkleRootBirthday"
      | "merkleRootBirthday(bytes32)"
      | "merkleRootCount"
      | "merkleRootCount()"
      | "merkleRootSuccessors"
      | "merkleRootSuccessors(bytes32)"
      | "setMerkleRootBirthday"
      | "setMerkleRootBirthday(bytes32,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ROLE_AGGREGATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROLE_AGGREGATOR()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isMerkleRoot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isMerkleRoot(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestBirthday",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestBirthday()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRoot()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootAtIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootAtIndex(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootBirthday",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootBirthday(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootCount()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootSuccessors",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRootSuccessors(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleRootBirthday",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleRootBirthday(bytes32,uint256)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ROLE_AGGREGATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROLE_AGGREGATOR()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMerkleRoot(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestBirthday",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestBirthday()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "latestRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestRoot()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootAtIndex(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootBirthday",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootBirthday(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootCount()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootSuccessors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRootSuccessors(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRootBirthday",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRootBirthday(bytes32,uint256)",
    data: BytesLike
  ): Result;

  events: {
    "SetMerkleRootBirthday(bytes32,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetMerkleRootBirthday"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "SetMerkleRootBirthday(bytes32,uint256)"
  ): EventFragment;
}

export interface SetMerkleRootBirthdayEventObject {
  merkleRoot: string;
  birthday: BigNumber;
}
export type SetMerkleRootBirthdayEvent = TypedEvent<
  [string, BigNumber],
  SetMerkleRootBirthdayEventObject
>;

export type SetMerkleRootBirthdayEventFilter =
  TypedEventFilter<SetMerkleRootBirthdayEvent>;

export interface IIdentityTree extends BaseContract {
  contractName: "IIdentityTree";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IIdentityTreeInterface;

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
    ROLE_AGGREGATOR(overrides?: CallOverrides): Promise<[string]>;

    "ROLE_AGGREGATOR()"(overrides?: CallOverrides): Promise<[string]>;

    isMerkleRoot(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isIndeed: boolean }>;

    "isMerkleRoot(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isIndeed: boolean }>;

    latestBirthday(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { birthday: BigNumber }>;

    "latestBirthday()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { birthday: BigNumber }>;

    latestRoot(overrides?: CallOverrides): Promise<[string] & { root: string }>;

    "latestRoot()"(
      overrides?: CallOverrides
    ): Promise<[string] & { root: string }>;

    merkleRootAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { merkleRoot: string }>;

    "merkleRootAtIndex(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { merkleRoot: string }>;

    merkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "merkleRootBirthday(bytes32)"(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    merkleRootCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    "merkleRootCount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    merkleRootSuccessors(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { successors: BigNumber }>;

    "merkleRootSuccessors(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { successors: BigNumber }>;

    setMerkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "setMerkleRootBirthday(bytes32,uint256)"(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  ROLE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;

  "ROLE_AGGREGATOR()"(overrides?: CallOverrides): Promise<string>;

  isMerkleRoot(
    merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isMerkleRoot(bytes32)"(
    merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  latestBirthday(overrides?: CallOverrides): Promise<BigNumber>;

  "latestBirthday()"(overrides?: CallOverrides): Promise<BigNumber>;

  latestRoot(overrides?: CallOverrides): Promise<string>;

  "latestRoot()"(overrides?: CallOverrides): Promise<string>;

  merkleRootAtIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "merkleRootAtIndex(uint256)"(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  merkleRootBirthday(
    root: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "merkleRootBirthday(bytes32)"(
    root: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  merkleRootCount(overrides?: CallOverrides): Promise<BigNumber>;

  "merkleRootCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  merkleRootSuccessors(
    merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "merkleRootSuccessors(bytes32)"(
    merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setMerkleRootBirthday(
    root: PromiseOrValue<BytesLike>,
    birthday: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "setMerkleRootBirthday(bytes32,uint256)"(
    root: PromiseOrValue<BytesLike>,
    birthday: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ROLE_AGGREGATOR(overrides?: CallOverrides): Promise<string>;

    "ROLE_AGGREGATOR()"(overrides?: CallOverrides): Promise<string>;

    isMerkleRoot(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isMerkleRoot(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    latestBirthday(overrides?: CallOverrides): Promise<BigNumber>;

    "latestBirthday()"(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoot(overrides?: CallOverrides): Promise<string>;

    "latestRoot()"(overrides?: CallOverrides): Promise<string>;

    merkleRootAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "merkleRootAtIndex(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    merkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootBirthday(bytes32)"(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRootCount(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRootCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    merkleRootSuccessors(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootSuccessors(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMerkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMerkleRootBirthday(bytes32,uint256)"(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SetMerkleRootBirthday(bytes32,uint256)"(
      merkleRoot?: null,
      birthday?: null
    ): SetMerkleRootBirthdayEventFilter;
    SetMerkleRootBirthday(
      merkleRoot?: null,
      birthday?: null
    ): SetMerkleRootBirthdayEventFilter;
  };

  estimateGas: {
    ROLE_AGGREGATOR(overrides?: CallOverrides): Promise<BigNumber>;

    "ROLE_AGGREGATOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    isMerkleRoot(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isMerkleRoot(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestBirthday(overrides?: CallOverrides): Promise<BigNumber>;

    "latestBirthday()"(overrides?: CallOverrides): Promise<BigNumber>;

    latestRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "latestRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    merkleRootAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootAtIndex(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootBirthday(bytes32)"(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRootCount(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRootCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    merkleRootSuccessors(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "merkleRootSuccessors(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMerkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "setMerkleRootBirthday(bytes32,uint256)"(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ROLE_AGGREGATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ROLE_AGGREGATOR()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMerkleRoot(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isMerkleRoot(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestBirthday(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "latestBirthday()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "latestRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    merkleRootAtIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "merkleRootAtIndex(uint256)"(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "merkleRootBirthday(bytes32)"(
      root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRootCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRootCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRootSuccessors(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "merkleRootSuccessors(bytes32)"(
      merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMerkleRootBirthday(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "setMerkleRootBirthday(bytes32,uint256)"(
      root: PromiseOrValue<BytesLike>,
      birthday: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
