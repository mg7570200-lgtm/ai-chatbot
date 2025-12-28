'use client'

import { useState, useEffect } from 'react'

export default function IAM1660Sovereign() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // نطق ترحيبي بمجرد الدخول
    if (typeof window !== 'undefined') {
      const intro = new SpeechSynthesisUtterance("نظام آي إم 1660 نشط. بروتوكولات دي أي سي وجام تعمل بكفاءة. أبشر يا مصطفى.");
      intro.lang = 'ar-SA';
      intro.pitch = 0.9;
      window.speechSynthesis.speak(intro);
    }
  }, [])

  if (!mounted) return null

  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: '#D4AF37', fontFamily: 'Arial, sans-serif' }}>
      {/* الهيدر السيادي */}
      <header style={{ borderBottom: '2px solid #D4AF37', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>i-AM 1660 <span style={{ color: '#fff' }}>SOVEREIGN</span></h1>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: '#00ff00', fontSize: '10px' }}>● SYSTEM ONLINE</div>
          <div style={{ color: '#fff', fontSize: '12px' }}>DAC / JAM PROTCOLS ACTIVE</div>
        </div>
      </header>

      {/* منطقة التقرير المالي */}
      <section style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: '#111', border: '1px solid rgba(212,175,55,0.3)', padding: '30px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid #333', pb: '10px' }}>تقرير تحليل VeriAnchor للأسبوع الماضي</h2>
          
          <div style={{ marginBottom: '20px', lineHeight: '1.8' }}>
            <p><strong style={{ color: '#D4AF37' }}>الموضوع:</strong> ملخص مالي لمنع هلوسة الذكاء الاصطناعي (OpenAI Logic)</p>
            <p><strong style={{ color: '#D4AF37' }}>إجمالي التدخلات:</strong> تم رصد ومنع أكثر من 450 حالة هلوسة تقنية بنجاح.</p>
            <p><strong style={{ color: '#D4AF37' }}>الأرباح الموفرة:</strong> من خلال دقة البيانات، تم توفير ما يقدر بـ <span style={{ color: '#00ff00' }}>12,450 دولار</span> كانت ستهدر في قرارات خاطئة.</p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <button 
              onClick={() => alert('جاري تصدير ملف PDF للمدير التنفيذي...')}
              style={{ backgroundColor: '#D4AF37', color: '#000', border: 'none', padding: '15px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' }}>
              إرسال تقرير PDF النهائي
            </button>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: '10px', textAlign: 'center', fontSize: '11px', color: '#555' }}>
        POWERED BY OPENAI | 1660 SOVEREIGN SYSTEM
      </footer>
    </main>
  )
}
