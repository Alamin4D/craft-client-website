import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const SocialLogin = () => {
    const { googleLogin, githubLogin } = UseAuth();

    // navigation system
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(from)
                }
            });
    }

    return (
        <>
            <div className="divider">Continue With</div>
            <div className="flex gap-6 mx-auto">
                <FcGoogle className="text-3xl" onClick={() => handleSocialLogin(googleLogin)}></FcGoogle>

                <FaGithub className="text-3xl" onClick={() => handleSocialLogin(githubLogin)}></FaGithub>
            </div>
        </>
    );
};

export default SocialLogin;