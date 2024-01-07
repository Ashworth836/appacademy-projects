import React, { useState, useEffect } from 'react';
import './RegistrationForm.css'


function RegistrationForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [notification, setNotification] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        if(hasSubmitted){
            const errors = { 
                name:[], 
                email:[], 
                phoneNumber:[], 
                phoneType:[], 
                bio:[]
            }
            
            if(!name.trim()) errors['name'].push('Please enter your Full Name');
            if(name.length > 255) errors['name'].push('Name too long, Name should have less 255 characters.');

            if(!email.trim()) errors['email'].push('Please Provide An Email');
            if(email.length && !/\S+@\S+\.\S+/.test(email)) errors['email'].push('Please Provide A Valid Email Address');
            
            if(phoneNumber && !phoneType) errors['phoneType'].push('Please select a phone type if phone number is provided');
            if(phoneType && !phoneNumber) errors['phoneNumber'].push('Please enter a phone number if phone type is selected');
            if(phoneNumber && /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) errors['phoneNumber'].push('Please enter a valid 10 digit phone number');
            
            
            if(!bio.length) errors['bio'].push('Please provide bio');
            if(bio.length > 280) errors['bio'].push('Bio should have less than 280 characters');
            
            setValidationErrors(errors);
        }
    }, [name, email, phoneNumber, phoneType, bio, hasSubmitted])

    const onSubmit = e => {
        // Prevent the default form behavior so the page doesn't reload.
        e.preventDefault();

        const registrationInformation = {
            name,
            email,
            phoneNumber,
            phoneType,
            staff,
            bio,
            notification,
            registrationDate: new Date()
        }

        setHasSubmitted(true);

        // Ideally, we'd persist this information to a database using a RESTful API.
        // For now, though, just log the registration information to the console.
        console.log('Form data:', registrationInformation);

        // Reset the form state.
        setName("");
        setEmail("");
        setPhoneNumber("");
        setPhoneType("");
        setStaff("");
        setBio("")
        setNotification("")
        setHasSubmitted(false);

    };


    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                    {validationErrors.name.length > 0 &&
                        <ul className="errors">
                            {validationErrors.name.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                    }
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    {validationErrors.email.length > 0 &&
                        <ul className="errors">
                            {validationErrors.email.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                    }
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="tel" id="phoneNumber" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="123-456-7890"/>
                    {validationErrors.phoneNumber.length > 0 &&
                        <ul className="errors">
                            {validationErrors.phoneNumber.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                    }
                    <select name="phoneType" value={phoneType} onChange={e => setPhoneType(e.target.value)}>
                        <option value="" disabled>Select A Phone Type</option>
                        <option>Home</option>
                        <option>Work</option>
                        <option>Mobile</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="staff">Staff:</label>
                    <input type="radio" name="staff"  id="instructor" value={staff} onChange={e => setStaff(e => e.target.value)} /> Instructor
                    <input type="radio" name="staff" id="student" value={staff} onChange={e => setStaff(e => e.target.value)} /> Student
                    {validationErrors.staff.length > 0 &&
                        <ul className="errors">
                            {validationErrors.staff.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                    }
                </div>
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="bio" value={bio} onChange={e => setBio(e => e.target.value)} />
                    {validationErrors.bio.length > 0 &&
                        <ul className="errors">
                            {validationErrors.bio.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                    }
                </div>
                <div>
                    <input type="checkbox" id="notification" value={notification} onChange={e => setNotification(e.target.checked)} /> Sign up for email notifications
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm;