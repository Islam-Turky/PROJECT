import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaHeadphones, FaHome, } from "react-icons/fa";
import { IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BasicSpeedDial from '../components/Spidal';
import { Container } from '@mui/material';

const Home = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tpvzdtc', 'template_ra1bgaf', form.current, 'ZZEEsmFJK3TpnKA_1')
        .then(() => alert("Message Sent successfully!"))
        .catch((error) => {alert("Error In Our Service Please Try Again Later"); console.log(error);});
    }
    return(
        <>
        <Container
            sx={{ paddingY: '50px' }}
        >
            <Header />
            <div id="HOME">
                <div id="WRAPPER">
                    <div className="cover">

                    </div>
                    <br />
                    {/* <div id="WHYWE">
                        <div id="content">
                            <div className="about">لماذا نحن؟</div>
                            <div className="icon">
                                <IoSettingsSharp />
                                <div className="bio">قطع غيار أصلية</div>
                            </div>
                            <div class02773BName="icon">
                                <FaHome />
                                <div className="bio">صيانة منزلية فورية</div>
                            </div>
                            <div className="icon">
                                <FaHeadphones />
                                <div className="bio">خدمه 24 ساعة</div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div id="WHO">
                    <div>
                        <div className="about">من نحن؟</div>
                        <br />
                        <div className="paragraph">
                            يقوم مركز صيانة كريازي بصيانة جميع الأجهزه الكهربائية في جميع محافظات مصر, بما في ذلك الثلاجات و الديب فريزير و غسالات الملابس و الأطباق
                            على مدار الساعه, بإستخدام قطع غيار أصلية بضمان لمدة عام, و تقديم خدمة متميزه و فائقه لإرضاء عملائنا
                        </div>
                    </div>
                    <a href="tel:+201015632015" className="Button">اتصل الان</a>
                </div>
                <div id="DISPLAYER">
                    <div className="about">مركز صيانة كريازي</div>
                    <div className="wrapp">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                            spaceBetween={50}
                            pagination={{ clickable: true }}
                            effect={'coverflow'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                // slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    // spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    // spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    // spaceBetween: 50,
                                },
                                }}
                        >
                            <SwiperSlide>
                                <img src="/d1.webp" className="img" alt="s1"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الديب فريزر</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d2.webp" className="img" alt="s2"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة غسالات الأطباق</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d3.webp" className="img" alt="s3"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الثلاجات</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d4.webp" className="img" alt="s4"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الغسالات</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d5.webp" className="img" alt="s5"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة ميني بار</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d6.webp" className="img" alt="s6"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة المجففات</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="paragraph2">
                        يعد مركز صيانة كريازي لصيانة الأجهزة الكهربائية المنزلية من أفضل التوكيلات الناجحة في مصر وتقدم خدمة عملاء 24 ساعه علي مدار اليوم حيث يتم توفير صيانة لجميع منتجات كريازي مثل الثلاجات وغسالات الأطباق  والديب فريزر والغسالات والمجففات ويتم استخدام قطع غيار أصلية في الصيانة مع ضمان لمدة عام  ويقدم المركز ضمانًا معتمدًا من التوكيل المعتمد الوحيد المختص بصيانة مركز كريازي علي يد نخبة مميزة من المهندسين والفنيين المجهزين بالمعدات وقطع الغيار اللازمة للصيانة وتتم الصيانة في المنزل باستخدام أفضل الطرق وقطع الغيار الأصلية، وتسليم الجهاز بحالة ممتازة للعميل مع استلام فاتورة الإصلاح وخلال فترة الضمان يتم إصلاح الجهاز مجانًا دون أي رسوم إضافية ويعتبر مركز صيانة كريازي من أفضل المراكز التي تقدم خدمات صيانة لجميع منتجات شركة كريازي الحاصلة علي شهادة توكيل صيانة من شركة مركز صيانة كريازي حيث يقدم المركز أفضل الخبرات في الصيانة والدعم الفني والكفاءة العالية مع أسعار مناسبة للعملاء حرصاً علي إرضائهم.
                    </div>
                </div>
                
                <div id="contacts">
                        <div className="about2">تواصل معنا</div>
                        <div id="container">
                        {/* <div>
                            <div id="tele">
                                <BsFillTelephoneFill />
                                <span>00201070499098</span>
                            </div>
                            <br />
                            <div id="icons">
                                <span><IoLogoTwitter /></span>
                                <span><IoLogoYoutube /></span>
                                <span><FaFacebook /></span>
                            </div>
                        </div> */}
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name">
                                    <div>الاسم بالكامل</div>
                                    <input type="text" id="name" placeholder="الاسم بالكامل" name="name"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <div>البريد الالكتروني</div>
                                    <input type="email" id="email" placeholder="البريد الالكتروني" name="email"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="message">
                                    <div>الرسالة</div>
                                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                                </label>
                            </div>
                            <div id="submit">
                                <input type="submit" className="Button" value={"إرسال"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BasicSpeedDial />
        </Container>
        <Footer />
        </>
    )
}

export default Home;