import React from "react";

const AppointmentOptions = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-secondary text-center">{name}</h2>

        <p className="text-center">{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p className="text-center">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>

        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="booking-modal"
            className="btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
