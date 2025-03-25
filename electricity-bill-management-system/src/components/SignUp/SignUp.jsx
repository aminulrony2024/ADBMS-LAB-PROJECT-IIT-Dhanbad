import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Github } from 'lucide-react';
import Header from '../Header/Header';
import Swal from "sweetalert2";
import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const auth = getAuth(app);
const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { newUser, setLoading, loading } = useAuth();
  // const [loading, setLoading] = useState(false);
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
              title: "Kindly check your mail id and confirm your identity",
              showConfirmButton: false,
              timer: 4500,
            });
          })
          .catch((error) => console.log(error));
        const userInfo = {
          name: Name,
          email: Email,
          role: "user"
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
              "Verification email sent! Kindly check your email",
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
    <>
    <Header></Header>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-700"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-700"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm dark:bg-gray-700"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;