import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const alertError = (type, title, text) => {
    return MySwal.fire({
        icon: type,
        title: title,
        text: text,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
    });
};

export const useLogin = () => {
    const ENV_PASSWORD = import.meta.env.VITE_ENV_PASSWORD;
    const ENV_EMAIL = import.meta.env.VITE_ENV_EMAIL;
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const { email, password } = formValues;
        setIsFormValid(email.trim() !== "" && password.trim() !== "" && captchaValue);
    }, [formValues, captchaValue]);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
        if (isAuthenticated) {
            navigate("/characters");
        }
    }, []);

    const handleLogin = (values) => {
        setLoading(true);

        if (values.email === "" || values.password === "") {
            setLoading(false);
            return alertError("error", "Error", "Por favor completa todos los campos.");
        }

        if (!captchaValue) {
            setLoading(false);
            return alertError("error", "Error", "Por favor completa el reCAPTCHA.");
        }

        if (values.email !== ENV_EMAIL || values.password !== ENV_PASSWORD) {
            setLoading(false);
            return alertError("error", "Error", "Correo o contraseña incorrectos");
        }

        localStorage.setItem("user", JSON.stringify(values));
        localStorage.setItem("isAuthenticated", "true");
        setLoading(false);
        navigate("/characters");
    };

    return {
        loading,
        isFormValid,
        formValues,
        captchaValue,
        setFormValues,
        setCaptchaValue,
        handleLogin,
    };
};
