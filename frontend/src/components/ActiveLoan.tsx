import { ReactElement } from 'react'



export type LoanType = {
    imgSrc: string,
    title: string,
    value: number,
    duration: string,
}

export type LoanListType = {
    activeLoanList: LoanType[],
}

const LoanStyles: React.CSSProperties = {
    backgroundColor: "#D9D9D9",
    marginBottom: "1.5rem",
    display: "grid",
    gridTemplateColumns: "20% auto",
    padding: "1rem",
    width: "80%",
    marginLeft: "1rem",
    marginTop: "1rem",
    borderRadius: "1rem",
  };

const ImageStyle: React.CSSProperties = {
    margin: "1rem",
    border: "5px outset black",
    borderRadius: "10%",
}

const PurpleBox: React.CSSProperties = {
    backgroundColor: "#BCA3AC",
    borderRadius: "10%",
    padding: ".5rem",
    margin: "1rem",
}

const ActiveLoan = ({activeLoanList}: LoanListType): ReactElement | ReactElement[] => {
  if(!activeLoanList.length) {
    return <h2>You have No Active Loans.</h2>
  }
  return (
    activeLoanList.map((loan: LoanType) => {
        return (
        <article style={LoanStyles}>
            <img src={loan.imgSrc} height="100px" width="100px" style={ImageStyle}></img>
            <div>
                <h2>{loan.title}</h2>
                <p style={{paddingTop: "1rem"}}>Your Loan: <span style={PurpleBox}>{loan.value} ETH</span></p>
                <p style={{paddingTop: "1rem", marginLeft: ".5rem"}}>Duration:  <span style={PurpleBox}>{loan.duration}</span></p>
            </div>
        </article>
        )
    })
  )
}

export default ActiveLoan