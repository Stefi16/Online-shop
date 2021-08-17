function Order () {
const customerName = document.getElementById('names');
const adress = document.getElementById('adress');
const orderOutput = document.querySelector('.orderOutput');

if(customerName.value === '' || adress.value === '') {
orderOutput.textContent = 'Please fill out both rows.';
}
else {
    orderOutput.textContent = 'Thank you ' + customerName.value + ' for ordering.';
    document.getElementById('buyForm').reset();
}
}
let text = '';
function Commenters() {
    const username = document.getElementById('username');
    const review = document.getElementById('review');
    const commentsOutput = document.querySelector('.commentsOutput');
    const commentsFormOutput = document.querySelector('.commentsFormOutput');
    let newText = '';
    
    if(username.value === '' || review.value === '') {
      commentsFormOutput.textContent = 'Please fill out both rows.' 
    }
    else {
      commentsFormOutput.textContent = 'Thank you for your review. It is very helpful for us.';
      newText += username.value +':' + '<br>';
      newText += review.value + '<br>';
      newText += '<br>';
      text = newText + text;
      commentsOutput.innerHTML = text;
      document.getElementById('reviewForm').reset();
    }
}