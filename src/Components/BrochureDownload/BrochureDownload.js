import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaTimes,
  FaWhatsapp
} from 'react-icons/fa';
import './BrochureDownload.css';

const apiUrl = process.env.REACT_APP_BROCHURE_API;

const BrochureDownload = () => {
  const [show, setShow] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customSector, setCustomSector] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    message: 'precisionGrow_brochure',
    domain: 'precisionGrow_brochure',
  });

  const handleOpen = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      sector: '',
      message: 'precisionGrow_brochure',
      domain: 'precisionGrow_brochure',
    });
    setCustomSector('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSectorChange = (e) => {
    const selected = e.target.value;
    setFormData((prev) => ({ ...prev, sector: selected }));
    if (selected !== 'Others') {
      setCustomSector('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const finalSector = formData.sector === 'Others' ? customSector : formData.sector;

      if (formData.sector === 'Others' && !customSector.trim()) {
        alert('Please specify your sector.');
        setIsSubmitting(false);
        return;
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        sector: finalSector,
        message: formData.message,
        domain: formData.domain,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to submit data');
      }

      setIsSubmitted(true);
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="fw-semibold px-4 py-2 brochure-btn rounded-3 d-flex align-items-center gap-2"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
      >
        <FaDownload />
        Download Brochure
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
        size="md"
        contentClassName="brochure-modal-content"
      >
        <Modal.Header>
          <Modal.Title className="fs-5">
            {!isSubmitted && 'Fill the form to get brochure'}
          </Modal.Title>
          <FaTimes
            className="text-dark fs-5 modal-close-icon"
            onClick={handleClose}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleClose()}
          />
        </Modal.Header>

        <Modal.Body className="px-4 py-3">
          {!isSubmitted ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label className="fw-medium d-flex align-items-center gap-2">
                  <FaUser className="text-secondary" /> Full Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="shadow-sm rounded-2"
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label className="fw-medium d-flex align-items-center gap-2">
                  <FaEnvelope className="text-secondary" /> Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="shadow-sm rounded-2"
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label className="fw-medium d-flex align-items-center gap-2">
                  <FaPhoneAlt className="text-secondary" /> Phone Number
                </Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                  className="shadow-sm rounded-2"
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group controlId="formSector" className="mb-3">
                <Form.Label className="fw-medium d-flex align-items-center gap-2">
                  <FaUser className="text-secondary" /> Business Sector
                </Form.Label>
                <Form.Select
                  name="sector"
                  value={formData.sector}
                  onChange={handleSectorChange}
                  className="shadow-sm rounded-2"
                  disabled={isSubmitting}
                  required
                >
                  <option value="">Select your sector</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Food Processing">Food Processing</option>
                  <option value="Retail">Retail</option>
                  <option value="Supply Chain">Supply Chain</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Research & Development">Research & Development</option>
                  <option value="Finance">Finance</option>
                  <option value="Technology">Technology</option>
                  <option value="Others">Others</option>
                </Form.Select>

                {formData.sector === 'Others' && (
                  <Form.Control
                    type="text"
                    className="mt-2 shadow-sm rounded-2"
                    placeholder="Please specify your sector"
                    value={customSector}
                    onChange={(e) => setCustomSector(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                )}
              </Form.Group>

              <div className="d-grid mt-4">
                <Button
                  type="submit"
                  className="fw-semibold py-2 d-flex align-items-center justify-content-center Brobtn gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="ms-2">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit & Continue</span>
                    </>
                  )}
                </Button>
              </div>
            </Form>
          ) : (
            <div className="submission-success mx-auto p-4 rounded-4 text-center">
              <p className="text-success fw-bold fs-4 mb-4">
                Thank you for submitting your details!
              </p>

              <p className="text-secondary mb-1 fs-6 letter-spacing-sm">
                📞 We'll get in touch with you soon.
              </p>

              <p className="text-secondary mb-4 fs-6">
                Contact:{' '}
                <a href="tel:+919876543210" className="text-success fw-semibold text-decoration-none">
                  +91-9876543210
                </a>
              </p>

              <a
                href="assets/brochures/Precision Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="btn btn-success w-100 py-2 rounded-pill d-flex align-items-center justify-content-center gap-3 fw-semibold fs-5 brochure-download-btn"
              >
                <FaDownload size={22} />
                Download Brochure
              </a>

              <p className="text-center text-secondary fs-6 mt-4 d-flex justify-content-center align-items-center gap-2">
                For any questions or assistance, contact us directly on
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-success d-flex align-items-center gap-2 ms-2 text-decoration-none fw-semibold whatsapp-link"
                >
                  <FaWhatsapp size={26} />
                  WhatsApp
                </a>
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BrochureDownload;
