import logoRs from "@/assets/logo-rs.png";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return <img src={logoRs} alt="RS Soluções Digitais" className={cn("h-12 w-auto", className)} />;
}
