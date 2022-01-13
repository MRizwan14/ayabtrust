import React, { useState } from "react";
import Location from "./images/location1.jpg";
import Mail from "./images/mail.jpg";
import Call from "./images/call.jpg";
import {
  Container,
  ContactUsContainer,
  ContactUsInfo,
  ContactUsdiv,
  ContactUsH2,
  ContactInfoList,
  ContactInfoListS,
  ContactInfoItem,
  ContactUsSpan,
  ContactUSImg,
  ContactInfoItemA,
  ContactUsH21,
  ContactUsSpan2,
} from "./ContactUsElements";
import {
  ContacForm,
  FormBox,
  InputBox,
  Input,
  Input2,
  InputBoxBig,
  TextArea,
} from "./ContactUsElements";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
export const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactForm = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phonenum: phone,
      message: message,
    };
    console.log(contactForm);

    fetch("http://localhost:5000/contactform/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactForm),
    }).then(() => {
      console.log("contact form added  ");
    });
  };

  return (
    <>
      <Container id="contactus">
        <ContactUsContainer>
          <ContactUsInfo>
            <ContactUsdiv>
              <ContactUsH2>Contact Info</ContactUsH2>
              <ContactInfoList>
                <ContactInfoItem>
                  <ContactUsSpan>
                    <ContactUSImg src={Location} />
                  </ContactUsSpan>
                  <ContactUsSpan>
                    230 A Bahria Town,Lahore, Punjab, 54000 Pakistan
                  </ContactUsSpan>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactUsSpan>
                    <ContactUSImg src={Mail} />
                  </ContactUsSpan>
                  <ContactUsSpan>mail@ayabtrust.com</ContactUsSpan>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactUsSpan>
                    <ContactUSImg src={Call} />
                  </ContactUsSpan>
                  <ContactUsSpan>+92 300-0888888</ContactUsSpan>
                </ContactInfoItem>
              </ContactInfoList>

              <ContactInfoListS>
                <ContactInfoItem>
                  <ContactInfoItemA
                    href="https://www.facebook.com"
                    target="_blank"
                  >
                    <FiFacebook />
                  </ContactInfoItemA>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactInfoItemA
                    href="https://www.instagram.com"
                    target="_blank"
                  >
                    <FiInstagram />
                  </ContactInfoItemA>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactInfoItemA
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <FiLinkedin />
                  </ContactInfoItemA>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactInfoItemA
                    href="https://www.youtube.com"
                    target="_blank"
                  >
                    <FiYoutube />
                  </ContactInfoItemA>
                </ContactInfoItem>

                <ContactInfoItem>
                  <ContactInfoItemA
                    href="https://www.pinterest.com"
                    target="_blank"
                  >
                    <ImPinterest2 />
                  </ContactInfoItemA>
                </ContactInfoItem>
              </ContactInfoListS>
            </ContactUsdiv>
          </ContactUsInfo>

          <ContacForm>
            <ContactUsH21>Send a Message</ContactUsH21>
            <FormBox id="contactForm" className="form" onSubmit={handleSubmit}>
              <InputBox>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <ContactUsSpan2>First Name</ContactUsSpan2>
              </InputBox>
              <InputBox>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <ContactUsSpan2>LastName</ContactUsSpan2>
              </InputBox>
              <InputBox>
                <Input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <ContactUsSpan2>E-mail Address</ContactUsSpan2>
              </InputBox>
              <InputBox>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <ContactUsSpan2>Mobile No.</ContactUsSpan2>
              </InputBox>
              <InputBoxBig>
                <TextArea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></TextArea>
                <ContactUsSpan2>Write Your Message Here...</ContactUsSpan2>
              </InputBoxBig>
              <InputBoxBig>
                <Input2 type="Submit" value="send" onClick={handleSubmit} />
              </InputBoxBig>
            </FormBox>
          </ContacForm>
        </ContactUsContainer>
      </Container>
    </>
  );
};

export default ContactUs;
