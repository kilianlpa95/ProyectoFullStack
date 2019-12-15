# ProyectoFullStack

## Manual de instalación

A continuación procederé a explicar paso a paso lo necesario para instalar esta aplicación y mostrarla en un navegador web.

### 1. Debemos asegurarnos de tener instalado todo los necesario es decir:
    - NodeJs. (https://nodejs.org/)
    - Git. (https://git-scm.com/)

### 2. Seguidamente procedemos a descargar el proyecto, ya sea desde la consola con git (git clone https://github.com/kilianlpa95/ProyectoFullStack.git) o descargando el ZIP desde https://github.com/kilianlpa95/ProyectoFullStack.

### 3. Una vez tengamos el proyecto en nuestra carpeta (aquella donde ejecutamos git clone o descomprimimos el proyecto), deberemos acceder a ella desde la consola de comandos para trabajar con NodeJS, abriremos la consola (asumiremos que cualquiera que trate de mirar esto tendrá conocimientos de sobra para estos pasos) y nos dirigiremos al proyecto (cd ProyectoFullStack) e (preferentemente con dos consolas distintas, una para arrancar el servidor y otra para arrancar el cliente) iremos a la carpeta cliente (cd client/orderControl) y con la otra consola al servidor (cd server).

### 4. A continuación habrá que instalar las dependencias, en ambas consolas "npm install".

### 5. Una vez finalice podremos iniciar tanto el servidor como el cliente, en el servidor ejecutaremos "npm run dev" que cogerá unos parámetros preestablecidos (nodemon src/server.js --exec babel-node) y en el cliente ejecutamos "ionic serve -l" para una mejor interfaz gráfica, aquí posiblemente pedirá instalarlo, le daremos que sí.