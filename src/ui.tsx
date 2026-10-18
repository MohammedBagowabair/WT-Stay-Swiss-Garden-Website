import { useEffect, useState, type ReactNode, type RefObject } from 'react'
import { useI18n } from './i18n'
import { useActiveSection, useDialogFlag } from './hooks'

export const PITCH_WA = 'https://wa.me/601151198497'
export const waLink = (num: string, text: string) => `https://wa.me/${num}?text=${encodeURIComponent(text)}`

export function WaIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4.9 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg>
}
export function PhoneIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
}
export function PinIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
}
export function Arrow({ className = 'h-4 w-4', up = false }: { className?: string; up?: boolean }) {
  return <svg viewBox="0 0 20 20" className={className} style={up ? { transform: 'rotate(-90deg)' } : undefined} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 10h13M11.5 5l5 5-5 5" /></svg>
}
export function Check({ className = 'h-4 w-4' }: { className?: string }) {
  return <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10.5l4 4 8-9" /></svg>
}

export type Nav = [string, string][]
type HeaderProps = { brand: ReactNode; nav: Nav; langLabel: string; langAria: string; cta: ReactNode; ctaHref: string; menuOpen: boolean; onMenu: () => void; btnRef: RefObject<HTMLButtonElement | null>; a11y: { main: string; menuOpen: string; menuClose: string } }
export function Header({ brand, nav, langLabel, langAria, cta, ctaHref, menuOpen, onMenu, btnRef, a11y }: HeaderProps) {
  const { lang, setLang } = useI18n<unknown>()
  const active = useActiveSection(nav.map(([id]) => id))
  return (
    <header className="on-deep sticky top-0 z-40 border-b border-ondeep/10 bg-deep text-ondeep">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-5 sm:px-8 lg:h-[68px]">
        <a href="#top" className="tap flex min-w-0 items-center rounded-md">{brand}</a>
        <nav aria-label={a11y.main} className="hidden items-center gap-7 lg:flex">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined} className={`py-3 text-[14.5px] transition hover:text-accentlt ${active === id ? 'text-accentlt' : 'text-ondeep/85'}`}>{l}</a>)}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5">
          <button type="button" data-lang-toggle onClick={() => setLang(lang === 'en' ? 'ms' : 'en')} aria-label={langAria} className="tap rounded-full px-2 text-[13px] font-semibold tracking-[0.12em] transition hover:text-accentlt">{langLabel}</button>
          <a href={ctaHref} target="_blank" rel="noopener" className="tap hidden items-center gap-2 rounded-full bg-accent px-4 text-[14px] font-semibold text-onaccent transition hover:brightness-110 sm:inline-flex"><WaIcon className="h-4 w-4" />{cta}</a>
          <button ref={btnRef} type="button" onClick={onMenu} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? a11y.menuClose : a11y.menuOpen} className="tap -mr-2 grid place-items-center rounded-full lg:hidden">
            <span className="relative block h-3 w-6" aria-hidden>
              <span className={`absolute left-0 h-[1.5px] w-6 bg-current transition ${menuOpen ? 'top-[6px] rotate-45' : 'top-0.5'}`} />
              <span className={`absolute right-0 h-[1.5px] bg-current transition-all ${menuOpen ? 'top-[6px] w-6 -rotate-45' : 'top-[10px] w-4'}`} />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export function MobileMenu({ nav, close, label, children }: { nav: Nav; close: () => void; label: string; children?: ReactNode }) {
  useDialogFlag()
  return (
    <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={label} className="on-deep fixed inset-x-0 bottom-0 top-14 z-30 flex flex-col overflow-y-auto bg-deep px-5 pb-8 pt-3 text-ondeep lg:hidden">
      <nav aria-label={label}>
        {nav.map(([id, l]) => <a key={id} href={`#${id}`} onClick={close} className="flex min-h-[60px] items-center justify-between border-b border-ondeep/10 font-display text-[28px] active:text-accentlt">{l}<Arrow className="h-5 w-5 opacity-50" /></a>)}
      </nav>
      <div className="mt-auto grid gap-3 pt-8">{children}</div>
    </div>
  )
}

export function useShowBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > window.innerHeight * 0.6)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return show
}

