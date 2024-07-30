const Form = () => {
  return (
    <div className="w-full bg-opacity-65 bg-black h-[800px] relative">
      <div className="w-[24.5%] h-[85%] bg-black bg-opacity-50   p-16 space-y-4 top-0 bottom-0 left-0 right-0 m-auto  text-white rounded-md absolute z-10 ">
        <h1 className="font-bold text-3xl mt-5">Sign In</h1>
        <form className="space-y-6 text-center ">
          <input
            className="p-2 w-full bg-black opacity-70 border border-gray-50 rounded-lg "
            type="text"
            placeholder="Email or Mobile Number"
          />
          <input
            className="p-2 w-full bg-black opacity-70 border border-gray-50 rounded-lg"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <button className="block w-full p-2 bg-[#E50914] relative z-10 ">
            Sign In
          </button>
          <h3 className="text-center">OR</h3>
          <button className="block w-full p-2 bg-gray-600">
            Use a Sign-In Code
          </button>
          <p className="text-center hover:underline ">
            <a href="#dummy">Forgot Password?</a>
          </p>
        </form>
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <p>New to Netflix? Sign up now.</p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </div>
  );
};

export default Form;