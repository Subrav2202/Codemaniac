import React, { useContext} from "react";
import { Modal } from "react-bootstrap";
//import Data from "../../Assets/Data"
import Servicelink from "./Servicelink";
import { MyContext } from "../../Assets/Data";


function Servicemodal(props) {

    const datas = useContext(MyContext);

  console.log(datas);
  
  return (
    <>
      <Modal {...props} className="mt-5 " size="xl">
        <div
          className="container"
          style={{ margin: 0, padding: 0, backgroundColor: "black" }}
        >
          <div className="row">
            {datas.map((title) => (
              <div className="col-md-3 m-5">
                <div className="header" style={{ color: "white" }}>
                  <h6>{title.name}</h6>
                </div>
                {title.data.map((items) => (
                  <div className="Body p-2">
                    <Servicelink id={items.id} name={items.name} key={items.id}/>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="Footer d-flex justify-content-end">
            <button onClick={props.onHide}>Close</button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Servicemodal;
