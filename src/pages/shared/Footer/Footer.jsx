import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-600 to-teal-900 text-slate-100 mt-8 lg:mt-32">
      <div className="footer p-8 pb-4 md:pt-12 md:pb-8 max-w-7xl mx-auto grid gap:8 lg:gap-18 lg:grid-cols-5">
        <div className="col-span-2">
          <h3 className="flex gap-3 items-center text-3xl text-slate-50 font-bold">
            <img className="h-10 w-10 rounded-full ring-2 ring-offset-2 ring-teal-700" src={Logo} alt="Logo" />
            <span className='flex items-center banner-highlighted-text !text-2xl md:!text-3xl'>Language School</span>
          </h3>
          <p className="text-justify mt-2 mb-2">
            Unlock the World: Embrace Language at Language School!
          </p>
          <p className='text-justify mb-2'>
            Open New Horizons: Immerse Yourself in the Art of Language at Language School – Where Fluency Fuels Boundless Connections!
          </p>
          <header>
            <h4 className='text-xl mb-2 underline underline-offset-2'>Get in touch with us</h4>
          </header>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com" data-tip="Facebook" className="tooltip tooltip-bottom cursor-pointer transition duration-200 transform hover:-translate-y-2 border rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
            <Link to="https://www.twitter.com" data-tip="Twitter" className="tooltip tooltip-bottom cursor-pointer transition duration-200 transform hover:-translate-y-2 border rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
            <Link to="https://www.instagram.com" data-tip="Instagram" className="tooltip tooltip-bottom cursor-pointer transition duration-200 transform hover:-translate-y-2 border rounded-full p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
          </div>
        </div>
        <div className='col-span-1 md:ml-8'>
          <span className="footer-title text-lg">About School</span>
          <Link className="link link-hover">About Us</Link>
          <Link className="link link-hover">Our Staff</Link>
          <Link className="link link-hover">Our Partners</Link>
          <Link className="link link-hover">Careers</Link>
        </div>
        <div className='col-span-1'>
          <span className="footer-title text-lg">Programmes</span>
          <Link className="link link-hover">Long-term Programmes</Link>
          <Link className="link link-hover">Intensive Programmes</Link>
          <Link className="link link-hover">Specialized Programme</Link>
          <Link className="link link-hover">Language Trainings</Link>
        </div>
        <div className='col-span-2'>
          <span className="footer-title text-lg">CONTACT</span>
          <p className='mb-2 text-slate-300'>Contact us via phone, email or visit us in our Head Office.</p>
          <p className='flex gap-2 items-center font-normal'>
            <BiCurrentLocation className='text-lg text-slate-100'></BiCurrentLocation>
            <span className='text-slate-300'>2-A, Gulshan, Dhaka, Bangladesh</span>
          </p>
          <p className='flex gap-2 items-center font-normal mt-1'>
            <AiOutlineMail className='text-lg text-slate-100'></AiOutlineMail>
            <span className='text-slate-300'>info@language-school.com</span>
          </p>
          <p className='flex gap-2 items-center font-normal mt-1'>
            <AiOutlinePhone className='text-lg text-slate-100'></AiOutlinePhone>
            <span className='text-slate-300'>+1 777-978-5570</span>
          </p>
        </div>
      </div>
      <div className="text-sm lg:text-base mx-auto mt-8 py-6 border-t border-slate-500 flex flex-col gap-2 justify-center items-center">
        <p className='text-center'>Copyright © 2023 Language School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;