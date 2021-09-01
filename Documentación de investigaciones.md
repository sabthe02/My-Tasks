Documento de investigaciones

Notas generales: Usé parte de la estructura de lo desarrollado en clase, le fui agregando y sacando cosas. Lo hice así  por falta de tiempo

Estilos:
- Se cambió el tema Minty a Litera. En realidad el tema que más me hubiese gustado ya sería Minty, pero como así se pedía, lo cambié. Usé este tema porque me parecía mejor dentro de las opciones que había y dentro del contexto de la app. Investigué otros, pero no encontré ninguno que me haya convencido 100%. 
- Cambié color del header y simbolito de la app a otro. Dejé simple el header con las funcionalidades que se iban a usar. En general hice bastantes cambios a los estilos para que se vea un poco distinto al modelo que hicimos en clase. Creo que perdí demasiado tiempo con esas cosas al final :-(

Página Landing:
- Saqué todo lo que había que se refería a productos porque no combinaba con el tema de ToDo List. También saqué el menú del Header que no iba a usarse.
- Saqué todos los hyperlinks del footer salvo el "Sobre nosotros", ya que no tendría sentido en este caso dejar los otros. Puse con faker que se autogenere contenido en esa página ("sobreNosotros")
- Puse carousel de Bootstrap (el oscuro con captaciones, dejé solo los títulos de las captaciones) para breve descriptivo de la app, ajustando el tamaño de la imágen "a mano" (con CSS) porque no quería que se mostrara ninguna imagen sino solamente texto. El carousel no me funcionaba si sacaba las imágenes del todo, e investigando en internet no encontré solución a eso tampoco, por eso puse una imágen del mismo color que el fondo de la página para solucionarlo de esa manera. Sé que no debe ser lo que se estila hacer, pero lamentablemente no pude solucionarlo de otra manera :-(.
- Le puse más estilos / apariencia más linda al nombre de la app y usé Animate CSS, también usé un ejemplo de estilo que me gustó en internet, le cambié el line height, height, font-weight y padding a mano para que quede mejor adaptado a la página. Estuve pensando en que quede lindo en la web o en dispositivos no super chicos, estoy consciente que ahí el título quedaría un poquito cortado en los bordes.
- Agregué botón para registro/login. Le puse el botón grande de Bootstrap. Cambié el estilo del botón (y demás botones de la app) "a mano". En el caso del Login y Registro lo quise hacer lo más simple posible, por eso puse un botón solo para ambas cosas y que después el usuario pueda elegir por tab según corresponda.

Login y Registro:

Hice un diseño con una mezcla de Bootstrap y un template que encontré por internet que me gustó que lo adapté a mano. Elegí un Login/Registro de estilo "tabbed" porque me parecía más amigable y sencillo. 
La idea es que una vez que se registre el usuario, el localStorage se setea como "logueado" y cuando se quisiera (accidentalmente) registrar nuevamente, se chequea si ya existe como logueado y le tire un alert. Lo mismo si se intenta loguear pero todavía no existe la cuenta (no existe en el LocalStorage). En ambos casos se chequea si se ingresó un e-mail "válido" (al estilo "anystring@anystring.anystring"), de lo contrario tira un alert. También tira un alert si en el registro no matchean las 2 contraseñas.
Mi idea fue que solo cuando el usuario activamente cierra la sesión (una vez que está en la Home y va a "cerrar sesión"), se setea como deslogeado (se borra el LocalStorage). Si estando en la página de registro, simplemente vuelve a la Landing haciendo click en el simbolito de la app, no se desloguea, lo mismo si lo hace estando en la home, en "Sobre Nosotros" etc.

Home: 

En términos generales no llegué a modificar / agregar lo que quería por falta de tiempo :-(. Supongo que me convendría hacer esta página (y quizás la de estadísticas) de "a cero", pero simplemente no llegué a poder hacerlo. Entiendo que no es aceptable, pero dediqué a este proyecto en promedio 2 horas por día y aún así no llegué (tengo 2 trabajos y no falté nunca a ninguna clase, y encima estudio otra cosa todavía). Estuve tanto tiempo investigando y colgada con el login, la landing, el diseño etc. que no me dio el tiempo. También siento que me faltaron herramientas para hacerlo, mientras para el login con un poco de ayuda pude lograrlo básicamente Googleando, probando, fallando, googleando más y lograr la mayoría de lo que quería hacer, es mucho más complejo el flujo de las ToDos y sinceramente no entiendo todo el archivo JS existente sin investigar mucho más en Google. Me di cuenta tarde lamentablemente que tendría que haberlo hecho de a cero (quizás de manera que lo entendía mejor), es por eso que no lo hice de a cero. A continuación una lista de las cosas que sí le cambié y luego lo que sé que hay que cambiar, pero no llegué a hacerlo.

- Saqué Preferencias (porque ya sabía que no me iba a dar el tiempo) sumando a eso que cuando investigué aplicaciones ToDo en UI/UX, al menos que me acuerde, no venían con una opción de "preferencias" (capaz que no investigué las suficientes...)
- Saqué el toggle menu porque no se usaría (al menos no en lo que yo tenía pensado hacer, que sería bien básico)
- Cambié estilos como del botón de búsqueda, botón agregar tareas, botones en general etc.
- Saqué "Mi día" porque no habíamos definido una fecha para las tareas y le calculé que no me iba a dar el tiempo para implementarlo
- Si el usuario toca en "cerrar sesión", se deslogea y se borra el LocalStorage
- Había unos casos que estaba "temlpate" escrito en vez de "template", los suplanté
- Le puse una constante que genere un número randómico de tareas a generar para no ponerlas a mano (en principio lo había hecho para probar lo de Infinite Scroll que luego no pude hacer)
- Cambié las coordenadas por defecto del mapa (no sirve de mucho, porque el mapa no se muestra)

Cosas que sé que no funcionan, pero que no logré hacerlas :-(:

- Experimenté con Infinite Scroll (me refiero al "Plugin" que importás el Script y luego se agrega a un contenedor), entendí que hay que pegar el Script, pero no la forma de cómo aplicarlo al sistema existente. Tal vez porque el Masonry / Bootstrap ya te hace un scroll automático? No me quedó claro cómo podría aplicarlo a las cards y por ende lo saqué

- Aunque no cambié nada de esa parte del código, por algún motivo que no logré encontrar, todos los bordes de todas las cards se marcan como verdes (= LOW/no importante). Estuve mirando la función y las clases de Bootswatch Litera (por si era el cambio de Minty a Litera) y probando con eso pero igual no me funciona. No recuerdo que haya andado mal eso en clase y me agarré la última versión de la home, así que estoy re perdida acá sinceramente.

- Cuando voy a "Crear una tarea", funciona, pero no me deja escribir nada adentro. Sinceramente me di cuenta tarde de esto y no me acuerdo si en clase lo habíamos por alguna razón dejado así, creí que no, que lo habíamos hecho y por eso no le di bola antes. Sé que debería ir en el div con clase "modal-body"...".

- Aunque lo único que le cambié a la funcionalidad del mapa fue la clave de Google Places que sí creé la mía y la reemplacé, no está mostrando ningún mapa en ninguna tarea creada. Me parece muy raro porque me suena al principio haberlo probado (uno de los primeros cambios que hice fue cambiar esa clave y revisar que todo funcionaba igual), pero ahora ya no me funciona. Cuando inspeciono la página, me tira como una notificación que podría llegar a tener que ver, pero quizás no, la verdad que es otra de las cosas que no logré entender por qué no funcionan.

- La página de estadísticas NO la llegué ni a mirar :-(. Lo único que le hice fueron cambios de estilo. Simplemente no me dio el tiempo para cambiarle más nada. Por ende está igual que en la versión que se hizo en clase.

En conclusión quedé contenta con lo que logré hacer de a cero, pero muy disatisfecha con las funcionalidades que no funcionan y/o a las que no llegué.
Yo empecé el curso con cero conocimiento de programación y le dediqué decenas de horas investigando y tratando de resolver cosas por mi cuenta e igual no llegué, me da mucha pena no poder entregar algo mejor.

De no ser aceptable, puedo seguir trabajando sobre el proyecto (lo más probable es que haría una versión más simple de la home, corrigiría la creación de tareas pero sin tantas funcionalidades y revisaría la parte de estadísticas.


