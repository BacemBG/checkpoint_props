import React from 'react'
import PropTypes from 'prop-types'; 
const ProfileComponent = (props) => {
    console.log(props)

    return (
        <div>
            <h1> {props.fullname} </h1>
            <h1> {props.lastName} </h1>
            <h1> {props.profession} </h1>
            <h1> {props.bio} </h1>
            <img src={props.img} alt="cats"/>
          
            
        </div>
    )
}
ProfileComponent.defaultProps = {
    img: 'https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg'
  };
  ProfileComponent.propTypes = {
    lastName: PropTypes.string.isRequired
  };

export default ProfileComponent
