import React from "react";
import { Borrow } from "./borrow";
import  { Lend }  from "./lend";
import { MainCard } from "../components/MainCard";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


 
interface rootProps {}

export const Root: React.FC<rootProps> = ({}) => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet />
    </>
  );
};