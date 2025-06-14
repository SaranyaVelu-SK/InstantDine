import UserClass from "./UserClass";
import React from "react";
import userContext from "../../utils/userContext";

class ContactUs extends React.Component{
   constructor(props){
    super(props);
   }
   
   render(){
    return (
        <>
            <h1 style={{textAlign:"center",marginTop:"100px",color:"chocolate"}}>CONTACT US</h1>
            <div style={{textAlign:"center"}}>
                    <userContext.Consumer>
                        {(data)=>data.loggedInUser}
                    </userContext.Consumer>
                </div>
            <div className="contact">
                

                <div>
                    <h2>Office Address  : </h2>
                    <p>No:4, XYZ street,  ASD nagar</p>
                    <p>Salem</p>
                    <p>Tamilnadu</p>
                    <p>India</p>
                </div>

                <div>
                    <h2>For help and support: </h2>
                    <p>Email us : <span>instantdine@gmail.com</span></p>
                    <p>contact no : <span>9876543219</span></p>
                </div>
            </div>
        </>
    )
   }

}

// const ContactUs = () => {
//     return (
//         <>
//             <h1 style={{textAlign:"center",marginTop:"100px",color:"chocolate"}}>CONTACT US</h1>
//             <div className="contact">


//                 <div>
//                     <h2>Office Address  : </h2>
//                     <p>No:4, XYZ street,  ASD nagar</p>
//                     <p>Salem</p>
//                     <p>Tamilnadu</p>
//                     <p>India</p>
//                 </div>

//                 <div>
//                     <h2>For help and support: </h2>
//                     <p>Email us : <span>instantdine@gmail.com</span></p>
//                     <p>contact no : <span>9876543219</span></p>
//                 </div>
//             </div>
//             <UserClass  name = {'akilesh'}/>
//         </>
//     )
// }
export default ContactUs;