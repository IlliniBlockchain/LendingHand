import React, { useState } from 'react';
import styles from '../styles/profile.module.css'
import { Box } from '@mui/system';
import { useEthers, useEtherBalance } from "@usedapp/core";
import * as data from '../components/loans.json'
const linksString = JSON.stringify(data);
const loans = JSON.parse(linksString).loans;
import { LoanType, LoanListType } from '../components/ActiveLoan';
import ActiveLoan from '../components/ActiveLoan';
//import Swal from 'sweetalert2'
import { useRef } from 'react';

//for card
interface ImagePreviewProps {
  file: File | null;
}

interface OpenBorrow {
  image: string,
  title: string,
  description: string,
  amount_raised: number,
  goal: number,
  loan_duration: string,
  tags: string[],
}

class OpenBorrowItem implements OpenBorrow {
  constructor(public image: string, public title: string, public description: string, public amount_raised: number, public goal: number, public loan_duration: string, public tags: string[]) {
    this.image = image;
    this.title = title;
    this.description = description;
    this.amount_raised = amount_raised;
    this.goal = goal;
    this.loan_duration = loan_duration;
    this.tags = tags;
  }
}

const TagList: React.FC<{tags: string[]}> = ({tags}) => {
  return (<>
    <div>
      {tags.map((tag: string) => {
        return (
          <p style={PurpleBox}>{tag}</p>
        )
      })}
    </div>
  </>)
}



const PurpleBox: React.CSSProperties = {
  backgroundColor: "#BCA3AC",
  borderRadius: "10%",
  margin: "1rem",
  width: "30%",
  textAlign: "center",
}

const GoldenBox: React.CSSProperties = {
  backgroundColor: "#EACB95",
  borderRadius: "10%",
  padding: ".5rem",
  margin: "1rem",
  fontWeight: "400",
}

export const Profile: React.FC<ImagePreviewProps> = ({}) => {
  const [imageSrc, setImageSrc] = useState<string>("https://github.com/gitdagray/css_course/blob/main/16_lesson_starter/img/scenic-2200x1331.png");

  const borrowList: OpenBorrowItem[] = []
  const tempBorrow: OpenBorrowItem = new OpenBorrowItem("https://chs.fuhsd.org/uploaded/WP-Var_Boys_resize.jpg", "Support Cupertino Water-Polo", "Can you supportino Cupertino?", 1000, 2000, "1 year", ["Sports", "Education"])
  borrowList.push(tempBorrow);

  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const balance = etherBalance?.toString() ? etherBalance?.toString() : "0"
  const percentage = ((tempBorrow.amount_raised/tempBorrow.goal) * 100).toString() + "%"
  // const hiddenFileInput = React.useRef(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  let LoanList: LoanListType = {activeLoanList: []}

  LoanList.activeLoanList = loans.map((loan: LoanType): LoanType => {
    return {imgSrc: loan.imgSrc, title: loan.title, value: Number(loan.value), duration: loan.duration}
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  function handleClick() {
    // Do something
    hiddenFileInput?.current?.click();
  }
  // const handleClick = event => {
    
  // };

  const handleProfileChanges = (): void => {
    window.prompt("Hello", "world")
  }


  return (
    <body className={styles['body']}>
      <div className={styles['profile']}>Your Profile</div>
      <Box className={`${styles['account']} ${styles['box']}`}>

        <div className={styles['image-div']}>
          <h2 style={{paddingBottom: "30px"}}>Account Information</h2>
          <img src={imageSrc} alt="Hi" width="200" height="200" className={styles['profile-pic']}></img>
          <button onClick={handleClick} style={{backgroundColor: "#BCA3AC"}}>Update Picture</button>
          <input type="file" onChange={handleFileUpload} ref={hiddenFileInput} style={{display: 'none'}}></input>
        </div>

        <div>
          <h2 className={styles['title-box']}>Name: </h2>
          <p className={styles['input-box']}>Vikram Pidaparthi</p>
          <h2 className={styles['title-box']}>Username: </h2>
          <p className={styles['input-box']}>vikkstarr4321</p>
          <h2 className={styles['title-box']}>Public Key Address: </h2>
          <p className={styles['input-box']} style={{fontSize: "14px"}}>{account}</p>
          <h2 className={styles['title-box']}>Biography: </h2>
          <p className={styles['input-box']}>My name is Vikram and I am a CS+Economics student at the University of Illinois. I like to play water polo.</p>
        </div>

        <div style={{marginLeft: "2rem"}}>
          <p style={{fontWeight: "bold", fontSize: "large", marginBottom: ".75rem"}}>Your ETH Balance:</p>
          <p style={{marginBottom: ".75rem"}}>{balance} ETH</p>
          <p style={{fontWeight: "bold", fontSize: "large", marginBottom: ".75rem"}}>Total ETH Donated:</p>
          <p style={{marginBottom: ".75rem"}}>0 ETH</p>
          <p style={{fontWeight: "bold", fontSize: "large", marginBottom: ".75rem"}}>Unique Causes Donated to:</p>
          <p style={{marginBottom: ".75rem"}}>0 ETH</p>
          <button onClick={handleProfileChanges} style={{backgroundColor: "#BCA3AC", marginTop: "12rem", width:"100%", height:"12%"}}>Edit Changes</button>
        </div>

      </Box>

      <Box className={`${styles['box']} ${styles['open-borrow']}`}>
        <div style={{display: "grid", gridTemplateColumns: "80% auto"}}>
          <h2>Open Borrows</h2>
          <button style={{backgroundColor: "#BCA3AC", height: "50%", width: "100%"}}>View More</button>
        </div>

        <Box className={styles['open-borrow-box']}>
          <img src={tempBorrow.image} alt="hi" height="300" width="300" className={styles['open-borrow-image']}>
          </img>
          <div>
            <h2>{tempBorrow.title}</h2>
            <p>{tempBorrow.description}</p>
          </div>
          <div>
            <Box className={styles['open-borrow-stat-box']}>
              <p style={{marginBottom:"1rem"}}>{tempBorrow.amount_raised} ETH out of {tempBorrow.goal} ETH Goal</p>
              <div className={styles["Progress_Status"]} style={{marginBottom:"1rem"}}>
                <div className={styles["myprogressBar"]} style={{width: percentage}}></div>
              </div>
              <p style={{marginBottom:"1rem", fontWeight:"bold"}}>Loan Duration: <span style={GoldenBox}>{tempBorrow.loan_duration}</span></p>
              <div>
                <p style={{fontWeight:"bold"}}>Tags:</p>
                <TagList tags={tempBorrow.tags}></TagList>
              </div>
            </Box>
            <button style={{backgroundColor: "#BCA3AC", width:"100%"}}>Edit Loan</button>
          </div>
        </Box>

      </Box>

      <Box className={styles['box']}>
        <h2>Active Loans</h2>
        {/* <ActiveLoan activeLoanList={LoanList.activeLoanList}/> */}
      </Box>
    </body>
  );
};
