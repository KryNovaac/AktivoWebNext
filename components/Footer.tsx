const Footer = () => {
    return (
      <footer className="py-8">
   <div className="container mx-auto text-center">
    <img alt="Aktivo logo" className="mx-auto mb-4" src="https://placehold.co/100x40"/>
    <div className="flex justify-center space-x-4 mb-4">
     <a className="hover:underline" href="#">
      Privacy Policy
     </a>
     <span>
      *
     </span>
     <a className="hover:underline" href="#">
      Terms of use
     </a>
     <span>
      *
     </span>
     <a className="hover:underline" href="#">
      Support
     </a>
    </div>
    <div className="flex justify-center space-x-4 mb-4">
     <a className="text-gray-400 hover:text-white" href="#">
      <i className="fab fa-instagram">
      </i>
     </a>
     <a className="text-gray-400 hover:text-white" href="#">
      <i className="fab fa-linkedin">
      </i>
     </a>
    </div>
    <div className="text-gray-500">
     © 2023 Aktivo
    </div>
   </div>
  </footer>
    );
  };
  
  export default Footer;
  