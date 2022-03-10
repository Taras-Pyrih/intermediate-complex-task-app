import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { validateRegistration } from '../../helpers/validations/validateRegistration.jsx';
import { useState, useEffect } from 'react';
import './FormikForm.scss'

export const FormikForm = () => {
  const [isAccepted, setIsAccepted] = useState(true);
  
  const handleCheckboxChange = e => {
    setIsAccepted(e.target.checked);
  };

  const checkboxClass = classNames('agreement-notification', {visible: !isAccepted});

  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      email: '',
      phoneNumber: '',
      personalId: '',
      description: ''
    },
    validateRegistration,
    onSubmit: values => {
      if (isAccepted) {
        console.log(values);
        console.log(JSON.stringify(values));
      }
    }
  });

  const [activeSubmitButton, setActiveSubmitButton] = useState(false);
  
  useEffect(() => {
    setActiveSubmitButton(false);

    for (const value in formik.values) {
      if (formik.values[value] !== "") {
        setActiveSubmitButton(true);
        break;
      }
    };
  }, [formik.values]);

  return (
    <div className="FormikForm">
      <h1>FormikForm</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="input-container">
            <label htmlFor="firstName">firstName</label>
            <div>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter firstName"/>
              {
                formik.touched.firstName && formik.errors.firstName
                ? <span className="notification">{formik.errors.firstName}</span>
                : null
              }
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="secondName">secondName</label>
            <div>
              <input
                id="secondName"
                name="secondName"
                type="text"
                value={formik.values.secondName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter secondName"/>
              {
                formik.touched.secondName && formik.errors.secondName
                ? <span className="notification">{formik.errors.secondName}</span>
                : null
              }
            </div>
          </div>    
        </div>

        <div className="row">
          <div className="input-container">
            <label htmlFor="email">email</label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email"/>
              {
                formik.touched.email && formik.errors.email
                ? <span className="notification">{formik.errors.email}</span>
                : null
              }
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="phoneNumber">phoneNumber</label>
            <div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter phoneNumber"/>
              {
                formik.touched.phoneNumber && formik.errors.phoneNumber
                ? <span className="notification">{formik.errors.phoneNumber}</span>
                : null
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <label htmlFor="personalId">personalId</label>
            <div>
              <input
                id="personalId"
                name="personalId"
                type="text"
                value={formik.values.personalId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter personalId"/>
              {
                formik.touched.personalId && formik.errors.personalId
                ? <span className="notification">{formik.errors.personalId}</span>
                : null
              }
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="description">description</label>
            <div>
              <textarea
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter description"></textarea>
              {
                formik.touched.description && formik.errors.description
                ? <span className="notification textarea-notification">{formik.errors.description}</span>
                : null
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <input id="agreement" name="agreement" type="checkbox" checked={isAccepted} onChange={handleCheckboxChange}/>
            <label htmlFor="agreement">I accept the terms and conditions</label>
            <p className={checkboxClass}>You must accept!</p>
          </div>
        </div>

        {activeSubmitButton ? <input type="submit" value="Зареєструвати"/> : <input type="submit" value="Зареєструвати" disabled/>}
      </form>
    </div>
  );
};