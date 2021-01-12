import React, { createContext } from "react";
import Servicemodal from "../Components/Modals/Servicemodal";

const datas = [
  {
    name: "DIGITAL MARKETING",
    data: [
      {
        name: "Search Engine Optimization",
        id:1,
      },
      {
        name: "Social Media Marketing",
        id:2,
      },
      {
        name: "Content Marketing",
        id:3,
      },
    ],
  },
  {
    name: "WEBSITE DESIGNING",
    data: [
      {
        name: "Custom Web Developement",
        id: 4,
      },
      {
        name: "Mobile App Development",
        id: 5,
      },
      {
        name: "CMS Developement",
        id: 6,
      },
      {
        name: "E-Commerce Developement",
        id: 7,
      },
      {
        name: "Website Maintainance",
        id: 8,
      },
      {
        name: "PHP development",
        id:9,
      },
    ],
  },
  {
    name: "BRANDING IDENTITY",
    data: [
      {
        name: "Logo Designing",
        id:10,
      },
      {
        name: "Broucher Designing",
        id: 11,
      },
      {
        name: "Bussiness Card Designing",
        id:12,
      },
    ],
  },
];

const MyContext = createContext(datas);

function Data() {
  return (
    <MyContext.Provider value={"datas"}>
      <Servicemodal />
    </MyContext.Provider>
  );
}

export default Data;
export { MyContext };
