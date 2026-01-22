import "./App.css";
import avotorImg from "./assets/avotor.jpeg";

function App() {
  const user = {
    name: "Maryam Mirzada",
    username: "@maryammirzada",
    avotorImg: avotorImg,
    XP: 90,
    lastActive: "Dec 22 2025",
    strickDay: 2,
    longectStrick: 2,
    badge: "no badge is earn yet",
    personalInfo: {
      email: "marimmirzada@gmail.com",
      gender: "female",
      country: "Afghanistan",
      province: "Parwan",
      teachExperience: 2,
      DB: 21 / 11 / 2005,
      onlineProtfloaLink: "not avalibe",
      language: ["English", "Dari"],
    },
    AcountDetail: {
      role: "Student",
      state: "Active",
      verified: "verified",
    },
  };
  return (
    <div className="page">
      <profilePage></profilePage>
    </div>
  );
}

export default App;
