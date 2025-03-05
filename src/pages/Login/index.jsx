import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Input } from "antd";
import { Form } from "antd";
import "./Login.css";
import { useState, useEffect } from "react";

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

export function Login() {

    const ENV_PASSWORD = import.meta.env.VITE_ENV_PASSWORD;
    const ENV_EMAIL = import.meta.env.VITE_ENV_EMAIL;
    const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    const [loading, setLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (values) => {
        setLoading(true);
        console.log("values: ", values);
        if (values.email === '' || values.password === '') {

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

    useEffect(() => {
        const { email, password } = formValues;
        setIsFormValid(email.trim() !== "" && password.trim() !== "" && captchaValue);
    }, [formValues, captchaValue]);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
        if (isAuthenticated) {
            navigate("/characters"); // 🔥 Evita que un usuario logueado vuelva al login
        }
    }, []);

    return (
        <div className="login-container">
            <div className="login-image">
                <img src="/background_login.svg" alt="login image" />
            </div>
            <div className="login-form">
                <h2>Iniciar sesión</h2>
                <Form layout="vertical" onFinish={handleLogin}>
                    <Form.Item label="Correo electrónico" name="email" rules={[
                        { required: true, message: "Ingresa tu correo" },
                        { type: "email", message: "Ingresa un correo válido" },
                    ]}>
                        <Input
                            type="email"
                            value={formValues.email}
                            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="Contraseña" name="password" rules={[{ required: true, message: "Ingresa tu contraseña" }]}>
                        <Input.Password
                            value={formValues.password}
                            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                        />
                    </Form.Item>

                    <Form.Item>
                        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={(value) => setCaptchaValue(value)} />
                    </Form.Item>

                    <Form.Item>
                        <Button disabled={!isFormValid} type="primary" htmlType="submit" loading={loading} block>
                            Iniciar sesión
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
