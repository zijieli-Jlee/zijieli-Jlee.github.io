export const personalInfo = {
  name: "Zijie Li",
  title: "Researcher on Generative Models",
  location: "San Jose, CA",
  email: "zjli.jlee@gmail.com",
  github: "https://github.com/zijieli-Jlee/",
  linkedin: "https://www.linkedin.com/in/zijie-li-827976103/",
  scholar: "https://scholar.google.com/citations?hl=zh-CN&user=PRESuXcAAAAJ",
  cv: "/data/Zijie_CV_2025_updated.pdf",
  profilePicture: "/profile.jpg",
  heroDescription:
    "I work on generative modeling for image generation, with a focus on building stronger visual generation systems with enhanced multimodal capabilities. My recent work explores unified text-image generation and understanding, with earlier research connecting numerical solvers, graph networks, and operator learning for physics prediction.",
};

export const workExperience = [
  {
    company: "ByteDance Seed, Image Generation",
    location: "San Jose, CA",
    position: "Research Scientist",
    period: "2025 - Present",
    achievements: [
      "Work on multi-modal post-training of image generation model.",
    ],
  },
  {
    company: "ByteDance Seed, Image Generation",
    location: "San Jose, CA",
    position: "Research Intern",
    period: "Summer 2024",
    achievements: [
      "Research on unified text/image generation with a single diffusion model.",
      "Developed experiments that later informed Dual Diffusion for unified image generation and understanding.",
    ],
  },
  {
    company: "Carnegie Mellon University, Mechanical and AI Lab",
    location: "Pittsburgh, PA",
    position: "PhD",
    period: "2020 - 2025",
    achievements: [
      "Designed neural surrogate models for PDEs, fluid dynamics, molecular dynamics, and point-cloud motion.",
      "Built Transformer and graph-network architectures informed by numerical simulation structure.",
      "Published peer-reviewed work at CVPR, NeurIPS, ICLR, TMLR, Journal of Computational Physics.",
    ],
  },
];

export const education = [
  {
    institution: "Carnegie Mellon University",
    location: "Pittsburgh, PA",
    degree: "PhD, Mechanical Engineering",
    period: "2019 - 2025",
    achievements: [
      "Research at the intersection of numerical physics simulation and deep learning.",
      "Advised by Amir Barati Farimani in the Mechanical and AI Lab.",
    ],
  },
];

export const skills = [
  {
    category: "Generative AI",
    items: [
      "Diffusion models",
      "Image generation",
      "Multimodal generation",
      "Text-image modeling",
      "Vision-language systems",
    ],
  },
  {
    category: "Modeling",
    items: [
      "Transformers",
      "Graph neural networks",
      "Operator learning",
      "Axial/factorized attention",
      "Few-shot generation",
    ],
  },
  {
    category: "Scientific ML",
    items: [
      "PDE surrogate modeling",
      "Eulerian fluid simulation",
      "Particle dynamics",
      "Molecular dynamics",
      "Flow reconstruction",
    ],
  },
  {
    category: "Engineering",
    items: [
      "PyTorch",
      "Distributed training",
      "Experiment design",
      "Model evaluation",
      "Research code release",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "C++", "MATLAB", "JavaScript", "HTML/CSS"],
  },
];

export const projects = [
  {
    title: "MMCORE",
    subtitle: "Multimodal connection with aligned visual embeddings",
    image: "/images/mmcore-visual.svg",
    tags: ["Multimodal Generation", "Image Editing", "2026"],
    description:
      "A unified framework for multimodal image generation and editing that transfers VLM understanding into diffusion-based visual synthesis through representation-aligned latent embeddings.",
    links: [
      { label: "Project Page", href: "https://zijieli-jlee.github.io/mmcore-website/" },
      { label: "Paper", href: "https://arxiv.org/abs/2604.19902" },
    ],
  },
  {
    title: "Dual Diffusion",
    subtitle: "Unified Image Generation and Understanding",
    image: "/images/mask_diff.gif",
    tags: ["Diffusion", "Multimodal AI", "CVPR 2025"],
    description:
      "A unified image-text generation framework that combines discrete text diffusion with continuous image diffusion, turning a text-to-image model into a vision-language model through fine-tuning.",
    links: [
      { label: "Paper", href: "https://www.arxiv.org/abs/2501.00289" },
      { label: "Code", href: "https://github.com/zijieli-Jlee/Dual-Diffusion" },
    ],
  },
  {
    title: "Scalable Transformer for PDE Surrogates",
    subtitle: "Factorized attention for high-dimensional physics",
    image: "/images/FactFormer-Schematic.png",
    tags: ["Transformer", "PDE", "NeurIPS 2023"],
    description:
      "An axial factorized attention scheme that improves Transformer scalability on multi-dimensional PDE surrogate modeling tasks.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2305.17560" },
      { label: "Code", href: "https://github.com/BaratiLab/FactFormer" },
    ],
  },
  {
    title: "Physics-Informed Diffusion",
    subtitle: "High-fidelity flow field reconstruction",
    image: "/images/diffusion_sample.gif",
    tags: ["Diffusion", "Fluid Simulation", "JCP"],
    description:
      "A diffusion model for flow-field reconstruction that incorporates residual information into the reverse diffusion process.",
    links: [
      {
        label: "Paper",
        href: "https://www.sciencedirect.com/science/article/pii/S0021999123000670",
      },
      {
        label: "Code",
        href: "https://github.com/BaratiLab/Diffusion-based-Fluid-Super-resolution",
      },
    ],
  },
  {
    title: "Operator Transformer",
    subtitle: "Discretization-adaptive operator learning",
    image: "/images/Schematic-OFormer.png",
    tags: ["Operator Learning", "Transformer", "TMLR"],
    description:
      "A Transformer encoder-decoder structure for PDE operator learning that adapts across discretization types.",
    links: [
      {
        label: "Paper",
        href: "https://openreview.net/forum?id=EPPqt3uERT&referrer=%5BTMLR%5D(%2Fgroup%3Fid%3DTMLR)",
      },
      { label: "Code", href: "https://github.com/BaratiLab/OFormer" },
    ],
  },
];

export const researchHighlights = [
  {
    name: "MMCORE: MultiModal COnnection with Representation Aligned Latent Embeddings",
    issuer: "arXiv",
    date: "2026",
    type: "Preprint",
    position: "First author",
    href: "https://arxiv.org/abs/2604.19902",
  },
  {
    name: "Dual Diffusion for Unified Image Generation and Understanding",
    issuer: "CVPR",
    date: "2025",
    type: "Peer-reviewed publication",
    position: "Equal contribution",
    href: "https://www.arxiv.org/abs/2501.00289",
  },
  {
    name: "Scalable Transformer for PDE Surrogate Modeling",
    issuer: "NeurIPS",
    date: "2023",
    type: "Peer-reviewed publication",
    position: "First author",
    href: "https://arxiv.org/abs/2305.17560",
  },
  {
    name: "Transformer for Partial Differential Equations' Operator Learning",
    issuer: "TMLR",
    date: "2023",
    type: "Peer-reviewed publication",
    position: "First author",
    href: "https://openreview.net/forum?id=EPPqt3uERT&referrer=%5BTMLR%5D(%2Fgroup%3Fid%3DTMLR)",
  },
  {
    name: "Journal and conference reviewing",
    issuer: "NMI, TNNLS, TMLR, NeurIPS, ICLR, ICML, CVPR",
    date: "Ongoing",
    type: "Service",
    position: "Reviewer",
    href: "https://scholar.google.com/citations?hl=zh-CN&user=PRESuXcAAAAJ",
  },
];
