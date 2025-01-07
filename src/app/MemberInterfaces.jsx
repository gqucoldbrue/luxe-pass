'use client'
import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Car, User, Bell, Search, ChevronRight, Star } from 'lucide-react';

const MemberInterfaces = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Tabs */}
      <div className="border-b border-gray-800">
        <div className="flex space-x-8 px-8 py-4">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2 text-sm tracking-wider transition-colors ${
              activeTab === 'dashboard' ? 'text-white' : 'text-gray-500'
            }`}
          >
            DASHBOARD
          </button>
          <button 
            onClick={() => setActiveTab('booking')}
            className={`px-4 py-2 text-sm tracking-wider transition-colors ${
              activeTab === 'booking' ? 'text-white' : 'text-gray-500'
            }`}
          >
            BOOKING
          </button>
          <button 
            onClick={() => setActiveTab('concierge')}
            className={`px-4 py-2 text-sm tracking-wider transition-colors ${
              activeTab === 'concierge' ? 'text-white' : 'text-gray-500'
            }`}
          >
            CONCIERGE
          </button>
        </div>
      </div>

      {/* Member Dashboard */}
      {activeTab === 'dashboard' && (
        <div className="p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Profile Summary */}
            <div className="border border-gray-800 p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-light">Alexander Pierce</h3>
                  <p className="text-sm text-gray-400">Platinum Member</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Membership Status</span>
                  <span>Active</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Available Credits</span>
                  <span>12,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Next Renewal</span>
                  <span>March 15, 2025</span>
                </div>
              </div>
            </div>

            {/* Upcoming Experiences */}
            <div className="border border-gray-800 p-8 col-span-2">
              <h3 className="text-xl font-light mb-6">Upcoming Experiences</h3>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b border-gray-800 pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-800 flex items-center justify-center">
                        <Car size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg">Ferrari F8 Tributo</h4>
                        <p className="text-sm text-gray-400">March 12, 2025 • 10:00 AM</p>
                      </div>
                    </div>
                    <button className="text-sm border px-4 py-2 hover:bg-white hover:text-black transition-all">
                      DETAILS
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Interface */}
      {activeTab === 'booking' && (
        <div className="p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Search and Filters */}
            <div className="border border-gray-800 p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Experience Type</label>
                  <select className="w-full bg-transparent border border-gray-800 p-3 text-sm">
                    <option>Automotive</option>
                    <option>Racing</option>
                    <option>Lifestyle</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Date Range</label>
                  <input type="date" className="w-full bg-transparent border border-gray-800 p-3 text-sm" />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Location</label>
                  <input type="text" className="w-full bg-transparent border border-gray-800 p-3 text-sm" placeholder="Enter location" />
                </div>
                <button className="w-full bg-white text-black py-3 text-sm hover:bg-gray-200 transition-colors">
                  SEARCH EXPERIENCES
                </button>
              </div>
            </div>

            {/* Available Experiences */}
            <div className="col-span-2 space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border border-gray-800 p-6 hover:border-white transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-light mb-2">Porsche 911 GT3</h3>
                      <p className="text-sm text-gray-400 mb-4">Weekend Experience • Los Angeles</p>
                      <div className="flex space-x-4 text-sm text-gray-400">
                        <span className="flex items-center"><Clock size={16} className="mr-2" /> 48 Hours</span>
                        <span className="flex items-center"><Star size={16} className="mr-2" /> Premium Experience</span>
                      </div>
                    </div>
                    <button className="border px-6 py-2 hover:bg-white hover:text-black transition-all text-sm">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Concierge Interface */}
      {activeTab === 'concierge' && (
        <div className="p-8">
          <div className="grid grid-cols-3 gap-8">
            {/* Concierge Chat */}
            <div className="col-span-2 border border-gray-800 flex flex-col h-[600px]">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-xl font-light">Personal Concierge</h3>
                <p className="text-sm text-gray-400">Available 24/7 for your requests</p>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="flex justify-end">
                  <div className="bg-gray-800 rounded-lg p-4 max-w-md">
                    <p className="text-sm">I'm interested in arranging a special weekend in Monaco during the Grand Prix.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-gray-900 rounded-lg p-4 max-w-md">
                    <p className="text-sm">I'd be happy to help arrange your Monaco Grand Prix experience. Would you like me to prepare some options including paddock access and luxury accommodations?</p>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-800">
                <div className="flex space-x-4">
                  <input 
                    type="text" 
                    className="flex-1 bg-transparent border border-gray-800 p-3 text-sm"
                    placeholder="Type your message..."
                  />
                  <button className="px-6 border hover:bg-white hover:text-black transition-all text-sm">
                    SEND
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="border border-gray-800 p-6">
                <h3 className="text-lg font-light mb-4">Quick Requests</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 text-sm border border-gray-800 hover:border-white transition-all">
                    Schedule Vehicle Pickup
                  </button>
                  <button className="w-full text-left p-3 text-sm border border-gray-800 hover:border-white transition-all">
                    Modify Booking
                  </button>
                  <button className="w-full text-left p-3 text-sm border border-gray-800 hover:border-white transition-all">
                    Special Requirements
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-800 p-6">
                <h3 className="text-lg font-light mb-4">Concierge Team</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <div>
                      <p className="text-sm">Sarah Parker</p>
                      <p className="text-xs text-gray-400">Primary Concierge</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <div>
                      <p className="text-sm">James Wilson</p>
                      <p className="text-xs text-gray-400">Automotive Specialist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberInterfaces;