import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Share/Footer/Footer";
import Navbar from "./Components/Share/Navbar/Navbar";
import Roomrent from "./Components/Roomrent/Roomrent";
import Doctors from "./Components/Doctors/Doctors";
import Roomdetail from "./Components/Roomdetail/Roomdetail";
import Doctordetails from "./Components/Doctordetails/Doctordetails";
import Formappointment from "./Components/Formofappointment/Formappointment";
import AllroomPrices from "./Components/Allroomprices/AllroomPrices";
import SelectTest from "./Components/SelectTest/SelectTest";
import SelectDiagonostic from "./Components/SelectDiagonostic/SelectDiagonostic";
import SignupPage from "./Components/Authentication/SignupPage";
import LoginPage from "./Components/Authentication/LoginPage";
import ResetPass from "./Components/Authentication/ResetPass";
import SeeallPackages from "./Components/SeeallPackages/SeeallPackages";
import PackageDetail from "./Components/PackageDetail/PackageDetail";
import Diagonostics from "./Components/Diagonostics/Diagonostics";
import BookNowDiagonostics from "./Components/Diagonostics/BookNowDiagonostics";
import Appointmentdoctor from "./Components/Appointmentdoctor/Appointmentdoctor";
import ScrollToTop from "./Components/ScrollTotop/ScrollToTop";
import Ottp from "./Components/OTTP/Ottp";
import TabTwoPharmecy from "./Components/TabTwoPharmecy/TabTwoPharmecy";
import AmbulanceDetails from "./Components/AmbulanceDetails/AmbulanceDetails";
import AmbulanceBooknowDetails from "./Components/AmbulanceDetails/AmbulanceBooknowDetails";
import Drugdetails from "./Components/DrugDetails/Drugdetails";
import AddToCart from "./Components/AddTocart/AddToCart";
import Telemedicinebenefits from "./Components/Telemedicinebenefits/Telemedicinebenefits";
import Checkout from "./Components/AddTocart/Checkout";
import DiagonosticsBookingDetails from "./Components/Diagonostics/DiagonosticsBookingDetails";
import FooterTwo from "./Components/Share/Footer/FooterTwo";
import TotalFeeSection from "./Components/Diagonostics/TotalFeeSection";
import Practice from "./Components/Practice/Practice";
import RequireAuth from "./Components/Authentication/RequireAuth";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyProfile from "./Components/Dashboard/MyProfile";
import Allusers from "./Components/Dashboard/Allusers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyAppointment from "./Components/Myappointment/MyAppointment";
import Appointments from "./Components/Dashboard/Appointments";
import ManageMedicines from "./Components/Dashboard/ManageMedicines";
import AllcustomerOrders from "./Components/Dashboard/AllcustomerOrders";
// import EditMedicine from "./Components/Dashboard/Addmedicine";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Addmedicine from "./Components/Dashboard/Addmedicine";
import AddDoctors from "./Components/Dashboard/AddDoctors";
import ManageAllDoctors from "./Components/Dashboard/ManageAllDoctors";
import BloodBank from "./Components/BloodBank/BloodBank";
import AddDonor from "./Components/Dashboard/AddDonor";
import BackTopBtn from "./Components/BackTopBtn/BackTopBtn";
import ManageDonor from "./Components/Dashboard/ManageDonor";
function App() {
  return (
    <div className="bg-white app relative">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>

        <Route
          path="/doctors"
          element={
            <RequireAuth>
              <Doctors />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/bloodbank"
          element={
            <RequireAuth>
              <BloodBank />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <MyAppointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {/* <Route element={<MyProfile />}></Route> */}
          <Route index element={<Allusers />}></Route>
          <Route path="manageappointments" element={<Appointments />}></Route>
          <Route path="managemedicine" element={<ManageMedicines />}></Route>
          <Route path="addmedicine" element={<Addmedicine />}></Route>
          <Route path="addDoctor" element={<AddDoctors />}></Route>
          <Route path="manageDoctors" element={<ManageAllDoctors />}></Route>
          <Route path="addDonor" element={<AddDonor />}></Route>
          <Route path="manageDonor" element={<ManageDonor />}></Route>

          <Route
            path="allcustomerorders"
            element={<AllcustomerOrders />}
          ></Route>
        </Route>

        <Route
          path="/doctordetail/:doctorId"
          element={<Doctordetails />}
        ></Route>
        <Route
          path="/appointmentform/:doctorId"
          element={<Formappointment />}
        ></Route>
        <Route path="/selecttest" element={<SelectTest />}></Route>
        <Route
          path="/selectdiagonostic"
          element={<SelectDiagonostic />}
        ></Route>
        <Route path="/signUppage" element={<SignupPage />}></Route>
        <Route path="/loginpage" element={<LoginPage />}></Route>
        <Route path="/resetpass" element={<ResetPass />}></Route>
        <Route
          path="/allpackages"
          element={
            <RequireAuth>
              <SeeallPackages />
            </RequireAuth>
          }
        ></Route>
        <Route path="/packageDetail" element={<PackageDetail />}></Route>
        <Route path="/diagonosticpage" element={<Diagonostics />}></Route>
        <Route
          path="/diagonosticBookNow"
          element={<BookNowDiagonostics />}
        ></Route>
        <Route
          path="/appointmentDoctor"
          element={<Appointmentdoctor />}
        ></Route>
        <Route path="/OTTP" element={<Ottp />}></Route>
        <Route
          path="/TabTwoPharmecy"
          element={
            <RequireAuth>
              <TabTwoPharmecy />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/ambulanceDetails"
          element={
            <RequireAuth>
              <AmbulanceDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/ambulancebookNowDetails"
          element={<AmbulanceBooknowDetails />}
        ></Route>
        <Route
          path="/drugDetails/:medicineId"
          element={<Drugdetails />}
        ></Route>
        <Route
          path="/addToCart"
          element={
            <RequireAuth>
              <AddToCart />
            </RequireAuth>
          }
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/totalFee" element={<TotalFeeSection />}></Route>
        <Route
          path="/Telemedicinebenefits"
          element={<Telemedicinebenefits />}
        ></Route>
        <Route path="/practice" element={<Practice />}></Route>

        <Route
          path="/diagonosticBookingDetails"
          element={<DiagonosticsBookingDetails />}
        ></Route>
      </Routes>

      <Footer />
      <BackTopBtn />
      <MessengerCustomerChat
        pageId="103025519179972"
        appId="1257335411675093"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
