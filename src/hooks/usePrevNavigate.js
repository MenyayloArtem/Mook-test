import { useLocation, useNavigate } from "react-router";

export default function () {
    const location = useLocation()
    const navigate = useNavigate()

    return (to) => {
        navigate(to, {
            state : {
                prev : location.pathname
            }
        })
    }
}