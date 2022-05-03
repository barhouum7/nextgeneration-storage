import DDocumentStorage from '../src/abis/DDocumentStorage.json'
import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import { Header } from './Containers'
import Main from './components/Main';
import Web3 from 'web3';
import toast, { Toaster } from 'react-hot-toast'
import './App.css';

//Declare IPFS
// const ipfsClient = require('ipfs-http-client')
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

export default class App extends Component {
    async componentDidMount() {
        // await this.loadWeb3();
        await this.loadBlockchainData();
    }

    // async loadWeb3() {
    //     // Setting up Web3
    //     // This code basically takes our connection from MetaMask and puts it in the Application
    //     // if (window.ethereum) {
    //     //     window.web3 = new Web3(window.ethereum)
    //     //     await window.ethereum.enable()
    //     // } else if (window.web3) {
    //     //     window.web3 = new Web3(window.web3.currentProvider)
    //     // } else {
    //     //     window.alert('Non-Ethereum Browser Detected. You should consider trying MetaMask!')
    //     // }

    // }

    async loadBlockchainData() {
        // Setting up Web3
        // This code basically takes our connection from MetaMask and puts it in the Application
        if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
        //Declare Web3
        const web3 = window.web3

        //Load account
        const accounts = await web3.eth.getAccounts()        
        //We take the first address in the array of address sand save the Account to the State object, so we can fetch back out to the page
        this.setState({ account: accounts[0] })
        
        //Network ID
        const networkId = await web3.eth.net.getId()
        //IF got connection, get data from contracts
        const networkData = DDocumentStorage.networks[networkId]
        if(networkData) {
            //Assign contract then save it to the State Object
            const ddstorage = new web3.eth.Contract(DDocumentStorage.abi, networkData.address)
            this.setState({ ddstorage })
            //Get files amount then save it to the State Object
            const filesCount = await ddstorage.methods.fileCount().call()
            this.setState({ filesCount })
            //Load files&sort by the newest
            for (var i = filesCount; i >= 1; i--) {
                const file = await ddstorage.methods.files(i).call()
                this.setState({
                    files: [...this.state.files, file]
                })
            }
        } else {
            //Else
            //alert Error
            toast.error('DDocumentStorage contract not deployed to the detected network.', {
                duration: 20000,
                position: 'bottom-center',
                // Styling
                style: {
                  background: '#212A38',
                  color: '#fff',
                },
              })
            // window.alert('DDocumentStorage contract not deployed to the detected network.')
        }
        this.setState({ loading: false })      

    }
    }
    // Get file from user
    captureFile = event => {
    }


    //Upload File
    uploadFile = description => {

        //Add file to the IPFS

        //Check If error
        //Return error

        //Set state to loading

        //Assign value for the file without extension

        //Call smart contract uploadFile function 

    }

    // Setting States
    constructor(props) {
        super(props)
        this.state = {
            account: '',
            ddstorage: null,
            files: [],
            loading: false,
            type: null,
            name: null
        }
        // Bind Functions

    }

    render() {
        
        return (
            <>
            <Toaster position="top-center" reverseOrder={false} />
                <div className='gradient__bg'>
                    <Navbar account={this.state.account} />
                    <Header />
                </div>
                {
                    this.state.loading
                        ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
                        :
                        <Main
                            files={this.state.files}
                            captureFile={this.captureFile}
                            uploadFile={this.uploadFile}
                        />
                }
            </>
        )
    }
}