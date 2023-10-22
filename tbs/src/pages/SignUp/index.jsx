import Layout from "../../components/Layouts/Layout";
import SignUpForm from "../../components/SignUpForm";

export default function SignUp() {
  return (
    <div
      className="flex flex-row justify-around items-center"
      style={{
        backgroundImage: 'url("/images/login_bg.png")',
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div>
        <p className="text-white font-bold text-5xl w-80">WE UNLIMITED POTENTIAL .</p>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  );
}
