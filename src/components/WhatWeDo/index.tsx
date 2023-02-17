import React from "react";
import { WhatWeDoDiv, Icons, Text1, Website, Paragraph, Paragraph1, Paragraph2, Paragraph3, Paragraph5, FlexColumn, FlexColumn1,
     FlexColumn2, Block, Block1, Block2, Block3, Block4, Block5 } from "./styles";
import img1 from '../../assets/img/brain.png';
import img2 from '../../assets/img/blusa.png';
import img3 from '../../assets/img/prancheta.png';
import img4 from '../../assets/img/hug.png';
import img5 from '../../assets/img/pc.png';
import img6 from '../../assets/img/festa.png';


const WhatWeDo:React.FC = ()=> {
  return (
    <WhatWeDoDiv>
      <FlexColumn>
        <Text1>O QUE FAZEMOS</Text1>
        <Block>
          <Icons
            src={img1}
          />
          <Paragraph>
            Organizamos diversos minicursos para dentro e fora da
            {"  "}
            USP
          </Paragraph>
        </Block>
        <Block3>
          <Icons
            src={img4}
          />
          <Paragraph1>
            Coletamos feedback sobre os professores para buscar sempre melhorar
            o curso
          </Paragraph1>
        </Block3>
      </FlexColumn>
      <FlexColumn1>
        <Block1>
          <Icons
            src={img6}
          />
          <Paragraph2>
            Cuidamos da recepção e integração dos bixos todos os anos
          </Paragraph2>
        </Block1>
        <Block4>
          <Icons
            src={img3}
          />
          <Paragraph3>
            Planejamos e vendemos os produtos da Engenharia de Computação
            <br />
          </Paragraph3>
        </Block4>
      </FlexColumn1>
      <FlexColumn2>
        <Block2>
          <Icons
            src={img2}
          />
          <Paragraph2>
            Gamenights, Sessão de Filmes, Festas e muitos outros eventos
          </Paragraph2>
        </Block2>
        <Block5>
          <Website src={img5} />
          <Paragraph5>
            Fazemos parte do grupo que criou o site da Engenharia de Computação
          </Paragraph5>
        </Block5>
      </FlexColumn2>
    </WhatWeDoDiv>
  );
}


export default WhatWeDo;

