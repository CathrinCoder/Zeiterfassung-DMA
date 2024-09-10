import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState('');

  const addClient = () => {
    if (newClient.trim()) {
      setClients([...clients, { id: Date.now(), name: newClient }]);
      setNewClient('');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
            placeholder="New client name"
          />
          <Button onClick={addClient}>Add</Button>
        </div>
        <ul className="space-y-2">
          {clients.map((client) => (
            <li key={client.id}>{client.name}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ClientList;
