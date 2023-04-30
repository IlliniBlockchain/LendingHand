import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useState } from 'react';
import { ethers } from 'ethers';

export default function ConnectButton() {
    const [walletAddress, setWalletAddress] = useState("This");
    
    return (
        <Button
            variant="contained" 
            color="secondary"
            size="small"

            onClick={() => {
                requestAccount();
            }}
        >          
            Connect To Wallet  
            
        </Button>

        /*
            My Wallet Address: {walletAddress}

            Use Wallet Address For Send and Recieve Purposes
            Need help with connecting to contract
        */
    
      );

      async function ConnectedContract() {
        
      }
    
    
    //   0x74eD261E8ec5cf49170748F8D1B0b91c39665b53

      async function requestAccount() {
    
        if(window.ethereum) {
          try {
        
        
        
            const provider = new ethers.BrowserProvider(window.ethereum);
            
            // Prompt user for account connections
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            console.log("Account:", (await signer).getAddress());
            
            // console.log(provider.getSigner());
        
        
        } catch (error) {
            console.log('Error Connecting...')
          }
          
        } else {
          console.log('Not there')
        }
      } 

  }