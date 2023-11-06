import Layout from "../../components/Layouts/Layout";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/forgotPassword";

export default function ForgotPassword(){
    return(
    <>
        <div
            className="flex flex-row justify-around items-center"
            style={{
            backgroundImage: 'url("/images/login_bg.png")',
            backgroundSize: "cover",
            height: "100vh",
            }}
        >
            <div>
                <div className="mt-[300px]">
                    <p className="text-white font-bold text-[60px] w-[400px]">WE UNLIMITED POTENTIAL .</p>
                </div>
                <div className="pt-[50px]">
                    <img src="/images/pelindo solusi digital.png"/>
                </div>
            </div>
            <div>
                <ForgotPasswordForm />
            </div>

        </div>
    
    </>
    )
}