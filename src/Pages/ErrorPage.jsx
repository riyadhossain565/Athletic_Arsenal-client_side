import { Link } from 'react-router-dom';
import errorImg from '../errorAmine.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-3xl text-center mt-4">Back To <Link className='text-red-600 font-bold underline' to='/'>Home</Link></h2>
      <Lottie animationData={errorImg} />
    </div>
  );
};

export default ErrorPage;
