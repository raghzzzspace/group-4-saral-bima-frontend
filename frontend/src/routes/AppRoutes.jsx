import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/loginPage";
import LoginPage from "../pages/loginPage";
import { UploadPolicy } from '../pages/user/uploadPolicy';
import AdminDashboard from "../pages/admin/adminDashboard";
import ActuarialData from "../pages/admin/ActurialData";
import PolicyAnalysis from "../pages/admin/PolicyAnalysis";
import PolicySummary from "../pages/admin/PolicySummary";
import Escalations from "../pages/admin/Escalations";
import { PolicyDashboard } from "../pages/user/policyDashboard";
import { PolicyDetailDashboard } from "../pages/user/policyDetail";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-acturial" element={<ActuarialData />} />
                <Route path="/admin-policy_analysis" element={<PolicyAnalysis />} />
                <Route path="/admin-policy-summary" element={<PolicySummary />} />
                <Route path="/admin-escalations" element={<Escalations />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/upload-policy" element={<UploadPolicy />} />
                <Route path="/policy-dashboard" element={<PolicyDashboard />} />
                <Route path="policy-detail" element={<PolicyDetailDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}
