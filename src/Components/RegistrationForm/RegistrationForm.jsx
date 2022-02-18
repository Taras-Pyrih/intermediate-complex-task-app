import { textPattern, emailPattern, telPattern, numberPattern } from '../../Consts/Consts.jsx';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import './RegistrationForm.scss';

export const RegistrationForm = () => {
  const [firstName, setFirstName] = useState({name: 'firstName', enteredValue: '', isValid: true});
  const [secondName, setSecondName] = useState({name: 'secondName', enteredValue: '', isValid: true});
  const [email, setEmail] = useState({name: 'email', enteredValue: '', isValid: true});
  const [phoneNumber, setPhoneNumber] = useState({name: 'phoneNumber', enteredValue: '', isValid: true});
  const [personalId, setPersonalId] = useState({name: 'personalId', enteredValue: '', isValid: true});
  const [description, setDescription] = useState({name: 'description', enteredValue: '', isValid: true});
  const [formIsValid, setFormIsValid] = useState(true);
  const [activeSubmitButton, setActiveSubmitButton] = useState(false);
  
  const inputStateVariables = [
    firstName,
    secondName,
    email,
    phoneNumber,
    personalId,
    description
  ];

  useEffect(() => {
    setFormIsValid(true);
    setActiveSubmitButton(false);
    
    inputStateVariables.map(inputStateVariable => {
      if (!inputStateVariable.isValid) {
        setFormIsValid(false);
      }
      if (inputStateVariable.enteredValue !== "") {
        setActiveSubmitButton(true);
      }
    });
  }, [firstName, secondName, email, phoneNumber, personalId, description]);

  const changeValue = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch(name) {
      case "firstName":
        setFirstName({name: 'firstName', enteredValue: value, isValid: firstName.isValid});
        break;
      case "secondName":
        setSecondName({name: 'secondName', enteredValue: value, isValid: secondName.isValid});
        break;
      case "email":
        setEmail({name: 'email', enteredValue: value, isValid: email.isValid});
        break;
      case "phoneNumber":
        setPhoneNumber({name: 'phoneNumber', enteredValue: value, isValid: phoneNumber.isValid});
        break;
      case "personalId":
        setPersonalId({name: 'personalId', enteredValue: value, isValid: personalId.isValid});
        break;
      case "description":
        setDescription({name: 'description', enteredValue: value, isValid: true});
    }    
  };

  const validateValue = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (value != "") {
      switch(name) {
        case "firstName":
          setFirstName({name: 'firstName', enteredValue: value, isValid: textPattern.test(value)});
          break;
        case "secondName":
          setSecondName({name: 'secondName', enteredValue: value, isValid: textPattern.test(value)});
          break;
        case "email":
          setEmail({name: 'email', enteredValue: value, isValid: emailPattern.test(value)});
          break;
        case "phoneNumber":
          setPhoneNumber({name: 'phoneNumber', enteredValue: value, isValid: telPattern.test(value)});
          break;
        case "personalId":
          setPersonalId({name: 'personalId', enteredValue: value, isValid: numberPattern.test(value)});
      }
    
      setActiveSubmitButton(true);
    } else {
      switch(name) {
        case "firstName":
          setFirstName({name: 'firstName', enteredValue: value, isValid: true});
          break;
        case "secondName":
          setSecondName({name: 'secondName', enteredValue: value, isValid: true});
          break;
        case "email":
          setEmail({name: 'email', enteredValue: value, isValid: true});
          break;
        case "phoneNumber":
          setPhoneNumber({name: 'phoneNumber', enteredValue: value, isValid: true});
          break;
        case "personalId":
          setPersonalId({name: 'personalId', enteredValue: value, isValid: true});
      }
    }    
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    let output = {};

    if (formIsValid) {
      inputStateVariables.map(inputStateVariable => {
        output[inputStateVariable.name] = inputStateVariable.enteredValue;
      });

      console.log(output);
    }
  };
  
  return (
    <div className="RegistrationForm">
      <h1>RegistrationForm</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-container">
            <label htmlFor="firstName">firstName</label>
            <div>
              <input
                type="text"
                name="firstName"
                value={firstName.enteredValue}
                required
                onChange={e => changeValue(e)}
                onBlur={e => validateValue(e)}
                placeholder="Enter firstName"
                id="firstName"/>
              <div className={classNames("notification", {show: !firstName.isValid})}>Wrong firstName!</div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="secondName">secondName</label>
            <div>
              <input
                type="text"
                name="secondName"
                value={secondName.enteredValue}
                required
                onChange={e => changeValue(e)}
                onBlur={e => validateValue(e)}
                placeholder="Enter secondName"
                id="secondName"/>
              <div className={classNames("notification", {show: !secondName.isValid})}>Wrong secondName!</div>
            </div>
          </div>    
        </div>

        <div className="row">
          <div className="input-container">
            <label htmlFor="email">email</label>
            <div>
              <input
                type="email"
                name="email"
                value={email.enteredValue}
                required
                onChange={e => changeValue(e)}
                onBlur={e => validateValue(e)}
                placeholder="Enter email"
                id="email"/>
              <div className={classNames("notification", {show: !email.isValid})}>Wrong email!</div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="phoneNumber">phoneNumber</label>
            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber.enteredValue}
                required
                onChange={e => changeValue(e)}
                onBlur={e => validateValue(e)}
                placeholder="Enter phoneNumber"
                id="phoneNumber"/>
              <div className={classNames("notification", {show: !phoneNumber.isValid})}>Wrong phoneNumber!</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <label htmlFor="personalId">personalId</label>
            <div>
              <input
                type="text"
                name="personalId"
                value={personalId.enteredValue}
                required
                onChange={e => changeValue(e)}
                onBlur={e => validateValue(e)}
                placeholder="Enter personalId"
                id="personalId"/>
              <div className={classNames("notification", {show: !personalId.isValid})}>Wrong personalId!</div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="description">description</label>
            <div>
              <textarea
                name="description"
                value={description.enteredValue}
                required
                onChange={e => changeValue(e)}
                placeholder="Enter description"
                id="description"></textarea>
            </div>
          </div>
        </div>

        {activeSubmitButton ? <input type="submit" value="Зареєструвати"/> : <input type="submit" value="Зареєструвати" disabled/>}
      </form>
    </div>
  );
}