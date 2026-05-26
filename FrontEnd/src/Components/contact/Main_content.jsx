import React, { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiUser,
  FiBriefcase,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiAlertCircle,
  FiXCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const API_URL = "http://localhost:5000/api/inquary/info";

const initialForm = {
  name: "",
  company: "",
  phoneNum: "",
  email: "",
  product: "",
  load: "",
  city: "",
  msg: "",
};

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim() || fields.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters";
  if (!fields.phoneNum.trim() || !/^[+\d\s\-]{8,15}$/.test(fields.phoneNum.trim()))
    errors.phoneNum = "Enter a valid phone number";
  if (
    !fields.email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())
  )
    errors.email = "Enter a valid email address";
  if (!fields.product) errors.product = "Please select a product";
  if (!fields.load.trim() || fields.load.trim().length < 2)
    errors.load = "Please enter load details";
  if (!fields.city.trim() || fields.city.trim().length < 2)
    errors.city = "City is required";
  return errors;
};

export default function Main_contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const errors = validate(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (apiError) setApiError("");
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    // Touch all fields to trigger validation UI
    const allTouched = Object.keys(initialForm).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    try {
      // Explicitly build payload matching the MongoDB schema fields
      const payload = {
        name:     form.name.trim(),
        email:    form.email.trim(),
        phoneNum: form.phoneNum.trim(),
        company:  form.company.trim(),
        product:  form.product,
        load:     form.load.trim(),
        city:     form.city.trim(),
        msg:      form.msg.trim(),
      };
      console.log("📤 Sending to backend:", payload);

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setApiError(
        err.message === "Failed to fetch"
          ? "Unable to reach server. Please check your connection."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  };

  const isErr = (field) => touched[field] && errors[field];
  const isOk = (field) => touched[field] && !errors[field] && form[field];

  const inputClass = (field) =>
    `input input-bordered input-sm w-full text-xs transition-all focus:outline-none ${
      isErr(field)
        ? "input-error border-red-400 bg-red-50"
        : isOk(field)
        ? "input-success border-green-400 bg-green-50"
        : "border-gray-200 focus:border-orange-400"
    }`;

  const selectClass = (field) =>
    `select select-bordered select-sm w-full text-xs ${
      isErr(field)
        ? "select-error border-red-400 bg-red-50"
        : isOk(field)
        ? "select-success border-green-400 bg-green-50"
        : "border-gray-200 focus:border-orange-400"
    }`;

  const contacts = [
    {
      icon: <FiMapPin className="w-3.5 h-3.5 text-orange-500" />,
      label: "Address",
      value: "Dass Garden, Najafgarh, New Delhi – 110043",
    },
    {
      icon: <FaWhatsapp className="w-3.5 h-3.5 text-orange-500" />,
      label: "Phone / WhatsApp",
      value: "+91 9818259793",
    },
    {
      icon: <FiMail className="w-3.5 h-3.5 text-orange-500" />,
      label: "Email",
      value: "sales@konarkenterprises.in",
    },
    {
      icon: <FiClock className="w-3.5 h-3.5 text-orange-500" />,
      label: "Working Hours",
      value: "Mon – Sat: 9:00 AM – 7:00 PM",
    },
  ];

  return (
    <section className="bg-white py-10 px-4">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-6 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-orange-500">
          Get in Touch
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
          Request a Quote or Site Visit
        </h2>
        <p className="text-xs text-gray-400 mt-1.5 max-w-md mx-auto">
          Share your load details — our engineers will design the right
          stabilizer. Free consultation, no obligation.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
        {/* ── Left Info Card ── */}
        <div className="md:col-span-2 bg-gray-950 rounded-2xl p-5 flex flex-col gap-4 h-full">
          <div>
            <h3 className="text-white text-sm font-bold leading-snug">
              We're Here to Help
            </h3>
            <p className="text-gray-400 text-[11px] mt-1 leading-relaxed">
              Engineers available Mon–Sat. Reply guaranteed within 2 hours.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-gray-200 text-[11px] leading-snug">
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-3 border-t border-white/10 flex flex-wrap gap-2">
            <span className="badge badge-sm text-[10px] bg-orange-500/15 text-orange-400 border border-orange-500/25 gap-1">
              <FiZap className="w-2.5 h-2.5" /> Reply in 2 hours
            </span>
            <span className="badge badge-sm text-[10px] bg-white/5 text-gray-300 border border-white/15 gap-1">
              <FiMapPin className="w-2.5 h-2.5" /> Free site visit
            </span>
          </div>
        </div>

        {/* ── Right Form Card ── */}
        <div className="md:col-span-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
          {submitted ? (
            /* ── Success State ── */
            <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <FiCheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-bold text-gray-800">
                Enquiry Sent!
              </h3>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                Our engineers will review your requirements and respond within{" "}
                <span className="font-semibold text-orange-500">2 hours</span>.
              </p>
              <button
                className="btn btn-sm btn-outline border-orange-400 text-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white text-xs mt-2"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                  setTouched({});
                  setApiError("");
                }}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="text-sm font-bold text-gray-800 mb-4 pb-2 border-b border-orange-100 flex items-center gap-1.5">
                <FiSend className="w-3.5 h-3.5 text-orange-500" />
                Send Enquiry
              </h3>

              {/* API Error Banner */}
              {apiError && (
                <div className="alert alert-error py-2 px-3 mb-3 rounded-xl flex items-center gap-2">
                  <FiXCircle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                  <span className="text-[11px] text-red-700">{apiError}</span>
                </div>
              )}

              {/* Row 1 – Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="label py-0 mb-1">
                    <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1">
                      <FiUser className="w-2.5 h-2.5" /> Your Name *
                    </span>
                    {isOk("name") && <FiCheckCircle className="w-3 h-3 text-green-500" />}
                    {isErr("name") && <FiAlertCircle className="w-3 h-3 text-red-400" />}
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("name")}
                  />
                  {isErr("name") && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="label py-0 mb-1">
                    <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1">
                      <FiBriefcase className="w-2.5 h-2.5" /> Company
                    </span>
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Company / firm"
                    value={form.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("company")}
                  />
                </div>
              </div>

              {/* Row 2 – Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="label py-0 mb-1">
                    <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1">
                      <FiPhone className="w-2.5 h-2.5" /> Phone *
                    </span>
                    {isOk("phoneNum") && <FiCheckCircle className="w-3 h-3 text-green-500" />}
                    {isErr("phoneNum") && <FiAlertCircle className="w-3 h-3 text-red-400" />}
                  </label>
                  <input
                    name="phoneNum"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phoneNum}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("phoneNum")}
                  />
                  {isErr("phoneNum") && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.phoneNum}</p>
                  )}
                </div>

                <div>
                  <label className="label py-0 mb-1">
                    <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1">
                      <FiMail className="w-2.5 h-2.5" /> Email *
                    </span>
                    {isOk("email") && <FiCheckCircle className="w-3 h-3 text-green-500" />}
                    {isErr("email") && <FiAlertCircle className="w-3 h-3 text-red-400" />}
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("email")}
                  />
                  {isErr("email") && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Row 3 – Product & Load */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="label py-0 mb-1">
                    <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      Product Required *
                    </span>
                    {isErr("product") && <FiAlertCircle className="w-3 h-3 text-red-400" />}
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={selectClass("product")}
                  >
                    <option value="">Select product…</option>
                    <option>Servo Voltage Stabilizer</option>
                    <option>Static Voltage Stabilizer</option>
                    <option>Isolation Transformer</option>
                    <option>Online UPS</option>
                    <option>AVR / CVT</option>
                    <option>Custom / Other</option>
                  </select>
                  {isErr("product") && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.product}</p>
                  )}
                </div>

                <div>
                  <label className="label py-0 mb-1">
                    <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                      Load (KVA / Amps) *
                    </span>
                    {isOk("load") && <FiCheckCircle className="w-3 h-3 text-green-500" />}
                    {isErr("load") && <FiAlertCircle className="w-3 h-3 text-red-400" />}
                  </label>
                  <input
                    name="load"
                    type="text"
                    placeholder="e.g. 50 KVA or 100A"
                    value={form.load}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("load")}
                  />
                  {isErr("load") && (
                    <p className="text-[10px] text-red-400 mt-0.5">{errors.load}</p>
                  )}
                </div>
              </div>

              {/* Row 4 – City */}
              <div className="mb-3">
                <label className="label py-0 mb-1">
                  <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1">
                    <FiMapPin className="w-2.5 h-2.5" /> City *
                  </span>
                  {isOk("city") && <FiCheckCircle className="w-3 h-3 text-green-500" />}
                  {isErr("city") && <FiAlertCircle className="w-3 h-3 text-red-400" />}
                </label>
                <input
                  name="city"
                  type="text"
                  placeholder="City, State"
                  value={form.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("city")}
                />
                {isErr("city") && (
                  <p className="text-[10px] text-red-400 mt-0.5">{errors.city}</p>
                )}
              </div>

              {/* Message */}
              <div className="mb-4">
                <label className="label py-0 mb-1">
                  <span className="label-text text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                    Message
                  </span>
                  <span className="text-[10px] text-gray-300">
                    {form.msg.length}/500
                  </span>
                </label>
                <textarea
                  name="msg"
                  placeholder="Describe your application, current voltage issues, budget, timeline…"
                  value={form.msg}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={500}
                  rows={3}
                  className="textarea textarea-bordered textarea-sm w-full text-xs border-gray-200 focus:border-orange-400 focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-sm w-full bg-orange-500 hover:bg-orange-600 text-white border-none text-xs font-semibold tracking-wide shadow-md shadow-orange-200 transition-all disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-xs" />
                    Submitting…
                  </>
                ) : (
                  <>
                    <FiSend className="w-3.5 h-3.5" />
                    Submit Enquiry — Get Quote in 2 Hours
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-gray-400 mt-2 flex items-center justify-center gap-1">
                <FiShield className="w-3 h-3" /> We will not share your details.
                No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}