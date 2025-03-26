import { useState } from "react";


//  {/* Links to all the common sign up/login with options (oAuth) - possible stretch goal & regular login

function SignUpLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up/Login Data:", formData);
    // Add authentication logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up / Login Page</h1>
      <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md w-80">

      {/* email: _____ */}
        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        {/* password: ___  */}
        <label className="block mb-4">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            required
          />
        </label>

        {/* Sign Up Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mb-2">Sign Up</button>

        {/* Login Button */}
        <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

// const styles = {
// display: "flex",
//    justifyContent: "space-around"
//    }

export default SignUpLogin;