import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useEffect } from 'react';

declare global {
  interface Window {
    PagefindUI: any;
  }
}

export default function SearchPage(): ReactNode {
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
          element: "#search",
          showSubResults: true,
          showImages: false,
          excerptLength: 30
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout
      title="Search the Codex"
      description="Search through all the lore, creatures, spells, and regions in the Codex of Realms">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1" className="margin-bottom--lg">
              Search the Codex
            </Heading>
            <p className="margin-bottom--lg">
              Find information about races, classes, spells, creatures, regions, deities, equipment, and house rules.
            </p>
            <div id="search"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}