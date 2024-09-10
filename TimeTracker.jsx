import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TimeTracker = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    let interval;
    if (isTracking) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, startTime]);

  const handleStart = () => {
    setIsTracking(true);
    setStartTime(Date.now());
  };

  const handleStop = () => {
    setIsTracking(false);
    // Here you would typically save the time entry
  };

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Time Tracker</h2>
      <div className="space-y-4">
        <Select onValueChange={setSelectedProject}>
          <SelectTrigger>
            <SelectValue placeholder="Select Project" />
          </SelectTrigger>
          <SelectContent>
            {/* Project options will be added here */}
          </SelectContent>
        </Select>
        <Select onValueChange={setSelectedClient}>
          <SelectTrigger>
            <SelectValue placeholder="Select Client" />
          </SelectTrigger>
          <SelectContent>
            {/* Client options will be added here */}
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="text-3xl font-mono text-center">
          {formatTime(elapsedTime)}
        </div>
        <div className="flex justify-center space-x-4">
          {!isTracking ? (
            <Button onClick={handleStart} className="w-full md:w-auto">Start</Button>
          ) : (
            <Button onClick={handleStop} variant="destructive" className="w-full md:w-auto">Stop</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeTracker;
