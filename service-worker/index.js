const button = document.getElementById("notifications");
button.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    if (result === "granted") {
      sendDailyNotification();
    }
  });
});

function sendDailyNotification() {
  const currentDate = new Date();
  // 12:00 PM
  const notificationTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    12,
    0,
    0
  );
  let timeUntilNotification = notificationTime - currentDate;
  if (timeUntilNotification < 0) {
    
    timeUntilNotification += 24 * 60 * 60 * 1000;
  }

  setInterval(() => {
    const notifTitle = "Hello!";
    const notifBody = "Have a great day!";
    const options = {
      body: notifBody,
    };

    new Notification(notifTitle, options);
  }, timeUntilNotification);
}
