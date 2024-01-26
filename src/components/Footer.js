import { Grid, Typography } from "@mui/material";

const Footer = () => {
    return (<div>
        <Grid className="bg-black   text-white text-center mt-10"
        container>
             <Grid item xs={12} sm={6} md={3}>
                  <button className="pb-5 pt-5 font-bold">Company</button>
                  <div className="flex flex-col ">
                  <button className="pb-5" >About</button>
                  <button className="pb-5" >Blog</button>
                  <button className="pb-5" >Press</button>
                  <button className="pb-5" >Jobs</button>
                  <button className="pb-5" >Partners</button>
            </div>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
                  <button className="pb-5 pt-5 font-bold">Solutions</button>
                  <div className="flex flex-col ">
                  <button className="pb-5" >Marketing</button>
                  <button className="pb-5" >Analytics</button>
                  <button className="pb-5" >Commerce</button>
                  <button className="pb-5" >Insights</button>
                  <button className="pb-5" >Support</button>
            </div>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
                  <button className="pb-5 pt-5 font-bold">Documentations</button>
                  <div className="flex flex-col ">
                  <button className="pb-5" >Guides</button>
                  <button className="pb-5" >API Status</button>
                  
            </div>
    </Grid>
    <Grid item xs={12} sm={6} md={3}>
                  <button className="pb-5 pt-5 font-bold">Legal</button>
                  <div className="flex flex-col ">
                  <button className="pb-5" >Claim</button>
                  <button className="pb-5" >Privacy</button>
                  <button className="pb-5" >Terms</button>
            
            </div>
    </Grid>
        </Grid>
    </div>)
}
export default Footer;