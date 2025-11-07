import { useState } from "react";
import axios from "axios";

const  ContactForm=()=> {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        form
      );
      console.log(res);
      if (res.status === 200) {
        setStatus("Form Submitted");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      }
    } catch {
      setStatus("Submission failed. Try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10">
      {/* Left Quote Text */}
      <div className="w-full md:w-1/2 text-gray-800 text-base md:text-lg leading-relaxed">
        <p>
          Whether you have an idea, a question, or simply want
          to explore how V can work together, V're just a
          message away.
        </p>
        <p className="mt-4">
          Let’s catch up over coffee ☕<br />
          Great stories always begin with a good conversation.
        </p>
      </div>

      {/* Right Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 flex flex-col bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 backdrop-blur-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          Join the Story
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Ready to bring your vision to life? Let’s talk.
        </p>

        <input
          type="text"
          placeholder="Your name*"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-gray-300 p-2 rounded mb-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your email*"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-gray-300 p-2 rounded mb-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border border-gray-300 p-2 rounded mb-2"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <textarea
          placeholder="Your message*"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border border-gray-300 p-2 rounded mb-2 h-28 resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}

        <button
          type="submit"
          className="mt-3 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded transition-all"
        >
          Submit
        </button>

        {status && <p className="text-center mt-3 text-sm">{status}</p>}
      </form>
    </div>
  );
}


export default ContactForm