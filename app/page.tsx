import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id='hero'>
        <h1>O elevador espacial</h1>
      </section>
      <section id='cocpit'>
        <h1>O Cocpit</h1>
      </section>
      <section id='coneccao'>
        <h1>A Coneccao</h1>
      </section>
      <section id='elevador'>
        <h1>O Elevador</h1>
      </section>
      <section id='hub'>
        <h1>O Hub</h1>
      </section>
      <section id='reator'>
        <h1>O Reator</h1>
      </section>
      <section id='ancora'>
        <h1>A Ancora</h1>
      </section>
    </main>
  )
}
