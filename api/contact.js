const destinations = { thirdaxis: "hello@thirdaxis.co.uk", shootless: "hello@shootless.co.uk" };
const origins = ["https://www.thirdaxis.co.uk","https://thirdaxis.co.uk","https://www.shootless.co.uk","https://shootless.co.uk"];
export default async function handler(req,res) {
  const origin=req.headers.origin;
  if(origins.includes(origin)) res.setHeader("Access-Control-Allow-Origin",origin);
  res.setHeader("Vary","Origin");
  if(req.method==="OPTIONS"){res.setHeader("Access-Control-Allow-Methods","POST, OPTIONS");res.setHeader("Access-Control-Allow-Headers","Content-Type");return res.status(204).end();}
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  if(!origins.includes(origin)) return res.status(403).json({error:"Origin not allowed"});
  if(!process.env.RESEND_API_KEY) return res.status(503).json({error:"Email delivery is being configured."});
  const body=req.body||{};
  if(body.website) return res.status(200).json({ok:true});
  const site=body.site;
  const name=String(body.name||"").trim().slice(0,120);
  const email=String(body.email||"").trim().slice(0,254);
  const subject=String(body.subject||"").trim().slice(0,120);
  const message=String(body.message||"").trim().slice(0,4000);
  if(!destinations[site]||!name||!email.includes("@")||!subject||message.length<10) return res.status(400).json({error:"Please complete all fields."});
  const sender=site==="shootless"?"Shootless Enquiries <enquiries@shootless.co.uk>":"Third Axis Enquiries <enquiries@thirdaxis.co.uk>";
  try {
    const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+process.env.RESEND_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({from:sender,to:[destinations[site]],reply_to:email,subject:"Website enquiry: "+subject.replace(/[\r\n]/g," "),text:"Name: "+name+"\nEmail: "+email+"\nProject: "+subject+"\n\n"+message})});
    if(!response.ok) return res.status(502).json({error:"Email could not be sent."});
    return res.status(200).json({ok:true});
  }catch(error){return res.status(502).json({error:"Email service unavailable."});}
}
