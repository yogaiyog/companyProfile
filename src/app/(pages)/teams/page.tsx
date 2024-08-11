import Coach from "@/app/components/coach/page";
import Footer from "@/app/components/footer/page";

export default function TeamPage() {
  return (
    <>
      <div className="flex flex-col text-center justify-center items-center py-20 min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <Coach />
      </div>
      <Footer/>
    </>
  );
}
