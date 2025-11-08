import React, { useState } from "react";
import data from "../../../public/data/media-kit.json";
import "./style.css";
import { FaInstagram, FaUsers, FaYoutube } from "react-icons/fa";

interface MediaKitProps {
  title: string;
}

const MediaKit = ({ title }: MediaKitProps) => {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const getLanguageFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");
    if (langParam === "pt" || langParam === "en") {
      setLang(langParam);
    }
  };

  React.useEffect(() => {
    getLanguageFromURL();

    document.title = title;
  }, []);

  return (
    <>
      <header className="hero">
        <div className="container">
          <div style={{ display: "flex" }}>
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            >
              {lang === "pt" ? "Read in ENGLISH 🇬🇧" : "Ler em PORTUGUÊS 🇧🇷"}
            </button>
          </div>

          <div className="card">
            <div>
              <span className="chip">{data.hero.chip[lang]}</span>
              <h1>{data.hero.title[lang]}</h1>
              <p>{data.hero.description[lang]}</p>
              <div className="cta">
                <a className="btn" href="#contato">
                  {data.hero.buttons.contact[lang]}
                </a>
                <a
                  className="btn alt"
                  href="https://instagram.com/canaleurocouple"
                  target="_blank"
                  rel="noopener"
                >
                  {data.hero.buttons.instagram[lang]}
                </a>
              </div>
              <div className="bar" style={{ marginTop: "1rem" }}>
                <span className="chip">{data.hero.tags.pt}</span>
                <span className="chip">{data.hero.tags.en}</span>
                <span className="chip">{data.hero.tags.season}</span>
                <span className="chip">{data.hero.tags.podcast}</span>
              </div>
            </div>
            <div className="media">
              <img
                src="/images/Profile.png"
                alt="Gabriel e Beatriz"
                aria-hidden="true"
              />
              <span className="badge">{data.hero.locationBadge[lang]}</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* SOBRE */}
        <section id="sobre">
          <div className="container">
            <h2 className="section-title">{data.about.sectionTitle[lang]}</h2>
            <div className="grid" style={{ gridTemplateColumns: "1.1fr .9fr" }}>
              <div
                className="card"
                dangerouslySetInnerHTML={{ __html: data.about.text[lang] }}
              />
              <div className="grid kpis">
                <div className="kpi">
                  <FaUsers
                    size={52}
                    color="var(--instagram)"
                    style={{ marginBottom: "1rem" }}
                  />
                  <div className="num">
                    {data.about.kpis.instagramFollowers.value}
                  </div>
                  <div className="note">
                    {data.about.kpis.instagramFollowers.label[lang]}
                  </div>
                </div>
                <div className="kpi">
                  <FaInstagram
                    size={52}
                    color="var(--instagram)"
                    style={{ marginBottom: "1rem" }}
                  />
                  <div className="num">{data.about.kpis.reelsViews.value}</div>
                  <div className="note">
                    {data.about.kpis.reelsViews.label[lang]}
                  </div>
                </div>
                <div className="kpi">
                  <FaYoutube
                    size={52}
                    color="var(--youtube)"
                    style={{ marginBottom: "1rem" }}
                  />
                  <div className="num">
                    {data.about.kpis.youtubeSubscribers.value}
                  </div>
                  <div className="note">
                    {data.about.kpis.youtubeSubscribers.label[lang]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CANAIS */}
        <section id="canais">
          <div className="container">
            <h2 className="section-title">
              {data.channels.sectionTitle[lang]}
            </h2>
            <div className="grid cards">
              <article
                className="card"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3>{data.channels.instagram.title[lang]}</h3>
                <p>{data.channels.instagram.description[lang]}</p>
                <p style={{ marginTop: "auto" }}>
                  <a
                    className="btn alt"
                    href="https://instagram.com/canaleurocouple"
                    target="_blank"
                    rel="noopener"
                  >
                    {data.channels.instagram.button[lang]}
                  </a>
                </p>
              </article>

              <article
                className="card"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3>{data.channels.youtube.title[lang]}</h3>
                <p>{data.channels.youtube.description[lang]}</p>
                <p style={{ marginTop: "auto" }}>
                  <a
                    className="btn alt"
                    href="https://youtube.com/eurocouple"
                    target="_blank"
                    rel="noopener"
                  >
                    {data.channels.youtube.button[lang]}
                  </a>
                </p>
              </article>

              <article className="card">
                <h3>{data.channels.podcast.title[lang]}</h3>
                <p>{data.channels.podcast.description[lang]}</p>
              </article>
            </div>
          </div>
        </section>

        {/* PÚBLICO */}
        <section id="publico">
          <div className="container">
            <h2 className="section-title">
              {data.audience.sectionTitle[lang]}
            </h2>
            <div className="list">
              <div className="li">
                <b>{data.audience.countries.label[lang]}</b>
                <span>{data.audience.countries.value[lang]}</span>
              </div>
              <div className="li">
                <b>{data.audience.age.label[lang]}</b>
                <span>{data.audience.age.value[lang]}</span>
              </div>
              <div className="li">
                <b>{data.audience.interests.label[lang]}</b>
                <span>{data.audience.interests.value[lang]}</span>
              </div>
              <div className="li">
                <b>{data.audience.engagement.label[lang]}</b>
                <span>{data.audience.engagement.value[lang]}</span>
              </div>
            </div>
          </div>
        </section>

        {/* OFERTAS */}
        <section id="ofertas">
          <div className="container">
            <h2 className="section-title">{data.offers.sectionTitle[lang]}</h2>

            <div className="grid cards">
              <div className="card">
                <h3>{data.offers.content.title[lang]}</h3>
                <p>{data.offers.content.description[lang]}</p>
              </div>
              <div className="card">
                <h3>{data.offers.campaigns.title[lang]}</h3>
                <p>{data.offers.campaigns.description[lang]}</p>
              </div>
              <div className="card">
                <h3>{data.offers.consulting.title[lang]}</h3>
                <p>{data.offers.consulting.description[lang]}</p>
              </div>
            </div>

            {/* COLABORAÇÕES */}
            <h2 className="section-title" style={{ marginTop: "2rem" }}>
              {data.offers.collaborations.sectionTitle[lang]}
            </h2>
            <div className="list">
              {data.offers.collaborations.items.map(
                ({ id, title, description }) => (
                  <div className="li" key={id}>
                    <b>{title[lang]}</b>
                    <span>{description[lang]}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* NATAL */}
        <section
          id="natal"
          style={{ background: "linear-gradient(180deg,var(--green-50),#fff)" }}
        >
          <div className="container">
            <h2 className="section-title">
              {data.christmas.sectionTitle[lang]}
            </h2>
            <div className="card">
              <p>{data.christmas.text[lang]}</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contato" className="footer">
        <div className="container">
          <div className="foot-card">
            <div>
              <h2
                className="section-title"
                style={{ color: "#fff", marginTop: 0 }}
              >
                {data.footer.title[lang]}
              </h2>
              <p style={{ opacity: ".9" }}>{data.footer.description[lang]}</p>
              <div className="cta">
                <a className="btn" href="mailto:parcerias@eurocouple.nl">
                  {data.footer.buttons.partnerships[lang]}
                </a>
                <a
                  className="btn alt"
                  href="mailto:contato@eurocouple.nl"
                  style={{ borderColor: "#fff", color: "#fff" }}
                >
                  {data.footer.buttons.contact[lang]}
                </a>
              </div>
            </div>
            <div>
              <div className="list">
                <div
                  className="li"
                  style={{
                    background: "#2f2f2f",
                    borderColor: "#3c3c3c",
                    color: "#fff",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  <b style={{ color: "var(--yellow)" }}>
                    {data.footer.info.adm.label[lang]}
                  </b>
                  <span>{data.footer.info.adm.value}</span>
                </div>
                <div
                  className="li"
                  style={{
                    background: "#2f2f2f",
                    borderColor: "#3c3c3c",
                    color: "#fff",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  <b style={{ color: "var(--yellow)" }}>
                    {data.footer.info.instagram.label}
                  </b>
                  <span>{data.footer.info.instagram.value}</span>
                </div>
                <div
                  className="li"
                  style={{
                    background: "#2f2f2f",
                    borderColor: "#3c3c3c",
                    color: "#fff",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  <b style={{ color: "var(--yellow)" }}>
                    {data.footer.info.youtube.label}
                  </b>
                  <span>{data.footer.info.youtube.value}</span>
                </div>
                <div
                  className="li"
                  style={{
                    background: "#2f2f2f",
                    borderColor: "#3c3c3c",
                    color: "#fff",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  <b style={{ color: "var(--yellow)" }}>
                    {data.footer.info.base.label[lang]}
                  </b>
                  <span>{data.footer.info.base.value[lang]}</span>
                </div>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", opacity: 0.7, marginTop: "1rem" }}>
            {data.footer.copyright}
          </p>
        </div>
      </footer>
    </>
  );
};

export default MediaKit;
