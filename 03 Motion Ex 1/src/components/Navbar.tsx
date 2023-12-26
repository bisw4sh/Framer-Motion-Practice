import { NavLink, Outlet } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <>
      <nav className="bg-teal-500 p-6">
        <ul className="flex justify-center items-center gap-3 ">
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <NavLink to="/" className={({isActive}) => isActive ? `text-zinc-500 ` : `text-black`} >Home</NavLink>
          </li>
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <NavLink to="/scrollanimation" className={({isActive}) => isActive ? `text-zinc-500 ` : `text-black`} >Scroll Animations</NavLink>
          </li>
          <li className={"cursor-pointer hover:underline decoration-wavy	"}>
            <NavLink to="/cursor" className={({isActive}) => isActive ? `text-zinc-500 ` : `text-black`} >Cursor</NavLink>
          </li>
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <NavLink to="/view" className={({isActive}) => isActive ? `text-zinc-500 ` : `text-black`} >View</NavLink>
          </li>
          <li className="cursor-pointer hover:underline decoration-wavy	">
            <NavLink to="/empty" className={({isActive}) => isActive ? `text-zinc-500 ` : `text-black`} >Empty</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
