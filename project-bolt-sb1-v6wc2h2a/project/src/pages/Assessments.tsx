import React from 'react';
import { FileText, CheckCircle, XCircle, Clock } from 'lucide-react';

const Assessments = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Assessments</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create Assessment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-sm font-medium text-gray-900">Total Assessments</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">24</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="ml-2 text-sm font-medium text-gray-900">Completed</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">18</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span className="ml-2 text-sm font-medium text-gray-900">Pending</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">6</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {[1, 2, 3].map((assessment) => (
              <div key={assessment} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Frontend Development Test</h3>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Duration: 2 hours</span>
                      <span className="text-sm text-gray-500">Questions: 25</span>
                      <span className="text-sm text-gray-500">Assigned: 12 candidates</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm hover:bg-indigo-200">
                      View Results
                    </button>
                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-500">
                    <span>9/12 completed</span>
                    <span>75% completion rate</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessments;