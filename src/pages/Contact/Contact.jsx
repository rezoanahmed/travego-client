import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <>
        <Helmet>
            <title>Travego | Contact</title>
        </Helmet>
        <div className="dark:bg-[#1f2937] dark:text-[#949ea9]">
            <section className="pt-8 px-4 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 border-b pb-2 border-travego2">Contact Us</h2>
            <p className="mt-4 leading-relaxed">
                At <span className="text-travego2 dark:text-blue-600">TraveGo</span>, we're always eager to assist you. Whether you're interested in our services or just have a general inquiry, don't hesitate to reach out.
            </p>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <p className="leading-relaxed">Bashundhara R/A, Dhaka, Bangladesh</p>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Phone</h3>
                <p className="leading-relaxed">(123) 456-7890</p>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Email</h3>
                <p className="leading-relaxed">support@travego.com</p>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
                <p className="leading-relaxed">Mon - Fri: 9am - 7pm</p>
                <p className="leading-relaxed">Sat: 10am - 5pm</p>
                <p className="leading-relaxed">Sun: Closed</p>
            </div>
        </section>
        </div>
        </>
    );
};

export default Contact;
