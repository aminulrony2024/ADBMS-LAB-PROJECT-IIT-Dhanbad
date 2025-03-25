import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const auth = getAuth(app);
const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const { newUser, setLoading } = useAuth();
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [iitMail, setiitMail] = useState(true);
  const [passEqual, setPassEqual] = useState(false);
  const iitMailCheck = (e) => {
    const mail = e.target.value.split("@");
    const mailLastPart = mail[mail.length - 1];
    if (mailLastPart === "iitism.ac.in") {
      setiitMail(true);
    } else {
      setiitMail(false);
    }
  };
  const passwordCheck = (e) => {
    setPassword(e.target.value);
  };
  const passMatchCheck = (e) => {
    const confirmPassword = e.target.value;
    if (password === confirmPassword) {
      setError(false);
      setPassEqual(true);
    } else {
      setError(true);
      setPassEqual(false);
    }
  };
  //New User Sign up handler function
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const Name = form.name.value;
    const Email = form.email.value;
    const Password = form.password.value;
    newUser(Email, Password)
      .then(() => {
        // auth.currentUser.displayName =  name;
        updateProfile(auth.currentUser, {
          displayName: Name,
        })
          .then()
          .catch();
        sendEmailVerification(auth.currentUser)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "info",
              title: "Kindly check your IIT ISM mail id and confirm your identity",
              showConfirmButton: false,
              timer: 4500,
            });
          })
          .catch((error) => console.log(error));
        const userInfo = {
          name: Name,
          email: Email,
          role: "user",
        };
        //using axiospublic to call create user api in mongoDB
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            setLoading(false);
            navigate(location?.state ? location.state : "/login", {
              replace: true,
            });
          }
        });
      })
      .catch(() => {
        Swal.fire({
          title: "User already exist! Send verification email?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Send",
          denyButtonText: `Don't send`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                navigate(location?.state ? location.state : "/login", {
                  replace: true,
                });
              })
              .catch();
            Swal.fire(
              "Verification email sent! Kindly check your IIT ISM email",
              "",
              "success"
            );
          } else if (result.isDenied) {
            Swal.fire("Verification email not send", "", "info");
          }
        });
      });
  };
  return (
    <div className="bg-[#f6b7a1] m-4">
      <form onSubmit={handleSignUp} className="card-body">
        <h1 className="text-center text-2xl text font-bold text-white pb-2">
          Sign Up Now!
        </h1>
        <div className="form-control text-center">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name *"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control text-center">
          <input
            onChange={iitMailCheck}
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
            onBlur={passwordCheck}
          />
        </div>
        <div className="form-control text-center">
          <input
            type="password"
            name="confirmpassword"
            placeholder="confirm password *"
            className="input input-bordered"
            required
            onChange={passMatchCheck}
          />
        </div>
        {error && (
          <p className="text-center text-red-600">Password didnt match.</p>
        )}
        {!iitMail && (
          <p className="text-center text-red-600">
            Use your IIT ISM mail id only.
          </p>
        )}
        <div className="form-control mt-6 mx-auto">
          <button disabled={!(iitMail && passEqual)} className="btn btn-primary text-center bg-amber-900  border-none text-white text-xl">
            Register
          </button>
        </div>
        <p className="text-center">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
