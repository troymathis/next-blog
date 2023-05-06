import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";
import Script from "next/script";

export default function FirstPost() {
    const YourComponent = () => {
        <Image
            src="/images/headshot.jpeg"
            height={144}
            width={144}
            alt="Troy!" />;
    };
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log('script loaded correctly, window.FB has been populated')} />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}
