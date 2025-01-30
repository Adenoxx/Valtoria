import Head from "next/head";
import Image from "next/image";
import "@/styles/home.css";
import { Nav } from "rsuite";
import GlobalIcon from "@rsuite/icons/Global";
import StarIcon from "@rsuite/icons/Star";
import SortUpIcon from "@rsuite/icons/SortUp";
import TrendIcon from "@rsuite/icons/Trend";
import GridIcon from "@rsuite/icons/Grid";
import CopyIcon from "@rsuite/icons/Copy";
import ShieldIcon from "@rsuite/icons/Shield";
import { AvatarGroup, Avatar } from "rsuite";

export default function Home() {
  const users = [
    { avatar: "https://i.pravatar.cc/150?u=2", name: "Tom Doe" },
    { avatar: "https://i.pravatar.cc/150?u=6", name: "Mike Doe" },
    { avatar: "https://i.pravatar.cc/150?u=7", name: "Jane Doe" },
  ];
  return (
    <>
      <Head>
        <title>Valtoria</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="header">
        <div className="brand">
          <h1 className="brand-title">Aston Capital</h1>
          <Nav style={{fontWeight: 500}}>
            <Nav.Item href="#features">Features</Nav.Item>
            <Nav.Item href="#values">Values</Nav.Item>
            <Nav.Item href="#numbers">Numbers</Nav.Item>
            <Nav.Item>FAQ</Nav.Item>
          </Nav>
        </div>
        <div className="btns">
          <button className="login">Login</button>
          <button className="signUp">Sign Up</button>
        </div>
      </div>

      <div className="hero-section">
        <div>
          <p className="act">Try it now!</p>
          <h2 className="hero-title">
            Change the way
            <br /> you use your
            <br />
            <i>money</i>
          </h2>
          <p className="hero-text">
            From your everyday spending, to planning for your future <br /> with
            savings and investments, Aston capital helps you get <br /> more for
            your money
          </p>
          <div>
            <button className="hero-btn">Get Started Now</button>
          </div>
        </div>
        <div className="hero-cards">
          <div className="card card--1">
            <Image
              src="/img/card1.png"
              alt=""
              width={270}
              height={260}
              className="card1"
            />
          </div>
          <div className="card card--2">
            <div className="card2-items">
              <p style={{ marginLeft: 150, fontSize: "60px" }}>56+</p>
              <p style={{ fontSize: "24px", marginLeft: 30 }}>Currencies</p>
            </div>
            <div>
              <GlobalIcon
                style={{ fontSize: "64px", marginLeft: 180, fontWeight: 200 }}
              />
            </div>
          </div>
          <div className="card card--3">
            <StarIcon style={{ fontSize: "44px", marginTop: 10 }} />
            <StarIcon style={{ fontSize: "44px", marginTop: 10 }} />
            <div
              className="card3-items
            "
            >
              <p style={{ fontSize: "24px", fontWeight: 500, marginLeft: 100 }}>
                Users Active
              </p>
              <AvatarGroup stack style={{ marginLeft: 40, marginTop: 50 }}>
                {users.map((user) => (
                  <Avatar
                    bordered
                    circle
                    key={user.name}
                    src={user.avatar}
                    size="md"
                  />
                ))}
                <Avatar
                  bordered
                  circle
                  style={{ background: "#48483e" }}
                ></Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="card card--4">
            <div className="card4-items">
              <p
                style={{
                  fontSize: "36px",
                  letterSpacing: "",
                  color: "#fff",
                  lineHeight: 1.2,
                }}
              >
                $196,000
              </p>
              <SortUpIcon style={{ stroke: "#fff", fontSize: "32px" }} />
            </div>
            <TrendIcon
              style={{
                fontSize: "48px",
                color: "#fff",
                marginTop: 50,
                width: "90px",
              }}
            />
            <p
              style={{
                color: "#fff",
                fontSize: "24px",
                marginTop: 50,
                marginLeft: 150,
              }}
            >
              Savings
            </p>
          </div>
        </div>
      </div>
      <section id="features">
        <div className="brand-features">
          <h3 className="title">FEATURES</h3>
          <h2 className="features-text">
            One app for all your <br /> money things
          </h2>
          <p className="features-text2">
            Remove all the friction that stands in the way of your money <br />{" "}
            goals
          </p>
        </div>
        <div className="features-feature">
          <div className="feature-1">
            <h3>Grow savings faster</h3>
            <p
              style={{
                fontSize: "30px",
                color: "#FFFFE2",
                marginLeft: "128px",
                fontWeight: 500,
              }}
            >
              $12,000
            </p>
            <TrendIcon
              style={{ fontSize: "200px", color: "#FFFFE2", marginTop: "64px" }}
            />
          </div>
          <div className="feature-2">
            <h3>Send across the globe </h3>
            <div className="feat2-ornaments">
              <Image src="/img/dollars2.png" alt="" height={250} width={150} />
              <GlobalIcon
                style={{
                  fontSize: "100px",
                  color: "#161612",
                  alignSelf: "center",
                }}
              />
              <Image
                src="/img/countries.png"
                alt=""
                height={50}
                width={110}
                style={{ alignSelf: "flex-end", marginRight: 100 }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="values">
        <div className="values-txt">
          <div className="values-intro">
            <h3>VALUES</h3>
            <h2>Make your spend, Well-spent</h2>
          </div>
          <div>
            <p>
              Manages a diversified group of specialized private credit brands
              with efficient tech-enabled processes
            </p>
          </div>
        </div>
        <div className="brand-vals">
          <div className="val-1">
            <GridIcon style={{ fontSize: "52px", color: "" }} />
            <div className="val1-txt">
              <h5 style={{ fontWeight: 600 }}>Transparency</h5>
              <p>
                A departure from the industry norm of ambiguity, Montfort, as a
                public and finest company
              </p>
            </div>
            <button className="arr-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
          <div className="val-2">
            <CopyIcon style={{ fontSize: "52px" }} />
            <div className="val2-txt">
              <h5 style={{ fontWeight: 600 }}>Creative Expansion</h5>
              <p>
                Ascone proprietary fintech platform helps our subsidiaries
                locate and manage investments.
              </p>
            </div>
            <button className="arr-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
          <div className="val-3">
            <ShieldIcon style={{ fontSize: "52px" }} />
            <div className="val3-txt">
              <h5 style={{ fontWeight: 600 }}>Private Credit Investments</h5>
              <p>
                We provide access to unique private credit investments; a rare
                but valuable part of a sound investment portfolio.
              </p>
            </div>
            <button className="arr-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section id="numbers">
        <div className="numbers-container">
          <div className="numbers-item1">
        <div>
          <p style={{ fontSize: "120px", lineHeight: 1.2, letterSpacing: '-1.2px'}}>$14B</p>
          <p style={{fontSize:"24px", fontWeight: 500, lineHeight: 1.25}}>Funds and syndicates</p>
        </div>
        <div>
          <p style={{ fontSize: "120px", lineHeight: 1.2, letterSpacing: '-1.2px' }}>23k+</p>
          <p  style={{fontSize:"24px", fontWeight: 500, lineHeight: 1.25}}>Raised by active startups</p>
        </div>
        </div>
        <div className="numbers-item3">
          <h3 style={{textTransform: 'uppercase', fontWeight: 400}}>Numbers</h3>
          <h2 style={{fontSize: '40px', fontWeight: 500, lineHeight: 1.2}}>Market and build the solutions</h2>
        </div>
        </div>
      </section>
      <section id="faq">
        <div className="faq-container">
          <div>
          <h5>Faq</h5>
          <p>Frequently asked questions</p>
          </div>
          <div>
          </div>
        </div>
      </section>
      <div className="cta-container">
        <div className="cta">
        <div className="cta-txt">
          <h3>Change the way you use your <i>money</i></h3>
          <p>Join over million people who choose Aston Capital for fast and secure future banking.</p>
          <button>Get Started Now</button>
        </div>
        <div className="cta-ornaments">
          <div>
          <StarIcon style={{ fontSize: "44px" }} />
          <StarIcon style={{ fontSize: "44px" }} />
          </div>
          <Image src="/img/dollars.jpg" alt="dollar notes" height={64} width={64} />
        </div>
      </div>
      </div>
    </>
  );
}
