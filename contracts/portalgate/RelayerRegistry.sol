// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@ensdomains/ens-contracts/contracts/registry/ENS.sol";
import "./interfaces/ITornadoInstance.sol";

import "./libs/EnsResolve.sol";

contract RelayerRegistry is EnsResolve, Ownable {
    address public tornadoRouter;
    mapping(bytes32 => bool) public areRelayers;

    event RelayerAdded(bytes32 indexed relayer);
    event RelayerRemoved(bytes32 indexed relayer);
    event StakeChanged(uint256 stake);
    event StakeBurned(address relayer);

    modifier onlyTornadoRouter() {
        require(msg.sender == tornadoRouter, "only proxy");
        _;
    }

    constructor(address _tornadoRouter) {
        tornadoRouter = _tornadoRouter;
    }

    function add(bytes32 _relayer) public onlyOwner {
        require(!areRelayers[_relayer], "The relayer already exists");
        areRelayers[_relayer] = true;
        emit RelayerAdded(_relayer);
    }

    function remove(bytes32 _relayer) public onlyOwner {
        require(areRelayers[_relayer], "The relayer does not exist");
        areRelayers[_relayer] = false;
        emit RelayerRemoved(_relayer);
    }

    function burn(
        address sender,
        address relayer,
        ITornadoInstance pool
    ) external onlyTornadoRouter {
        emit StakeBurned(relayer);
    }

    function isRelayerRegistered(bytes32 _relayer) external view returns (bool) {
        return areRelayers[_relayer];
    }

}
