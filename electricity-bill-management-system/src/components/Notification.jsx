import React, { useState } from 'react';
import { Bell, AlertTriangle, Calendar, Info } from 'lucide-react';
import Navbar from './Navbar';

const initialNotifications = [
  {
    id: '1',
    type: 'alert',
    message: 'High usage detected! Your consumption is 20% above average.',
    date: '2024-03-15T10:30:00Z',
    read: false
  },
  {
    id: '2',
    type: 'reminder',
    message: 'Your bill is due in 3 days. Amount: $124.50',
    date: '2024-03-14T15:45:00Z',
    read: false
  },
  {
    id: '3',
    type: 'outage',
    message: 'Scheduled maintenance: March 20, 2024, 2:00 AM - 4:00 AM',
    date: '2024-03-13T09:00:00Z',
    read: true
  }
];

const NotificationItem = ({ notification, onRead }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'alert':
        return <AlertTriangle className="text-red-500" size={20} />;
      case 'reminder':
        return <Calendar className="text-blue-500" size={20} />;
      case 'outage':
        return <Info className="text-yellow-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  return (
    <div 
      className={`p-4 rounded-lg mb-4 transition-all ${
        notification.read 
          ? 'bg-gray-50 dark:bg-gray-800' 
          : 'bg-blue-50 dark:bg-blue-900/20 shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">{getIcon()}</div>
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <p className={`font-medium ${notification.read ? 'text-gray-600 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>
              {notification.message}
            </p>
            {!notification.read && (
              <button
                onClick={() => onRead(notification.id)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Mark as read
              </button>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {new Date(notification.date).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

const Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
    <Navbar />
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Notifications</h1>
        <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm">
          {unreadCount} unread
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Notification;