import { Box, Button, TextField, Typography, FormHelperText, Divider, ListItem, List } from "@mui/material";
import HeaderNotLogin from "../components/HeaderNotLogin";


const PrivacyPolicy = () => {

  return (
    <Box height={"100%"} bgcolor={"text.light"}>
        <HeaderNotLogin/>
        <Box sx ={{color:"greys.darkest", padding:"25px", fontWeight:"400"}}>

            <Typography sx={{fontSize:'48px'}}>
                Privacy Policy
            </Typography>
            <Typography sx={{fontSize:'14px', fontWeight:"500",color:'text.main'}}>
                Last updated February 2nd, 2024
            </Typography>

            <Typography sx={{fontSize:'16px',mt:4}}>
                This Privacy Policy describes how we collect, use, and disclose personal information when you visit our website. By using our website, you agree to the collection and use of information in accordance with this policy.
            </Typography>

            <Typography sx={{fontSize:'18px',fontWeight:"600",mt:4}}>
                Information Collection and Use
            </Typography>
            <Typography sx={{fontSize:'16px',mt:2}}>
            We may collect several types of personal information for various purposes to provide and improve our services to you.
            </Typography>

            <Typography sx={{fontSize:'18px',fontWeight:"600",mt:4}}>
            Types of Data Collected
            </Typography>
            <Typography sx={{fontSize:'16px',mt:2}}>
                <ul style={{paddingLeft:"25px"}}>
                    <li>
                        Personal Data: While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.
                    </li>
                    <li>
                    Usage Data: We may also collect information on how the website is accessed and used.
                    </li>
                </ul>
            </Typography>

            <Typography sx={{fontSize:'18px',fontWeight:"600",mt:4}}>
                Uses of Data
            </Typography>
            <Typography sx={{fontSize:'16px',mt:2}}>
             We may collect several types of personal information for various purposes to provide and improve our services to you:
            </Typography>
            <Typography sx={{fontSize:'16px'}}>
                <ul style={{paddingLeft:"25px"}}>
                    <li>
                    To provide and maintain our website
                    </li>
                    <li>
                    To notify you about changes to our services
                    </li>
                    <li>
                    To allow you to participate in interactive features of our website when you choose to do so
                    </li>
                    <li>
                    To provide customer support
                    </li>
                    <li>
                    To gather analysis or valuable information so that we can improve our website
                    </li>
                    <li>
                    To monitor the usage of our website
                    </li>
                    <li>
                    To detect, prevent, and address technical issues
                    </li>
                </ul>
            </Typography>

            <Typography sx={{fontSize:'18px',fontWeight:"600",mt:4}}>
                 Disclosure of Data
            </Typography>
            <Typography sx={{fontSize:'16px',mt:2}}>
                We may disclose your personal data in good faith belief that such action is necessary to:
            </Typography>
            <Typography sx={{fontSize:'16px'}}>
                <ul style={{paddingLeft:"25px"}}>
                    <li>
                    Comply with a legal obligation
                    </li>
                    <li>
                    Protect and defend our rights or property
                    </li>
                    <li>
                    Prevent or investigate possible wrongdoing in connection with the website
                    </li>
                    <li>
                    Protect the personal safety of users of the website or the public
                    </li>
                </ul>
            </Typography>

            <Typography sx={{fontSize:'18px',fontWeight:"600",mt:4}}>
                Security of Data
            </Typography>
            <Typography sx={{fontSize:'16px',mt:2}}>
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </Typography>

            <Typography sx={{fontSize:'18px',fontWeight:"600",mt:4}}>
            Changes to This Privacy Policy
            </Typography>
            <Typography sx={{fontSize:'16px',mt:2}}>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </Typography>

            <Typography sx={{fontSize:'18px',fontWeight:"600",mt:4}}>
            Contact Us
            </Typography>
            <Typography sx={{fontSize:'16px',mt:2}}>
            If you have any questions about this Privacy Policy, please contact us. This sample privacy policy can be customized to suit your specific website and business needs.
            </Typography>

        </Box>
  </Box>
  );
};

export default PrivacyPolicy;