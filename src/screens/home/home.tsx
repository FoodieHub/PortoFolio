export const HomeScreen = () => {
    return (
        <div className="linear-background lg:py-10 py-36 sm:py-28 flex lg:flex-row justify-center flex-col-reverse lg:justify-between px-10 items-center" dir="rtl">
            <div className="text-white text-center lg:text-start lg:w-3/5 lg:p-36 lg:px-12">
                <h1 className="lg:text-5xl lg:pr-10 text-3xl mt-7 sm:text-4xl font-bold text-primary text"> - I'M Ali Sabet </h1>
                <h1 className="lg:text-5xl lg:pr-10 text-3xl mb-3 sm:text-4xl font-bold lg:mb-10">Front-End Developer</h1>
                <h3 className="lg:text-base text-xs sm:text-sm font-medium">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                </h3>
            </div>
            <img className="profile-image" src="IMG_1391.jpg" alt="" />
        </div>
    );
}