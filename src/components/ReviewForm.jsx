function ReviewForm() {
    return (
       <>
       <h1>Review Form</h1>
For: __(type - chosen on previous screen, bathroom profile)___ bathroom at _____(location)

Cleanliness -- levels in radio buttons 
Line Length/Wait time -- levels in radio buttons

checkboxes (optional):
Were these things available?: 
Toilet Paper: Y/N
Soap: Y/N
Seat Covers: Y/N
Paper towels: Y/N
Hand dryer: Y/N

(conditionally rendered based on if they chose women's restroom)
Feminine Hygiene Products (pads, tampons) Y/N 
(conditionally rendered radio buttons based on if they said yes)
Pads / Sanitary Napkins: FREE / PAID
Tampons: FREE/PAID 
Diaper Machine: Y/N 


       </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default ReviewForm;