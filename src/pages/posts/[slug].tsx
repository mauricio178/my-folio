/* eslint-disable @next/next/link-passhref */
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"
import { RichText } from "prismic-dom"
import Link from 'next/link'

import { getPrismicClient } from "../../services/prismic"
import Head from 'next/head'
import styles from './post.module.scss'

interface PostProps {
    post: {
        slug: string
        title: string
        content: string
        updated: string
    }
}


export default function Post({ post }: PostProps) {
    return (
        <>
            <Head>
                <title> {post.title} | IgNew </title>
            </Head>

            <main className={styles.container}>
                <Link href="/posts">
                    <button>voltar</button>
                </Link>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updated}</time>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
            </main>


        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {

    const session = await getSession({ req })

    console.log(session)

    const { slug } = params

    const prismic = getPrismicClient(req)

    const response = await prismic.getByUID('post', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content),
        updated: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })

    }

    return {
        props: {
            post,

        }
    }
}