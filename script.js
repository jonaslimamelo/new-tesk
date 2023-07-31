function buttonLogin(){
  let userName = document.getElementById('userName').value
  let password = document.getElementById('password').value

  if(userName == 'admin' && password == '123'){
    alert('sucesso');
    location.href = 'home.html';
  }else {
    alert('name ou password inválido')
  }

}
