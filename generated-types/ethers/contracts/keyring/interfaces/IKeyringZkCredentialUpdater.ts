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

export declare namespace IKeyringZkVerifier {
  export type Groth16ProofStruct = {
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    b: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ];
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
  };

  export type Groth16ProofStructOutput = [
    [BigNumber, BigNumber],
    [[BigNumber, BigNumber], [BigNumber, BigNumber]],
    [BigNumber, BigNumber]
  ] & {
    a: [BigNumber, BigNumber];
    b: [[BigNumber, BigNumber], [BigNumber, BigNumber]];
    c: [BigNumber, BigNumber];
  };

  export type IdentityMembershipProofStruct = {
    proof: IKeyringZkVerifier.Groth16ProofStruct;
    root: PromiseOrValue<BigNumberish>;
    nullifierHash: PromiseOrValue<BigNumberish>;
    signalHash: PromiseOrValue<BigNumberish>;
    externalNullifier: PromiseOrValue<BigNumberish>;
  };

  export type IdentityMembershipProofStructOutput = [
    IKeyringZkVerifier.Groth16ProofStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    proof: IKeyringZkVerifier.Groth16ProofStructOutput;
    root: BigNumber;
    nullifierHash: BigNumber;
    signalHash: BigNumber;
    externalNullifier: BigNumber;
  };

  export type IdentityAuthorisationProofStruct = {
    proof: IKeyringZkVerifier.Groth16ProofStruct;
    externalNullifier: PromiseOrValue<BigNumberish>;
    nullifierHash: PromiseOrValue<BigNumberish>;
    policyDisclosures: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ];
    tradingAddress: PromiseOrValue<BigNumberish>;
  };

  export type IdentityAuthorisationProofStructOutput = [
    IKeyringZkVerifier.Groth16ProofStructOutput,
    BigNumber,
    BigNumber,
    [BigNumber, BigNumber],
    BigNumber
  ] & {
    proof: IKeyringZkVerifier.Groth16ProofStructOutput;
    externalNullifier: BigNumber;
    nullifierHash: BigNumber;
    policyDisclosures: [BigNumber, BigNumber];
    tradingAddress: BigNumber;
  };
}

export interface IKeyringZkCredentialUpdaterInterface extends utils.Interface {
  functions: {
    "KEYRING_CREDENTIALS()": FunctionFragment;
    "KEYRING_ZK_VERIFIER()": FunctionFragment;
    "POLICY_MANAGER()": FunctionFragment;
    "checkPolicy(uint32,address)": FunctionFragment;
    "pack12x20(uint32[12])": FunctionFragment;
    "unpack12x20(uint256)": FunctionFragment;
    "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "KEYRING_CREDENTIALS"
      | "KEYRING_CREDENTIALS()"
      | "KEYRING_ZK_VERIFIER"
      | "KEYRING_ZK_VERIFIER()"
      | "POLICY_MANAGER"
      | "POLICY_MANAGER()"
      | "checkPolicy"
      | "checkPolicy(uint32,address)"
      | "pack12x20"
      | "pack12x20(uint32[12])"
      | "unpack12x20"
      | "unpack12x20(uint256)"
      | "updateCredentials"
      | "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "KEYRING_CREDENTIALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "KEYRING_CREDENTIALS()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "KEYRING_ZK_VERIFIER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "KEYRING_ZK_VERIFIER()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POLICY_MANAGER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POLICY_MANAGER()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkPolicy",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPolicy(uint32,address)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pack12x20",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "pack12x20(uint32[12])",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "unpack12x20",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "unpack12x20(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCredentials",
    values: [
      PromiseOrValue<string>,
      IKeyringZkVerifier.IdentityMembershipProofStruct,
      IKeyringZkVerifier.IdentityAuthorisationProofStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))",
    values: [
      PromiseOrValue<string>,
      IKeyringZkVerifier.IdentityMembershipProofStruct,
      IKeyringZkVerifier.IdentityAuthorisationProofStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "KEYRING_CREDENTIALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "KEYRING_CREDENTIALS()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "KEYRING_ZK_VERIFIER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "KEYRING_ZK_VERIFIER()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POLICY_MANAGER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POLICY_MANAGER()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkPolicy(uint32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pack12x20", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pack12x20(uint32[12])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpack12x20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpack12x20(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCredentials",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))",
    data: BytesLike
  ): Result;

