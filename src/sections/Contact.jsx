import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    // Ref for the form.
    const formRef = useRef();

    // Loading stste after submission.
    const [loading, setLoading] = useState(false);

    // State of the form.
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    // Function we can call when we type (change) something in the form.
    const handleChange = ({ target: { name, value }}) => {
        setForm({...form, [name]: value })
    }

    // Email sender.
    const handleSubmit = async (e) => {
        // We are working on a single page website, so we do not need to refresh the page after sending message.
        e.preventDefault();

        setLoading(true);

        // Send email.
        try {
            emailjs.send(
                'service_l8xhkxb',
                'template_jhdancm',
                {
                    user_name: form.name,
                    user_email: form.email,
                    message: form.message,
                },
                'Q-vcGmCqfm9q5IH5L'
            )

            setLoading(false);

            alert('Your message has been sent.')

            setForm({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('Something did not go as intended.')
        }
        
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* Terminal Background. */}
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 min-h-screen"
                />

                {/* Title. */}
                <div className="contact-container">
                    <h3 className="head-text">Let's Talk</h3>
                    <p className="text-lg text-white-600 mt-3">Contact me in the below section.</p>

                    {/* Form. */}
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        {/* Name Input. */}
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Firstname Lastname"
                                className="field-input"
                            />
                        </label>

                        {/* Email Input. */}
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="FirstnameLastname@Emailprovider.com"
                                className="field-input"
                            />
                        </label>

                        {/* Message Input. */}
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                placeholder="Insert message here..."
                                className="field-input"
                            />
                        </label>

                        {/* Button. */}
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow-up"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>

                
            </div>
        </section>
    )
}

export default Contact;