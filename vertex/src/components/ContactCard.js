import React from "react";
import ContactList from "./ContactList";
import pro from "./images/pro.png";

const ContactCard=(props)=>
{


    const {id,name,email}=props.contact;

        return (

            <div className="item">
                <img className="ui avatar image" src={pro} alt="user"/>
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                
                </div>
                <i className="trash alternate outline icon"
                style={{color:"red",marginTop: "7px"}}>

                </i>
                
            </div>
        )
}

export default ContactCard;