import { getAuth } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
const auth = getAuth(app);
const Login = () => {
  const { signIn, setUser, setLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        const currentUser = auth.currentUser;
        if (currentUser.emailVerified) {
          setUser(result.user);
          setLoading(false);
          navigate(location?.state ? location.state : "/home/dashboard", {
            replace: true,
          });
        }
        else{
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Verify your email to login",
            showConfirmButton: false,
            timer: 4500,
          });
        }
      })
      .catch(()=>{
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Wrong email / password",
          showConfirmButton: false,
          timer: 4500,
        });
      });
  };
  return (
    <div className="bg-[#f6b7a1] m-4">
      <form onSubmit={handleLogIn} className="card-body">
        <h1 className="text-center text-2xl text font-bold text-white pb-2">
          Sign In Now!
        </h1>
        <div className="form-control text-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your IIT ISM email *"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control text-center">
          <input
            type="password"
            name="password"
            placeholder="password *"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6 text-center">
          <button className="btn btn-primary bg-amber-900 border-none text-white text-xl">
            Log in
          </button>
        </div>
        <p className="text-center">
          New to this portal? <Link to="/signup">Sign Up</Link>
        </p>
        <p className="text-center">
          <Link to="/resetpassword">Forgot Password?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;