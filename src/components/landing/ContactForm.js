import React, { useState } from 'react';
import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import Button from '@material-tailwind/react/Button';


// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { UserSignup } from "../redux/actions/AuthActions";
// import { UserSignup } from "../../redux/actions";
// import { AesEncrypt, AesDecrypt } from 'aes';
import { Success_Message, Error_Message } from "../../shared";
import { useHistory } from "react-router-dom";

export default function ContactForm() {
    const axios = require('axios');
    let history = useHistory();
    let res = {};

    const token = "rgnheugh47985tu685%&^";
    const [contact_data, setUser] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        message: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUser(contact_data => ({ ...contact_data, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if (contact_data.name && contact_data.email && contact_data.message) {

            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/api/contact/message',
                data: contact_data
            });

            if (res.data.success === true) {
                await Success_Message("Message sent successfully. We will get back to you in no time.") 
            }else {
                await Error_Message("Message not sent.")
            }
        }
    }

    return (
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">Want to talk to us?</H3>
                            <Paragraph color="blueGray">
                                Complete this form and we will get back to you.
                            </Paragraph>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    color="lightBlue"
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Telephone Number"
                                    color="lightBlue"
                                    onChange={handleChange} 
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    color="lightBlue"
                                    onChange={handleChange} 
                                />
                            </div>

                            <Textarea 
                                name="message"
                                color="lightBlue" 
                                placeholder="Message" 
                                onChange={handleChange} 
                            />

                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
