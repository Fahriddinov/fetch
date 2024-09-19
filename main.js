async function getPromise() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
  
      data.forEach((item, index) => {
        const box = document.createElement('div');
        box.className = 'box';
  
        const name = document.createElement('p');
        name.textContent = `username:${item.name}`;
        box.appendChild(name);
  
        const city = document.createElement('p');
        city.textContent = `city:${item.address.city}`;
        box.appendChild(city);
  
        const email = document.createElement('p');
        email.textContent = `email:${item.email}`;
        box.appendChild(email);
  
        const phone = document.createElement('p');
        phone.textContent = `phone:${item.phone}`;
        box.appendChild(phone);
  
        document.body.appendChild(box);
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  
  getPromise();