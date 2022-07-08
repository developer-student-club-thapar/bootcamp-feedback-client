const Header = () => {
  return (
    <>
      <div className="w-screen text-white bg-[#9296FF] flex flex-row justify-center items-center p-8">
        <img
          className="mx-8 h-16"
          alt="DSC Banner"
          src="https://assets.servatom.com/DSC/gcp/brackets.png"
        />
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-medium ">Developer Student Clubs</h1>
          <h3 className="text-xl font-medium">
            Thapar Institute of Engineering and Technology
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
