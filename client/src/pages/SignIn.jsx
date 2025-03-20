import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const { currentUser, error, loading } = useSelector((state) => state.user);

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        dispatch(signInFailure(data.messege));
        return;
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
      }
    } catch (error) {
      dispatch(signInFailure(data.messege));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex flex-col gap-5 flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Fares's
            </span>
            Blog
          </Link>
          <p className="text-sm text-gray-500">
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                id="email"
                placeholder="AAaa@company.com"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                id="password"
                placeholder="***********"
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              outline
              gradientDuoTone="purpleToBlue"
              disabled={loading}
            >
              {loading ? (
                <div>
                  <Spinner size="sm" className="mr-2" />
                  <span>Loading</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth/>
          </form>
          <div className="mt-5 flex gap-2 text-sm">
            <span>Don't have an account?</span>
            <Link to={"/sign-up"} className="text-red-700">
              Sign Up
            </Link>
          </div>
          {error && <Alert className="mt-5" color="failure">{error}</Alert>}
        </div>
      </div>
    </div>
  );
}
