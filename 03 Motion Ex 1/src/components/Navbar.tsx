import { Link, Outlet } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="bg-teal-500 p-6">
        <ul className="flex justify-center items-center gap-3 ">
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <Link to="/scrollanimation">Scroll Animations</Link>
          </li>
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <Link to="/cursor">Cursor</Link>
          </li>
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <Link to="/empty">Empty</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
