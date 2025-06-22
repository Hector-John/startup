"use client";

import { useState } from "react";
import { useToast } from "./ToastProvider";
import Button from "./button";

const services = [
  "Web App Development",
  "Website Design",
  "E-commerce Setup",
  "Payment Integration",
  "UI/UX design",
  "Ongoing Maintenance",
  "Something Else",
];

const QuoteRequestForm = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPhone, setShowPhone] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 5
          ? "Full name must be at least 5 characters."
          : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Please enter a valid email address."
          : "";
      case "serviceType":
        return !value ? "Please select a service." : "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      serviceType: validateField("serviceType", formData.serviceType),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((msg) => msg === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        showToast("Your request has been sent. We'll be in touch!", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        });
        setErrors({});
        setShowPhone(false);
        setShowMessage(false);
      } else {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-gray-900/50 text-gray-100 border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
          placeholder="Juan Hakheem"
        />
        {errors.name && (
          <p className="text-sm text-red-400 mt-1.5">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-gray-900/50 text-gray-100 border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="text-sm text-red-400 mt-1.5">{errors.email}</p>
        )}
      </div>

      {/* Toggle Phone */}
      {!showPhone && (
        <button
          type="button"
          onClick={() => setShowPhone(true)}
          className="text-blue-400/90 text-sm font-medium hover:text-blue-300 transition-colors flex items-center gap-1"
        >
          <span>+</span> Add phone number
        </button>
      )}

      {/* Phone */}
      {showPhone && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone (Optional)
          </label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-900/50 text-gray-100 border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
            placeholder="+1 (___) ___ ____"
          />
        </div>
      )}

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Service Interested In *
        </label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full bg-gray-900/50 text-gray-100 border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all appearance-none"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="text-sm text-red-400 mt-1.5">{errors.serviceType}</p>
        )}
      </div>

      {/* Toggle Message */}
      {!showMessage && (
        <button
          type="button"
          onClick={() => setShowMessage(true)}
          className="text-blue-400/90 text-sm font-medium hover:text-blue-300 transition-colors flex items-center gap-1"
        >
          <span>+</span> Add extra project details
        </button>
      )}

      {/* Message */}
      {showMessage && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Details (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your project goals, timeline, and any specific requirements..."
            className="w-full bg-gray-900/50 text-gray-100 border border-gray-700 px-4 py-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 transition-all"
          />
        </div>
      )}

      <Button type="submit" disabled={loading} className="w-full mt-4">
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Request"
        )}
      </Button>
    </form>
  );
};

export default QuoteRequestForm;
