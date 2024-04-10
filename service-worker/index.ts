'use strict';

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  if (Notification.permission == 'granted') {
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
    body: 'Hey there! How are you feeling today? Time to be expressive about it !',
    icon: 'icons/icons.png',
  });
  setTimeout(reminderNotification, 10000);
};

// declare var registration: any;
// console.log('Custom Service Worker');
// const reminderNotification = () => {
//   if (Notification.permission == 'granted') {
//     console.log(navigator);
//     var options = {
//       body: 'Welcome!',
//       icon: 'Hey there! How are you feeling today? Time to be creative about it!',
//       vibrate: [100, 50, 100],
//       data: {
//         dateOfArrival: Date.now(),
//         primaryKey: 1,
//       },
//     };
//     registration.showNotification('Reminder', options);
//   }
// };

navigator.permissions.query({ name: 'notifications' }).then((status) => {
  if (status.state === 'prompt') {
    status.onchange = () => {
      if (status.state === 'granted') {
        reminderNotification();
      }
    };
    // @ts-ignore
    document
      .querySelector('#notification')
      .addEventListener('click', () => Notification.requestPermission());
  }
});
