import { useCallback, useRef, useState } from 'react'
import { asset, useI18n } from './i18n'
import { useMenu } from './hooks'
import { BIZ, type Content } from './content'
import { Arrow, Check, Enquiry, Faq, Footer, Header, MapFigure, MobileBar, MobileMenu, PhoneIcon, Stars, WaIcon, waLink } from './ui'

function Brand({ small = false }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className={`grid place-items-center rounded-full bg-accent font-display font-bold text-onaccent ${small ? 'h-9 w-9 text-[14px]' : 'h-10 w-10 text-[15px]'}`} aria-hidden>WT</span>
      <span className="leading-none"><span className="block font-display text-[19px] font-bold tracking-[-0.01em]">WT Stay</span><span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-ondeepm">Swiss Garden Residences</span></span>
    </span>
  )
}

function Hero() {
  const { c } = useI18n<Content>()
  const H = c.hero
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 pb-12 pt-6 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-20 lg:pt-14">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <p className="kicker text-accentink"><span className="h-[2px] w-8 rounded bg-accent" aria-hidden />{H.kicker}</p>
          <h1 className="mt-4 font-display text-[clamp(2.15rem,8.6vw,4.3rem)] font-bold leading-[1.02] tracking-[-0.025em]">{H.h1a} <span className="text-accentink">{H.h1b}</span></h1>
          <p className="mt-5 max-w-[34rem] text-[17px] leading-relaxed text-muted">{H.sub}</p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <a href="#book" className="tap inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-accent px-7 text-[16px] font-semibold text-onaccent transition hover:brightness-110">{H.cta}<Arrow /></a>
            <a href={waLink(BIZ.wa, c.enquiry.msg({ ci: '', co: '', g: 2, u: c.enquiry.anyUnit, n: 0 }))} target="_blank" rel="noopener" className="tap inline-flex h-[54px] items-center justify-center gap-2 rounded-full border-2 border-ink/15 px-6 text-[16px] font-semibold transition hover:border-accent"><WaIcon className="h-[18px] w-[18px]" />{H.cta2}</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BIZ.maps} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-soft px-4 py-3 hover:bg-soft/70">
              <span className="flex items-center gap-2"><span className="font-display text-[26px] font-bold leading-none">{BIZ.google}</span><span><Stars value={4.9} /><span className="block text-[12.5px] text-muted">{H.google}</span></span></span>
            </a>
            <a href={BIZ.tripUrl} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-soft px-4 py-3 hover:bg-soft/70">
              <span className="flex items-center gap-2"><span className="font-display text-[26px] font-bold leading-none">{BIZ.trip}<span className="text-[15px] text-muted">/10</span></span><span className="text-[12.5px] leading-tight text-muted">{H.trip}<br />{BIZ.tripCount} {H.tripReviews}</span></span>
            </a>
          </div>
        </div>
        <figure className="relative order-1 -mx-5 sm:mx-0 lg:order-2 lg:col-span-6">
          <picture>
            <source media="(min-width: 1024px)" srcSet={asset('images/hero-1400.webp')} />
            <img src={asset('images/hero-m-480.webp')} srcSet={`${asset('images/hero-m-480.webp')} 480w, ${asset('images/hero-m-720.webp')} 720w`} sizes="100vw" width={720} height={900} alt={H.photo} fetchPriority="high" decoding="async" className="h-[min(56svh,460px)] w-full object-cover sm:rounded-3xl lg:aspect-[4/5] lg:h-auto lg:max-h-[640px] lg:rounded-[28px]" />
          </picture>
          <span className="absolute left-5 top-4 rotate-[-4deg] rounded-full bg-paper px-4 py-2 font-display text-[15px] font-bold text-ink shadow-lg sm:left-4 lg:-left-6 lg:top-10 lg:text-[17px]">2A Jalan Galloway</span>
          <figcaption className="mt-2 px-5 text-[11.5px] text-muted sm:px-0"><a href={BIZ.heroCredit} target="_blank" rel="noopener" className="hover:underline">{H.photo}. {H.credit}</a></figcaption>
        </figure>
      </div>
    </section>
  )
}

