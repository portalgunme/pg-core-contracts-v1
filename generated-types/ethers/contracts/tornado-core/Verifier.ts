/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface VerifierInterface extends utils.Interface {
  functions: {
    "verifyProof(bytes,uint256[6])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "verifyProof" | "verifyProof(bytes,uint256[6])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof(bytes,uint256[6])",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof(bytes,uint256[6])",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Verifier extends BaseContract {
  contractName: "Verifier";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifierInterface;

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
    verifyProof(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "verifyProof(bytes,uint256[6])"(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verifyProof(
    proof: PromiseOrValue<BytesLike>,
    input: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "verifyProof(bytes,uint256[6])"(
    proof: PromiseOrValue<BytesLike>,
    input: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verifyProof(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "verifyProof(bytes,uint256[6])"(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verifyProof(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "verifyProof(bytes,uint256[6])"(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyProof(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verifyProof(bytes,uint256[6])"(
      proof: PromiseOrValue<BytesLike>,
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
