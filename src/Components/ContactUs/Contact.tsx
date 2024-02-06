import React, { useState } from "react";
import { TextField, Button, Box, Container, Grid } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="contact-form">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box className="contact-info">
              <div>
                <h2>Contact Information</h2>
                <p className="phone-number">(+91) 98188 25848</p>
                <p className="phone-number">(+91) 99108 96623</p>
                <p className="phone-number">(+91) 88262 64586</p>
                <p className="operation-hours">
                  HOURS OF OPERATION: 11AM - 8PM<br />
                  Call us for any kind of support. We will provide you with an effective resolution for any query you have.
                </p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width="100%" margin="0px" className="form-container">
              <h2>Contact Us</h2>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field"
              />
              <TextField
                label="Last Name"
                variant="outlined"
                name="lastName"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                className="input-field"
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
              <TextField
                label="Contact"
                variant="outlined"
                name="contact"
                fullWidth
                value={formData.contact}
                onChange={handleChange}
                className="input-field"
              />
              <TextField
                label="Subject"
                variant="outlined"
                name="subject"
                fullWidth
                value={formData.subject}
                onChange={handleChange}
                className="input-field"
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                fullWidth
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="input-field"
              />
              <Button variant="contained" className="submit-button" type="submit">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;