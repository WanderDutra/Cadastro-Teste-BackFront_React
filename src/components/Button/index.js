import React from "react";
import{ Button as BoxButton} from "./styles";

function Button ({children,isTransparent, ...res}){

return <BoxButton isTransparent={isTransparent} {...res}>{children}</BoxButton>;

}
export default Button;