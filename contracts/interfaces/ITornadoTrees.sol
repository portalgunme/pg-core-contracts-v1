// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ITornadoTrees {
  function registerDeposit(address instance, bytes32 commitment) external;

  function registerWithdrawal(address instance, bytes32 nullifier) external;
}
