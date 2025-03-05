# 🚀 Prueba Técnica - Frontend con React

Este proyecto es una prueba técnica para el puesto de **Desarrollador Frontend**. La aplicación permite a los usuarios iniciar sesión y visualizar una lista de personajes de **Marvel**, obtenidos a través de la **API de Marvel**.

🔗 **[Demo en Netlify](https://marvel-project-broers.netlify.app/)**  
🔗 **[Repositorio en GitLab](https://github.com/brandonkovenan/broers-project)**

---

## 📌 Características del Proyecto

✅ **Login con validación y reCAPTCHA v2**  
✅ **Protección de rutas privadas** con `PrivateRoute`  
✅ **Consumo de la API de Marvel** con autenticación segura (`hash` MD5)  
✅ **Listado de personajes** con Ant Design  
✅ **Detalle del personaje** con imagen y descripción  
✅ **Estructura modular y escalable** con **React Hooks y Custom Hooks**  
✅ **Diseño limpio con Layout y Breadcrumbs**  
✅ **Mensajes dinámicos con SweetAlert2**

---

## 📌 Requisitos Previos

🔹 **Node.js** v18+  
🔹 **Git** instalado  
🔹 **Cuenta en [Marvel Developer](https://developer.marvel.com/)** para obtener las API Keys

---

## 📌 Instalación y Ejecución 🚀

-- pnpm install
-- pnpm run dev

1️⃣ **Clonar el repositorio**

```sh
git clone https://gitlab.com/tu-usuario/tu-repo.git
cd tu-repo
```

2️⃣ Instalar las dependencias

## 📌 Crea un archivo .env en la raíz del proyecto y agrega:

**VITE_ENV_EMAIL=admin@admin.com**
**VITE_ENV_PASSWORD=Admin**
**VITE_MARVEL_PUBLIC_KEY=tu_public_key**
**VITE_MARVEL_PRIVATE_KEY=tu_private_key**
**VITE_RECAPTCHA_SITE_KEY=tu_site_key**

## 📌 Tecnologías Utilizadas 🛠️

**Tecnología** **Descripción**
**React(19)** `Librería principal para la UI`
**Vite** `Herramienta de construcción rápida`
**Ant Design** `Componentes UI para mejorar el diseño`
**React Router** `Manejo de rutas en la app`
**Axios** `Cliente HTTP para consumir la API de Marvel`
**SweetAlert2** `Alertas dinámicas para feedback de usuario`
**React Google reCAPTCHA** `Validación de bots en el login`
**CryptoJS** `Generación del hash MD5 para Marvel API`
**Netlify** `Hosting del proyecto`
