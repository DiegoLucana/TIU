// script.js

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    
    // Formatear la fecha manualmente
    const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const months = ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'];
    
    const dayName = days[now.getDay()];
    const dayNumber = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    const formattedDate = `${dayName}, ${dayNumber} ${monthName} ${year}`;
    
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = formattedDate;
}

// Actualizar la hora cada segundo
setInterval(updateTime, 1000);
updateTime();
