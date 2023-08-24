document.addEventListener('DOMContentLoaded', function () {
  const fetchButton = document.getElementById('fetchButton');
  const serverResponse = document.getElementById('serverResponse');

  fetchButton.addEventListener('click', async () => {
    try {
      const response = await axios.get('https://localhost:3000');

      let displayText =
        'You have successfully sent a secure req to the server, and this is the response:\n\n';
      displayText += `Status Code: ${response.status}\n`;
      displayText += `Response Data: ${response.data}`;
      serverResponse.textContent = displayText;
    } catch (error) {
      serverResponse.textContent = `Error fetching data: ${error.message}`;
    }
  });
});
