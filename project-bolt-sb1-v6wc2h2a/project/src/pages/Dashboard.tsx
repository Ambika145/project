import React from 'react';
import { Users, Briefcase, Calendar, CheckCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div className="flex items-center">
      <div className="p-2 bg-indigo-50 rounded-lg">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
    <div className="mt-4">
      <span className={`text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    { icon: Users, label: 'Total Candidates', value: '1,234', change: 12 },
    { icon: Briefcase, label: 'Open Positions', value: '45', change: 8 },
    { icon: Calendar, label: 'Interviews This Week', value: '28', change: -5 },
    { icon: CheckCircle, label: 'Hired This Month', value: '18', change: 15 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {/* Activity items would go here */}
          <p className="text-gray-600">Loading activities...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;