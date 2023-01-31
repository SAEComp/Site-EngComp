import React from "react";
import {DivFlex, DivText, Text, Title, ImgExtra} from './styles';
import img1 from '../../assets/img/extra/img1.png';
import img2 from '../../assets/img/extra/img2.png';
import img3 from '../../assets/img/extra/img3.png';
import img4 from '../../assets/img/extra/img4.png';
import img5 from '../../assets/img/extra/img5.jpg';
import img6 from '../../assets/img/extra/img6.png';
import img7 from '../../assets/img/extra/img7.png';
import img8 from '../../assets/img/extra/img8.png';
import img9 from '../../assets/img/extra/img9.png';
import img10 from '../../assets/img/extra/img10.png';
import img11 from '../../assets/img/extra/img11.png';
import img12 from '../../assets/img/extra/img12.png';
import img13 from '../../assets/img/extra/img13.png';
import img14 from '../../assets/img/extra/img14.png';
import img15 from '../../assets/img/extra/img15.jpg';
import img16 from '../../assets/img/extra/img16.png';
import img17 from '../../assets/img/extra/img17.png';
import img18 from '../../assets/img/extra/img18.png';
import img19 from '../../assets/img/extra/img19.png';
import img20 from '../../assets/img/extra/img20.png';
import img21 from '../../assets/img/extra/img21.png';
import img22 from '../../assets/img/extra/img22.png';
import img23 from '../../assets/img/extra/img23.png';
import img24 from '../../assets/img/extra/img24.png';
import img25 from '../../assets/img/extra/img25.png';


type Props = {
    title:string;
    text: string;
    url: string;
  }
  
const CardExtras:React.FC<Props> = ({title, text, url}) =>{
    let img;
    if(url == 'img1'){
        img = img1;
    }
    else if(url == 'img2'){
        img = img2;
    }
    else if(url == 'img3'){
        img = img3;
    }
    else if(url == 'img4'){
        img = img4;
    }
    else if(url == 'img5'){
        img = img5;
    }
    else if(url == 'img6'){
        img = img6;
    }
    else if(url == 'img7'){
        img = img7;
    }
    else if(url == 'img8'){
        img = img8;
    }
    else if(url == 'img9'){
        img = img9;
    }
    else if(url == 'img10'){
        img = img10;
    }
    else if(url == 'img11'){
        img = img11;
    }
    else if(url == 'img12'){
        img = img12;
    }
    else if(url == 'img13'){
        img = img13;
    }
    else if(url == 'img14'){
        img = img14;
    }
    else if(url == 'img15'){
        img = img15;
    }
    else if(url == 'img16'){
        img = img16;
    }
    else if(url == 'img17'){
        img = img17;
    }
    else if(url == 'img18'){
        img = img18;
    }
    else if(url == 'img19'){
        img = img19;
    }
    else if(url == 'img20'){
        img = img20;
    }
    else if(url == 'img21'){
        img = img21;
    }
    else if(url == 'img22'){
        img = img22;
    }
    else if(url == 'img23'){
        img = img23;
    }
    else if(url == 'img24'){
        img = img24;
    }
    else if(url == 'img25'){
        img = img25
    }
    
    return(
        <DivFlex style = {{marginBottom: '2rem'}}>
           <ImgExtra style = {{width:'100%'}} src = {img}/>
           
            <DivText>
                <div style= {{marginBottom: '1rem'}}><Title>{title}</Title></div>
                <div style= {{marginBottom: '1rem'}}><Text>{text}</Text></div>
            </DivText>
        
        </DivFlex>
    )
}
export default CardExtras;