document.getElementById('check-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value.trim();
    var resultsDiv = document.getElementById('results-div');
    
    if (userInput === '') {
      alert('Please provide a phone number');
      return;
    }
    
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    if (regex.test(userInput)) {
      resultsDiv.textContent = 'Valid US number: ' + userInput;
    } else {
      resultsDiv.textContent = 'Invalid US number: ' + userInput;
    }
  });
  
  document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
  });