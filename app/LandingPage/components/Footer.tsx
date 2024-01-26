import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { BsEnvelopeDash } from "react-icons/bs";

const socialLinks = [
    { id: 1,  icon: IoLogoFacebook, link:"https:/facebook.com" },
    { id: 2,  icon: IoLogoInstagram, link:"https:/instagram.com" },
    { id: 3,  icon: IoLogoTwitter, link:"https:/twitter.com" },
]

const aboutus = [
    {id: 1, title: "Company", link: "#"},
    {id: 1, title: "Leadership", link: "#"},
    {id: 1, title: "Our feature", link: "#"},
    {id: 1, title: "Pricing", link: "#"}
]
const help = [
    {id: 1, title: "Customer Support", link: "#"},
    {id: 1, title: "Organizer Support", link: "#"},
    {id: 1, title: "Terms of service", link: "#"},
    {id: 1, title: "Privacy Policy", link: "#"},
    {id: 1, title: "Contact us", link: "#"},
    {id: 1, title: "Report a scam", link: "#"}
]
const connect = [
    {id: 1, title: "Press", link: "#"},
    {id: 1, title: "Blog", link: "#"},
    {id: 1, title: "Join our team", link: "#"},
    {id: 1, title: "Pricing", link: "#"}
]



const Footer = () => {
    const currentYear = new Date().getFullYear();
    const paddedYear = currentYear.toString().padStart(4, '0');

    return <div className="bg-[#252C2B]">
        <div className="mt-6 container px-24 py-6 flex flex-col gap-4">
            <div className="flex justify-center gap-4 text-white mb-5">
                
                {socialLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <Link href={item.link} key={item.id} className="hover:text-[#F5A42C]">
                            <IconComponent size={22} />
                        </Link>
                    );
                })}
               
            </div>
            <div className="flex justify-between gap-10 content-center">
                <div className="text-[#F5FFFE] flex flex-col gap-3">
                    <h5 className="text-lg font-medium mb-5">About us</h5>

                    {aboutus.map((items) => 
                        <Link href={items.link} key={items.id} className="hover:text-[#F5A42C] ">{items.title}</Link>
                    )}
                </div>
                <div className="text-[#F5FFFE] flex flex-col gap-3">
                    <h5 className="text-lg font-medium mb-5">Help & Support</h5>

                    {help.map((items) => 
                        <Link href={items.link} key={items.id} className="hover:text-[#F5A42C]">{items.title}</Link>
                    )}
                </div>
                <div className="text-[#F5FFFE] flex flex-col gap-3">
                    <h5 className="text-lg font-medium mb-5">Connect with us</h5>

                    {connect.map((items) => 
                        <Link href={items.link} key={items.id} className="hover:text-[#F5A42C]">{items.title}</Link>
                    )}
                </div>
                <div className="text-[#F5FFFE] flex flex-col gap-3">
                    <h5 className="text-lg font-medium mb-5">Sign up for newsletter</h5>

                    <p className="w-[15rem]">Sign up now and be the first to know about exclusive offers, latest events news!</p>
                    
                    <div className="flex flex-col">
                        <h4>Email</h4>
                        <Input placeholder="Enter your email address" type="email" />
                    </div>

                    <Button className="flex gap-2 bg-[#F5A42C]">
                        <BsEnvelopeDash />
                        Subscribe
                    </Button>
                    
                </div>
            </div>
            <div className="text-center text-white mt-5 grid">
                © Evolution Events, All Rights Reserved 
                <p className="text-sm text-[#F5A42C]">Padding Technology {paddedYear}</p>
            </div>
        </div>
       
    </div>
}

export default Footer