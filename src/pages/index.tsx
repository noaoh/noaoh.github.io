import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import {homePageMeta, HomepageSections} from '../data/data';
import {SectionType} from '../data/dataDef';
import HomepageHeader from '../components/Sections/HomepageHeader';

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <HomepageHeader sections={HomepageSections as unknown as SectionType[]} />
      <Hero />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Home;
