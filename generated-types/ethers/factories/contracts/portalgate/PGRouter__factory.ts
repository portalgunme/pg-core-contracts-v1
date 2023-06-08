/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PGRouter,
  PGRouterInterface,
} from "../../../contracts/portalgate/PGRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tornadoTrees",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_instanceRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_relayerRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "encryptedNote",
        type: "bytes",
      },
    ],
    name: "EncryptedNote",
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
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ITornadoTrees",
        name: "addr",
        type: "address",
      },
    ],
    name: "TornadoTreesUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approveExactToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_encryptedNotes",
        type: "bytes[]",
      },
    ],
    name: "backupNotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "_tornado",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_encryptedNote",
        type: "bytes",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
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
        name: "_tornadoTrees",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_instanceRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_relayerRegistry",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "instanceRegistry",
    outputs: [
      {
        internalType: "contract InstanceRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "relayerRegistry",
    outputs: [
      {
        internalType: "contract RelayerRegistry",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoTrees",
        name: "_tornadoTrees",
        type: "address",
      },
    ],
    name: "setTornadoTreesContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tornadoTrees",
    outputs: [
      {
        internalType: "contract ITornadoTrees",
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
        internalType: "contract ITornadoInstance",
        name: "_tornado",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_relayer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_refund",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001763380380620017638339810160408190526200003491620000b5565b600380546001600160a01b039586166001600160a01b03199182161790915560008054948616620100000262010000600160b01b03199095169490941790935560018054928516928416929092179091556002805491909316911617905562000112565b80516001600160a01b0381168114620000b057600080fd5b919050565b60008060008060808587031215620000cc57600080fd5b620000d78562000098565b9350620000e76020860162000098565b9250620000f76040860162000098565b9150620001076060860162000098565b905092959194509250565b61164180620001226000396000f3fe60806040526004361061009c5760003560e01c80635aa6e675116100645780635aa6e675146101525780636485ba2a14610178578063b438689f14610198578063cea9d26f146101ab578063e2658c9c146101cb578063f8c8765e146101eb57600080fd5b806313d98d13146100a157806336a3874b146100b65780633cb837fd146100f25780633ef107831461011257806347ff589d14610132575b600080fd5b6100b46100af366004611169565b61020b565b005b3480156100c257600080fd5b506001546100d6906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b3480156100fe57600080fd5b506003546100d6906001600160a01b031681565b34801561011e57600080fd5b506100b461012d3660046111c5565b61054a565b34801561013e57600080fd5b506002546100d6906001600160a01b031681565b34801561015e57600080fd5b506000546100d6906201000090046001600160a01b031681565b34801561018457600080fd5b506100b4610193366004611206565b6105ae565b6100b46101a636600461127b565b610627565b3480156101b757600080fd5b506100b46101c63660046111c5565b610933565b3480156101d757600080fd5b506100b46101e636600461131e565b610b1c565b3480156101f757600080fd5b506100b461020636600461133b565b610b70565b60015460405163032bb44360e01b81526001600160a01b038681166004830152600092839283928392169063032bb4439060240160c060405180830381865afa15801561025c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028091906113ac565b955050509350935093506000600181111561029d5761029d61143b565b8260018111156102af576102af61143b565b036103015760405162461bcd60e51b815260206004820152601d60248201527f54686520696e7374616e6365206973206e6f7420737570706f7274656400000060448201526064015b60405180910390fd5b6040516370a0823160e01b81526001600160a01b0389811660048301528291908516906370a0823190602401602060405180830381865afa15801561034a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036e9190611451565b106103bb5760405162461bcd60e51b815260206004820152601f60248201527f457863656564206465706f7369742043617020666f722074686520706f6f6c0060448201526064016102f8565b831561043a5761043a33308a6001600160a01b0316638bca6d166040518163ffffffff1660e01b8152600401602060405180830381865afa158015610404573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104289190611451565b6001600160a01b038716929190610cd5565b60405163b214faa560e01b8152600481018890526001600160a01b0389169063b214faa59034906024016000604051808303818588803b15801561047d57600080fd5b505af1158015610491573d6000803e3d6000fd5b505060035460405163c6758d6b60e01b81526001600160a01b038d81166004830152602482018d9052909116935063c6758d6b92506044019050600060405180830381600087803b1580156104e557600080fd5b505af11580156104f9573d6000803e3d6000fd5b50505050336001600160a01b03167ffa28df43db3553771f7209dcef046f3bdfea15870ab625dcda30ac58b82b40088787604051610538929190611493565b60405180910390a25050505050505050565b6001546001600160a01b031633146105955760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064016102f8565b6105a96001600160a01b0384168383610d46565b505050565b60005b818110156105a957337ffa28df43db3553771f7209dcef046f3bdfea15870ab625dcda30ac58b82b40088484848181106105ed576105ed6114a7565b90506020028101906105ff91906114bd565b60405161060d929190611493565b60405180910390a28061061f81611504565b9150506105b1565b60015460405163032bb44360e01b81526001600160a01b038b81166004830152600092169063032bb4439060240160c060405180830381865afa158015610672573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069691906113ac565b50919450600093506106a792505050565b8160018111156106b9576106b961143b565b036107065760405162461bcd60e51b815260206004820152601d60248201527f54686520696e7374616e6365206973206e6f7420737570706f7274656400000060448201526064016102f8565b846001600160a01b0316846001600160a01b0316146108535760025460405163fb04c93960e01b81526001600160a01b0386811660048301529091169063fb04c93990602401602060405180830381865afa158015610769573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078d919061152b565b8015610800575060025460405163fb04c93960e01b81523360048201526001600160a01b039091169063fb04c93990602401602060405180830381865afa1580156107dc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610800919061152b565b80156108145750336001600160a01b038516145b6108535760405162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2102932b630bcb2b91760811b60448201526064016102f8565b6040516310d056db60e11b81526001600160a01b038b16906321a0adb690349061088f908d908d908d908d908d908d908d908d90600401611546565b6000604051808303818588803b1580156108a857600080fd5b505af11580156108bc573d6000803e3d6000fd5b5050600354604051620d70c960e51b81526001600160a01b038f81166004830152602482018c905290911693506301ae192092506044019050600060405180830381600087803b15801561090f57600080fd5b505af1158015610923573d6000803e3d6000fd5b5050505050505050505050505050565b6000546201000090046001600160a01b031633146109845760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064016102f8565b6001600160a01b0382166109da5760405162461bcd60e51b815260206004820181905260248201527f50473a2063616e206e6f742073656e6420746f207a65726f206164647265737360448201526064016102f8565b6001600160a01b038316610a36574760006109f58284610e5b565b6040519091506001600160a01b0385169082156108fc029083906000818181858888f19350505050158015610a2e573d6000803e3d6000fd5b505050505050565b6040516370a0823160e01b81523060048201526000906001600160a01b038516906370a0823190602401602060405180830381865afa158015610a7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa19190611451565b90506000610aaf8284610e5b565b905060008111610b015760405162461bcd60e51b815260206004820152601c60248201527f50473a20747279696e6720746f2073656e6420302062616c616e63650000000060448201526064016102f8565b610b156001600160a01b0386168583610e73565b5050505050565b600380546001600160a01b0319166001600160a01b0383169081179091556040519081527fd5ef75672982cb39cc849450302ce426d1655271003cae8a66cb533c12f86ecc9060200160405180910390a150565b600054610100900460ff1615808015610b905750600054600160ff909116105b80610baa5750303b158015610baa575060005460ff166001145b610c0d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102f8565b6000805460ff191660011790558015610c30576000805461ff0019166101001790555b600380546001600160a01b03199081166001600160a01b03888116919091179092556000805462010000600160b01b0319166201000088851602179055600180548216868416179055600280549091169184169190911790558015610b15576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610d409085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610ea3565b50505050565b801580610dc05750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610d9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dbe9190611451565b155b610e2b5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016102f8565b6040516001600160a01b0383166024820152604481018290526105a990849063095ea7b360e01b90606401610d09565b6000818310610e6a5781610e6c565b825b9392505050565b6040516001600160a01b0383166024820152604481018290526105a990849063a9059cbb60e01b90606401610d09565b6000610ef8826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f789092919063ffffffff16565b9050805160001480610f19575080806020019051810190610f19919061152b565b6105a95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016102f8565b6060610f878484600085610f8f565b949350505050565b606082471015610ff05760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016102f8565b600080866001600160a01b0316858760405161100c91906115bc565b60006040518083038185875af1925050503d8060008114611049576040519150601f19603f3d011682016040523d82523d6000602084013e61104e565b606091505b509150915061105f8783838761106a565b979650505050505050565b606083156110d95782516000036110d2576001600160a01b0385163b6110d25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102f8565b5081610f87565b610f8783838151156110ee5781518083602001fd5b8060405162461bcd60e51b81526004016102f891906115d8565b6001600160a01b038116811461111d57600080fd5b50565b60008083601f84011261113257600080fd5b50813567ffffffffffffffff81111561114a57600080fd5b60208301915083602082850101111561116257600080fd5b9250929050565b6000806000806060858703121561117f57600080fd5b843561118a81611108565b935060208501359250604085013567ffffffffffffffff8111156111ad57600080fd5b6111b987828801611120565b95989497509550505050565b6000806000606084860312156111da57600080fd5b83356111e581611108565b925060208401356111f581611108565b929592945050506040919091013590565b6000806020838503121561121957600080fd5b823567ffffffffffffffff8082111561123157600080fd5b818501915085601f83011261124557600080fd5b81358181111561125457600080fd5b8660208260051b850101111561126957600080fd5b60209290920196919550909350505050565b60008060008060008060008060006101008a8c03121561129a57600080fd5b89356112a581611108565b985060208a013567ffffffffffffffff8111156112c157600080fd5b6112cd8c828d01611120565b90995097505060408a0135955060608a0135945060808a01356112ef81611108565b935060a08a01356112ff81611108565b8093505060c08a0135915060e08a013590509295985092959850929598565b60006020828403121561133057600080fd5b8135610e6c81611108565b6000806000806080858703121561135157600080fd5b843561135c81611108565b9350602085013561136c81611108565b9250604085013561137c81611108565b9150606085013561138c81611108565b939692955090935050565b805180151581146113a757600080fd5b919050565b60008060008060008060c087890312156113c557600080fd5b6113ce87611397565b955060208701516113de81611108565b6040880151909550600281106113f357600080fd5b606088015190945062ffffff8116811461140c57600080fd5b608088015190935063ffffffff8116811461142657600080fd5b8092505060a087015190509295509295509295565b634e487b7160e01b600052602160045260246000fd5b60006020828403121561146357600080fd5b5051919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610f8760208301848661146a565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126114d457600080fd5b83018035915067ffffffffffffffff8211156114ef57600080fd5b60200191503681900382131561116257600080fd5b60006001820161152457634e487b7160e01b600052601160045260246000fd5b5060010190565b60006020828403121561153d57600080fd5b610e6c82611397565b60e08152600061155a60e083018a8c61146a565b60208301989098525060408101959095526001600160a01b03938416606086015291909216608084015260a083019190915260c09091015292915050565b60005b838110156115b357818101518382015260200161159b565b50506000910152565b600082516115ce818460208701611598565b9190910192915050565b60208152600082518060208401526115f7816040850160208701611598565b601f01601f1916919091016040019291505056fea26469706673582212207fa0d8b48d542952c2d7a4f7060791f83e891d613e52a758422cca85aabe1ba964736f6c63430008130033";

type PGRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PGRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PGRouter__factory extends ContractFactory {
  constructor(...args: PGRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PGRouter";
  }

  override deploy(
    _tornadoTrees: PromiseOrValue<string>,
    _governance: PromiseOrValue<string>,
    _instanceRegistry: PromiseOrValue<string>,
    _relayerRegistry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PGRouter> {
    return super.deploy(
      _tornadoTrees,
      _governance,
      _instanceRegistry,
      _relayerRegistry,
      overrides || {}
    ) as Promise<PGRouter>;
  }
  override getDeployTransaction(
    _tornadoTrees: PromiseOrValue<string>,
    _governance: PromiseOrValue<string>,
    _instanceRegistry: PromiseOrValue<string>,
    _relayerRegistry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tornadoTrees,
      _governance,
      _instanceRegistry,
      _relayerRegistry,
      overrides || {}
    );
  }
  override attach(address: string): PGRouter {
    return super.attach(address) as PGRouter;
  }
  override connect(signer: Signer): PGRouter__factory {
    return super.connect(signer) as PGRouter__factory;
  }
  static readonly contractName: "PGRouter";

  public readonly contractName: "PGRouter";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PGRouterInterface {
    return new utils.Interface(_abi) as PGRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PGRouter {
    return new Contract(address, _abi, signerOrProvider) as PGRouter;
  }
}
