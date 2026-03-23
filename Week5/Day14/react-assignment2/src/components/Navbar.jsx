function Navbar(){
    return(
        <div className=" flex bg-gray-400 py-4 px-6 items-center">
        <h1 className="text-3xl">LOGO</h1>
        <nav className="mx-auto">
        <ul className="flex items-center gap-10">
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
             </li>
        </ul>
        </nav>
        </div>
    );
}
export default Navbar;