export type BarItem = { href: string; label: string; icon: 'wa' | 'phone' | 'pin'; primary?: boolean; ext?: boolean }
export function MobileBar({ items, label }: { items: BarItem[]; label: string }) {
  const show = useShowBar()
  const ic = { wa: <WaIcon className="h-[18px] w-[18px]" />, phone: <PhoneIcon className="h-[18px] w-[18px]" />, pin: <PinIcon className="h-[18px] w-[18px]" /> }
  return (
    <nav aria-label={label} aria-hidden={!show} data-fab className={`on-deep fixed inset-x-0 bottom-0 z-30 border-t border-ondeep/10 bg-deep/95 px-3 pb-[max(.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur transition duration-300 lg:hidden ${show ? '' : 'pointer-events-none translate-y-full opacity-0'}`}>
      <div className="mx-auto grid max-w-md gap-2" style={{ gridTemplateColumns: items.map((i) => (i.primary ? '1.5fr' : '1fr')).join(' ') }}>
        {items.map((i) => (
          <a key={i.label} href={i.href} {...(i.ext ? { target: '_blank', rel: 'noopener' } : {})} tabIndex={show ? 0 : -1} className={`inline-flex h-12 items-center justify-center gap-2 rounded-full text-[15px] font-semibold ${i.primary ? 'bg-accent text-onaccent' : 'border border-ondeep/25 text-ondeep'}`}>{ic[i.icon]}{i.label}</a>
        ))}
      </div>
    </nav>
  )
}

export function MapFigure({ href, alt, pin, credit, cta, osm, img }: { href: string; alt: string; pin: string; credit: string; cta: string; osm: string; img: (p: string) => string }) {
  return (
    <figure>
      <a href={href} target="_blank" rel="noopener" className="group relative block overflow-hidden rounded-2xl border border-current/15">
        <img src={img('images/map-600.webp')} srcSet={`${img('images/map-600.webp')} 600w, ${img('images/map-900.webp')} 900w`} sizes="(min-width:1024px) 560px, 92vw" width={900} height={600} loading="lazy" decoding="async" alt={alt} className="aspect-[3/2] w-full object-cover" />
        <svg viewBox="0 0 32 44" className="absolute left-1/2 top-1/2 h-11 w-8 -translate-x-1/2 -translate-y-full drop-shadow" role="img" aria-label={pin}><path d="M16 0C7.2 0 0 7 0 15.7 0 27.5 16 44 16 44s16-16.5 16-28.3C32 7 24.8 0 16 0z" fill="rgb(var(--deep))" /><circle cx="16" cy="15.5" r="6" fill="rgb(var(--accent))" /></svg>
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-deep/90 px-4 py-2 text-[14px] font-medium text-ondeep">{cta} <Arrow /></span>
      </a>
      <figcaption className="mt-2 text-[12px] opacity-70"><a href={osm} target="_blank" rel="noopener" className="underline-offset-2 hover:underline">{credit}</a></figcaption>
    </figure>
  )
}

export function Faq({ items, className = '' }: { items: [string, string][]; className?: string }) {
  return (
    <div className={`border-t border-current/15 ${className}`}>
      {items.map(([q, a]) => (
        <details key={q} className="border-b border-current/15">
          <summary className="flex min-h-[64px] cursor-pointer items-center justify-between gap-5 py-4 font-display text-[20px] leading-snug sm:text-[23px]">
            {q}<span className="faq-i grid h-9 w-9 shrink-0 place-items-center rounded-full border border-current/25 font-sans text-lg transition" aria-hidden>+</span>
          </summary>
          <p className="max-w-2xl pb-6 text-[16px] leading-relaxed opacity-80">{a}</p>
        </details>
      ))}
    </div>
  )
}

