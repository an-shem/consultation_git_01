// https://randomuser.me/api/
const getDataBtn = document.querySelector('.get-btn');
const addData = document.querySelector('.content');

const url = 'https://randomuser.me/api/';

const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Some error');
    }
    const result = await response.json();
    console.log(result);
    const data = result.results[0];
    console.log(data);
    addData.innerHTML = `
    <div class="user-card">
        <img src="${data.picture.large}" class="user-foto">
        <h2 class="name">${data.name.first} ${data.name.last}</h2>
        <p class="age"> Age: ${data.dob.age}</p>
        <p class="email">Email: ${data.email}</p>
        <p class="country">Country: ${data.location.country}</p>
        <p class="city">City: ${data.location.city}</p>
        <p class="adresse">Adresse: ${data.location.street.name} ${data.location.street.number}</p>        
    </div>
     `;
  } catch (error) {
    console.log(error.message);
  }
};

getDataBtn.addEventListener('click', getData);
