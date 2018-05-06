window.addEventListener('load', () => {
  /* So kind swan! I prepare you every elements you need! */
  const idInput = document.getElementById('id_input');
  const wrongIdContainer = document.getElementById('wrong_id_container');
  const pwInput = document.getElementById('pw_input');
  const loginBtn = document.getElementById('login_btn');
  const loginResultContainer = document.getElementById('login_result_container');

  idInput.addEventListener('focusout', (e) => {
    /*
     * TODO: 1. send ajax request to check if id is correct.
     * TODO: 2. if id is wrong, show red "Wrong ID!" text in wrongIdContainer.
     * TODO: 3. if correct, show green "Correct ID!" text in wrongIdContainer.
     */
    axios.post('/api/check/id', {
      id: idInput.value,
    }).then((res) => {
      if (res.data.match) {
        wrongIdContainer.innerHTML = 'Correct ID!';
        wrongIdContainer.style.color = 'green';
      } else {
        wrongIdContainer.innerHTML = 'Wrong ID!';
        wrongIdContainer.style.color = 'red';
      }
    });
  });

  loginBtn.addEventListener('click', (e) => {
    /*
     * TODO: 1. send ajax request to check if login succeeds.
     * TODO: 2. if succeeds, show green "Login Success!" text in loginResultContainer.
     * TODO: 3. if not, show red "Login Failed..." text in loginResultContainer.
     */
    axios.post('/api/login', {
      id: idInput.value,
      password: pwInput.value,
    }).then((res) => {
      if (res.data.success) {
        loginResultContainer.innerHTML = 'Login Success!';
        loginResultContainer.style.color = 'green';
      } else {
        loginResultContainer.innerHTML = 'Login Failed...';
        loginResultContainer.style.color = 'red';
      }
    });
  });
});
