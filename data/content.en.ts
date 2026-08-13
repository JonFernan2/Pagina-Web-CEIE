export const NAV_EN = {
  logo: { ceie: 'CEIE', uai: 'Universidad Adolfo Ibáñez' },
  links: [
    { label: 'About Us',                href: '/en/about-us' },
    { label: 'Teaching Team',           href: '/en/teaching-team' },
    { label: 'Programs & Courses',      href: '/en/programs-and-courses' },
    { label: 'Voices of the Centre',    href: '/en/voices-of-the-centre' },
  ],
  cta: { label: 'Apply Now', href: '/en/admissions' },
}

export const FOOTER_EN = {
  col1: {
    description: 'Spanish Language Teaching Centre. SACIC accreditation process · Instituto Cervantes.',
    badges: ['CNA Excellence Accreditation', 'Triple Crown Recognition'],
  },
  col2: {
    title: 'Navigation',
    links: [
      { label: 'About Us',               href: '/en/about-us' },
      { label: 'Teaching Team',          href: '/en/teaching-team' },
      { label: 'Programs & Courses',     href: '/en/programs-and-courses' },
      { label: 'Voices of the Centre',   href: '/en/voices-of-the-centre' },
      { label: 'Apply Now',              href: '/en/admissions' },
      { label: 'Contact',                href: '/en/contact' },
    ],
  },
  col3: {
    title: 'Programs',
    links: [
      { label: 'Semester Program',       href: '/en/programs-and-courses/semester' },
      { label: 'Intensive Program',      href: '/en/programs-and-courses/intensive' },
      { label: 'Specific Purposes',      href: '/en/programs-and-courses/specific-purposes' },
      { label: 'Individual Program',     href: '/en/programs-and-courses/individual' },
    ],
  },
  col4: {
    title: 'Contact',
    address: 'Viña del Mar Campus · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    social: ['@uai.internacional', '@artesliberalesuai'],
  },
  legal: {
    links: [
      { label: 'Legal Notice',           href: '/en/legal-notice' },
      { label: 'Privacy Policy',         href: '/en/privacy-policy' },
      { label: 'Cookie Policy',          href: '/en/cookie-policy' },
      { label: 'Terms & Conditions',     href: '/en/terms-and-conditions' },
      { label: 'Withdrawal Rights',      href: '/en/withdrawal-rights' },
    ],
    copyright: '© 2026 Universidad Adolfo Ibáñez — Centro de Enseñanza Integral del Español',
  },
}

