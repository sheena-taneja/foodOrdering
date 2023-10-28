import NavItems from "./NavItems";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className="flex justify-between border border-solid border-black bg-green-100">
            <div className="flex items-center">
                <Logo />
                <h1 className="text-center text-blue-600 m-4 p-4 text-4xl font-extrabold">Zwigato</h1>
            </div>
            <NavItems />
        </div>
    )
}



export default Header;