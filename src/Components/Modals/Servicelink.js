import React from "react";
import Icon from "./Icons";
import {useHistory} from "react-router-dom";

function Servicelink({ id,name}) {
  const history = useHistory();
  console.log(id);

  const clickHandler=(name) =>{
    console.log(name);
    history.push(name);
  }

  return (
    <div onClick={() => clickHandler(name)}>
        <span style={{ opacity: 0.5 }} className="d-flex">
          <div style={{ color: "pink" }}>
            <Icon id={id}/>
          </div>
          <div style={{ color: "pink" }} className="ps-2">
            {name}
          </div>
        </span>
    </div>
  );
}

export default Servicelink;
