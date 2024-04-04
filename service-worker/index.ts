'use strict';

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  if (Notification.permission == 'granted') {
    reminderNotification();
  }
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
});

self.addEventListener('fetch', function (event) {
  console.log('[Service Worker] Fetching something ...', event);
});

declare var registration: any;
console.log('Custom Service Worker');
const reminderNotification = () => {
  registration.showNotification('Reminder', {
    body: 'Hey there! How are you feeling today? Time to be expressive about it!',
    icon: 'icons/icons.png',
  });
  setTimeout(reminderNotification, 86400000);
};
