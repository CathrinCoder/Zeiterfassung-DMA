import React from 'react';
import TimeTracker from '../components/TimeTracker';
import ProjectList from '../components/ProjectList';
import ClientList from '../components/ClientList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Work Time Tracker</h1>
      <div className="max-w-4xl mx-auto">
        <TimeTracker />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectList />
          <ClientList />
        </div>
      </div>
    </div>
  );
};

export default Index;
