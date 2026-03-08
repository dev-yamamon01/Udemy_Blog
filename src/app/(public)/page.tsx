import { getPosts, searchPosts } from "@/lib/post";
import PostCard from "@/components/post/PostCard";
import { Post } from "@/types/post";

type SearchParams = {
    search?: string
}

export default async function PostsPage(
    { searchParams }: { searchParams: Promise<SearchParams> }) {
    const resolvedSearchParams = await searchParams
    const quary = resolvedSearchParams.search || ''

    const posts = quary
        ? await searchPosts(quary) as Post[]
        : await getPosts() as Post[]

    // const posts = await getPosts() as Post[];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post: Post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}