import temp_image from "../images/temp_image.png";
import Image from "react-bootstrap/Image";

function IdentitySection() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      marginTop:"50px",
      marginBottom:"50px"
    }}>
  <div style={{
    display:"flex",
    flexDirection:"column"
  }}>
      <div style={{
        textAlign:"center",
        marginRight:"43px"
      }}>
      <Image src={temp_image} roundedCircle={true}
      style={{
        width:"200px",
        marginLeft:"40px"
      }}
      ></Image>
    </div>
    <div style={{textAlign:"center"}}><h2>First Name Last Name</h2></div>
    <div style={{textAlign:"center"}}><h3>Role in Organization</h3></div>    
  </div>
  </div>
  );
}

export default IdentitySection;
