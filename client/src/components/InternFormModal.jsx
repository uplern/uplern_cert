import { useEffect, useMemo, useState } from "react";
import { CERT_TYPES } from "../constants";

const makeInitialState = (intern) => ({
  fullName: intern?.fullName || "",
  email: intern?.email || "",
  certificates: intern?.certificates?.map((item) => item.type) || []
});

const InternFormModal = ({ open, intern, onClose, onSubmit, submitting }) => {
  const [form, setForm] = useState(() => makeInitialState(intern));
  const [error, setError] = useState("");

  const title = useMemo(() => (intern ? "Edit Intern Record" : "Add New Intern"), [intern]);

  useEffect(() => {
    if (open) {
      setForm(makeInitialState(intern));
      setError("");
    }
  }, [open, intern]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCertificateToggle = (key) => {
    setForm((prev) => {
      const exists = prev.certificates.includes(key);
      const certificates = exists ? prev.certificates.filter((t) => t !== key) : [...prev.certificates, key];
      return { ...prev, certificates };
    });
  };

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Full name and email are required.");
      return;
    }
    if (form.fullName.trim().length > 100) {
      setError("Full name is too long.");
      return;
    }
    const result = await onSubmit({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      certificates: form.certificates
    });
    if (!result.ok) {
      setError(result.message);
      return;
    }
    onClose();
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal-card">
        <div className="modal-head">
          <h2 className="modal-title">{title}</h2>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <form onSubmit={submit} className="form-grid modal-form">
          <label className="form-control">
            <span>Full Name</span>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              maxLength={100}
              autoFocus
            />
          </label>

          <label className="form-control">
            <span>Email Address</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. rahul@email.com"
              maxLength={120}
            />
          </label>

          <div className="form-control">
            <span style={{ marginBottom: '0.75rem' }}>Issued Certificate Types</span>
            <div className="chips">
              {Object.entries(CERT_TYPES).map(([key, label]) => {
                const active = form.certificates.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    className={`chip ${active ? "chip-active" : ""}`}
                    onClick={() => handleCertificateToggle(key)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {error ? <div className="error-box">{error}</div> : null}

          <div className="modal-actions">
            <button type="button" className="btn btn-outline" onClick={onClose} disabled={submitting}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? "Saving..." : "Save Record"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InternFormModal;
