import React, { useState } from 'react';

const User = (props) => {
    // console.log(props)
    const {name, phone, picture} = props.user;
    const fullName = name.title + " " + name.first + " " + name.last;
    const handleAddMember = props.handleAddMember;

    const [phoneNum, setPhoneNum] = useState('');
    const handlePhone = () => setPhoneNum(phone);
    return (
        <div style={{border:"2px solid grey"}}>
            <p><img src={picture.large} alt="" /></p>
            <h3>Name: {fullName}</h3>
            <h4>Phone: {phoneNum}</h4>
            <p><button onClick={handlePhone}>Show Phone</button></p>
            <p><button onClick={()=>handleAddMember(fullName)}>Add member</button></p>
        </div>
    );
};

export default User;