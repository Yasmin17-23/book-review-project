import { Link, useRouteError } from "react-router-dom";


const ErrorPages = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex flex-col justify-center items-center py-10 space-y-2">
            <h1>OOppps!!!!...</h1>
            <p>{error.statusText || error.message}</p>
            <Link to="/">
               <button className="btn">Go Home</button>
            </Link>
        </div>
    );
};

export default ErrorPages;