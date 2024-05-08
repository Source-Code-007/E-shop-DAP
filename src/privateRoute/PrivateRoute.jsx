import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useSelector((state) => state.auth);
    const location = useLocation()

    if(isLoading){
        return <div className="h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
    </div>
    }

    if(!isLoading && !user){
        return <Navigate state={{from: location}}  to={'/signin'}/>
    }

    return children
};

export default PrivateRoute;