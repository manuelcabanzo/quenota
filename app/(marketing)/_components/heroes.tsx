import Image from "next/image";

export const Heroes = () => {
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[500px] h-[500px] sm:w-[550px] sm:h-[550px] md:w-[600px] md:h-[600px]">
                    <Image 
                        src="/capybaracomputer.jpg" 
                        fill
                        className="object-contain hidden dark:block"
                        alt="Capybara on a Computer"
                    />
                    <Image
                        src="/capybarafriendly.jpg"
                        fill
                        className="object-contain dark:hidden"
                        alt="Friendly Capybara"
                    />
                </div>
            </div>
        </div>
    )
}