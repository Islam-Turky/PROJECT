import { Box, Typography } from "@mui/material";

const Lg = () => {
    return(
    <Box sx={{ marginTop: '120px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
        <Typography variant="h1" sx={{ textAlign: 'center' }}>سامسونج</Typography>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>الإختيار الذكي لسنين قدام</Typography>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>اهلا بك في سامسونج مصر الذي يوفر مجموعة واسعة من الهواتف الذكية، الشاشات، التلفزيونات الذكية، الأجهزة المنزلية، الأجهزة الإلكترونية المتطورة وغيرها الكثير.</Typography>
    </Box>
    )
};

export default Lg;