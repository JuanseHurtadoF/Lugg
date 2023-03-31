import Head from "next/head";
import styles from "@styles/pages/Home.module.scss";
import fonts from "@styles/base/fonts.module.scss";
import Button from "@components/button";
import Logo from "@components/logo";
import Icon from "@components/icon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Become a Lugger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Logo />
        <h1 className={fonts.title}>I&apos;d love to work at Lugg</h1>
        <div className={styles.content}>
          <p className={fonts.text}>Check out my components:</p>
          <Button text="Reviews" linkTo="/reviews" />
          <Button text="Revenue Calculator" linkTo="/become-a-lugger" />
        </div>
        <div className={styles.socials}>
          <Icon width={48} height={48} fill="#fff" as="github" />
          <Icon width={48} height={48} fill="#fff" as="linkedIn" />
        </div>
      </main>
    </>
  );
}
