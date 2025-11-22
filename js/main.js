// PizzaMya - JavaScript Principal

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const btnsCarrito = document.querySelectorAll('.btn-user');

    btnsCarrito.forEach(btn => {
        if (btn.innerHTML.includes('Carrito')) {
            btn.innerHTML = `🛒 Carrito (${carrito.length})`;
        }
    });
}

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio, tipo = 'producto') {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

    carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: 1,
        tipo: tipo
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Mostrar notificación
    mostrarNotificacion(`${nombre} agregado al carrito`, 'success');

    // Actualizar contador
    actualizarContadorCarrito();
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tipo = 'info') {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion notificacion-${tipo}`;
    notificacion.textContent = mensaje;

    // Estilos de notificación
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${tipo === 'success' ? '#28a745' : tipo === 'error' ? '#dc3545' : '#FF5F06'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notificacion);

    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Agregar animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para formatear precio
function formatearPrecio(precio) {
    return `$${precio.toFixed(2)}`;
}

// Función para obtener fecha formateada
function obtenerFechaFormateada() {
    const fecha = new Date();
    return fecha.toLocaleDateString('es-MX', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Función para limpiar el carrito
function limpiarCarrito() {
    if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
        localStorage.removeItem('carrito');
        actualizarContadorCarrito();
        mostrarNotificacion('Carrito vaciado', 'info');

        // Recargar página si estamos en la página del carrito
        if (window.location.pathname.includes('carrito.html')) {
            window.location.reload();
        }
    }
}

// Función para verificar si el usuario está logueado
function verificarSesion() {
    const usuario = localStorage.getItem('usuario');
    return usuario !== null;
}

// Actualizar contador al cargar cualquier página
document.addEventListener('DOMContentLoaded', function() {
    actualizarContadorCarrito();

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Exportar funciones globalmente
window.agregarAlCarrito = agregarAlCarrito;
window.actualizarContadorCarrito = actualizarContadorCarrito;
window.mostrarNotificacion = mostrarNotificacion;
window.validarEmail = validarEmail;
window.formatearPrecio = formatearPrecio;
window.limpiarCarrito = limpiarCarrito;
window.verificarSesion = verificarSesion;
