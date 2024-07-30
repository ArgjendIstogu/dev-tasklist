import Link from "next/link";
import "./bookingDetails.css";

interface Booking {
  id: number;
  service: string;
  doctor_name: string;
  start_time: string;
  end_time: string;
  date: string;
}

async function fetchBooking(id: string): Promise<Booking | null> {
  const res = await fetch(`http://host.docker.internal:5000/api/bookings`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.find((booking: Booking) => booking.id === Number(id));
}

const BookingDetails = async ({ params }: { params: { id: string } }) => {
  const booking = await fetchBooking(params.id);

  if (!booking) {
    return <div>Booking not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card">
        <div className="card-header">
          <Link href="/" className="back-button">
            <i className="bi bi-arrow-left-circle"></i>
          </Link>
          <div className="header-title">Booking Details</div>
        </div>
        <div className="card-body">
          <p>
            This Booking is with {booking.doctor_name} for {booking.service}.
          </p>
          <p>
            It starts at {booking.start_time} and ends at {booking.end_time} on{" "}
            {new Date(booking.date).toLocaleDateString()}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
