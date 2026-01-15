import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Dummy Data
const FEATURED_POST = {
  title: "ရွှေ့ပြောင်း၍မရနိုင်သောသူ: ပြည့်ဖြိုးမောင်",
  subtitle: "UCSY ၏ ဒဏ္ဍာရီတစ်ပါး",
  excerpt: "မင်းကိုစတွေ့ခဲ့တဲ့ နေရာလေးဆီ ပြန်သွားမယ်... လွယ်အိတ်ကလေးနဲ့ စောင့်နေမယ်... ငါဘယ်မှမသွားဘူး... သီချင်းထဲကလိုပဲ ခိုင်မာတဲ့ သံန္နိဌာန်နဲ့ ကျောင်းသားတစ်ယောက်အကြောင်း။",
  category: "Campus Life",
  author: "The Script (Fan)",
  date: "Oct 24, 2023",
  image: "/images/phout-phaw.jpg",
  slug: "the-man-who-cant-be-moved"
};

const TRENDING_POSTS = [
  {
    title: "Student Life: Balancing Code and Coffee",
    category: "Campus Life",
    date: "Oct 22",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
    slug: "student-life-balance",
    size: "large" 
  },
  {
    title: "Annual Hackathon Winners Announced",
    category: "Events",
    date: "Oct 20",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
    slug: "hackathon-winners",
    size: "small"
  },
  {
    title: "New Research Lab Opens",
    category: "News",
    date: "Oct 18",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2940&auto=format&fit=crop",
    slug: "research-lab-opening",
    size: "small"
  },
  {
    title: "The Art of Algorithms",
    category: "Tech",
    date: "Oct 17",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
    slug: "art-of-algorithms",
    size: "medium"
  },
  {
    title: "Campus Photography Contest",
    category: "Culture",
    date: "Oct 16",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2838&auto=format&fit=crop",
    slug: "photo-contest",
    size: "medium"
  }
];

