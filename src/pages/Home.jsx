import { FaHeadphones, FaHome, FaFacebook,  } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogoTwitter, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <>
            <Header />
            <div id="HOME">
                <div id="WRAPPER">
                    <Swiper
                        modules={[Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={'auto'}
                        grabCursor={true}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        <SwiperSlide><img src="/wrapper.jpg" alt="w1"/></SwiperSlide>
                        <SwiperSlide><img src="/wrapperfridge.jpg" alt="w2"/></SwiperSlide>
                        <SwiperSlide><img src="/wrapperfridges.jpg" alt="w2"/></SwiperSlide>
                    </Swiper>
                    <br />
                    <div id="WHYWE">
                        <div id="content">
                            <div className="about">لماذا نحن؟</div>
                            <div className="icon">
                                <IoSettingsSharp />
                                <div className="bio">قطع غيار أصلية</div>
                            </div>
                            <div className="icon">
                                <FaHome />
                                <div className="bio">صيانة منزلية فورية</div>
                            </div>
                            <div className="icon">
                                <FaHeadphones />
                                <div className="bio">خدمه 24 ساعة</div>
                            </div>
                        </div>
                    </div>
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
                    <a href="#" className="Button">اتصل الان</a>
                </div>
                <div id="DISPLAYER">
                    <div className="about">مركز صيانة كريازي</div>
                    <div className="wrapp">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
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
                        >
                            <SwiperSlide>
                                <img src="/d1.jpg" className="img" alt="s1"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الديب فريزر</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d2.jpg" className="img" alt="s2"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة غسالات الأطباق</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d3.jpg" className="img" alt="s3"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الثلاجات</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d4.jpg" className="img" alt="s4"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة الغسالات</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d5.jpg" className="img" alt="s5"/>
                                {/* <div className="wrappbio">
                                    <div className="wrapptitle">صيانة ميني بار</div>
                                    <div className="mini">أسرع و أفضل خدمه في مصر</div>
                                </div> */}
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/d6.jpg" className="img" alt="s6"/>
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
                <div id="d1">
                    <div className="one">
                        <div className="innerimage">
                            <img src="/d1.jpg" alt="d1"/>
                        </div>
                        <div className="inner">
                            <div className="about">صيانة ثلاجات</div>
                            <div className="innerbio">
                            يقدم مركز صيانة كريازي صيانة الأجهزة الكهربائية خدمات صيانة لثلاجات كريازي عالية الجودة في جميع أنحاء العالم، حيث ندرك جيدًا أهمية الثلاجة في كل بيت كواحدة من أهم الأجهزة الكهربائية المنزلية، حيث يوفر مركز صيانة كريازي أفضل الخدمات لصيانة وإصلاح المشاكل المختلفة التي تواجه الثلاجات وذلك علي يد فريق متميز من المهندسين والفنيين ذوي الخبرة والكفاءة العالية في هذا المجال وتقدم أيضا صيانة  جميع أجزاء الثلاجات المختلفة، بما في ذلك صيانة الثرموستات، وإصلاح تسريب المياه والغاز من الثلاجة والديب فريزر، وتصليح مشاكل تكوين الثلج في الفريزر، وإصلاح موتور الثلاجة، وأي تلف في أجزاء الأجهزة، فنحن نحرص علي  استخدام قطع غيار أصلية من بلد المنشأ ونضمن الإصلاح لمدة سنة، بالإضافة إلى ضمان قطع الغيار، وتوفر أيضا خدمة عملاء علي مدار اليوم خلال جميع أيام الأسبوع في جميع محافظات مصر، ونمتلك فريقًا من خدمة العملاء والدعم الفني لاستقبال جميع البلاغات والاستفسارات، وننصح دائمًا بالتأكد من هوية الشخص الذي يأتي لصيانة الجهاز عن طريق كارنيه خاص به لضمان سلامة الصيانة، ويمكنك التواصل معنا طوال أيام الأسبوع للحصول على كافة المعلومات والاستفسارات لمتابعة حالة الجهاز وتجنب المشاكل.
                            </div>
                        </div>
                    </div>
                    <a href="#" className="Button">اتصل الان</a>
                </div>
                <div id="d2">
                    <div className="one">
                        <div className="innerimage">
                            <img src="/d2.jpg" alt="d2"/>
                        </div>
                        <div className="inner">
                        <div className="about">صيانة ميني بار</div>
                            <div className="innerbio">
                            تعتبر ثلاجات الميني بار الخاصة بشركة كريازي من بين أفضل الأجهزة المتوفرة في العالم، والتي تستخدم على نطاق واسع في العديد من المنشآت، مثل المكاتب والمدارس والمحلات التجارية. ومن المعروف أن أعطال هذه الثلاجات من الأعطال الدقيقة التي يصعب التعامل معها إلا بواسطة المتخصصين. ولذلك، فإن شركتنا تقدم أفضل فريق صيانة مكون من مهندسين متخصصين في مجال الثلاجات الميني بار، بالإضافة إلى فريق فني متكامل بأعلى كفاءة،   ويمكنك التواصل معنا على مدار 24 ساعة طوال أيام الأسبوع، سواء للاستفسار أو لمتابعة أي أعطال تتعرض لها ثلاجتك أو لمتابعة طرق التشغيل وتقديم خدمات الصيانة التي تشمل جميع أجزاء الثلاجة الداخلية والخارجية. حيث يوفر مركز صيانة كريازي جميع خدمات الصيانة بضمان سنة كاملة لتوفير أفضل خدمة للعملاء، ويمكنك أيضا الحصول على قطع غيار أصلية، ويمكنك المتابعة مع خدمة العملاء والدعم الفني الذي يتابع جميع البلاغات والأعطال والمشكلات ويساعد جميع عملاء مركز صيانة كريازي على مدار الأسبوع لتقديم خدمة أسرع وأفضل، ونؤكد على ضرورة التأكد من هوية الفني الذي يأتي لصيانة الجهاز عن طريق الكارنيه الخاص به.
                            </div>
                        </div>
                    </div>
                    <a href="#" className="Button">اتصل الان</a>
                </div>
                <div id="d3">
                    <div className="one">
                        <div className="innerimage">
                            <img src="/d3.jpg" alt="d3"/>
                        </div>
                        <div className="inner">
                        <div className="about">صيانة ديب فريزر</div>
                            <div className="innerbio">
                            يعد مركز صيانة كريازي من الشركات المتميزة في صناعة الديب فريزر حيث تُستخدَم أحدث التقنيات في تصنيعها لتلبية احتياجات الأسر المختلفة وتناسب جميع الأذواق، ويمكنك الاختيار بين أشكال مختلفة للديب فريزر سواء كان رأسيًا أو أفقيًا بناءً على احتياجاتك وإمكانياتك المتوفرة، ويحتفظ الديب فريزر برطوبة الأطعمة ويحافظ عليها من العوامل الخارجية وهو ضروري في كل منزل، وفي حالة وجود أي مشكلة في الجهاز يجب التعامل معها بسرعة ودقة وكفاءة. ويقدم أيضاً مركز صيانة كريازي خدمة صيانة ممتازة تضم فريقًا من المهندسين المدربين وتوفير الصيانة في كافة مناطق الجمهورية بأسرع وقت ممكن خلال 24 ساعة طوال الأسبوع، وذلك باستخدام قطع غيار أصلية وبضمان معتمد لمدة سنة على الصيانة. كما يوفر مركز صيانة كريازي خدمة عملاء ودعم فني ممتاز لاستقبال البلاغات والمشاكل والمتابعة مع جميع العملاء على مدار الأسبوع لتقديم خدمة أسرع وأفضل. ولضمان سلامة الصيانة، يجب التأكد من هوية الفني المُرسَل من خلال الكارنيه الخاص به. ويمكن الاتصال بالخط الساخن للحصول على مساعدة فورية من فريق مركز صيانة كريازي في حالة وجود أي استفسارات أو مشاكل.
                            </div>
                        </div>
                    </div>
                    <a href="#" className="Button">اتصل الان</a>
                </div>
                <div id="d4">
                    <div className="one">
                        <div className="innerimage">
                            <img src="/d4.jpg" alt="d4"/>
                        </div>
                        <div className="inner">
                        <div className="about">صيانة غسالات الملابس</div>
                            <div className="innerbio">
                            يتميز مركز صيانة كريازي المتخصص في صناعة الغسالات بالعديد من المميزات من حيث قطع غيار متميزة بأفضل الأسعار وأيضاً من حيث الشكل والأداء. ويوفر مركز صيانة كريازي العديد من الأشكال الحديثة والمتميزة من مجففات وغسالات كريازي المختلفة، سواء كانت غسالة بسعة كبيرة أو صغيرة، أو غسالة أوتوماتيك أو فوق أتوماتيك لتلبية جميع احتياجات كل منزل. فتعد الغسالة من الأجهزة الكهربائية الأساسية في كل منزل وفي العديد من الأماكن الأخرى، ولذلك يجب التعامل مع فريق صيانة مكون من مهندسين متخصصين في مجال صيانة غسالات الملابس وتصليح جميع مشاكل غسالة كريازي، ويتوفر لدينا تغطية جميع أنحاء الجمهورية بأسرع وقت ممكن خلال 24 ساعة طوال أيام الأسبوع بقطع غيار أصلية وبضمان معتمد لمدة سنة على الصيانة. ويتوفر لدينا أيضًا أفضل خدمة عملاء وفريق من الدعم الفني لاستقبال البلاغات والأعطال والمشكلات، والمتابعة مع جميع عملاء مركز صيانة كريازي طوال الأسبوع لتقديم خدمة أفضل وأسرع. ويجب التأكد من هوية الشخص الذي يأتي لإجراء الصيانة من خلال الكارنيه الخاص به، ويمكن التواصل معنا عبر الخط الساخن لمساعدة جميع عملاء مركز صيانة كريازي. 
                            </div>
                        </div>
                    </div>
                    <a href="#" className="Button">اتصل الان</a>
                </div>
                <div id="d5">
                    <div className="one">
                        <div className="innerimage">
                            <img src="/d5.jpg" alt="d5"/>
                        </div>
                        <div className="inner">
                        <div className="about">صيانة مجففات ملابس</div>
                            <div className="innerbio">
                            يقدم مركز صيانة كريازي أفضل أنواع المجففات الموجودة حالياً في مصر حيث تتميز بأحدث التقنيات التي تساعد على الحفاظ على الملابس وتجفيفها بشكل جيد، وتتوفر أيضاً قطع غيار وتقنيات عديدة تتطلب خبراء متخصصين  للتعامل مع الأعطال بكفاءة عالية. وبفضل فريق مركز صيانة كريازي المتميز، يتم توفير خدمة صيانة سريعة وفعالة في جميع أنحاء الجمهورية، حيث يتم تغطية جميع المناطق بأسرع وقت ممكن طوال الأسبوع وباستخدام قطع غيار أصلية وضمان معتمد لمدة سنة، كما نوفر خدمة عملاء متميزة وفريق دعم فني متواجد على مدار الأسبوع لاستقبال البلاغات والاعطال والمشكلات ومتابعة العملاء بشكل دوري لتقديم خدمة أفضل وأسرع ولضمان سلامة الصيانة، ويتم التأكد من هوية الشخص الذي يأتي للصيانة من خلال الكارنيه الخاص به ويمكن التواصل معنا على الخط الساخن في حالة الحاجة إلى المساعدة.
                            </div>
                        </div>
                    </div>
                    <a href="#" className="Button">اتصل الان</a>
                </div>
                <div id="d6">
                    <div className="one">
                        <div className="innerimage">
                            <img src="/d6.jpg" alt="d6"/>
                        </div>
                        <div className="inner">
                        <div className="about">صيانة غسالات الاطباق</div>
                            <div className="innerbio">
                            تتميز غسالة الأطباق في مركز صيانة كريازي بالعديد من المميزات الفريدة من حيث الشكل والأداء وقطع الغيار المتميزة وتعتبر من الشركات الرائدة في صناعة غسالات الأطباق في مصر، ويتميز أيضاً مركز صيانة كريازي بتوفير أفضل الأشكال الحديثة والمتميزة بأفضل الأسعار من غسالات الأطباق لتلبية جميع احتياجات العملاء. وتعتبر غسالة الأطباق من الأجهزة المنزلية الأساسية التي تعرض للتلف في بعض الأحيان نتيجة سوء الاستخدام، ولذلك يجب التعامل مع جميع مشاكل غسالة الأطباق عن طريق متخصصين ماهرين ولدينا أيضاً أفضل فريق من الدعم الفني وخدمة العملاء على مدار الأسبوع لتقديم أفضل خدمة والتعامل مع جميع البلاغات والأعطال والمشكلات. ويتوفر الاتصال بنا من خلال الخط الساخن، ونحن ملتزمون بالتأكد من هوية الفني الذي يأتي لصيانة غسالة الأطباق من خلال الكارنيه الخاص به، حفاظاً على سلامة الصيانة.
                            </div>
                        </div>
                    </div>
                    <a href="#" className="Button">اتصل الان</a>
                </div>
                <div id="contacts">
                        <div className="about2">تواصل معنا</div>
                        <div id="container">
                        <div>
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
                        </div>
                        <form>
                            <div>
                                <label htmlFor="name">
                                    <div>الاسم بالكامل</div>
                                    <input type="text" id="name" placeholder="الاسم بالكامل"/>
                                </label>
                            </div>
                            <div>
                                <label htmlFor="email">
                                    <div>البريد الالكتروني</div>
                                    <input type="email" id="email" placeholder="البريد الالكتروني"/>
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
            <div id="chat">
                <IoLogoWhatsapp className="whatsapp"/>
            </div>
            <Footer />
        </>
    )
}

export default Home;