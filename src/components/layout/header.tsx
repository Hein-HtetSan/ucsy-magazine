import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-2 border-primary">
      {/* Top Bar - Minimal */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted transition-colors rounded-none">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
            </button>
            <button className="p-2 hover:bg-muted transition-colors rounded-none">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </button>
        </div>

        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-3xl md:text-4xl font-black font-serif tracking-tighter uppercase">
              UCSY<span className="text-primary">.</span>Mag
            </span>
        </Link>
        
        <div className="flex items-center gap-4">
            <Link href="/subscribe" className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors">
                Subscribe
            </Link>
            <ThemeToggle />
        </div>
      </div>
      
      {/* Navigation - Split Layout */}
      <div className="hidden md:flex justify-center border-t border-border py-3">
        <nav className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <Link href="/news" className="hover:text-primary transition-colors hover-underline-animation">News</Link>
            <Link href="/campus" className="hover:text-primary transition-colors hover-underline-animation">Campus Life</Link>
            <Link href="/academics" className="hover:text-primary transition-colors hover-underline-animation">Academics</Link>
            <Link href="/tech" className="hover:text-primary transition-colors hover-underline-animation">Tech</Link>
            <Link href="/culture" className="hover:text-primary transition-colors hover-underline-animation">Culture</Link>
        </nav>
      </div>
    </header>
  );
}
