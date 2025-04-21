import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully. I will get back to you soon!'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };
  
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };
  
  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'bsanjay235@gmail.com',
      link: 'mailto:bsanjay235@gmail.com'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+91 7293361859',
      link: 'tel:917293361859'
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Kozhikode',
      link: "https://maps.app.goo.gl/mtqj32q5B6RZVorS9"
    }
  ];
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="section contact">
        <div className="contact__container">
          <motion.div 
            className="contact__content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__content-title">
              <p className="subtitle">Get In Touch</p>
              <h2>Let's Discuss Your Project</h2>
            </div>
            
            <p className="contact__content-text">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other requests or questions, don't hesitate to contact me using the form.
            </p>
            
            <div className="contact__content-info">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="contact__content-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  {info.icon}
                  <div>
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="contact__form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: 'var(--spacing-sm)',
                  marginBottom: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-sm)',
                  backgroundColor: formStatus.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: formStatus.success ? 'var(--success-color)' : 'var(--error-color)',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {formStatus.success ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span style={{ marginLeft: '0.5rem' }}>{formStatus.message}</span>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="contact__form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="button primary contact__form-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send size={16} style={{ marginLeft: '0.5rem' }} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section" style={{ padding: 0 }}>
        <div style={{ height: '400px', width: '100%' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m15!1m10!1m3!1d172!2d75.7609122!3d11.5658964!2m1!1f121.09!3m2!1i1024!2i768!4f35!3m2!1m1!2zMTHCsDMzJzU4LjIiTiA3NcKwNDUnMzkuNyJF!5e1!3m2!1sen!2sin!4v1745259137701!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map location"
          ></iframe>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;