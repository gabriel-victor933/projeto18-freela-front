import { Container } from "../style/container";
import { Oval } from "react-loader-spinner";

export default function Loading(){

    return (
        
            <Oval
            height={80}
            width={80}
            color="#99A799"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#D3E4CD"
            strokeWidth={2}
            strokeWidthSecondary={2}

            />
        
    )
}