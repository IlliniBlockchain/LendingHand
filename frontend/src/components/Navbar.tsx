import React, { MouseEvent }  from 'react'
import styles from "./Navbar.module.css"
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;
import { useEffect, useState } from "react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import Swal from 'sweetalert2'


type Link = {
    label: string;
    href: string;
};


const Links: React.FC<{ links: Link[] }> = ({ links }) => {

    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Do something
        activateBrowserWallet();
        console.log(account);
        console.log(etherBalance);
      };

    const AccountAddress = (e: MouseEvent<HTMLButtonElement>) => {
        const accountAddress: string = account ? account : "Oops"
        Swal.fire(
            'Your account address is:',
            accountAddress,
            'info'
          )
    }




    
    return account ? (
        <>
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']} style={{marginTop: ".5rem", marginRight: ".5rem"}}>
                        <a href={link.href} id={link.label}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
            <button onClick={AccountAddress}  style={{backgroundColor: "#BCA3AC"}}>Account Address</button>
        </div>
        </>
    ) : (
        <>
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']} style={{marginTop: ".5rem", marginRight: ".5rem"}}>
                        <a href={link.href} id={link.label}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
            <button onClick={handleMouseEvent} style={{backgroundColor: "#BCA3AC"}}>Connect Wallet</button>
        </div>
        </>
    );
};

const Navbar: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
          <div className={styles['logo-container']}>
                <span>LendingHand</span>
            </div>
            <Links links={links} />
    </nav>
  )
}

export default Navbar;

