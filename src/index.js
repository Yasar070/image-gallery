import React from "react"
import ReactDom from "react-dom/client"
import  "./style.css"
 import Pic1 from "./assets/images/Img1.jpg"
import Pic2 from "./assets/images/Img7.jpeg"
 import Pic3 from "./assets/images/Img3.jpeg"
 import Pic4 from "./assets/images/Img4.jpg"
 import Pic5 from "./assets/images/Img5.jpeg"
 import Pic6 from "./assets/images/Img6.jpeg"

function Header(props){
  return(


    
      <div className="imgDiv">
          <img className="picture" style={{backgroundColor:"white",border:"solid black 1px",padding:"10px",margin:"10px"}}  src={props.image} alt="image"></img>
            <h3 style={{backgroundColor:"#004274", color:"#FFFFFF ",height:"30px",width:"50%", display:"flex",justifyContent:"center", marginLeft:"90px", borderRadius:"10px",marigin:"10px"}}> {props.model}</h3>
         
       
  
      </div>
    
  )
}


const root=ReactDom.createRoot(document.getElementById("root"))

var photo=[
  {
    image:Pic1,
    Name:"2 Stroke's Gallery",
    model:"Yamaha RX100"
  },
  {
    image:Pic2,
    Name:"2 Stroke's Gallery",
    model:"Yamaha SS50"
  },
  {
    image:Pic3,
    Name:"2 Stroke's Gallery",
    model:"Yamaha YZ250X"
  },
  {
    image:Pic4,
    Name:"2 Stroke's Gallery",
    model:"Yamaha RxZ"
  },
  {
    image:Pic5,
    Name:"2 Stroke's Gallery",
    model:"Yamaha CS5E"
  },
  {
    image:Pic6,
    Name:"2 Stroke's Gallery",
    model:"Yamaha LS2 "
  }



]

root.render(
  
photo.map(function(item){
return <Header image={item.image} model={item.model} ></Header>


}))