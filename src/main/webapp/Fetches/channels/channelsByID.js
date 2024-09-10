//For instructions on how I did this refer to userProfileID.js file
let listChannelsById = fetch('http://localhost:8080/api/channels/4', {
  headers: {
    Authorization:
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcyNTA0ODk2MCwiYXV0aCI6IlJPTEVfQURNSU4gUk9MRV9VU0VSIiwiaWF0IjoxNzI0OTYyNTYwfQ.GIGkXcZ2nRCsvEdswRqmz_LfNcMaG1l_zuaTeOdOd4q0KZUVqej5W9OakQJJEp3rSc__BGIFKUgjY4IHGnyHuA',
  },
})
  .then(response => response.json())
  .then(data => displayData(data));

function displayData(data) {
  const container = document.getElementById('channel-container');
  container.innerHTML = '';
  const div = document.createElement('div');
  const formatDisplay = `Channel Name: ${data.name}, Messages: ${data.messages}`;
  div.innerHTML = formatDisplay;
  container.appendChild(div);
}
console.log('Wzup');

//http://localhost:8080/api/channels/1/messages
