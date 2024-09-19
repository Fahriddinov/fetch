async function getPromise() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
  
      data.forEach((item, index) => {
        const box = document.createElement('div');
        box.className = 'box';
  
        const name = document.createElement('p');
        name.textContent = item.name;
        box.appendChild(name);
  
        const city = document.createElement('p');
        city.textContent = item.address.city;
        box.appendChild(city);
  
        const email = document.createElement('p');
        email.textContent = item.email;
        box.appendChild(email);
  
        const phone = document.createElement('p');
        phone.textContent = item.phone;
        box.appendChild(phone);
  
        document.body.appendChild(box);
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
  
  getPromise();