import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name: treatmentnName, slots } = treatment;
  const date = format(selectedDate, "PP");
  const handelBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appoinmentDate: date,
      treatment: treatmentnName,
      patient: name,
      slots,
      email,
      phone,
    };
    console.log(booking);
    setTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-2xl font-semibold">{treatmentnName}</h3>
          <form onSubmit={handelBooking} className="grid grid-cols-1 gap-4 mt-10">
            <input type="text" disabled value={date} className=" input input-bordered shadow" />
            <select name="slot" className="select select-bordered w-full shadow">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              required
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered shadow"
            />
            <input
              required
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered shadow"
            />
            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered shadow"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="bg-gray-600 text-white py-3 rounded-lg"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
