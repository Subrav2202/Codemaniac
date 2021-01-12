import React from "react";

import {
  FaSearch,
  FaPeopleCarry,
  FaPencilAlt,
  FaLaptop,
  FaMobileAlt,
  FaRegAddressBook,
  FaShoppingCart,
  FaTools,
  FaPhp,
  FaIcons,
  FaBook,
  FaAddressCard,
} from "react-icons/fa";

function Icons({id}) {
 
const found = (id1) => {
  switch (id1) {
    case 1:
      return <FaSearch />;
    case 2 :
      return <FaPeopleCarry /> ;
    case 3:
      return<FaPencilAlt /> ;
    case 4 :
      return<FaLaptop />;
    case 5:
      return<FaMobileAlt /> ;
    case 6:
      return<FaRegAddressBook /> ;
    case 7:
      return<FaAddressCard/>;
    case 8:
      return<FaShoppingCart />;
    case  9 :
      return<FaTools />;
    case 10:
      return<FaPhp /> ;
    case 11:
      return<FaIcons />;
    case 12 :
      return<FaBook />;
    default :
    return<FaAddressCard/>;
  }
}

const get=found(id)

console.log(id);
  return(
    <div>{get}</div>
    );
}

export default Icons;
