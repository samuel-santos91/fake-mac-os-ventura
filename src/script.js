const displayCurrentTime = () => {
  const currentTimeElement = document.getElementById("clock");

  const now = new Date();

  const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "short" });
  const day = now.getDate();
  const month = now.toLocaleDateString("en-US", { month: "short" });
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedTime = `${dayOfWeek} ${day} ${month} ${hours}:${minutes
    .toString()
    .padStart(2, "0")}`;
  currentTimeElement.textContent = formattedTime;
};

displayCurrentTime();
setInterval(displayCurrentTime, 60000);

