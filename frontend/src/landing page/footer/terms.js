import React from "react";
import Navbar from "../navbar";
import Footersec from "./Footersec";

const Term = () => {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "60px", fontSize: "1.2rem" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontFamily: "YourChosenFont",
          }}
        >
          Terms & Conditions
        </h1>

        <div style={{ fontFamily: "YourChosenFont" }}>
          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            By accessing or using our website, you agree to be bound by these
            Terms and Conditions and all applicable laws and regulations. If you
            do not agree with any part of these terms, you may not use our
            website.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            2. Use of the Website
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            You may use the website for your personal, non-commercial purposes
            only. You must not use the website for any illegal or unauthorized
            purpose. By using our website, you agree to comply with all
            applicable laws and regulations.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            3. Product Information
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            We strive to provide accurate and up-to-date information about our
            products, but we cannot guarantee the accuracy of all product
            descriptions, images, or other content. The colors you see depend on
            your display settings, and we do not guarantee that your display
            will accurately reflect the actual colors.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            4. Orders and Payments
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            All orders are subject to acceptance and availability. Prices for
            our products are subject to change without notice. We reserve the
            right to refuse or cancel any order at any time. In the event that
            we need to cancel an order, we will notify you and provide a full
            refund.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            5. Returns and Exchanges
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            Please refer to our Returns and Exchanges policy for information on
            returning or exchanging products. Returns and exchanges are subject
            to certain conditions, including the item's condition and the time
            since purchase.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            6. Privacy Policy
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            Your use of our website is also governed by our Privacy Policy.
            Please review our Privacy Policy to understand how we collect, use,
            and disclose information. We take your privacy seriously and
            implement measures to safeguard your personal information.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            7. Changes to Terms and Conditions
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. Your continued use of the website
            after any changes signifies your acceptance of the updated Terms and
            Conditions. It is your responsibility to review these terms
            periodically.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            8. Intellectual Property
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of Cara Shoes and is protected
            by international copyright laws. Unauthorized use of any material on
            the website may violate copyright, trademark, and other laws.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            9. Limitation of Liability
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            We strive to ensure the accuracy and availability of our website,
            but we do not guarantee uninterrupted, error-free, or secure access
            to our services. In no event shall Cara Shoes be liable for any
            direct, indirect, incidental, special, or consequential damages
            arising out of or in any way connected with the use of our website.
          </p>

          <h2 style={{ fontFamily: "YourChosenFont", fontWeight: "bold" }}>
            10. Contact Information
          </h2>
          <p style={{ fontFamily: "YourChosenFont" }}>
            If you have any questions about these Terms and Conditions, please
            contact us at support@carashoes.com.
          </p>
        </div>
      </div>
      <Footersec />
    </div>
  );
};

export default Term;
