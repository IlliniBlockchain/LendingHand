import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useState } from 'react';

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
    
    
      async function requestAccount() {
    
        if(window.ethereum) {
          try {
            const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            console.log(accounts);
    
            setWalletAddress(accounts[0]);

          } catch (error) {
            console.log('Error Connecting...')
          }
          
        } else {
          console.log('Not there')
        }
      } 

  }

