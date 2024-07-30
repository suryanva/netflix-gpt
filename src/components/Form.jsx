import useAuth from "../utils/useAuth";

const Form = () => {
  const {
    signUpMode,
    email,
    password,
    fullName,
    errorMessage,
    successMessage,
    handleButtonClick,
    toggleSignUpMode,
  } = useAuth();

  return (
    <div className="w-full bg-opacity-65 bg-black h-[800px] relative">
      <div className="w-[24.5%] h-[85%] bg-black bg-opacity-50 p-16 space-y-4 top-0 bottom-0 left-0 right-0 m-auto text-white rounded-md absolute z-10">
        <h1 className="font-bold text-3xl mt-5">
          {signUpMode ? "Sign Up" : "Sign In"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 text-center"
        >
          {signUpMode && (
            <input
              ref={fullName}
              className="p-4 w-full bg-gray-700 border border-gray-50 rounded-lg"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-4 w-full bg-gray-700 border border-gray-50 rounded-lg"
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-4 w-full bg-gray-700 border border-gray-50 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={handleButtonClick}
            className="block w-full p-2 bg-[#E50914] hover:bg-opacity-60"
          >
            {signUpMode ? "Sign Up" : "Sign In"}
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {!signUpMode && <h3 className="text-center">OR</h3>}
          {!signUpMode && (
            <button className="block w-full p-2 bg-gray-600 hover:bg-opacity-60">
              Use a Sign-In Code
            </button>
          )}
          {!signUpMode && (
            <p className="text-center hover:underline">
              <a href="#dummy">Forgot Password?</a>
            </p>
          )}
        </form>
        <div className="flex items-center">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <p
          className="cursor-pointer hover:underline"
          onClick={toggleSignUpMode}
        >
          {signUpMode
            ? "Already a User? Sign In Now"
            : "New to Netflix? Sign up now."}
        </p>
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </div>
    </div>
  );
};

export default Form;
