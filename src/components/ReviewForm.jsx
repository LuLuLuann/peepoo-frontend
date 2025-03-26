import { useState } from "react";

function ReviewForm({ bathroomType = "", location = "" }) {
  const [formData, setFormData] = useState({
    cleanliness: "",
    waitTime: "",
    toiletPaper: false,
    soap: false,
    seatCovers: false,
    paperTowels: false,
    handDryer: false,
    feminineProducts: false,
    pads: "",
    tampons: "",
    diaperMachine: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cleanliness || !formData.waitTime) {
      alert("Cleanliness and Wait Time are required fields.");
      return;
    }
    console.log("Submitted Review:", formData);
    // Submit logic here (e.g., API call)
  };

  return (
    <>
    console.log("Bathroom Type:", bathroomType);
    <h1>Review Form</h1>
      <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md max-w-md mx-auto">

    {/* For: __(type - chosen on previous screen, bathroom profile)___ bathroom at _____(location) */}
        <h2 className="text-xl font-bold mb-2">Review for {bathroomType} Bathroom at {location}</h2>

{/* Cleanliness -- levels in radio buttons */}
        <label className="block">Cleanliness:</label>
        {["Poor", "Average", "Good", "Excellent"].map((level) => (
          <label key={level} className="mr-2">
            <input type="radio" name="cleanliness" value={level} onChange={handleChange} required /> {level}
          </label>
        ))}

{/* Line Length/Wait time -- levels in radio buttons */}
        <label className="block mt-2">Line Length / Wait Time:</label>
        {["Short", "Moderate", "Long"].map((level) => (
          <label key={level} className="mr-2">
            <input type="radio" name="waitTime" value={level} onChange={handleChange} required /> {level}
          </label>
        ))}

{/* checkboxes (optional section): */}
        <fieldset className="mt-4">
          <legend className="font-semibold">Were these available?</legend>
          {/* Toilet Paper: Y/N; Soap: Y/N; Seat Covers: Y/N; Paper towels: Y/N; Hand dryer: Y/N */}
          {["toiletPaper", "soap", "seatCovers", "paperTowels", "handDryer", "changingTable"].map((item) => (
            <label key={item} className="block">
              <input type="checkbox" name={item} checked={formData[item]} onChange={handleChange} /> {item.replace(/([A-Z])/g, ' $1')}
            </label>
          ))}
        </fieldset>

        {/* (conditionally rendered based on if they chose women's restroom) */}
        {bathroomType.toLowerCase() === "women" && (
          <fieldset className="mt-4">
            <legend className="font-semibold">Feminine Hygiene Products (pads, tampons) Available?</legend>
            <label>
              <input type="checkbox" name="feminineProducts" checked={formData.feminineProducts} onChange={handleChange} /> Yes
            </label>

            {/* Feminine Hygiene Products (pads, tampons) Y/N 
            (conditionally rendered radio buttons based on if they said yes) */}
            {formData.feminineProducts && (
              <div className="mt-2">
                <label>
                  <input type="checkbox" name="padsAvailable" checked={formData.padsAvailable} onChange={handleChange} /> Pads Available
                </label>
                {formData.padsAvailable && (
                  <div>
                     {/* Pads / Sanitary Napkins: FREE / PAID */}
                    <label>Pads / Sanitary Napkins:</label>
                    {["FREE", "PAID"].map((option) => (
                      <label key={option} className="mr-2">
                        <input type="radio" name="pads" value={option} onChange={handleChange} /> {option}
                      </label>
                    ))}
              </div>
                )}
{/* Tampons: FREE/PAID */}
                <label className="block mt-2">
                  <input type="checkbox" name="tamponsAvailable" checked={formData.tamponsAvailable} onChange={handleChange} /> Tampons Available
                </label>
                {formData.tamponsAvailable && (
                  <div>
                    <label>Tampons:</label>
                    {["FREE", "PAID"].map((option) => (
                      <label key={option} className="mr-2">
                        <input type="radio" name="tampons" value={option} onChange={handleChange} /> {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </fieldset>
        )}

{/* Diaper Machine: Y/N  */}
        <fieldset className="mt-4">
          <legend className="font-semibold">Diaper Machine:</legend>
          <label>
            <input type="checkbox" name="diaperMachine" checked={formData.diaperMachine} onChange={handleChange} /> Yes
          </label>
        </fieldset>

        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit Review</button>
      </form>
    </>
  );
}

// // const styles = {
// //     display: "flex",
// //     justifyContent: "space-around"
// // }

export default ReviewForm;