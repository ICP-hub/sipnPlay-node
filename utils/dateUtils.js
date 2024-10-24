function getCurrentTimeString() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = String(now.getFullYear()).slice(-2); // Get last two digits of the year
    let hour = now.getHours();
    const minute = String(now.getMinutes()).padStart(2, '0');
    const period = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12; 
    const dateString = `${day}/${month}/${year} ${hour}:${minute}${period}`;
    return dateString;
}

// Export the function for use in other files
module.exports = { getCurrentTimeString };
