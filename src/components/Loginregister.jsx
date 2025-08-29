import { useState } from "react";
import { Button, Form, Modal, Alert, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash, Envelope, Lock, Person, Google, Facebook, Github } from "react-bootstrap-icons";
import "../index.css";

function LoginRegister() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [hover, setHover] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleClose = () => {
    setShow(false);
    setErrors({});
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: ""
    });
  };
  const handleShow = () => setShow(true);
  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    setErrors({});
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
    if (name === "password") checkPasswordStrength(value);
  };
  const checkPasswordStrength = (password) => {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (strongRegex.test(password)) setPasswordStrength("strong");
    else if (mediumRegex.test(password)) setPasswordStrength("medium");
    else if (password.length > 0) setPasswordStrength("weak");
    else setPasswordStrength("");
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email address is invalid";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (activeTab === "register") {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setTimeout(() => {
        handleClose();
        alert(activeTab === "login" ? "Login successful!" : "Registration successful!");
      }, 500);
    }
  };
  const PasswordStrengthIndicator = () => {
    if (!passwordStrength) return null;
    return (
      <div className="mt-2">
        <div className="progress" style={{ height: "5px" }}>
          <div
            className={`bg-${passwordStrength === "weak" ? "danger" : passwordStrength === "medium" ? "warning" : "success"}`}
            style={{ width: `${passwordStrength === "weak" ? "33%" : passwordStrength === "medium" ? "66%" : "100%"}` }}
          ></div>
        </div>
        <small className={`text-${passwordStrength === "weak" ? "danger" : passwordStrength === "medium" ? "warning" : "success"}`}>
          Password strength: {passwordStrength}
        </small>
      </div>
    );
  };

  return (
    <>
      <Button
        onClick={handleShow}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? "black" : "green",
          color: "white",
          border: "none",
          marginLeft: "5px",
          transition: "background-color 0.3s ease",
          padding: "10px 20px",
          borderRadius: "6px",
          fontWeight: "600"
        }}
      >
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered className="auth-modal">
        <Modal.Header closeButton className="border-0 pb-0">
          <div className="d-flex w-100 justify-content-center gap-2">
            <Button
              className={`auth-tab-button ${activeTab === "login" ? "active-tab" : ""}`}
              onClick={() => handleTabSelect("login")}
            >
              Login
            </Button>
            <Button
              className={`auth-tab-button ${activeTab === "register" ? "active-tab" : ""}`}
              onClick={() => handleTabSelect("register")}
            >
              Register
            </Button>
          </div>
        </Modal.Header>

        <Modal.Body>
          {errors.general && <Alert variant="danger">{errors.general}</Alert>}
          <Form onSubmit={handleSubmit}>
            {activeTab === "register" && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><Person /></InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      isInvalid={!!errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><Person /></InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      isInvalid={!!errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <InputGroup>
                <InputGroup.Text><Envelope /></InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text><Lock /></InputGroup.Text>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  isInvalid={!!errors.password}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ borderColor: "#ced4da" }}
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </Button>
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </InputGroup>
              <PasswordStrengthIndicator />
            </Form.Group>

            {activeTab === "register" && (
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text><Lock /></InputGroup.Text>
                  <Form.Control
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{ borderColor: "#ced4da" }}
                  >
                    {showConfirmPassword ? <EyeSlash /> : <Eye />}
                  </Button>
                  <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            )}

            {activeTab === "login" && (
              <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <a href="#forgot-password" style={{ textDecoration: "none", color: "#0d6efd" }}>Forgot password?</a>
              </Form.Group>
            )}

            <div className="d-grid gap-2">
              <Button 
                variant="primary" 
                type="submit" 
                size="lg"
                style={{
                  backgroundColor: activeTab === "login" ? "#0d6efd" : "#198754",
                  border: "none",
                  padding: "12px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                {activeTab === "login" ? "Sign In" : "Create Account"}
              </Button>
            </div>
          </Form>

          <div className="divider my-4"><span>Or continue with</span></div>

          <div className="text-center">
            <div className="d-flex justify-content-center gap-3">
              <Button variant="outline-secondary" className="social-btn"><Google color="#DB4437" size={20} /></Button>
              <Button variant="outline-secondary" className="social-btn"><Facebook color="#4267B2" size={20} /></Button>
              <Button variant="outline-secondary" className="social-btn"><Github color="#333" size={20} /></Button>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
          <p className="text-muted mb-0">
            {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
            <Button variant="link" onClick={() => handleTabSelect(activeTab === "login" ? "register" : "login")} style={{ padding: "0", textDecoration: "none", color: "#0d6efd", fontWeight: "500" }}>
              {activeTab === "login" ? "Register now" : "Login here"}
            </Button>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginRegister;