export const HOME_EN = {
  meta: {
    title: 'CEIE UAI — Learn Spanish in Chile | Universidad Adolfo Ibáñez',
    description: 'Study Spanish on the South Pacific coast. Four programs aligned with the Common European Framework of Reference. SACIC accreditation process · Instituto Cervantes.',
  },
  hero: {

    h1: 'Learn Spanish\non the South Pacific',
    subtitle: 'Spanish Language Teaching Centre · Universidad Adolfo Ibáñez · Viña del Mar, Chile',
    cta1: { label: 'View programs', href: '/en/programs-and-courses' },
    cta2: { label: 'Contact us', href: '/en/contact' },
  },
  valueProps: {
    title: 'Why study Spanish at UAI',
    cards: [
      {
        icon: 'GraduationCap',
        title: 'Academic Excellence',
        text: 'Courses aligned with the Common European Framework of Reference, levels A1–C1, with recognized academic credits and the Liberal Arts seal of UAI.',
      },
      {
        icon: 'MapPin',
        title: 'Cultural Immersion',
        text: 'Learn Spanish by living Chile: Valparaíso, Viña del Mar, the Casablanca Valley vineyards. A campus facing the Pacific where the language is practiced inside and outside the classroom.',
      },
      {
        icon: 'Laptop',
        title: 'Active Methodology',
        text: 'Institutional digital platforms, contextualized materials, and learning oriented toward real academic and professional environments.',
      },
      {
        icon: 'Globe',
        title: 'International Network',
        text: 'A university community with students from over 20 countries. Student organizations, cultural workshops, and activities alongside Chilean and international UAI students.',
      },
    ],
  },
  programs: {
    title: 'Spanish Programs',
    subtitle: 'Four modalities designed for distinct academic and professional profiles',
    items: [
      {
        nombre: 'Semester Program',
        descripcion: 'Regular courses by CEFR level. Structured progression from A1 to C1 with academic credits, cultural activities, and Liberal Arts seminars.',
        nivel: 'A1 to C1',
        duracion: '15–18 weeks',
        horario: 'Morning (9:00–12:00) or afternoon (14:00–17:00), 3 days/week',
        grupoMax: 'Max. 12 students',
        precioReferencial: 'From USD 950/course',
        href: '/en/programs-and-courses/semester',
      },
      {
        nombre: 'Intensive Program',
        descripcion: 'Total immersion in 2 to 3 weeks. Ideal for exchange students and professionals with limited time seeking rapid progress.',
        nivel: 'A1 to B2',
        duracion: '2–3 weeks',
        horario: 'Monday to Friday, 4 hours/day',
        grupoMax: 'Max. 10 students',
        precioReferencial: 'From USD 300',
        href: '/en/programs-and-courses/intensive',
      },
      {
        nombre: 'Specific Purposes Programs',
        descripcion: 'Spanish for business, diplomacy, academic research, or specific sectors. Designed for organizations and institutional groups.',
        nivel: 'According to institutional requirements',
        duracion: '1–2 weeks (tailored)',
        horario: 'Coordinated with the client organization',
        grupoMax: 'Variable by agreement',
        precioReferencial: 'USD 900–1,500',
        href: '/en/programs-and-courses/specific-purposes',
      },
      {
        nombre: 'Individual Program — Spanish to Measure',
        descripcion: 'One-on-one classes designed around the student\'s objectives, level, and schedule. Available on campus or in-situ at the client\'s location.',
        nivel: 'All levels',
        duracion: 'Flexible',
        horario: 'Agreed with the student',
        grupoMax: '1 student',
        precioReferencial: 'From USD 1,000',
        href: '/en/programs-and-courses/individual',
      },
    ],
  },
  payment: {
    title: 'Enrollment and payment',
    col1: {
      title: 'Payment methods',
      items: [
        'International bank transfer (SWIFT)',
        'Credit card (Visa / Mastercard)',
        'Institutional agreement / sponsorship letter',
      ],
    },
    col2: {
      title: 'Enrollment conditions',
      items: [
        'Payment prior to program start date',
        'Place reservation: 30% of the total amount at enrollment',
        'Balance: up to 5 business days before the start date',
      ],
    },
    col3: {
      title: 'Cancellation policy',
      items: [
        '45+ days in advance: no charge',
        '15–44 days in advance: 50% charge',
        'Less than 15 days: no refund',
        'Force majeure: evaluated individually',
      ],
      link: { label: 'Full terms & conditions', href: '/en/terms-and-conditions' },
      disclaimer: 'Cancellations valid only in writing to caroline.cortes@uai.cl with confirmed receipt.',
    },
  },
  accreditation: {
    title: 'Certified quality',
    p1: 'CEIE is currently undergoing the SACIC accreditation process of Instituto Cervantes, the global benchmark standard for Spanish as a foreign language teaching centres.',
    p2: 'UAI holds CNA Excellence Accreditation from Chile\'s National Accreditation Commission and Triple Crown recognition, backing the academic quality of all its programs.',
    badges: [
      'SACIC · Instituto Cervantes · Accreditation process 2026',
      'CNA Excellence Accreditation',
      'Triple Crown Recognition',
    ],
  },
  testimonials: {
    title: 'Voices of the Centre',
    items: [
      {
        initials: 'A.M.',
        country: 'United States',
        program: 'Semester Program',
        level: 'Level B2',
        text: '[PENDING — real student testimonial]',
      },
      {
        initials: 'K.L.',
        country: 'Germany',
        program: 'Intensive Program',
        level: 'Level B1',
        text: '[PENDING — real student testimonial]',
      },
      {
        initials: 'C.P.',
        country: 'Canada',
        program: 'Specific Purposes Program',
        level: 'Level B2+',
        text: '[PENDING — real student testimonial]',
      },
    ],
    readMoreLink: { label: 'Read more testimonials', href: '/en/voices-of-the-centre' },
  },
  contact: {
    title: 'Location and contact',
    address: 'Viña del Mar Campus · Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: 'Monday to Friday, 9:00 AM – 6:00 PM',
    mapPlaceholder: 'Map: UAI Viña del Mar Campus — Padre Hurtado 750',
  },
}

