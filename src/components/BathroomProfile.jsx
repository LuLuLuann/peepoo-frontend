import React from "react";

// Icons to show accessibility and what is available at the location -- men/women/unisex/family/handicap
import { FaToilet, FaWheelchair, FaBaby, FaMale, FaFemale, FaUniversalAccess } from "react-icons/fa";

function BathroomProfile({ bathroom }) {
  if (!bathroom) return <p>Loading...</p>;

//   OPEN/CLOSED icon on top which will change according to the time
  // Open/closed status
  const currentTime = new Date();
  const openTime = parseTime(bathroom.hours_of_operation?.split("-")[0]);
  const closeTime = parseTime(bathroom.hours_of_operation?.split("-")[1]);
  const isOpen = currentTime >= openTime && currentTime <= closeTime;

  return (
    <div className="bathroom-profile">
       {/* If users have marked this bathroom as unavailable this will show up like a red banner on the top of this page. "This bathroom no longer exists or is no longer accessible to the public" (This is something that they can pick on the form and it will flag it on the bathroom profile) */}
      {bathroom.status === "Unavailable" && (
        <div className="unavailable-banner">This bathroom no longer exists or is no longer accessible to the public</div>
      )}
      <h1>{bathroom.facility_name}</h1>
      <p><strong>Location Type:</strong> {bathroom.location_type}</p>
      <p><strong>Operator:</strong> {bathroom.operator}</p>
      {/* Time open: ____ to _____ */}
      <p><strong>Hours of Operation:</strong> {bathroom.hours_of_operation}</p>
      <p><strong>Status:</strong> {isOpen ? "Open" : "Closed"}</p>
      {/* Address: _______ */}
      <p><strong>Address:</strong> {bathroom.location_1?.human_address}</p>
      <p><strong>Additional Notes:</strong> {bathroom.additional_notes}</p>
      <p><strong>Latitude:</strong> {bathroom.latitude}</p>
      <p><strong>Longitude:</strong> {bathroom.longitude}</p>
      
      <div className="icons">
        {bathroom.accessibility === "Yes" && <FaWheelchair title="Accessible" />}
        {bathroom.restroom_type?.includes("Men") && <FaMale title="Men's Bathroom" />}
        {bathroom.restroom_type?.includes("Women") && <FaFemale title="Women's Bathroom" />}
        {bathroom.restroom_type?.includes("Unisex") && <FaUniversalAccess title="Unisex Bathroom" />}
        {bathroom.changing_stations === "Yes" && <FaBaby title="Baby Changing Station" />}
      </div>

      <h2>Reviews & Comments</h2>
      {/* most recent visit - day/time, cleanliness, wait time, availability of soap, tp, seat covers, [conditional based on if they chose women's bathroom] fem hygiene products (free/paid), has baby changing station, diaper machine, reviews, comments */}
      <p><strong>Most recent visit:</strong> {bathroom.last_review?.date || "No recent visits"}</p>
      <p><strong>Cleanliness:</strong> {bathroom.last_review?.cleanliness || "N/A"}</p>
      <p><strong>Wait Time:</strong> {bathroom.last_review?.wait_time || "N/A"}</p>
      <p><strong>Soap Available:</strong> {bathroom.last_review?.soap ? "Yes" : "No"}</p>
      <p><strong>Toilet Paper:</strong> {bathroom.last_review?.toilet_paper ? "Yes" : "No"}</p>
      {bathroom.last_review?.baby_changing_station && <p><strong>Baby Changing Station:</strong> Available</p>}
      {bathroom.last_review?.diaper_machine && <p><strong>Diaper Machine:</strong> Available</p>}
      
      {/* not sure where to put this but the person will choose which bathroom type they visited "men/women/unisex/family/handicapped" and click on a button saying "I VISITED" which will link them to the review form for that bathroom */}
      <button className="visit-button">I Visited</button>
    </div>
  );
}

// Helper function to parse time strings like "09:00 AM" into Date objects
function parseTime(timeStr) {
  if (!timeStr) return new Date(0); // default to epoch if no time provided
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
}

// // const styles = {
// //     display: "flex",
// //     justifyContent: "space-around"
// // }
export default BathroomProfile;


// Special info: ____(if extra info on location is needed or if you need to ask for a key or something___)

// later will add to favorites list option for CRUD