/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PolicyStorage,
  PolicyStorageInterface,
} from "../../../../contracts/keyring/lib/PolicyStorage";

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
    name: "AddressSetConsistency",
    type: "error",
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
] as const;

const _bytecode =
  "0x61240761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101575760003560e01c80638de1f48e116100cd578063b7050fe511610086578063b7050fe5146103e4578063bb4dbf5414610404578063d661073a14610424578063eb9b928a14610444578063f83fe6f11461048a578063f98a92aa146104aa57600080fd5b80638de1f48e1461030f5780639726fea31461032f5780639b6d54981461034f578063a3cfaede1461036f578063aa87c5491461038f578063b7013218146103c457600080fd5b8063360e68ae1161011f578063360e68ae1461022d57806348db64111461024d5780635c4a96ff146102735780635c9968531461029357806360707095146102b35780636332e646146102ef57600080fd5b80630a2c66a31461015c57806313c4521f1461019e578063179fd58e146101be57806318e50e41146101d157806322c1d197146101f1575b600080fd5b81801561016857600080fd5b5061019c6101773660046119c7565b6006909101805461ffff909216600160401b0261ffff60401b19909216919091179055565b005b8180156101aa57600080fd5b5061019c6101b9366004611a3e565b6104d9565b61019c6101cc366004611a89565b61052c565b8180156101dd57600080fd5b5061019c6101ec366004611ab9565b610584565b8180156101fd57600080fd5b5061019c61020c366004611aea565b60069091018054911515600160501b0260ff60501b19909216919091179055565b81801561023957600080fd5b5061019c610248366004611ab9565b6105b0565b61026061025b366004611b2e565b6105d8565b6040519081526020015b60405180910390f35b81801561027f57600080fd5b5061019c61028e366004611b51565b61060b565b81801561029f57600080fd5b5061019c6102ae366004611c3b565b6106bb565b8180156102bf57600080fd5b5061019c6102ce366004611aea565b60069091018054911515600160581b0260ff60581b19909216919091179055565b8180156102fb57600080fd5b5061019c61030a366004611d17565b610758565b81801561031b57600080fd5b5061019c61032a366004611b2e565b61079e565b81801561033b57600080fd5b5061019c61034a366004611d5d565b610818565b81801561035b57600080fd5b5061019c61036a366004611b2e565b61086d565b81801561037b57600080fd5b5061019c61038a366004611daf565b610c68565b81801561039b57600080fd5b506103af6103aa366004611e0c565b610caa565b60405163ffffffff909116815260200161026a565b8180156103d057600080fd5b5061019c6103df366004611eae565b610ed3565b8180156103f057600080fd5b5061019c6103ff366004611c3b565b610f3a565b81801561041057600080fd5b5061019c61041f366004611eea565b611001565b81801561043057600080fd5b5061019c61043f366004611f59565b6110e7565b81801561045057600080fd5b5061019c61045f366004611b2e565b6006909101805463ffffffff9092166401000000000267ffffffff0000000019909216919091179055565b81801561049657600080fd5b5061019c6104a5366004611ab9565b61119a565b6104c96104b8366004611a89565b60030154600160581b900460ff1690565b604051901515815260200161026a565b60005b8181101561052657610514848484848181106104fa576104fa611f8e565b905060200201602081019061050f9190611fa4565b611219565b8061051e81611fdc565b9150506104dc565b50505050565b6003810154600160581b900460ff161561058157604051636415329d60e01b815260206004820152601060248201526f1c1bdb1a58de481a5cc81b1bd8dad95960821b60448201526064015b60405180910390fd5b50565b6105ac816040518060600160405280602581526020016122dd602591396004850191906112a5565b5050565b6105ac816040518060600160405280602281526020016123b0602291396001850191906112a5565b6000826000018263ffffffff16815481106105f5576105f5611f8e565b9060005260206000209060130201905092915050565b6040516333081d8560e01b8152600481018390526001600160a01b038216906333081d8590602401602060405180830381865afa158015610650573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106749190611ff5565b6106b257604051636415329d60e01b815260206004820152600e60248201526d1c9d5b19481b9bdd08199bdd5b9960921b6044820152606401610578565b50600490910155565b6106c860018401836113d2565b6106e557604051636415329d60e01b815260040161057890612012565b805160000361072d57604051636415329d60e01b81526020600482015260136024820152727572692063616e6e6f7420626520656d70747960681b6044820152606401610578565b6001600160a01b0382166000908152600384016020908152604090912082516105269284019061189c565b60005b8151811015610799576107878383838151811061077a5761077a611f8e565b6020026020010151611437565b8061079181611fdc565b91505061075b565b505050565b6303c2670063ffffffff821611156107f957604051636415329d60e01b815260206004820152601c60248201527f74746c2065786365656473206d6178696d756d206475726174696f6e000000006044820152606401610578565b600691909101805463ffffffff191663ffffffff909216919091179055565b60005b8181101561086657610854858585858581811061083a5761083a611f8e565b905060200201602081019061084f9190611fa4565b611561565b8061085e81611fdc565b91505061081b565b5050505050565b6000826000018263ffffffff168154811061088a5761088a611f8e565b600091825260208220601391909102018054600a82015491935091506000821180156108b65750428211155b1561086657600483018054600185019081556005850180546002870191906108dd9061203e565b6108e8929190611920565b506002918201805491909201805463ffffffff92831663ffffffff19821681178355845467ffffffffffffffff1990921617640100000000918290049093160291909117808255825461ffff60401b198216600160401b9182900461ffff16909102908117835583546affffff00000000000000001990921660ff60501b1990911617600160501b9182900460ff908116151590920217808355925460ff60581b19909316600160581b9384900490911615159092029190911790555b8015610a4e5760006109d460016109c0600987016001015490565b6109ca9190612072565b6009860190611648565b60408051808201909152601b81526000805160206123258339815191526020820152909150610a09906007860190839061167b565b60408051808201909152601b81526000805160206123258339815191526020820152610a3b90600986019083906112a5565b81610a4581612089565b925050506109a5565b50600c8201545b8015610afe576000610a846001610a70600b87016001015490565b610a7a9190612072565b600b860190611648565b60408051808201909152601b81526000805160206123258339815191526020820152909150610ab990600786019083906112a5565b60408051808201909152601b81526000805160206123258339815191526020820152610aeb90600b86019083906112a5565b81610af581612089565b92505050610a55565b5060108201545b8015610bae576000610b346001610b20600f87016001015490565b610b2a9190612072565b600f860190611648565b60408051808201909152601b81526000805160206123258339815191526020820152909150610b6990600d860190839061167b565b60408051808201909152601b81526000805160206123258339815191526020820152610b9b90600f86019083906112a5565b81610ba581612089565b92505050610b05565b5060128201545b8015610c5e576000610be46001610bd0601187016001015490565b610bda9190612072565b6011860190611648565b60408051808201909152601b81526000805160206123258339815191526020820152909150610c1990600d86019083906112a5565b60408051808201909152601b81526000805160206123258339815191526020820152610c4b90601186019083906112a5565b81610c5581612089565b92505050610bb5565b5050600090555050565b60005b815181101561052657610c988484848481518110610c8b57610c8b611f8e565b602002602001015161171e565b80610ca281611fdc565b915050610c6b565b845460019081018087556000878152918291610cc69190612072565b91506210000063ffffffff831610610d1957604051636415329d60e01b81526020600482015260156024820152741b585e081c1bdb1a58da595cc8195e18d959591959605a1b6044820152606401610578565b6000610d2588846105d8565b905042610d3589858a8885611001565b610d3f898561086d565b600092505b8651831015610def576000878481518110610d6157610d61611f8e565b60200260200101519050610d81818b6001016113d290919063ffffffff16565b610d9e57604051636415329d60e01b815260040161057890612012565b604080518082019091526017815276506f6c69637953746f726167653a6e6577506f6c69637960481b6020820152610ddc906007850190839061167b565b5082610de781611fdc565b935050610d44565b600092505b8551831015610ec7576000868481518110610e1157610e11611f8e565b60200260200101519050610e31818b6004016113d290919063ffffffff16565b610e7657604051636415329d60e01b81526020600482015260156024820152741dd85b1b195d10da1958dac81b9bdd08199bdd5b99605a1b6044820152606401610578565b604080518082019091526017815276506f6c69637953746f726167653a6e6577506f6c69637960481b6020820152610eb490600d850190839061167b565b5082610ebf81611fdc565b935050610df4565b50505095945050505050565b8051600003610f2557604051636415329d60e01b815260206004820152601f60248201527f6465736372697074696f6e557466382063616e6e6f7420626520656d707479006044820152606401610578565b8051610799906005840190602084019061189c565b6001600160a01b038216610f9157604051636415329d60e01b815260206004820152601860248201527f6174746573746f722063616e6e6f7420626520656d70747900000000000000006044820152606401610578565b8051600003610fd957604051636415329d60e01b81526020600482015260136024820152727572692063616e6e6f7420626520656d70747960681b6044820152606401610578565b61072d8260405180606001604052806022815260200161236a6022913960018601919061167b565b600061100d86866105d8565b9050611019868661086d565b6110258185358561060b565b6110708161103660208701876120a0565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ed392505050565b6110848161032a60608701604088016120e6565b6110988161045f60808701606088016120e6565b6110ac8161017760a0870160808801612101565b6110c08161020c60c0870160a0880161211c565b6110d4816102ce60e0870160c0880161211c565b6110df8686846110e7565b505050505050565b6000836000018363ffffffff168154811061110457611104611f8e565b9060005260206000209060130201905061111d8161052c565b81158015906111475750600381015461114490640100000000900463ffffffff1642612139565b82105b1561119557604051636415329d60e01b815260206004820181905260248201527f646561646c696e6520696e207468652070617374206f7220746f6f20736f6f6e6044820152606401610578565b555050565b6001600160a01b0381166111f157604051636415329d60e01b815260206004820152601b60248201527f77616c6c6574436865636b2063616e6e6f7420626520656d70747900000000006044820152606401610578565b6105ac816040518060600160405280602581526020016123456025913960048501919061167b565b61122660098301826113d2565b15611253576105ac81604051806060016040528060238152602001612302602391396009850191906112a5565b61126060078301826113d2565b61127d57604051636415329d60e01b815260040161057890612012565b6105ac8160405180606001604052806023815260200161230260239139600b8501919061167b565b6112af83836113d2565b6112ee57604080518082018252600a8152691059191c995cdcd4d95d60b21b60208201529051633bce1ae360e01b81526105789190839060040161219e565b6001838101805460009261130191612072565b8154811061131157611311611f8e565b60009182526020808320909101546001600160a01b0386811684529187905260408084205492909116808452922081905560018601805492935090918391908390811061136057611360611f8e565b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790559186168152908690526040812055600185018054806113a9576113a9612214565b600082815260209020810160001990810180546001600160a01b03191690550190555050505050565b600182015460009081036113e857506000611431565b6001600160a01b038216600081815260208590526040902054600185018054909190811061141857611418611f8e565b6000918252602090912001546001600160a01b03161490505b92915050565b611444600f8301826113d2565b15611476576114718160405180606001604052806026815260200161229060269139600f850191906112a5565b611539565b611483600d8301826113d2565b6114d057604051636415329d60e01b815260206004820152601c60248201527f77616c6c6574436865636b206973206e6f7420696e20706f6c696379000000006044820152606401610578565b6114dd60118301826113d2565b1561153957604051636415329d60e01b815260206004820152602560248201527f77616c6c6574436865636b2072656d6f76616c20616c72656164792073636865604482015264191d5b195960da1b6064820152608401610578565b6105ac816040518060600160405280602681526020016122906026913960118501919061167b565b61156e60018401826113d2565b61158b57604051636415329d60e01b815260040161057890612012565b611598600b8301826113d2565b156115c5576107998160405180606001604052806024815260200161238c60249139600b850191906112a5565b6115d260078301826113d2565b1561162057604051636415329d60e01b815260206004820152601a60248201527f6174746573746f7220616c726561647920696e20706f6c6963790000000000006044820152606401610578565b6107998160405180606001604052806024815260200161238c6024913960098501919061167b565b600082600101828154811061165f5761165f611f8e565b6000918252602090912001546001600160a01b03169392505050565b61168583836113d2565b156116c557604080518082018252600a8152691059191c995cdcd4d95d60b21b60208201529051633bce1ae360e01b81526105789190839060040161222a565b6001838101805480830182556000828152602090200180546001600160a01b0319166001600160a01b038616179055546116ff9190612072565b6001600160a01b03909216600090815260209390935250604090912055565b61172b60048401826113d2565b61177057604051636415329d60e01b81526020600482015260156024820152741dd85b1b195d10da1958dac81b9bdd08199bdd5b99605a1b6044820152606401610578565b61177d60118301826113d2565b156117af576117aa816040518060600160405280602781526020016122b6602791396011850191906112a5565b611874565b6117bc600d8301826113d2565b1561180a57604051636415329d60e01b815260206004820152601d60248201527f77616c6c6574436865636b20616c726561647920696e20706f6c6963790000006044820152606401610578565b611817600f8301826113d2565b1561187457604051636415329d60e01b815260206004820152602660248201527f77616c6c6574436865636b206164646974696f6e20616c72656164792073636860448201526519591d5b195960d21b6064820152608401610578565b610799816040518060600160405280602781526020016122b660279139600f8501919061167b565b8280546118a89061203e565b90600052602060002090601f0160209004810192826118ca5760008555611910565b82601f106118e357805160ff1916838001178555611910565b82800160010185558215611910579182015b828111156119105782518255916020019190600101906118f5565b5061191c92915061199b565b5090565b82805461192c9061203e565b90600052602060002090601f01602090048101928261194e5760008555611910565b82601f1061195f5780548555611910565b8280016001018555821561191057600052602060002091601f016020900482015b82811115611910578254825591600101919060010190611980565b5b8082111561191c576000815560010161199c565b803561ffff811681146119c257600080fd5b919050565b600080604083850312156119da57600080fd5b823591506119ea602084016119b0565b90509250929050565b60008083601f840112611a0557600080fd5b5081356001600160401b03811115611a1c57600080fd5b6020830191508360208260051b8501011115611a3757600080fd5b9250929050565b600080600060408486031215611a5357600080fd5b8335925060208401356001600160401b03811115611a7057600080fd5b611a7c868287016119f3565b9497909650939450505050565b600060208284031215611a9b57600080fd5b5035919050565b80356001600160a01b03811681146119c257600080fd5b60008060408385031215611acc57600080fd5b823591506119ea60208401611aa2565b801515811461058157600080fd5b60008060408385031215611afd57600080fd5b823591506020830135611b0f81611adc565b809150509250929050565b803563ffffffff811681146119c257600080fd5b60008060408385031215611b4157600080fd5b823591506119ea60208401611b1a565b600080600060608486031215611b6657600080fd5b8335925060208401359150611b7d60408501611aa2565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611bc457611bc4611b86565b604052919050565b600082601f830112611bdd57600080fd5b81356001600160401b03811115611bf657611bf6611b86565b611c09601f8201601f1916602001611b9c565b818152846020838601011115611c1e57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611c5057600080fd5b83359250611c6060208501611aa2565b915060408401356001600160401b03811115611c7b57600080fd5b611c8786828701611bcc565b9150509250925092565b600082601f830112611ca257600080fd5b813560206001600160401b03821115611cbd57611cbd611b86565b8160051b611ccc828201611b9c565b9283528481018201928281019087851115611ce657600080fd5b83870192505b84831015611d0c57611cfd83611aa2565b82529183019190830190611cec565b979650505050505050565b60008060408385031215611d2a57600080fd5b8235915060208301356001600160401b03811115611d4757600080fd5b611d5385828601611c91565b9150509250929050565b60008060008060608587031215611d7357600080fd5b843593506020850135925060408501356001600160401b03811115611d9757600080fd5b611da3878288016119f3565b95989497509550505050565b600080600060608486031215611dc457600080fd5b833592506020840135915060408401356001600160401b03811115611de857600080fd5b611c8786828701611c91565b600060e08284031215611e0657600080fd5b50919050565b600080600080600060a08688031215611e2457600080fd5b8535945060208601356001600160401b0380821115611e4257600080fd5b611e4e89838a01611df4565b95506040880135915080821115611e6457600080fd5b611e7089838a01611c91565b94506060880135915080821115611e8657600080fd5b50611e9388828901611c91565b925050611ea260808701611aa2565b90509295509295909350565b60008060408385031215611ec157600080fd5b8235915060208301356001600160401b03811115611ede57600080fd5b611d5385828601611bcc565b600080600080600060a08688031215611f0257600080fd5b85359450611f1260208701611b1a565b935060408601356001600160401b03811115611f2d57600080fd5b611f3988828901611df4565b935050611f4860608701611aa2565b949793965091946080013592915050565b600080600060608486031215611f6e57600080fd5b83359250611f7e60208501611b1a565b9150604084013590509250925092565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611fb657600080fd5b611fbf82611aa2565b9392505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611fee57611fee611fc6565b5060010190565b60006020828403121561200757600080fd5b8151611fbf81611adc565b602080825260129082015271185d1d195cdd1bdc881b9bdd08199bdd5b9960721b604082015260600190565b600181811c9082168061205257607f821691505b602082108103611e0657634e487b7160e01b600052602260045260246000fd5b60008282101561208457612084611fc6565b500390565b60008161209857612098611fc6565b506000190190565b6000808335601e198436030181126120b757600080fd5b8301803591506001600160401b038211156120d157600080fd5b602001915036819003821315611a3757600080fd5b6000602082840312156120f857600080fd5b611fbf82611b1a565b60006020828403121561211357600080fd5b611fbf826119b0565b60006020828403121561212e57600080fd5b8135611fbf81611adc565b6000821982111561214c5761214c611fc6565b500190565b6000815180845260005b818110156121775760208185018101518683018201520161215b565b81811115612189576000602083870101525b50601f01601f19169290920160200192915050565b6080815260006121b16080830185612151565b828103806020850152600682526572656d6f766560d01b6020830152604081016040850152600e60408301526d191bd95cc81b9bdd08195e1a5cdd60921b60608301526080810160608501525061220b6080820185612151565b95945050505050565b634e487b7160e01b600052603160045260246000fd5b60808152600061223d6080830185612151565b82810380602085015260068252651a5b9cd95c9d60d21b6020830152604081016040850152600660408301526565786973747360d01b60608301526080810160608501525061220b608082018561215156fe506f6c69637953746f726167653a5f777269746557616c6c6574436865636b52656d6f76616c506f6c69637953746f726167653a5f777269746557616c6c6574436865636b4164646974696f6e506f6c69637953746f726167653a72656d6f7665476c6f62616c57616c6c6574436865636b506f6c69637953746f726167653a5f77726974654174746573746f7252656d6f76616c706f6c69637953746f726167653a70726f636573735374616765640000000000506f6c69637953746f726167653a696e73657274476c6f62616c57616c6c6574436865636b506f6c69637953746f726167653a696e73657274476c6f62616c4174746573746f72506f6c69637953746f726167653a5f77726974654174746573746f724164646974696f6e506f6c69637953746f726167653a72656d6f7665476c6f62616c4174746573746f72a2646970667358221220eb96a0f211dd99cfe536a35e6072976a1b97c11cd434059b02e228125a7d86d464736f6c634300080e0033";

type PolicyStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PolicyStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PolicyStorage__factory extends ContractFactory {
  constructor(...args: PolicyStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PolicyStorage";
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PolicyStorage> {
    return super.deploy(overrides || {}) as Promise<PolicyStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PolicyStorage {
    return super.attach(address) as PolicyStorage;
  }
  override connect(signer: Signer): PolicyStorage__factory {
    return super.connect(signer) as PolicyStorage__factory;
  }
  static readonly contractName: "PolicyStorage";

  public readonly contractName: "PolicyStorage";

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PolicyStorageInterface {
    return new utils.Interface(_abi) as PolicyStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PolicyStorage {
    return new Contract(address, _abi, signerOrProvider) as PolicyStorage;
  }
}