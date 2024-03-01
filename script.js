$(document).ready(function() {
    // Aplicando máscaras
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
  
    // Enviando dados do formulário
    $('#cadastroForm').submit(function(event) {
      event.preventDefault();
      // Aqui você pode adicionar o código para enviar os dados do formulário
      // Por exemplo, usando AJAX para enviar para um servidor
      console.log('Dados do formulário:', $(this).serialize());
      alert('Formulário enviado com sucesso!');
    });
  });
  