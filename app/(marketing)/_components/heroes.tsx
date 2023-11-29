import Image from "next/image";

export const Heroes = () => {
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:[400px]">
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