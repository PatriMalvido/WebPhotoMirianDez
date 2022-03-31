import { Link } from 'react-router-dom';
import {VscArrowLeft} from 'react-icons/vsc';
import '../styles/layout/Contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
        <form action="" className='form'>
        <Link to="/">
        
          <VscArrowLeft className='arrow'/>   
      </Link>

        <div className='inputs'>
          <h1>Contact me</h1>
          <input type="text" id="completename" name="completename" placeholder="Name" required/>
          <input type="email" id="email" name="email" placeholder="Email" required
              pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"/>
          <input type="text" className='message' id="message" name="message" placeholder="Message" required/>

         
          <button type='submit'>Send in testing</button>
      </div>
          


        </form>
      
    </div>
  );
};
export default Contact;
