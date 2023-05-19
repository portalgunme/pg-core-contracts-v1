// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ENSResolver {
    function addr(bytes32 node) external view returns (address);

    function text(
        bytes32 node,
        string calldata key
    ) external view returns (string memory);
}
