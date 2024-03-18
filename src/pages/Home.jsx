import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Who from '../components/Who';
import Contact from '../components/Contact';
import Kiriazi from './Kiriazi';

const Home = () => {
  return(
    <Box>
        {/* <Header /> */}
        <Box>
            <div className="secondTopBar">
                <a href="#contact">تواصل معنا</a>
                <a href="#prod">المنتجات</a>
                <a href="#">الرئيسيه</a>
            </div>
        </Box>
        {/* main */}
        <Box className="swiperS">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={{ marginTop: '124px' }}
            >
                <SwiperSlide className='insideS'>
                    <div className="desc">
                        <Typography variant='h4' element='h3' >صيانة غسالات</Typography>
                    </div>
                    <img src="/slider1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='insideS'>
                    <div className="desc">
                        <Typography variant='h4' element="h3">صيانة تكييفات</Typography>
                    </div>
                    <img src="/slider2.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </Box>
        <Kiriazi />
        <div className='divider' style={{ marginTop: '100px' }}></div>
        <div id='prod' style={{ marginTop: '100px' }}></div>
        <Container id="products" >
            <div className='pcard'>
                <img src="/2000_639e02ec26c7b.webp" alt="غسالات-كريازي" />
                <Typography variant='h4' element="h3" sx={{ marginTop: '10px' }}>غسالات كريازي</Typography>
                <div className='mm'>متدورش كتير لو غسالتك باظت انت بالمكان الصحيح لاننا اول مركز صيانة متخصص بمجال صيانة الغسالات وعشان كدا ايا يكن عطل غسالتك هتتصلح بالبيت ودة من واقع خبرتنا في مجال صيانة الغسالات لدينا فنيين متخصصين كلا في ماركة معينة مدربين علي ايدي افضل المهندسيين المتخصصين بمجال صيانة الغسالات</div>
            </div>
            <div className='pcard'>
                <img src="/download.jpeg" alt="غسالات كريازي" />
                <Typography variant='h4' element="h3" sx={{ marginTop: '10px' }}>ديب فريزر كريازي</Typography>
                <div className='mm'>ليه تسيب ثلاجتك عطلانة , مع العالمية للصيانة ايا يكن عطل الثلاجة هتتصلح بالمنزل بنفس اليوم
                مرحبا بك عزيزي العميل بمركز الصيانة الاول المتخصص في اصلاح الثلاجات افضل مركز صيانة بمصر العالمية لصيانة الاجهزة المنزلية رواد مجال الصيانة بمصر فروعنا بالقاهرة والجيزة نتميز بسرعة الصيانة لان الصيانة تتم لدينا بنفس اليوم وايضا  تتم عملية الصيانة لدينا بالمنزل بناءا علي طلب عملائنا اسعارنا تنافسية وقطع الغيار المستخدمة اصلية وكمان بضمان علي الصيانة اتصل بنا تجدنا اينما كنتم 01558730809

                العالمية للصيانة هو افضل مركز اصلاح ثلاجات بمصرخبرة 25 عاما بمجال الصيانة لدينا فنيين مدربين خبراء لديهم حلول لجميع الاعطال بالثلاجات التي قد يعجز عن حلها بعض المراكز والفنيين الدخلاء علي مجال صيانة الثلاجات ولان الثلاجة هي اهم جهاز بالمنزل المصري ولايوجد بيت يستغني عنها وفرنا لعملائنا خدمة الصيانة الفورية , الثلاجة هتتصلح في نفس اليوم فلاداعي الي الانتظار واحصل علي تجربة صيانة مثالية للثلاج
                </div>
            </div>
            <div className='pcard'>
                <img src="/صيانة-مكيفات-ترين-المركزية.jpg" alt="غسالات كريازي"/>
                <Typography variant='h4' element="h3" sx={{ marginTop: '10px' }}>تكييفات كريازي</Typography>
                <div className="mm">يتم تصليح التكييف باحدث التقنيات العالمية المستخدمة في مجال تصليح التكييف وايضا لدينا احدث اجهزة الكشف عن الاعطال  لسرعة تحديد العطل وتغيير واستبدال قطع الغيار التالفة فقط لتوفير تكاليف الصيانة علي العميل مع الالتزام بمعايير الصيانة العالمية بمجال التكييف العالمية للصيانة هو اختيارك الامثل لصيانة التكييف</div>
            </div>
        </Container>
        {/* who */}
        <Container id="who">
        <div className='divider'></div>
            <Typography variant='h2' element="h2" textAlign={"center"}></Typography>
            <Who />
        </Container>
        {/* brands */}
        <Container id="contact">
        </Container>
        <Contact />
    </Box>
  )
}

export default Home
