import React from "react";
import Navbar from "../navbar";
import Footersec from "./Footersec";

function Privacy() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "1.3rem",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            fontFamily: "YourChosenFont",
          }}
        >
          PRIVACY POLICY
        </h1>

        <p style={{ fontFamily: "YourChosenFont" }}>
          At Cara Shoes, we prioritize the protection of your privacy when you
          engage with us. To ensure your trust is safeguarded, we have
          established a policy that underscores the significance of safeguarding
          your personal information. This policy explains what constitutes
          personal information, how we utilize it, who has access to your data,
          and what your rights are concerning your personal information. Please
          note that this Privacy Policy does not apply to websites maintained by
          other companies or organizations to which we link, and Cara Shoes is
          not responsible for any personal information you submit to third
          parties via our website. Kindly read the Privacy Policy of such other
          companies or organizations before submitting your details. Your access
          and use of carashoes.com constitute your acceptance of our Privacy
          Policy and Terms of Use.
        </p>

        <h3 style={{ fontWeight: "bold", fontFamily: "YourChosenFont" }}>
          Use of Information
        </h3>

        <p style={{ fontFamily: "YourChosenFont" }}>
          Cara Shoes collects personal information when you place an order or
          create an account on carashoes.com. By registering, you consent to the
          collection of your personal data. When an order is placed, we may
          collect and retain personal information, including your name, email
          address, phone numbers, home address, shipping and credit/debit card
          billing address(es) for order processing. Saved card details are never
          shared with third parties and are only used to process your order
          through our Payment Service provider's systems. Additionally, we may
          obtain information through authentication or identity checks, which
          may include your telephone number for delivery services. These details
          enable us to process your order and keep you informed about its
          status. Your personal information is protected by SSL encryption,
          providing an additional security layer to ensure the secure
          transmission of sensitive information. Non-personal data, such as
          third-party cookies, may be used for statistical purposes to enhance
          and simplify your visit.
        </p>

        {/* More sections can be added similarly */}

        <h3 style={{ fontWeight: "bold", fontFamily: "YourChosenFont" }}>
          Facebook Application Privacy Statement
        </h3>

        <h4 style={{ fontWeight: "bold", fontFamily: "YourChosenFont" }}>
          Application Privacy Statement
        </h4>

        <p style={{ fontFamily: "YourChosenFont" }}>
          This privacy statement applies to personally identifiable information
          submitted or obtained from users in connection with the Cara Shoes
          Facebook application. By using or accessing the application, you
          acknowledge and accept the practices outlined in this privacy
          statement.
        </p>

        {/* More sections for Facebook Application Privacy Statement can be added similarly */}

        <h3 style={{ fontWeight: "bold", fontFamily: "YourChosenFont" }}>
          Questions or Concerns
        </h3>

        <p style={{ fontFamily: "YourChosenFont" }}>
          For questions or concerns regarding privacy, contact{" "}
          <a href="mailto:wecare@carashoes.com">wecare@carashoes.com</a>.
        </p>
      </div>
      <Footersec />
    </div>
  );
}

export default Privacy;
