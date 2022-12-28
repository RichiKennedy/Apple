import React from "react";
import { UserType } from "../types/UserType";
import Header from "./Header";
import LandingPage from "./LandingPage";
import WowBanner from "./WowBanner";

interface UserDashBoardProps {
  user: UserType;
  modalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
}

const UserDashBoard = ({
  user,
  modalOpen,
  setModalOpen,
}: UserDashBoardProps) => {
  return (
    <div>
    <Header user={user} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    <main className="relative h-[200vh]  ">
      <LandingPage />
    </main>
    <section className="relative z-30 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="text-white space-y-10 py-16">
         <h1 className="text-center text-4xl font-medium tracking-wide md:text-5xl">New Promos!</h1>
        </div>
       </section>
    </div>
  );
};

export default UserDashBoard;
