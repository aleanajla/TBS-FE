import Layout from "../../components/Layouts/Layout";
import LoginForm from "../../components/LoginForm";

export default function Login() {
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
        <LoginForm />
      </div>
    </div>
  );
}