function Apartments() {
  const { c } = useI18n<Content>()
  const A = c.apts
  return (
    <section id="apartments" className="bg-soft/60">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7"><p className="kicker text-accentink">{A.kicker}</p><h2 className="h2 mt-3">{A.title}</h2></div>
          <p className="max-w-md text-[16.5px] leading-relaxed text-muted lg:col-span-5">{A.sub}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {A.items.map((it) => (
            <article key={it.name} className="overflow-hidden rounded-[26px] bg-paper">
              <div className="relative">
                <img src={asset(`images/${it.img}-640.webp`)} srcSet={`${asset(`images/${it.img}-640.webp`)} 640w, ${asset(`images/${it.img}-960.webp`)} 960w`} sizes="(min-width:768px) 46vw, 92vw" width={960} height={1200} loading="lazy" decoding="async" alt="" className="aspect-[4/3] w-full object-cover" />
                <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-[11.5px] text-muted">{A.illus}</span>
              </div>
              <div className="p-6">
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-accentink">{it.fit}</p>
                <h3 className="mt-2 font-display text-[28px] font-bold leading-tight">{it.name}</h3>
                <p className="mt-1 text-[16px] text-muted">{it.beds}</p>
                <a href={waLink(BIZ.wa, c.enquiry.msg({ ci: '', co: '', g: 2, u: it.name, n: 0 }))} target="_blank" rel="noopener" className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-[15.5px] font-semibold text-accentink underline decoration-accent/40 underline-offset-4"><WaIcon className="h-4 w-4" />{A.ask}</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-[26px] bg-deep p-6 text-ondeep sm:p-8">
          <h3 className="font-display text-[22px] font-bold">{A.amenTitle}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
            {A.amen.map((a) => <li key={a} className="flex items-start gap-2 text-[15.5px]"><Check className="mt-1 h-4 w-4 shrink-0 text-accentlt" />{a}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Area() {
  const { c } = useI18n<Content>()
  const A = c.area
  return (
    <section id="area" className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-24">
      <figure className="lg:col-span-6">
        <img src={asset('images/alor-640.webp')} srcSet={`${asset('images/alor-640.webp')} 640w, ${asset('images/alor-960.webp')} 960w`} sizes="(min-width:1024px) 600px, 92vw" width={960} height={640} loading="lazy" decoding="async" alt={A.photo} className="aspect-[3/2] w-full rounded-[26px] object-cover" />
        <figcaption className="mt-2 text-[11.5px] text-muted"><a href={BIZ.alorCredit} target="_blank" rel="noopener" className="hover:underline">{A.photo}. {A.credit}</a></figcaption>
      </figure>
      <div className="lg:col-span-6">
        <p className="kicker text-accentink">{A.kicker}</p>
        <h2 className="h2 mt-3">{A.title}</h2>
        <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-muted">{A.sub}</p>
        <ul className="mt-7 divide-y divide-ink/10 border-y border-ink/10">
          {A.list.map(([p, d]) => <li key={p} className="flex items-baseline justify-between gap-4 py-3.5 text-[16.5px]"><span className="font-medium">{p}</span><span className="shrink-0 font-display font-bold text-accentink">{d}</span></li>)}
        </ul>
      </div>
    </section>
  )
}

function Reviews() {
  const { c } = useI18n<Content>()
  const R = c.reviews
  return (
    <section id="reviews" className="on-deep bg-deep text-ondeep">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="kicker text-accentlt">{R.kicker}</p><h2 className="h2 mt-3">{R.title}</h2></div>
          <p className="flex items-center gap-3"><span className="font-display text-[44px] font-bold leading-none">{BIZ.google}</span><span><Stars value={4.9} className="h-5 w-5" /><span className="block text-[13.5px] text-ondeepm">Google</span></span></p>
        </div>
        <div className="rail -mx-5 mt-10 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4" tabIndex={0} role="region" aria-label={R.title}>
          {R.items.map(([q, w]) => (
            <figure key={q} className="flex w-[82%] shrink-0 flex-col justify-between rounded-[22px] bg-deep2 p-6 sm:w-auto">
              <blockquote lang="en" className="text-[16.5px] leading-relaxed">“{q}”</blockquote>
              <figcaption className="mt-5 text-[13.5px] text-ondeepm">{w}</figcaption>
            </figure>
          ))}
        </div>
        <a href={BIZ.tripUrl} target="_blank" rel="noopener" className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-[15.5px] font-semibold text-accentlt underline underline-offset-4">{R.more}<Arrow /></a>
      </div>
    </section>
  )
}

function Book() {
  const { c } = useI18n<Content>()
  const B = c.book
  return (
    <section id="book" className="bg-soft/60">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="kicker text-accentink">{B.kicker}</p>
            <h2 className="h2 mt-3">{B.title}</h2>
            <p className="mt-4 max-w-md text-[16.5px] leading-relaxed text-muted">{B.sub}</p>
            <div className="mt-8 rounded-[22px] bg-paper p-6">
              <h3 className="font-display text-[21px] font-bold">{c.rules.title}</h3>
              <dl className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3">
                {c.rules.items.map(([k, v]) => <div key={k}><dt className="text-[12.5px] font-semibold uppercase tracking-[0.12em] text-muted">{k}</dt><dd className="mt-0.5 text-[15.5px] font-medium">{v}</dd></div>)}
              </dl>
            </div>
          </div>
          <div className="lg:col-span-7"><Enquiry t={c.enquiry} units={c.apts.items.map((i) => i.name)} wa={BIZ.wa} maxGuests={8} /></div>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-14">
          <dl className="grid content-start gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div><dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accentink">{B.address}</dt><dd className="mt-1.5 text-[16.5px] leading-relaxed">{BIZ.address}<br /><a href={BIZ.maps} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center font-semibold text-accentink underline underline-offset-4">{B.maps}</a></dd></div>
            <div><dt className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accentink">{B.phone}</dt><dd className="mt-1.5"><a href={`tel:${BIZ.tel}`} className="font-display text-[28px] font-bold">{BIZ.phone}</a></dd></div>
          </dl>
          <div className="text-ink lg:col-span-7"><MapFigure href={BIZ.directions} alt={B.mapAlt} pin={c.a11y.pin} credit={B.mapCredit} cta={c.directions} osm={BIZ.osm} img={asset} /></div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const { c } = useI18n<Content>()
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)
  const close = useCallback(() => setOpen(false), [])
  useMenu(open, close, btnRef)
  const waHi = waLink(BIZ.wa, c.enquiry.msg({ ci: '', co: '', g: 2, u: c.enquiry.anyUnit, n: 0 }))
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-onaccent">{c.a11y.skip}</a>
      <Header brand={<Brand />} nav={c.nav} langLabel={c.langLabel} langAria={c.langAria} cta={c.cta} ctaHref={waHi} menuOpen={open} onMenu={() => setOpen((o) => !o)} btnRef={btnRef} a11y={{ main: c.a11y.main, menuOpen: c.a11y.menuOpen, menuClose: c.a11y.menuClose }} />
      {open && (
        <MobileMenu nav={c.nav} close={close} label={c.a11y.mobile}>
          <a href="#book" onClick={close} className="tap inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-accent font-semibold text-onaccent">{c.hero.cta}<Arrow /></a>
          <div className="grid grid-cols-2 gap-3">
            <a href={waHi} target="_blank" rel="noopener" className="tap inline-flex items-center justify-center gap-2 rounded-full border border-ondeep/25 font-semibold"><WaIcon className="h-4 w-4" />WhatsApp</a>
            <a href={`tel:${BIZ.tel}`} className="tap inline-flex items-center justify-center gap-2 rounded-full border border-ondeep/25 font-semibold"><PhoneIcon className="h-4 w-4" />{c.call}</a>
          </div>
        </MobileMenu>
      )}
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Apartments />
        <Area />
        <Reviews />
        <Book />
        <section id="faq" className="mx-auto grid max-w-[1280px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <h2 className="h2 lg:col-span-4">{c.faq.title}</h2>
          <Faq items={c.faq.items} className="lg:col-span-8" />
        </section>
      </main>
      <Footer brand={<Brand small />} name={BIZ.name} address={BIZ.address} mapsHref={BIZ.maps} mapsLabel={c.book.maps} nav={c.nav} t={c.footer}
        reach={<ul><li><a href={`tel:${BIZ.tel}`} className="inline-flex min-h-[40px] items-center hover:text-accentlt">{BIZ.phone}</a></li><li><a href={waHi} target="_blank" rel="noopener" className="inline-flex min-h-[40px] items-center gap-2 hover:text-accentlt"><WaIcon className="h-4 w-4" />WhatsApp</a></li><li className="py-2 text-ondeepm">{c.rules.items[0][0]}: {c.rules.items[0][1]}</li></ul>} />
      <MobileBar label={c.a11y.bar} items={[{ href: '#book', label: c.nav[3][1], icon: 'wa', primary: true }, { href: `tel:${BIZ.tel}`, label: c.call, icon: 'phone' }, { href: BIZ.directions, label: c.directions, icon: 'pin', ext: true }]} />
    </>
  )
}
