import { useState, useRef } from "react";
import { supabase } from "./supabase";
import { checkValidData } from "./validate";

const useAuth = () => {
  const [signUpMode, setSignUpMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const signUp = async (email, password, fullName) => {
    const error = checkValidData(email, password);
    if (error) {
      setErrorMessage(error);
      return false;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (signUpError) {
      setErrorMessage(signUpError.message);
      setSuccessMessage(null);
      return false;
    } else {
      setErrorMessage(null);
      setSuccessMessage(
        "Sign up successful! Please check your email for the confirmation link."
      );
      return true;
    }
  };

  const signIn = async (email, password) => {
    const error = checkValidData(email, password);
    if (error) {
      setErrorMessage(error);
      return false;
    }

    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      {
        email,
        password,
      }
    );

    if (signInError) {
      setErrorMessage(signInError.message);
      setSuccessMessage(null);
      return false;
    } else {
      setErrorMessage(null);
      setSuccessMessage("Sign in successful!");
      return true;
    }
  };

  const handleButtonClick = async () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const fullNameValue = signUpMode ? fullName.current.value : null;

    if (signUpMode) {
      await signUp(emailValue, passwordValue, fullNameValue);
    } else {
      await signIn(emailValue, passwordValue);
    }
  };

  const toggleSignUpMode = () => {
    setSignUpMode(!signUpMode);
    resetMessages();
  };

  const resetMessages = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return {
    signUpMode,
    setSignUpMode,
    email,
    password,
    fullName,
    errorMessage,
    successMessage,
    signUp,
    signIn,
    handleButtonClick,
    toggleSignUpMode,
    resetMessages,
  };
};

export default useAuth;
