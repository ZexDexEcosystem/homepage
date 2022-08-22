import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "ZexDex Exchange",
    Svg: require("@site/static/img/Exchange.png").default,
    description: (
      <>
        ZexDex is a decentralized exchange. Users do not need to register and
        can transact directly with their wallets. Unlike centralized exchanges.
        ZexDex doesn't keep your coins while trading.
      </>
    ),
  },
  {
    title: "ZexDex Launchpad",
    Svg: require("@site/static/img/Launchpad.png").default,
    description: (
      <>
        Participation in private sales in the best token pools. Zexdex Platform
        is a Launchpad where selected projects for the development of the crypto
        ecosystem.
      </>
    ),
  },
  {
    title: "ZexDex Events",
    Svg: require("@site/static/img/Events.png").default,
    description: (
      <>
        Many crypto companies distribute free coins to their communities to
        increase their project’s visibility, increase the circulating supply and
        stimulate trade. These free distributions are commonly known as
        airdrops. We allow the owner of the project to post the Airdrop event on
        the zexdex event, Our Platform will help the project be better
        communicated, and reach more users.
      </>
    ),
  },
  {
    title: "ZexDex Audit & KYC",
    Svg: require("@site/static/img/AuditKYC.png").default,
    description: (
      <>
        A smart contract security audit examines and comments on a project's
        smart contract code. Typically, these contracts are written in Solidity
        programming language and provided via GitHub. Security audits are
        particularly valuable for Defi projects that expect to handle blockchain
        transactions worth millions of dollars or a huge amount of players.
      </>
    ),
  },
  {
    title: "ZexDex Tools",
    Svg: require("@site/static/img/Tools.png").default,
    description: (
      <>
        Create Token.
        Multi-Sender.
        ZexDexLocker.
      </>
    ),
  },
  {
    title: "ZexDex Partners",
    Svg: require("@site/static/img/Partners.png").default,
    description: (
      <>
        Marketing Partner.
        Audit & KYC Partner.
        Developer Partner.
        Dex Partner.
        Cex Partner.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
