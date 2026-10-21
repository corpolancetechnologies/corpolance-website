import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router'
import { AlertCircle, ExternalLink, Info, Mail, Send } from 'lucide-react'
import { SERVICE_OPTIONS, serviceById } from '../../data/services'
import {
  ENQUIRY_TYPES,
  buildMailtoUrl,
  whatsAppUrlForEnquiry,
  type EnquiryTypeId,
  type EnquiryValues,
} from '../../lib/whatsapp'
import { cn } from '../../lib/cn'
import { WhatsAppIcon } from '../common/WhatsAppButton'

type Values = Required<EnquiryValues>
type Errors = Partial<Record<keyof Values, string>>

const EMPTY: Values = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  enquiryType: '',
  service: '',
  requirement: '',
  meetingTime: '',
  organization: '',
  engagement: '',
}

const ENGAGEMENT_OPTIONS = ['Project-based', 'Ongoing / long-term', 'Not sure yet']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(v: Values): Errors {
  const e: Errors = {}
  if (v.fullName.trim().length < 2) e.fullName = 'Please enter your full name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address, e.g. name@company.com.'
  const digits = v.phone.replace(/\D/g, '')
  if (!v.phone.trim()) e.phone = 'Please enter a contact or WhatsApp number.'
  else if (!/^[+\d\s().-]+$/.test(v.phone) || digits.length < 7 || digits.length > 15)
    e.phone = 'Please enter a valid number with country code, e.g. +1 555 123 4567.'
  if (!v.country.trim()) e.country = 'Please enter your country or region.'
  if (!v.enquiryType) e.enquiryType = 'Please choose the type of enquiry.'
  if (!v.service) e.service = 'Please choose the technology or service you need.'
  if (v.requirement.trim().length < 20)
    e.requirement = 'Please describe your requirement in a little more detail (at least 20 characters).'
  return e
}

/* ---------- field primitives ---------- */

interface FieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  children: (describedBy: string | undefined) => ReactNode
  className?: string
}

