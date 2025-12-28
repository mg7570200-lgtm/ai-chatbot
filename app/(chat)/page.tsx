'use client'
import React from 'react'

export default function Page() {
  return (
    <div style={{ backgroundColor: '#000', color: '#D4AF37', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', textShadow: '0 0 15px #D4AF37' }}>i-AM 1660 SOVEREIGN</h1>
      <p style={{ color: '#fff', letterSpacing: '2px' }}>PROTCOLS: DAC / JAM ACTIVE</p>
      
      <div style={{ border: '1px solid #D4AF37', marginTop: '30px', padding: '20px', borderRadius: '10px', backgroundColor: '#0a0a0a' }}>
        <h2 style={{ color: '#fff' }}>تقرير VeriAnchor المالي</h2>
        <p style={{ fontSize: '1.2rem' }}>الأرباح الموفرة: <span style={{ color: '#00ff00' }}>$12,450</span></p>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>تم منع الهلوسة بنجاح باستخدام OpenAI</p>
      </div>

      <button onClick={() => alert('جاري تحضير PDF للمدير التنفيذي...')} style={{ marginTop: '30px', backgroundColor: '#D4AF37', color: '#000', border: 'none', padding: '15px 30px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' }}>
        إرسال التقرير النهائي
      </button>
    </div>
  )
}
