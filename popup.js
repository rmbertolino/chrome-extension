async function getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      
      const usersContainer = document.getElementById('users-container');
      
      // Limpiar el contenedor de usuarios
      usersContainer.innerHTML = '';
  
      // Recorrer los usuarios y crear elementos HTML para cada uno
      data.forEach(user => {
        const userElement = document.createElement('div');
        userElement.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Teléfono:</strong> ${user.phone}</p>
          <hr>
        `;
        usersContainer.appendChild(userElement);
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  getUsers();
  