function Field({ id, label, required, error, hint, children, className }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-brand-600" aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (optional)</span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="mt-1 text-xs text-muted">
          {hint}
        </p>
      )}
      <div className="mt-2">{children(describedBy)}</div>
      {error && (
        <p id={errorId} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (invalid?: boolean) =>
  cn(
    'block w-full rounded-lg border bg-white px-3.5 py-2.5 text-[0.95rem] text-ink shadow-xs transition-[border-color,box-shadow] outline-none placeholder:text-muted/70',
    'focus:border-brand-500 focus:ring-4 focus:ring-brand-100',
    invalid ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-line hover:border-brand-200',
  )

/* ---------- form ---------- */

export function ContactForm() {
  const uid = useId()
  const [params] = useSearchParams()
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null)
  // Incremented on each submit attempt so focus moves to the summary or status message.
  const [attempt, setAttempt] = useState<{ n: number; ok: boolean }>({ n: 0, ok: false })
  const errorSummaryRef = useRef<HTMLDivElement>(null)
  const statusRef = useRef<HTMLDivElement>(null)

  // Preselect enquiry type / service from the URL after hydration (?type=agency&service=cloud-services).
  useEffect(() => {
    const type = params.get('type')
    const service = serviceById(params.get('service'))
    setValues((v) => ({
      ...v,
      enquiryType: ENQUIRY_TYPES.some((t) => t.id === type) ? (type as EnquiryTypeId) : v.enquiryType,
      service: service ? service.shortTitle : v.service,
    }))
  }, [params])

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
    setSubmittedUrl(null)
  }

  const showOrganization = values.enquiryType === 'agency' || values.enquiryType === 'organization'
  const showEngagement = values.enquiryType === 'organization'

  // Drop conditional values that no longer apply.
  const payload = (): Values => ({
    ...values,
    organization: showOrganization ? values.organization : '',
    engagement: showEngagement ? values.engagement : '',
  })

  useEffect(() => {
    if (attempt.n === 0) return
    ;(attempt.ok ? statusRef : errorSummaryRef).current?.focus()
  }, [attempt])

  const check = (): boolean => {
    const e = validate(values)
    setErrors(e)
    const ok = Object.keys(e).length === 0
    if (!ok) setAttempt((a) => ({ n: a.n + 1, ok: false }))
    return ok
  }

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (!check()) return
    const url = whatsAppUrlForEnquiry(payload())
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmittedUrl(url)
    setAttempt((a) => ({ n: a.n + 1, ok: true }))
  }

  const onEmail = () => {
    if (!check()) return
    window.location.href = buildMailtoUrl(payload())
  }

  const errorList = Object.entries(errors).filter(([, msg]) => Boolean(msg)) as [keyof Values, string][]
  const fid = (name: keyof Values) => `${uid}-${name}`

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby={`${uid}-intro`} className="space-y-6">
      <p id={`${uid}-intro`} className="text-sm text-muted">
        Fields marked <span className="text-brand-600">*</span> are required.
      </p>

      {errorList.length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 outline-none focus:ring-4 focus:ring-red-100"
        >
          <p className="font-semibold">Please check the following:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errorList.map(([key, msg]) => (
              <li key={key}>
                <a href={`#${fid(key)}`} className="underline underline-offset-2">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={fid('fullName')} label="Full name" required error={errors.fullName}>
          {(d) => (
            <input
              id={fid('fullName')}
              name="fullName"
              autoComplete="name"
              value={values.fullName}
              onChange={(e) => set('fullName', e.target.value)}
              aria-invalid={!!errors.fullName}
              aria-describedby={d}
              aria-required="true"
              className={inputClass(!!errors.fullName)}
            />
          )}
        </Field>
        <Field id={fid('email')} label="Email address" required error={errors.email}>
          {(d) => (
            <input
              id={fid('email')}
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              onChange={(e) => set('email', e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={d}
              aria-required="true"
              className={inputClass(!!errors.email)}
            />
          )}
        </Field>
        <Field id={fid('phone')} label="Contact / WhatsApp number" required error={errors.phone} hint="Include your country code.">
          {(d) => (
            <input
              id={fid('phone')}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+1 555 123 4567"
              value={values.phone}
              onChange={(e) => set('phone', e.target.value)}
              aria-invalid={!!errors.phone}
              aria-describedby={d}
              aria-required="true"
              className={inputClass(!!errors.phone)}
            />
          )}
        </Field>
        <Field id={fid('country')} label="Country or region" required error={errors.country} hint="e.g. United States, Germany, India.">
          {(d) => (
            <input
              id={fid('country')}
              name="country"
              autoComplete="country-name"
              value={values.country}
              onChange={(e) => set('country', e.target.value)}
              aria-invalid={!!errors.country}
              aria-describedby={d}
              aria-required="true"
              className={inputClass(!!errors.country)}
            />
          )}
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-ink">
          Enquiry type
          <span className="text-brand-600" aria-hidden="true">
            {' '}
            *
          </span>
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          {ENQUIRY_TYPES.map((t, i) => {
            const checked = values.enquiryType === t.id
            return (
              <label
                key={t.id}
                className={cn(
                  'relative flex cursor-pointer items-start gap-3 rounded-lg border p-3.5 text-sm transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand-100',
                  checked ? 'border-brand-500 bg-brand-50 text-navy-800' : 'border-line bg-white hover:border-brand-200',
                  errors.enquiryType && !checked && 'border-red-300',
                )}
              >
                <input
                  id={i === 0 ? fid('enquiryType') : undefined}
                  type="radio"
                  name="enquiryType"
                  value={t.id}
                  checked={checked}
                  onChange={() => set('enquiryType', t.id)}
                  className="mt-0.5 size-4 shrink-0 accent-brand-600"
                  aria-invalid={!!errors.enquiryType}
                  aria-describedby={errors.enquiryType ? `${fid('enquiryType')}-error` : undefined}
                />
                <span className="font-medium leading-snug">{t.label}</span>
              </label>
            )
          })}
        </div>
        {errors.enquiryType && (
          <p id={`${fid('enquiryType')}-error`} className="mt-1.5 flex items-start gap-1.5 text-sm text-red-700">
            <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {errors.enquiryType}
          </p>
        )}
      </fieldset>

      {(showOrganization || showEngagement) && (
        <div className="grid gap-5 sm:grid-cols-2">
          {showOrganization && (
            <Field id={fid('organization')} label={values.enquiryType === 'agency' ? 'Agency / company name' : 'Organization name'}>
              {(d) => (
                <input
                  id={fid('organization')}
                  name="organization"
                  autoComplete="organization"
                  value={values.organization}
                  onChange={(e) => set('organization', e.target.value)}
                  aria-describedby={d}
                  className={inputClass()}
                />
              )}
            </Field>
          )}
          {showEngagement && (
            <Field id={fid('engagement')} label="Engagement preference">
              {(d) => (
                <select
                  id={fid('engagement')}
                  name="engagement"
                  value={values.engagement}
                  onChange={(e) => set('engagement', e.target.value)}
                  aria-describedby={d}
                  className={inputClass()}
                >
                  <option value="">Select…</option>
                  {ENGAGEMENT_OPTIONS.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              )}
            </Field>
          )}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={fid('service')} label="Required technology or service" required error={errors.service}>
          {(d) => (
            <select
              id={fid('service')}
              name="service"
              value={values.service}
              onChange={(e) => set('service', e.target.value)}
              aria-invalid={!!errors.service}
              aria-describedby={d}
              aria-required="true"
              className={inputClass(!!errors.service)}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          )}
        </Field>
        <Field id={fid('meetingTime')} label="Preferred meeting time" hint="Include your time zone, e.g. weekdays after 10am EST.">
          {(d) => (
            <input
              id={fid('meetingTime')}
              name="meetingTime"
              value={values.meetingTime}
              onChange={(e) => set('meetingTime', e.target.value)}
              aria-describedby={d}
              className={inputClass()}
            />
          )}
        </Field>
      </div>

      <Field
        id={fid('requirement')}
        label="Requirement description"
        required
        error={errors.requirement}
        hint="Technologies involved, what you need help with, expected timeline and any experience requirements."
      >
        {(d) => (
          <textarea
            id={fid('requirement')}
            name="requirement"
            rows={6}
            value={values.requirement}
            onChange={(e) => set('requirement', e.target.value)}
            aria-invalid={!!errors.requirement}
            aria-describedby={d}
            aria-required="true"
            className={cn(inputClass(!!errors.requirement), 'resize-y')}
          />
        )}
      </Field>

      <div className="flex items-start gap-3 rounded-lg bg-brand-50 p-4 text-sm text-navy-700">
        <Info className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
        <p>
          Submitting opens WhatsApp with your enquiry pre-filled. <strong className="font-semibold">Review it and press send in WhatsApp</strong>{' '}
          to deliver it to our team. Nothing is sent from this website directly. See our{' '}
          <Link to="/privacy-policy" className="font-semibold underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 font-semibold text-white shadow-sm transition-colors hover:bg-[#0e7a40] focus-visible:outline-offset-2"
        >
          <WhatsAppIcon className="size-5" />
          Send Enquiry on WhatsApp
        </button>
        <button
          type="button"
          onClick={onEmail}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 text-sm font-semibold text-navy-800 transition-colors hover:border-brand-300 hover:bg-brand-50"
        >
          <Mail className="size-4" aria-hidden="true" />
          Send by email instead
        </button>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {submittedUrl && (
          <div className="rounded-lg border border-brand-200 bg-white p-5 text-sm shadow-card">
            <p className="flex items-center gap-2 font-semibold text-navy-800">
              <Send className="size-4 text-brand-600" aria-hidden="true" />
              Your message is ready in WhatsApp
            </p>
            <p className="mt-2 leading-relaxed text-body">
              We opened WhatsApp in a new tab with your enquiry pre-filled. Your enquiry reaches our team only after you
              press <strong>send</strong> in WhatsApp.
            </p>
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-600 underline-offset-2 hover:underline"
            >
              WhatsApp didn't open? Open it here
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </form>
  )
}