export const PROGRAMS_EN = {
  meta: {
    title: 'Programs & Courses | CEIE UAI',
    description: 'Four Spanish programs: Semester, Intensive, Specific Purposes, and Individual. CEFR levels A1–C1. UAI Viña del Mar.',
  },
  hero: {
    h1: 'Our Spanish Programs',
    subtitle: 'Four modalities aligned with the Common European Framework of Reference (CEFR) and the Instituto Cervantes Curricular Plan.',
  },
  intro: {
    p1: 'All CEIE programs are designed under the communicative approach established by Instituto Cervantes. Each level corresponds to a descriptor of the CEFR, from A1 (beginner) to C1 (advanced).',
    p2: 'Students receive a certificate issued by Universidad Adolfo Ibáñez upon completing each program. Academic equivalencies are established through UAI\'s international partnership agreements.',
  },
}

export const ABOUT_EN = {
  meta: {
    title: 'About Us | CEIE UAI',
    description: 'Learn about CEIE: mission, accreditation process, campus facilities, and UAI\'s institutional framework.',
  },
  hero: { h1: 'About CEIE' },
  sections: {
    mision: {
      title: 'Mission and vision',
      mision: 'To offer high-quality Spanish as a Foreign Language programs, grounded in the communicative approach of Instituto Cervantes and the Liberal Arts educational values of Universidad Adolfo Ibáñez.',
      vision: 'To become the reference Spanish language centre in the South Pacific, recognized for its academic rigor, international accreditation, and cultural engagement with Chile.',
    },
    contexto: {
      title: 'Institutional context',
      p1: 'CEIE operates within the Directorate of International Relations at UAI, in academic collaboration with the Faculty of Liberal Arts. It was established in 2026 with the mission of serving international students, professionals, diplomatic missions, and partner institutions.',
      p2: 'UAI holds CNA Excellence Accreditation and Triple Crown recognition — placing it among a select group of Latin American universities with simultaneous accreditation from AACSB, AMBA, and EQUIS. The centre operates from the Viña del Mar campus, with a presence in Santiago.',
      kpis: [
        { value: '2026', label: 'Year established' },
        { value: '4', label: 'Spanish programs' },
        { value: '20+', label: 'Countries represented' },
        { value: 'A1–C1', label: 'CEFR levels' },
      ],
    },
    sacic: {
      title: 'SACIC Accreditation',
      p1: 'CEIE is currently undergoing the SACIC accreditation process of Instituto Cervantes — the international quality standard for Spanish language teaching centres. SACIC evaluates teaching quality, curriculum design, physical and digital facilities, and institutional transparency.',
      p2: 'Phase 2 of the in-class evaluation by Instituto Cervantes assessors is scheduled for October–November 2026. Accreditation is an ongoing commitment: once obtained, it requires periodic renewal.',
      status: 'Current status: In process · Phase 2 evaluation scheduled for October–November 2026',
    },
    espacios: {
      title: 'Our Facilities',
      spaces: [
        {
          nombre: 'Spanish classrooms',
          descripcion: 'Rooms equipped with audiovisual technology, flexible seating configuration, and capacity for up to 12 students. Designed for active-participatory methodology.',
          alt: 'Spanish language classroom at UAI Viña del Mar campus, with movable chairs, whiteboard, and projector, capacity for 12 students.',
        },
        {
          nombre: 'UAI Library',
          descripcion: 'Spanish and English collection with access for international students. Holdings in literature, humanities, and social sciences. Silent reading areas.',
          alt: 'Universidad Adolfo Ibáñez library at Viña del Mar campus, with bookshelves and individual reading area.',
        },
        {
          nombre: 'Study rooms',
          descripcion: 'Group and individual workspaces distributed across campus. Access with CEIE student credential.',
          alt: 'Group study room at UAI Viña del Mar campus with work tables and wifi access.',
        },
        {
          nombre: 'Viña del Mar — Campus setting',
          descripcion: 'The campus is located facing the Pacific in Viña del Mar, 15 minutes from Valparaíso and 1.5 hours from Santiago. A unique linguistic and cultural immersion environment in South America.',
          alt: 'UAI Viña del Mar campus facing the Pacific Ocean, with the city of Viña del Mar in the background.',
        },
        {
          nombre: 'Cultural activities',
          descripcion: 'Excursions to Casablanca Valley wineries, heritage tours of Valparaíso, and seminars with UAI academics. An integrated component of all programs.',
          alt: 'International CEIE students participating in a cultural activity in Valparaíso, Chile.',
        },
      ],
    },
  },
}

