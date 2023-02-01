self.addEventListener("push", (event) => {
  let data;
  try {
    data = event.data.json();

    console.log("New notification", data);
    const options = {
      body: data.body,
      icon: "/logo192.png",
      click_action: "notification-click",
    };
    // event.waitUntil(self.registration.showNotification(data.title, options));

    // Store the notification data for later use
    event.waitUntil(
      Promise.all([
        self.registration.getNotifications(),
        self.registration.showNotification(data.title, options),
        // Use IndexedDB or local storage to store the data
      ])
    );
  } catch (error) {
    console.error("Invalid JSON payload", error);
    return;
  }
});
