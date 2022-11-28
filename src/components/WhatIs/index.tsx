import React from "react";
import { WhatIsDiv, Grid } from "./styles";

import {ReactComponent as CPUSvg} from "../../assets/svg/cpu.svg";
import OrangePinkButton from "../Button";

const WhatIs:React.FC = ()=>{
    return(
        <WhatIsDiv>
            <h1>O QUE É {'\n'}ENGENHARIA DE COMPUTAÇÃO?</h1>
            <Grid>
                <div className="explanation">

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu rutrum ex. Praesent at bibendum eros. Cras auctor, est ac dictum pulvinar, lorem urna molestie purus, nec vulputate neque mi sit amet nisl. Curabitur convallis velit feugiat mauris feugiat egestas at interdum ante. In iaculis viverra placerat. Donec tempus felis eget turpis tincidunt volutpat. Quisque elementum vel velit viverra scelerisque. 
                    </p>
                    <p>
                    Suspendisse sit amet vehicula dolor. Mauris elementum est ut dui venenatis, quis vulputate massa condimentum. Duis aliquet orci a sem bibendum, id finibus quam tincidunt. Curabitur sit amet lacus dapibus, dictum est at, porta tellus. Etiam vitae volutpat augue. Duis vitae finibus enim, malesuada semper purus. Aliquam id arcu ultricies, luctus est eu, tincidunt lacus. Vivamus fermentum eu sapien et rhoncus. Etiam bibendum ornare mauris a lacinia.  
                    </p>

                    <div>
                        <OrangePinkButton text="VEJA A GRADE DO CURSO"/>
                    </div>
                </div>
                <div className="LogoDiv">
                    <CPUSvg  className="svg-logo"/>
                </div>
            </Grid> 
        </WhatIsDiv>
    );
}

export default WhatIs;