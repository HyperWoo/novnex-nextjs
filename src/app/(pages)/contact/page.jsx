import React from "react";

import AppData from "@data/app.json";

import PageBanner from "@components/PageBanner";
import ContactForm from "@components/ContactForm";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
  return (
    <>
        <PageBanner pageTitle={"We’d love to talk"} breadTitle={"Contact"} bgImage={"/img/photo/12.1.jpg"} />

        {/* about */}
        <section>
            <div className="container mil-p-120-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row justify-content-between">
                    <div className="col-lg-6">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">Info Contact</h2>
                            <p className="mil-up mil-mb-40">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 mil-relative">

                        <div className="mil-contact-sidebar">

                            <div className="mil-sidebar-info">

                                <h6 className="mil-upper mil-up mil-mb-30">Headquarters</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>Noida, Uttar Pradesh</li>
                                    <li>Sector 62, Green Boulevard,</li>
                                    <li>5th Floor, TOWER-C</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Phone</h6>
                                <ul className="mil-list mil-dark mil-up mil-mb-30">
                                    <li>+7 (200) 600-30-30</li>
                                    <li>+7 (200) 200 - 80 - 02</li>
                                </ul>
                                <h6 className="mil-upper mil-up mil-mb-30">Email</h6>
                                <ul className="mil-list mil-dark mil-up">
                                    <li>info@novnex.com</li>
                                </ul>
                                
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mil-up mil-mb-60">
                                    <span className="mil-suptitle mil-upper mil-up mil-mb-30">Noida, UP</span>
                                    <p className="mil-up">10233 Gaillard Lake Est <br/>Suite 420 <br/>Houston, TX 75169 <br/>(903) 560 - 9830</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about end */}

        {/* map */}
        <div className="mil-map-frame mil-up">
            <div className="mil-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.918442806746!2d77.3672554!3d28.6228797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55b2eaaaaab%3A0xf888ab3b07916930!2sNOVNEX%20CORPORATION%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1713162540450!5m2!1sen!2sin" 
                    style={{"border": "0"}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        {/* map end */}

        {/* contact */}
        <section className="mil-relative">
            <div className="container mil-p-120-30">
                <div className="mil-background-grid mil-softened"></div>
                <div className="row justify-content-between">
                    <div className="col-lg-4">

                        <div className="mil-mb-90">
                            <h2 className="mil-upper mil-up mil-mb-30">We’d love to talk</h2>
                            <p className="mil-up mil-mb-30">Have a question? We’d love to hear from you. Send us a note to get the conversation started - or click on an office above and talk to us. Especially about designing something, or something we’ve designed.</p>
                            <div className="mil-divider-lg mil-up mil-mb-30"></div>
                            <p className="mil-up mil-mb-30">Interested in joining the team? Browse our current openings.</p>
                            <div className="mil-up">
                                <Link href="/team" className="mil-link mil-upper">Join Us <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span></Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
        {/* contact end */}
    </>
  );
};
export default Contact;
