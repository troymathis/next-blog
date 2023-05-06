// dynamically render routes that depend on external data (getStaticProps)
// getStaticPaths retrieve all possible values for the id
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    // retrieves post data and returns it as a prop
    return {
        props: {
            postData,
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData }) {
    return (<Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
    </Layout>
    );
}