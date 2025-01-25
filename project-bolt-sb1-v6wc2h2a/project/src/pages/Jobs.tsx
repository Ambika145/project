import React from 'react';
import { Plus } from 'lucide-react';

const Jobs = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          Post New Job
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4">
            {/* Sample job listings */}
            {[1, 2, 3].map((job) => (
              <div key={job} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Senior Frontend Developer</h3>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Full-time</span>
                      <span className="text-sm text-gray-500">Remote</span>
                      <span className="text-sm text-gray-500">Posted 2 days ago</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  We are looking for an experienced Frontend Developer to join our team...
                </p>
                <div className="mt-4 flex space-x-4">
                  <button className="text-sm text-indigo-600 hover:text-indigo-900">View Details</button>
                  <button className="text-sm text-indigo-600 hover:text-indigo-900">Edit</button>
                  <button className="text-sm text-red-600 hover:text-red-900">Close Position</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;