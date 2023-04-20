import React from "react";
import "../index.css"
import Filter from "../components/Filter"
import NavBar from "../components/Navbar";
import CardRow from "../components/CardRow";
import SingleCard from "../components/Card";

interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
    <Filter />
    <NavBar />
    <SingleCard title = "Goats for Farm in Turkey" borrower="Jane Smith" description="I currently run a goat farm and have been able to sustain it with the few goats that I have. However, I am unable to expand my business due to limited capital..." image="https://s.yimg.com/ny/api/res/1.2/1kMUtWi44OgtHlxe1HJ.1A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en_us/News/Reuters/2018-07-12T131835Z_1_LYNXMPEE6B150_RTROPTP_2_TURKEY-NOMADS.JPG"/>

    </>
  );
};