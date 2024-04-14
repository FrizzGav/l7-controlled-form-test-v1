import axios from 'axios';
import onChange from 'on-change';


export default () => {
  const state = {
    values:{
      name:'',
      email:'',
    },
    error: {
      name: [],
      email: [],
    }
  };

  const watchedState = onChange(state, (path) => {

  })

  const formContainer = document.querySelector('.form-container');
  const formHTML = `
    <form id="registrationForm">
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
    </div>
    <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="Введите email" name="email" required>
    </div>
    <input type="submit" value="Submit" class="btn btn-primary">
</form>
`;
  formContainer.innerHTML = formHTML;
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.post('/users', {})
      .then((resp) => {
        document.body.innerHTML = `<p>${resp.data.message}}</p>`
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
