/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  WalletCheck,
  WalletCheckInterface,
} from "../../../../contracts/keyring/walletCheck/WalletCheck";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
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
    name: "Unauthorized",
    type: "error",
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
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isWhitelisted",
        type: "bool",
      },
    ],
    name: "SetWalletWhitelist",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "ROLE_WALLETCHECK_ADMIN",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "birthday",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "bool",
        name: "whitelisted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "setWalletWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000dd838038062000dd88339810160408190526200003491620001fa565b6001600160a01b03811660808190526200009557604051636415329d60e01b815260206004820181905260248201527f74727573746564466f727761726465722063616e6e6f7420626520656d707479604482015260640160405180910390fd5b620000ab6000620000a5620000ff565b6200011b565b7f09e48df7857bd0c1e0d31bb8a85d42cf1874817895f171c917f6ee2cea73ec20620000d6620000ff565b604080516001600160a01b03928316815291841660208301520160405180910390a1506200022c565b600062000116620001be60201b6200045e1760201c565b905090565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620001ba576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905562000179620000ff565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6080516000906001600160a01b03163303620001e1575060131936013560601c90565b62000116620001f660201b620004a71760201c565b3390565b6000602082840312156200020d57600080fd5b81516001600160a01b03811681146200022557600080fd5b9392505050565b608051610b896200024f6000396000818161013f01526104620152610b896000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80636037e28e116100715780636037e28e1461016f5780636405427e1461018257806391d14854146101a9578063a217fddf146101bc578063cc2276f9146101c4578063d547741f146101e457600080fd5b806301ffc9a7146100ae578063248a9ca3146100d65780632f2ff15d1461010757806336568abe1461011c578063572b6c051461012f575b600080fd5b6100c16100bc36600461080c565b6101f7565b60405190151581526020015b60405180910390f35b6100f96100e4366004610836565b60009081526020819052604090206001015490565b6040519081526020016100cd565b61011a61011536600461086b565b61022e565b005b61011a61012a36600461086b565b610258565b6100c161013d366004610897565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b61011a61017d3660046108b2565b6102eb565b6100f97fcb0f6c96d7dfd763910bd5cacff5081db1d670a66b2409dda99c422794a1130d81565b6100c16101b736600461086b565b610410565b6100f9600081565b6100f96101d2366004610897565b60336020526000908152604090205481565b61011a6101f236600461086b565b610439565b60006001600160e01b03198216637965db0b60e01b148061022857506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082815260208190526040902060010154610249816104ab565b61025383836104bf565b505050565b610260610544565b6001600160a01b0316816001600160a01b0316146102dd5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6102e7828261054e565b5050565b6103357fcb0f6c96d7dfd763910bd5cacff5081db1d670a66b2409dda99c422794a1130d610317610544565b604051806060016040528060218152602001610b33602191396105d1565b4281111561039057604051636415329d60e01b815260206004820152602160248201527f74696d657374616d702063616e6e6f7420626520696e207468652066757475726044820152606560f81b60648201526084016102d4565b8161039c57600061039e565b805b6001600160a01b0384166000908152603360205260409020557f2a8beb5408e965f3e17bbef577a356a78a8533a26cef6418f730a5cbde69b3666103e0610544565b604080516001600160a01b03928316815291861660208301528415159082015260600160405180910390a1505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b600082815260208190526040902060010154610454816104ab565b610253838361054e565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361049d575060131936013560601c90565b503390565b905090565b3390565b6104bc816104b7610544565b6105fe565b50565b6104c98282610410565b6102e7576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610500610544565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006104a261045e565b6105588282610410565b156102e7576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916905561058d610544565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6105db8383610410565b6102535781838260405163e77d8f6160e01b81526004016102d493929190610952565b6106088282610410565b6102e75761061581610657565b610620836020610669565b604051602001610631929190610a1a565b60408051601f198184030181529082905262461bcd60e51b82526102d491600401610a8f565b60606102286001600160a01b03831660145b60606000610678836002610ab8565b610683906002610ad7565b67ffffffffffffffff81111561069b5761069b610aef565b6040519080825280601f01601f1916602001820160405280156106c5576020820181803683370190505b509050600360fc1b816000815181106106e0576106e0610b05565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061070f5761070f610b05565b60200101906001600160f81b031916908160001a9053506000610733846002610ab8565b61073e906001610ad7565b90505b60018111156107b6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061077257610772610b05565b1a60f81b82828151811061078857610788610b05565b60200101906001600160f81b031916908160001a90535060049490941c936107af81610b1b565b9050610741565b5083156108055760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016102d4565b9392505050565b60006020828403121561081e57600080fd5b81356001600160e01b03198116811461080557600080fd5b60006020828403121561084857600080fd5b5035919050565b80356001600160a01b038116811461086657600080fd5b919050565b6000806040838503121561087e57600080fd5b8235915061088e6020840161084f565b90509250929050565b6000602082840312156108a957600080fd5b6108058261084f565b6000806000606084860312156108c757600080fd5b6108d08461084f565b9250602084013580151581146108e557600080fd5b929592945050506040919091013590565b60005b838110156109115781810151838201526020016108f9565b83811115610920576000848401525b50505050565b6000815180845261093e8160208601602086016108f6565b601f01601f19169290920160200192915050565b60018060a01b038416815260c06020820152601460c08201527312d95e5c9a5b99d058d8d95cdcd0dbdb9d1c9bdb60621b60e08201526000610100806040840152600a8184015250695f636865636b526f6c6560b01b610120830152610140846060840152806080840152602681840152507f73656e64657220646f6573206e6f742068617665207468652072657175697265610160830152656420726f6c6560d01b6101808301526101a08060a0840152610a1081840185610926565b9695505050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610a528160178501602088016108f6565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610a838160288401602088016108f6565b01602801949350505050565b6020815260006108056020830184610926565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610ad257610ad2610aa2565b500290565b60008219821115610aea57610aea610aa2565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610b2a57610b2a610aa2565b50600019019056fe57616c6c6574436865636b3a3a6f6e6c7957616c6c6574436865636b41646d696ea264697066735822122036d34d1392ec5d17f64713beec842399a0bf8d6dc62b5cfa59e125f0298f571464736f6c634300080e0033";

type WalletCheckConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WalletCheckConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WalletCheck__factory extends ContractFactory {
  constructor(...args: WalletCheckConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "WalletCheck";
  }

  override deploy(
    trustedForwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WalletCheck> {
    return super.deploy(
      trustedForwarder,
      overrides || {}
    ) as Promise<WalletCheck>;
  }
  override getDeployTransaction(
    trustedForwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(trustedForwarder, overrides || {});
  }
  override attach(address: string): WalletCheck {
    return super.attach(address) as WalletCheck;
  }
  override connect(signer: Signer): WalletCheck__factory {
    return super.connect(signer) as WalletCheck__factory;
  }
  static readonly contractName: "WalletCheck";

  public readonly contractName: "WalletCheck";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WalletCheckInterface {
    return new utils.Interface(_abi) as WalletCheckInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WalletCheck {
    return new Contract(address, _abi, signerOrProvider) as WalletCheck;
  }
}
