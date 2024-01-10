'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
  const [CurrSection, setCurrSection] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id='hero' className={CurrSection===0?'viseble':'hidden'} onClick={(e) => {setCurrSection(CurrSection === 7 ? 0 : CurrSection+1 )}}>
        <div className='signatureMask absolute text-[#DDD] flex items-center'><h1>O elevador espacial</h1></div>
        <h1>O elevador espacial</h1>
      </section>
      <section id='cocpit' className={CurrSection===1?'viseble':'hidden'} onClick={(e) => {setCurrSection(CurrSection === 7 ? 0 : CurrSection+1 )}}>
        <h1>O Cocpit</h1>
      </section>
      <section id='coneccao' className={CurrSection===2?'viseble':'hidden'} onClick={(e) => {setCurrSection(CurrSection === 7 ? 0 : CurrSection+1 )}}>
        <h1>A Coneccao</h1>
      </section>
      <section id='elevador' className={CurrSection===3?'viseble':'hidden'} onClick={(e) => {setCurrSection(CurrSection === 7 ? 0 : CurrSection+1 )}}>
        <h1>O Elevador</h1>
      </section>
      <section id='hub' className={CurrSection===4?'viseble':'hidden'} onClick={(e) => {setCurrSection(CurrSection === 7 ? 0 : CurrSection+1 )}}>
        <h1>O Hub</h1>
      </section>
      <section id='reator' className={CurrSection===5?'viseble':'hidden'} onClick={(e) => {setCurrSection(CurrSection === 7 ? 0 : CurrSection+1 )}}>
        <h1>O Reator</h1>
      </section>
      <section id='ancora' className={CurrSection===6?'viseble':'hidden'} onClick={(e) => {setCurrSection(CurrSection === 7 ? 0 : CurrSection+1 )}}>
        <h1>A Ancora</h1>
      </section>
    </main>
  )
}