  events: {
    "AcceptCredentialUpdate(address,address,tuple,tuple,uint256)": EventFragment;
    "AdmitIdentityTree(address,address)": EventFragment;
    "CredentialUpdaterDeployed(address,address,address,address,address)": EventFragment;
    "RemoveIdentityTree(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AcceptCredentialUpdate"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AcceptCredentialUpdate(address,address,tuple,tuple,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AdmitIdentityTree"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AdmitIdentityTree(address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CredentialUpdaterDeployed"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CredentialUpdaterDeployed(address,address,address,address,address)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveIdentityTree"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RemoveIdentityTree(address,address)"
  ): EventFragment;
}

export interface AcceptCredentialUpdateEventObject {
  sender: string;
  trader: string;
  membershipProof: IKeyringZkVerifier.IdentityMembershipProofStructOutput;
  authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStructOutput;
  rootTime: BigNumber;
}
export type AcceptCredentialUpdateEvent = TypedEvent<
  [
    string,
    string,
    IKeyringZkVerifier.IdentityMembershipProofStructOutput,
    IKeyringZkVerifier.IdentityAuthorisationProofStructOutput,
    BigNumber
  ],
  AcceptCredentialUpdateEventObject
>;

export type AcceptCredentialUpdateEventFilter =
  TypedEventFilter<AcceptCredentialUpdateEvent>;

export interface AdmitIdentityTreeEventObject {
  admin: string;
  identityTree: string;
}
export type AdmitIdentityTreeEvent = TypedEvent<
  [string, string],
  AdmitIdentityTreeEventObject
>;

export type AdmitIdentityTreeEventFilter =
  TypedEventFilter<AdmitIdentityTreeEvent>;

export interface CredentialUpdaterDeployedEventObject {
  deployer: string;
  trustedForwarder: string;
  keyringCache: string;
  admissionPolicyManager: string;
  keyringZkVerifier: string;
}
export type CredentialUpdaterDeployedEvent = TypedEvent<
  [string, string, string, string, string],
  CredentialUpdaterDeployedEventObject
>;

export type CredentialUpdaterDeployedEventFilter =
  TypedEventFilter<CredentialUpdaterDeployedEvent>;

export interface RemoveIdentityTreeEventObject {
  admin: string;
  identityTree: string;
}
export type RemoveIdentityTreeEvent = TypedEvent<
  [string, string],
  RemoveIdentityTreeEventObject
>;

export type RemoveIdentityTreeEventFilter =
  TypedEventFilter<RemoveIdentityTreeEvent>;

export interface IKeyringZkCredentialUpdater extends BaseContract {
  contractName: "IKeyringZkCredentialUpdater";

  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKeyringZkCredentialUpdaterInterface;

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
    KEYRING_CREDENTIALS(overrides?: CallOverrides): Promise<[string]>;

    "KEYRING_CREDENTIALS()"(overrides?: CallOverrides): Promise<[string]>;

    KEYRING_ZK_VERIFIER(overrides?: CallOverrides): Promise<[string]>;

    "KEYRING_ZK_VERIFIER()"(overrides?: CallOverrides): Promise<[string]>;

    POLICY_MANAGER(overrides?: CallOverrides): Promise<[string]>;

    "POLICY_MANAGER()"(overrides?: CallOverrides): Promise<[string]>;

    checkPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "checkPolicy(uint32,address)"(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pack12x20(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { packed: BigNumber }>;

    "pack12x20(uint32[12])"(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { packed: BigNumber }>;

    unpack12x20(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]] & { unpacked: number[] }>;

    "unpack12x20(uint256)"(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]] & { unpacked: number[] }>;

    updateCredentials(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))"(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  KEYRING_CREDENTIALS(overrides?: CallOverrides): Promise<string>;

  "KEYRING_CREDENTIALS()"(overrides?: CallOverrides): Promise<string>;

  KEYRING_ZK_VERIFIER(overrides?: CallOverrides): Promise<string>;

  "KEYRING_ZK_VERIFIER()"(overrides?: CallOverrides): Promise<string>;

  POLICY_MANAGER(overrides?: CallOverrides): Promise<string>;

  "POLICY_MANAGER()"(overrides?: CallOverrides): Promise<string>;

