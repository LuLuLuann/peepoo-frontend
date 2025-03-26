import { useState } from "react";

function AddBathroom() {
    const [formData, setFormData] = useState({
        address: "",
        specialInstructions: "",
        timeOpen: "",
        timeClose: "",
        womenBathroom: false,
        womenHandicap: false,
        womenChangingTable: false,
        menBathroom: false,
        menHandicap: false,
        menChangingTable: false,
        unisexBathroom: false,
        unisexHandicap: false,
        unisexChangingTable: false,
        familyBathroom: false,
        handicapBathroom: false,
        additionalNotes: ""
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add logic to send data to backend API
    };

    return (
        <div>
            <h1>Add a Bathroom</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Address (Required): 
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <br />

                <label>
                    Special Instructions:
                    <textarea 
                        name="specialInstructions" 
                        value={formData.specialInstructions} 
                        onChange={handleChange} 
                        placeholder="Key? Code? Weird location?"
                    />
                </label>
                <br />

                <label>
                    Time Open: 
                    <input 
                        type="time" 
                        name="timeOpen" 
                        value={formData.timeOpen} 
                        onChange={handleChange} 
                    />
                    to 
                    <input 
                        type="time" 
                        name="timeClose" 
                        value={formData.timeClose} 
                        onChange={handleChange} 
                    />
                </label>
                <br />

                <fieldset>
                    <legend>Available Bathrooms (Check all that apply):</legend>

                    <label>
                        <input 
                            type="checkbox" 
                            name="womenBathroom" 
                            checked={formData.womenBathroom} 
                            onChange={handleChange} 
                        />
                        Women's Bathroom
                    </label>
                    {formData.womenBathroom && (
                        <>
                            <label>
                                Handicap Stall?
                                <input 
                                    type="checkbox" 
                                    name="womenHandicap" 
                                    checked={formData.womenHandicap} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label>
                                Changing Table?
                                <input 
                                    type="checkbox" 
                                    name="womenChangingTable" 
                                    checked={formData.womenChangingTable} 
                                    onChange={handleChange} 
                                />
                            </label>
                        </>
                    )}
                    <br />

                    <label>
                        <input 
                            type="checkbox" 
                            name="menBathroom" 
                            checked={formData.menBathroom} 
                            onChange={handleChange} 
                        />
                        Men's Bathroom
                    </label>
                    {formData.menBathroom && (
                        <>
                            <label>
                                Handicap Stall?
                                <input 
                                    type="checkbox" 
                                    name="menHandicap" 
                                    checked={formData.menHandicap} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label>
                                Changing Table?
                                <input 
                                    type="checkbox" 
                                    name="menChangingTable" 
                                    checked={formData.menChangingTable} 
                                    onChange={handleChange} 
                                />
                            </label>
                        </>
                    )}
                    <br />

                    <label>
                        <input 
                            type="checkbox" 
                            name="unisexBathroom" 
                            checked={formData.unisexBathroom} 
                            onChange={handleChange} 
                        />
                        Unisex Bathroom
                    </label>
                    {formData.unisexBathroom && (
                        <>
                            <label>
                                Handicap Stall?
                                <input 
                                    type="checkbox" 
                                    name="unisexHandicap" 
                                    checked={formData.unisexHandicap} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label>
                                Changing Table?
                                <input 
                                    type="checkbox" 
                                    name="unisexChangingTable" 
                                    checked={formData.unisexChangingTable} 
                                    onChange={handleChange} 
                                />
                            </label>
                        </>
                    )}
                    <br />

                    <label>
                        <input 
                            type="checkbox" 
                            name="familyBathroom" 
                            checked={formData.familyBathroom} 
                            onChange={handleChange} 
                        />
                        Family Bathroom
                    </label>
                    <br />

                    <label>
                        <input 
                            type="checkbox" 
                            name="handicapBathroom" 
                            checked={formData.handicapBathroom} 
                            onChange={handleChange} 
                        />
                        Handicap Bathroom
                    </label>
                </fieldset>
                <br />

                <label>
                    Anything else to add?
                    <textarea 
                        name="additionalNotes" 
                        value={formData.additionalNotes} 
                        onChange={handleChange} 
                    />
                </label>
                <br />

                <button type="submit">Submit</button> 
                {/* needs some sort of onclick to send this data to the database  */}
            </form>
        </div>
    );
}

export default AddBathroom;


// function AddBathroom() {
//     return (
//         <>
//         <h1>Add a Bathroom</h1>
//         <form>
//             (Required field) Address: _____

//             Rest of form is optional: 
//             Special instructions: (if needed) -- key? code? ask? weird location -- describe how to find it 
//             Time open: ____

//             Are these things available?
//             (check all that apply - checkboxes)
//             --- (if they check this a conditional field will pop up that they can choose to answer or not) --
//            1. Women's Bathroom 
//             handicap stall? Y/N 
//             changing table? Y/N
            
//             2. Men's Bathroom
//             handicap stall? Y/N 
//             changing table? Y/N

//             3. Unisex Bathroom
//             handicap stall? Y/N 
//             changing table? Y/N

//             4. Family bathroom

//             5. Handicap bathroom 

//             Do you have anything else you want to add? 

//         </form>
//         </>
//     );
// }

// // const styles = {
// //     display: "flex",
// //     justifyContent: "space-around"
// // }

// export default AddBathroom;