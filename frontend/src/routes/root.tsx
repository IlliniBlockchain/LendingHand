import React from "react";
import NavBar from "../components/Navbar";
import CardRow from "./lend/components/CardRow"


interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
      {/* <NavBar /> */}
      <CardRow
        card={{  
          name: "Akhil Gogineni",
          reason: 'I Need GIGANTIC PS5',
          valuation: '10000',
          duration: '10 months'
        }}

            //     // btn={}
            //     // image=''
            //     // badge=
            />
    </>
  );
};
