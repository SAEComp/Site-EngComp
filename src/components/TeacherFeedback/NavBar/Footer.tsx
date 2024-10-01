import { Box, Typography } from "@mui/material"
import logo from '../../../assets/svg/logo.svg'
import facebook_icon from '../../../assets/svg/facebook_icon.svg'
import instagram_icon from '../../../assets/svg/instagram_icon.svg'
import youtube_icon from '../../../assets/svg/youtube_icon.svg'


const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: '#111111',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingY: '20px',
                gap: { xs: '40px', md: '20px' }

            }}
        >
            <Box
                sx={{
                    width: '70%',
                    height: '1px',
                    bgcolor: '#E6E6E6',

                }}
            />
            <Box
                sx={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'space-between' },

                }}
            >
                <Box
                    component='img'
                    alt='logo SaeComp'
                    src={logo}
                    sx={{
                        height: '40px',
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', md: 'end' },
                    width: '90%'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: '25px'
                    }}
                >
                    <Box
                        component='img'
                        alt='facebook'
                        src={facebook_icon}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://www.facebook.com/saecomp')}
                    />
                    <Box
                        component='img'
                        alt='youtube'
                        src={youtube_icon}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://www.youtube.com/channel/UCF1pe-gtP0Z40pCJcmGSdxQ?sub_confirmation=1')}
                    />
                    <Box
                        component='img'
                        alt='instagram'
                        src={instagram_icon}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://www.instagram.com/saecomp.ec/')}
                    />

                </Box>
            </Box>
            <Typography
                sx={{
                    color: '#757575',
                    fontFamily: 'Inter',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    width: '90%',
                    marginTop: '-20px',
                    textAlign: { xs: 'center', md: 'start' }
                }}
            >
            Nosso principal objetivo é representar os alunos perante a<br/>Universidade de São Paulo.
            </Typography>
            <Typography
                sx={{
                    color: '#757575',
                    fontFamily: 'Inter',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    width: '90%',
                    textAlign: 'center'
                }}
            >
            {'© SAEComp <3'}
            <br/>
            Secretaria Acadêmica da Engenharia de Computação | USP São Carlos
            </Typography>

        </Box>
    )
}

export default Footer;