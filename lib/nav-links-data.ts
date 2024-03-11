import {
    HiUserGroup,
    HiHome,
    HiDocumentDuplicate

} from 'react-icons/hi';

import { PiCertificateFill } from 'react-icons/pi';
import { CgWebsite } from "react-icons/cg";
import { BiSolidUserBadge } from "react-icons/bi";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaRegAddressCard } from "react-icons/fa6";

export const links = [
    { name: 'Home', href: '/', icon: HiHome, },
    { name: 'Projects', href: '/projects', icon: CgWebsite, },
    { name: 'Skills & Certificates', href: '/skills&certificates', icon: PiCertificateFill },
    { name: 'Public Profiles & Badges', href: '/public-profiles', icon: FaRegAddressCard },
    // { name: 'Contact', href: 'contact', icon: FaRegAddressCard },
];
