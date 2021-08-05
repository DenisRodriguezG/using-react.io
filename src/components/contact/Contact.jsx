import {useState} from 'react';
import "./contact.scss";

export default function Contact()
{
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return(
        <div className="contact" id="contact">
            <div className="left">
               <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt=""/>
            </div>
            <div className="right">
               <h2>Contact.</h2>
               <form onSubmit={handleSubmit}>
                 <input type="text" placeholder="Email"/>
                 <textarea placeholder="Message"></textarea>
                 <button type="submit">Send</button>
                 {message && <span>Thanks, I'll reply ASAP :)</span>}
               </form>
            </div>
        </div>
    );
}