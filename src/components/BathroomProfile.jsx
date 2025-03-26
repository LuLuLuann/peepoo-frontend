function BathroomProfile({bathroom}) {
    return (
       <>
        <h1>{bathroom?.facility_name}</h1>
If users have marked this bathroom as unavailable this will show up like a red banner on the top of this page. "This bathroom no longer exists or is no longer accessible to the public" (This is something that they can pick on the form and it will flag it on the bathroom profile)

bathroom.____ to show the info

       Time open: ____ to _____
       Address: _______
       Special info: ____(if extra info on location is needed or if you need to ask for a key or something___)
       Icons to show accessibility and what is available at the location -- men/women/unisex/family/handicap

Reviews, comments

most recent visit - day/time, cleanliness, wait time, availability of soap, tp, seat covers, [conditional based on if they chose women's bathroom] fem hygiene products (free/paid), has baby changing station, diaper machine

// later will add favs list option for CRUD

{/* ((((((not sure where but will have OPEN/CLOSED icon on top which will change according to the time --- and the person will choose which bathroom type they visited "men/women/unisex/family/handicapped" and click on a button saying "I VISITED" which will link them to the review form for that bathroom)))))) */}
       </>
    );
}

// const styles = {
//     display: "flex",
//     justifyContent: "space-around"
// }

export default BathroomProfile;