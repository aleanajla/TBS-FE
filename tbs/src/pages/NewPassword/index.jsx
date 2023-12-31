import Layout from "../../components/Layouts/Layout";
import NewPasswordForm from "../../components/NewPasswordForm/newPassword";

export default function NewPassword(){
    return(
        <>
            <div
                className="flex flex-row justify-between px-[95px] items-center"
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
                    <NewPasswordForm/>
                </div>
    
            </div>
        
        </>
        )
}