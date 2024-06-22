import Accordion from "react-bootstrap/Accordion";
import "./styles/Layout.css";
import {Questions} from "../../public/Data.js";
const Layout = () => {
  return (
    <div className="layout">
      <Accordion defaultActiveKey="0">
        {
          Questions.map((elem,index)=>{
            return(
              <>
              <Accordion.Item eventKey={index + 1}>
          <Accordion.Header className="font">{elem.head}</Accordion.Header>
          <Accordion.Body className="font">
           {elem.para}
          </Accordion.Body>
        </Accordion.Item>
              
              </>
            )
          })
        }
      </Accordion>        
    </div>
  );
};
export default Layout;
