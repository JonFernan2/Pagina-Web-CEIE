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
      { label: 'Open Calls',              href: 'https://postula.uai.cl/' },
    ],
  },
  col3: {
    title: 'Programs',
    links: [
      { label: 'Semester Program',       href: '/en/programs-and-courses/semester' },
      { label: 'Intensive Programme',   href: '/en/programs-and-courses/intensive' },
      { label: 'Specific Purposes',      href: '/en/programs-and-courses/specific-purposes' },
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
    subtitle: 'Three modalities designed for distinct academic and professional profiles',
    items: [
      {
        nombre: 'Spanish Semester Programme',
        descripcion: 'Courses in Spanish as a Foreign Language (levels A1–C1), thematic elective courses, and UAI Core Programme courses.',
        nivel: 'A1 to C1',
        duracion: '17 weeks',
        horario: 'Monday to Friday, 08:30 – 18:55',
        grupoMax: 'Max. 24 students',
        precioReferencial: 'From USD 950/course',
        href: '/en/programs-and-courses/semester',
      },
      {
        nombre: 'Intensive Spanish Programme',
        descripcion: 'Intensive Spanish for 2 or 4 weeks.',
        nivel: 'A1 to B2',
        duracion: '2 to 4 weeks',
        horario: 'Classes Monday to Thursday · Cultural activities on Fridays',
        grupoMax: 'Max. 15 students',
        precioReferencial: 'USD 900 (2 weeks) · USD 1,800 (4 weeks)',
        href: '/en/programs-and-courses/intensive',
      },
      {
        nombre: 'Spanish for Specific Purposes Programme',
        descripcion: 'Short-term program custom-designed to the specific needs, interests, and objectives of each individual, group, or institution.',
        nivel: 'According to requirements',
        duracion: '1 to 2 weeks (tailored)',
        horario: 'Coordinated with the participant or institution',
        grupoMax: 'Variable according to institutional agreement',
        precioReferencial: 'USD 900 – 1,500',
        href: '/en/programs-and-courses/specific-purposes',
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
    subtitle: 'Three modalities aligned with the Common European Framework of Reference (CEFR) and the Instituto Cervantes Curricular Plan.',
  },
  intro: {
    p1: 'All CEIE programs are designed under the communicative approach established by Instituto Cervantes. Each level corresponds to a descriptor of the CEFR, from A1 (beginner) to C1 (advanced).',
    p2: 'Students receive a certificate issued by Universidad Adolfo Ibáñez upon completing each program. Academic equivalencies are established through UAI\'s international partnership agreements.',
  },
}

export const ABOUT_EN = {
  meta: {
    title: 'About Us | CEIE UAI',
    description: 'Learn about CEIE: mission, vision, values, team and facilities at UAI\'s Viña del Mar campus.',
  },
  hero: {
    h1: 'About CEIE',
    subtitle: 'CEIE UAI (Centro de Enseñanza Integral del Español) is an academic unit of Universidad Adolfo Ibáñez, linking the Faculty of Liberal Arts and the Directorate of International Relations. It is conceived as a space for teaching Spanish as a foreign language, for community engagement and for international outreach, founded on academic excellence and the distinctive hallmark of the Liberal Arts.',
  },
  sections: {
    mision: {
      title: 'Mission, vision and values',
      mision: 'To provide our students with the essential linguistic and intercultural knowledge for a high-quality personal, academic and professional education, combining Spanish language teaching with the formative experience of the Liberal Arts. We create a multilingual academic environment that fosters students\' development as social agents, autonomous learners and intercultural speakers.',
      vision: 'To consolidate our position as a competitive centre for Spanish language teaching, committed to academic excellence and quality of service. We aspire to stand out for our continuous improvement and for our meaningful role within a university community recognised nationally and internationally, with a distinctive focus on the Liberal Arts.',
      valores: 'The institutional values that guide the Centre include a sense of belonging, professional ethics and respect, tolerance of diversity, an open attitude towards educational innovation, and leadership, initiative and professionalism in all its activities.',
    },
    espacios: {
      title: 'Our Facilities',
      spaces: [
        {
          nombre: 'Spanish Language Classrooms',
          descripcion: 'Equipped with audiovisual technology, flexible layouts, and capacity for up to 24 students. Designed to support active, participatory learning.',
          alt: 'Spanish language classroom at UAI Viña del Mar campus, with movable chairs, whiteboard, and projector, capacity for 24 students.',
        },
        {
          nombre: 'UAI Library',
          descripcion: 'A collection of Spanish and English language resources available to international students, including literature, humanities, and social sciences. Quiet reading rooms are also available.',
          alt: 'Universidad Adolfo Ibáñez library at Viña del Mar campus, with bookshelves and individual reading area.',
        },
        {
          nombre: 'Study Rooms',
          descripcion: 'Individual and group study spaces located in Building B on campus. Available by reservation through WebC.',
          alt: 'Students working at a whiteboard in a study room at UAI Viña del Mar campus.',
        },
        {
          nombre: 'Gym and Sports Activities',
          descripcion: 'Access to the sports facilities at the Viña del Mar Campus, including a gym, weight training room, workout spaces, and recreational areas. Students may also participate in sports workshops and activities, subject to availability.',
          alt: 'Sports facilities at UAI Viña del Mar campus, including gym and training spaces.',
        },
        {
          nombre: 'Viña del Mar — Campus setting',
          descripcion: 'The Universidad Adolfo Ibáñez campus enjoys a privileged setting, surrounded by nature and overlooking the Pacific Ocean. Located just 15 minutes from Valparaíso and approximately 1.5 hours from Santiago, it offers students a peaceful university environment with easy access to some of the region\'s main cultural and tourist attractions.',
          alt: 'UAI Viña del Mar campus facing the Pacific Ocean, with the city of Viña del Mar in the background.',
        },
        {
          nombre: 'Cultural activities',
          descripcion: 'Excursions to Casablanca Valley wineries, heritage tours of Valparaíso, and seminars with UAI academics. An integrated component of all programs.',
          alt: 'International CEIE students in cultural and academic activities at UAI Viña del Mar campus.',
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
      { heading: 'Website responsibility', body: 'The website ceie.uai.cl is administered by the Centro de Enseñanza Integral del Español (CEIE), operating under the Directorate of International Relations of Universidad Adolfo Ibáñez. For enquiries relating to the website\'s content, please contact: caroline.cortes@uai.cl' },
      { heading: 'Intellectual property', body: 'All website content (texts, images, photographs, logos, graphic design, videos, and other elements) is the property of Universidad Adolfo Ibáñez or its licensors, and is protected by Chilean Intellectual Property Law No. 17,336 and other applicable legislation. Any total or partial reproduction, distribution, transformation, or public communication without the express written authorisation of the rights holder is prohibited. Reproduction of content for personal, non-commercial purposes is permitted provided the source is credited. The institutional brand, logo, and the name CEIE · UAI are protected distinctive marks; their unauthorised use is expressly prohibited.' },
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
