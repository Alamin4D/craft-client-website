import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-[400px] font bold">404</h1>

      <h2 className="text-5xl font-bold mb-12">Oops..!!! Page Not Found!</h2>
      <Link to="/">
        <button className="btn mb-12">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;