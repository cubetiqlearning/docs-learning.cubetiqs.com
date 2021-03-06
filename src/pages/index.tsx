import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/theme/GlobalStyles";
import theme from "../components/theme/default";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            {siteConfig.title} <Translate>Tutorial - 5min</Translate> ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout title={`Home`} description="CUBETIQ Learning are cool">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </ThemeProvider>
  );
}
