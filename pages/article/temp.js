import Head from "next/head";
import styles from "../../styles/Article.module.css";
import Image from 'next/image';

export default function Article() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Article Title</title>
            </Head>
            <article>
                <header>
                    <div className={styles.containerMd}>
                        <div className={styles.author}>
                            <Image src="/images/articleTemplate.jpg" alt='...' width={30} height={30} layout='fixed'></Image>
                            <p>Rocky Balboa</p>
                            <p>31 march 2077</p>
                        </div>
                        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                    </div>
                    <Image src="/images/articleTemplate.jpg" alt='...' width={700} height={400}></Image>
                </header>
                <main className={styles.containerMd}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates eligendi nam non molestiae deserunt, suscipit numquam nihil ipsam facere rem nulla quaerat vero libero tempore modi reprehenderit fuga blanditiis?
                        <br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates eligendi nam non molestiae deserunt, suscipit numquam nihil ipsam facere rem nulla quaerat vero libero tempore modi reprehenderit fuga blanditiis?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptates eligendi nam non molestiae deserunt, suscipit numquam nihil ipsam facere rem nulla quaerat vero libero tempore modi reprehenderit fuga blanditiis?
                    </p>
                </main>
            </article>
        </div>
    )
}