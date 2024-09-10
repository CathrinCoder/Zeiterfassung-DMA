import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');

  const addProject = () => {
    if (newProject.trim()) {
      setProjects([...projects, { id: Date.now(), name: newProject }]);
      setNewProject('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            placeholder="New project name"
          />
          <Button onClick={addProject}>Add</Button>
        </div>
        <ul className="space-y-2">
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProjectList;
