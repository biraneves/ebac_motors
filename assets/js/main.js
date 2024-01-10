      $(document).ready(() => {
        $('#carrossel-imagens').slick({
          autoplay: true,
          dots: true,
          arrows: true,
        });

        $('.menu-hamburguer').on('click', () => {
          $('nav').slideToggle();
        });

        $('#telefone').mask('(00) 00000-0000', {
          placeholder: '(__) _____-____',
        });

        $('form').validate({
          rules: {
            nome: {
              required: true,
            },
            telefone: {
              required: true,
            },
            email: {
              required: true,
              email: true,
            },
            veiculo_interesse: {
              required: false,
            },
            mensagem: {
              required: true,
            },
          },
          messages: {
            nome: 'Por gentileza, informe o seu nome.',
          },
          submitHandler: (form) => {
            console.log(form);
          },
          invalidHandler: (_, validador) => {
            let camposInvalidos = validador.numberOfInvalids();

            if (camposInvalidos)
              alert(`Há ${camposInvalidos} campos inválidos.`);
          },
        });

        $('nav li').click(function () {
          const destino = $(`#${$(this).attr('id').substring(3)}`);

          $('html').animate({
            scrollTop: destino.offset().top - 104,
          }, 500);
        });

        $('.lista-veiculos button').click(function () {
          const destino = $('#contato');
          const nomeVeiculo = $(this).parent().find('h3').text();

          $('#veiculo_interesse').val(nomeVeiculo);

          $('html').animate({
            scrollTop: destino.offset().top,
          }, 1000);
        });
      });
