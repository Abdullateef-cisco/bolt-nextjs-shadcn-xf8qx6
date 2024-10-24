"use client";

import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Notification {
  id: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning';
}

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulated notifications
    const mockNotifications: Notification[] = [
      {
        id: '1',
        message: 'New signal detected for EUR/USD',
        timestamp: new Date().toISOString(),
        type: 'info'
      }
    ];

    setNotifications(mockNotifications);
  }, []);

  return (
    <Card className="bg-gray-800 border-none p-4">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5" />
        <h2 className="text-xl font-semibold">Notifications</h2>
      </div>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-gray-700 rounded-lg p-3 flex items-start justify-between"
          >
            <div>
              <p className="text-sm">{notification.message}</p>
              <p className="text-xs text-gray-400">
                {new Date(notification.timestamp).toLocaleTimeString()}
              </p>
            </div>
            <Badge variant={notification.type === 'info' ? 'default' : 'secondary'}>
              {notification.type}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}