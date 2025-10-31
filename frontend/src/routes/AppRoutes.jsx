import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/loginPage";
import LoginPage from "../pages/loginPage";
import { UploadPolicy } from '../pages/policyHolder/uploadPolicy';
import AdminDashboard from "../pages/admin/adminDashboard";
import ActuarialData from "../pages/admin/ActurialData";
import PolicyAnalysis from "../pages/admin/PolicyAnalysis";
import PolicySummary from "../pages/admin/PolicySummary";
import Escalations from "../pages/admin/Escalations";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin_dashboard" element={<AdminDashboard />} />
                <Route path="/admin_acturial" element={<ActuarialData />} />
                <Route path="/admin_policy_analysis" element={<PolicyAnalysis />} />
                <Route path="/admin_policy_summary" element={<PolicySummary />} />
                <Route path="/admin_escalations" element={<Escalations />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/upload-policy" element={<UploadPolicy />} />
            </Routes>
        </BrowserRouter>
    );
}
