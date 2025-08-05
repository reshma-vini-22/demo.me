function VolunteerForm() {
    return (
        <div className="container">

            <h2>Volunteer Registration</h2>
            <div class="card3">
                <form>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <textarea
                        placeholder="Why do you want to volunteer with us?"
                        rows="4"
                    ></textarea>
                    <button type="submit">Submit</button>
                </form></div>
        </div>
    );
}
export default VolunteerForm;