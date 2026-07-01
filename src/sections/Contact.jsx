import { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const showAlertMessage = useCallback((type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Naman",
          from_email: formData.email,
          to_email: "namankumar.sec@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Message transmitted successfully.");
    } catch (error) {
      setIsLoading(false);
      showAlertMessage("danger", "Transmission failed. Retry?");
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50 opacity-30"
        quantity={60}
        ease={80}
        color={"#33c2cc"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-accent/20 rounded-2xl bg-surface/80 backdrop-blur">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading text-white">Contact</h2>
          <p className="text-sm text-text-muted">
            Got a security challenge or just want to talk exploits? Drop a message.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label text-text-muted">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label text-text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="john@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label text-text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Describe your security challenge..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-sm text-center rounded-md cursor-pointer bg-surface border border-accent/50 text-accent font-medium hover:bg-accent/10 hover:border-accent transition-colors"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
