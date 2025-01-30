function updateUTCTime() {
    const utcTime = new Date().toISOString().split("T")[1].split(".")[0] + " UTC";
    document.getElementById("utcTime").textContent = utcTime;
}
updateUTCTime();
setInterval(updateUTCTime, 1000);