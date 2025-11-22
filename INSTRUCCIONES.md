# 🍕 PizzaMya - Instrucciones de Instalación

## Requisitos
- Visual Studio Code instalado
- Extensión "Live Server" para VS Code (recomendado)

## Pasos para ejecutar el proyecto:

### 1. Descomprimir el archivo
Extrae el contenido de `PizzaMya-App.zip` en una carpeta de tu elección.

### 2. Abrir en Visual Studio Code
- Abre Visual Studio Code
- Ve a `Archivo` → `Abrir carpeta...`
- Selecciona la carpeta donde descomprimiste el proyecto

### 3. Instalar la extensión Live Server (si no la tienes)
- Ve a la pestaña de Extensiones (icono de cuadrados en la barra lateral izquierda)
- Busca "Live Server" por Ritwick Dey
- Haz clic en "Instalar"

### 4. Ejecutar la aplicación

**Opción A - Con Live Server (Recomendado):**
- Abre el archivo `index.html`
- Haz clic derecho en el editor
- Selecciona "Open with Live Server"
- La aplicación se abrirá automáticamente en tu navegador

**Opción B - Directamente:**
- Simplemente abre el archivo `index.html` con tu navegador
- Nota: algunas funcionalidades pueden requerir un servidor local

## Estructura del Proyecto

```
PizzaMya-App/
│
├── index.html              # Página principal
├── login.html              # Inicio de sesión
├── registro.html           # Registro de usuarios
├── catalogo.html           # Catálogo general
├── pizzas.html             # Catálogo de pizzas
├── bebidas.html            # Catálogo de bebidas
├── combos.html             # Catálogo de combos
├── detalle-pizza.html      # Detalles de una pizza
├── carrito.html            # Carrito de compras
├── mi-pedido.html          # Página de mi pedido
├── pedido.html             # Confirmación de pedido
├── perfil.html             # Perfil del usuario
├── editar-perfil.html      # Editar perfil
├── agregar-direccion.html  # Agregar dirección de entrega
├── ordena.html             # Página de ordenar
├── mision.html             # Misión de la empresa
├── vision.html             # Visión de la empresa
├── terminos.html           # Términos y condiciones
├── politicas.html          # Políticas de privacidad
│
├── css/
│   └── styles.css          # Estilos globales
│
├── js/
│   └── main.js             # Funcionalidades JavaScript
│
└── images/                 # Carpeta para imágenes
```

## Navegación del sitio

1. **Inicio** (`index.html`): Página de bienvenida
2. **Catálogo** (`pizzas.html`): Ver todas las pizzas disponibles
3. **Carrito** (`carrito.html`): Revisar productos agregados
4. **Perfil**: Gestionar tu cuenta (requiere login simulado)

## Características

✅ Diseño responsive (se adapta a móviles y tablets)
✅ Sistema de carrito de compras
✅ Catálogo de productos (pizzas, bebidas, combos)
✅ Sistema de login/registro simulado
✅ Perfil de usuario
✅ Proceso de checkout completo
✅ Páginas informativas (misión, visión, políticas)

## Notas

- Esta es una aplicación de demostración (frontend only)
- No incluye backend real ni base de datos
- Los datos se manejan con localStorage del navegador
- Las imágenes de productos están usando placeholders

## Soporte

Si tienes algún problema o pregunta, consulta el README.md principal del proyecto.

¡Disfruta probando PizzaMya! 🍕
