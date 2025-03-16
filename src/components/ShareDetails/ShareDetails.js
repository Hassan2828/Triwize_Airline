import React, { useState } from 'react'
import './ShareDetails.css';
import ShareDetailImage from '../../assets/ShareDetails/ShareDetailImage.png';

const ShareDetails = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [terms, setTerms] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [termsError, setTermsError] = useState(false);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        setFirstNameError(false); // Clear error on change
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setLastNameError(false); // Clear error on change
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false); // Clear error on change
    };

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
        setMobileError(false); // Clear error on change
    };

    const handleTermsChange = (e) => {
        setTerms(e.target.checked);
        setTermsError(false); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (!firstName) {
            setFirstNameError(true);
            isValid = false;
        }
        if (!lastName) {
            setLastNameError(true);
            isValid = false;
        }
        if (!email) {
            setEmailError(true);
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError(true); // Basic email validation
            isValid = false;
        }
        if (!mobile) {
            setMobileError(true);
            isValid = false;
        }
        if (!terms) {
            setTermsError(true);
            isValid = false;
        }

        if (isValid) {
            // Submit the form
            alert('Form submitted!');
        }
    };

    return (
        <div className='share__details_container'>
            <div className="share__details_sub_container">
                <h2>Share Details For Assistance</h2>

                <div className='form__container'>
                    <div className="left__form__container">
                        <div className="input__form_container">

                            <div className="form-row">

                                <div className={`input-wrapper ${firstName ? 'shrink' : ''} ${firstNameError ? 'error' : ''}`}>
                                    <input
                                        type="text"
                                        id='firstName'
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        onFocus={() => { }}
                                        onBlur={() => { }}
                                    />
                                    <label htmlFor="firstName">First name *</label>
                                </div>

                                <div className={`input-wrapper ${lastName ? 'shrink' : ''} ${lastNameError ? 'error' : ''}`}>
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                        onFocus={() => { }}
                                        onBlur={() => { }}
                                    />
                                    <label htmlFor="lastName">Last name *</label>
                                </div>


                            </div>

                            <div className={`input-wrapper ${email ? 'shrink' : ''} eaddress ${emailError ? 'error' : ''}`}>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onFocus={() => { }}
                                    onBlur={() => { }}
                                />
                                <label htmlFor="email">Email address *</label>
                            </div>


                            {/* Mobile input */}
                            <div className={`input-wrapper ${mobile ? 'shrink' : ''} ${mobileError ? 'error' : ''}`}>
                                <input
                                    type="tel"
                                    id="mobile"
                                    value={mobile}
                                    onChange={handleMobileChange}
                                    onFocus={() => { }}
                                    onBlur={() => { }}
                                />
                                <label htmlFor="mobile">Phone number *</label>
                            </div>


                            <div className={`checkbox-wrapper ${termsError ? 'error' : ''}`}>
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={terms}
                                    onChange={handleTermsChange}
                                />
                                <label htmlFor="terms">I accept the Terms and Conditions</label>
                            </div>

                            <button className="send-button" onClick={handleSubmit}>Send</button>
                        </div>

                    </div>

                    <div className="right__form_container">
                        <img src={ShareDetailImage} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}
export default ShareDetails
