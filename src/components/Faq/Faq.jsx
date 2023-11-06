
const Faq = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center mt-10 gap-10">
            <div className="max-w-[500px]">
                <div className="hs-accordion-group">
                    <div className="hs-accordion active" id="hs-basic-with-arrow-heading-one">
                        <button className="hs-accordion-toggle hs-accordion-active:text-travego2 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-arrow-collapse-one">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            What types of tours and services do you offer?
                        </button>
                        <div id="hs-basic-with-arrow-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-arrow-heading-one">
                            <p className="text-gray-800 dark:text-gray-200">
                            We offer a wide range of tours and services, including city tours, historical tours, adventure tours, transportation services, and custom tours tailored to your preferences.
                            </p>
                        </div>
                    </div>

                    <div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
                        <button className="hs-accordion-toggle hs-accordion-active:text-travego2 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-arrow-collapse-two">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            How do I book a tour or service with Travego?
                        </button>
                        <div id="hs-basic-with-arrow-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-arrow-heading-two">
                            <p className="text-gray-800 dark:text-gray-200">
                            Booking with us is easy! Simply visit our website and select the tour or service you're interested in. Follow the prompts to make a reservation, or you can contact our customer support for assistance.
                            </p>
                        </div>
                    </div>

                    <div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
                        <button className="hs-accordion-toggle hs-accordion-active:text-travego2 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-arrow-collapse-three">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            What is the cancellation policy for bookings?
                        </button>
                        <div id="hs-basic-with-arrow-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-arrow-heading-three">
                            <p className="text-gray-800 dark:text-gray-200">
                            Our cancellation policy varies depending on the tour or service you've booked. Please refer to the specific tour or service page for detailed cancellation information.
                            </p>
                        </div>
                    </div>
                    <div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
                        <button className="hs-accordion-toggle hs-accordion-active:text-travego2 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-arrow-collapse-three">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            What languages do your tour guides speak?
                        </button>
                        <div id="hs-basic-with-arrow-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-arrow-heading-three">
                            <p className="text-gray-800 dark:text-gray-200">
                            Our tour guides are multilingual and can provide tours in a variety of languages. You can specify your language preference when booking.
                            </p>
                        </div>
                    </div>
                    <div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
                        <button className="hs-accordion-toggle hs-accordion-active:text-travego2 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-arrow-collapse-three">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-travego2 hs-accordion-active:group-hover:text-travego2 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                            What payment methods do you accept for bookings?
                        </button>
                        <div id="hs-basic-with-arrow-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-arrow-heading-three">
                            <p className="text-gray-800 dark:text-gray-200">
                            We accept various payment methods, including credit/debit cards, PayPal, and other online payment options. Payment details can be found during the booking process.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
            <div className="max-w-[400px]">
                <h1 className="text-4xl text-travego2 font-bold text-center">FAQ - Frequently Asked Questions</h1>
            </div>
        </div>
    );
};

export default Faq;