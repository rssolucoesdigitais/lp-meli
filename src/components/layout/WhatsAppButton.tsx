import { whatsappLink } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-br from-green-400 to-green-600 py-3 pl-3 pr-3 text-white shadow-lg shadow-green-900/30 transition-[padding] hover:pr-5"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.5 5.9 1.5C23 28.5 28.6 22.9 28.6 16S23 3 16 3zm0 22.4c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.4 1.2 1.2-4.3-.3-.4a10 10 0 0 1-1.5-5.3C5.3 9.7 10.1 5.1 16 5.1S26.7 9.9 26.7 16 21.9 25.4 16 25.4zm5.5-7.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1 2.1 3.3 5.2 4.6c1.9.8 2.7.9 3.6.7.6-.1 1.8-.7 2-1.4s.3-1.3.2-1.4-.3-.2-.6-.3z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all group-hover:max-w-xs sm:inline-block">
        Falar com a RS
      </span>
    </a>
  );
}
