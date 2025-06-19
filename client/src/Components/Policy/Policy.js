import React from "react";
import { Helmet } from 'react-helmet-async';
import "./Policy.css";
import Banner from "../Reusablecomp/Banner/Banner.js";
import Titleunderline from "../Reusablecomp/Titleunderline/Titleunderline.js";

const PolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Policy - Precision Grow Agri-Tech Solutions</title>
        <meta
          name="description"
          content="Learn about Precision Grow's policy, ensuring customer satisfaction and transparency in our agri-tech solutions. Shop with confidence today!"
        />
        <meta
          name="keywords"
          content="privacy policy, data security agriculture, website policy farming tech"
        />
        <link rel="canonical" href="https://precisiongrow.co.in/policy" />
      </Helmet>

      <Banner
        imageSrc="https://api.ecrop.co/assets/precisiongrow/Policy.webp"
        heading="Policy"
      />

      <div className="container my-5" data-aos="fade-up" data-aos-duration="3000">

        {/* Refund Policy */}
        <section className="policys mb-5">
          <Titleunderline title="Refund Policy" tag="h2" />

          <p className="text-center fs-1 boldlook mt-3">
            Precision Grow Refund Policy for SaaS Products
          </p>
          <p className="text-center">
           We strive to provide better quality services and amazing experiences for our customers. The Refund policy outlines the terms and conditions for Saas product.
          </p>
<p className="text-center fw-bolder">Thank you for choosing Precision Grow. This policy outlines the terms and conditions regarding refunds.</p>
          <div className="row p-4">
            <div className="col-md-6">
              <h5 className="section-heading">Refund Eligibility</h5>
              <p>
               Refund will only be considered:If the company is unable to deliver the specified database in the product description.
              </p>

              <h5 className="section-heading">Initiating a Refund</h5>
              <p>
               Customers are to submit a request to <b>mail@precisiongrow.co.in</b> within 3 days from purchase.
              </p>

              <h6 className="sub-heading">The request must include:</h6>
              <ul className="custom-bullet">
                <li>Order details (Order number, date of purchase)</li>
                <li>Explanation of the issue</li>
                <li>Supporting relevant documents, if any</li>
              </ul>

              <h6 className="sub-heading">Contact</h6>
              <ul className="custom-bullet">
                <li>For any queries, please contact our customer support at <b>mail@precisiongrow.co.in</b> .</li>
                <li>The company failed to deliver the promised dataset as described in the product details.</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5 className="section-heading">Refund Process</h5>
              <ul className="custom-bullet">
                <li>Upon the request, the team will review and access the case for the validity of the claim.</li>
                <li>If we are unable to provide with datasets prescribed, a refund will be initiated</li>
                <li>Refunds will be issued through the same method of payment used for purchase.</li>
              </ul>

              <h5 className="section-heading">Exceptions</h5>
              <ul className="custom-bullet">
                <li>Refunds won’t be provided with minor issues, misuse or failure to meet system needs.</li>
                <li>No refunds will be issued after 3 days of purchase.</li>
              </ul>

              <h5 className="section-heading">Policy Updates</h5>
              <ul className="custom-bullet">
                <li>Precision Grow reserves the right to update or modify the refund policy at any time.</li>
                <li>Customers will be notified of any changes through our website or other channels.</li>
              </ul>

              <p>
                By purchasing our SaaS product, you agree to abide by the terms and conditions outlined in this Refund policy.
              </p>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <Titleunderline title="Terms & Conditions" tag="h2" />

        <div className="row my-4 border rounded shadow-sm bg-light p-3 p-md-5">
          <div className="col-lg-6">
            <div>
              <p>
               By using the Tech Visit IT Pvt Ltd web app, the terms automatically apply to you. You must read these carefully before using the web app. You must not copy or modify the web app, even any part of the app or trademarks in any way. You aren’t allowed to extract any codes from the web app, and also you shouldn’t translate the code in any language or make any versions. The app itself has trademarks, copyrights, database rights and other intellectual property related to it, and belongs to Tech Visit IT Pvt Ltd.

              </p>
              <p>
                Tech Visit is committed to ensuring the web app is as useful and efficient as possible. We reserve the right to make changes to a web app or charge for services at any time for any reason. We will never charge you for web apps or services without making it clear exactly what you paid for.

              </p>
              <p>
                The web app uses personalized data you provide to us to offer you services. It’s your responsibility to keep access to the web app secure.


              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div>
              <p>
                You must be aware of certain things Tech Visit IT Pvt Ltd won’t be responsible for, certain actions require you to have access to an internet connection.

              </p>
              <p>Concerning Tech Visit IT Pvt Ltd’s responsibility to use the web app, you need to make sure your device stays charged- if it runs out of battery you can’t turn on to receive the services.
</p>
<p>We may also wish to stop providing the web app and may terminate use of it at any time without giving notice of termination. Unless we inform you, the rights and licenses granted you these terms will end, you must stop using the app.

</p>
              <h6 className="sub-heading fw-bolder">Changes to Terms & Conditions</h6>
              <p>
                We may update our terms & conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms & conditions on this page.


              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <section className="mb-5">
                    <Titleunderline title="Privacy Policy" tag="h2" />

          <p className="text-center fs-5 text-muted mb-4 fw-bolder">
            Your privacy is important to us. We collect certain information for service improvement but do not share it with third parties.
          </p>

          <div className="row px-3 privacy-policy">
            <div className="col-md-6">
              <p>
                Privacy Policy Tech Visit IT Pvt Ltd built the Precision Grow web app. This page is used to inform users regarding our policies regarding the collection, use and disclosure of Personal Information if anyone decides to use our Service. If you choose to use our Service, then you agree to the collection and use of information about this policy.
              </p>
<p>The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions which are accessible on the Tech Visit IT Pvt Ltd website unless otherwise defined in this Privacy Policy.
</p>
              <h6 className="section-heading">Information Collection and Use</h6>
              <p>
               For a better experience using our service, we require you to provide certain personally identifiable information. The information requested will be retained by us and used to describe the privacy policy. The privacy policy uses third-party services that collect information to identify.


              </p>

              <h6 className="section-heading">Link to Privacy policy of third-party service providers used by the app:
</h6>
              <ul className="custom-bullet">
                <li>Firebase Analytics Log Data</li>
                <li>Firebase Authentication</li>
              </ul>

              <h6 className="section-heading">Cookies</h6>
              <p>
               Cookies are small amounts of data files that are commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on the device’s internal memory. These services do not use “Cookies” explicitly. The app does however use a third-party code and libraries that use cookies to collect information and improve the services. You have the option to either accept or refuse the cookies and know when a cookie is being sent to your device.


              </p>

              <h6 className="section-heading">Service Providers</h6>
              <p>We may employ third-party companies and individuals for to following reasons:</p>
            </div>

            <div className="col-md-6">
              
              <ul className="custom-bullet">
                <li>To facilitate our services</li>
                <li>To provide services on our behalf</li>
                <li>To perform service-related services</li>
                <li>To assist us in analyzing how our service is used</li>
              </ul>
              <h6 className="sub-heading"><b>1. Security</b></h6>
              <p>
                We value your trust in providing us with personal information, striving to use commercially acceptable means of protecting it. Remember that no method of transmission over the Internet or method of electronic storage is 100% secure and reliable and we cannot guarantee its absolute security.
              </p>

              <h6 className="sub-heading"><b>2. Links to Other Sites</b></h6>
              <p>
                The services may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note the external sites are not operated by us. Therefore, we advise you to review the Privacy Policy of these websites. Having no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
              </p>

              <h6 className="section-heading">Children’s Privacy</h6>
              <p>
These services do not cater to children below the age of 13. We do not knowingly collect personally identifiable information from children under 13. In case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian, you should be aware that your child has been provided with information, please contact us so that we will be able to take necessary actions.

              </p>

              <h6 className="section-heading">Changes to Privacy Policy</h6>
              <p>
We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new privacy policy on this page. These changes are effective immediately after they are posted on this page.
              </p>

              <h6 className="section-heading">Contact Us</h6>
              <p>
              If you have any suggestions or questions regarding our Privacy Policy, do not hesitate to contact us at <a href="mailto:mail@precisiongrow.co.in">mail@precisiongrow.co.in</a>

              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PolicyPage;
