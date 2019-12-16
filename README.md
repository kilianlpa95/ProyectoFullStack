# ProyectoFullStack

## Manual de instalación

A continuación procederé a explicar paso a paso lo necesario para instalar esta aplicación y mostrarla en un navegador web.

### 1. Debemos asegurarnos de tener instalado todo los necesario es decir:

+ NodeJs. (https://nodejs.org/)
+ Git. (https://git-scm.com/)
+ Postgresql + PgAdmin. (https://www.postgresql.org/)

### 2. Seguidamente procedemos a descargar el proyecto, ya sea desde la consola con git (git clone https://github.com/kilianlpa95/ProyectoFullStack.git) 
### o descargando el ZIP desde https://github.com/kilianlpa95/ProyectoFullStack.

![alt git](https://i.imgur.com/6wrW3YV.png)

### 3. Luego deberemos usar el archivo SQL de la carpeta para crear la base de datos, no sin antes haber puesto la contraseña en "1234" para el usuario postgres o cambiar los datos de la DDBB en el fichero "server/src/database/database.ts", crearemos una de nombre "FullStackDB" y realizamos un backup.

![alt postgres](https://i.imgur.com/ZcizMcH.png)

### 4. Una vez tengamos el proyecto en nuestra carpeta (aquella donde ejecutamos git clone o descomprimimos el proyecto), deberemos acceder a ella desde la consola de comandos para trabajar con NodeJS. 

### 5. Abriremos la consola (asumiremos que cualquiera que trate de mirar esto tendrá conocimientos de sobra para estos pasos) y nos dirigiremos al proyecto (cd ProyectoFullStack) e iremos a la carpeta cliente (cd client/orderControl) y con otra consola al servidor (cd server).

### 6. A continuación habrá que instalar las dependencias, en ambas consolas "npm install".

![alt server](https://i.imgur.com/pkR7Tb5.png)
![alt cliente 1](https://i.imgur.com/oaSAAwi.png)
![alt cliente 2](https://i.imgur.com/oLHwhSk.png)

### 7. Una vez finalice podremos iniciar tanto el servidor como el cliente, en el servidor ejecutaremos "npm run dev" que cogerá unos parámetros preestablecidos (nodemon src/server.js --exec babel-node) y en el cliente ejecutamos "ionic serve -l" para una mejor interfaz gráfica, aquí posiblemente pedirá instalarlo, le daremos que sí.

![alt vista](https://i.imgur.com/ION2Q7F.png)