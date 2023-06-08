import { DeployFunction } from 'hardhat-deploy/dist/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ethers, network } from 'hardhat'
import { DeployTags, onlyLocalNetwork } from '../utils/deploy'

const setupInstances: DeployFunction = async ({
  deployments,
  getNamedAccounts,
}: HardhatRuntimeEnvironment) => {
  const chainId = network.config.chainId!

  onlyLocalNetwork(chainId)

  const instanceRegistry = await deployments.get('InstanceRegistry')

  const deployedInstancesNames = ['ERC20Tornado-100', 'ERC20Tornado-1000']
  const deployedInstances = await Promise.all(
    deployedInstancesNames.map((name) => deployments.getOrNull(name)),
  )
  const deployedInstancesAddresses = deployedInstances
    .filter((instance) => instance !== null)
    .map((instance) => instance!.address)

  const InstanceRegistry = await ethers.getContractAt('InstanceRegistry', instanceRegistry.address)

  const instanceMockERC20 = await deployments.get('InstanceMockERC20')

  const instances = deployedInstancesAddresses.map((addr, index) => {
    return {
      addr,
      instance: {
        isERC20: true,
        token: instanceMockERC20.address,
        state: 1,
        uniswapPoolSwappingFee: 0,
        protocolFeePercentage: 0,
        maxDepositAmount: 100000,
      },
    }
  })

  await InstanceRegistry.initInstances(instances)

  console.log('Instances setup complete.')
}

export default setupInstances

setupInstances.tags = [DeployTags.TEST]
