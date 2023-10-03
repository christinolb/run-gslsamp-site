import Link from "next/link";
import logo from "/public/Rutgers_University_Newark_logo.png"
import seal from "/public/Rutgers_University_seal.png"
import Image from "next/image";

{/**tailwind NOT implemented*/}
export default function Nav() {
    return (
      <nav class="desktop-nav">
        <div class="top-nav-container">
          <div class="top-nav-header">
            <div class="nav-logo-wrapper">
              {/**UPDATE image src */}
              <Image
                class="nav-logo"
                src={seal}
                alt="Rutgers Univesity–Newark Logo"
              />
              <Image
                class="nav-logo"
                src={logo}
                alt="Rutgers University–Newark Logo"
              />
            </div>
            <hr class="nav-vertical-line"/>
            <label class="nav-header-title">Louis Stokes Alliance for Minority Participation</label>
          </div> 
        </div>
        <div class="bottom-nav-container">
          <ul class="nav-page-list">
              <li><Link href="/">Home</Link></li>
              <li><li><Link href="/">About Us</Link></li></li>
              <li><Link href="/">Membership</Link></li>
              <li><li><Link href="/events">Events & Opportunities</Link></li></li>
              <li><Link href="/">Contact</Link></li>
          </ul>
        </div>
      </nav>
        
    );
  }

