'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { FileText, Ruler, MessageCircle, ArrowRight, Upload, X } from 'lucide-react'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447565169827'

type Route = 'drawings' | 'template' | 'survey' | null

// ── Shared field component ──────────────────────────────────────────
function Field({
  label, error, children,
}: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.14em] uppercase text-[#7a7570] block mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

function TextInput({
  value, onChange, placeholder, type = 'text',
}: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border border-[#e8e3dc] focus:border-[#1a1a1a] px-4 py-3 text-sm font-[300] text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c0bbb5]"
    />
  )
}

function SelectInput({
  value, onChange, options,
}: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#f8f5f0] border border-[#e8e3dc] focus:border-[#1a1a1a] px-4 py-3 text-sm font-[300] text-[#1a1a1a] outline-none transition-colors appearance-none"
    >
      <option value="">Select…</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  )
}

function TextArea({
  value, onChange, placeholder, rows = 4,
}: { value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
  return (
    <textarea
      rows={rows}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-transparent border border-[#e8e3dc] focus:border-[#1a1a1a] px-4 py-3 text-sm font-[300] text-[#1a1a1a] outline-none transition-colors resize-none placeholder:text-[#c0bbb5]"
    />
  )
}

// ── File upload area ────────────────────────────────────────────────
function FileUpload({
  files, onChange, accept, label,
}: {
  files: File[]
  onChange: (files: File[]) => void
  accept: string
  label: string
}) {
  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const dropped = Array.from(e.dataTransfer.files)
    onChange([...files, ...dropped].slice(0, 5))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? [])
    onChange([...files, ...selected].slice(0, 5))
  }

  function remove(i: number) {
    onChange(files.filter((_, idx) => idx !== i))
  }

  return (
    <div>
      <label className="text-[10px] tracking-[0.14em] uppercase text-[#7a7570] block mb-2">{label}</label>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border border-dashed border-[#e8e3dc] hover:border-[#b5922a] transition-colors p-8 text-center cursor-pointer relative"
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <Upload size={20} className="text-[#7a7570] mx-auto mb-3" />
        <p className="text-sm font-[300] text-[#7a7570]">Drag files here or <span className="text-[#1a1a1a] underline">click to browse</span></p>
        <p className="text-xs text-[#c0bbb5] mt-1">DWG, DXF, PDF, JPG, PNG · Max 50MB · Up to 5 files</p>
        <input
          id="file-input"
          type="file"
          multiple
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />
      </div>
      {files.length > 0 && (
        <div className="mt-3 flex flex-col gap-2">
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between bg-[#e8e3dc] px-4 py-2">
              <span className="text-xs font-[300] text-[#1a1a1a] truncate">{f.name}</span>
              <button onClick={() => remove(i)} className="text-[#7a7570] hover:text-[#1a1a1a] ml-4 flex-shrink-0">
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Common fields used by all routes ────────────────────────────────
function CommonFields({
  data, onChange, errors,
}: {
  data: Record<string, string>
  onChange: (k: string, v: string) => void
  errors: Record<string, string>
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Field label="Full name *" error={errors.fullName}>
        <TextInput value={data.fullName ?? ''} onChange={(v) => onChange('fullName', v)} placeholder="Your name" />
      </Field>
      <Field label="Company" error={errors.company}>
        <TextInput value={data.company ?? ''} onChange={(v) => onChange('company', v)} placeholder="Optional" />
      </Field>
      <Field label="Email *" error={errors.email}>
        <TextInput type="email" value={data.email ?? ''} onChange={(v) => onChange('email', v)} placeholder="your@email.com" />
      </Field>
      <Field label="Phone / WhatsApp">
        <TextInput value={data.phone ?? ''} onChange={(v) => onChange('phone', v)} placeholder="Optional" />
      </Field>
    </div>
  )
}

// ── Route: Drawings ──────────────────────────────────────────────────
function DrawingsForm({
  data, onChange, files, onFiles, errors,
}: {
  data: Record<string, string>
  onChange: (k: string, v: string) => void
  files: File[]
  onFiles: (f: File[]) => void
  errors: Record<string, string>
}) {
  return (
    <div className="flex flex-col gap-5">
      <CommonFields data={data} onChange={onChange} errors={errors} />

      <FileUpload
        files={files}
        onChange={onFiles}
        accept=".dwg,.dxf,.pdf,.jpg,.jpeg,.png"
        label="Upload drawings *"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Field label="Width (mm) *" error={errors.width}>
          <TextInput value={data.width ?? ''} onChange={(v) => onChange('width', v)} placeholder="e.g. 600" />
        </Field>
        <Field label="Height (mm) *" error={errors.height}>
          <TextInput value={data.height ?? ''} onChange={(v) => onChange('height', v)} placeholder="e.g. 400" />
        </Field>
        <Field label="Depth / thickness (mm)">
          <TextInput value={data.depth ?? ''} onChange={(v) => onChange('depth', v)} placeholder="Optional" />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Material preference">
          <SelectInput
            value={data.material ?? ''}
            onChange={(v) => onChange('material', v)}
            options={[
              { value: 'brass', label: 'Brass' },
              { value: 'bronze', label: 'Bronze-style' },
              { value: 'aluminium', label: 'Aluminium' },
              { value: 'mild-steel', label: 'Mild steel' },
              { value: 'stainless', label: 'Stainless steel' },
              { value: 'stone', label: 'Stone' },
              { value: 'unsure', label: 'Not sure yet' },
            ]}
          />
        </Field>
        <Field label="Required tolerance">
          <SelectInput
            value={data.tolerance ?? ''}
            onChange={(v) => onChange('tolerance', v)}
            options={[
              { value: 'standard', label: 'Standard ±1mm' },
              { value: 'tight', label: 'Tight ±0.5mm' },
              { value: 'unspecified', label: 'Not specified' },
            ]}
          />
        </Field>
      </div>

      <Field label="Quantity *" error={errors.quantity}>
        <TextInput value={data.quantity ?? ''} onChange={(v) => onChange('quantity', v)} placeholder="e.g. 2" />
      </Field>

      <Field label="Additional notes">
        <TextArea value={data.notes ?? ''} onChange={(v) => onChange('notes', v)} placeholder="Fixing assumptions, finish details, rebate depth, any other requirements…" rows={4} />
      </Field>
    </div>
  )
}

// ── Route: Template ──────────────────────────────────────────────────
function TemplateForm({
  data, onChange, files, onFiles, errors,
}: {
  data: Record<string, string>
  onChange: (k: string, v: string) => void
  files: File[]
  onFiles: (f: File[]) => void
  errors: Record<string, string>
}) {
  return (
    <div className="flex flex-col gap-5">
      <CommonFields data={data} onChange={onChange} errors={errors} />

      <FileUpload
        files={files}
        onChange={onFiles}
        accept=".pdf,.jpg,.jpeg,.png"
        label="Upload photos or sketches (optional)"
      />

      <Field label="Product type">
        <SelectInput
          value={data.productType ?? ''}
          onChange={(v) => onChange('productType', v)}
          options={[
            { value: 'grill', label: 'Grill / Vent' },
            { value: 'inlay', label: 'Joinery Inlay' },
            { value: 'screen', label: 'Screen / Divider' },
            { value: 'panel', label: 'Wall Panel' },
            { value: 'other', label: 'Other / Not sure' },
          ]}
        />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Approximate width (mm or cm)">
          <TextInput value={data.width ?? ''} onChange={(v) => onChange('width', v)} placeholder="e.g. 600mm" />
        </Field>
        <Field label="Approximate height (mm or cm)">
          <TextInput value={data.height ?? ''} onChange={(v) => onChange('height', v)} placeholder="e.g. 400mm" />
        </Field>
      </div>

      <Field label="Material preference">
        <SelectInput
          value={data.material ?? ''}
          onChange={(v) => onChange('material', v)}
          options={[
            { value: 'brass', label: 'Brass' },
            { value: 'bronze', label: 'Bronze-style' },
            { value: 'aluminium', label: 'Aluminium' },
            { value: 'mild-steel', label: 'Mild steel' },
            { value: 'stainless', label: 'Stainless steel' },
            { value: 'unsure', label: 'Not sure yet' },
          ]}
        />
      </Field>

      <Field label="Additional notes">
        <TextArea value={data.notes ?? ''} onChange={(v) => onChange('notes', v)} placeholder="Describe what you're trying to achieve — even a rough idea helps…" rows={4} />
      </Field>
    </div>
  )
}

// ── Route: Survey ────────────────────────────────────────────────────
function SurveyForm({
  data, onChange, errors,
}: {
  data: Record<string, string>
  onChange: (k: string, v: string) => void
  errors: Record<string, string>
}) {
  return (
    <div className="flex flex-col gap-5">
      <CommonFields data={data} onChange={onChange} errors={errors} />

      <Field label="Project address / site location *" error={errors.address}>
        <TextArea value={data.address ?? ''} onChange={(v) => onChange('address', v)} placeholder="Site address or general area" rows={2} />
      </Field>

      <Field label="What needs to be fabricated? *" error={errors.description}>
        <TextArea value={data.description ?? ''} onChange={(v) => onChange('description', v)} placeholder="Describe the component — size, material, application…" rows={4} />
      </Field>

      <Field label="Access or site restrictions">
        <TextArea value={data.access ?? ''} onChange={(v) => onChange('access', v)} placeholder="Restricted hours, scaffold access, key holder arrangements…" rows={2} />
      </Field>

      <Field label="Preferred survey window">
        <TextInput value={data.surveyDate ?? ''} onChange={(v) => onChange('surveyDate', v)} placeholder="e.g. Week of 12 May, mornings preferred" />
      </Field>

      <Field label="Site contact (if different)">
        <TextInput value={data.siteContact ?? ''} onChange={(v) => onChange('siteContact', v)} placeholder="Name and number" />
      </Field>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────
export default function StartProjectContent() {
  const searchParams = useSearchParams()
  const [route, setRoute] = useState<Route>(null)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Read ?route= from URL (e.g. from homepage CTAs)
  useEffect(() => {
    const r = searchParams.get('route') as Route
    if (r && ['drawings', 'template', 'survey'].includes(r)) setRoute(r)
  }, [searchParams])

  function setField(k: string, v: string) {
    setFormData((prev) => ({ ...prev, [k]: v }))
    if (errors[k]) setErrors((prev) => { const e = { ...prev }; delete e[k]; return e })
  }

  function validate() {
    const e: Record<string, string> = {}
    if (!formData.fullName?.trim()) e.fullName = 'Required'
    if (!formData.email?.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email'

    if (route === 'drawings') {
      if (!formData.width?.trim()) e.width = 'Required'
      if (!formData.height?.trim()) e.height = 'Required'
      if (!formData.quantity?.trim()) e.quantity = 'Required'
    }
    if (route === 'survey') {
      if (!formData.address?.trim()) e.address = 'Required'
      if (!formData.description?.trim()) e.description = 'Required'
    }
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Placeholder — wired to Supabase in backend step
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
  }

  const routes = [
    {
      id: 'drawings' as Route,
      icon: FileText,
      title: 'I have drawings',
      body: 'Upload DWG, DXF or PDF — fast technical review',
      cta: 'Upload Drawing',
    },
    {
      id: 'template' as Route,
      icon: Ruler,
      title: 'I need help measuring',
      body: 'We provide template guidance or survey — reduce risk on site',
      cta: 'Get Template Guide',
    },
    {
      id: 'survey' as Route,
      icon: MessageCircle,
      title: 'Request a site survey',
      body: 'We visit and measure on-site — full risk reduction',
      cta: 'Request Survey',
    },
  ]

  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="bg-[#1a1a1a] pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Get started</p>
          <h1 className="text-[#f8f5f0] text-4xl md:text-5xl font-[200] tracking-[-0.02em]">
            Start your project
          </h1>
          <div className="w-10 h-px bg-[#b5922a] mt-6 mb-6" />
          <p className="text-[#7a7570] text-base font-[300] max-w-xl leading-relaxed">
            Send us your drawings, dimensions, or photographs. We&apos;ll review everything, ask the right questions, and give you a quote with every assumption clearly stated.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Route selector */}
        <div className="mb-12">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-6">Choose your route</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e3dc]">
            {routes.map((r) => {
              const Icon = r.icon
              const active = route === r.id
              return (
                <button
                  key={r.id}
                  onClick={() => { setRoute(r.id); setFormData({}); setFiles([]); setErrors({}) }}
                  className={`group text-left p-8 transition-colors ${active ? 'bg-[#1a1a1a]' : 'bg-[#f8f5f0] hover:bg-[#f0ebe4]'}`}
                >
                  <div className={`w-6 h-px mb-6 transition-colors ${active ? 'bg-[#b5922a]' : 'bg-[#e8e3dc] group-hover:bg-[#b5922a]'}`} />
                  <Icon size={18} className={`mb-4 transition-colors ${active ? 'text-[#b5922a]' : 'text-[#7a7570]'}`} strokeWidth={1.5} />
                  <h3 className={`text-base font-[300] mb-2 transition-colors ${active ? 'text-[#f8f5f0]' : 'text-[#1a1a1a]'}`}>
                    {r.title}
                  </h3>
                  <p className={`text-sm font-[300] leading-relaxed transition-colors ${active ? 'text-[#7a7570]' : 'text-[#7a7570]'}`}>
                    {r.body}
                  </p>
                </button>
              )
            })}
          </div>
        </div>

        {/* Form — shown once route is selected */}
        {route && !submitted && (
          <form onSubmit={handleSubmit} noValidate>
            <div className="max-w-2xl">
              <div className="w-px bg-[#e8e3dc] mb-8" />

              {route === 'drawings' && (
                <DrawingsForm data={formData} onChange={setField} files={files} onFiles={setFiles} errors={errors} />
              )}
              {route === 'template' && (
                <TemplateForm data={formData} onChange={setField} files={files} onFiles={setFiles} errors={errors} />
              )}
              {route === 'survey' && (
                <SurveyForm data={formData} onChange={setField} errors={errors} />
              )}

              {/* Trust line */}
              <div className="flex flex-wrap gap-6 mt-8 mb-8">
                {['Approval before fabrication', 'Response within 24 hours', 'No obligation'].map((t) => (
                  <span key={t} className="flex items-center gap-2 text-xs text-[#7a7570] font-[300]">
                    <span className="text-[#b5922a]">✔</span>{t}
                  </span>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-[#f8f5f0] text-xs font-[400] tracking-[0.1em] uppercase hover:bg-[#b5922a] transition-colors disabled:opacity-50"
              >
                {loading ? 'Submitting…' : (
                  <>
                    <ArrowRight size={14} />
                    Submit Enquiry
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Success state */}
        {submitted && (
          <div className="max-w-xl bg-[#f8f5f0] border border-[#e8e3dc] p-12">
            <div className="w-8 h-px bg-[#b5922a] mb-8" />
            <h2 className="text-[#1a1a1a] text-2xl font-[200] mb-4">
              Enquiry received
            </h2>
            <p className="text-[#7a7570] text-sm font-[300] leading-relaxed mb-8">
              Thank you, {formData.fullName?.split(' ')[0]}. We&apos;ll review your submission and be in touch within 1 working day with a clear next step.
            </p>
            <div className="flex flex-col gap-3 text-sm font-[300]">
              {[
                'Technical review underway',
                'Quote with all assumptions stated',
                'Your approval before anything is made',
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="text-[#b5922a] text-xs w-5 flex-shrink-0">{`0${i + 1}`}</span>
                  <span className="text-[#7a7570]">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-[#7a7570] text-xs mt-8 font-[300]">
              Need it faster?{' '}
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C+I+just+submitted+an+enquiry+and+wanted+to+follow+up`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a] underline"
              >
                WhatsApp us directly
              </a>
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
