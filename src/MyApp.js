import React from 'react';
import Home from './Home'

import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [1,3,4,5,42,1337]
const connectors = {
  injected: {},
}

const MyApp = () => {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Home />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp