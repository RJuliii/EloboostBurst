document.addEventListener('DOMContentLoaded', function() {
  const btnComprar = document.querySelectorAll('.btnComprar');
  btnComprar.forEach(function(btn) {
      btn.addEventListener('click', function() {
          Swal.fire({
              title: '¿Ir al chat de Instagram? <br> <i class="fa-brands fa-instagram"></i>',
              background: "linear-gradient(90deg, rgba(184,184,184,1) 0%, rgba(237,237,237,1) 35%, rgba(201,201,201,1) 100%)",
              color: "black",
              showDenyButton: true,
              confirmButtonText: 'Confirmar',
              denyButtonText: `Cancelar`,
              confirmButtonColor: "#a87b05",
              denyButtonColor: "black",
              preConfirm: () => {
                window.location.href = 'https://www.instagram.com/direct/t/17843605086167722';
              }
          });
      });
  });
});
