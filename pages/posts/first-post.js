import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function FirstPost() {
    const YourComponent = () => {
        <Image
            src="/images/headshot.jpeg"
            height={144}
            width={144}
            alt="Troy!" />;
    };
    return (
        <>
        <Head>
            <title>First Post</title>
        </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}