export const ADMISSIONS_EN = {
  meta: {
    title: 'Admissions | CEIE UAI',
    description: 'Apply to a CEIE Spanish program. Simple process, flexible start dates.',
  },
  hero: {
    h1: 'Admissions',
    subtitle: 'Apply in minutes. Our team will contact you within 48 business hours.',
  },
  steps: [
    { number: 1, title: 'Online application',  desc: 'Complete the form on this page with your information and program of interest.' },
    { number: 2, title: 'Level assessment',    desc: 'We send you a diagnostic test by email. Takes approximately 20 minutes.' },
    { number: 3, title: 'Place confirmation',  desc: 'We confirm your enrollment, level group, and start date by email.' },
    { number: 4, title: 'Enrollment payment',  desc: '30% of the total program fee secures your place.' },
    { number: 5, title: 'Program start',       desc: 'Welcome session and orientation on your first day.' },
  ],
  requirements: {
    title: 'Admission requirements',
    table: {
      headers: ['Program', 'Level required', 'Documents'],
      rows: [
        ['Semester Program',    'A1 (no prior knowledge required)', 'Passport / ID. Passport photo.'],
        ['Intensive Program',   'A1 (no prior knowledge required)', 'Passport / ID. Passport photo.'],
        ['Specific Purposes',   'As per program',                   'Sponsoring organization letter.'],
        ['Individual Program',  'None',                             'Passport / ID. Learning objectives.'],
      ],
    },
  },
  form: {
    title: 'Application form',
    fields: {
      name:       'Full name',
      country:    'Country of residence',
      email:      'Email address',
      phone:      'Phone (optional)',
      program:    'Program of interest',
      level:      'Approximate Spanish level',
      levelOpts:  ['None', 'A1', 'A2', 'B1', 'B2', 'C1', "I don't know"],
      startDate:  'Preferred start date',
      message:    'Message / additional context',
      privacy:    'I accept the privacy policy',
      submit:     'Submit application',
      success:    'Thank you — your application has been received. We will contact you within 48 business hours.',
    },
  },
  cohorts: {
    title: 'Upcoming cohorts',
    intro: 'Start dates follow this structure for each program type:',
    rows: [
      {
        program: 'Semester / Intensive',
        schedule: 'Follows the Chilean academic calendar',
        detail: 'Southern Hemisphere — 1st semester: March – July · 2nd semester: August – December',
      },
      {
        program: 'Specific Purposes',
        schedule: 'Date to be agreed between both parties',
        detail: '',
      },
      {
        program: 'Individual',
        schedule: 'Continuous enrollment',
        detail: 'Immediate start available upon confirmation',
      },
    ] as { program: string; schedule: string; detail: string }[],
  },
}

export const VOICES_EN = {
  meta: {
    title: 'Voices of the Centre | CEIE UAI',
    description: 'Read the experiences of students who have studied Spanish at CEIE UAI.',
  },
  hero: {
    h1: 'Voices of the Centre',
    subtitle: 'Experiences from students who have studied Spanish at CEIE, Universidad Adolfo Ibáñez.',
  },
}

