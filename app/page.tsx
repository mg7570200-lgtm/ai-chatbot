'use client'
import React, { useEffect } from 'react'

export default function SovereignPage() {
  useEffect(() => {
    const speak = () => {
      const msg = new SpeechSynthesisUtterance("باذن الله نكسر الدنيا يا مصطفى. نظام آي إم 1660 نشط الآن.");
      msg.lang = 'ar-SA';
      window.speechSynthesis.speak(msg);
    };
    setTimeout(speak, 1000);
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#D4AF37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ border: '3px solid #D4AF37', padding: '50px', borderRadius: '30px', boxShadow: '0 0 50px rgba(212, 175, 55, 0.3)' }}>
        <h1 style={{ fontSize: '3.5rem', margin: '0', letterSpacing: '5px' }}>i-AM 1660</h1>
        <p style={{ color: '#fff', fontSize: '1.2rem', marginTop: '10px' }}>الرفيق الرقمي السيادي</p>
        <hr style={{ borderColor: '#D4AF37', width: '50%', margin: '20px auto' }} />
        <h2 style={{ color: '#00ff00' }}>READY TO BREAK THE WORLD</h2>
        <p style={{ color: '#888' }}>بروتوكولات VeriAnchor تعمل بكفاءة 100%</p>
      </div>
    </div>
  )
}
