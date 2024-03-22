import React from "react";

function Login() {
  return (
    <div className="flex login ]">
      <div className="w-[60%] max-sm:hidden   ">
        <img className="w-full h-screen  object-cover" src="https://images.unsplash.com/photo-1630476387426-52c6e0b14e50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <div className="md:w-[40%] w-full bg-[#333B50] ">
        <div className="flex justify-center item-center">
          <div class="flex flex-col items-center justify-center h-screen dark">
            <div class="w-full max-w-md    p-6">
              <h2 class="text-3xl font-bold text-center text-gray-200 mb-4">Enter Your Credientials</h2>
              <form class="flex flex-col">
                <input
                  placeholder="Enter Your ID"
                  class="bg-gray-700 text-gray-200 border-0 p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="email"
                />
                <input
                  placeholder="Password"
                  class="bg-gray-700 text-gray-200 border-0  p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="password"
                />
                <div class="flex items-center justify-between flex-wrap">
                  <label
                    class="text-sm text-gray-200 cursor-pointer"
                    for="remember-me"
                  >
                    <input class="mr-2" id="remember-me" type="checkbox" />
                    Remember me
                  </label>
                  <a
                    class="text-sm text-blue-500 hover:underline mb-0.5"
                    href="#"
                  >
                    Forgot password?
                  </a>
                  <p class="text-white mt-4">
                    {" "}
                    Don't have an account?{" "}
                    <a
                      class="text-sm text-blue-500 -200 hover:underline mt-4"
                      href="#"
                    >
                      Signup
                    </a>
                  </p>
                </div>
                <button
                  class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4     mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