export const CONTACT_EN = {
  meta: {
    title: 'Contact | CEIE UAI',
    description: 'Contact the CEIE team for information about Spanish programs at UAI.',
  },
  hero: { h1: 'Contact' },
  form: {
    title: 'Send us a message',
    fields: {
      name:         'Full name',
      organization: 'Organization (optional)',
      country:      'Country',
      email:        'Email',
      phone:        'Phone (optional)',
      program:      'Program of interest',
      message:      'Message',
      submit:       'Send message',
      success:      'Message received. We will reply within 2 business days.',
    },
  },
  info: {
    title: 'Contact information',
    campus: 'Viña del Mar Campus',
    address: 'Padre Hurtado 750, Viña del Mar, Chile',
    phone: '(56 32) 250 3500',
    emails: ['caroline.cortes@uai.cl', 'programascortos@uai.cl'],
    hours: 'Monday to Friday · 9:00 AM – 6:00 PM',
    social: ['Instagram: @uai.internacional'],
  },
}

export const LEGAL_EN = {
  alert: {
    title: '⚠️ CONTENT PENDING LEGAL REVIEW',
    body: "The content of this page is being drafted by UAI's legal counsel. This is a structural placeholder for the SACIC accreditation process.",
  },
  legalNotice: {
    title: 'Legal Notice',
    sections: [
      { heading: 'Identity of the data controller', body: 'Universidad Adolfo Ibáñez · RUT: [PENDING — UAI legal counsel] · Padre Hurtado 750, Viña del Mar, Chile.' },
      { heading: 'Purpose of the centre', body: 'CEIE offers Spanish as a Foreign Language programs at university level. It operates under the Directorate of International Relations of UAI.' },
      { heading: 'Website responsibility', body: '[PENDING — UAI legal counsel]' },
      { heading: 'Intellectual property', body: '[PENDING — UAI legal counsel]' },
      { heading: 'Limitation of liability', body: 'Accuracy of content: The contents of this website are provided for informational purposes only. Universidad Adolfo Ibáñez makes reasonable efforts to keep them up to date and accurate, but does not guarantee their completeness or freedom from error. It reserves the right to modify, correct, or remove information at any time and without prior notice. Availability of service: The Centre does not guarantee continuous or uninterrupted availability of the website or the absence of technical errors. No liability is assumed for interruptions arising from maintenance, technical failures, cyberattacks, or causes beyond the Centre\'s control. Third-party content and external links: The site may contain links to third-party pages. UAI does not control or accept responsibility for the content, accuracy, legality, or functioning of such sites. The inclusion of a link does not imply endorsement or any relationship with the third party. Limited contractual liability: In the context of educational service agreements, the Centre\'s liability is limited to the value of the contracted programme. The Centre shall not be liable for indirect damages, loss of profit, loss of opportunity, or consequential losses, except in cases of wilful misconduct or gross negligence. Force majeure: The Centre assumes no liability for failure to fulfil its obligations where such failure results from force majeure circumstances — including natural disasters, health measures imposed by competent authority, social conflicts, or infrastructure failures beyond the Centre\'s control — provided that such circumstances are duly notified to the Student as soon as reasonably possible.' },
      { heading: 'Applicable law', body: 'Chilean law. Jurisdiction: courts of Viña del Mar, Chile.' },
    ],
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    sections: [
      { heading: 'Privacy Policy', body: 'By accessing the CEIE UAI website, the user accepts this Privacy Policy. Universidad Adolfo Ibáñez reserves the right to modify this policy at any time; it is the user\'s responsibility to read and comply with it on each visit.' },
      { heading: 'Access to information', body: 'The contents of the CEIE UAI website are free of charge and publicly accessible.' },
      { heading: 'User information', body: 'UAI collects visitor data to record browsing activity and audience metrics without requiring personal identification. Personal information is only requested voluntarily through contact forms, for the purpose of providing information about academic programmes of interest. Users may request unsubscription at any time. Collected information is not shared with third parties.' },
      { heading: 'Disclosure to third parties', body: 'UAI does not communicate or transfer personal data to third parties without the express consent of the data subject, except where required by judicial or administrative authority under applicable Chilean law.' },
      { heading: 'Use of information', body: 'All rights to the CEIE UAI website belong to Universidad Adolfo Ibáñez. Visitors may use its contents for personal, non-commercial purposes. UAI accepts no responsibility for the accuracy of external links. Reproduction of content is permitted with attribution to the source, except for the institutional brand and logo.' },
      { heading: 'Cookies', body: 'Cookies are files that record pages visited and frequency of access, used solely for statistical analysis and deleted permanently afterwards. Users may delete or decline cookies through their browser settings; declining cookies may limit access to certain site services.' },
      { heading: 'External services', body: 'This site uses the YouTube API to display audiovisual content. UAI accepts no responsibility for how YouTube or Google may use user data. Users are referred to the YouTube Terms of Service and Google Privacy Policy for further information.' },
    ],
  },
  cookiePolicy: {
    title: 'Cookie Policy',
    sections: [
      { heading: 'What are cookies', body: 'Cookies are small text files stored by your browser when you visit a website. They allow the site to remember your preferences and improve your browsing experience.' },
      { heading: 'Types of cookies used', body: '[PENDING — UAI legal counsel]' },
      { heading: 'Cookie table', body: '[PENDING — UAI legal counsel]' },
      { heading: 'How to manage cookies', body: 'You can accept or reject non-essential cookies using the banner that appears on your first visit. You can also manage cookies through your browser settings at any time.' },
    ],
  },
  termsAndConditions: {
    title: 'Terms and Conditions',
    sections: [
      { heading: 'Subject matter', body: 'This agreement governs the provision of Spanish as a Foreign Language teaching services by the Centro de Enseñanza Integral del Español (CEIE) of Universidad Adolfo Ibáñez (hereinafter, "the Centre") to the enrolled participant (hereinafter, "the Student"). The service includes classes, teaching materials specified in the programme, and the cultural activities described in the programme sheet.' },
      { heading: 'Contract formation', body: 'The contract is formalised through the following steps: (1) Submission of the admission application form at ceie.uai.cl/en/admissions. (2) Receipt of written enrolment confirmation from the Centre. (3) Payment of 30% of the total programme fee as a place deposit. The contract is deemed concluded once the Centre issues the enrolment confirmation and the Student completes the deposit payment. No place is held without the corresponding payment. Programme conditions (level, schedule, group) may be adjusted for justified reasons before the start date, with prior notice to the Student.' },
      { heading: 'Prices and payment methods', body: 'All prices are expressed in US dollars (USD). The Centre reserves the right to update prices for future cohorts; the price confirmed at the time of enrolment applies to that period. Payment structure: 30% deposit at the time of enrolment; remaining 70% due no later than 5 business days before the programme start date. Accepted payment methods: international bank transfer (SWIFT) — bank charges are the Student\'s responsibility; Visa / Mastercard credit card; institutional agreement or sponsorship letter, subject to prior Centre approval. Failure to pay the balance by the deadline entitles the Centre to cancel the booking without refunding the deposit.' },
      { heading: 'Date modifications', body: 'Students may request a change to the start date with a minimum of 15 business days\' notice, subject to availability in the new date. A maximum of one date change per enrolment is permitted. Requests made with less than 15 business days\' notice will be assessed individually, and the Centre may apply an administrative fee equivalent to 10% of the total programme cost. The Centre reserves the right to modify dates, schedules, or assigned instructor for justified reasons, providing at least 7 days\' notice to the Student. In such cases, the Student may choose to: (a) accept the new date or group, or (b) receive a full refund of amounts paid.' },
      { heading: 'Cancellation and refund', body: 'All cancellations must be submitted in writing to caroline.cortes@uai.cl with confirmed receipt. 45 or more days before the programme start date: no charge. Between 15 and 44 days before start: a charge equivalent to 50% of the total programme cost. Less than 15 days before start: no refund. Student force majeure: duly justified cases will be assessed individually; amounts paid will be refunded if the force majeure cause is adequately substantiated. Centre force majeure: if the CEIE must cancel a programme due to force majeure affecting the Centre, a full refund of all amounts paid will be issued. The programme start date includes the first day of classes, the orientation day, or any prior programme activity.' },
      { heading: 'Student obligations', body: 'The Student undertakes to: meet the minimum attendance rate required for the programme (80% for the Semester Programme; 85% for the Intensive Programme); comply with the UAI internal regulations and Centre community standards; participate in the diagnostic assessment prior to the programme start; notify the Centre in reasonable advance of any absence or situation affecting their participation; make full payment of the programme fee within the stipulated deadlines; use Centre facilities, digital resources, and materials responsibly.' },
      { heading: 'CEIE obligations', body: 'The Centre undertakes to: deliver the teaching service described in the contracted programme with qualified instructors; ensure the availability of classrooms, materials, and activities stated in the programme sheet; notify the Student of any changes to the schedule, instructor, or activities with the advance notice specified in these terms; issue the relevant certificate to students who meet the attendance and completion requirements; protect the Student\'s personal data in accordance with applicable Chilean law; respond to enquiries and requests within 2 business days.' },
      { heading: 'Intellectual property of materials', body: 'All teaching materials provided or used during the programme (notes, presentations, exercises, recordings, digital resources) are the intellectual property of Universidad Adolfo Ibáñez or its instructors and suppliers, protected under Chilean Intellectual Property Law No. 17,336. The Student is authorised to use them solely for personal learning purposes. Any total or partial reproduction, distribution, commercialisation, or publication on digital platforms is expressly prohibited without written authorisation from the Centre.' },
      { heading: 'Applicable law', body: 'Chilean law. Jurisdiction: courts of Viña del Mar, Chile.' },
    ],
  },
  withdrawalRights: {
    title: 'Withdrawal Rights',
    sections: [
      { heading: 'Right of withdrawal', body: 'The Student has the right to withdraw from the contract entered into with the CEIE of Universidad Adolfo Ibáñez within 14 calendar days, without giving any reason and without incurring any penalty. This right applies to contracts concluded remotely (online) or away from the Centre\'s premises. Withdrawal results in the termination of the contract and a full refund of all amounts paid, except in the cases expressly listed below.' },
      { heading: 'Deadline (14 calendar days)', body: 'The 14-calendar-day period begins on the day after the contract is concluded, that is, from the date on which the Centre issues the enrolment confirmation and the Student makes the deposit payment. If the deadline falls on a Saturday, Sunday, or public holiday, it is extended to the next business day. To respect the deadline, it is sufficient for the withdrawal notice to be sent before the period expires.' },
      { heading: 'Procedure', body: 'To exercise withdrawal rights, send written notice to caroline.cortes@uai.cl within the stipulated period, stating: your full name, the enrolled programme, the date of contract conclusion, and a clear expression of your intention to withdraw. We recommend using the withdrawal form available at the bottom of this page. The Centre will acknowledge receipt of your notice and process the refund within the stated timeframe.' },
      { heading: 'Effects of withdrawal', body: 'Once the right of withdrawal has been validly exercised, the Centre will refund all amounts paid in full within a maximum of 14 calendar days of receiving the withdrawal notice, using the same payment method as the original transaction, unless otherwise expressly agreed. If the programme has already begun to be delivered during the withdrawal period at the Student\'s express request, the refund will be proportional to the portion of the service not yet received.' },
      { heading: 'Exceptions', body: 'The right of withdrawal does not apply in the following cases: (a) where the service has been fully performed before the end of the 14-day period, provided the Student expressly requested early commencement and acknowledged the loss of the right of withdrawal; (b) where the programme start date falls before the end of the 14-day period and the Student expressly consented to this at the time of contracting; (c) contracts for personalised services prepared to the Student\'s specifications, where execution has begun with the Student\'s consent.' },
      { heading: 'Withdrawal form', body: 'To facilitate the exercise of this right, you may use the following template: "I, [full name], residing at [address], hereby give notice of my intention to withdraw from the contract for Spanish language teaching services entered into with the CEIE of Universidad Adolfo Ibáñez, for the programme [programme name], concluded on [date]. I request a refund of the amounts paid by the same payment method used. Date: [date]. Signature: [signature]." Send to caroline.cortes@uai.cl with the subject line: WITHDRAWAL — [programme name].' },
    ],
  },
}
