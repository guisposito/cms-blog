import Head from 'next/head'
import {PostCard , Categories, PostWidget} from "../components/Index";
import { Header } from '../components/Index';

const posts = [
  {title: 'React Testing', excerpt: 'Learn React Testing'},
  {title: 'React Testing with Tailwind', excerpt: 'Learn React Testing with Tailwind'},
];

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog 2</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header>
        
      </Header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) =>(
            <div className="">
              <PostCard  post={post} key={post.title}/>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
      </div>
    </main>
  )
}
