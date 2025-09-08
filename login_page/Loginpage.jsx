import React from 'react'
import { useState } from 'react'
import './Loginpage.css'
function Loginpage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""

    })
    function handlechange(e) {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value,
            }
        )
    }
    const validateEmail = (email) => {
        if (!email.endsWith("@gmail.com")) {
            return false;
        }
        const username = email.split("@")[0];

        return (
            username.includes("0") ||
            username.includes("1") ||
            username.includes("2") ||
            username.includes("3") ||
            username.includes("4") ||
            username.includes("5") ||
            username.includes("6") ||
            username.includes("7") ||
            username.includes("8") ||
            username.includes("9")
        );
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log("formdata", formData);
                    if (!validateEmail(formData.email)) {
                        alert("Email must contain a number and end with @gmail.com");
                        return;
                    }

                    console.log("Login Data:", formData);
                    alert("logged successfully");
                }}>
                    <p>Name:</p>
                    <input
                        type="email"
                        name="email" required
                        placeholder="enter name"
                        value={formData.email}
                        onChange={handlechange} />
                    <p>Password:</p>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="enter password"
                        value={formData.password}
                        onChange={handlechange} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Loginpage