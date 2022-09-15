$(document).ready(() => {
  //MENU
  $('.navbar__menu-btn').on('click', function () {
    $('.navbar__links').toggleClass('active')
    $(this).find('i').toggleClass('fa-bars')
    $(this).find('i').toggleClass('fa-xmark')
  })

  //CARROSEL
  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow:
      '<button type="buttton" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow:
      '<button type="buttton" class="slick-next slider__next-arrow">Previous</button>'
  }
  $('.slider').slick(slickOptions)
  $('.testimonials').slick(slickOptions)

  $('.footer__form-button').on('click', () => {
    const email = $('#email').val()
    Email.send({
      Host: 'smtp.yourisp.com',
      Username: 'username',
      Password: 'password',
      To: 'them@website.com',
      From: email,
      Subject: 'Por favor me adicione na newsletter',
      Body: ` Olá,
      
      Eu gostaria de ser adicionado na newsletter do site Meu email é ${email}.
      
      Obrigado!`
    }).then((message) => alert(message))
  })
})

ScrollReveal({
  origin: 'rigth',
  distance: '30px',
  duration: 1100
}).reveal(`
header,
#counter,
#counter h3,
section,
section .institutional__image,
institutional__copy,
footer div
`)
