function AddBathroom() {
    return (
        <>
        <h1>Add a Bathroom</h1>
        <form>
            (Required field) Address: _____

            Rest of form is optional: 
            Special instructions: (if needed) -- key? code? ask? weird location -- describe how to find it 
            Time open: ____

            Are these things available?
            (check all that apply - checkboxes)
            --- (if they check this a conditional field will pop up that they can choose to answer or not) --
           1. Women's Bathroom 
            handicap stall? Y/N 
            changing table? Y/N
            
            2. Men's Bathroom
            handicap stall? Y/N 
            changing table? Y/N

            3. Unisex Bathroom
            handicap stall? Y/N 
            changing table? Y/N

            4. Family bathroom

            5. Handicap bathroom 

            Do you have anything else you want to add? 

        </form>
        </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default AddBathroom;