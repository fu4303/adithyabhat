import ArticlesList from '@/components/articles-list'
import Head from '@/components/header'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Work from '@/components/work'
import { BlogPosts } from '@/interfaces/blog'
import { WorkProps } from '@/interfaces/work'
import { fetchAPI } from '@/lib/datocms'
import { FEATURED_ARTICLES } from 'graphql/queries/posts'
import { RECENT_WORK } from 'graphql/queries/work'
import Container from '@/components/container'
import Footer from '@/components/footer'
import NextLink from '@/components/NextLink'
import Link from 'next/link'

export const Home = ({ recentWork, featuredArticles }): JSX.Element => (
  <div className="">
    <Head title="Adithya NR | A Full stack Designer based in Bengaluru, India." />
    <Navbar />
    <Hero />
    <Work data={recentWork} />
    <Container>
      <h1 className="mt-24 xl:mt-64 mb-6 text-2xl font-semibold">
        Featured articles
      </h1>
      <ArticlesList data={featuredArticles} />
      <NextLink href="/blog" text="Read more articles" />
      <h1 className="mt-24 xl:mt-32 mb-6 text-3xl font-semibold">
        Thanks for stopping by!
      </h1>
      <p className="poppins text-lg">
        Got a project in mind, a question, or something else?{' '}
        <br className="hidden lg:block" /> Get in touch with me{' '}
        <Link href="/contact">
          <a className="font-semibold hover:border-b-2 hover:border-blue-800">
            here
          </a>
        </Link>
      </p>
    </Container>
    <div className="mt-24 lg:mt-32">
      <Footer />
    </div>
  </div>
)

export async function getStaticProps() {
  const recentWork: WorkProps = await fetchAPI(RECENT_WORK)
  const featuredArticles: BlogPosts = await fetchAPI(FEATURED_ARTICLES)
  return {
    props: {
      recentWork,
      featuredArticles,
    },
  }
}

export default Home
