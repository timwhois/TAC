import React from "react";
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

// Fixed, intentionally curated social preview: never accepts user-controlled markup.
export default function handler() {
  const h = React.createElement;
  const image = "https://www.thirdaxis.co.uk/portfolio/wow-factor-placeholder.png";
  const W = 1200, H = 630;
  return new ImageResponse(
    h("div", {style:{width:W,height:H,display:"flex",position:"relative",overflow:"hidden",backgroundColor:"#0c1314",fontFamily:"Arial, Helvetica, sans-serif"}},
      h("img",{src:image,width:W,height:H,style:{position:"absolute",left:0,top:0,width:W,height:H,objectFit:"cover",objectPosition:"center 20%"}}),
      h("div",{style:{position:"absolute",top:0,left:0,width:W,height:H,display:"flex",background:"linear-gradient(90deg,rgba(4,11,12,0.91) 0%,rgba(4,11,12,0.76) 37%,rgba(4,11,12,0.25) 75%,rgba(4,11,12,0.10) 100%)"}}),
      h("div",{style:{position:"absolute",top:0,left:0,width:W,height:86,display:"flex",alignItems:"center",padding:"0 64px",backgroundColor:"rgba(8,21,20,0.91)",borderBottom:"1px solid rgba(255,255,255,0.12)"}},
        h("div",{style:{display:"flex",fontSize:22,fontWeight:800,letterSpacing:"0.02em",color:"#F2F0EB"}}, "THIRD AXIS CREATIVE"),
        h("div",{style:{display:"flex",fontSize:25,fontWeight:900,marginLeft:6,color:"#2FA976"}},"//"),
      ),
      h("div",{style:{position:"absolute",left:67,top:178,display:"flex",alignItems:"center",gap:13}},
        h("div",{style:{width:9,height:9,borderRadius:99,backgroundColor:"#F3A12A"}}),
        h("div",{style:{fontSize:13,fontWeight:700,letterSpacing:"0.20em",color:"#2FA976"}},"IDEAS MADE REAL.")
      ),
      h("div",{style:{position:"absolute",left:64,top:223,width:1040,display:"flex",flexDirection:"column",alignItems:"flex-start",gap:0}},
        h("div",{style:{fontSize:80,lineHeight:0.99,fontWeight:900,letterSpacing:"-0.055em",color:"#F2F0EB"}},"CREATIVE THINKING."),
        h("div",{style:{fontSize:77,lineHeight:1.06,fontWeight:900,letterSpacing:"-0.05em",color:"#2FA976"}},"TECHNICAL EXECUTION.")
      ),
      h("div",{style:{position:"absolute",left:67,bottom:86,width:650,fontSize:20,lineHeight:1.5,color:"#E0E5E0",fontWeight:400}},"Commercial photography. Creative production. 3D. Intelligent systems."),
      h("div",{style:{position:"absolute",left:67,bottom:37,display:"flex",alignItems:"center",gap:14}},
        h("div",{style:{fontSize:11,fontWeight:700,letterSpacing:"0.17em",color:"#F2F0EB"}},"SCROLL TO EXPLORE"),
        h("div",{style:{fontSize:21,color:"#2FA976"}},"↓")
      )
    ),{width:W,height:H}
  );
}
