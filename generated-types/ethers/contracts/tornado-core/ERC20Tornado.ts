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
  PayableOverrides,
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
} from "../../common";

export interface ERC20TornadoInterface extends utils.Interface {
  functions: {
    "FIELD_SIZE()": FunctionFragment;
    "ROOT_HISTORY_SIZE()": FunctionFragment;
    "ZERO_VALUE()": FunctionFragment;
    "commitments(bytes32)": FunctionFragment;
    "currentRootIndex()": FunctionFragment;
    "denomination()": FunctionFragment;
    "deposit(bytes32)": FunctionFragment;
    "filledSubtrees(uint256)": FunctionFragment;
    "getLastRoot()": FunctionFragment;
    "hashLeftRight(bytes32,bytes32)": FunctionFragment;
    "hasher()": FunctionFragment;
    "isKnownRoot(bytes32)": FunctionFragment;
    "isSpent(bytes32)": FunctionFragment;
    "isSpentArray(bytes32[])": FunctionFragment;
    "levels()": FunctionFragment;
    "nextIndex()": FunctionFragment;
    "nullifierHashes(bytes32)": FunctionFragment;
    "roots(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "verifier()": FunctionFragment;
    "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)": FunctionFragment;
    "zeros(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FIELD_SIZE"
      | "FIELD_SIZE()"
      | "ROOT_HISTORY_SIZE"
      | "ROOT_HISTORY_SIZE()"
      | "ZERO_VALUE"
      | "ZERO_VALUE()"
      | "commitments"
      | "commitments(bytes32)"
      | "currentRootIndex"
      | "currentRootIndex()"
      | "denomination"
      | "denomination()"
      | "deposit"
      | "deposit(bytes32)"
      | "filledSubtrees"
      | "filledSubtrees(uint256)"
      | "getLastRoot"
      | "getLastRoot()"
      | "hashLeftRight"
      | "hashLeftRight(bytes32,bytes32)"
      | "hasher"
      | "hasher()"
      | "isKnownRoot"
      | "isKnownRoot(bytes32)"
      | "isSpent"
      | "isSpent(bytes32)"
      | "isSpentArray"
      | "isSpentArray(bytes32[])"
      | "levels"
      | "levels()"
      | "nextIndex"
      | "nextIndex()"
      | "nullifierHashes"
      | "nullifierHashes(bytes32)"
      | "roots"
      | "roots(uint256)"
      | "token"
      | "token()"
      | "verifier"
      | "verifier()"
      | "withdraw"
      | "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)"
      | "zeros"
      | "zeros(uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIELD_SIZE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "commitments(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "denomination",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "denomination()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight(bytes32,bytes32)",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(functionFragment: "hasher()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSpent",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSpent(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSpentArray",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isSpentArray(bytes32[])",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "levels()", values?: undefined): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextIndex()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "roots",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "roots(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "token()", values?: undefined): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifier()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "zeros",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "zeros(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FIELD_SIZE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ZERO_VALUE()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commitments(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "denomination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "denomination()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deposit(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight(bytes32,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasher()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSpent(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSpentArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSpentArray(bytes32[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "levels()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextIndex()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "roots(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zeros(uint256)",
    data: BytesLike
  ): Result;

  events: {
    "Deposit(bytes32,uint32,uint256)": EventFragment;
    "Withdrawal(address,bytes32,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Deposit(bytes32,uint32,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Withdrawal(address,bytes32,address,uint256)"
  ): EventFragment;
}

export interface DepositEventObject {
  commitment: string;
  leafIndex: number;
  timestamp: BigNumber;
}
export type DepositEvent = TypedEvent<
  [string, number, BigNumber],
  DepositEventObject
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface WithdrawalEventObject {
  to: string;
  nullifierHash: string;
  relayer: string;
  fee: BigNumber;
}
export type WithdrawalEvent = TypedEvent<
  [string, string, string, BigNumber],
  WithdrawalEventObject
>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface ERC20Tornado extends BaseContract {
  contractName: "ERC20Tornado";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20TornadoInterface;

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
    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "FIELD_SIZE()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<[number]>;

    "ROOT_HISTORY_SIZE()"(overrides?: CallOverrides): Promise<[number]>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ZERO_VALUE()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "commitments(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    currentRootIndex(overrides?: CallOverrides): Promise<[number]>;

    "currentRootIndex()"(overrides?: CallOverrides): Promise<[number]>;

    denomination(overrides?: CallOverrides): Promise<[BigNumber]>;

    "denomination()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "deposit(bytes32)"(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "filledSubtrees(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLastRoot(overrides?: CallOverrides): Promise<[string]>;

    "getLastRoot()"(overrides?: CallOverrides): Promise<[string]>;

    hashLeftRight(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "hashLeftRight(bytes32,bytes32)"(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasher(overrides?: CallOverrides): Promise<[string]>;

    "hasher()"(overrides?: CallOverrides): Promise<[string]>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isKnownRoot(bytes32)"(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSpent(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isSpent(bytes32)"(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSpentArray(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[boolean[]] & { spent: boolean[] }>;

    "isSpentArray(bytes32[])"(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[boolean[]] & { spent: boolean[] }>;

    levels(overrides?: CallOverrides): Promise<[number]>;

    "levels()"(overrides?: CallOverrides): Promise<[number]>;

    nextIndex(overrides?: CallOverrides): Promise<[number]>;

    "nextIndex()"(overrides?: CallOverrides): Promise<[number]>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "nullifierHashes(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "roots(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    verifier(overrides?: CallOverrides): Promise<[string]>;

    "verifier()"(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)"(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    zeros(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "zeros(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  "FIELD_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  "ROOT_HISTORY_SIZE()"(overrides?: CallOverrides): Promise<number>;

  ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  "ZERO_VALUE()"(overrides?: CallOverrides): Promise<BigNumber>;

  commitments(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "commitments(bytes32)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  currentRootIndex(overrides?: CallOverrides): Promise<number>;

  "currentRootIndex()"(overrides?: CallOverrides): Promise<number>;

  denomination(overrides?: CallOverrides): Promise<BigNumber>;

  "denomination()"(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _commitment: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "deposit(bytes32)"(
    _commitment: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  filledSubtrees(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "filledSubtrees(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getLastRoot(overrides?: CallOverrides): Promise<string>;

  "getLastRoot()"(overrides?: CallOverrides): Promise<string>;

  hashLeftRight(
    _left: PromiseOrValue<BytesLike>,
    _right: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "hashLeftRight(bytes32,bytes32)"(
    _left: PromiseOrValue<BytesLike>,
    _right: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  hasher(overrides?: CallOverrides): Promise<string>;

  "hasher()"(overrides?: CallOverrides): Promise<string>;

  isKnownRoot(
    _root: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isKnownRoot(bytes32)"(
    _root: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSpent(
    _nullifierHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isSpent(bytes32)"(
    _nullifierHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSpentArray(
    _nullifierHashes: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  "isSpentArray(bytes32[])"(
    _nullifierHashes: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<boolean[]>;

  levels(overrides?: CallOverrides): Promise<number>;

  "levels()"(overrides?: CallOverrides): Promise<number>;

  nextIndex(overrides?: CallOverrides): Promise<number>;

  "nextIndex()"(overrides?: CallOverrides): Promise<number>;

  nullifierHashes(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "nullifierHashes(bytes32)"(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  roots(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "roots(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  verifier(overrides?: CallOverrides): Promise<string>;

  "verifier()"(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _proof: PromiseOrValue<BytesLike>,
    _root: PromiseOrValue<BytesLike>,
    _nullifierHash: PromiseOrValue<BytesLike>,
    _recipient: PromiseOrValue<string>,
    _relayer: PromiseOrValue<string>,
    _fee: PromiseOrValue<BigNumberish>,
    _refund: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)"(
    _proof: PromiseOrValue<BytesLike>,
    _root: PromiseOrValue<BytesLike>,
    _nullifierHash: PromiseOrValue<BytesLike>,
    _recipient: PromiseOrValue<string>,
    _relayer: PromiseOrValue<string>,
    _fee: PromiseOrValue<BigNumberish>,
    _refund: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  zeros(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  "zeros(uint256)"(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "FIELD_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    "ROOT_HISTORY_SIZE()"(overrides?: CallOverrides): Promise<number>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    "ZERO_VALUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "commitments(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    currentRootIndex(overrides?: CallOverrides): Promise<number>;

    "currentRootIndex()"(overrides?: CallOverrides): Promise<number>;

    denomination(overrides?: CallOverrides): Promise<BigNumber>;

    "denomination()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(bytes32)"(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "filledSubtrees(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getLastRoot(overrides?: CallOverrides): Promise<string>;

    "getLastRoot()"(overrides?: CallOverrides): Promise<string>;

    hashLeftRight(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "hashLeftRight(bytes32,bytes32)"(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    hasher(overrides?: CallOverrides): Promise<string>;

    "hasher()"(overrides?: CallOverrides): Promise<string>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isKnownRoot(bytes32)"(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSpent(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isSpent(bytes32)"(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSpentArray(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    "isSpentArray(bytes32[])"(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean[]>;

    levels(overrides?: CallOverrides): Promise<number>;

    "levels()"(overrides?: CallOverrides): Promise<number>;

    nextIndex(overrides?: CallOverrides): Promise<number>;

    "nextIndex()"(overrides?: CallOverrides): Promise<number>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "nullifierHashes(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "roots(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    verifier(overrides?: CallOverrides): Promise<string>;

    "verifier()"(overrides?: CallOverrides): Promise<string>;

    withdraw(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)"(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    zeros(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    "zeros(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Deposit(bytes32,uint32,uint256)"(
      commitment?: PromiseOrValue<BytesLike> | null,
      leafIndex?: null,
      timestamp?: null
    ): DepositEventFilter;
    Deposit(
      commitment?: PromiseOrValue<BytesLike> | null,
      leafIndex?: null,
      timestamp?: null
    ): DepositEventFilter;

    "Withdrawal(address,bytes32,address,uint256)"(
      to?: null,
      nullifierHash?: null,
      relayer?: PromiseOrValue<string> | null,
      fee?: null
    ): WithdrawalEventFilter;
    Withdrawal(
      to?: null,
      nullifierHash?: null,
      relayer?: PromiseOrValue<string> | null,
      fee?: null
    ): WithdrawalEventFilter;
  };

  estimateGas: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "FIELD_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    "ROOT_HISTORY_SIZE()"(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    "ZERO_VALUE()"(overrides?: CallOverrides): Promise<BigNumber>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "commitments(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "currentRootIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    denomination(overrides?: CallOverrides): Promise<BigNumber>;

    "denomination()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "deposit(bytes32)"(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "filledSubtrees(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "getLastRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    hashLeftRight(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hashLeftRight(bytes32,bytes32)"(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasher(overrides?: CallOverrides): Promise<BigNumber>;

    "hasher()"(overrides?: CallOverrides): Promise<BigNumber>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isKnownRoot(bytes32)"(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSpent(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isSpent(bytes32)"(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSpentArray(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isSpentArray(bytes32[])"(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    "levels()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "nextIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "nullifierHashes(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "roots(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;

    "verifier()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)"(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    zeros(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "zeros(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "FIELD_SIZE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ROOT_HISTORY_SIZE()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ZERO_VALUE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    commitments(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "commitments(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRootIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentRootIndex()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    denomination(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "denomination()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(bytes32)"(
      _commitment: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    filledSubtrees(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "filledSubtrees(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLastRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashLeftRight(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hashLeftRight(bytes32,bytes32)"(
      _left: PromiseOrValue<BytesLike>,
      _right: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "hasher()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isKnownRoot(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isKnownRoot(bytes32)"(
      _root: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSpent(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isSpent(bytes32)"(
      _nullifierHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSpentArray(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isSpentArray(bytes32[])"(
      _nullifierHashes: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "levels()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextIndex()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nullifierHashes(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nullifierHashes(bytes32)"(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roots(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "roots(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "verifier()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(bytes,bytes32,bytes32,address,address,uint256,uint256)"(
      _proof: PromiseOrValue<BytesLike>,
      _root: PromiseOrValue<BytesLike>,
      _nullifierHash: PromiseOrValue<BytesLike>,
      _recipient: PromiseOrValue<string>,
      _relayer: PromiseOrValue<string>,
      _fee: PromiseOrValue<BigNumberish>,
      _refund: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    zeros(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "zeros(uint256)"(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
