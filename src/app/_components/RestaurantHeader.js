import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src="https://th.bing.com/th/id/OIP.fWD_FPKA3yY_iKzf6gkMBgAAAA?w=225&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        />
      </div>
      <ul>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/">Login/Signup</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
