// import emailjs from '@emailjs/browser';
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

// <path id="Logo_ratio" d="M0,11.651V10.511H3.994v1.45a1.334,1.334,0,0,0,1.494,1.346A1.3,1.3,0,0,0,6.932,12.3a1.833,1.833,0,0,0-.026-1.113C6.133,9.243.851,8.363.18,5.333a5.347,5.347,0,0,1-.025-2.02C.567.88,2.705,0,5.359,0c2.113,0,5.025.492,5.025,3.754V4.816H6.674V3.884A1.275,1.275,0,0,0,5.282,2.537a1.25,1.25,0,0,0-1.365,1.01,2.021,2.021,0,0,0,.026.777c.437,1.734,6.081,2.667,6.7,5.8a6.943,6.943,0,0,1,.025,2.46C10.307,15.068,8.091,16,5.412,16,2.6,16,0,14.99,0,11.651ZM48.392,11.6V10.46h3.943v1.424A1.312,1.312,0,0,0,53.8,13.23a1.286,1.286,0,0,0,1.443-.984,1.759,1.759,0,0,0-.025-1.088c-.748-1.915-5.979-2.8-6.648-5.825a5.215,5.215,0,0,1-.026-1.994C48.959.932,51.1.052,53.7.052c2.088,0,4.973.518,4.973,3.728V4.816H54.989V3.91a1.268,1.268,0,0,0-1.365-1.346,1.2,1.2,0,0,0-1.34.984,2.017,2.017,0,0,0,.025.777c.412,1.734,6,2.641,6.623,5.747a6.806,6.806,0,0,1,.025,2.434c-.361,2.486-2.551,3.392-5.2,3.392C50.97,15.9,48.392,14.887,48.392,11.6Zm14.121.545a5.876,5.876,0,0,1-.025-.985V.44H66.25V11.495a4.111,4.111,0,0,0,.025.57,1.468,1.468,0,0,0,2.835,0,3.97,3.97,0,0,0,.026-.57V.44H72.9V11.158c0,.285-.026.829-.026.985-.257,2.8-2.448,3.7-5.179,3.7S62.771,14.938,62.513,12.143Zm30.974-.156A7.808,7.808,0,0,1,93.435,11V4.712c0-.259.025-.725.051-.985C93.821.932,96.063.052,98.717.052c2.629,0,4.947.88,5.206,3.676a7.185,7.185,0,0,1,.025.985V5.2h-3.762V4.376a3.1,3.1,0,0,0-.051-.57,1.553,1.553,0,0,0-2.964,0,3.088,3.088,0,0,0-.051.7V11.34a4.17,4.17,0,0,0,.026.57A1.472,1.472,0,0,0,98.717,13a1.406,1.406,0,0,0,1.52-1.087,2.09,2.09,0,0,0,.026-.57V9.165h-1.52V6.99H104V11a7.674,7.674,0,0,1-.052.984c-.257,2.718-2.6,3.676-5.231,3.676S93.744,14.705,93.487,11.987ZM41.049,15.378l-.1-13.825L38.369,15.378H34.607L32.055,1.553l-.1,13.825H28.242L28.551.466h6.056l1.881,11.651L38.369.466h6.055l.335,14.912Zm-19.79,0L19.249,1.553,17.187,15.378H13.168L15.9.466h6.623l2.732,14.912Zm62.977-.155L80.5,2.822l.206,12.4H77.046V.466h5.514l3.5,12.013L85.859.466h3.685V15.224Z" transform="translate(8 8)"></path>

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
                            نقوم بصيانة جميع الأجهزه الكهربائية في جميع محافظات مصر, بما في ذلك الثلاجات و الديب فريزير و غسالات الملابس و الأطباق
                            على مدار الساعه, بإستخدام قطع غيار أصلية بضمان لمدة عام, و تقديم خدمة متميزه و فائقه لإرضاء عملائنا
                        </div>
                    </div>
                </div>
                <div id="DISPLAYER">
                    <div className="about" id='brands'></div>
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
                                <img src="/logo-b2c.jpg" className="img" alt="s1"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الديب فريزر</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/MainLogo.jpg" className="img" alt="s2"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة غسالات الأطباق</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/LOGO.webp" className="img" alt="s3"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الثلاجات</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/R.png" className="img" alt="s4"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الغسالات</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* <div className="paragraph2">
                        يعد مركز صيانة كريازي لصيانة الأجهزة الكهربائية المنزلية من أفضل التوكيلات الناجحة في مصر وتقدم خدمة عملاء 24 ساعه علي مدار اليوم حيث يتم توفير صيانة لجميع منتجات كريازي مثل الثلاجات وغسالات الأطباق  والديب فريزر والغسالات والمجففات ويتم استخدام قطع غيار أصلية في الصيانة مع ضمان لمدة عام  ويقدم المركز ضمانًا معتمدًا من التوكيل المعتمد الوحيد المختص بصيانة مركز كريازي علي يد نخبة مميزة من المهندسين والفنيين المجهزين بالمعدات وقطع الغيار اللازمة للصيانة وتتم الصيانة في المنزل باستخدام أفضل الطرق وقطع الغيار الأصلية، وتسليم الجهاز بحالة ممتازة للعميل مع استلام فاتورة الإصلاح وخلال فترة الضمان يتم إصلاح الجهاز مجانًا دون أي رسوم إضافية ويعتبر مركز صيانة كريازي من أفضل المراكز التي تقدم خدمات صيانة لجميع منتجات شركة كريازي الحاصلة علي شهادة توكيل صيانة من شركة مركز صيانة كريازي حيث يقدم المركز أفضل الخبرات في الصيانة والدعم الفني والكفاءة العالية مع أسعار مناسبة للعملاء حرصاً علي إرضائهم.
                    </div> */}
                                        <a href="tel:0155494592" className="Button">اتصل الان</a>

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

