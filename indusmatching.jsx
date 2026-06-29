import { useState } from "react";

const COLORS = {
  steel: "#1C2B3A",
  steelLight: "#2A3F54",
  orange: "#E8621A",
  orangeLight: "#F07A35",
  cream: "#F5F0E8",
  white: "#FFFFFF",
  gray: "#6B7A8D",
  grayLight: "#E8EDF2",
  success: "#2D7D46",
};

const styles = {
  app: {
    fontFamily: "'Inter', system-ui, sans-serif",
    background: COLORS.cream,
    minHeight: "100vh",
    color: COLORS.steel,
  },
  nav: {
    background: COLORS.steel,
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoIcon: {
    width: "36px",
    height: "36px",
    background: COLORS.orange,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "900",
    color: COLORS.white,
    letterSpacing: "-1px",
  },
  logoText: {
    color: COLORS.white,
    fontWeight: "800",
    fontSize: "18px",
    letterSpacing: "-0.3px",
  },
  logoSub: {
    color: COLORS.orange,
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  navTabs: {
    display: "flex",
    gap: "4px",
  },
  navTab: {
    padding: "8px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.2s",
  },
  hero: {
    background: `linear-gradient(135deg, ${COLORS.steel} 0%, ${COLORS.steelLight} 60%, #1A3A2A 100%)`,
    padding: "80px 32px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  heroPattern: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    opacity: 0.05,
    backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
    backgroundSize: "20px 20px",
  },
  heroEyebrow: {
    display: "inline-block",
    background: COLORS.orange,
    color: COLORS.white,
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "3px",
    textTransform: "uppercase",
    padding: "6px 16px",
    borderRadius: "20px",
    marginBottom: "24px",
  },
  heroTitle: {
    color: COLORS.white,
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "20px",
    letterSpacing: "-1px",
    position: "relative",
  },
  heroAccent: {
    color: COLORS.orange,
  },
  heroSub: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "18px",
    marginBottom: "40px",
    maxWidth: "560px",
    margin: "0 auto 40px",
    lineHeight: "1.6",
  },
  heroBtns: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "relative",
  },
  btnPrimary: {
    background: COLORS.orange,
    color: COLORS.white,
    border: "none",
    padding: "16px 32px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  btnOutline: {
    background: "transparent",
    color: COLORS.white,
    border: `2px solid rgba(255,255,255,0.4)`,
    padding: "16px 32px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "48px",
    padding: "32px",
    background: COLORS.white,
    borderBottom: `3px solid ${COLORS.orange}`,
    flexWrap: "wrap",
  },
  statItem: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "36px",
    fontWeight: "900",
    color: COLORS.orange,
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "13px",
    color: COLORS.gray,
    fontWeight: "600",
    marginTop: "4px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  section: {
    padding: "64px 32px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "900",
    marginBottom: "8px",
    letterSpacing: "-0.5px",
  },
  sectionSub: {
    color: COLORS.gray,
    fontSize: "16px",
    marginBottom: "40px",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  },
  card: {
    background: COLORS.white,
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    border: `1px solid ${COLORS.grayLight}`,
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${COLORS.steel}, ${COLORS.orange})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.white,
    fontWeight: "800",
    fontSize: "18px",
    flexShrink: 0,
  },
  candidateName: {
    fontWeight: "700",
    fontSize: "16px",
    marginBottom: "2px",
  },
  candidateRole: {
    color: COLORS.orange,
    fontSize: "13px",
    fontWeight: "600",
  },
  tag: {
    display: "inline-block",
    background: COLORS.grayLight,
    color: COLORS.steel,
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "20px",
    margin: "3px",
  },
  tagOrange: {
    background: "#FFF0E8",
    color: COLORS.orange,
  },
  tagGreen: {
    background: "#E8F5EE",
    color: COLORS.success,
  },
  dispo: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "12px",
    fontSize: "13px",
    color: COLORS.success,
    fontWeight: "600",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: COLORS.success,
  },
  formCard: {
    background: COLORS.white,
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  formTitle: {
    fontSize: "24px",
    fontWeight: "800",
    marginBottom: "8px",
  },
  formSub: {
    color: COLORS.gray,
    marginBottom: "28px",
    fontSize: "15px",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontWeight: "600",
    fontSize: "14px",
    marginBottom: "8px",
    color: COLORS.steel,
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: `1.5px solid ${COLORS.grayLight}`,
    fontSize: "15px",
    outline: "none",
    transition: "border 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  select: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: `1.5px solid ${COLORS.grayLight}`,
    fontSize: "15px",
    outline: "none",
    background: COLORS.white,
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  submitBtn: {
    width: "100%",
    background: COLORS.orange,
    color: COLORS.white,
    border: "none",
    padding: "16px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "8px",
  },
  successBox: {
    background: "#E8F5EE",
    border: `1.5px solid ${COLORS.success}`,
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    color: COLORS.success,
    fontWeight: "700",
    fontSize: "16px",
  },
  searchBar: {
    display: "flex",
    gap: "12px",
    marginBottom: "32px",
    flexWrap: "wrap",
  },
  searchInput: {
    flex: 1,
    padding: "14px 18px",
    borderRadius: "8px",
    border: `1.5px solid ${COLORS.grayLight}`,
    fontSize: "15px",
    outline: "none",
    fontFamily: "inherit",
    minWidth: "200px",
  },
  searchBtn: {
    background: COLORS.steel,
    color: COLORS.white,
    border: "none",
    padding: "14px 28px",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "15px",
    cursor: "pointer",
  },
  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  pricingCard: {
    background: COLORS.white,
    borderRadius: "16px",
    padding: "36px 28px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    border: `1px solid ${COLORS.grayLight}`,
    textAlign: "center",
  },
  pricingCardFeatured: {
    background: COLORS.steel,
    border: `2px solid ${COLORS.orange}`,
    color: COLORS.white,
  },
  pricingPrice: {
    fontSize: "48px",
    fontWeight: "900",
    color: COLORS.orange,
    lineHeight: "1",
  },
  pricingPeriod: {
    fontSize: "14px",
    color: COLORS.gray,
    marginBottom: "24px",
  },
  pricingFeature: {
    fontSize: "14px",
    padding: "8px 0",
    borderBottom: `1px solid ${COLORS.grayLight}`,
    textAlign: "left",
  },
  footer: {
    background: COLORS.steel,
    color: "rgba(255,255,255,0.6)",
    textAlign: "center",
    padding: "32px",
    fontSize: "14px",
  },
};

const CANDIDATS = [
  { initiales: "MK", nom: "Mohamed K.", poste: "Soudeur TIG/MIG", exp: "7 ans", lieu: "Vénissieux", skills: ["Soudure TIG", "MIG/MAG", "Inox", "Aluminium"], dispo: true },
  { initiales: "SB", nom: "Sophie B.", poste: "Technicienne Qualité", exp: "5 ans", lieu: "Saint-Priest", skills: ["ISO 9001", "Contrôle CMM", "8D", "AMDEC"], dispo: true },
  { initiales: "JL", nom: "Jean-Pierre L.", poste: "Conducteur de Ligne", exp: "12 ans", lieu: "Meyzieu", skills: ["Conduite ligne", "Maintenance 1er niveau", "5S", "HACCP"], dispo: false },
  { initiales: "AR", nom: "Amina R.", poste: "Opératrice CNC", exp: "4 ans", lieu: "Décines", skills: ["Tournage CNC", "Fraisage", "Lecture plans", "Contrôle"], dispo: true },
  { initiales: "TD", nom: "Thomas D.", poste: "Électrotechnicien", exp: "8 ans", lieu: "Bron", skills: ["Électricité industrielle", "Variateurs", "Automates", "HTA/HTB"], dispo: true },
  { initiales: "CL", nom: "Claire L.", poste: "Responsable Logistique", exp: "10 ans", lieu: "Corbas", skills: ["WMS", "Gestion flux", "Supply chain", "Lean"], dispo: false },
];

export default function IndusMatching() {
  const [tab, setTab] = useState("accueil");
  const [formData, setFormData] = useState({ nom: "", prenom: "", poste: "", exp: "", lieu: "", email: "", tel: "", skills: "" });
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState("");
  const [filterLieu, setFilterLieu] = useState("");

  const handleSubmit = () => {
    if (formData.nom && formData.prenom && formData.poste && formData.email) {
      setSubmitted(true);
    }
  };

  const filteredCandidats = CANDIDATS.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.nom.toLowerCase().includes(q) || c.poste.toLowerCase().includes(q) || c.skills.some(s => s.toLowerCase().includes(q));
    const matchLieu = !filterLieu || c.lieu === filterLieu;
    return matchSearch && matchLieu;
  });

  const lieux = [...new Set(CANDIDATS.map(c => c.lieu))];

  return (
    <div style={styles.app}>
      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>IM</div>
          <div>
            <div style={styles.logoText}>IndusMatching</div>
            <div style={styles.logoSub}>Bassin Lyonnais</div>
          </div>
        </div>
        <div style={styles.navTabs}>
          {[
            { id: "accueil", label: "Accueil" },
            { id: "candidats", label: "Candidats" },
            { id: "deposer", label: "Déposer mon CV" },
            { id: "entreprises", label: "Entreprises" },
          ].map(t => (
            <button
              key={t.id}
              style={{
                ...styles.navTab,
                background: tab === t.id ? COLORS.orange : "transparent",
                color: tab === t.id ? COLORS.white : "rgba(255,255,255,0.7)",
              }}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ACCUEIL */}
      {tab === "accueil" && (
        <>
          <div style={styles.hero}>
            <div style={styles.heroPattern} />
            <div style={{ position: "relative" }}>
              <div style={styles.heroEyebrow}>🏭 Plateforme #1 Industrie Lyon</div>
              <h1 style={styles.heroTitle}>
                Les meilleurs profils<br />
                industriels du <span style={styles.heroAccent}>bassin lyonnais</span>
              </h1>
              <p style={styles.heroSub}>
                Opérateurs, techniciens, soudeurs, électrotechniciens — tous les talents de l'industrie lyonnaise en un seul endroit.
              </p>
              <div style={styles.heroBtns}>
                <button style={styles.btnPrimary} onClick={() => setTab("deposer")}>
                  Déposer mon CV gratuitement
                </button>
                <button style={styles.btnOutline} onClick={() => setTab("entreprises")}>
                  Je suis une entreprise →
                </button>
              </div>
            </div>
          </div>

          <div style={styles.stats}>
            {[
              { n: "25 000", l: "Profils visés" },
              { n: "120+", l: "Entreprises partenaires" },
              { n: "47", l: "Métiers représentés" },
              { n: "Lyon", l: "Bassin industriel" },
            ].map((s, i) => (
              <div key={i} style={styles.statItem}>
                <div style={styles.statNumber}>{s.n}</div>
                <div style={styles.statLabel}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{ ...styles.section }}>
            <div style={styles.sectionTitle}>Comment ça marche ?</div>
            <div style={styles.sectionSub}>Simple, rapide, efficace</div>
            <div style={styles.grid2}>
              {[
                { emoji: "📋", titre: "Candidat : déposez votre profil", desc: "Remplissez votre fiche en 3 minutes. Vos compétences, disponibilité et localisation visibles par les recruteurs." },
                { emoji: "🔍", titre: "Entreprise : sourcez instantanément", desc: "Accédez à toute la base de profils industrie Lyon. Filtrez par compétence, secteur, disponibilité, zone géographique." },
                { emoji: "⚡", titre: "Match direct", desc: "Contactez directement le candidat qui correspond. Pas d'intermédiaire, pas de délai, recrutement en 24h." },
                { emoji: "📊", titre: "Base de données exclusive", desc: "25 000 profils industrie Lyon concentrés en un seul outil. Une valeur que vous ne trouverez nulle part ailleurs." },
              ].map((item, i) => (
                <div key={i} style={styles.card}>
                  <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.emoji}</div>
                  <div style={{ fontWeight: "800", fontSize: "18px", marginBottom: "8px" }}>{item.titre}</div>
                  <div style={{ color: COLORS.gray, lineHeight: "1.6", fontSize: "15px" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* CANDIDATS */}
      {tab === "candidats" && (
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Base de profils</div>
          <div style={styles.sectionSub}>{CANDIDATS.length} profils affichés — extrait de la base complète</div>

          <div style={styles.searchBar}>
            <input
              style={styles.searchInput}
              placeholder="Rechercher : soudeur, CNC, qualité..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select
              style={{ ...styles.select, maxWidth: "180px" }}
              value={filterLieu}
              onChange={e => setFilterLieu(e.target.value)}
            >
              <option value="">Toutes les zones</option>
              {lieux.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <button style={styles.searchBtn}>Rechercher</button>
          </div>

          <div style={styles.grid2}>
            {filteredCandidats.map((c, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.avatar}>{c.initiales}</div>
                  <div>
                    <div style={styles.candidateName}>{c.nom}</div>
                    <div style={styles.candidateRole}>{c.poste}</div>
                  </div>
                </div>
                <div style={{ fontSize: "14px", color: COLORS.gray, marginBottom: "12px" }}>
                  📍 {c.lieu} &nbsp;·&nbsp; 💼 {c.exp} d'expérience
                </div>
                <div>
                  {c.skills.map((s, j) => (
                    <span key={j} style={{ ...styles.tag }}>{s}</span>
                  ))}
                </div>
                <div style={styles.dispo}>
                  <div style={{ ...styles.dot, background: c.dispo ? COLORS.success : COLORS.gray }} />
                  {c.dispo ? "Disponible immédiatement" : "En poste — ouvert aux opportunités"}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "40px", background: COLORS.steel, borderRadius: "16px", padding: "40px", textAlign: "center", color: COLORS.white }}>
            <div style={{ fontSize: "24px", fontWeight: "800", marginBottom: "12px" }}>
              🔒 Accédez à la base complète
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginBottom: "24px", fontSize: "16px" }}>
              Ces 6 profils sont un extrait. La base complète contient 25 000 candidats industrie Lyon.
            </div>
            <button style={styles.btnPrimary} onClick={() => setTab("entreprises")}>
              Voir les offres d'accès →
            </button>
          </div>
        </div>
      )}

      {/* DÉPOSER CV */}
      {tab === "deposer" && (
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Déposez votre profil</div>
          <div style={styles.sectionSub}>Gratuit · 3 minutes · Visible par les entreprises industrielles lyonnaises</div>

          <div style={styles.formCard}>
            {submitted ? (
              <div>
                <div style={styles.successBox}>
                  ✅ Profil enregistré avec succès !<br />
                  <span style={{ fontWeight: "400", fontSize: "14px" }}>Vous serez contacté directement par les entreprises partenaires.</span>
                </div>
                <button style={{ ...styles.submitBtn, marginTop: "20px", background: COLORS.steel }} onClick={() => { setSubmitted(false); setFormData({ nom: "", prenom: "", poste: "", exp: "", lieu: "", email: "", tel: "", skills: "" }); }}>
                  Déposer un autre profil
                </button>
              </div>
            ) : (
              <>
                <div style={styles.formTitle}>Votre fiche candidat</div>
                <div style={styles.formSub}>Toutes les informations restent confidentielles.</div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Prénom *</label>
                    <input style={styles.input} placeholder="Mohamed" value={formData.prenom} onChange={e => setFormData({ ...formData, prenom: e.target.value })} />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Nom *</label>
                    <input style={styles.input} placeholder="Kadri" value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value })} />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Poste recherché *</label>
                  <input style={styles.input} placeholder="Soudeur TIG, Technicien qualité, Conducteur de ligne..." value={formData.poste} onChange={e => setFormData({ ...formData, poste: e.target.value })} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Années d'expérience</label>
                    <select style={styles.select} value={formData.exp} onChange={e => setFormData({ ...formData, exp: e.target.value })}>
                      <option value="">Sélectionner</option>
                      <option>Moins de 2 ans</option>
                      <option>2 à 5 ans</option>
                      <option>5 à 10 ans</option>
                      <option>Plus de 10 ans</option>
                    </select>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Zone géographique</label>
                    <select style={styles.select} value={formData.lieu} onChange={e => setFormData({ ...formData, lieu: e.target.value })}>
                      <option value="">Sélectionner</option>
                      <option>Vénissieux</option>
                      <option>Saint-Priest</option>
                      <option>Meyzieu</option>
                      <option>Décines</option>
                      <option>Bron</option>
                      <option>Corbas</option>
                      <option>Lyon Centre</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Compétences clés</label>
                  <input style={styles.input} placeholder="Soudure TIG, CNC, ISO 9001, Lean..." value={formData.skills} onChange={e => setFormData({ ...formData, skills: e.target.value })} />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email *</label>
                  <input style={styles.input} type="email" placeholder="votre@email.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Téléphone</label>
                  <input style={styles.input} placeholder="06 XX XX XX XX" value={formData.tel} onChange={e => setFormData({ ...formData, tel: e.target.value })} />
                </div>

                <button style={styles.submitBtn} onClick={handleSubmit}>
                  Enregistrer mon profil →
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ENTREPRISES */}
      {tab === "entreprises" && (
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Accès Entreprises</div>
          <div style={styles.sectionSub}>Recrutez dans l'industrie lyonnaise sans intermédiaire</div>

          <div style={styles.pricingGrid}>
            {[
              {
                nom: "Découverte",
                prix: "490",
                periode: "accès 30 jours",
                featured: false,
                features: ["50 profils consultables", "Filtres par compétence", "Export PDF", "Support email"],
              },
              {
                nom: "Recruteur",
                prix: "990",
                periode: "accès 90 jours",
                featured: true,
                features: ["500 profils consultables", "Tous les filtres avancés", "Export Excel complet", "Contact direct candidat", "Support prioritaire"],
              },
              {
                nom: "Base Complète",
                prix: "10 000",
                periode: "achat unique",
                featured: false,
                features: ["25 000 profils complets", "Base de données livrée", "Accès illimité à vie", "Mise à jour 12 mois", "Accompagnement dédié"],
              },
            ].map((p, i) => (
              <div key={i} style={{ ...styles.pricingCard, ...(p.featured ? styles.pricingCardFeatured : {}) }}>
                {p.featured && (
                  <div style={{ ...styles.heroEyebrow, marginBottom: "16px" }}>⭐ Le plus populaire</div>
                )}
                <div style={{ fontWeight: "800", fontSize: "20px", marginBottom: "16px", color: p.featured ? COLORS.white : COLORS.steel }}>
                  {p.nom}
                </div>
                <div style={{ ...styles.pricingPrice }}>{p.prix}€</div>
                <div style={{ ...styles.pricingPeriod, color: p.featured ? "rgba(255,255,255,0.5)" : COLORS.gray }}>{p.periode}</div>
                <div style={{ marginBottom: "28px" }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ ...styles.pricingFeature, borderBottomColor: p.featured ? "rgba(255,255,255,0.1)" : COLORS.grayLight, color: p.featured ? "rgba(255,255,255,0.8)" : COLORS.steel }}>
                      ✓ {f}
                    </div>
                  ))}
                </div>
                <button style={{ ...styles.btnPrimary, width: "100%", background: p.featured ? COLORS.orange : COLORS.steel }}>
                  Choisir cette offre
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "48px", background: COLORS.white, borderRadius: "16px", padding: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { emoji: "🏭", titre: "Secteurs couverts", desc: "Automobile, agroalimentaire, logistique, métallurgie, plasturgie, électronique" },
              { emoji: "📍", titre: "Zone géographique", desc: "Vénissieux, Saint-Priest, Meyzieu, Décines, Bron, Corbas et tout le bassin lyonnais" },
              { emoji: "⚡", titre: "Disponibilité", desc: "Profils disponibles immédiatement identifiés en priorité" },
              { emoji: "🔒", titre: "RGPD conforme", desc: "Tous les candidats ont donné leur consentement explicite" },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "32px", marginBottom: "8px" }}>{item.emoji}</div>
                <div style={{ fontWeight: "700", marginBottom: "6px" }}>{item.titre}</div>
                <div style={{ color: COLORS.gray, fontSize: "14px", lineHeight: "1.5" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer style={styles.footer}>
        <strong style={{ color: COLORS.white }}>IndusMatching Lyon</strong> — La base de talents industriels du bassin lyonnais<br />
        <span style={{ fontSize: "12px" }}>Conforme RGPD · Candidats consentants · Lyon, France</span>
      </footer>
    </div>
  );
}
