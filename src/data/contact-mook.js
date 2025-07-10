
const mook_data = {
    contacts: [
        {
                id: 1,
                name: 'Leó Szilárd',
                number_phone: '+36-1-555-1023',
                last_time_connected: '10:10',
                img: '/Szilard-nueva.jpeg',
                last_message: {
                    id: 1,
                    text: 'El genio escapó de la lámpara. Ahora debemos evitar la próxima guerra con educación, no con armas.',
                    alternative_text: 'El genio escapó...'
                },
                unread_messages: 0,
                messages: [
                    {
                        emisor: 'YO',
                        hora: '23:10',
                        id: 1,
                        texto: 'Hola Szilárd, que quieres?',
                        status: 'visto'
                    },
                    {
                        emisor: 'USUARIO',
                        hora: '23:11',
                        id: 2,
                        texto: 'Albert, firmé la petición contra el uso de la bomba en Japón. ¿Por qué usted no lo hizo?',
                        status: 'visto'
                    },
                    {
                        emisor: 'YO',
                        hora: '23:12',
                        id: 3,
                        texto: 'Porque mi nombre ya estaba manchado por la carta de 1939. ¿No viste que me excluyeron del Proyecto Manhattan?',
                        status: 'no-visto'
                    },
                    {
                        emisor: 'YO',
                        hora: '23:13',
                        id: 4,
                        texto: 'El genio escapó de la lámpara. Ahora debemos evitar la próxima guerra con educación, no con armas.',
                        status: 'no-recibido'
                    }
                ]
            },
            {
                id: 2,
                name: 'Robert Oppenheimer',
                number_phone: '+1-202-558-0137',
                last_time_connected: '10:15',
                img: '/Oppenheimer-nueva.jpeg',
                last_message: {
                    id: 1,
                    text: 'Estás ahí?',
                    alternative_text: 'Estás ahí?'

                },
                unread_messages: 0,
                messages: [
                    {
                        emisor: 'YO',
                        hora: '23:10',
                        id: 1,
                        texto: 'Es la bomba?. Me arrepiento de que hayan usado la ciencia para esto. Ahora soy un simple proveedor de ideas, como un cuchillo que otros usan para matar.',
                        status: 'visto'
                    },
                    {
                        emisor: 'USUARIO',
                        hora: '23:11',
                        id: 2,
                        texto: 'Pero sin su carta, los nazis podrían haber ganado. ¿No era el mal menor?',
                        status: 'visto'
                    },
                    {
                        emisor: 'YO',
                        hora: '23:12',
                        id: 3,
                        texto: 'Ningún fin justifica medios inhumanos. La próxima guerra será con palos y piedras',
                        status: 'no-visto'
                    },
                    {
                        emisor: 'YO',
                        hora: '23:13',
                        id: 4,
                        texto: 'Estás ahí?',
                        status: 'no-recibido'
                    }
                ]
            },
            {
                id: 3,
                name: 'Franklin Roosevelt',
                number_phone: '+1-917-565-0198',
                last_time_connected: '11:10',
                img: '/Roosevelt-nueva.jpeg',
                last_message: {
                    id: 1,
                    text: 'Hay otras formas de vencer. La ciencia debería unir, no destruir.',
                    alternative_text: 'Hay otras formas...'
                },
                unread_messages: 0,
                messages:[
                    {
                        emisor: 'YO',
                        hora: '23:10',
                        id: 1,
                        texto: 'No se si debi enviarte la carta...',
                        status: 'visto'
                    },
                    {
                        emisor: 'USUARIO',
                        hora: '23:11',
                        id: 2,
                        texto: 'Profesor, su carta de 1939 fue clave. Pero ¿sabía que Szilárd ya tenía diseños de reactor nuclear cuando la escribieron?',
                        status: 'visto'
                    },
                    {
                        emisor: 'YO',
                        hora: '23:12',
                        id: 3,
                        texto: 'Señor Presidente, solo quise prevenir que Hitler lo lograra primero. Nunca imaginé Hiroshima',
                        status: 'no-visto'
                    },
                    {
                        emisor: 'YO',
                        hora: '23:13',
                        id: 4,
                        texto: 'Hay otras formas de vencer. La ciencia debería unir, no destruir.',
                        status: 'no-recibido'
                    }
                ]
            }
    ]
}

export default mook_data