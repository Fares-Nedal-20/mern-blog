import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

export default function OAuth() {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const resultFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultFromGoogle);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultFromGoogle.user.displayName,
          email: resultFromGoogle.user.email,
          photoFromGoogle: resultFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      onClick={handleGoogleClick}
      type="button"
      outline
      gradientDuoTone="pinkToOrange"
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      <span>Continue With Google</span>
    </Button>
  );
}
