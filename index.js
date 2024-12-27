// function to save modal data
function saveModalData() {
  // get the data from the modal
  var modalData = document.getElementById('modalData').value;
  // save the data to the local storage
  localStorage.setItem('modalData', modalData);
}

// function to load modal data
function loadModalData() {
  // get the data from the local storage
  var modalData = localStorage.getItem('modalData');
  // set the data to the modal
  document.getElementById('modalData').value = modalData;
}

// function to clear modal data
function clearModalData() {
  // clear the data from the local storage
  localStorage.removeItem('modalData');
  // clear the data from the modal
  document.getElementById('modalData').value = '';
}

//function to send modal data to email
function sendModalData() {
  // get the data from the local storage
  var modalData = localStorage.getItem('modalData');
  // send the data to the email
  window.open('mailto: [smedina2013@gmail.com]?subject=Modal Data&body=' + modalData);
  