import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className="flex items-center justify-between bg-gray-950 p-2 text-sm text-white">
      <p>&copy; {new Date().getFullYear()} Weather App</p>
      <nav className="flex space-x-2">
        <a href="https://www.linkedin.com/in/mtayyabrawan" target="_blank">
          <IconBrandLinkedin className="h-5" />
        </a>
        <a href="https://www.github.com/mtayyabrawan" target="_blank">
          <IconBrandGithub className="h-5" />
        </a>
        <a href="https://www.x.com/mtayyabrawan" target="_blank">
          <IconBrandX className="h-5" />
        </a>
        <a href="https://www.instagram.com/mtayyabrawan" target="_blank">
          <IconBrandInstagram className="h-5" />
        </a>
        <a href="https://www.facebook.com/mtayyabrawan" target="_blank">
          <IconBrandFacebook className="h-5" />
        </a>
        <a href="https://www.youtube.com/@mtayyabrawan" target="_blank">
          <IconBrandYoutube className="h-5" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
