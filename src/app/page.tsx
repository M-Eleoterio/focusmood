import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div>
      <div className="fixed top-10 right-10">
        <ThemeToggle />
      </div>
    </div>
  );
}
