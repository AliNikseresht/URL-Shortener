import RotatingCircles from "@/components/ui/RotatingCircles";
import UrlForm from "@/components/ui/UrlForm";

export default function Home() {
  return (
    <main className="overflow-y-auto h-full">
      <RotatingCircles />
      <UrlForm />
    </main>
  );
}
