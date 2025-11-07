const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-6 md:px-16 lg:px-28 border-b border-gray-300">
             
            <div className="h-10">
                
                <img
                    src="src\assets\image 1.png"
                    alt="V Films Logo"
                    className="h-full w-auto object-contain"
                />
            </div>

           
            <div className="w-6 h-6 border border-gray-600 flex flex-col justify-center items-center space-y-1 rounded cursor-pointer">
                <span className="block w-4 h-[2px] bg-gray-600"></span>
                <span className="block w-4 h-[2px] bg-gray-600"></span>
                <span className="block w-4 h-[2px] bg-gray-600"></span>
            </div>
        </header>
    );
};

export default Header;