  checkPolicy(
    policyId: PromiseOrValue<BigNumberish>,
    attestor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "checkPolicy(uint32,address)"(
    policyId: PromiseOrValue<BigNumberish>,
    attestor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pack12x20(
    input: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pack12x20(uint32[12])"(
    input: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  unpack12x20(
    packed: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  "unpack12x20(uint256)"(
    packed: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  updateCredentials(
    attestor: PromiseOrValue<string>,
    membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
    authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))"(
    attestor: PromiseOrValue<string>,
    membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
    authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    KEYRING_CREDENTIALS(overrides?: CallOverrides): Promise<string>;

    "KEYRING_CREDENTIALS()"(overrides?: CallOverrides): Promise<string>;

    KEYRING_ZK_VERIFIER(overrides?: CallOverrides): Promise<string>;

    "KEYRING_ZK_VERIFIER()"(overrides?: CallOverrides): Promise<string>;

    POLICY_MANAGER(overrides?: CallOverrides): Promise<string>;

    "POLICY_MANAGER()"(overrides?: CallOverrides): Promise<string>;

    checkPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "checkPolicy(uint32,address)"(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pack12x20(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pack12x20(uint32[12])"(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpack12x20(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;

    "unpack12x20(uint256)"(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;

    updateCredentials(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))"(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AcceptCredentialUpdate(address,address,tuple,tuple,uint256)"(
      sender?: null,
      trader?: null,
      membershipProof?: null,
      authorizationProof?: null,
      rootTime?: null
    ): AcceptCredentialUpdateEventFilter;
    AcceptCredentialUpdate(
      sender?: null,
      trader?: null,
      membershipProof?: null,
      authorizationProof?: null,
      rootTime?: null
    ): AcceptCredentialUpdateEventFilter;

    "AdmitIdentityTree(address,address)"(
      admin?: null,
      identityTree?: null
    ): AdmitIdentityTreeEventFilter;
    AdmitIdentityTree(
      admin?: null,
      identityTree?: null
    ): AdmitIdentityTreeEventFilter;

    "CredentialUpdaterDeployed(address,address,address,address,address)"(
      deployer?: null,
      trustedForwarder?: null,
      keyringCache?: null,
      admissionPolicyManager?: null,
      keyringZkVerifier?: null
    ): CredentialUpdaterDeployedEventFilter;
    CredentialUpdaterDeployed(
      deployer?: null,
      trustedForwarder?: null,
      keyringCache?: null,
      admissionPolicyManager?: null,
      keyringZkVerifier?: null
    ): CredentialUpdaterDeployedEventFilter;

    "RemoveIdentityTree(address,address)"(
      admin?: null,
      identityTree?: null
    ): RemoveIdentityTreeEventFilter;
    RemoveIdentityTree(
      admin?: null,
      identityTree?: null
    ): RemoveIdentityTreeEventFilter;
  };

  estimateGas: {
    KEYRING_CREDENTIALS(overrides?: CallOverrides): Promise<BigNumber>;

    "KEYRING_CREDENTIALS()"(overrides?: CallOverrides): Promise<BigNumber>;

    KEYRING_ZK_VERIFIER(overrides?: CallOverrides): Promise<BigNumber>;

    "KEYRING_ZK_VERIFIER()"(overrides?: CallOverrides): Promise<BigNumber>;

    POLICY_MANAGER(overrides?: CallOverrides): Promise<BigNumber>;

    "POLICY_MANAGER()"(overrides?: CallOverrides): Promise<BigNumber>;

    checkPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "checkPolicy(uint32,address)"(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pack12x20(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pack12x20(uint32[12])"(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unpack12x20(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unpack12x20(uint256)"(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateCredentials(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))"(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    KEYRING_CREDENTIALS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "KEYRING_CREDENTIALS()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    KEYRING_ZK_VERIFIER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "KEYRING_ZK_VERIFIER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POLICY_MANAGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POLICY_MANAGER()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "checkPolicy(uint32,address)"(
      policyId: PromiseOrValue<BigNumberish>,
      attestor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pack12x20(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pack12x20(uint32[12])"(
      input: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpack12x20(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "unpack12x20(uint256)"(
      packed: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateCredentials(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "updateCredentials(address,((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256,uint256),((uint256[2],uint256[2][2],uint256[2]),uint256,uint256,uint256[2],uint256))"(
      attestor: PromiseOrValue<string>,
      membershipProof: IKeyringZkVerifier.IdentityMembershipProofStruct,
      authorizationProof: IKeyringZkVerifier.IdentityAuthorisationProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
