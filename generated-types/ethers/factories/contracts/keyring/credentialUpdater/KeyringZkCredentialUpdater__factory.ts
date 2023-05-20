/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  KeyringZkCredentialUpdater,
  KeyringZkCredentialUpdaterInterface,
} from "../../../../contracts/keyring/credentialUpdater/KeyringZkCredentialUpdater";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
      {
        internalType: "address",
        name: "keyringCredentials",
        type: "address",
      },
      {
        internalType: "address",
        name: "policyManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "keyringZkVerifier",
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
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct IKeyringZkVerifier.Groth16Proof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "root",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullifierHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "signalHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "externalNullifier",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IKeyringZkVerifier.IdentityMembershipProof",
        name: "membershipProof",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct IKeyringZkVerifier.Groth16Proof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "externalNullifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullifierHash",
            type: "uint256",
          },
          {
            internalType: "uint256[2]",
            name: "policyDisclosures",
            type: "uint256[2]",
          },
          {
            internalType: "uint256",
            name: "tradingAddress",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IKeyringZkVerifier.IdentityAuthorisationProof",
        name: "authorizationProof",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rootTime",
        type: "uint256",
      },
    ],
    name: "AcceptCredentialUpdate",
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
        name: "identityTree",
        type: "address",
      },
    ],
    name: "AdmitIdentityTree",
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
      {
        indexed: false,
        internalType: "address",
        name: "keyringCache",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "admissionPolicyManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "keyringZkVerifier",
        type: "address",
      },
    ],
    name: "CredentialUpdaterDeployed",
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
        name: "identityTree",
        type: "address",
      },
    ],
    name: "RemoveIdentityTree",
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
    name: "KEYRING_CREDENTIALS",
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
    inputs: [],
    name: "KEYRING_ZK_VERIFIER",
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
    inputs: [],
    name: "POLICY_MANAGER",
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
        internalType: "uint32",
        name: "policyId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "attestor",
        type: "address",
      },
    ],
    name: "checkPolicy",
    outputs: [
      {
        internalType: "bool",
        name: "acceptable",
        type: "bool",
      },
    ],
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
        internalType: "uint32[12]",
        name: "input",
        type: "uint32[12]",
      },
    ],
    name: "pack12x20",
    outputs: [
      {
        internalType: "uint256",
        name: "packed",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "packed",
        type: "uint256",
      },
    ],
    name: "unpack12x20",
    outputs: [
      {
        internalType: "uint32[12]",
        name: "unpacked",
        type: "uint32[12]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "attestor",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct IKeyringZkVerifier.Groth16Proof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "root",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullifierHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "signalHash",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "externalNullifier",
            type: "uint256",
          },
        ],
        internalType: "struct IKeyringZkVerifier.IdentityMembershipProof",
        name: "membershipProof",
        type: "tuple",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint256[2]",
                name: "a",
                type: "uint256[2]",
              },
              {
                internalType: "uint256[2][2]",
                name: "b",
                type: "uint256[2][2]",
              },
              {
                internalType: "uint256[2]",
                name: "c",
                type: "uint256[2]",
              },
            ],
            internalType: "struct IKeyringZkVerifier.Groth16Proof",
            name: "proof",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "externalNullifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nullifierHash",
            type: "uint256",
          },
          {
            internalType: "uint256[2]",
            name: "policyDisclosures",
            type: "uint256[2]",
          },
          {
            internalType: "uint256",
            name: "tradingAddress",
            type: "uint256",
          },
        ],
        internalType: "struct IKeyringZkVerifier.IdentityAuthorisationProof",
        name: "authorizationProof",
        type: "tuple",
      },
    ],
    name: "updateCredentials",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162002098380380620020988339810160408190526200003591620003df565b6001600160a01b03841660808190526200009757604051636415329d60e01b815260206004820181905260248201527f74727573746564466f727761726465722063616e6e6f7420626520656d70747960448201526064015b60405180910390fd5b6001600160a01b038316620000fb57604051636415329d60e01b815260206004820152602260248201527f6b657972696e6743726564656e7469616c732063616e6e6f7420626520656d70604482015261747960f01b60648201526084016200008e565b6001600160a01b0382166200015457604051636415329d60e01b815260206004820152601d60248201527f706f6c6963794d616e616765722063616e6e6f7420626520656d70747900000060448201526064016200008e565b6001600160a01b038116620001b757604051636415329d60e01b815260206004820152602160248201527f6b657972696e675a6b56657269666965722063616e6e6f7420626520656d70746044820152607960f81b60648201526084016200008e565b816001600160a01b031663b16647376040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001f6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200021c91906200043c565b6001600160a01b031660a0526200023e600062000238620002c7565b620002e3565b6001600160a01b0380831660c05283811660e0528116610100527fd6a65ed9fd22292be358ff65b681f133423be56545a443450fc63210aec0e80a62000283620002c7565b604080516001600160a01b03928316815287831660208201528683168183015285831660608201529184166080830152519081900360a00190a15050505062000461565b6000620002de6200038660201b62000d921760201c565b905090565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000382576000828152602081815260408083206001600160a01b03851684529091529020805460ff1916600117905562000341620002c7565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6080516000906001600160a01b03163303620003a9575060131936013560601c90565b620002de620003be60201b62000ddb1760201c565b3390565b80516001600160a01b0381168114620003da57600080fd5b919050565b60008060008060808587031215620003f657600080fd5b6200040185620003c2565b93506200041160208601620003c2565b92506200042160408601620003c2565b91506200043160608601620003c2565b905092959194509250565b6000602082840312156200044f57600080fd5b6200045a82620003c2565b9392505050565b60805160a05160c05160e05161010051611bb3620004e5600039600081816101e601526105900152600081816102ad01528181610960015281816109e70152610a70015260008181610240015281816104160152818161079d015281816108490152610b6901526000610c0f01526000818161019e0152610d960152611bb36000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639937911511610097578063b6c6fd5e11610066578063b6c6fd5e14610262578063b857a93214610282578063d547741f14610295578063fa10441e146102a857600080fd5b806399379115146101e15780639967bd2814610220578063a217fddf14610233578063b566bc421461023b57600080fd5b80632f2ff15d116100d35780632f2ff15d1461016657806336568abe1461017b578063572b6c051461018e57806391d14854146101ce57600080fd5b806301ffc9a7146100fa5780631d27d58714610122578063248a9ca314610143575b600080fd5b61010d610108366004611526565b6102cf565b60405190151581526020015b60405180910390f35b610135610130366004611550565b610306565b604051908152602001610119565b61013561015136600461157b565b60009081526020819052604090206001015490565b6101796101743660046115b0565b610311565b005b6101796101893660046115b0565b61033b565b61010d61019c3660046115dc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b61010d6101dc3660046115b0565b6103ce565b6102087f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610119565b61017961022e3660046115f7565b6103f7565b610135600081565b6102087f000000000000000000000000000000000000000000000000000000000000000081565b61027561027036600461157b565b610b3a565b6040516101199190611653565b61010d61029036600461169f565b610b4b565b6101796102a33660046115b0565b610d6d565b6102087f000000000000000000000000000000000000000000000000000000000000000081565b60006001600160e01b03198216637965db0b60e01b148061030057506301ffc9a760e01b6001600160e01b03198316145b92915050565b600061030082610ddf565b60008281526020819052604090206001015461032c81610f97565b6103368383610fab565b505050565b610343611030565b6001600160a01b0316816001600160a01b0316146103c05760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6103ca828261103a565b5050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b604051630c78f52d60e11b81526001600160a01b0384811660048301527f000000000000000000000000000000000000000000000000000000000000000016906318f1ea5a90602401602060405180830381865afa15801561045d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048191906116c9565b6104c657604051636415329d60e01b81526020600482015260156024820152746174746573746f7220756e61636365707461626c6560581b60448201526064016103b7565b6000806104d1611030565b90506101808301356001600160a01b038083169082161461054757604051636415329d60e01b815260206004820152602960248201527f6f6e6c79207472616465722063616e20757064617465207472616465722063726044820152686564656e7469616c7360b81b60648201526084016103b7565b61010085013560006105636101408701825b6020020135610b3a565b9050600061057661014088016001610559565b604051631d4a24b760e21b81529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063752892dc906105c7908b908b906004016117c0565b602060405180830381865afa1580156105e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060891906116c9565b61064a57604051636415329d60e01b815260206004820152601260248201527150726f6f6620756e61636365707461626c6560701b60448201526064016103b7565b6040516369c2b68b60e01b8152600481018490526000906001600160a01b038b16906369c2b68b90602401602060405180830381865afa158015610692573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b691906117dd565b905060005b6018811015610aee576106cf600c82611822565b156106fa57826106e0600c83611836565b600c81106106f0576106f06116eb565b602002015161071c565b83610706600c83611836565b600c8110610716576107166116eb565b60200201515b975063ffffffff881615610aee57610734888c610b4b565b61078157604051636415329d60e01b815260206004820152601f60248201527f706f6c696379206f72206174746573746f7220756e61636365707461626c650060448201526064016103b7565b60405162878b9360e51b815263ffffffff8916600482015242907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906310f17260906024016020604051808303816000875af11580156107ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610812919061184a565b610825906001600160801b031684611873565b1015610a5957604051631d6e26e760e11b815263ffffffff891660048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690633adc4dce906024016020604051808303816000875af115801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be919061188b565b60405163743a8e6b60e11b81526101008d0135600482015261ffff91909116915081906001600160a01b038e169063e8751cd690602401602060405180830381865afa158015610912573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093691906117dd565b111580156109445750600081115b156109d0576040516309eccfc160e31b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634f667e0890610999908a908d9042906004016118af565b600060405180830381600087803b1580156109b357600080fd5b505af11580156109c7573d6000803e3d6000fd5b50505050610a53565b6040516309eccfc160e31b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634f667e0890610a20908a908d9088906004016118af565b600060405180830381600087803b158015610a3a57600080fd5b505af1158015610a4e573d6000803e3d6000fd5b505050505b50610adc565b6040516309eccfc160e31b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690634f667e0890610aa99089908c9087906004016118af565b600060405180830381600087803b158015610ac357600080fd5b505af1158015610ad7573d6000803e3d6000fd5b505050505b80610ae6816118d6565b9150506106bb565b507f34416ebdfd9fd53e0dffc8748823599941d8a3d3ca8eda76a92659d5aa55efd186868b8b85604051610b269594939291906118ef565b60405180910390a150505050505050505050565b610b42611507565b610300826110bd565b604051632a9c5ced60e21b815263ffffffff831660048201526000907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b0382169063aa7173b490602401602060405180830381865afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde91906116c9565b610bec576000915050610300565b60405163368d4f4160e21b815263ffffffff851660048201526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116916314d0cff39184169063da353d04906024016020604051808303816000875af1158015610c62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8691906117dd565b6040518263ffffffff1660e01b8152600401610ca491815260200190565b602060405180830381865afa158015610cc1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce591906116c9565b158015610d65575060405163a3cf113960e01b815263ffffffff851660048201526001600160a01b03848116602483015282169063a3cf1139906044016020604051808303816000875af1158015610d41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6591906116c9565b949350505050565b600082815260208190526040902060010154610d8881610f97565b610336838361103a565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163303610dd1575060131936013560601c90565b503390565b905090565b3390565b6000610dee6020830183611934565b60141b660ffffffff00000169050610e0c6040830160208401611934565b610e1c9063ffffffff1682611873565b60141b9050610e316060830160408401611934565b610e419063ffffffff1682611873565b60141b9050610e566080830160608401611934565b610e669063ffffffff1682611873565b60141b9050610e7b60a0830160808401611934565b610e8b9063ffffffff1682611873565b60141b9050610ea060c0830160a08401611934565b610eb09063ffffffff1682611873565b60141b9050610ec560e0830160c08401611934565b610ed59063ffffffff1682611873565b60141b9050610eeb610100830160e08401611934565b610efb9063ffffffff1682611873565b60141b9050610f1261012083016101008401611934565b610f229063ffffffff1682611873565b60141b9050610f3961014083016101208401611934565b610f499063ffffffff1682611873565b60141b9050610f6061016083016101408401611934565b610f709063ffffffff1682611873565b60141b9050610f8761018083016101608401611934565b6103009063ffffffff1682611873565b610fa881610fa3611030565b6112f9565b50565b610fb582826103ce565b6103ca576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610fec611030565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610dd6610d92565b61104482826103ce565b156103ca576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055611079611030565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6110c5611507565b816001600160f01b031682146111125760405162461bcd60e51b8152602060048201526012602482015271696e707574206f7574206f662072616e676560701b60448201526064016103b7565b600161112060146002611a33565b61112a9190611a42565b821663ffffffff16610160820152601491821c9160019061114c906002611a33565b6111569190611a42565b821663ffffffff16610140820152601491821c91600190611178906002611a33565b6111829190611a42565b821663ffffffff16610120820152601491821c916001906111a4906002611a33565b6111ae9190611a42565b821663ffffffff16610100820152601491821c916001906111d0906002611a33565b6111da9190611a42565b821663ffffffff1660e0820152601491821c916001906111fb906002611a33565b6112059190611a42565b821663ffffffff1660c0820152601491821c91600190611226906002611a33565b6112309190611a42565b821663ffffffff1660a0820152601491821c91600190611251906002611a33565b61125b9190611a42565b821663ffffffff166080820152601491821c9160019061127c906002611a33565b6112869190611a42565b821663ffffffff166060820152601491821c916001906112a7906002611a33565b6112b19190611a42565b821663ffffffff166040820152601491821c916001906112d2906002611a33565b6112dc9190611a42565b63ffffffff9083168116602083015260149290921c909116815290565b61130382826103ce565b6103ca5761131081611352565b61131b836020611364565b60405160200161132c929190611a89565b60408051601f198184030181529082905262461bcd60e51b82526103b791600401611afe565b60606103006001600160a01b03831660145b60606000611373836002611b31565b61137e906002611873565b67ffffffffffffffff81111561139657611396611b50565b6040519080825280601f01601f1916602001820160405280156113c0576020820181803683370190505b509050600360fc1b816000815181106113db576113db6116eb565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061140a5761140a6116eb565b60200101906001600160f81b031916908160001a905350600061142e846002611b31565b611439906001611873565b90505b60018111156114b1576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061146d5761146d6116eb565b1a60f81b828281518110611483576114836116eb565b60200101906001600160f81b031916908160001a90535060049490941c936114aa81611b66565b905061143c565b5083156115005760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016103b7565b9392505050565b604051806101800160405280600c906020820280368337509192915050565b60006020828403121561153857600080fd5b81356001600160e01b03198116811461150057600080fd5b600061018080838503121561156457600080fd5b83818401111561157357600080fd5b509092915050565b60006020828403121561158d57600080fd5b5035919050565b80356001600160a01b03811681146115ab57600080fd5b919050565b600080604083850312156115c357600080fd5b823591506115d360208401611594565b90509250929050565b6000602082840312156115ee57600080fd5b61150082611594565b600080600083850361034081121561160e57600080fd5b61161785611594565b9350610180601f198201121561162c57600080fd5b6020850192506101a08061019f198301121561164757600080fd5b93969295505050910190565b6101808101818360005b600c81101561168257815163ffffffff1683526020928301929091019060010161165d565b50505092915050565b803563ffffffff811681146115ab57600080fd5b600080604083850312156116b257600080fd5b6116bb8361168b565b91506115d360208401611594565b6000602082840312156116db57600080fd5b8151801515811461150057600080fd5b634e487b7160e01b600052603260045260246000fd5b60408082843760008382018181528383019190815b600281101561173657848483379084018281529284019290600101611716565b50508260c0850160c0870137806101008601525050505050565b61175a8282611701565b61010081810135908301526101208082013590830152610140808201359083015261016090810135910152565b6117918282611701565b610100818101359083015261012080820135908301526101406040818301828501375061018090810135910152565b61032081016117cf8285611750565b611500610180830184611787565b6000602082840312156117ef57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082611831576118316117f6565b500490565b600082611845576118456117f6565b500690565b60006020828403121561185c57600080fd5b81516001600160801b038116811461150057600080fd5b600082198211156118865761188661180c565b500190565b60006020828403121561189d57600080fd5b815161ffff8116811461150057600080fd5b6001600160a01b0393909316835263ffffffff919091166020830152604082015260600190565b6000600182016118e8576118e861180c565b5060010190565b6001600160a01b0386811682528516602082015261038081016119156040830186611750565b6119236101c0830185611787565b826103608301529695505050505050565b60006020828403121561194657600080fd5b6115008261168b565b600181815b8085111561198a5781600019048211156119705761197061180c565b8085161561197d57918102915b93841c9390800290611954565b509250929050565b6000826119a157506001610300565b816119ae57506000610300565b81600181146119c457600281146119ce576119ea565b6001915050610300565b60ff8411156119df576119df61180c565b50506001821b610300565b5060208310610133831016604e8410600b8410161715611a0d575081810a610300565b611a17838361194f565b8060001904821115611a2b57611a2b61180c565b029392505050565b600061150060ff841683611992565b600082821015611a5457611a5461180c565b500390565b60005b83811015611a74578181015183820152602001611a5c565b83811115611a83576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611ac1816017850160208801611a59565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611af2816028840160208801611a59565b01602801949350505050565b6020815260008251806020840152611b1d816040850160208701611a59565b601f01601f19169190910160400192915050565b6000816000190483118215151615611b4b57611b4b61180c565b500290565b634e487b7160e01b600052604160045260246000fd5b600081611b7557611b7561180c565b50600019019056fea2646970667358221220e46959b4afc875f1615e3b1990cc185e21f16374e0cf35d1161acb4c0edbfb3664736f6c634300080e0033";

type KeyringZkCredentialUpdaterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeyringZkCredentialUpdaterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KeyringZkCredentialUpdater__factory extends ContractFactory {
  constructor(...args: KeyringZkCredentialUpdaterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "KeyringZkCredentialUpdater";
  }

  override deploy(
    trustedForwarder: PromiseOrValue<string>,
    keyringCredentials: PromiseOrValue<string>,
    policyManager: PromiseOrValue<string>,
    keyringZkVerifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KeyringZkCredentialUpdater> {
    return super.deploy(
      trustedForwarder,
      keyringCredentials,
      policyManager,
      keyringZkVerifier,
      overrides || {}
    ) as Promise<KeyringZkCredentialUpdater>;
  }
  override getDeployTransaction(
    trustedForwarder: PromiseOrValue<string>,
    keyringCredentials: PromiseOrValue<string>,
    policyManager: PromiseOrValue<string>,
    keyringZkVerifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      trustedForwarder,
      keyringCredentials,
      policyManager,
      keyringZkVerifier,
      overrides || {}
    );
  }
  override attach(address: string): KeyringZkCredentialUpdater {
    return super.attach(address) as KeyringZkCredentialUpdater;
  }
  override connect(signer: Signer): KeyringZkCredentialUpdater__factory {
    return super.connect(signer) as KeyringZkCredentialUpdater__factory;
  }
  static readonly contractName: "KeyringZkCredentialUpdater";

  public readonly contractName: "KeyringZkCredentialUpdater";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeyringZkCredentialUpdaterInterface {
    return new utils.Interface(_abi) as KeyringZkCredentialUpdaterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeyringZkCredentialUpdater {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as KeyringZkCredentialUpdater;
  }
}