export type EnquiryText = { title: string; checkin: string; checkout: string; guests: string; unit: string; anyUnit: string; send: string; hint: string; preview: string; nights: (n: number) => string; minus: string; plus: string; msg: (o: { ci: string; co: string; g: number; u: string; n: number }) => string; fmt: string }
export function Enquiry({ t, units, wa, defaultGuests = 2, maxGuests = 10 }: { t: EnquiryText; units: string[]; wa: string; defaultGuests?: number; maxGuests?: number }) {
  const [ci, setCi] = useState('')
  const [co, setCo] = useState('')
  const [g, setG] = useState(defaultGuests)
  const [u, setU] = useState('')
  const [today, setToday] = useState('')
  useEffect(() => { const d = new Date(); setToday(new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10)) }, [])
  const n = ci && co ? Math.round((Date.parse(co) - Date.parse(ci)) / 864e5) : 0
  const f = (s: string) => (s ? new Intl.DateTimeFormat(t.fmt, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(s + 'T12:00:00')) : '')
  const msg = t.msg({ ci: f(ci), co: f(co), g, u: u || t.anyUnit, n: n > 0 ? n : 0 })
  const field = 'mt-1.5 w-full rounded-xl border border-ink/20 bg-paper px-3 text-[16px] text-ink'
  const lab = 'text-[13px] font-semibold uppercase tracking-[0.12em] text-muted'
  return (
    <div className="rounded-3xl bg-paper p-5 text-ink shadow-[0_20px_60px_-30px_rgba(0,0,0,.45)] sm:p-7">
      <h3 className="font-display text-[26px] leading-tight">{t.title}</h3>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <label className="block min-w-0"><span className={lab}>{t.checkin}</span><input type="date" min={today} value={ci} onChange={(e) => { setCi(e.target.value); if (co && e.target.value >= co) setCo('') }} className={field} /></label>
        <label className="block min-w-0"><span className={lab}>{t.checkout}</span><input type="date" min={ci || today} value={co} onChange={(e) => setCo(e.target.value)} className={field} /></label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div><span className={lab} id="g-l">{t.guests}</span>
          <div className="mt-1.5 flex items-center justify-between rounded-xl border border-ink/20" role="group" aria-labelledby="g-l">
            <button type="button" onClick={() => setG(Math.max(1, g - 1))} aria-label={t.minus} className="tap text-xl">−</button>
            <span className="text-[17px] font-semibold tabular-nums" aria-live="polite">{g}</span>
            <button type="button" onClick={() => setG(Math.min(maxGuests, g + 1))} aria-label={t.plus} className="tap text-xl">+</button>
          </div>
        </div>
        <label className="block"><span className={lab}>{t.unit}</span>
          <select value={u} onChange={(e) => setU(e.target.value)} className={`${field} h-12`}>
            <option value="">{t.anyUnit}</option>
            {units.map((x) => <option key={x} value={x}>{x}</option>)}
          </select>
        </label>
      </div>
      {n > 0 && <p className="mt-3 text-[14px] text-muted">{t.nights(n)}</p>}
      <p className="sr-only">{t.preview}: {msg}</p>
      <a href={waLink(wa, msg)} target="_blank" rel="noopener" className="tap mt-5 flex h-[54px] items-center justify-center gap-2 rounded-full bg-accent px-5 text-[16px] font-semibold text-onaccent transition hover:brightness-110"><WaIcon />{t.send}</a>
      <p className="mt-3 text-center text-[13px] leading-snug text-muted">{t.hint}</p>
    </div>
  )
}

export type FooterText = { explore: string; reach: string; photos: string; pitch: string; pitchLink: string; rights: string; toTop: string }
export function Footer({ brand, name, address, mapsHref, mapsLabel, nav, reach, t }: { brand: ReactNode; name: string; address: string; mapsHref: string; mapsLabel: string; nav: Nav; reach: ReactNode; t: FooterText }) {
  const h = 'text-[12px] font-semibold uppercase tracking-[0.2em] text-accentlt'
  return (
    <footer className="on-deep bg-deep2 text-ondeep">
      <div className="mx-auto max-w-[1280px] px-5 pb-28 pt-14 sm:px-8 lg:pb-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-5">
            {brand}
            <p className="mt-4 text-[15px] font-semibold">{name}</p>
            <p className="mt-1 max-w-xs text-[14.5px] leading-relaxed text-ondeepm">{address}</p>
            <a href={mapsHref} target="_blank" rel="noopener" className="mt-1 inline-flex min-h-[40px] items-center text-[14.5px] text-accentlt underline underline-offset-4">{mapsLabel}</a>
          </div>
          <nav aria-label={t.explore} className="lg:col-span-3"><p className={h}>{t.explore}</p>
            <ul className="mt-3">{nav.map(([id, l]) => <li key={id}><a href={`#${id}`} className="inline-flex min-h-[40px] items-center text-[15px] text-ondeep/85 hover:text-accentlt">{l}</a></li>)}</ul>
          </nav>
          <div className="lg:col-span-4"><p className={h}>{t.reach}</p><div className="mt-3 text-[15px]">{reach}</div></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-ondeep/10 pt-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-[13px] text-ondeepm">© {new Date().getFullYear()} {name}. {t.rights}</p>
          <a href="#top" className="inline-flex min-h-[40px] items-center gap-2 self-start text-[13.5px] text-ondeep/80 hover:text-accentlt">{t.toTop}<Arrow up className="h-3.5 w-3.5" /></a>
        </div>
        <p className="mt-2 max-w-3xl text-[12px] leading-relaxed text-ondeepm">{t.photos}</p>
        <p className="mt-3 text-[12px] leading-relaxed text-ondeepm">{t.pitch} <a href={PITCH_WA} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-accentlt">{t.pitchLink}</a></p>
      </div>
    </footer>
  )
}

export function Stars({ value, className = 'h-4 w-4' }: { value: number; className?: string }) {
  return <span className="inline-flex text-star" aria-hidden>{[0, 1, 2, 3, 4].map((i) => <svg key={i} viewBox="0 0 20 20" className={className} fill={value >= i + 0.75 ? 'currentColor' : value >= i + 0.25 ? 'url(#half)' : 'none'} stroke="currentColor" strokeWidth="1.2"><defs><linearGradient id="half"><stop offset="50%" stopColor="currentColor" /><stop offset="50%" stopColor="transparent" /></linearGradient></defs><path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8z" /></svg>)}</span>
}
