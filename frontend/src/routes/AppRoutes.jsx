import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/loginPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

                {/* Public (Customer) */}

                {/* Policyholder */}
                {/* <Route path="/policyholder/policies" element={<MyPolicies />} /> */}

                {/* Admin */}
                {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}

            </Routes>
        </BrowserRouter>
    );
}
