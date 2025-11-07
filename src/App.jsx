import Header from "./components/Header";

import ContactForm from "./components/ContactForm";
 

const App = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col "
            style={{
                backgroundImage: `url('src\assets\BG.png')`,
            }}
        >
            <Header />

            <main className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-28 py-12 gap-8 flex-grow">
                <ContactForm />
            </main>

       
            <footer className="text-center md:text-right text-sm text-orange-600 px-6 md:px-16 lg:px-28 py-4">
                <div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-4">
                    <span>vernita@varnanfilms.co.in</span>
                    <span>|</span>
                    <span>+91 98736 84567</span>
                </div>
            </footer>
        </div>
    );
};

export default App;
