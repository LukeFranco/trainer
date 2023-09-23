import React from "react";
import styles from "../styles/footer.css";

const Footer = () => {
  return (
    <Box className="Box">
      <h1>GeeksforGeeks: A Computer Science Portal for Geeks</h1>
      <Container className="Container">
        <Row className="Row">
          <Column className="Column">
            <Heading className="Heading">About Us</Heading>
            <FooterLink className="FooterLink" href="#">Aim</FooterLink>
            <FooterLink className="FooterLink" href="#">Vision</FooterLink>
            <FooterLink className="FooterLink" href="#">Testimonials</FooterLink>
          </Column>
          <Column className="Column">
            <Heading className="Heading">Services</Heading>
            <FooterLink className="FooterLink" href="#">Writing</FooterLink>
            <FooterLink className="FooterLink" href="#">Internships</FooterLink>
            <FooterLink className="FooterLink" href="#">Coding</FooterLink>
            <FooterLink className="FooterLink" href="#">Teaching</FooterLink>
          </Column>
          <Column className="Column">
            <Heading className="Heading">Contact Us</Heading>
            <FooterLink className="FooterLink" href="#">Uttar Pradesh</FooterLink>
            <FooterLink className="FooterLink" href="#">Ahemdabad</FooterLink>
            <FooterLink className="FooterLink" href="#">Indore</FooterLink>
            <FooterLink className="FooterLink" href="#">Mumbai</FooterLink>
          </Column>
          <Column className="Column">
            <Heading className="Heading">Social Media</Heading>
            <FooterLink className="FooterLink" href="#">
              <i className="fab fa-facebook-f">
                <span>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink className="FooterLink" href="#">
              <i className="fab fa-instagram">
                <span>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink className="FooterLink" href="#">
              <i className="fab fa-twitter">
                <span>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink className="FooterLink" href="#">
              <i className="fab fa-youtube">
                <span>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;