const toggleSwitch = document.getElementById('toggle');

function viewMode() {
    if(toggleSwitch.checked) {
        // document.body.style.backgroundColor = 'black';
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        // document.body.style.backgroundColor = 'darkgrey';
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}
toggleSwitch.addEventListener('change', viewMode);

//function for the digitcal clock
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}
updateTime();
setInterval(updateTime, 1000);