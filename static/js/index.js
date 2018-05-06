window.addEventListener('load', () => {
  /* So kind swan! I prepare you every elements you need! */
  const idInput = document.getElementById('id_input');
  const wrongIdContainer = document.getElementById('wrong_id_container');
  const pwInput = document.getElementById('pw_input');
  const loginBtn = document.getElementById('login_btn');
  const loginResultContainer = document.getElementById('login_result_container');

  idInput.addEventListener('focusout', (e) => {
    alert('time to check id!'); /* Plz remove this line. */
    /*
     * TODO: 1. send ajax request to check if id is correct.
     * TODO: 2. if id is wrong, show red "Wrong ID!" text in wrongIdContainer.
     * TODO: 3. if correct, show green "Correct ID!" text in wrongIdContainer.
     */
  });

  loginBtn.addEventListener('click', (e) => {
    alert('button click!'); /* Plz remove this line. */
    /*
     * TODO: 1. send ajax request to check if login succeeds.
     * TODO: 2. if succeeds, show green "Login Success!" text in loginResultContainer.
     * TODO: 3. if not, show red "Login Failed..." text in loginResultContainer.
     */
  });
});
