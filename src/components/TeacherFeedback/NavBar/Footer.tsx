import logo from '../../../assets/svg/logo.svg'
import facebook_icon from '../../../assets/svg/facebook_icon.svg'
import instagram_icon from '../../../assets/svg/instagram_icon.svg'
import youtube_icon from '../../../assets/svg/youtube_icon.svg'

const Footer = () => {
    return (
        <div className="bg-[#111111] w-screen flex flex-col items-center py-5 gap-[20px] md:gap-[40px]">
            <div className="w-[70%] h-[1px] bg-[#E6E6E6]"></div>

            <div className="w-[90%] flex justify-center md:justify-between">
                <img src={logo} alt="logo SaeComp" className="h-[40px]" />
            </div>

            <div className="w-[90%] flex justify-center md:justify-end">
                <div className="flex gap-[25px]">
                    <img
                        src={facebook_icon}
                        alt="facebook"
                        className="cursor-pointer"
                        onClick={() => window.open('https://www.facebook.com/saecomp')}
                    />
                    <img
                        src={youtube_icon}
                        alt="youtube"
                        className="cursor-pointer"
                        onClick={() => window.open('https://www.youtube.com/channel/UCF1pe-gtP0Z40pCJcmGSdxQ?sub_confirmation=1')}
                    />
                    <img
                        src={instagram_icon}
                        alt="instagram"
                        className="cursor-pointer"
                        onClick={() => window.open('https://www.instagram.com/saecomp.ec/')}
                    />
                </div>
            </div>

            <span className="text-[#757575] font-inter text-[0.8rem] md:text-[0.85rem] w-[90%] -mt-12 text-center md:text-start">
                Nosso principal objetivo é representar os alunos perante a<br />Universidade de São Paulo.
            </span>

            <p className="text-[#757575] font-inter text-[0.8rem] md:text-[0.85rem] w-[90%] text-center">
                {'© SAEComp <3'}
                <br />
                Secretaria Acadêmica da Engenharia de Computação | USP São Carlos
            </p>
        </div>
    );
};

export default Footer;
