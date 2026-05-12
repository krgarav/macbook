import { navLinks } from "../constants";


const Navbar = () => {
  type NavItem = {
    label: string;
  };
  return (
    <div>
      <header>
        <nav>
          <img src="/logo.svg" alt="apple-logo" />

          <ul>
            {navLinks.map((item) => (
              <li key={item?.label}>
                <a href="">{item?.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex-center gap-3">
            <button>
              <img src="/search.svg" alt="search" />
            </button>
            <button>
              <img src="/cart.svg" alt="search" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
