import React from 'react'
import Banner from '../Banner/Banner'
import Titletag from '../Titletag/Titletag'

import HeadBanner from '../../assets/aerial-drone.webp'
import NameBanner from '../../assets/planet-earth-global-2.webp'


const PrivacyPolicy = () => {
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/privacy_policy', label: 'Privacy Policy' }
      ];
  return (
    <div>
      <Banner 
        title="Privacy Policy"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
       <div className='refund-outer term-outer'>
        <section>
        <Titletag
            title="Privacy Policy"
            bgImage={NameBanner}
            className="pt-5"
          />
          <div className='container'>
          {/* <h2 class="listtitle">Precision Grow Refund Policy for SaaS Products</h2> */}
          <p>Privacy Policy
          Tech Visit IT Pvt Ltd built the Precision Grow web app. This page is used to inform users regarding our policies with the collection, use and disclosure of Personal Information if anyone decides to use our Service. If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions which are accessible on the Tech Visit IT Pvt Ltd website unless otherwise defined in this Privacy Policy.
</p>
          <h3>Information Collection and Use</h3>
<p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy. The web app does use third-party services that may collect information used to identify you.</p>
<p><b>Link to privacy policy of third-party service providers used by the web app:</b></p>
<ul style={{listStyle:'disc',paddingLeft:'20px'}}>
    <li><p>Firebase Analytics Log Data</p></li>
    <li><p>Firebase Authentication</p></li>
</ul>
<p>We want to inform you that whenever you use our Service, in case of an error in the web app, we collect data and information (through third-party products) on your electronic device called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the web app when utilizing our Service, the time and date of your use of the Service and other statistics.</p>
<h3>Cookies</h3>
<p>Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the web app may use third-party code and libraries that use “cookies” to collect information and to improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>
<h3>Service Providers</h3>
<p><b>We may employ third-party companies and individuals due to the following reasons:</b></p>
<ul style={{listStyle:'disc',paddingLeft:'20px'}}>
    <li><p>To facilitate our Service</p></li>
    <li><p>To provide the Service on our behalf</p></li>
    <li><p>To perform Service-related services</p></li>
    <li><p>To assist us in analyzing how our Service is used</p></li>
</ul>
<p>We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
<ol>
  <li>
    <h5>Security</h5>
    <p >We value your trust in providing us with your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable and we cannot guarantee its absolute security.</p>
  </li>
  <li>
    <h5>Links to Other Sites</h5>
    <p >This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
  </li>
  <h3>Children’s Privacy</h3>
<p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.</p>
<p><b>Changes to This Privacy Policy</b></p>
<p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
<h3>Contact Us</h3>
<p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <b>mail@precisiongrow.co.in.</b></p>
 
</ol>
          </div>
        </section>
       </div>
    </div>
  )
}

export default PrivacyPolicy
