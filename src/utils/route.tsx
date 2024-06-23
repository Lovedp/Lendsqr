import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../Pages/Login/Login"
import Home from "../Pages/Users/Home"
import RoutesPaths from "./routesPaths"
import UsersDetails from "../Pages/usersDetails/UserDetails"

export const RoutesWrapper = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Home />} />
                    <Route path={RoutesPaths.userDetails} element={<UsersDetails />} />
                    <Route path={RoutesPaths.login} element={<Login />} />
                    <Route path="users">
                        {/* <Route index element={<List />} /> */}
                        {/* <Route path=":userId" element={<Single />} /> */}
                        {/* <Route path="new" element={<New />} /> */}

                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}