import { useRouteError } from "react-router-dom";
const Error = () => {
    const errMsg = useRouteError();
    
    return (
        <div>
            <h1>
                Oops!
            </h1>
            <h2>
            {errMsg.status} - {errMsg.statusText}
            </h2>
            <h2>
                Have a break and come back !!! 😇
            </h2>
        </div>
    )
}
export default Error;