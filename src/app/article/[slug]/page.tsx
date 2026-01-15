import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

// Mock data fetching based on slug
const getArticle = (slug: string) => {
    // In a real app, fetch from CMS or DB
    
    if (slug === "the-man-who-cant-be-moved") {
        return {
            title: "ရည်းစားဟောင်းကို မမေ့နိုင်သူလေး : ပြည့်ဖြိုးမောင် (UCSY ဒဏ္ဍာရီ)",
            excerpt: "မင်းကိုစတွေ့ခဲ့တဲ့ နေရာလေးဆီ ပြန်သွားမယ်... လွယ်အိတ်ကလေးနဲ့ စောင့်နေမယ်... ငါဘယ်မှမသွားဘူး... သီချင်းထဲကလိုပဲ ခိုင်မာတဲ့ သံန္နိဌာန်နဲ့ ကျောင်းသားတစ်ယောက်အကြောင်း။",
            content: `
                <p class="lead">UCSY ဘွဲ့နှင်းသဘင်ခန်းမရှေ့ကို မနက်ခင်းစောစော ဖြတ်သွားဖူးရင် သူ့ကို မြင်ဖူးကြမှာပါ။ လက်ပိုက်ပြီး မိုးကုတ်စက်ဝိုင်းဆီ မျှော်ငေးနေတဲ့ သူ့ပုံစံက နောက်ခံက တိုင်လုံးကြီးတွေလိုပဲ ခံ့ညား တည်ငြိမ်နေပါတယ်။</p>
                
                <p>သူ့ကို "The Man Who Can't Be Moved" လို့ တင်စားခေါ်ဝေါ်ကြပါတယ်။ ခေါင်းမာလွန်းလို့တော့ မဟုတ်ပါဘူး။ သူ့နေရာလေးအပေါ်၊ ပြီးတော့ သူ့တက္ကသိုလ်အပေါ် ထားရှိတဲ့ သံယောဇဉ်က ခိုင်မြဲလွန်းလို့ပါ။ သူကတော့ ပြည့်ဖြိုးမောင် ပါ။ ကျောင်းဆောင်ကြီးတွေလိုပဲ ကျောင်းရဲ့ အထင်ကရ ပြယုဂ်တစ်ခု ဖြစ်နေပါပြီ။</p>
                
                <h2><p className="text-lg font-bold">ဇွဲလုံ့လရဲ့ ပြယုဂ်</p></h2>
                <p>"ငါ ဘယ်မှမသွားဘူး" လို့ သူက နှုတ်ကမပြောပေမယ့် သူ့ရဲ့ တည်ရှိမှုက သက်သေပြနေပါတယ်။ နည်းပညာတွေ၊ Deadline တွေ၊ Error တွေနဲ့ ရှုပ်ထွေးနေတဲ့ တက္ကသိုလ်လောကထဲမှာ သူက ငြိမ်းချမ်းမှုတစ်ခုပါပဲ။</p>
                
                <blockquote className="text-dark dark:text-light">
                <p>တချို့က ကမ္ဘာကြီး ရွေ့လျားသွားမှာကို စောင့်နေကြတယ်။ တချို့ကျတော့ ငြိမ်သက်နေခြင်းအားဖြင့် ကမ္ဘာကြီးကို ရွေ့လျားစေတယ်။</p></blockquote>
                
                <p>ကျောင်းသားတွေ မနက် ၈ နာရီအတန်းကို အပြေးအလွှား သွားနေကြချိန်၊ Algorithm တွေ Data Structure တွေနဲ့ ခေါင်းရှုပ်နေကြချိန်မှာ သူ့ကို မြင်လိုက်ရတာက စိတ်သက်သာရာ ရစေပါတယ်။ ဇွဲရှိဖို့ လိုအပ်ကြောင်း သတိပေးနေသလိုပါပဲ။</p>
                
                <h2><p className="text-lg font-bold">ဒဏ္ဍာရီတစ်ခု ဖြစ်လာခြင်း</p></h2>
                <p>သူဘာလို့ အဲဒီမှာ ရပ်နေရတာလဲဆိုတာနဲ့ ပတ်သက်ပြီး ကောလာဟလတွေ အမျိုးမျိုး ရှိကြပါတယ်။ ပျောက်ဆုံးသွားတဲ့ အချစ်ကို စောင့်မျှော်နေတာလား? Server Room က လျှို့ဝှက်ချက်တွေကို စောင့်ကြပ်နေတာလား? ဒါမှမဟုတ် ရှုခင်းကို ငေးမောနေတာလား? ဒီလို လျှို့ဝှက်ချက်တွေကပဲ သူ့ကို ပိုပြီး စိတ်ဝင်စားစရာ ကောင်းစေပါတယ်။</p>
                
                <p>ဒါကြောင့် နောက်တစ်ခါ ဖြတ်သွားရင် ဒီဒဏ္ဍာရီလာ ကျောင်းသားကို နှုတ်ဆက်လိုက်ကြပါဦး။ ရာသီတွေ ဘယ်လိုပြောင်းပြောင်း မပြောင်းလဲဘဲ တည်ရှိနေတဲ့ "The Man Who Can't Be Moved" ပေါ့။</p>
            `,
            category: "Campus Life",
            author: "The Script (Fan)",
            authorRole: "Campus Chronicler",
            date: "Oct 24, 2023",
            readTime: "3 min read",
            image: "/images/phout-phaw.jpg",
        };
    }

    // Default Article (Fallback)
    return {
        title: "The Future of AI in Higher Education: UCSY's New Initiative",
        excerpt: "Exploring how artificial intelligence is reshaping the landscape of learning and research at our university.",
        content: `
            <p class="lead">Artificial Intelligence is no longer just a buzzword; it is a transformative force that is reshaping every sector of society, including higher education. At the University of Computer Studies, Yangon (UCSY), we are at the forefront of this revolution.</p>
            
            <p>The university has recently launched a comprehensive AI initiative aimed at integrating machine learning and data science into the core curriculum. This isn't just about teaching students how to code AI algorithms; it's about understanding the ethical implications, the societal impact, and the practical applications of these technologies.</p>
            
            <h2>A New Curriculum for a New Era</h2>
            <p>The new curriculum includes specialized tracks in Natural Language Processing, Computer Vision, and Robotics. Students will have access to state-of-the-art high-performance computing clusters to train their models. "We want our students to be creators of technology, not just consumers," says Dr. Thida San, the head of the AI department.</p>
            
            <blockquote>"The goal is to foster an environment of innovation where students can experiment, fail, and ultimately succeed in building solutions for real-world problems."</blockquote>
            
            <p>One of the key projects being developed is an AI-powered tutoring system that adapts to the learning pace of individual students. This system uses reinforcement learning to identify areas where a student is struggling and provides targeted exercises to help them improve.</p>
            
            <h2>Research and Collaboration</h2>
            <p>Beyond the classroom, UCSY is strengthening its ties with industry partners. Collaborations with local tech startups and international tech giants are providing students with internship opportunities and exposure to real-world datasets. These partnerships are crucial for bridging the gap between academic theory and industrial practice.</p>
            
            <p>As we look to the future, the integration of AI in education promises to make learning more personalized, accessible, and effective. UCSY is proud to be leading the charge in Myanmar.</p>
        `,
        category: "Academics",
        author: "Dr. Thida San",
        authorRole: "Head of AI Department",
        date: "Oct 24, 2023",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop",
    };
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-1 pb-16">
        <article className="container mx-auto px-4 sm:px-8 max-w-4xl">
            {/* Back Link */}
            <div className="py-8">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </div>

            {/* Article Header */}
            <header className="space-y-6 mb-12 text-center">
                <Badge variant="secondary" className="mb-4">{article.category}</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight text-foreground">
                    {article.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {article.excerpt}
                </p>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground pt-6 border-t border-border/50 mt-8 w-fit mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-foreground">
                            {article.author.charAt(0)}
                        </div>
                        <div className="text-left">
                            <p className="font-medium text-foreground">{article.author}</p>
                            <p className="text-xs">{article.authorRole}</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-[1px] h-8 bg-border"></div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg mb-12">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none font-serif
                prose-headings:font-bold prose-headings:tracking-tight
                prose-p:leading-relaxed prose-p:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:italic
                first-letter:float-left first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:mt-[-10px] first-letter:text-foreground
            ">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Share & Tags */}
            <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                <div className="flex gap-2">
                    <Badge variant="outline">AI</Badge>
                    <Badge variant="outline">Education</Badge>
                    <Badge variant="outline">Research</Badge>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <Share2 className="h-4 w-4" />
                    Share Article
                </button>
            </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
