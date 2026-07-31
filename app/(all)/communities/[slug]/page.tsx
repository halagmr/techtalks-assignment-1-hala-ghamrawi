const communitiespage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    return (
        <div>
            <h1>{slug} Community</h1>
            <p>This is the community page for {slug}.</p>
        </div>

    )
}

export default communitiespage;