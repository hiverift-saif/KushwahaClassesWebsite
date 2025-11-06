import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "./blogData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostProps {
  postId: number;
  onBack: () => void;
}

export function BlogPost({ postId, onBack }: BlogPostProps) {
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-900 mb-4">Blog post not found</h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = post.title;

  return (
    <article className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </button>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-orange-500 text-white text-sm rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <User className="size-4 text-orange-500" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-orange-500" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-orange-500" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-orange-100 to-blue-100">
          <ImageWithFallback
            src={`https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Share2 className="size-5 text-orange-500" />
              <span>Share this article:</span>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="size-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 p-8 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl">
          <h3 className="text-2xl text-gray-900 mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="size-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <h4 className="text-xl text-gray-900 mb-2">{post.author}</h4>
              <p className="text-gray-600">
                Expert educator at Kushwaha Classes with years of experience in guiding students toward academic excellence and career success.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl text-gray-900 mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map(relatedPost => (
                <div
                  key={relatedPost.id}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full mb-3">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" />
                      {relatedPost.readTime}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl md:text-3xl mb-4">
            Ready to Start Your Success Journey?
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Join Kushwaha Classes and get expert guidance for IIT-JEE, NEET, Commerce, and Academic excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+919990455657"
              className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <button
              onClick={onBack}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Read More Articles
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}