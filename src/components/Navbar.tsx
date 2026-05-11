

const Navbar = () => {
  type NavItem = {
  label: string;
};
  return (
    <div>
      <header>
        <nav>
          <img src = "/logo.svg" alt= "apple-logo"/>

          <ul>
            {[
              {label : 'Store'},
              {label : 'Mac'},
              {label : 'Iphone'},
              {label : 'Watch'}
            ].map(item=>(<li key={item?.label}><a href="">{item?.label}</a></li>))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;