const LATEST_UPDATES = [
    "ရာသီတွေ ဘယ်လိုပြောင်းပြောင်း မပြောင်းလဲဘဲ တည်ရှိနေတဲ့ \"The Man Who Can't Be Moved\"",
    "ရာသီတွေ ဘယ်လိုပြောင်းပြောင်း မပြောင်းလဲဘဲ တည်ရှိနေတဲ့ \"The Man Who Can't Be Moved\"",
    "ရာသီတွေ ဘယ်လိုပြောင်းပြောင်း မပြောင်းလဲဘဲ တည်ရှိနေတဲ့ \"The Man Who Can't Be Moved\""
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans overflow-x-hidden">
      <Header />
      
      {/* Marquee Section */}
      <div className="bg-primary text-primary-foreground py-2 overflow-hidden whitespace-nowrap border-b-2 border-primary">
        <div className="animate-marquee inline-block">
            {LATEST_UPDATES.map((update, i) => (
                <span key={i} className="mx-8 text-sm font-bold uppercase tracking-widest">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mb-0.5"></span>
                    {update}
                </span>
            ))}
            {LATEST_UPDATES.map((update, i) => (
                <span key={`dup-${i}`} className="mx-8 text-sm font-bold uppercase tracking-widest">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-3 mb-0.5"></span>
                    {update}
                </span>
            ))}
        </div>
      </div>

      <main className="flex-1">
        {/* Creative Hero Section */}
        <section className="relative min-h-[85vh] flex items-center border-b border-border">
          <div className="absolute inset-0 z-0">
             <Image 
                src={FEATURED_POST.image} 
                alt={FEATURED_POST.title} 
                fill 
                className="object-cover opacity-50 dark:opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-12 gap-8 h-full">
            <div className="col-span-12 lg:col-span-8 flex flex-col justify-center space-y-6 pt-20 lg:pt-0">
                <div className="inline-flex items-center gap-4 mb-4">
                    <span className="h-[1px] w-12 bg-primary"></span>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{FEATURED_POST.category}</span>
                </div>
                <h3 className="text-5xl md:text-7xl lg:text-7xl font-black font-burmese leading-[0.85] tracking-tighter mix-blend-difference text-foreground lg:whitespace-nowrap">
                    ရွှေ့ပြောင်း၍ <br/>
                    <span className="text-outline lg:ml-24">မရနိုင်သော သူ</span> <br/>
                </h3>
                <p className="text-lg md:text-xl max-w-xl border-l-2 border-primary pl-6 py-2 mt-8 font-burmese">
                    {FEATURED_POST.excerpt}
                </p>
                <div className="pt-8">
                    <Link href={`/article/${FEATURED_POST.slug}`} className="inline-flex items-center gap-3 text-lg font-bold uppercase tracking-widest group">
                        Read Story
                        <span className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                            <ArrowRight className="h-5 w-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </span>
                    </Link>
                </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Trending Section */}
        <section className="container mx-auto px-4 sm:px-8 py-20">
          <div className="flex items-end justify-between mb-12 border-b border-border pb-6">
            <h2 className="text-5xl md:text-6xl font-black font-serif tracking-tighter">
                TRENDING
            </h2>
            <Link href="/trending" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
                View Archive <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
            {TRENDING_POSTS.map((post, index) => {
                const isLarge = index === 0;
                const isMedium = index === 3 || index === 4;
                
                let colSpan = "md:col-span-1";
                let rowSpan = "md:row-span-1";
                
                if (isLarge) {
                    colSpan = "md:col-span-2";
                    rowSpan = "md:row-span-2";
                } else if (isMedium) {
                    colSpan = "md:col-span-2";
                }

                return (
                    <Link href={`/article/${post.slug}`} key={post.slug} className={`${colSpan} ${rowSpan} group relative overflow-hidden bg-secondary`}>
                         <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                          <div className="absolute inset-0 p-6 flex flex-col justify-end">
                             <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-xs font-bold text-white/80 uppercase tracking-widest mb-2 block">{post.category}</span>
                                <h3 className={`font-bold font-serif text-white leading-tight ${isLarge ? 'text-4xl' : 'text-2xl'}`}>
                                    {post.title}
                                </h3>
                                <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4">
                                    <span className="text-white/80 text-sm flex items-center gap-2">
                                        Read Article <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                             </div>
                          </div>
                    </Link>
                );
            })}
          </div>
        </section>

        {/* Minimalist Latest List */}
        <section className="bg-foreground text-background py-24">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
                    <h2 className="text-5xl md:text-7xl font-black font-serif tracking-tighter text-outline-background">
                        LATEST <br/> STORIES
                    </h2>
                    <p className="text-background/80 max-w-sm mt-8 md:mt-0 text-lg">
                        Stay updated with the latest happenings, research breakthroughs, and student achievements.
                    </p>
                </div>

                <div className="space-y-0 divide-y divide-background/20">
                    {[1, 2, 3].map((item, i) => (
                        <div key={i} className="group py-12 flex flex-col md:flex-row gap-8 items-start md:items-center hover:bg-background/5 transition-colors px-4 -mx-4">
                            <span className="text-6xl font-black font-serif text-background/20 group-hover:text-primary transition-colors">
                                0{item}
                            </span>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Category</span>
                                    <span className="w-1 h-1 bg-background/50 rounded-full"></span>
                                    <span className="text-xs text-background/60">Oct {24-i}, 2023</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold font-serif group-hover:translate-x-4 transition-transform duration-300 text-background">
                                    <Link href="#">Sample Article Title That Is Very Engaging</Link>
                                </h3>
                            </div>
                            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                                <span className="w-16 h-16 rounded-full border border-background/20 flex items-center justify-center text-background">
                                    <ArrowUpRight className="h-6 w-6" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-16 flex justify-center">
                    <button className="px-12 py-4 border border-background/20 hover:bg-background hover:text-foreground transition-colors font-bold uppercase tracking-widest text-sm text-background">
                        Load All Stories
                    </button>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
