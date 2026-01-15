import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-12">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
                <h3 className="text-lg font-serif font-bold">UCSY Magazine</h3>
                <p className="text-sm text-muted-foreground">
                    The voice of the University of Computer Studies, Yangon. Bringing you the latest stories, research, and campus vibes.
                </p>
            </div>
            <div>
                <h4 className="font-medium mb-4">Categories</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="/news" className="hover:text-foreground">News</Link></li>
                    <li><Link href="/campus" className="hover:text-foreground">Campus Life</Link></li>
                    <li><Link href="/academics" className="hover:text-foreground">Academics</Link></li>
                    <li><Link href="/tech" className="hover:text-foreground">Tech & Research</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-medium mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="#" className="hover:text-foreground">Facebook</a></li>
                    <li><a href="#" className="hover:text-foreground">Twitter</a></li>
                    <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                    <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-medium mb-4">Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our weekly newsletter for the latest updates.
                </p>
                <form className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                        Join
                    </button>
                </form>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} UCSY Magazine. All rights reserved.</p>
            <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
