import React from "react";
import styles from "../style";

const Signup = () => (
  <div className="container mx-auto h-full flex justify-center items-center">
    <div
      className={`${styles.padding} flex items-center text-black rounded-xl backdrop-blur-xl bg-white/30 m-10 w-1/4 mx-auto my-72 h-1/4`}
    >
      <form className={`flex flex-col w-full`} onSubmit="">
        <input
          className="w-full p-4 mx-auto"
          type="text"
          placeholder="Input 4 digit number/text"
          onChange=""
          value=""
        />
        <button
          className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold p-4 m-4 mt-4 my-auto mx-auto rounded-lg text-center sm:w-24 bg-primary highlight-white/20 hover:bg-secondary hover:drop-shadow-lg"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
);

export default Signup;
