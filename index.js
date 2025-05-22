// https://randomuser.me/api/
const getDataBtn = document.querySelector(".get-btn");
const addData = document.querySelector(".content");

const url = "https://randomuser.me/api/";

const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Some error");
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

getDataBtn.addEventListener("click", getData);
/*

{gender: 'male', name: {…}, location: {…}, email: 'stanley.johnson@example.com', login: {…}, …}
cell: "081-391-7402"
dob: {date: '1964-02-15T00:11:36.412Z', age: 61}
email: "stanley.johnson@example.com"
gender
: 
"male"
id
: 
{name: 'PPS', value: '3016055T'}
location
: 
city: "Limerick"
coordinates
: 
{latitude: '2.4073', longitude: '-95.7297'}

: 
"Ireland"
postcode
: 
34069
state
: 
"Longford"
street
: 
name
: 
"Rochestown Road"
number
: 
2353
[[Prototype]]
: 
Object
timezone
: 
{offset: '-9:00', description: 'Alaska'}
[[Prototype]]
: 
Object
login
: 
{uuid: 'e713b884-abd4-4a82-ab5d-d5542926827a', username: 'goldenswan874', password: 'phillips', salt: 'QR1pOHlh', md5: '2ae9d1368056abc12aa00b612f6bc40f', …}
name
: 
first
: 
"Stanley"
last
: 
"Johnson"
title
: 
"Mr"
[[Prototype]]
: 
Object
nat
: 
"IE"
phone
: 
"021-514-5146"
picture: large : "https://randomuser.me/api/portraits/men/31.jpg"
*/
