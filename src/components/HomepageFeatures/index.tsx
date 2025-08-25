import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Diverse Races',
    icon: '👥',
    description: (
      <>
        Discover the <strong>Valdari</strong>, <strong>Ironborn</strong>, <strong>Shadowkin</strong>, and other peoples 
        that inhabit the realms, each with unique cultures and abilities.
      </>
    ),
    link: '/docs/races',
  },
  {
    title: 'Powerful Classes',
    icon: '⚔️',
    description: (
      <>
        Master the arts of the <strong>Wardkeeper</strong> or delve into forbidden knowledge 
        as a <strong>Lorekeeper</strong>. Choose your path to power.
      </>
    ),
    link: '/docs/classes',
  },
  {
    title: 'Mystical Creatures',
    icon: '🐉',
    description: (
      <>
        From benevolent <strong>Forest Spirits</strong> to ancient dragons, 
        encounter the creatures that roam the wild places of the world.
      </>
    ),
    link: '/docs/bestiary',
  },
  {
    title: 'Arcane Spells',
    icon: '✨',
    description: (
      <>
        Learn the secrets of <strong>Ward Magic</strong>, shadow weaving, 
        and other mystical arts that shape reality itself.
      </>
    ),
    link: '/docs/spells',
  },
  {
    title: 'Vast Realms',
    icon: '🏰',
    description: (
      <>
        Explore diverse regions from the <strong>Ironborn</strong> mountain holds 
        to the mysterious <strong>Shadowmere</strong> marshlands.
      </>
    ),
    link: '/docs/regions',
  },
  {
    title: 'Divine Pantheon',
    icon: '⭐',
    description: (
      <>
        Worship the gods of light, shadow, forge, and nature. 
        Learn of the divine beings that watch over the realms.
      </>
    ),
    link: '/docs/deities',
  },
];

function Feature({title, icon, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={link} className={styles.featureLink}>
            {title}
          </Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

declare global {
  interface Window {
    PagefindUI: any;
  }
}

function QuickSearch(): ReactNode {
  const [searchLoaded, setSearchLoaded] = useState(false);

  useEffect(() => {
    // Load Pagefind CSS
    const link = document.createElement('link');
    link.href = '/pagefind/pagefind-ui.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Pagefind JS
    const script = document.createElement('script');
    script.src = '/pagefind/pagefind-ui.js';
    script.onload = () => {
      if (window.PagefindUI) {
        new window.PagefindUI({ 
          element: "#homepage-search",
          showSubResults: true,
          showImages: false,
          excerptLength: 20
        });
        setSearchLoaded(true);
      }
    };
    script.onerror = () => {
      // Fallback if Pagefind isn't built yet
      setSearchLoaded(false);
    };
    document.head.appendChild(script);

    return () => {
      try {
        document.head.removeChild(link);
        document.head.removeChild(script);
      } catch (e) {
        // Elements may already be removed
      }
    };
  }, []);

  return (
    <div className="text--center margin-vert--lg">
      <Heading as="h2" className="margin-bottom--md">
        Quick Search
      </Heading>
      <div className={styles.searchContainer}>
        <div id="homepage-search">
          {!searchLoaded && (
            <p className="text--muted">
              Search will be available after the site is built. 
              Visit the <Link to="/search">Search page</Link> for full search functionality.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">Explore the Realms</Heading>
            <p className="lead">
              Dive deep into the lore, creatures, and magic that shape these mystical lands.
            </p>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={styles.searchSection}>
        <div className="container">
          <QuickSearch />
        </div>
      </section>
    </>
  );
}
