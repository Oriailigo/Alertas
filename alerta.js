// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'
// import Swal from 'swal'

// Comienzo del codigo



function lol() {

    Swal.fire({
        //background: 'rgb(38 136 124)',
        title: '<strong> Sure?</strong>',
        icon: 'info',
        iconAriaLabel: 'Acept',
        //html: '<h1 style="color: #FFFF"> </h1>',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Acept',
        confirmButtonAriaLabel: 'Acept',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i> Cancel',
        cancelButtonAriaLabel: 'Cancel',
        closeButtonAriaLabel: 'Close'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                    // background: 'rgb(38 136 124)',
                    title: '<strong> Acept!</strong>',
                    html: '<p>You are going to play a game.</p>',
                    icon: 'success',
                    confirmButtonText: 'holaaa', // lo usaria para cambiar el nombre del boton
                    showConfirmButton: false // No se muestra el boton
                }

            )
            window.location.href = "http://programminghead.com";
            // <input type = "submit" onClick = "myFunction()"/>
            // <script>
            // function myFunction() {
            //     window.location.href = "http://programminghead.com";
            // } </script>
        }
    })


}