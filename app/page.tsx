import Image from "next/image";
import "./globals.css";
import PatientsForm from "./components/forms/PatientsForm";

export default function Home() {
  return (
    <div className="underline bg-color-green-500">
    
      hello this is home page
      <section>
        <PatientsForm />
      </section>
    </div>
  );
}
