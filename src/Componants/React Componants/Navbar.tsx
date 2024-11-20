const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="center">
          {/* <span className="logo-parent">
            <a href="/"></a>
          </span> */}
          <a className="videoButton" href="/videoPage">
            <img
              className="logo"
              src="src\Componants\Images\Doctrina Live and Learn - Logo.png"
              alt=""
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
