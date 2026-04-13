const projectsData = [
  {
    id: 1,
    slug: 'unicare',
    title: 'Unicare',
    shortTitle: 'Hospital Management System',
    category: 'Academic Database Project',
    desc: 'A role-based hospital management system with separate user panels, appointment workflows, and hospital service management.',
    longDesc:
      'Unicare is a role-based hospital management system developed as an undergraduate database project. The goal was to simulate a realistic healthcare platform where different types of users could access services and manage hospital operations based on their roles. The system focuses on structured data handling, access control, and workflow-driven hospital services such as appointments, ambulance requests, and blood bank access.',
    problem:
      'Hospitals involve multiple actors such as admins, doctors, staff, and patients, each requiring different permissions and workflows. Managing all of these through separate disconnected processes creates inefficiency and weakens data organization.',
    solution:
      'Unicare brings these workflows into a centralized database-driven platform. It uses role-based login, dedicated user panels, and structured CRUD operations so users can interact only with the features relevant to their role.',
    tags: ['MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    techStack: ['MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/saibsadman/Unicare-CSE370-Bracu_Database_Project_Mysql',
    demo: '#',
    coverImage: '/screenshots/Unicare/1 (2).png',
    screenshots: [
      '/screenshots/Unicare/1 (1).png',
      '/screenshots/Unicare/1 (2).png',
      '/screenshots/Unicare/1 (3).png',
      '/screenshots/Unicare/1 (4).png',
      '/screenshots/Unicare/1 (5).png',
      '/screenshots/Unicare/1 (6).png',
      '/screenshots/Unicare/1 (7).png',
    ],
    featured: [
      'Role-based authentication and redirection',
      'Separate panels for Admin, Doctor, Staff, Patient, and Normal Users',
      'Doctor appointment booking and management',
      'Blood bank service workflow',
      'Ambulance booking support',
      'Admin-level user and system control',
    ],
    portfolioPoints: [
      'Demonstrates practical database design and CRUD operations',
      'Shows understanding of access control and role-based systems',
      'Represents early experience in building structured multi-user applications',
      'Strong academic project for explaining system workflow design',
    ],
    note:
      'This was a group academic project built for CSE370. The strongest focus remained on database design, role-based access, and service workflows.',
  },

  {
    id: 2,
    slug: 'electromaniax',
    title: 'ElectroManiaX',
    shortTitle: 'Smart E-Commerce Platform for Laptops & PC Components',
    category: 'Full-Stack Academic Project',
    desc: 'A Django-based e-commerce system for laptops and PC parts with filtering, cart flow, wishlist, transactions, and a custom PC builder.',
    longDesc:
      'ElectroManiaX is a full-stack e-commerce web application built for buying laptops, PC components, and custom PC builds. It was developed as part of a System Analysis and Design course and combines real-world e-commerce functionality with domain-specific tools like component filtering and a PC builder. The project reflects both software design thinking and practical implementation using Django.',
    problem:
      'Traditional e-commerce systems often handle product browsing and checkout, but they do not support more interactive hardware-centric workflows such as comparing parts, filtering technical specifications, or building a full PC configuration dynamically.',
    solution:
      'ElectroManiaX extends a typical online store into a smarter shopping platform by adding advanced filtering, component browsing, purchase workflows, and a PC builder tool that calculates total cost and estimated power usage.',
    tags: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap', 'SQLite'],
    techStack: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap', 'SQLite'],
    github: 'https://github.com/saibsadman/ElectroManiaX-Laptop-Pc-Part-Online-Store',
    demo: '#',
    coverImage: '/screenshots/ElectroManiaX/homepage.png',
    screenshots: [
      '/screenshots/ElectroManiaX/homepage.png',
      '/screenshots/ElectroManiaX/login page.png',
      '/screenshots/ElectroManiaX/user dashboard.png',
      '/screenshots/ElectroManiaX/admin dashboard.png',
      '/screenshots/ElectroManiaX/featured products.png',
      '/screenshots/ElectroManiaX/featured catagories.png',
      '/screenshots/ElectroManiaX/cart page.png',
      '/screenshots/ElectroManiaX/order details.png',
      '/screenshots/ElectroManiaX/pc builder.png',
    ],
    featured: [
      'User authentication and dashboard',
      'Advanced product filtering and search',
      'Shopping cart and wishlist system',
      'Custom PC builder with price and wattage estimation',
      'Multiple payment-related features',
      'Admin controls for products, orders, reviews, and discounts',
    ],
    portfolioPoints: [
      'Shows full-stack development with Django',
      'Demonstrates modular e-commerce workflow design',
      'Highlights product customization through PC builder logic',
      'Good example of combining academic requirements with practical features',
    ],
  },

  {
    id: 3,
    slug: 'whispersafe',
    title: 'WhisperSafe',
    shortTitle: 'Anonymous Reporting + Secure Follow-Up Platform',
    category: 'Security-Focused Full-Stack Project',
    desc: 'A privacy-first platform for anonymous reporting with encrypted follow-up communication, secure tracking IDs, and admin triage tools.',
    longDesc:
      'WhisperSafe is a privacy-focused reporting platform that allows users to submit sensitive incident reports without creating accounts. After submission, the system provides a unique tracking ID so the reporter can securely continue follow-up communication without revealing identity. On the administrative side, the platform includes a secure triage dashboard with filtering, prioritization, and risk analysis features. This project demonstrates full-stack engineering with a strong emphasis on privacy, security, and applied encryption.',
    problem:
      'Many reporting systems either require identity disclosure or provide weak follow-up mechanisms, making them unsuitable for sensitive incidents where anonymity and secure communication are critical.',
    solution:
      'WhisperSafe solves this by enabling anonymous report submission, encrypted storage, secure tracking-ID-based follow-up, and a protected administrative command center for reviewing and managing reports safely.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'Node.js', 'AES-GCM'],
    techStack: ['Next.js', 'TypeScript', 'Prisma ORM', 'SQLite', 'Node.js', 'AES-GCM Encryption'],
    github: 'https://github.com/saibsadman/Whispersafe',
    demo: '#',
    coverImage: '/screenshots/Whispersafe/homepage.png',
    screenshots: [
      '/screenshots/Whispersafe/homepage.png',
      '/screenshots/Whispersafe/submit report.png',
      '/screenshots/Whispersafe/followup page.png',
      '/screenshots/Whispersafe/admin login.png',
      '/screenshots/Whispersafe/admin page.png',
      '/screenshots/Whispersafe/admin report page.png',
    ],
    featured: [
      'Anonymous report submission without account creation',
      'Unique tracking ID for secure follow-up',
      'AES-GCM encrypted message storage',
      'Encrypted file attachment support',
      'Protected admin authentication and routes',
      'Priority-based triage and risk analysis dashboard',
    ],
    portfolioPoints: [
      'Strong example of secure system design',
      'Demonstrates applied cryptography in a product context',
      'Shows full-stack architecture with privacy-first decisions',
      'Excellent project for discussing real-world security tradeoffs',
    ],
    note:
      'This is one of the strongest projects because it combines meaningful product design, privacy engineering, backend architecture, and security-focused implementation.',
  },

  {
    id: 4,
    slug: 'proofplate',
    title: 'ProofPlate',
    shortTitle: 'Trust-Centered Food Review Platform',
    category: 'Product-Style Full-Stack Project',
    desc: 'A full-stack restaurant review platform focused on authenticity, moderation, and trust using photo-backed reviews and image verification logic.',
    longDesc:
      'ProofPlate is a food review platform designed around trust and moderation. Instead of acting like a simple review app, it focuses on making reviews more believable through photo-backed submissions, verification signals, duplicate image detection, and admin moderation workflows. Users can post restaurant reviews, upload meal photos, browse restaurant details, and vote on vibes, while admins manage restaurants, menus, logos, moderation, and reference images. The project feels closer to a real product system than a classroom CRUD application.',
    problem:
      'Food review platforms often struggle with authenticity, spam, fake uploads, and weak moderation. Reviews may be unstructured, low quality, or visually untrustworthy.',
    solution:
      'ProofPlate addresses this by combining structured reviews with image verification features such as hash-based duplicate detection, EXIF analysis, dish reference matching, and moderation dashboards for admin review workflows.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Tailwind'],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
    github: 'https://github.com/saibsadman/Proofplate--Food-review-system',
    demo: '#',
    coverImage: '/screenshots/Proofplate/user-login.png',
    screenshots: [
      '/screenshots/Proofplate/feed.png',
      '/screenshots/Proofplate/user-login.png',
      '/screenshots/Proofplate/user registration.png',
      '/screenshots/Proofplate/resturants page.png',
      '/screenshots/Proofplate/inside resturant page 1.png',
      '/screenshots/Proofplate/new-review page.png',
      '/screenshots/Proofplate/user profile page.png',
      '/screenshots/Proofplate/edit profile page.png',
      '/screenshots/Proofplate/admin login.png',
      '/screenshots/Proofplate/admin view_restaurants.png',
      '/screenshots/Proofplate/admin manage menu.png',
      '/screenshots/Proofplate/admin_flags.png',
    ],
    featured: [
      'Photo-backed restaurant reviews',
      'Duplicate and near-duplicate image detection',
      'EXIF-based trust and authenticity signals',
      'Dish reference image matching',
      'Restaurant vibe voting and structured review system',
      'Admin moderation dashboard with menu workflows',
    ],
    portfolioPoints: [
      'Shows product thinking beyond basic CRUD',
      'Demonstrates image-processing and moderation logic',
      'Combines frontend polish with backend workflows',
    ],
    note:
      'ProofPlate stands out because it blends modern UI, trust systems, moderation workflows, and image-based review verification into one product-style application.',
  },

  {
    id: 5,
    slug: 'estateshield',
    title: 'EstateShield',
    shortTitle: 'Digital Will Manager with Client-Side Encryption',
    category: 'Advanced Security Project',
    desc: 'A digital inheritance system with client-side encryption, trustee recovery, deadman switch logic, tamper-evident audit logs, and encrypted attachments.',
    longDesc:
      'EstateShield is a security-focused digital inheritance platform built around strong client-side encryption and secure recovery workflows. Sensitive vault data is encrypted in the browser before reaching the server, ensuring the backend stores ciphertext only. The project includes a deadman switch, trustee-based release flow, 2-of-N recovery design, tamper-evident audit logging, and encrypted file attachments. It demonstrates advanced applied cryptography, careful workflow engineering, and secure product design.',
    problem:
      'Digital inheritance systems handle extremely sensitive information, yet many solutions depend heavily on trusting the server with user secrets or provide weak recovery and auditing workflows.',
    solution:
      'EstateShield reduces trust in the server by encrypting vault contents on the client side, introduces trustee-based release and recovery mechanisms, and adds audit verification so integrity and workflow transparency are built into the system.',
    tags: ['React', 'TypeScript', 'Vite', 'Node.js', 'Prisma', 'SQLite', 'WebCrypto'],
    techStack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Prisma', 'SQLite', 'WebCrypto API'],
    github: 'https://github.com/saibsadman/Digital-Will-Manager--EstateShield',
    demo: '#',
    coverImage: '/screenshots/EstateShield/login page.png',
    screenshots: [
      '/screenshots/EstateShield/login page.png',
      '/screenshots/EstateShield/register page.png',
      '/screenshots/EstateShield/dashboard 1.png',
      '/screenshots/EstateShield/dashboard 2.png',
      '/screenshots/EstateShield/qr code.png',
      '/screenshots/EstateShield/trustee portal 1.png',
      '/screenshots/EstateShield/trustee portal 2.png',
      '/screenshots/EstateShield/trustees page.png',
      '/screenshots/EstateShield/audit page.png',
    ],
    featured: [
      'Client-side AES-GCM encrypted vault',
      'Ciphertext-only server storage',
      'Deadman switch with release workflow',
      '2-of-N trustee recovery mechanism',
      'Tamper-evident audit log with verification',
      'Encrypted PDF and image attachments',
    ],
    portfolioPoints: [
      'Shows advanced applied cryptography concepts',
      'Demonstrates secure workflow engineering',
      'Strong example of client/server trust boundary design',
    ],
    note:
      'EstateShield is one of the most technically impressive projects because it combines cryptography, security UX, recovery workflows, and system integrity verification.',
  },
];

export default projectsData;