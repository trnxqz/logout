document.getElementById('logout-btn').addEventListener('click', function() {
    // Display a confirmation message that the user has logged out
    const logoutMessage = document.createElement('div');
    logoutMessage.classList.add('logout-message-popup');
    logoutMessage.textContent = 'Ai fost deconectat cu succes!';

    // Append the message to the body (or any container where you'd like it to appear)
    document.body.appendChild(logoutMessage);

    // After 2 seconds, hide the message and redirect to the login page
    setTimeout(function() {
        // Remove the message after 2 seconds
        logoutMessage.style.display = 'none';

        // Redirect the user to the login page (or home page)
        window.location.href = 'file:///C:/Users/user/Desktop/Login/index.html'; // Adjust to your desired redirect path
    }, 2000); // Message will disappear after 2 seconds
});
