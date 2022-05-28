// import React from 'react';
// import MetaMaskOnboarding from '@metamask/onboarding'
// import { useWeb3 } from '@3rdweb/hooks'

// import Button from './components/button/Button'
// import './home.css'

// const forwarderOrigin = 'http://localhost:3000/nextgeneration-storage';

// function initialize() {
//   //Basic Actions Section
//   const onboardButton = document.getElementById('connectButton');

//   //Created check function to see if the MetaMask extension is installed
//   const isMetaMaskInstalled = () => {
//     //Have to check the ethereum binding on the window object to see if it's installed
//     const { ethereum } = window;
//     return Boolean(ethereum && ethereum.isMetaMask);
//   };

//   //We create a new MetaMask onboarding object to use in our app
//   const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

//   //This will start the onboarding proccess
//   const onClickInstall = async () => {
//     onboardButton.innerText = 'Onboarding in progress...';
//     onboardButton.disabled = true;
//     //On this object we have startOnboarding which will start the onboarding process for our end user
//     onboarding.startOnboarding();

//     await new Promise(resolve => setTimeout(resolve, 80000)) // 10 sec
//     window.location.reload(true)
//         if (!isMetaMaskInstalled()) {
//           window.alert('Please try again, MetaMask Not Installed!');
//           await new Promise(resolve => setTimeout(resolve, 80000))
//           window.location.reload(true)
//         }
//   };

//   const onClickConnect = async () => {
//     try {
//       // Will open the MetaMask UI
//       // You should disable this button while the request is pending!
//       window.alert('MetaMask Installed!');
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//     } catch (error) {
//       console.error(error)
//       window.alert('You`ve rejected the connection, please try again!');
//     }
//   };

//   const MetaMaskClientCheck = () => {
//     //Now we check to see if MetaMask is installed
//     if (!isMetaMaskInstalled()) {
//       //If it isn't installed we ask the user to click to install it
//       onboardButton.innerText = 'Click here to install MetaMask!';
//       //When the button is clicked we call th is function
//       onboardButton.onclick = onClickInstall;
//       //The button is now disabled
//       onboardButton.disabled = false;
//     } else {
//       //Since MetaMask has been installed we ask the user to connect to their wallet
//         //If MetaMask is installed we ask the user to connect to their wallet
//         onboardButton.innerText = 'Connect Your Wallet';
//         //When the button is clicked we call this function to connect the users MetaMask Wallet
//         onboardButton.onclick = onClickConnect;
//         //The button is now disabled
//         onboardButton.disabled = false;
//     }
//   };
  
//   MetaMaskClientCheck();
  
// };

// export default function Home() {
//   // const { address, connectWallet } = useWeb3()
  
//   return (
//     <div>
//       <Button />
//     </div>
//   )
// }

// window.addEventListener('DOMContentLoaded', initialize)