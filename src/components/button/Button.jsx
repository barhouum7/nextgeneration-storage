import MetaMaskOnboarding from '@metamask/onboarding';
import React from 'react';
import App from '../../App'
import toast, { Toaster } from 'react-hot-toast'
// import { useWeb3 } from '@3rdweb/hooks'

import Explain from '../../components/explain/Explain'
import './button.css'

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const ONBOARDING_TEXT = 'Onboarding in progress...';
const CONNECT_TEXT = 'Connect Your Wallet';
const CONNECTED_TEXT = 'Connected';

export default function Button() {
    // const { address, connectWallet } = useWeb3()
  const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = React.useState(false);
  const [accounts, setAccounts] = React.useState([]);
  const onboarding = React.useRef();


    const forwarderOrigin = 'http://localhost:3000/nextgeneration-storage';
  
    // const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

    React.useEffect(() => {
      if (!onboarding.current) {
        onboarding.current = new MetaMaskOnboarding(forwarderOrigin);
      }
    }, []);

  React.useEffect(() => {
    async function isInstalled() {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        if (accounts.length > 0) {
          setButtonText(CONNECTED_TEXT);
          setDisabled(false);
          onboarding.current.stopOnboarding();
          
        } else {
          setButtonText(CONNECT_TEXT);
          setDisabled(false);
          toast.success('Nice, MetaMask is installed!', {
            duration: 7000,
            position: 'top-center',
            // Styling
            style: {
              background: '#212A38',
              color: '#fff',
            },
          })
          await new Promise(resolve => setTimeout(resolve, 900))
          toast('Connect Your Wallet Now!', {
            duration: 6500,
            position: 'top-center',
            // Styling
            style: {
              background: '#212A38',
              color: '#fff',
            },
            icon: '💁‍♂️',
          })
        }
      } else {
        toast('Click to the button below to install MetaMask!', {
          duration: 8000,
          position: 'top-center',
          // Styling
          style: {
            background: '#212A38',
            color: '#fff',
          },
          icon: '👇',
        })
      }
    }
      isInstalled()
  }, [accounts]);

  React.useEffect(() => {
    function handleNewAccounts(newAccounts) {
      setAccounts(newAccounts);
    }

      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
        
        window.ethereum.on('accountsChanged', handleNewAccounts);
        return () => {
          window.ethereum.off('accountsChanged', handleNewAccounts);
        };
      }
  }, []);

  const onClick = async () => {
    try {
      // connectWallet('injected')
        
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
          // Will open the MetaMask UI
          // You should disable this button while the request is pending!
          try {
            await window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then((newAccounts) => setAccounts(newAccounts));

            toast.success('Connected Successfully!', {
              duration: 20000,
              position: 'top-center',
              // Styling
              style: {
                background: '#212A38',
                color: '#fff',
              },
            })
          } catch (error) {
            console.error(error)
            toast.error('You`ve rejected the connection, please try again!', {
              duration: 5000,
              position: 'top-center',
              // Styling
              style: {
                background: '#212A38',
                color: '#fff',
              },
            })
          }
        } else {
        onboarding.current.startOnboarding();
        setButtonText(ONBOARDING_TEXT);
        setDisabled(true);
  
        toast.loading('Waiting...', {
          duration: 80000,
          position: 'top-center',
          // Styling
          style: {
            background: '#212A38',
            color: '#fff',
          },
        })
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (

    <>
    <Toaster position="top-center" reverseOrder={false} />
        {accounts.length > 0 ? (
        <>
          <App />
        </>
      ) : (
        <>
        <div className='connectW-container'>
          <div className='connectW-container__button'>
              <button onClick={onClick} type='button' id='connectButton' disabled={isDisabled}>
                {buttonText}
              </button>
          </div>
          <div className='connectW-container__text'>
          <p><span role="img" aria-label='MetaMask-emoji'>🦊</span><span className='connectW-container__text-info'>MetaMask is not connected to this site. 
            <br />To connect to our web3 site, find and click the connect button.</span></p>
          </div>
          <Explain />
        </div>
      </>
      )}
    </>
  );
}