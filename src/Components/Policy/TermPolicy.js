import React from 'react'
import Banner from '../Banner/Banner'
import Titletag from '../Titletag/Titletag';
import './TermPolicy.css'


import HeadBanner from '../../assets/aerial-drone.webp'
import NameBanner from '../../assets/planet-earth-global-2.webp'


const TermPolicy = () => {
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/terms_conditions', label: 'Terms & Conditions' }
      ];
  return (
    <>
       <Banner 
        title="Terms & Conditions"
        backgroundImage={HeadBanner}
        breadcrumbItems={breadcrumbItems} // Pass the breadcrumbItems here
      />
        <div className='refund-outer term-outer'>
        <section>
        <Titletag
            title="Terms & Conditions"
            bgImage={NameBanner}
            className="pt-5"
          />
      <div className='container'>
            <p>By using the Tech Visit IT Pvt Ltd web app, these terms will automatically apply to you – you should make sure, therefore, that you read them carefully before using the web app. You’re not allowed to copy or modify the web app, any part of the web app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the web app, and you also shouldn’t try to translate the web app into other languages or make derivative versions. The web app itself and all the trademarks, copyright, database rights and other intellectual property rights related to it, still belong to Tech Visit IT Pvt Ltd.</p>
            <p>Tech Visit IT Pvt Ltd is committed to ensuring that the web app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the web app or to charge for its services at any time and for any reason. We will never charge you for the web app or its services without making it very clear to you exactly what you’re paying for.</p>
            <p>
            The Tech Visit IT Pvt Ltd web app stores and processes personal data that you have provided to us to provide our service. It’s your responsibility to keep your access to the web app secure.
            </p>
            <p>You should be aware that there are certain things that Tech Visit IT Pvt Ltd will not take responsibility for. certain functions of the web app will require the web app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but Tech Visit IT Pvt Ltd cannot take responsibility for the web app not working at full functionality if you don’t have access to Wi-Fi and you don’t have any of your data allowance left.</p>
            <p>If you’re using the web app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the web app or other third-party charges. In using the web app, you’re accepting responsibility for any such charges, including roaming data charges if you use the web app outside of your home territory (i.e., region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the web app, please be aware that we assume that you have received permission from the bill payer for using the web app.</p>
            <p>
            Along the same lines, Tech Visit IT Pvt Ltd cannot always take responsibility for the way you use the web app, i.e. you need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the service, Tech Visit IT Pvt Ltd cannot accept responsibility.
            </p>
            <p>With respect to Tech Visit IT Pvt Ltd's responsibility for your use of the web app, when you’re using the web app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Tech Visit IT Pvt Ltd accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the web app.</p>
            <p>
            We may also wish to stop providing the web app and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the web app.
            </p>
            <h3>Changes to this Terms and Conditions:</h3>
            <p>
            We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page. These changes are effective immediately after they are posted on this page.
            </p>

      </div>
        </section>
       </div>
    </>
  )
}

export default TermPolicy
