document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("makeApiCall");
  
    button.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        const domain = new URL(currentTab.url).hostname;
  
        // Construct the API URL with the domain as a query parameter
        const apiUrl = `http://localhost.com:5000/?domain=${domain}`;
  
        // Make the API call
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            // Handle the API response data here
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    });
  });
  