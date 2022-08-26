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
    title: "ZexDex Audit & KYC",
    Svg: require("@site/static/img/AuditKYC.svg").default,
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
    title: "ZexDex Exchange",
    Svg: require("@site/static/img/Exchange.svg").default,
    description: (
      <>
        ZexDex is a decentralized exchange. Users do not need to register and
        can transact directly with their wallets. Unlike centralized exchanges.
        ZexDex doesn't keep your coins while trading. Liquidity pools enable
        users to buy and sell crypto on decentralized exchanges and other DeFi
        platforms without the need for centralized market makers.
      </>
    ),
  },
  {
    title: "ZexDex Events",
    Svg: require("@site/static/img/Events.svg").default,
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
    title: "ZexDex Tools",
    Svg: require("@site/static/img/Tools.svg").default,
    description: (
      <>
        To enable the developer community to create applications more quickly
        and effectively, Zexdex-tools creates developer tooling for blockchain
        networks and protocols: Create a Zexdex Locker, a Multi-Sender, and a
        Token.
      </>
    ),
  },
  {
    title: "ZexDex Launchpad",
    Svg: require("@site/static/img/Launchpad.svg").default,
    description: (
      <>
        Participation in the top token pools' private sales. Selected projects
        for the growth of the cryptocurrency ecosystem are launched on the
        Zexdex Platform.
      </>
    ),
  },
  {
    title: "ZexDex Partners",
    Svg: require("@site/static/img/Partners.svg").default,
    description: (
      <>
        We will help you to connect with the best and most chosen Partners in
        the cryptocurrency world Marketing Partners, Audit & KYC Partners,
        Developer Partners, Dex partners, Cex partners.
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
      </div>
      <div className="text--justify padding-horiz--md">
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
