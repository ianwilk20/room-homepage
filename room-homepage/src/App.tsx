import Homepage from './pages/Homepage'

function App() {
    return (
        <main className="relative md:h-[100vh]">
            <Homepage />
            <div className="bg-white md:bg-transparent attribution pt-8 pb-4 text-xs sm:text-sm text-center text-gray-500">
                Challenge by&nbsp;
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    className="underline text-black font-semibold hover:text-gray-600 uppercase tracking-widest"
                >
                    Frontend Mentor
                </a>
                . Coded by&nbsp;
                <a
                    href="https://github.com/ianwilk20"
                    className="underline text-black font-semibold hover:text-gray-600 uppercase tracking-widest"
                >
                    Ian Wilkinson
                </a>
                .
            </div>
        </main>
    )
}

export default App
