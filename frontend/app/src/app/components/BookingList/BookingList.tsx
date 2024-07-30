import React from "react";
import Link from "next/link";
import "./bookingList.css";

interface Booking {
  id: number;
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}

interface BookingListProps {
  bookings: Booking[];
}

const BookingList: React.FC<BookingListProps> = ({ bookings }) => {
  return (
    <div className="card">
      <div className="card-header">Bookings</div>
      <div className="card-body">
        <div className="booking-items-container">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-item">
              <Link
                href={`/pages/BookingDetails/${booking.id}`}
                className="booking-link"
              >
                A Booking on {new Date(booking.date).toLocaleDateString()}{" "}
                starting at {booking.start_time}
              </Link>
            </div>
          ))}
        </div>
        <div className="add-booking-container">
          <Link href="/pages/AddBooking">
            <button className="add-booking-button">Add a Booking</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
