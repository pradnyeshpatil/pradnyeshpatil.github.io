import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Blogs, Tutorials, Guidance`}
      description="Blogs, Tutorials, Guidance by pradnyesh">
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
