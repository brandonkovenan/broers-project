import ReCAPTCHA from "react-google-recaptcha";
import { Button, Input } from "antd";
import { Form } from "antd";
import { useLogin } from "./hooks/useLogin";
import "./styles/login.css";

export function Login() {

    const {
        loading,
        isFormValid,
        formValues,
        setFormValues,
        setCaptchaValue,
        handleLogin,
    } = useLogin();

    const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

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
