const container = document.querySelector('.container');
const button = document.querySelector('button');
const input = document.querySelector('input[type="text"]');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  if (input.value === '') {
    document.createTextNode('Ooops! There is nothing to add.');
    const div = document.createElement('div');
    div.classList.add('alert', 'alert-warning', 'animated', 'bounceIn');
    div.appendChild(document.createTextNode('Ooops! There is nothing to add.'));

    container.insertBefore(div, list);
  
    setTimeout(() => {
      div.remove();
    }, 3000);

  } else {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
  
    li.classList.add('list-group-item', 'd-flex', 
    'justify-content-between', 'align-items-center', 
    'animated', 'flipInX');
    span.classList.add('badge', 'badge-danger', 'badge-pill');
    div.classList.add('alert', 'alert-success', 'animated', 'fadeInUp');
  
    li.appendChild(document.createTextNode(input.value));
    span.appendChild(document.createTextNode('Delete'));
    div.appendChild(document.createTextNode('Task added successfully!'));
  
    li.appendChild(span);
    list.appendChild(li);
  
    container.insertBefore(div, list);
  
    setTimeout(() => {
      div.remove();
    }, 3000);
  
    input.value = '';
  }
});

list.addEventListener('click', (e) => {

    e.target.parentElement.remove();
      
    const div = document.createElement('div');
    div.classList.add('alert', 'alert-success', 'animated', 'fadeInUp');
    div.appendChild(document.createTextNode('Task deleted successfully!'));
    container.insertBefore(div, list);

    setTimeout(() => {
      div.remove();
    }, 3000);
  
});