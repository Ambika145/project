import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const Interviews = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Interviews</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Interviews</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((interview) => (
                <div key={interview} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">Technical Interview</h3>
                      <div className="mt-1 flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          Mar 15, 2024
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          2:00 PM
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Video className="h-4 w-4 mr-1" />
                          Zoom Meeting
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-gray-600">Candidate: </span>
                        <span className="text-sm font-medium text-gray-900">John Doe</span>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md text-sm hover:bg-indigo-200">
                      Join
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Schedule</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Interview Type</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option>Technical Interview</option>
                  <option>HR Interview</option>
                  <option>Culture Fit</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Schedule Interview
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interviews;