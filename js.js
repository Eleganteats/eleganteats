function incrementValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).value = value;
  }
  
  function decrementValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById(id).value = value;
  }


function addToCart(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    if (isNaN(value) || value === 0) {
      document.getElementById('alertMessage').innerText = 'Please select the quantity.';
      showAlert();
    } else {
      document.getElementById('alertMessage').innerText = 'Item added successfully.';
      itemadded();
    }
    window.scrollTo(0, 0); 
  }
  
  function showAlert() {
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('customAlert').style.color = 'red';
    document.getElementById('heading').style.display = 'none';
    
    var alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'block';
    
    setTimeout(function() {
        alertBox.style.display = 'none';
        document.getElementById('heading').style.display = 'block';
      }, 1500); 
  }

  function itemadded()
  {
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('customAlert').style.color = 'white';
    document.getElementById('heading').style.display = 'none'

    var alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'block';
    
    setTimeout(function() {
        alertBox.style.display = 'none';
        document.getElementById('heading').style.display = 'block';
      }, 1500); 
  }

  function hideAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('heading').style.display = 'block';
  }

