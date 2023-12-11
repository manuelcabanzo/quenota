import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
  return(
    <div className="min-h-screen flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-row items-center justify-center md:justify-start text-center gap-y-5 flex-1 px-6">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  )
}

export default MarketingPage;