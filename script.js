document.getElementById('logout-btn').addEventListener('click', function() {
   
    const logoutMessage = document.createElement('div');
    logoutMessage.classList.add('logout-message-popup');
    logoutMessage.textContent = 'Ai fost deconectat cu succes!';

   
    document.body.appendChild(logoutMessage);

   
    setTimeout(function() {
        
        logoutMessage.style.display = 'none';

    
        window.location.href = 'file:///C:/Users/user/Desktop/Login/index.html'; 
    }, 2000); 
});
