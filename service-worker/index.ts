'use strict';

console.log('Custom Service Worker');
const reminderNotification = () => {
  registration.showNotification('Reminder', {
    body: 'Hey there! How are you feeling today? Time to be expressive about it!',
    icon: 'icons/icons.png',
  });
  setTimeout(reminderNotification, 86400000);
};

if (Notification.permission == 'granted') {
  reminderNotification();
}
