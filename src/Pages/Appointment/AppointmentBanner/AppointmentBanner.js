import bgImg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div className="hero min-h-screen" style={{ backgroundImage: `url( ${bgImg})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} />
            <p>You have selected {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
