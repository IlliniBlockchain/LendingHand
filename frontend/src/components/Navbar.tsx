import React from 'react'
import styles from "./Navbar.module.css"
import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
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
