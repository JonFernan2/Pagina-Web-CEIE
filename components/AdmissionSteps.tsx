interface Step {
  number: number
  title: string
  desc: string
}

interface AdmissionStepsProps {
  steps: Step[]
}

export default function AdmissionSteps({ steps }: AdmissionStepsProps) {
  return (
    <div className="relative font-body">
      {/* Connecting line (desktop) */}
      <div
        className="hidden md:block absolute top-8 left-0 right-0 h-0.5"
        style={{ background: '#E5E3DE', zIndex: 0 }}
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center">
            {/* Number circle */}
            <div
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full font-display font-bold text-xl mb-4"
              style={{
                background: '#1d1e20',
                color: '#6493b5',
                border: '3px solid #6493b5',
              }}
            >
              {step.number}
            </div>
            <h3 className="font-body text-base font-semibold text-negro mb-2">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
