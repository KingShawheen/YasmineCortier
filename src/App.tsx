import { Play, Disc, Mic2, Music, Mail, Hash, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  const tracks = [
    { id: '1', title: 'Chance (Na Ham)', duration: '3:42' },
    { id: '2', title: 'Solace (Original Mix)', duration: '4:15' },
    { id: '3', title: 'Marsh Mellow (Original Mix)', duration: '3:50' },
    { id: '4', title: 'Spiritually Just', duration: '3:30' },
    { id: '5', title: 'Persian Conversion', duration: '4:01' },
    { id: '6', title: 'Bonus Track!', duration: '2:58' },
  ];

  const milestones = [
    { year: 'Present', title: 'Electric Performances', desc: 'Continuing to bring high-energy performances and soulful R&B to venues everywhere.' },
    { year: '2000s', title: 'The Merq & Volcano\'s', desc: 'Hosted legendary, high-energy karaoke nights and DJ sets, cementing her local nightlife status.' }
  ];

  return (
    <div className="app-wrapper">
      {/* Dynamic Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(107, 33, 168, 0.2) 0%, rgba(15, 23, 42, 1) 70%)',
          zIndex: -1
        }}
      />

      {/* Hero Section */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '1.5rem', color: 'var(--secondary)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px' }}>
              The Essence of Soul
            </h2>
            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 800, margin: '0 0 24px -6px', lineHeight: 1.1 }}>
              YASMINE<br/><span className="text-gradient">CORTIER</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '40px' }}>
              Singer • DJ • Entertainer. Bringing magnetic presence, electric R&B, and premium nightlife energy to every stage.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#music" className="btn-primary">
                <span>Listen to Freak Magnet</span>
                <Play size={20} />
              </a>
              <a href="#book" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--text-main)' }}>
                <span>Book Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="section-padding">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ marginBottom: '64px' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>The <span className="text-gradient">Music</span></h2>
            <p style={{ color: 'var(--text-muted)' }}>Experience the 2011 defining R&B/Soul album, Freak Magnet.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* Album Cover Art Area */}
            <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-50%', left: '-50%', right: '-50%', bottom: '-50%', background: 'conic-gradient(from 0deg, transparent, var(--secondary), var(--primary), transparent)', animation: 'spin 10s linear infinite', opacity: 0.1, zIndex: 0 }} />
              <Disc size={120} color="var(--primary)" style={{ zIndex: 1, marginBottom: '24px' }} />
              <h3 style={{ fontSize: '2rem', zIndex: 1, textAlign: 'center' }}>Freak Magnet</h3>
              <p style={{ color: 'var(--text-muted)', zIndex: 1 }}>Released 2011</p>
            </div>

            {/* Tracklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {tracks.map((track, index) => (
                <div key={track.id} className="glass-panel glow-hover" style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>0{index + 1}</span>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 500 }}>{track.title}</h4>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{track.duration}</span>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--secondary)', cursor: 'pointer' }}>
                      <Play size={24} fill="currentColor" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0) 0%, rgba(30,41,59,0.3) 50%, rgba(15,23,42,0) 100%)' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '64px', textAlign: 'center' }}>The <span className="text-gradient">Journey</span></h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, transparent, var(--primary), var(--secondary), transparent)', transform: 'translateX(-50%)' }} />
            
            {milestones.map((item, index) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ 
                  display: 'flex', 
                  justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: '48px',
                  position: 'relative'
                }}
              >
                <div style={{ width: '45%' }}>
                  <div className="glass-panel" style={{ padding: '32px', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px' }}>{item.year}</span>
                    <h3 style={{ fontSize: '1.5rem', margin: '8px 0 12px 0' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '32px',
                  transform: 'translate(-50%, -50%)',
                  width: '16px', height: '16px',
                  background: 'var(--bg-color)',
                  border: '4px solid var(--secondary)',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px var(--secondary)',
                  zIndex: 2
                }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="book" className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass-panel" style={{ padding: '64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />
            
            <Mic2 size={48} color="var(--secondary)" style={{ marginBottom: '24px' }} />
            <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Book the <span className="text-gradient">Experience</span></h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
              Bring the magnetic energy of Yasmine Cortier to your next event. For DJ sets, vocal performances, and hosting.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="text" placeholder="Your Name" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-body)' }} />
                <input type="email" placeholder="Email Address" style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-body)' }} />
              </div>
              <textarea placeholder="Event Details & Message" rows={4} style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', color: '#fff', fontFamily: 'var(--font-body)', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '16px' }}>
                <span>Send Request</span>
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '64px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px' }}>YASMINE CORTIER</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[Music, Hash, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }} className="glow-hover">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .btn-primary { width: 100%; }
          form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
