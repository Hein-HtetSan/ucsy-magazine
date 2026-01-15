import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

// Mock data fetching based on slug
const getArticle = (slug: string) => {
    // In a real app, fetch from CMS or DB
    // Just returning static data for demo
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
