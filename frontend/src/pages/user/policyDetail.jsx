import { UserLayout } from "../../layout/UserLayout";
import {
    Bot, Send, ArrowUpRight
} from 'lucide-react';

export const PolicyDetailDashboard = () => {
    return (
        <UserLayout>
            {/* Greeting */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-indigo-700">
                    Hello, [User Name]
                </h1>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

                {/* Column 1: Policy Info & Competitor Analysis */}
                <div className="flex flex-col gap-6 sm:gap-8">
                    <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Policy</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Coverages, Addons, Sum Insured, Inclusion, Exclusion
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec dignissim ligula. Ut porttitor, arcu sed bibendum eleifend, justo lectus faucibus nunc, sed malesuada urna elit et erat.
                        </p>
                    </div>
                    <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Pros of XYZ Insurer's Policy (Competitor)
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut justo at lorem pharetra vestibulum. Integer feugiat eros ac felis varius, sit amet iaculis justo imperdiet.
                        </p>
                        <p className="text-gray-500 text-xs">
                            What are you missing out on? Ride with ABC Insurer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                    </div>
                </div>

                {/* Column 2: ABC Insurer Recommendations */}
                <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            ABC Insurer Recommendations for you
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo, elit ut porttitor tempor, arcu nunc varius erat, sit amet malesuada nunc eros at ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                        <p className="text-gray-500 text-sm">
                            Get in touch with our expert for further guidance. Duis mattis nisl eu suscipit porttitor. Morbi in lorem euismod, volutpat enim vel, iaculis est.
                        </p>
                    </div>
                </div>

                {/* Column 3: Help & Support */}
                <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Help & Support</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Bot className="h-5 w-5 text-indigo-600" />
                                <span className="text-gray-700 font-medium">Chat with Gemini (AI Assistant)</span>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Type your query..."
                                    className="w-full rounded-lg border-gray-300 py-2 px-4 pr-10 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-indigo-600">
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
                        Nearest Cashless Hospitals
                        <ArrowUpRight className="h-5 w-5" />
                    </button>
                </div>

            </div>
        </UserLayout>
    );
};
